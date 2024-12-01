"use client";
import axios from "axios";
import React, { memo, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Loading from "./sub-components/Loading";

const Contact: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post("/api/auth/nodemailer", {
        name,
        email,
        message,
      });

      if (res.data.success === "false") {
        toast.error("Something went wrong, please try again later.");
      } else {
        toast.success("Message sent successfully.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("An error occurred, please try again.");
    } finally {
      setLoading(false);
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <div className="flex flex-col gap-10 border-2 border-blue-500 shadow-blue-600 p-10 rounded sm:w-[18rem]">
      {loading && <Loading />}
      <h1 className="heading text-3xl font-extrabold opacity- sm:text-xl">
        Get In Touch <span className="p-4 ">📞</span>
      </h1>
      <div className="form flex justify-center items-center ">
        <form className="flex flex-col gap-3" onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="John Deno"
            name="name"
            className="bg-transparent p-3 text-blue-400 border border-blue-500  rounded"
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <input
            type="email"
            placeholder="Example@example.com"
            className="bg-transparent p-3 text-blue-400 border border-blue-500  rounded"
            required
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <textarea
            name="message"
            id="message"
            placeholder="Help me please"
            className="bg-transparent p-2 border border-blue-500  rounded"
            required
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
          <button
            type="submit"
            className="border border-none outline-double p-2 bg-blue-300 text-blue-800 rounded"
            disabled={loading}
          >
            Send Enquiry
          </button>
        </form>
      </div>
      <Toaster />
    </div>
  );
};

export default memo(Contact);
