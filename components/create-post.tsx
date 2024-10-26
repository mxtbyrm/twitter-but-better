"use client";
import React, { useEffect, useRef, useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Avatar } from "@/components/ui/avatar";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FaRegSmile } from "react-icons/fa";
import { LuImage } from "react-icons/lu";
import { MdOutlineGifBox } from "react-icons/md";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import { useTheme } from "next-themes";

function CreatePost() {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [value, setValue] = useState("");

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };
  const { theme } = useTheme();

  return (
    <div
      className={
        "w-full p-4 bg-card border border-border flex text-[1rem]  flex-col rounded-md"
      }
    >
      <div className={"flex flex-row gap-4"}>
        <Avatar className={"w-[50px] h-[50px] "}>
          <Image
            width={50}
            height={50}
            className={"object-cover object-top"}
            src={"/av1.jpeg"}
            alt={"avatar image"}
          />
        </Avatar>
        <div className={"flex w-full h-fit max-h-[400px] flex-col gap-2"}>
          <Textarea
            value={value}
            ref={textareaRef}
            onChange={handleChange}
            className={
              "resize-none shadow-none w-full rounded-none bg-card py-3  px-1  placeholder:font-bold text-[1rem] overflow-y-auto border-none"
            }
            placeholder={"Type your post here..."}
          />
          <div className={"flex flex-row justify-between items-center gap-2"}>
            <div className={"flex flex-row gap-2 items-center justify-center"}>
              <label
                className={
                  " group cursor-pointer hover:bg-primary/10 rounded-full w-fit h-fit p-2"
                }
              >
                <LuImage
                  className={
                    "stroke-muted-foreground group-hover:stroke-primary w-5 h-5"
                  }
                />
                <input type={"file"} className={"sr-only"} />
              </label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    className={
                      " group p-2 w-fit h-fit shadow-none rounded-full bg-transparent hover:bg-primary/10"
                    }
                  >
                    <FaRegSmile
                      className={
                        "fill-muted-foreground group-hover:fill-primary w-5 h-5"
                      }
                    />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-fit h-fit p-0 border-border border rounded-sm overflow-hidden">
                  <Picker
                    data={data}
                    theme={theme === "light" ? "light" : "dark"}
                    onEmojiSelect={(emoji: { native: string }) => {
                      setValue(`${value}${emoji.native}`);
                    }}
                  />
                </PopoverContent>
              </Popover>
              <Button
                className={
                  "group p-2 w-fit h-fit shadow-none rounded-full bg-transparent hover:bg-primary/10"
                }
              >
                <MdOutlineGifBox
                  className={
                    "fill-muted-foreground group-hover:fill-primary w-6 h-6"
                  }
                />
              </Button>
            </div>
            <Button
              variant={"default"}
              className={"font-bold rounded-sm text-base"}
            >
              Post
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;
