import ResumeImg from "../assets/resume.jpg";
function Resume() {
  return (
    <section className="flex flex-col md:flex-row justify-center bg-secondary px-5">
      <div className="py-5 md:w-1/2  flex justify-center">
        <img className="w-[300px]" src={ResumeImg} alt="" />
      </div>
      <div className="md:w-1/2 flex justify-center">
        <div className="flex flex-col justify-center text-white">
          <h1 className="text-4xl  border-b-4 mb-5 border-primary w-[140px] font-bold">
            Resume
          </h1>
          <p className="pb-5 text-xl">
            You can view my resume <a className="btn px-5 py-4 rounded border-white hover:border-2 font-bold" href="#">Download</a>
          </p>   
        </div>
      </div>
    </section>
  );
}

export default Resume;
