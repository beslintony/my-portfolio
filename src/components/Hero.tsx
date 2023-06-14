const Hero = () => (
  <section
    id="hero"
    className="h-screen bg-gradient-to-tr to-blue-400 from-fuchsia-300 flex justify-center items-center"
  >
    <div className="h-full flex flex-col justify-center items-center text-center ">
      <h1 className="mb-2 font-mono text-4xl text-gray-100 md:text-6xl">
        hi, I&apos;m <br className="block md:hidden" />
        <span className="relative">
          <span className="h-20 pt-2 overflow-x-hidden text-brand-accent overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-5xl text-white font-bold">
            beslin <span className="text-3xl md:text-5xl">👋</span>
          </span>
        </span>
      </h1>
      <h1 className="overflow-hidden whitespace-nowrap font-mono text-xl font-bold animate-typing">
        A Web Developer.
      </h1>
      <div className="mt-12 space-x-4">
        <a
          href="#projects"
          className="bg-gradient-to-r from-fuchsia-400 to-blue-700 text-white rounded-full p-4 px-6 text-sm font-semibold shadow-xl"
        >
          My Projects
        </a>
        <a
          href="#contact"
          className="bg-gradient-to-r from-fuchsia-400 to-blue-700 text-white rounded-full p-4 px-6 text-sm font-semibold shadow-xl"
        >
          Contact Me
        </a>
      </div>
    </div>
  </section>
);

export default Hero;
