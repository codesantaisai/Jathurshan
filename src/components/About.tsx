import AboutImg from '../assets/about.png'
function About() {
  return (
    <section className='flex flex-col md:flex-row justify-center bg-secondary px-5'>
        <div className='md:w-1/2 py-5'>
            <img src={AboutImg} alt="" />
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center text-white'>
            <h1 className='text-4xl  border-b-4 mb-5 border-primary w-[160px] font-bold'>About Me</h1>
            <p className='pb-5 text-xl'>
                Hi, I am Jathurshan Santhirasekaram. I am a Fullstack Web Developer.I built beautiful websites with React.js and Tailwind css
            </p>
            <p className='pb-5 text-xl'>
                I am proficient in frontend skills like reactjs, redux, redux toolkit ,RTK qury Typescript tailwind css ,css,scss and many more. 
            </p>
            <p className='pb-5 text-xl' >
                in Backend skills like Nodejs, ExpressJS, Mongodb ,MySQL, Asp.Net Web API, EFCore and many more. 
            </p>
            </div>
        </div>
    </section>
  )
}

export default About