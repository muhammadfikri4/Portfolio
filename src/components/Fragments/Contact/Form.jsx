import React, { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { sendMessage } from "../../../utils/api";
import axios from "axios";

const Form = () => {
  const [data, setData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  return (
    <form className="flex flex-col gap-5 w-[500px] tablet:max-w-[400px] hp:w-[300px] py-5">
      <input
        type="text"
        placeholder="Full Name"
        className="pr-10 py-5 pl-3 rounded-lg border border-transparent outline-none bg-[#151030] placeholder-[rgba(255,255,255,0.8)] text-white"
        onChange={(e) => setData({ ...data, fullName: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        className="pr-10 py-5 pl-3 rounded-lg bg-[#151030] border border-transparent outline-none placeholder-[rgba(255,255,255,0.8)] text-white"
        onChange={(e) => setData({ ...data, email: e.target.value })}
      />

      <textarea
        placeholder="Message"
        className="pr-10 py-5 h-36 pl-3 rounded-lg bg-[#151030] border border-transparent outline-none placeholder-[rgba(255,255,255,0.8)] text-white resize-none"
        onChange={(e) => setData({ ...data, message: e.target.value })}
      ></textarea>

      <button
        onClick={(e) =>
          sendMessage(e, {
            fullName: data.fullName,
            email: data.email,
            message: data.message,
            Swal,
            withReactContent,
            axios,
          })
        }
        className="bg-rainbow-full text-white py-2 rounded-full hover:bg-rainbow"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
