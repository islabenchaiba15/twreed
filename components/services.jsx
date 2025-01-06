import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, Star } from "lucide-react";
import { categories, graphicDesignServices, services } from "@/lib/constants";
function Services() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12  p-8 ">
      {/* Suggested Categories */}
      <section>
        <h2 className="text-xl font-semibold mb-6">Catégories proposées</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {categories.map((category, index) => (
            <Card key={index} className="overflow-hidden cursor-pointer">
              <CardContent className="p-0 relative aspect-[3/4] ">
                <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black/30  z-10 "></div>
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover z-0 "
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 left-4 text-white z-20">
                  <h3 className="font-medium text-md my-1 z-20">
                    {category.descreption}
                  </h3>

                  <h3 className="font-semibold text-2xl text-white">
                    {category.title}
                  </h3>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <Button
          variant="link"
          className="text-orange-500 mt-4 flex items-center font-bold"
        >
          Voir tous
          <ChevronRight className="h-4 w-4 ml-1" />
        </Button>
      </section>

      {/* By Category - Graphic Design */}
      <section className="bg-gray-100 p-4 rounded-2xl">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">
            Meilleurs du <span className="uppercase">Graphic Design</span>
          </h2>
          <Button variant="link" className="text-foreground font-bold">
            Voir plus
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {services.map((service, index) => (
            <Card key={index} className="text-white border-none cursor-pointer">
              <CardContent className="p-0">
                <div className="aspect-[4/3] relative">
                  <Image
                    src={service.image}
                    alt={`Service by ${service.name}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full overflow-hidden relative">
                        <Image
                          src={service.image}
                          alt={service.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <span className="text-md font-semibold text-black">
                        {service.name}
                      </span>
                    </div>
                    <span className="text-sm font-semibold text-black px-2 py-0.5 bg-black/10 rounded">
                      Level {service.level}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-semibold text-black">
                      {service.rating}{" "}
                      <span className="font-medium">({service.reviews})</span>
                    </span>
                  </div>
                  <div className="text-sm">
                    <span className="font-semibold text-black">
                      From {service.price}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Services;
