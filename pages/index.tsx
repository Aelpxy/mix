import { NextPage } from "next";
import Head from "next/head";

import ImageGallery from "@components/ImageGallery";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Mix | Wallpapers</title>
      </Head>
      <ImageGallery />
    </>
  );
};

export default Home;
