import Teams from "@/components/out-team";

const AboutPage = () => {
  return (
    <div className="flex flex-col items-center min-h-screen mt-20">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">About Us</h1>
      <p className="text-md sm:text-lg md:text-xl lg:text-2xl text-white  text-center px-4">
        We are a dedicated team committed to providing the best service in the industry.
      </p>
     
        <Teams />
     
      <div className="my-10 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4">Our Mission</h2>
        <p className="text-md sm:text-lg md:text-xl lg:text-2xl text-white mb-6 text-center px-4">
          Our mission is to provide high-quality, reliable, and affordable services to our customers. We strive to exceed expectations and ensure customer satisfaction.
        </p>
      </div>
    </div>
  );
}

export default AboutPage;