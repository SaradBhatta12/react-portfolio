import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col gap-10">
      <h1 className="heading text-3xl font-extrabold opacity-70">
        Get In Touch <span className="bg-slate-200 p-4 rounded-[50%]">📞</span>
      </h1>
      <div className="form flex justify-center items-center">
        <form className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="John Deno"
            className="bg-transparent p-3 text-blue-400 border border-blue-500 outline-dotted outline-blue-700 rounded"
          />
          <input
            type="text"
            placeholder="Example@example.com"
            className="bg-transparent p-3 text-blue-400 border border-blue-500 outline-dotted outline-blue-700 rounded"
          />
          <textarea
            name="message"
            id="message"
            placeholder="Help me please "
            className="bg-transparent p-2 border border-blue-500 outline-dotted outline-blue-700 rounded"
          ></textarea>
          <button className="border border-none outline-double p-2 bg-blue-300 text-blue-800 rounded">
            Send Enquery
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
