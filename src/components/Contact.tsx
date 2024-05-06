function Contact() {
  const config:any = {
    email:"Jathurshan@protonmail.com",
    phone:"+946443471"
  }
  return (
    <section className="flex  flex-col bg-primary px-5 py-32" id="contact">
      <div className="flex flex-col items-center text-white">
        <h1 className="text-4xl border-b-4 border-secondary mb-5 w-[135px] font-bold">
          Contact
        </h1>
        <p className="pb-5 text-xl">
          If you want to discuss more in details,please contact me{" "}
        </p>
        <p className="py-2 text-xl ">
          <span className="font-bold">Email: {config.email} </span>
        </p>
        <p className="py-2 text-xl">
          <span className="font-bold">Phone: {config.phone} </span>
        </p>
      </div>
    </section>
  );
}

export default Contact;
