"use client";
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
import { PasswordInput } from "@/components/ui/password-input";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { useEffect, useState } from "react";
import Logo from "@/app/components/logo";
import "./style.css";
import GradientButton from "@/app/components/GradiantButton";

const formSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(1, "Password is required"),
});

export default function LoginPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const handleSubmit = async () => {};

  const [isLogoVisible, setIsLogoVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLogoVisible(true);
    }, 100);
  }, []);

  return (
    <>
      <Logo
        width={200}
        className={`logo-animation ${isLogoVisible ? "visible" : ""}`}
      />
      <Card className="w-full max-w-sm bg-[#ffffff] shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>
            Login to your Tokengaming Affiliate account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FormProvider {...form}>
            <form
              className="flex flex-col gap-4"
              onSubmit={form.handleSubmit(handleSubmit)}
            >
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your username"
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
                  </FormItem>
                )}
              />
              <GradientButton href="/">Sign up</GradientButton>
                
             
            </form>
          </FormProvider>
        </CardContent>
        <CardFooter className="justify-between">
          <small>Do not have an account?</small>
          <Button asChild variant="outline" size="sm">
            <Link href="/sign-up">Sign up</Link>
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}
