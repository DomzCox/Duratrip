import { useState } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";



export default function EmialOptions() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    
  };

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(formData)
    emailjs
      .send(
        "service_tkvscc4", // Replace with your EmailJS service ID
        "template_jhpomb6", // Replace with your EmailJS template ID
        formData,
        "U_ZDDgHq0g7q3aJoj" // Replace with your EmailJS Public Key
      )
      .then(
        (response) => {
          setStatus("Email sent successfully! ✅");
          setFormData({ name: "", email: "", message: "" });
          toast.success("New order added to the route")
        },
        (error) => {
          setStatus("Failed to send email ❌");
        }
      );
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">📧 Send an Email</h2>

      <form onSubmit={sendEmail} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded-md"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded-md"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded-md"
        ></textarea>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
        >
          Send Email
        </button>
      </form>

      {status && <p className="mt-3 text-center text-gray-600">{status}</p>}
    </div>
  );
}
