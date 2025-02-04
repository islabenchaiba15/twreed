"use client";

import { useRef } from "react";
import { X, Plus, Upload } from "lucide-react";
import { cn } from "@/lib/utils";

export function ImageUpload({ images, onChange, className, variant = "grid" }) {
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const files = e.target.files;
    if (!files) return;

    const newImages = [];
    Array.from(files).forEach((file) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          newImages.push(e.target.result);
          if (newImages.length === files.length) {
            onChange([...images, ...newImages]);
          }
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const removeImage = (index) => {
    const newImages = images.filter((_, i) => i !== index);
    onChange(newImages);
  };

  if (variant === "single") {
    return (
      <div className={cn("w-full", className)}>
        <div
          className="w-full border-2 border-dashed rounded-lg p-4 hover:border-gray-400 transition-colors cursor-pointer"
          onClick={() => fileInputRef.current && fileInputRef.current.click()}
        >
          {images[0] ? (
            <div className="relative aspect-[3/1] w-full">
              <img
                src={images[0] || "/placeholder.svg"}
                alt="Uploaded"
                className="w-full h-full object-contain"
              />
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onChange([]);
                }}
                className="absolute top-2 right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-sm"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-2 py-4">
              <Upload className="w-8 h-8 text-gray-400" />
              <div className="text-sm text-gray-500">
                Click or drag logo here to upload
              </div>
            </div>
          )}
        </div>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFileChange}
        />
      </div>
    );
  }

  return (
    <div className={cn("grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4", className)}>
      {images.map((image, index) => (
        <div
          key={index}
          className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center relative group"
        >
          <img
            src={image || "/placeholder.svg"}
            alt={`Uploaded ${index + 1}`}
            className="w-full h-full object-cover rounded-lg"
          />
          <button
            type="button"
            onClick={() => removeImage(index)}
            className="absolute top-2 right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-sm"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={() => fileInputRef.current && fileInputRef.current.click()}
        className="aspect-square flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg hover:border-gray-400 transition-colors"
      >
        <Plus className="w-6 h-6 text-gray-400" />
      </button>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        multiple
        className="hidden"
        onChange={handleFileChange}
      />
    </div>
  );
}
