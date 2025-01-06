import React from "react";
import { Toggle } from "@/components/ui/toggle";

const SellerToggle = ({ isSeller, setIsSeller }) => {
  return (
    <div className="flex bg-white justify-between gap-8 rounded-full p-1 w-fit">
      <Toggle
        pressed={isSeller}
        variant="default"
        onPressedChange={() => setIsSeller(true)}
        className={`rounded-full px-8 py-1 text-sm transition-colors ${
          isSeller
            ? "bg-orange-500 hover:bg-orange-600 text-white"
            : "bg-transparent text-black hover:bg-transparent"
        }`}
      >
        SELLER
      </Toggle>
      <Toggle
        pressed={!isSeller}
        variant="default"
        onPressedChange={() => setIsSeller(false)}
        className={`rounded-full px-8 py-1 text-sm transition-colors ${
          !isSeller
            ? "bg-orange-500 hover:bg-orange-600 text-white"
            : "bg-transparent text-black hover:bg-transparent"
        }`}
      >
        BUYER
      </Toggle>
    </div>
  );
};

export default SellerToggle;
