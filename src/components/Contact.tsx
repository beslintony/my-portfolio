const Contact = () => (
  <section
    id="contact"
    className="h-[20rem] bg-gradient-to-tr to-blue-400 from-fuchsia-300 flex justify-center items-center"
  >
    <div className="h-full flex flex-col justify-center items-center text-center">
      <h1 className="mb-2 font-mono text-4xl text-gray-100 md:text-6xl">
        Contact Me
      </h1>
      <p className="mt-4 text-gray-100">
        Reach out to me on LinkedIn or GitHub!
      </p>
      <div className="mt-12 space-x-4">
        <a
          href="
                    https://www.linkedin.com/in/beslintony/"
          target="_blank"
          rel="noreferrer"
          className="bg-gradient-to-r from-fuchsia-400 to-blue-700 text-white rounded-full p-4 px-6 text-sm font-semibold shadow-xl"
        >
          LinkedIn
        </a>
        <a
          href="https://www.github.com/beslintony/"
          target="_blank"
          rel="noreferrer"
          className="bg-gradient-to-r from-fuchsia-400 to-blue-700 text-white rounded-full p-4 px-6 text-sm font-semibold shadow-xl"
        >
          GitHub
        </a>
      </div>
    </div>
  </section>
);

export default Contact;
