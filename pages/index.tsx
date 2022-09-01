import { NextPage } from "next";
import Head from "next/head";

import Image from "next/image";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Demix | Find your rice</title>
      </Head>
      <h1 className="text-center text-3xl">Find your rice.</h1>
      <div>
        <Image
          placeholder="blur"
          src=""
          blurDataURL=""
          loading="lazy"
          alt="Image"
          width={1125}
          height={750}
        />
      </div>
    </>
  );
};

export default Home;
