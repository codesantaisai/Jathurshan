import AboutImg from "../assets/about.png";
function About() {
  const config = [
    {
      line1:
        "Hi, I am Jathurshan Santhirasekaram. I am a Fullstack Web Developer.I built beautiful websites with React.js and Tailwind css",
      line2:
        "I am proficient in frontend skills like reactjs, redux, redux toolkit ,RTK qury Typescript tailwind css ,css,scss and many more.",
      line3:
        "in Backend skills like Nodejs, ExpressJS, Mongodb ,MySQL, Asp.Net Web API, EFCore and many more. ",
    },
  ];
  return (
    <section
      className="flex flex-col md:flex-row justify-center bg-secondary px-5 "
      id="about"
    >
      <div className="md:w-1/2 py-5">
        <img src={AboutImg} alt="" />
      </div>
      <div className="md:w-1/2 flex justify-center">
        <div className="flex flex-col justify-center text-white">
          <h1 className="text-4xl  border-b-4 mb-5 border-primary w-[160px] font-bold">
            About Me
          </h1>

          {config.map((lines) => (
            <>
              <p className="pb-5 text-xl">{lines.line1}</p>
              <p className="pb-5 text-xl">{lines.line2}</p>
              <p className="pb-5 text-xl">{lines.line3}</p>
            </>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
