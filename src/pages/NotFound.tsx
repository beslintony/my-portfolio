const NotFound = () => (
  <div className="h-screen bg-gradient-to-tr to-blue-300 from-fuchsia-500 flex flex-col justify-center items-center gap-5">
    <h1 className="font-semibold text-2xl">404 - Page Not Found</h1>
    <p className="mono text-white">
      The page you are looking for does not exist.
    </p>
    <a href="/" className="p-3 underline hover:text-white">
      Go back home
    </a>
  </div>
);

export default NotFound;
