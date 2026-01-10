import { HiOutlineUserGroup } from "react-icons/hi";

export const Onboarding = () => (
  <section className="py-12 px-6">
    <div className="max-w-6xl mx-auto bg-emerald-600 rounded-3xl p-10 lg:p-16 text-white flex flex-col lg:flex-row justify-between items-center gap-8">
      <div className="flex items-center gap-6">
        <div className="hidden md:block text-6xl opacity-40"><HiOutlineUserGroup /></div>
        <div className="space-y-2">
          <h2 className="text-3xl font-bold">Grow Your Decor Business</h2>
          <p className="text-emerald-50 opacity-90">Join our platform as a professional decorator and reach thousands of clients.</p>
        </div>
      </div>
      <button className="bg-white text-emerald-700 px-8 py-3 rounded-xl font-bold hover:bg-emerald-50 transition-colors whitespace-nowrap">Apply as Decorator</button>
    </div>
  </section>
);