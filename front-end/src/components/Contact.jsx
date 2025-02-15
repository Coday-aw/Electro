import { contacts } from "../lib/data";

const Contact = () => {
  return (
    <div>
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
        <form className="flex-1 border rounded-sm p-5 h-[450px]">
          <p className="text-center font-bold text-xl">Write to us</p>
          <div className="flex flex-col gap-5">
            <input
              type="text"
              placeholder="Full Name"
              className="border-b-2 p-2"
            />
            <input
              type="email"
              placeholder="Email"
              className="border-b-2 p-2"
            />

            <textarea
              placeholder="Message"
              name="message"
              id="message"
              className="border p-2 h-[200px]"
            ></textarea>
            <button className="border bg-yellow-500 p-2 rounded-lg text-white">
              Send message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Contact;
