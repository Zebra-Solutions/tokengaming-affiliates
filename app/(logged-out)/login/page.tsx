"use client";
import { AxiosError } from "axios";
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
import { useRouter } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import axios from "axios";
import { useEffect } from "react";
import Swal from "sweetalert2";
import Image from "next/image";

const formSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(1, "Password is required"),
});

export default function LoginPage() {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const handleSocialLogin = async (provider: string) => {
    try {
      const response = await axios.post(
        `http://localhost:8031/user/login/${provider}`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(`${provider} login successful`, response.data);
      router.push("/"); 
    } catch (error: any) {
      console.error(
        `${provider} login failed`,
        error.response ? error.response.data : error
      );
    }
  };

  // Declare refreshTokenInterval variable
  let refreshTokenInterval: NodeJS.Timeout | undefined;

  const handleSubmit = async (data: z.infer<typeof formSchema>) => {
   
  };

  

  return (
    <>
      <h1>Tokengaming Afiliate</h1>
      <Card className="w-full max-w-sm bg-[#ffffff]">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>Login to your Tokengaming Affiliate account</CardDescription>
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
              <Button type="submit" className="mt-4">
                Login
              </Button>
            </form>
          </FormProvider>
        </CardContent>
        <CardFooter className="justify-between">
          <small>Don't have an account?</small>
          <Button asChild variant="outline" size="sm">
            <Link href="/sign-up">Sign up</Link>
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}
