"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MessageSquare, Star } from "lucide-react";

export default function ProfileHeader({
  name = "Zakhrafa ASH Design",
  avatarUrl = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Capture%20d%E2%80%99%C3%A9cran%202025-02-04%20111254-WjPL40vlsoWudl8dVlvX4JxOqXmQS7.png",
  thumbnails = Array(7).fill("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Capture%20d%E2%80%99%C3%A9cran%202025-02-04%20111254-WjPL40vlsoWudl8dVlvX4JxOqXmQS7.png"),
  rating = 4.8,
  reviewCount = 120,
}) {
  const visibleThumbnails = thumbnails.slice(0, 3);
  const remainingCount = Math.max(0, thumbnails.length - 3);

  return (
    <div className="w-full p-6">
      <div className="flex items-between justify-between">
        <div className="flex items-center gap-4">
          <Avatar className="h-24 w-24">
            <AvatarImage src={avatarUrl} alt={name} />
            <AvatarFallback>
              {name
                .split(" ")
                .map((word) => word[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-2">
            <h2 className=" text-xl font-bold">{name}</h2>
            <div className="flex items-center gap-2">
              <Badge
                variant="secondary"
                className="text-xs font-normal px-2 py-0.5 bg-orange-50 text-orange-600 hover:bg-orange-50"
              >
                Seller
              </Badge>
            </div>
            <Button 
            variant="outline" 
            size="sm" 
            className="hidden w-fit sm:flex h-8 text-xs font-normal bg-orange-400  text-white"
          >
            <MessageSquare className="w-3 h-3 mr-1.5" />
            Message
          </Button>
          <Button 
            variant="outline" 
            size="icon" 
            className="sm:hidden h-8 w-8"
          >
            <MessageSquare className="w-3 h-3" />
          </Button>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
         
          
          <div className="flex gap-3">
            {visibleThumbnails.map((thumbnail, index) => (
              <div
                key={index}
                className="w-20 h-20 rounded overflow-hidden bg-[#1a2e35]"
              >
                <img
                  src={"/slide1.jpg"}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
            {remainingCount > 0 && (
              <div className="w-20 h-20 rounded bg-[#1a2e35] flex items-center justify-center text-white text-xs">
                +{remainingCount}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}