import React, { useContext } from "react";
import Layout from "../../components/layout/Layout";
import HeroSection from "../../components/herosection/HeroSection";
import Filter from "../../components/filter/Filter";

function Home() {
  return (
    <Layout>
      <HeroSection/>
      <Filter/>
    </Layout>
  );
}

export default Home;
