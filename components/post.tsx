"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  BookmarkButton,
  CommentButton,
  LikeButton,
  ReShareButton,
  ShareButton,
  StatsButton,
} from "@/components/ui/post-buttons";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { HashtagContent } from "@/components/ui/HashtagContent";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { useTheme } from "next-themes";

type PostType = {
  id: number;
  avatar: string;
  user: string;
  username: string;
  date: string;
  content: string;
  image?: string;
  video?: string;
  reply?: boolean;
  className?: string;
  onClick?: (any: any) => void;
};

const Post = React.forwardRef(
  (props: PostType, ref: React.ForwardedRef<HTMLDivElement>) => {
    const [liked, setLiked] = useState(false);
    const [marked, setMarked] = useState(false);

    const handleButtonClick = (e: React.MouseEvent) => {
      e.stopPropagation(); // Prevent dialog opening when clicking buttons
      setMarked(!marked);
    };
    const handleLikeClick = (e: React.MouseEvent) => {
      e.stopPropagation(); // Prevent dialog opening when clicking buttons
      setLiked(!liked);
    };

    return (
      <div
        ref={ref}
        onClick={props.onClick}
        className={cn(
          "w-full rounded-sm  h-fit  border border-border  hover:bg-card/70 bg-card transition-colors overflow-hidden  flex-col p-4 pb-0",
          props.className,
        )}
      >
        <div className={"flex flex-row gap-4"}>
          <div className={"flex flex-col items-center "}>
            <div className="rounded-sm flex flex-col p-0 shadow-sm w-[50px] h-[50px] overflow-hidden">
              <Image
                src={props.avatar}
                width={50}
                height={50}
                alt="avatar"
                className="w-full static h-full object-cover"
              />
            </div>
          </div>
          <div className={"flex flex-col w-full gap-2"}>
            <div className={"flex flex-col gap-1"}>
              <div
                className={
                  "flex sm:text-[1rem] text-sm flex-row text-muted-foreground gap-2"
                }
              >
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <Button
                      variant={"link"}
                      className={
                        "p-0 sm:text-[1rem] text-sm font-bold w-fit h-fit"
                      }
                      asChild
                    >
                      <Link href={`/${props.username}`}>{props.user}</Link>
                    </Button>
                  </HoverCardTrigger>
                  <HoverCardContent
                    align={"start"}
                    className={
                      "rounded-sm bg-card/80 backdrop-blur-sm backdrop-brightness-100 backdrop-saturate-100"
                    }
                  >
                    Merhaba dunya
                  </HoverCardContent>
                </HoverCard>
                <p>@{props.username}</p>
                <p>{props.date}</p>
              </div>
              <HashtagContent content={props.content} />
            </div>
            <div onClick={(event) => event.stopPropagation()}>
              {props.image && (
                <div className={"overflow-visible mt-2"}>
                  <Dialog modal>
                    <DialogTrigger asChild>
                      <Button
                        onClick={(event) => event.stopPropagation()}
                        className={
                          "p-0 h-auto shadow-sm w-auto transition-all hover:opacity-80 rounded-sm overflow-hidden aspect-[1618/1000]"
                        }
                      >
                        <Image
                          src={props.image}
                          width={600}
                          height={600}
                          className={"w-full static object-cover h-full"}
                          alt={"image"}
                        />
                      </Button>
                    </DialogTrigger>
                    <DialogContent
                      onClick={(event) => event.stopPropagation()}
                      className={
                        "rounded-sm bg-transparent min-w-[800px] h-auto shadow-none border-none p-1 overflow-hidden"
                      }
                    >
                      <div
                        className={
                          "w-full gap-4 flex flex-col items-center h-full"
                        }
                      >
                        <Image
                          quality={100}
                          width={2000}
                          height={2000}
                          src={props.image}
                          className={
                            "w-full rounded-sm shadow-lg object-cover h-auto"
                          }
                          alt={"image"}
                        />

                        <div
                          className={
                            "flex w-[500px] p-2 px-4 shadow-sm flex-row items-center border bg-card/80 backdrop-blur-md border-border rounded-sm justify-between"
                          }
                        >
                          <CommentButton />
                          <ReShareButton />
                          <LikeButton onClick={handleLikeClick} liked={liked} />
                          <StatsButton />
                          <div
                            className={"flex items-center justify-center gap-2"}
                          >
                            <BookmarkButton
                              marked={marked}
                              onClick={handleButtonClick}
                            />
                            <ShareButton />
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              )}
            </div>

            <div className={"flex flex-row items-center pb-3 justify-between"}>
              <CommentButton />
              <ReShareButton />
              <LikeButton onClick={handleLikeClick} liked={liked} />
              <StatsButton />
              <div className={"flex items-center justify-center gap-2"}>
                <BookmarkButton marked={marked} onClick={handleButtonClick} />
                <ShareButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },
);

Post.displayName = "Post";

export default Post;
