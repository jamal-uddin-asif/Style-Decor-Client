import { Switch } from "@headlessui/react";
import React, { useEffect, useState } from "react";

export const SwitchMode = () => {
  const [enabled, setEnabled] = useState(false);

  const [theme, SetTheme] = useState(localStorage.getItem("theme") || "light");
  console.log(enabled);

  useEffect(() => {
    const html = document.querySelector("html");
   html.setAttribute('data-theme', theme)
   localStorage.setItem('theme', theme)
  }, [theme]);

  const handleMode = () =>{
    SetTheme(enabled ? 'dark':'light')
  }
  return (
    <div >
        
      <Switch
onClick={()=>handleMode()}
        checked={theme === 'dark'}
        onChange={setEnabled}
        className="group relative flex h-7 w-14 cursor-pointer rounded-full bg-white/10 p-1 ease-in-out focus:not-data-focus:outline-none data-checked:bg-white/10 data-focus:outline data-focus:outline-white"
      >
        <span
          aria-hidden="true"
          className="pointer-events-none inline-block size-5 translate-x-0 rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out group-data-checked:translate-x-7"
        />
      </Switch>
    </div>
  );
};

export default SwitchMode;
