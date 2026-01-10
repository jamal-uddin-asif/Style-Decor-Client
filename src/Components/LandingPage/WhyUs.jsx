import { BiCheckDouble } from "react-icons/bi";
import Container from "../Shared/Container";
import SectionTitle from "../Shared/SectionTitle";
const why = [
  "Professional & Verified Decorators",
  "Budget-friendly Custom Packages",
  "Timely Execution & Support",
  "Hassle-free Online Booking",
];
export const WhyUs = () => (
  <Container>
    <section className="py-20  flex flex-col lg:flex-row justify-between gap-10 items-center">
      <div className="lg:w-1/2 order-2 lg:order-1">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800"
          className="rounded-2xl"
          alt="Office Decor"
        />
      </div>
      <div className=" order-1 lg:order-2 space-y-6">
        <h2 className="text-4xl font-bold text-slate-900">
          Why Choose Our Service?
        </h2>
        <div className="space-y-4">
          {why.map((text, i) => (
            <div
              key={i}
              className="flex items-center gap-3 text-lg text-slate-700"
            >
              <BiCheckDouble className="text-indigo-600 text-2xl" /> {text}
            </div>
          ))}
        </div>
      </div>
    </section>
  </Container>
);
