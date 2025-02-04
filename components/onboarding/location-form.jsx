"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { MapComponent } from "./map-component";
import { useFormContext } from "@/contexts/form-context";

const formSchema = z.object({
  isDigitalStore: z.boolean(),
  address: z.string().min(1, "Address is required"),
  wilaya: z.string().min(1, "Wilaya is required"),
  commune: z.string().min(1, "Commune is required"),
  postalCode: z.string().min(1, "Postal code is required"),
  longitude: z.number(),
  latitude: z.number(),
});

export function LocationForm({ onNext, onPrevious }) {
  const { formState, updateLocationInfo } = useFormContext();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      isDigitalStore: false,
      address: "",
      wilaya: "",
      commune: "",
      postalCode: "",
      longitude: 0,
      latitude: 0,
      ...formState.locationInfo,
    },
  });

  function onSubmit(values) {
    console.log("Form values:", values)
    updateLocationInfo(values);
    onNext();
  }

  const handleSelectLocation = (lng, lat, address) => {
    form.setValue("longitude", lng);
    form.setValue("latitude", lat);
    form.setValue("address", address);
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-semibold mb-2">Select your location</h1>
        <p className="text-gray-500">
          Specify the primary address that helps locate your store.
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="isDigitalStore"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                <div className="space-y-0.5">
                  <FormLabel className="text-base">Digital store</FormLabel>
                  <div className="text-sm text-muted-foreground">
                    Enable this if you are an eligible store. Digital stores do not
                    require a physical address.
                  </div>
                </div>
                <FormControl>
                  <Switch checked={field.value} onCheckedChange={field.onChange} />
                </FormControl>
              </FormItem>
            )}
          />

          {!form.watch("isDigitalStore") && (
            <>
              <div className="relative w-full rounded-lg overflow-hidden">
                <MapComponent
                  onSelectLocation={handleSelectLocation}
                  initialLng={form.getValues("longitude")}
                  initialLat={form.getValues("latitude")}
                />
                <div className="absolute top-2 right-2 bg-white rounded-md shadow-sm">
                  <Button variant="ghost" size="icon">
                    <Search className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem className="col-span-2">
                      <FormLabel>Address</FormLabel>
                      <FormControl>
                        <Input placeholder="Select location on map" {...field} readOnly />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="wilaya"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Wilaya</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="commune"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Commune</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="postalCode"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Postal Code</FormLabel>
                      <FormControl>
                        <Input placeholder="00000" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </>
          )}

<div className="flex justify-between pt-8">
            <Button type="button" variant="outline" onClick={onPrevious}>
              Previous
            </Button>
            <div className="flex items-center gap-3">
            <Button type="submit" variant="outline">
              Continue later
            </Button>
            <Button type="submit" className="bg-[#FF5C00] hover:bg-[#FF5C00]/90 px-5 md:px-10">
              Next 
            </Button>
            </div>
            
          </div>
        </form>
      </Form>
    </div>
  );
}
