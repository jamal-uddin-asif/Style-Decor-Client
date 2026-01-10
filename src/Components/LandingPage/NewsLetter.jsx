import { FiMail } from "react-icons/fi";

export const Newsletter = () => (
  <section className="py-20 px-6  border-t border-slate-100 text-center">
    <div className="max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">Subscribe to our News</h2>
      <p className="text-slate-500 mb-8">Get the latest trends in event and office decoration delivered to your inbox.</p>
      <div className="flex gap-2 p-1 border border-slate-200 rounded-2xl focus-within:ring-2 ring-indigo-500 transition-all">
        <div className="flex items-center pl-4 text-slate-400 text-xl"><FiMail /></div>
        <input type="email" placeholder="Enter your email" className="w-full py-3 outline-none bg-transparent" />
        <button className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-indigo-700">Subscribe</button>
      </div>
    </div>
  </section>
);