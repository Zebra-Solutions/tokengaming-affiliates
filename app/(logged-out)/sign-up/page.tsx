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

const formSchema = z
  .object({
    company_name: z.string().min(1, "Company name is required"),
    email: z
      .string()
      .min(1, "Email is required")
      .regex(/^\S+@\S+\.\S+$/, "Invalid email format"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
    passwordConfirm: z.string(),
    skype: z.string().optional(),
    terms_accepted: z
      .boolean({
        required_error: "You must accept the terms and conditions",
      })
      .refine((val) => val, "You must accept the terms and conditions"),
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
  const [isLogoVisible, setIsLogoVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      company_name: "",
      email: "",
      password: "",
      passwordConfirm: "",
      skype: "",
      terms_accepted: false,
    },
  });

  const handleSubmit = async (data: z.infer<typeof formSchema>) => {
    setLoading(true);
    setErrorMessage('');

    try {
      const response = await axios.post("https://cors-anywhere.herokuapp.com/https://demo.affilka.dev/api/v1/client/partner", {
        partner_user: {
          company_name: data.company_name,
          email: data.email,
          password: data.password,
          password_confirmation: data.passwordConfirm,
          terms_accepted: data.terms_accepted,
          skype: data.skype,
        },
      }, {
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "API-Key": "a18a417f7d59f623aa1e6ade55320238", // Hardcoded for demonstration
          "API-Secret": "5ad839a1a82cdd3350f6aea32774af0c289a9bd83575a15c03fe5ba2e4d4396b", // Hardcoded for demonstration
        },
      });

      if (response.status === 200) {
        console.log("Signup successful:", response.data);
        router.push("/success");
      }
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        setErrorMessage(error.response.data.message || "Error signing up.");
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
        className={`logo-animation ${isLogoVisible ? "visible" : ""}`}
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
                e.preventDefault(); // Prevent default behavior
                console.log("Form submitted"); // Log to check submission
                console.log("Validation errors:", form.formState.errors); // Check for validation errors
                form.handleSubmit(handleSubmit)();
              }}
            >
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

              <FormField
                control={form.control}
                name="skype"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Skype (optional)</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your Skype ID"
                        type="text"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="terms_accepted"
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

              <Button type="submit" disabled={loading}>
                {loading ? "Signing up..." : "Sign up"}
              </Button>
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
