import { RiDoubleQuotesL } from "react-icons/ri";

export const Testimonials = () => (
  <section className="py-20 px-6 max-w-4xl mx-auto text-center">
    <RiDoubleQuotesL className="text-6xl text-indigo-100 mx-auto mb-6" />
    <p className="text-2xl italic text-slate-700 leading-relaxed mb-8">
      "The office renovation was done within 3 days without disturbing our workflow. The decorators were extremely professional and the admin support was superb!"
    </p>
    <div>
      <h4 className="font-bold text-lg text-slate-900 text-center">Rahat Karim</h4>
      <p className="text-slate-500">CEO, TechBD Solutions</p>
    </div>
  </section>
);