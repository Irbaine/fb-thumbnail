import Image from "next/image";
import Copy from "../../../public/copy_url.jpg";
import data from "../../data";

export default function Steps() {
  return (
    <section className="flex flex-col text-center">
      <div>
        <h1 className={`${data.h1}`}>Step One: Copy the Video URL</h1>
        <Image
          src={Copy}
          width={200}
          height={100}
          alt=""
          quality={50}
          loading="lazy"
          className="shadow-lg"
        />
        <div>
          Go to the video that you want to download it{"'"}s thumbnail, and make
          sure that it is public, unfortunately we can{"'"}t access video from
          private groups or profiles. <br /> So make sure your video is public,
          and copy the video url by clicking the three dots button, and click
          copy link.{" "}
        </div>
      </div>

      <div>
        <h1 className={`${data.h1}`}>Step Two: Paste The Url</h1>
        <Image
          src={Copy}
          width={200}
          height={100}
          alt=""
          quality={50}
          loading="lazy"
          className="shadow-lg"
        />
        <div>
          After copying the video url, paste it in the Video url box. If the
          provided link is accepted then you will see a download button to
          download your facebook video picture.
        </div>
      </div>

      <div>
        <h1 className={`${data.h1}`}>
          Step Three: Download the Video Thumbnail
        </h1>
        <div className=" my-50 bg-black">
          <Image
            src={Copy}
            layout="responsive"
            alt=""
            quality={50}
            loading="lazy"
            className="shadow-lg"
          />
        </div>
      </div>
      {/* 

      fixed 
      responsive // must used with max-w
      intrensic //acts lake <img>
      fill // height must be pecified and parent must be relative fixed or absolute

      layout="fill" objectFit="cover" objectPosition="top"
      layout="fill" objectFit="contain" // will show the entire picture contained
      
      */}
      <div>
        After the download button appears, you can click it then and wait some
        few seconds and you facebook video preview will get downloaded to your
        device.
      </div>
    </section>
  );
}
