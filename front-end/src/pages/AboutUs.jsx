function AboutUs() {
  return (
    <div className="p-10 flex flex-col">
      <div className="flex flex-col lg:flex-row justify-center items-center gap-5">
        <div className="flex-1">
          <p className="text-5xl underline">About Us</p>
          <p className="lg:mt-10 mt-2 text-xl">
            Welcome to Electro, your premier destination for cutting-edge
            electronics that power innovation and simplify life. At Electro, we
            believe technology should inspire, empower, and elevate your
            everyday experiences. Founded in 2025, our mission is to bridge the
            gap between tomorrow’s possibilities and today’s needs by curating a
            selection of high-quality, innovative gadgets and electronics that
            redefine what’s possible.
          </p>
        </div>
        <img
          className="flex-1 w-full lg:w-[490px] h-[500px] object-fit"
          src="theTeam.jpg"
          alt="team"
        />
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-5">
        <img
          className="flex-1 w-full lg:w-[490px]  h-[500px] object-fit order-2 lg:order-1"
          src="whoAreWeImage.jpg"
          alt="team"
        />
        <div className="flex-1 order-1 lg:order-2">
          <p className="text-5xl ">Who We Are</p>
          <p className="lg:mt-10 mt-2 text-xl">
            We’re a team of tech enthusiasts, engineers, and visionaries driven
            by a shared passion for the transformative power of electronics.
            From smart home systems to portable tech, wearables, and beyond, we
            handpick products that combine functionality, durability, and sleek
            design. Whether you’re a professional seeking productivity tools, a
            gamer chasing immersive experiences, or a eco-conscious consumer
            looking for energy-efficient solutions, we’ve got you covered.
          </p>
        </div>
      </div>
    </div>
  );
}
export default AboutUs;
