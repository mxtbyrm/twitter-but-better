"use client";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  FormLabel,
} from "../ui/form";
import { Checkbox } from "../ui/checkbox";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";

import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { cn } from "@/lib/utils";
import Link from "next/link";

const formScheme = z
  .object({
    name: z.string().min(1, "Name is required!"),
    surname: z.string().min(1, "Surname is required!"),
    email: z
      .string()
      .min(1, "Email is required!")
      .email("Please enter a valid email!"),
    password: z.string().min(8, "Password must contain at least 8 character!"),
    confirm: z.string().min(8, "Password must contain at least 8 character!"),
    accept: z.boolean().default(false),
  })
  .refine((data) => data.password === data.confirm, {
    message: "Passwords don't match!",
    path: ["confirm"],
  })
  .refine((data) => data.accept, {
    message: "You must accept the terms and conditions.",
    path: ["accept"],
  });

export default function SignUpForm() {
  const form = useForm<z.infer<typeof formScheme>>({
    resolver: zodResolver(formScheme),
    defaultValues: {
      name: "",
      surname: "",
      email: "",
      password: "",
      confirm: "",
      accept: false,
    },
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="flex flex-col gap-4">
      <Form {...form}>
        <form
          className="flex items-center gap-6 mt-6  justify-center flex-col w-full"
          onSubmit={form.handleSubmit((data) => {
            console.log(data);
          })}
        >
          <div className="flex flex-row items-start justify-center gap-6 w-full">
            <FormField
              control={form.control}
              name="name"
              render={({ field, fieldState }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input
                      placeholder="Name"
                      {...field}
                      error={fieldState.error}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="surname"
              render={({ field, fieldState }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input
                      placeholder="Surname"
                      error={fieldState.error}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

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

          <FormField
            control={form.control}
            name="confirm"
            render={({ field, fieldState }) => (
              <FormItem className="w-full">
                <FormControl>
                  <div className="relative">
                    <Input
                      error={fieldState.error}
                      placeholder="Confirm password"
                      type={showConfirm ? "text" : "password"}
                      {...field}
                    />
                    <Button
                      type="button"
                      onClick={() => {
                        setShowConfirm(!showConfirm);
                      }}
                      variant={"ghost"}
                      size={"icon"}
                      className={cn(
                        "hover:bg-transparent text-slate-400 absolute right-4 p-0 w-fit h-fit -translate-y-1/2 top-1/2 focus:ring-none focus:outline-none hover:text-primary",
                        fieldState.error &&
                          "text-destructive/50 hover:text-destructive/70",
                      )}
                    >
                      {showConfirm ? (
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

          <FormField
            control={form.control}
            name="accept"
            render={({ field }) => (
              <FormItem className="flex flex-col items-start space-y-0 justify-start w-full gap-2">
                <div className="flex items-center space-y-0 justify-start w-full gap-2">
                  <FormControl>
                    <Checkbox
                      onCheckedChange={field.onChange}
                      checked={field.value}
                    />
                  </FormControl>

                  <FormLabel className="space-y-0">
                    Accept{" "}
                    <Button variant={"link"} className="w-fit h-fit p-0">
                      <Link href={"#"}>terms and conditions</Link>
                    </Button>
                  </FormLabel>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="text-sm  font-bold w-full h-auto py-3">
            Sign up
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
        Sign up with google
      </Button>
    </div>
  );
}
