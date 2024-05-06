import EcommerceImg from "../assets/ecommerce-websites.jpg";
import FoodEcommerce from "../assets/food-ecommerce.jpg";
import WebsiteBlog from "../assets/website-blog.jpg";
function Projects() {
  const config = [
    {
      image: EcommerceImg,
      description: "Fullstack Ecommerce website using MERN",
      link: "",
    },
    {
      image: FoodEcommerce,
      description: "It is an Ecommerce like Swiggy",
      link: "",
    },
    {
      image: WebsiteBlog,
      description: "bloging website using Reactjs tailwind css like mediam",
      link: "",
    },
  ];

  return (
    <section
      className="flex flex-col justify-center py-20 px-5 bg-primary text-white"
      id="projects"
    >
      <div className="w-full">
        <div className="flex flex-col px-10">
          <h1 className="text-4xl border-b-4 mb-5 border-secondary font-bold w-[150px]">
            Projects
          </h1>
          <p className="text-xl py-5">
            These are some projects of my projects.I have built these with
            Reactjs Tailwind css
          </p>
        </div>
      </div>
      <div className="w-full text-xl">
        <div className="flex flex-col md:flex-row gap-5 px-10">
          {config.map((projects) => (
       
              <div className="relative">
                <img
                  className="h-[300px] w-[500px]"
                  src={projects.image}
                  alt="projects"
                />
                <div className="project-desc">
                  <p className="text-center px-5 py-5">
                    {projects.description}
                  </p>
                  <div className="flex justify-center">
                  <a className="btn" target="_blank" href={projects.link}>View Project</a>
                </div>
                </div>
  
              </div>
         
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
