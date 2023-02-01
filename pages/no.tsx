import { NextPage } from "next";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import loader from "@lib/loader";
import Layout from "@layouts/Layout";

const data: string[] = [
  "https://source.unsplash.com/random/1920x1080?paris",
  "https://source.unsplash.com/random/1920x1080?london",
  "https://source.unsplash.com/random/1920x1080?rome",
  "https://source.unsplash.com/random/1920x1080?berlin",
  "https://source.unsplash.com/random/1920x1080?moscow",
  "https://source.unsplash.com/random/1920x1080?newyorkcity",
  "https://source.unsplash.com/random/1920x1080?barcelona",
  "https://source.unsplash.com/random/1920x1080?amsterdam",
  "https://source.unsplash.com/random/1920x1080?sanfrancisco",
  "https://source.unsplash.com/random/1920x1080?santorini",
  "https://source.unsplash.com/random/1920x1080?prague",
  "https://source.unsplash.com/random/1920x1080?sydney",
  "https://source.unsplash.com/random/1920x1080?tokyo",
  "https://source.unsplash.com/random/1920x1080?dubai",
  "https://source.unsplash.com/random/1920x1080?florence",
  "https://source.unsplash.com/random/1920x1080?venice",
];

const No: NextPage = () => {
  return (
    <Layout title="Mix | Do not fetch from API">
      <div className="gallery">
        <div className="bg-white">
          <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="flex items-center justify-between space-x-4">
              <Link href={"/"}>
                <code className="text-3xl font-bold hover:underline">
                  ~/mix
                </code>
              </Link>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
              {data.map((image: any) => (
                <div
                  key={image}
                  className="group relative rounded bg-gray-50 border transition hover:border-black select-none"
                >
                  <div className="aspect-w-4 aspect-h-3 overflow-hidden">
                    <Image
                      loader={loader}
                      src={image}
                      placeholder="blur"
                      blurDataURL={image}
                      loading="lazy"
                      alt={image}
                      width={1920}
                      height={1080}
                    />
                    <div className="flex items-end p-4" aria-hidden="true">
                      <a
                        className="w-full py-2 px-4 text-sm font-medium backdrop-filter text-center border rounded bg-white transition hover:bg-black hover:text-white hover:border-white"
                        href={image}
                        target={"_blank"}
                        rel="noreferrer"
                      >
                        <button>View Image</button>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default No;
