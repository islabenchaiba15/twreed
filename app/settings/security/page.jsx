import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function SecuritySettingsPage() {
  return (
    (<div className="space-y-6">
      <div className="space-y-6 bg-white p-6 rounded-lg border">
        <div>
          <h2 className="text-sm font-medium text-gray-700 mb-4">CHANGE PASSWORD</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Current Password</label>
              <Input type="password" className="h-9" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">New Password</label>
              <Input type="password" className="h-9" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Confirm Password</label>
              <Input type="password" className="h-9" />
            </div>
            <p className="text-sm text-gray-600">
              8 characters or longer. Combine upper and lowercase letters and numbers.
            </p>
            <div className="flex justify-end pt-2">
              <Button className="bg-[#ff4d00] hover:bg-[#ff4d00]/90 h-8 text-xs px-4">Save Changes</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-6 bg-white p-6 rounded-lg border">
        <div
          className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 md:gap-8">
          <div className="space-y-1 flex-1">
            <h3 className="text-sm font-medium text-gray-700">PHONE VERIFICATION</h3>
            <p className="text-sm text-gray-600">
              Your phone is verified with Twreed. Click Edit to change your phone number
            </p>
          </div>
          <Button
            className="bg-[#ff4d00] hover:bg-[#ff4d00]/90 h-8 text-xs px-4 w-full md:w-auto">Edit</Button>
        </div>
      </div>
      <div className="space-y-6 bg-white p-6 rounded-lg border">
        <div
          className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 md:gap-8">
          <div className="space-y-1 flex-1">
            <h3 className="text-sm font-medium text-gray-700">SECURITY QUESTION</h3>
            <p className="text-sm text-gray-600">
              By creating a security question, you will add an additional layer of protection for your revenue
              withdrawals and for changing your password.
            </p>
          </div>
          <Button
            className="bg-[#ff4d00] hover:bg-[#ff4d00]/90 h-8 text-xs px-4 w-full md:w-auto">Edit</Button>
        </div>
      </div>
    </div>)
  );
}

