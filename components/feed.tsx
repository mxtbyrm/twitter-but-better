"use client";
import React, { MouseEventHandler } from "react";
import Post from "@/components/post";
import { AnimatePresence, motion } from "framer-motion";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useTheme } from "next-themes";
import { useAutoAnimate } from "@formkit/auto-animate/react";

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
  onClick?: (any: any) => void;
};

function Feed({ posts }: { posts: Array<PostType> }) {
  // const [selected, setSelected] = React.useState("");
  const [animate] = useAutoAnimate();
  return (
    <div
      ref={animate}
      className={
        "flex flex-col min-w-[600px] w-auto grow-0 overflow-visible gap-2"
      }
    >
      {posts.map((post, idx: number) => {
        console.log(idx);
        return (
          <div key={post.id}>
            <Dialog>
              <DialogTrigger asChild>
                <Post
                  id={post.id}
                  avatar={post.avatar}
                  user={post.user}
                  username={post.username}
                  content={post.content}
                  image={post.image}
                  video={post.video}
                  reply={post.reply}
                  date={new Date(post.date).toDateString()}
                  className="cursor-pointer scale-100"
                />
              </DialogTrigger>
              <AnimatePresence>
                <DialogContent
                  className={
                    "flex flex-row p-0 border-none items-center bg-transparent shadow-none min-w-fit max-w-fit w-fit min-h-fit max-h-fit h-fit"
                  }
                >
                  <Post
                    id={post.id}
                    avatar={post.avatar}
                    user={post.user}
                    username={post.username}
                    content={post.content}
                    image={post.image}
                    video={post.video}
                    reply={post.reply}
                    date={new Date(post.date).toDateString()}
                    className={
                      "bg-card  scale-110 w-[600px] antialiased rounded-md hover:bg-card"
                    }
                  />
                </DialogContent>
              </AnimatePresence>
            </Dialog>
          </div>
        );
      })}
      {/*{selected && (*/}
      {/*  <div*/}
      {/*    onClick={() => setSelected("")}*/}
      {/*    className={*/}
      {/*      "fixed w-full z-30 top-0 flex items-center justify-center left-0 h-full overflow-auto bg-black/30 backdrop-blur-sm"*/}
      {/*    }*/}
      {/*  ></div>*/}
      {/*)}*/}
    </div>
  );
}

export default Feed;
