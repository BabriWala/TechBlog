import FeaturedBlog from "../components/FeaturedBlog/FeaturedBlog";
import FeaturedSlider from "../components/FeaturedSlider/FeaturedSlider";
import Topics from "../components/Topics/Topics";


export default function Home() {
  return (
    <>
      <main>
        <Topics></Topics>
        <FeaturedSlider></FeaturedSlider>
        <FeaturedBlog></FeaturedBlog>
      </main>
    </>
  );
}
