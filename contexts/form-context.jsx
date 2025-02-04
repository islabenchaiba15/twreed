"use client"

import { createContext, useContext, useState } from "react"

const FormContext = createContext()

const initialState = {
  storeInfo: {
    storeName: "",
    businessActivity: "",
    storeUrl: "",
    categories: ["Domain 1", "Domain 2", "Domain 3"],
    images: [],
  },
  productInfo: {
    productName: "",
    productDescription: "",
    productType: ["Type 1", "Type 2", "Type 3"],
    quantity: 0,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    images: [],
  },
  locationInfo: {
    isDigitalStore: false,
    address: "",
    wilaya: "",
    commune: "",
    postalCode: "",
  },
  shippingInfo: {
    shippingCompanies: ["yolidine", "fast-tour", "magneto"],
  },
}

export function FormProvider({ children }) {
  const [formState, setFormState] = useState(initialState)

  const updateStoreInfo = (data) => {
    setFormState((prev) => ({
      ...prev,
      storeInfo: { ...prev.storeInfo, ...data },
    }))
  }

  const updateProductInfo = (data) => {
    setFormState((prev) => ({
      ...prev,
      productInfo: { ...prev.productInfo, ...data },
    }))
  }

  const updateLocationInfo = (data) => {
    setFormState((prev) => ({
      ...prev,
      locationInfo: { ...prev.locationInfo, ...data },
    }))
  }

  const updateShippingInfo = (data) => {
    setFormState((prev) => ({
      ...prev,
      shippingInfo: { ...prev.shippingInfo, ...data },
    }))
  }

  return (
    <FormContext.Provider
      value={{
        formState,
        updateStoreInfo,
        updateProductInfo,
        updateLocationInfo,
        updateShippingInfo,
      }}
    >
      {children}
    </FormContext.Provider>
  )
}

export function useFormContext() {
  const context = useContext(FormContext)
  if (context === undefined) {
    throw new Error("useFormContext must be used within a FormProvider")
  }
  return context
}