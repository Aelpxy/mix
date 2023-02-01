import { NextPage } from "next";

import Layout from "@layouts/Layout";
import ImageGallery from "@components/ImageGallery";

const Home: NextPage = () => {
  return (
    <Layout title="Mix">
      <ImageGallery />
    </Layout>
  );
};

export default Home;
