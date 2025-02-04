"use client";

import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN || "";

export function MapComponent({ onSelectLocation, initialLng = 3, initialLat = 36 }) {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const marker = useRef(null);
  const [lng, setLng] = useState(initialLng);
  const [lat, setLat] = useState(initialLat);
  const [zoom, setZoom] = useState(5);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });

    map.current.on("move", () => {
      if (map.current) {
        setLng(parseFloat(map.current.getCenter().lng.toFixed(4)));
        setLat(parseFloat(map.current.getCenter().lat.toFixed(4)));
        setZoom(parseFloat(map.current.getZoom().toFixed(2)));
      }
    });

    map.current.on("click", (e) => {
      const { lng, lat } = e.lngLat;
      if (marker.current) {
        marker.current.setLngLat([lng, lat]);
      } else {
        marker.current = new mapboxgl.Marker().setLngLat([lng, lat]).addTo(map.current);
      }
      fetchAddress(lng, lat);
    });
  }, [lng, lat, zoom]);

  const fetchAddress = async (lng, lat) => {
    try {
      const response = await fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${lng},${lat}.json?access_token=${mapboxgl.accessToken}`
      );
      const data = await response.json();
      if (data.features && data.features.length > 0) {
        const address = data.features[0].place_name || "Address not found";
        onSelectLocation(lng, lat, address);
      } else {
        onSelectLocation(lng, lat, "Address not found");
      }
    } catch (error) {
      console.error("Error fetching address:", error);
      onSelectLocation(lng, lat, "Error fetching address");
    }
  };

  return (
    <div>
      <div ref={mapContainer} className="h-[400px] rounded-lg" />
    </div>
  );
}
