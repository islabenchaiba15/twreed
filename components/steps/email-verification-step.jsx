"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { useSignupForm } from "@/contexts/signup-form-context";
import { ArrowLeft } from "lucide-react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useEffect } from "react";

const FormSchema = z.object({
  otp: z.string().min(6, {
    message: "Verification code must be 6 characters.",
  }),
});

export function EmailVerificationStep() {
  const { data, setFormData, nextStep, prevStep, resetEmail } = useSignupForm();

  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      otp: data.otp || "",
    },
  });

  function onSubmit(formData) {
    setFormData({ otp: formData.otp });
    nextStep();
  }

  return (
    <div className="space-y-6 w-full max-w-sm">
      <Button
        variant="ghost"
        className="flex items-center gap-2"
        onClick={prevStep}
      >
        <ArrowLeft className="h-4 w-4" />
        Back
      </Button>
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Confirm your email</h2>
        <p className="text-sm text-muted-foreground">
          Enter the verification code we emailed to:
        </p>
        <p className="text-sm font-medium">{data.email}</p>
        <button
          className="text-sm text-orange-500 hover:text-orange-600"
          onClick={resetEmail}
        >
          (Use a different email)
        </button>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="otp"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <InputOTP maxLength={6} {...field}>
                    <InputOTPGroup className="gap-2">
                      <InputOTPSlot
                        index={0}
                        className="w-12 h-12" // Increase width and height
                      />
                      <InputOTPSlot
                        index={1}
                        className="w-12 h-12" // Increase width and height
                      />
                      <InputOTPSlot
                        index={2}
                        className="w-12 h-12" // Increase width and height
                      />
                      <InputOTPSlot
                        index={3}
                        className="w-12 h-12" // Increase width and height
                      />
                      <InputOTPSlot
                        index={4}
                        className="w-12 h-12" // Increase width and height
                      />
                      <InputOTPSlot
                        index={5}
                        className="w-12 h-12" // Increase width and height
                      />
                    </InputOTPGroup>
                  </InputOTP>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600"
            disabled={!form.watch("otp") || form.watch("otp").length !== 6}
          >
            Submit
          </Button>
        </form>
      </Form>
      <button
        type="button"
        className="text-sm text-muted-foreground hover:text-foreground"
      >
        Resend code
      </button>
    </div>
  );
}
