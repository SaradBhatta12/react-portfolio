"use client";
import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const Contact: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    setTimeout(() => {
      toast.success("successfully send message to sarad");
    }, 4000);

    setName("");
    setEmail("");
    setMessage("");
    try {
      let response = await axios.get("https://server-ten-bay.vercel.app/");
      console.log(response);

      await axios.post("https://server-ten-bay.vercel.app/", {
        name,
        email,
        message,
      });

      console.log("Form submitted successfully");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="flex flex-col gap-10">
      <h1 className="heading text-3xl font-extrabold opacity-70">
        Get In Touch <span className="bg-slate-200 p-4 rounded-[50%]">📞</span>
      </h1>
      <div className="form flex justify-center items-center">
        <form className="flex flex-col gap-3" onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="John Deno"
            name="name"
            className="bg-transparent p-3 text-blue-400 border border-blue-500 outline-dotted outline-blue-700 rounded"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <input
            type="text"
            placeholder="Example@example.com"
            className="bg-transparent p-3 text-blue-400 border border-blue-500 outline-dotted outline-blue-700 rounded"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <textarea
            name="message"
            id="message"
            placeholder="Help me please"
            className="bg-transparent p-2 border border-blue-500 outline-dotted outline-blue-700 rounded"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
          <button
            type="submit"
            className="border border-none outline-double p-2 bg-blue-300 text-blue-800 rounded"
          >
            Send Enquiry
          </button>
        </form>
      </div>
      <Toaster />
    </div>
  );
};

export default Contact;
