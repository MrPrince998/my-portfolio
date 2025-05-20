import { useState } from "react";
import Input from "./Input"; 
import Button from "./Button";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form
      action="https://getform.io/f/bolmpnja"
      method="POST"
      className="grid gap-y-[30px]"
    >
      <Input
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
      />
      <Input
        name="email"
        placeholder="Email"
        type="email"
        value={formData.email}
        onChange={handleChange}
      />
      <Input
        name="number"
        placeholder="Phone Number"
        type="number"
        value={formData.number}
        onChange={handleChange}
      />
      <textarea
        name="message"
        placeholder="Message"
        value={formData.message}
        onChange={handleChange}
        className="w-full h-[162px]
          px-4 py-3
          rounded-lg border
          bg-[#BFBFBF]
          text-white
          border-gray-300 
          placeholder-white
          focus:outline-none focus:ring-2
          focus:ring-gray-300 
          focus:border-transparent
          transition-all duration-200 ease-in-out
          disabled:opacity-50 disabled:cursor-not-allowed"
      />
      <Button variant="secondary" name="Send" type="submit" />
    </form>
  );
}
