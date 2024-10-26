"use client";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";

import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { Checkbox } from "../ui/checkbox";

const formScheme = z.object({
  email: z
    .string()
    .min(1, "Email is required!")
    .email("Please enter a valid email!"),
  password: z.string().min(8, "Password must contain at least 8 character!"),
  stay: z.boolean().default(false).optional(),
});

export default function SignInForm() {
  const form = useForm<z.infer<typeof formScheme>>({
    resolver: zodResolver(formScheme),
    defaultValues: {
      email: "",
      password: "",
      stay: false,
    },
  });
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="flex flex-col gap-4">
      <Form {...form}>
        <form
          className="flex items-center gap-6 mt-6  justify-center flex-col w-full"
          onSubmit={form.handleSubmit((data) => {
            console.log(data);
          })}
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field, fieldState }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input
                    placeholder="Email"
                    error={fieldState.error}
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
            render={({ field, fieldState }) => (
              <FormItem className="w-full">
                <FormControl>
                  <div className="relative">
                    <Input
                      error={fieldState.error}
                      placeholder="Password"
                      type={showPassword ? "text" : "password"}
                      {...field}
                    />
                    <Button
                      type="button"
                      onClick={() => {
                        setShowPassword(!showPassword);
                      }}
                      variant={"ghost"}
                      size={"icon"}
                      className={cn(
                        "hover:bg-transparent text-slate-400 absolute right-4 p-0 w-fit h-fit -translate-y-1/2 top-1/2 focus:ring-none focus:outline-none hover:text-primary",
                        fieldState.error &&
                          "text-destructive/50 hover:text-destructive/70",
                      )}
                    >
                      {showPassword ? (
                        <FaRegEyeSlash className="w-4 h-4" />
                      ) : (
                        <FaRegEye className="w-4 h-4" />
                      )}
                    </Button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex items-center justify-between w-full">
            <FormField
              control={form.control}
              name="stay"
              render={({ field }) => (
                <FormItem className="flex items-center space-y-0 justify-center gap-2">
                  <FormControl>
                    <Checkbox
                      onCheckedChange={field.onChange}
                      checked={field.value}
                    />
                  </FormControl>

                  <FormLabel className="space-y-0">Remember me</FormLabel>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button variant={"link"} className="self-end h-fit p-0">
              Forgot your password?
            </Button>
          </div>
          <Button className="text-sm  font-bold w-full h-auto py-3">
            Sign in
          </Button>
        </form>
      </Form>
      <div className="flex text-muted-foreground flex-row gap-4 items-center justify-center">
        <Separator /> <span> OR</span>
        <Separator />
      </div>
      <Button
        variant={"outline"}
        className="h-auto py-3 relative font-bold text-sm"
      >
        <FcGoogle className="w-5 h-5 absolute -translate-y-1/2 top-1/2 left-3" />
        Sign in with google
      </Button>
    </div>
  );
}
