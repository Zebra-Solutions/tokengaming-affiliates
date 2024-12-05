"use client";

import axios from "axios";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { PasswordInput } from "@/components/ui/password-input";
import { Checkbox } from "@/components/ui/checkbox";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "@/app/components/logo";

// Define the schema with all fields
const baseSchema = z.object({
  full_name: z.string().min(1, "Full name is required"),
  address: z.string().min(1, "Address is required"),
  phone: z.string().min(1, "Phone number is required"),
  company_name: z.string().min(1, "Company name is required"),
  email: z
    .string()
    .min(1, "Email is required")
    .regex(/^\S+@\S+\.\S+$/, "Invalid email format"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
  passwordConfirm: z.string(),
  terms_accepted: z
    .boolean({
      required_error: "You must accept the terms and conditions",
    })
    .refine((val) => val, "You must accept the terms and conditions"),
  skype: z.string().min(1, "Skype username is required"),
});

// Add superRefine for password confirmation
const formSchema = baseSchema.superRefine((data, ctx) => {
  if (data.password !== data.passwordConfirm) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      path: ["passwordConfirm"],
      message: "Passwords do not match",
    });
  }
});

export default function SignupPage() {
  const router = useRouter();
  const [isLogoVisible, setIsLogoVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      full_name: "",
      address: "",
      phone: "",
      company_name: "",
      email: "",
      password: "",
      passwordConfirm: "",
      terms_accepted: false,
      skype: "",
    },
  });

  const handleSubmit = async (data: z.infer<typeof formSchema>) => {
    setLoading(true);
    setErrorMessage("");

    try {
      const response = await axios.post(
        "https://dashboard.tokengamingaffiliates.xyz/api/client/partner",
        {
          partner_user: {
            full_name: data.full_name,
            address: data.address,
            phone: data.phone,
            company_name: data.company_name,
            email: data.email,
            password: data.password,
            password_confirmation: data.passwordConfirm,
            terms_accepted: data.terms_accepted,
            skype: data.skype,
          },
        },
        {
          headers: {
            "Content-Type": "application/json; charset=utf-8",
          },
        }
      );

      if (response.status === 201) {
        setSuccessMessage("Signup successful! Redirecting...");
        setTimeout(() => {
          router.push("/");
        }, 2000);
      }
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        const errors = error.response.data.errors || {};
        Object.entries(errors).forEach(([field, messages]) => {
          if (baseSchema.shape.hasOwnProperty(field)) {
            form.setError(field as keyof z.infer<typeof baseSchema>, {
              message: (messages as string[])[0],
            });
          }
        });
        setErrorMessage("Please correct the highlighted fields.");
      } else {
        setErrorMessage("An unexpected error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLogoVisible(true);
    }, 100);
    return () => clearTimeout(timer); // Cleanup timeout on unmount
  }, []);

  return (
    <>
      <Logo
        width={200}
        className={`logo-animation ${isLogoVisible ? "visible" : ""} mt-3`}
      />
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Sign up</CardTitle>
          <CardDescription className="text-slate-600">
            Sign up for a new Tokengaming Affiliate account
          </CardDescription>
        </CardHeader>
        <CardContent>
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
          <FormProvider {...form}>
            <form
              className="flex flex-col gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                form.handleSubmit(handleSubmit)();
              }}
            >
              {/* Full Name */}
              <FormField
                control={form.control}
                name="full_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your full name"
                        type="text"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Address */}
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Address</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your address"
                        type="text"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Phone */}
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your phone number"
                        type="text"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Company Name */}
              <FormField
                control={form.control}
                name="company_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your company name"
                        type="text"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Email */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your email"
                        type="email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Password */}
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <PasswordInput
                        placeholder="Enter your password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Password Confirmation */}
              <FormField
                control={form.control}
                name="passwordConfirm"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                      <PasswordInput
                        placeholder="Confirm your password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Skype */}
              <FormField
                control={form.control}
                name="skype"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Skype</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your Skype username"
                        type="text"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Terms and Conditions */}
              <FormField
                control={form.control}
                name="terms_accepted"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                      <FormLabel className="text-sm">
                        I accept the{" "}
                        <Link
                          href=""
                          className="text-blue-600 hover:text-blue-800 underline"
                        >
                          terms and conditions
                        </Link>
                      </FormLabel>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Submit Button */}
              <Button type="submit" disabled={loading}>
                {loading ? "Signing up..." : "Sign up"}
              </Button>

              {successMessage && (
                <div className="flex items-center gap-2 p-4 mb-4 text-yellow-800 bg-yellow-50 border border-yellow-400 rounded">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.29 3.86l-6 10A1 1 0 005 15h14a1 1 0 00.85-1.53l-6-10a1 1 0 00-1.7 0zM12 9v4m0 4h.01"
                    />
                  </svg>
                  <p>{successMessage}</p>
                </div>
              )}
            </form>
          </FormProvider>
        </CardContent>
        <CardFooter>
          <Link href="/login">Already have an account? Log in</Link>
        </CardFooter>
      </Card>
    </>
  );
}
