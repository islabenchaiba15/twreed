"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Switch } from "@/components/ui/switch";
import { useFormContext } from "@/contexts/form-context";

const shippingCompanies = [
  {
    id: "yolidine",
    name: "Yolidine",
    logo: "/yalidine.png",
    description: "We cover all regions of Algeria. We provide a fast delivery service.",
  },
  {
    id: "fast-tour",
    name: "Fast Tour",
    logo: "/kazi.png",
    description: "We cover all regions of Algeria. We provide a fast delivery service.",
  },
  {
    id: "world-wide",
    name: "World Wide Express",
    logo: "/norh.png",
    description: "We cover all regions of Algeria. We provide a fast delivery service.",
  },
  {
    id: "magneto",
    name: "Magneto Delivery",
    logo: "/mystro.png",
    description: "We cover all regions of Algeria. We provide a fast delivery service.",
  },
  {
    id: "zs",
    name: "ZS Express",
    logo: "/zrexpress.jpg",
    description: "We cover all regions of Algeria. We provide a fast delivery service.",
  },
];

const formSchema = z.object({
  shippingCompanies: z.array(z.string()),
});

export function ShippingForm({ onNext, onPrevious }) {
  const { formState, updateShippingInfo } = useFormContext();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      shippingCompanies: formState.shippingInfo.shippingCompanies,
    },
  });

  function onSubmit(values) {
    updateShippingInfo(values);
    console.log("Final Form Submission:", formState);
    onNext();
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-semibold mb-2">Choose Shipping Companies</h1>
        <p className="text-gray-500">
          Choose your store with several local delivery companies. You will be able to add additional settings, later from the control panel.
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="shippingCompanies"
            render={({ field }) => (
              <FormItem>
                <div className="space-y-4">
                  {shippingCompanies.map((company) => (
                    <div key={company.id} className="flex items-center justify-between space-x-4 rounded-lg border p-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                          <img
                            src={company.logo || "/placeholder.svg"}
                            alt={company.name}
                            className="w-8 h-8 object-contain"
                          />
                        </div>
                        <div>
                          <h3 className="font-medium">{company.name}</h3>
                          <p className="text-sm text-gray-500">{company.description}</p>
                        </div>
                      </div>
                      <FormControl>
                        <Switch
                          checked={field.value?.includes(company.id)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              field.onChange([...(field.value || []), company.id]);
                            } else {
                              field.onChange((field.value || []).filter((id) => id !== company.id));
                            }
                          }}
                        />
                      </FormControl>
                    </div>
                  ))}
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex justify-between pt-8">
            <Button type="button" variant="outline" onClick={onPrevious}>
              Previous
            </Button>
            <div className="flex items-center gap-3">
            <Button type="submit" variant="outline">
              Continue later
            </Button>
            <Button type="submit" className="bg-[#FF5C00] hover:bg-[#FF5C00]/90 px-5 md:px-10">
              Finish 
            </Button>
            </div>
            
          </div>
        </form>
      </Form>
    </div>
  );
}
