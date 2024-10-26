"use client";
import SignInForm from "@/components/accounts/sign-in-form";
import SignUpForm from "@/components/accounts/sign-up-form";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { DialogTrigger } from "@radix-ui/react-dialog";
import { useState } from "react";

export default function AccountsDialog() {
  const [signUp, setSignUp] = useState(false);
  return (
    <div className="w-fit flex">
      <Dialog>
        <DialogTrigger asChild>
          <div className="flex flex-row gap-4 items-center justify-center">
            <Button onClick={() => setSignUp(false)} variant={"link"}>
              Sign in
            </Button>
            <Button onClick={() => setSignUp(true)}>Sign Up</Button>
          </div>
        </DialogTrigger>
        <DialogContent className="max-w-[400px]">
          <DialogHeader className="items-center justify-center flex">
            {signUp ? (
              <DialogTitle className="text-2xl">Create an account</DialogTitle>
            ) : (
              <DialogTitle className="text-2xl">
                Sign in to your account
              </DialogTitle>
            )}
          </DialogHeader>
          {signUp ? <SignUpForm /> : <SignInForm />}
          <DialogFooter className="sm:items-center sm:justify-center">
            {signUp ? (
              <div className="flex flex-row items-center justify-center gap-2">
                <span className="text-sm">Already have an account?</span>
                <Button
                  variant={"link"}
                  onClick={() => setSignUp(false)}
                  className="font-bold p-0 text-sm"
                >
                  Sign in
                </Button>
              </div>
            ) : (
              <div className="flex flex-row items-center justify-center gap-2">
                <span className="text-sm">Don&apos;t have an account?</span>
                <Button
                  variant={"link"}
                  onClick={() => setSignUp(true)}
                  className="font-bold p-0 text-sm"
                >
                  Sign up
                </Button>
              </div>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
