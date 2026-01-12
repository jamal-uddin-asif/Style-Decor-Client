import { FiSearch, FiCalendar, FiCheckCircle } from "react-icons/fi";
import SectionTitle from "../Shared/SectionTitle";

const process = [
  {
    icon: <FiSearch />,
    title: "Find Service",
    desc: "Select your event category.",
  },
  {
    icon: <FiCalendar />,
    title: "Book Date",
    desc: "Pick a time that suits you.",
  },
  {
    icon: <FiCheckCircle />,
    title: "Get it Done",
    desc: "Our experts handle the rest.",
  },
];

export const Process = () => (
  <section className="py-20  px-6 text-center">
    <SectionTitle base={'How It'} color={'Works'}/>
    <div className="flex flex-col mt-12 md:flex-row justify-center items-center gap-12">
      {process.map((step, i) => (
        <div key={i} className="max-w-xs relative">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl text-indigo-600 shadow-md mx-auto mb-4">
            {step.icon}
          </div>
          <h4 className="font-bold text-lg">{step.title}</h4>
          <p className="text-slate-500 dark:text-base-content text-sm">{step.desc}</p>
        </div>
      ))}
    </div>
  </section>
);
