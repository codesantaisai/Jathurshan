import EcommerceImg from "../assets/ecommerce-websites.jpg";
import FoodEcommerce from "../assets/food-ecommerce.jpg";
import WebsiteBlog from "../assets/website-blog.jpg";
function Projects() {
  return (
    <section className="flex flex-col justify-center py-20 px-5 bg-primary text-white ">
      <div className="w-full">
        <div className="flex flex-col px-10">
          <h1 className="text-4xl border-b-4 mb-5 border-secondary font-bold w-[150px]">
            Projects
          </h1>
          <p className="text-xl py-5">These are some projects of my projects.I have built these with Reactjs Tailwind css</p>
        </div>
      </div>
      <div className="w-full text-xl">
        <div className="flex flex-col md:flex-row gap-5 px-10">
          <div className="relative">
            <img className="h-[300px] w-[500px]" src={EcommerceImg} alt="projects" />
            <div className="project-desc">
              <p className="text-center px-5 py-5">
                Fullstack Ecommerce website using MERN
              </p>
            </div>
          </div>
          <div className="relative">
            <img className=" h-[300px] w-[500px] " src={FoodEcommerce} alt="projects" />
            <div className="project-desc">
              <p className="text-center px-5 py-5">It is an Ecommerce like Swiggy</p>
            </div>
          </div>
          <div className="relative">
            <img className=" h-[300px] w-[500px]" src={WebsiteBlog} alt="projects" />
            <div className="project-desc">
              <p className="text-center px-5 py-5">bloging website using Reactjs tailwind css like mediam</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
