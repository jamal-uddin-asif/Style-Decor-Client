import React from "react";

const Stats = () => {
  return (
    <div>
      <section className="bg-indigo-900 py-16 lg:py-25 lg:my-25 px-6 text-white">
        <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div>
            <h2 className="text-4xl font-bold">24/7</h2>
            <p className="opacity-80">Available service</p>
          </div>
          <div>
            <h2 className="text-4xl font-bold">450+</h2>
            <p className="opacity-80">Expert Decorators</p>
          </div>
          <div>
            <h2 className="text-4xl font-bold">99%</h2>
            <p className="opacity-80">Happy Clients</p>
          </div>
          <div>
            <h2 className="text-4xl font-bold">64</h2>
            <p className="opacity-80">City Coverage</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Stats;
