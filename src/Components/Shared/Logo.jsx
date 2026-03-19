import React from "react";
import { MdSd } from "react-icons/md";
import { Link } from "react-router";

const Logo = ({ className = "" }) => {
  return (
    <Link
      to="/"
      className={`group flex items-center gap-2 transition-opacity hover:opacity-90 ${className}`}
    >
      <div className="flex items-center justify-center p-1.5 bg-secondary/10 rounded-lg text-secondary group-hover:scale-105 transition-transform">
        <MdSd size={28} />
      </div>

      <h2 className="text-xl tracking-tight font-extrabold ">
        Style
        <span className="text-secondary ml-1 font-semibold">Decor</span>
      </h2>
    </Link>
  );
};

export default Logo;
