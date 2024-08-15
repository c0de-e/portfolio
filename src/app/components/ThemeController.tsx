"use client";
import { DetailedHTMLProps, HTMLAttributes, useEffect, useState } from "react";
import { themeChange } from "theme-change";
import { themeTypes } from "@/app/../../themes";
import "@/app/styles/scroll.css";

export default function ThemeController(props: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) {
  const [ selectedTheme, setSelectedTheme ] = useState("default");
  useEffect(() => {
    themeChange(false);
    const themeName = localStorage.getItem("theme");
    if (themeName) setSelectedTheme(themeName);
  }, []);

  const themeList = themeTypes.map((theme) => {
    return (
      <li key={theme.name} className="flex gap-2">
        <input
          type="button"
          name="theme-dropdown"
          className={`theme-controller flex-1 btn btn-sm btn-block justify-start text-start ${theme.name == selectedTheme ? "btn-accent" : "btn-ghost"}`}
          aria-label={theme.name}
          data-set-theme={theme.name}
          value={theme.name[ 0 ].toUpperCase() + theme.name.slice(1)}
          onClick={() => setSelectedTheme(theme.name)}
        />
        {theme.name != "default" ? <label htmlFor={theme.name} className="text-end">({theme.type})</label> : null}
      </li>
    );
  });
  return (
    <div {...props} className={"dropdown dropdown-bottom " + props.className}>
      <div tabIndex={0} role="button" className="btn btn-accent m-1">
        Theme
        <svg
          width="12px"
          height="12px"
          className="inline-block h-2 w-2 fill-current opacity-60"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2048 2048"
        >
          <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
        </svg>
      </div>
      <ul tabIndex={0} className="dropdown-content bg-base-300 rounded-box z-[1] w-52 p-2 shadow-2xl scrollbar overflow-y-scroll h-56">
        {themeList}
      </ul>
    </div>
  );
}
