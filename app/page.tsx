import Image from "next/image";
import LinkSection from "./components/page";
import TutorialSetion from "./components/tutorial/page";
import Footer from "./components/footer/page";

export default function Home() {
  const language = "en";
  const platform = "facebook";

  let props = {
    platform: "facebook",
    lang: "sp",
  };

  return (
    <main className="flex flex-col min-h-screen">
      <LinkSection platform={platform} lang={language} />
      <TutorialSetion />
      <div>
        <h1 className="text-4xl text-center">
          About YouTube Thumbnail Downloader
        </h1>
        <div>
          The video thumbnail that’s attached to the video on such platforms as
          YouTube is the face of the video and can play an important role in a
          user's decision to click on it Very often you might need the thumbnail
          of a video separately for a variety of uses: to make a collage of
          different video thumbnails for your blog post, design a cover image
          for your channel using various video thumbnails, use it in a social
          media post in case it’s not generated automatically, and so on. In any
          case, it’s great to have a tool that allows quickly grabbing and
          downloading the thumbnail on your device. Our YouTube Thumbnail
          Downloader does exactly that. It allows you to generate the thumbnail
          of any YouTube video and download it in just a few seconds (for Vimeo
          thumbnails go here). Let’s quickly go through the steps you need to
          complete to get the thumbnail on your device.
        </div>
      </div>
      {/* platform={platform} lang={language} */}
      {/* <DisplaySection />
      {" "}
      {/* Tutorial section must require a google photo tutorial
       */}
      <Footer />
    </main>
  );
}
