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
    try {
      const requestData = new URLSearchParams({
        grant_type: "password",
        username: data.username,
        password: data.password,
        scope: "",
        client_id: "your_client_id_here",
        client_secret: "your_client_secret_here",
      });

      const response = await axios.post(
        "http://localhost:8031/user/login",
        requestData,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Accept: "application/json",
          },
          withCredentials: true,
        }
      );

      console.log("API Response:", response.data);

      if (response.data.msg === "Login successful") {
        const tokenType = "Bearer";
        const accessToken = response.data.access_token;
        document.cookie = `access_token=${tokenType} ${accessToken}; path=/;`;

        console.log("Login successful, tokens should be set in cookies.");
        Swal.fire({
          icon: "success",
          title: "Logged in successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        router.push("/dashboard");

        // Start the token refresh interval
        refreshTokenInterval = startTokenRefresh();
      } else {
        console.error("Unexpected response:", response.data);
        Swal.fire({
          icon: "error",
          title: "Login Error",
          text: "Unexpected response. Please check the API response.",
        });
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        const message = error.response?.data?.message || "Login failed";
        Swal.fire({
          icon: "error",
          title: "Login Error",
          text: message,
        });
      }
    }
  };

  const startTokenRefresh = () => {
    // Refresh token every 30 minutes (1800000 milliseconds)
    const interval = setInterval(async () => {
      try {
        const refreshToken = getCookie("refresh_token"); // Assuming you store the refresh token in a cookie
        if (!refreshToken) {
          throw new Error("Refresh token is missing");
        }

        const response = await axios.post(
          "http://localhost:8031/user/token/refresh",
          { refresh_token: refreshToken },
          {
            withCredentials: true,
          }
        );

        const tokenType = "Bearer";
        const newAccessToken = response.data.access_token;
        document.cookie = `access_token=${tokenType} ${newAccessToken}; path=/;`;

        console.log("Access token refreshed successfully.");
      } catch (error) {
        console.error("Failed to refresh access token:", error);
        clearInterval(interval); // Clear the interval on error
        // Optionally, redirect to login or show an error message
      }
    }, 1800000); // 30 minutes in milliseconds

    return interval; // Return the interval ID
  };

  const getCookie = (name: string): string | undefined => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(";").shift();
    return undefined; // Return undefined if cookie is not found
  };

  useEffect(() => {
    return () => {
      // Cleanup: clear any intervals on unmount
      if (refreshTokenInterval) {
        clearInterval(refreshTokenInterval);
      }
    };
  }, []);

  return (
    <>
      <h1>Tokengaming Afiliate</h1>
      <Card className="w-full max-w-sm">
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

          <div className="flex flex-col items-center gap-2 mt-4">
            <p>Other log in options:</p>
            <div className="flex gap-2 mt-2">
              <button
                onClick={() => handleSocialLogin("google")}
                className="p-2 rounded-full bg-white border border-gray-300 hover:bg-gray-100"
              >
                <img src="/icons/google.svg" alt="Google" className="w-6 h-6" />
              </button>
              <button
                onClick={() => handleSocialLogin("microsoft")}
                className="p-2 rounded-full bg-white border border-gray-300 hover:bg-gray-100"
              >
                <img
                  src="/icons/microsoft.svg"
                  alt="Microsoft"
                  className="w-6 h-6"
                />
              </button>
              <button
                onClick={() => handleSocialLogin("linkedin")}
                className="p-2 rounded-full bg-white border border-gray-300 hover:bg-gray-100"
              >
                <img
                  src="/icons/linkedin.svg"
                  alt="LinkedIn"
                  className="w-6 h-6"
                />
              </button>
              <button
                onClick={() => handleSocialLogin("github")}
                className="p-2 rounded-full bg-white border border-gray-300 hover:bg-gray-100"
              >
                <img src="/icons/github.svg" alt="GitHub" className="w-6 h-6" />
              </button>
            </div>
          </div>
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
