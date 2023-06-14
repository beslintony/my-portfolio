const projectsList = [
  {
    id: 1,
    name: "Moviebase: Movie App",
    image: "movie.png",
    projectUrl: "https://github.com/beslintony/imdb-movie",
    technologies: ["ReactJS", "TailwindCSS", "NextJS", "TypeScript"],
    backendTechnologies: ["TMDB API"],
  },
  {
    id: 2,
    name: "Fulstorda: Ecommerce App",
    image: "fulstoreda.png",
    projectUrl: "https://github.com/beslintony/ecommerce-app",
    technologies: ["ReactJS", "Redux Toolkit", "MUI", "Axios"],
    backendTechnologies: ["NodeJS", "ExpressJS", "MySQL", "Multer", "JWT"],
  },
  {
    id: 3,
    name: "Simple File Transfer",
    image: "fileshare.png",
    projectUrl: "https://github.com/beslintony/webrtc-simple-file-transfer",
    technologies: ["ReactJS", "WebRTC", "socket.io-client", "simple-peer"],
    backendTechnologies: ["NodeJS", "ExpressJS", "Socket.io"],
  },
  {
    id: 4,
    name: "H&RE: Real Estate App",
    image: "H&RE.png",
    projectUrl: "https://github.com/beslintony/realestate-app",
    technologies: [
      "ReactJS",
      "Zustand",
      "MUI",
      "Axios",
      "socket.io-client",
      "Formik",
    ],
    backendTechnologies: [
      "NodeJS",
      "ExpressJS",
      "MySQL",
      "Multer",
      "JWT",
      "socket.io",
    ],
  },
];

const MyProjects = () => (
  <section
    id="projects"
    className="py-16 flex flex-col items-center bg-gradient-to-r from-fuchsia-100 to-blue-100"
  >
    <h1 className="text-center font-semibold text-3xl">
      Some Projects I've Built
    </h1>
    <p className="text-gray-500 text-lg  text-center p-8 w-4/5 leading-relaxed">
      These are some of the websites I have built for myself. I have used a
      variety of technologies to build these websites including JavaScript,
      TypeScript, HTML, CSS, Material UI, Redux Toolkit, Zustand, etc. I have
      also used a variety of frameworks and libraries including React, Next JS,
      Bootstrap, Tailwind CSS etc too.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-4/5">
      {projectsList.map(
        ({ name, image, technologies, backendTechnologies, projectUrl }, id) => (
          <div key={id} className="bg-white border border-gray-200 rounded-lg shadow-lg transition duration-500 hover:scale-105">
            <a href={projectUrl} target="_blank" rel="noreferrer">
              <img
                className="rounded-t-lg h-72 w-full"
                src={image}
                alt={name}
              />
            </a>
            <div className="p-5">
              <a href={projectUrl} target="_blank" rel="noreferrer">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-fuchsia-600">
                  {name}
                </h5>
                {technologies.map((technology, id) => (
                  <span key={id} className="inline-block bg-gradient-to-r from-fuchsia-600 to-blue-700 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                    {technology}
                  </span>
                ))}
                {backendTechnologies.map((backendTechnology, id) => (
                  <span key={id} className="inline-block bg-gradient-to-r from-fuchsia-600 to-blue-700  rounded-full px-3 py-1 text-sm font-semibold text-gray-100 mr-2 mb-2">
                    {backendTechnology}
                  </span>
                ))}
              </a>
            </div>
          </div>
        )
      )}
    </div>
  </section>
);

export default MyProjects;
