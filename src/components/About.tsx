const About = () => (
  <section
    id="about"
    className="p-8 md:p-16 md:px-32 gap-2 bg-white grid grid-cols-1 md:grid-cols-2 justify-items-center"
  >
    <div>
      <h1 className="text-3xl font-semibold my-2">I am....</h1>
      <p className="text-gray-500 text-lg">
        I&apos;m a Web Developer based in Germany. I have a passion for web
        development and love to create for web and mobile devices. I have experience
        in ReactJS, NextJS, TailwindCSS, and NodeJs. I have also like to work on the backends. Currently doing my
        Master&apos;s in Computer Science in Germany.
      </p>
      <div className="mt-8 space-x-4">
        <p className="font-thin my-4 text-gray-500 text-lg md:my-2 pb-2">
          Connect me through
        </p>
        <a
          href="https://www.linkedin.com/in/beslintony/"
          target="_blank"
          rel="noreferrer"
          className="bg-gray-900 text-white rounded-full p-2 px-4 text-sm font-semibold shadow-xl"
        >
          LinkedIn
        </a>
        <a
          href="https://www.github.com/beslintony/"
          target="_blank"
          rel="noreferrer"
          className="bg-gray-900 text-white rounded-full p-2 px-4 text-sm font-semibold shadow-xl"
        >
          GitHub
        </a>
      </div>
    </div>
    <div>
      <h1 className="text-3xl font-semibold my-4 md:my-2 text-center">
        Top Skills
      </h1>
      <div className="grid grid-cols-3 gap-8">
        <button className="hover:border-blue-500">
          <img
            alt="html5"
            src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
            className="w-16 h-16"
          />
        </button>
        <button className="hover:border-blue-500">
          <img
            alt="css3"
            src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"
            className="w-16 h-16"
          />
        </button>
        <button className="hover:border-blue-500">
          <img
            alt="ts"
            src="https://upload.wikimedia.org/wikipedia/commons/f/f5/Typescript.svg"
            className="w-16 h-16"
          />
        </button>
        <button className="hover:border-blue-500">
          <img
            alt="git"
            src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg"
            className="w-16 h-16"
          />
        </button>
        <button className="hover:border-blue-500">
          <img
            alt="react"
            src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
            className="w-16 h-16"
          />
        </button>
        <button className="hover:border-blue-500">
          <img
            alt="nodejs"
            src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
            className="w-16 h-16"
          />
        </button>
        <button className="hover:border-blue-500">
          <img
            alt="redux"
            src="https://d33wubrfki0l68.cloudfront.net/97f337956b87f4589dbf68591f22f5f3dacf2736/55f2a/img/redux_white.svg"
            className="w-16 h-16 bg-[#764abc] border-[#764abc]"
          />
        </button>
        <button className="hover:border-blue-500">
          <img
            alt="python"
            src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"
            className="w-16 h-16"
          />
        </button>
        <button className="hover:border-blue-500">
          <img
            alt="graphql"
            src="https://upload.wikimedia.org/wikipedia/commons/1/17/GraphQL_Logo.svg"
            className="w-16 h-16"
          />
        </button>
      </div>
    </div>
  </section>
);

export default About;
