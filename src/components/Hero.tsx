import HeroImg from "../assets/hero.png";
import {
  AiOutlineTwitter,
  AiOutlineFacebook,
  AiOutlineLinkedin,
} from "react-icons/ai";

function Hero() {
  return (
    <section className="flex flex-col  md:flex-row px-5 py-32 bg-primary justify-center">
      <div className="md:w-1/2 flex flex-col">
        <h1 className=" text-white text-4xl font-hero-font ">
          Hi,
          <br /> I am Jathurshan
          <p className="text-2xl">I am a Full-Stack Developer</p>
        </h1>
        <div className="flex py-10 space-x-5">
          <a className="hover:text-white" href="#">
            <AiOutlineTwitter size={40} />
          </a>
          <a className="hover:text-white" href="#">
            <AiOutlineFacebook size={40} />
          </a>
          <a className="hover:text-white" href="#">
            <AiOutlineLinkedin size={40} />
          </a>
        </div>
      </div>
      <img className="md:w-1/3" src={HeroImg} />
    </section>
  );
}

export default Hero;
