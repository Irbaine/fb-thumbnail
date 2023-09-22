"use client";

import LinkSection from "./components/input/page";
import Tutorial from "./components/tutorial/page";
import Steps from "./components/steps/page";
import Head from "next/head";
import Header from "./components/header/page";
import { useRef } from "react";

export default function Home() {
  const language = "en";
  const platform = "facebook";

  let props = {
    platform: "facebook",
    lang: "sp",
  };

  const scrolToRef = useRef();

  return (
    <>
      <Head>
        <title>Facebook Thumbnail Downloader</title>
        <meta name="description" content="junior fron end developper"></meta>
      </Head>

      <Header scrolToRef={scrolToRef} />
      <main className="flex flex-col justify-around gap-10 px-[6%]">
        <h1 className="font-bold text-4xl text-center text-first">
          Facebook Thumbnails Downloader
        </h1>
        <LinkSection platform={platform} lang={language} />
        <Tutorial scrolToRef={scrolToRef} />
        <div>
          <h1 className="text-4xl text-center">
            About YouTube Thumbnail Downloader
          </h1>
          <div>
            The video thumbnail that's attached to the video on such platforms
            as YouTube is the face of the video and can play an important role
            in a user's decision to click on it Very often you might need the
            thumbnail of a video separately for a variety of uses: to make a
            collage of different video thumbnails for your blog post, design a
            cover image for your channel using various video thumbnails, use it
            in a social media post in case it’s not generated automatically, and
            so on. In any case, it’s great to have a tool that allows quickly
            grabbing and downloading the thumbnail on your device. Our YouTube
            Thumbnail Downloader does exactly that. It allows you to generate
            the thumbnail of any YouTube video and download it in just a few
            seconds (for Vimeo thumbnails go here). Let’s quickly go through the
            steps you need to complete to get the thumbnail on your device.
          </div>
        </div>

        <Steps />
        {/* platform={platform} lang={language} */}
        {/* 
      {/* Tutorial section must require a google photo tutorial
       */}
      </main>
    </>
  );
}

//TODO:
// Lazy Loading
