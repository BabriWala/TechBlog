import Image from "next/image";
import React from "react";
import FeaturedBlog from "@/components/FeaturedBlog/FeaturedBlog";
import About from "@/components/about/About";

const page = () => {
  return (
    <>
      <About></About>
      <FeaturedBlog></FeaturedBlog>
    </>
  );
};

export default page;
