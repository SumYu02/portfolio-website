import React from "react";
import { useState } from "react";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "84b0bca7-6eb2-4b88-b18a-d087cc0a4139");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div id="contact" className="w-full px-[12%] py-10 scroll-mt-20">
      <div className="w-full px-[12%] pt-10 ml-2 scroll-mt-20 flex-1">
        <h1 className="text-center text-lg mb-2 ">Connect with me</h1>
        <p className="text-center text-5xl">Get in touch</p>
        <p className="text-center max-w-2xl mx-auto text-gray-600 text-md mt-4">
          I'm currently looking for new opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I'll try my best
          to get back to you!
        </p>
        <form className="max-w-2xl mx-auto " onSubmit={onSubmit}>
          <div className="grid sm:grid-cols-2 gap-6 mt-10 mb-8">
            <input
              type="text"
              placeholder="Enter your name"
              className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md"
              required
              name="name"
            />
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md"
              required
              name="email"
            />
          </div>
          <textarea
            rows={"6"}
            placeholder="Enter your message"
            className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md mb-6"
            required
            name="message"
          ></textarea>
          <button
            type="submit"
            className="py-3 px-8 w-max flex items-center mx-auto bg-black hover:bg-black/80 text-white rounded-full justify-between "
          >
            Send Message
          </button>

          <p className="mt-4">{result}</p>
        </form>
      </div>
    </div>
  );
};

export default Contact;
