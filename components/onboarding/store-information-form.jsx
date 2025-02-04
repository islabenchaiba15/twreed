"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { ImageUpload } from "./image-upload"
import { useFormContext } from "@/contexts/form-context"
import { MultiSelect } from "../ui/multi-select"

const formSchema = z.object({
  logo: z.array(z.string()).min(1, "Logo is required"),
  storeName: z.string().min(2, {
    message: "Store name must be at least 2 characters.",
  }),
  businessActivity: z.string({
    required_error: "Please select a business activity.",
  }),
  storeUrl: z.string().url({
    message: "Please enter a valid URL.",
  }),
  categories: z.array(z.string()).min(1, "At least one category is required"),
  images: z.array(z.string()),
})

const categories = [
  { label: "Domain 1", value: "domain-1" },
  { label: "Domain 2", value: "domain-2" },
  { label: "Domain 3", value: "domain-3" },
  { label: "Domain 4", value: "domain-4" },
  { label: "Domain 5", value: "domain-5" },
]

const businessActivities = [
  { label: "Grossiste / Atelier", value: "grossiste" },
  { label: "Retail", value: "retail" },
  { label: "Service Provider", value: "service" },
]

export function StoreInformationForm({ onNext }) {
  const { formState, updateStoreInfo } = useFormContext()

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      logo: [],
      storeName: "",
      storeUrl: "",
      categories: [],
      images: [],
      ...formState.storeInfo,
    },
  })

  function onSubmit(values) {
    updateStoreInfo(values)
    onNext()
  }

  return (
    <div className="space-y-8 bg-white p-8 rounded-lg shadow-md">
      <div>
        <h1 className="text-2xl font-semibold mb-2">Add your store information</h1>
        <p className="text-gray-500">
          Fill in your store information and identify it to appear to your customers. You can edit all this information
          later.
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="logo"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Store logo</FormLabel>
                <FormControl>
                  <ImageUpload variant="single" images={field.value} onChange={field.onChange} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="space-y-4">
            <FormField
              control={form.control}
              name="storeName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Store name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your store name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="storeUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Store URL</FormLabel>
                  <FormControl>
                    <div className="flex rounded-md shadow-sm">
                      <span className="flex select-none items-center px-3 text-gray-500 bg-gray-100 rounded-l-md border border-r-0">
                        www.
                      </span>
                      <Input placeholder="mystore.com" {...field} className="rounded-l-none" />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="businessActivity"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Business activity</FormLabel>
                  <FormControl>
                    <MultiSelect
                      value={field.value ? [field.value] : []}
                      onChange={(values) => field.onChange(values[0])}
                      options={businessActivities}
                      placeholder="Select a business activity"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="categories"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Store categories</FormLabel>
                  <FormControl>
                    <MultiSelect
                      value={field.value}
                      onChange={field.onChange}
                      options={categories}
                      placeholder="Select categories"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="images"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Store images</FormLabel>
                <FormControl>
                  <ImageUpload images={field.value} onChange={field.onChange} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex justify-between pt-8">
          <Button variant="outline" type="button">
              Previous
            </Button>
           <div className="flex gap-3 items-center">
           <Button type="submit" variant="outline">
              Continue later
            </Button>
            <Button type="submit " className="px-5 md:px-10 bg-orange-500">Next</Button>
           </div>
           
            
          </div>
        </form>
      </Form>
    </div>
  )
}