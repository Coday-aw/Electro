import { useState } from "react";
import { contacts } from "../lib/data";
import toast, { Toaster } from "react-hot-toast";
import { SiMinutemailer } from "react-icons/si";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });
  const [messageSend, setMessageSend] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      toast.error("Invalid email");
      return;
    }

    try {
      const res = await fetch("http://localhost:8080/api/message", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      toast.success("Message Send!");
      setMessageSend(true);
    } catch (error) {
      console.log(error);
      toast.error("something when wrong");
    }
  };
  return (
    <div>
      <Toaster />
      <p className="text-center font-bold text-3xl mt-10 mb-5">Contact us</p>
      <div className="flex gap-10 flex-col md:flex-row p-5">
        <div className="flex flex-1 flex-col justify-center gap-10">
          {contacts.map((item) => (
            <div className="flex gap-2 items-center">
              <span className="bg-slate-300 cursor-pointer hover:bg-yellow-500 p-4 rounded-full">
                <item.icon size={30} />
              </span>

              <div>
                <p className="text-xl font-bold text-yellow-500">
                  {item.title}
                </p>
                <p>{item.content}</p>
              </div>
            </div>
          ))}
        </div>
        {messageSend ? (
          <div className="text-center mt-20 mb-10 flex-1 flex flex-col justify-center items-center ">
            <SiMinutemailer size={40} color="green" />

            <p>
              Thank you for reaching out to us! We’ve received your message and
              will get back to you as soon as possible. If you need immediate
              assistance, please let us know. Have a great day!
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex-1 border rounded-sm p-5 h-[450px]"
          >
            <p className="text-center font-bold text-xl">Write to us</p>
            <div className="flex flex-col gap-5">
              <input
                onChange={handleChange}
                value={formData.fullName}
                required
                name="fullName"
                type="text"
                placeholder="Full Name"
                className="border-b-2 p-2"
              />
              <input
                onChange={handleChange}
                value={formData.email}
                name="email"
                type="email"
                placeholder="Email"
                className="border-b-2 p-2"
              />

              <textarea
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                required
                name="message"
                id="message"
                className="border p-2 h-[200px]"
              ></textarea>
              <button className="border bg-yellow-500 p-2 rounded-lg text-white">
                Send message
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
export default Contact;
