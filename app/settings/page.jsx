import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function AccountSettingsPage() {
  return (
    (<div className="space-y-6">
      <div className="space-y-6 bg-white p-6 rounded-lg border">
        <div>
          <h2 className="text-sm font-medium text-gray-700 mb-4">PROFILE PICTURE</h2>
          <div className="flex flex-col items-start gap-2">
            <div className="relative h-[98px] w-[98px] bg-[#1a2b3b]">
              <div
                className="absolute bottom-0 left-0 right-0 bg-black/50 py-1 text-center text-[10px] text-white">
                Upload new picture
              </div>
            </div>
            <button className="text-xs text-gray-500 hover:text-gray-700">Delete</button>
          </div>
        </div>

        <div className="space-y-4 pt-4">
          <div className="space-y-2">
            <label className="text-xs font-medium text-gray-700">USERNAME</label>
            <Input className="h-9" />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-medium text-gray-700">EMAIL</label>
            <Input className="h-9" defaultValue="n**********4@gmail.com" />
          </div>
          <div className="flex justify-end pt-2">
            <Button className="bg-[#ff4d00] hover:bg-[#ff4d00]/90 h-8 text-xs px-4">Save changes</Button>
          </div>
        </div>
      </div>
      <div className="space-y-6 bg-white p-6 rounded-lg border">
        <div>
          <h2 className="text-sm font-medium text-gray-700 mb-4">ACCOUNT DEACTIVATION</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-1">
              <span className="text-sm text-gray-600">What happens when you deactivate your account?</span>
              <div className="rounded-full bg-gray-100 px-1 text-[10px]">?</div>
            </div>
            <div className="text-sm text-gray-600 pl-4">• Your profile won't be shown on Twreed anymore.</div>
            <div className="space-y-2 pt-2">
              <label className="text-sm font-medium text-gray-700">I'm leaving because...</label>
              <Select>
                <SelectTrigger className="h-9 text-sm">
                  <SelectValue placeholder="Choose a reason" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="reason1">Taking a break</SelectItem>
                  <SelectItem value="reason2">Found another platform</SelectItem>
                  <SelectItem value="reason3">Privacy concerns</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex justify-end pt-2">
              <Button
                variant="outline"
                className="h-8 text-xs px-4 text-gray-700 bg-gray-50 hover:bg-gray-100 border-gray-200">
                Deactivate Account
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>)
  );
}

