import FeaturedBlog from "@/src/components/FeaturedBlog/FeaturedBlog";
import About from "@/src/components/about/About";
import Image from "next/image";
import React from "react";


const page = () => {
  return (
    <>
      <About></About>
      <FeaturedBlog></FeaturedBlog>
    </>
  );
};

export default page;
