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
import { useState } from "react";
import Image from "next/image";

const formSchema = z
  .object({
    username: z
      .string()
      .min(3, "Username must be at least 3 characters long")
      .max(50, "Username must not exceed 50 characters"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
    passwordConfirm: z.string(),
    email: z
      .string()
      .min(1, "Email is required")
      .regex(/^\S+@\S+\.\S+$/, "Invalid email format"),
    existing_organization_id: z.union([z.string(), z.null()]).optional(),
    acceptTerms: z
      .boolean({
        required_error: "You must accept terms and conditions",
      })
      .refine((checked) => checked, "You must accept terms and conditions"),
  })
  .superRefine((data, ctx) => {
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
  const [joinOrg, setJoinOrg] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
      email: "",
      existing_organization_id: "",
    },
  });

  console.log("Validation errors:", form.formState.errors);

  const handleSubmit = async (data: z.infer<typeof formSchema>) => {
    console.log("Inside handleSubmit"); // Debugging log
    console.log("Form data to be submitted:", data);

    try {
      const postData = {
        username: data.username,
        password: data.password,
        email: data.email,
        existing_organization_id: data.existing_organization_id || null,
      };

      // Log the data that will be sent in the request
      console.log("Data sent to the API:", postData);

      const response = await axios.post(
        "http://localhost:8031/user/register",
        postData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("User registered successfully", response.data);

      router.push("/login");
    } catch (error: any) {
      console.error(
        "Registration failed",
        error.response ? error.response.data : error
      );
    }
  };

  return (
    <>
     <h1>Tokengaming Affiliate</h1>
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Sign up</CardTitle>
          <CardDescription>
            Sign up for a new Tokengaming Affiliate account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FormProvider {...form}>
            <form
              className="flex flex-col gap-4"
              onSubmit={(e) => {
                e.preventDefault(); // Prevent default behavior
                console.log("Form submitted"); // Log to check submission
                console.log("Validation errors:", form.formState.errors); // Check for validation errors
                form.handleSubmit(handleSubmit)();
              }}
            >
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your username" type="text" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your email" type="email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <PasswordInput placeholder="Enter your password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="passwordConfirm"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm password</FormLabel>
                    <FormControl>
                      <PasswordInput placeholder="Enter your password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="acceptTerms"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        checked={field.value} // Use field.value for controlled state
                        onCheckedChange={field.onChange} // Update field value on change
                      />
                      <FormLabel className="text-sm">
                        I accept the terms and conditions
                      </FormLabel>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex items-center space-x-2">
                <Checkbox
                  checked={joinOrg}
                  onCheckedChange={(checked) => setJoinOrg(checked === true)} // Adjust the value to a boolean
                />
                <label htmlFor="joinOrg">Join an existing organization?</label>
              </div>

              {joinOrg && (
                <FormField
                  control={form.control}
                  name="existing_organization_id"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Organization ID</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter organization ID"
                          type="text"
                          {...field}
                          value={field.value ?? ""} // Ensure the value is a string, not null
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}

              <Button type="submit">Sign Up</Button>
            </form>
          </FormProvider>

          <div className="flex flex-col items-center gap-2 mt-4">
            <p>Or sign up with:</p>
            <div className="flex gap-2 mt-2">
              <button
                className="p-2 rounded-full bg-white border border-gray-300 hover:bg-gray-100"
              >
                <img src="/icons/google.svg" alt="Google" className="w-6 h-6" />
              </button>
              <button
                className="p-2 rounded-full bg-white border border-gray-300 hover:bg-gray-100"
              >
                <img
                  src="/icons/microsoft.svg"
                  alt="Microsoft"
                  className="w-6 h-6"
                />
              </button>
              <button
                className="p-2 rounded-full bg-white border border-gray-300 hover:bg-gray-100"
              >
                <img
                  src="/icons/linkedin.svg"
                  alt="LinkedIn"
                  className="w-6 h-6"
                />
              </button>
              <button
                className="p-2 rounded-full bg-white border border-gray-300 hover:bg-gray-100"
              >
                <img src="/icons/github.svg" alt="GitHub" className="w-6 h-6" />
              </button>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Link href="/login">Already have an account? Log in</Link>
        </CardFooter>
      </Card>
    </>
  );
}
