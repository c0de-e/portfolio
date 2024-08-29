"use client";
import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  HTMLAttributes,
  useLayoutEffect,
  useState,
} from "react";
import { themeChange } from "theme-change";
import { themeTypes } from "@/app/../../themes";
import "@/app/styles/scroll.css";

export default function ThemeController(props: props) {
  const [selectedTheme, setSelectedTheme] = useState("default");
  useLayoutEffect(() => {
    const themeName = localStorage.getItem("theme");
    if (themeName) setSelectedTheme(themeName);
    themeChange(false);
  }, []);

  const themeList = themeTypes.map((theme) => {
    return (
      <li key={theme.name} className="flex gap-2">
        <input
          type="button"
          name="theme-dropdown"
          className={`theme-controller btn btn-sm btn-block flex-1 justify-start text-start ${theme.name == selectedTheme ? "btn-secondary" : "btn-ghost"}`}
          aria-label={theme.name}
          data-set-theme={theme.name}
          value={theme.name[0].toUpperCase() + theme.name.slice(1)}
          onClick={() => setSelectedTheme(theme.name)}
        />
        {theme.name != "default" ? (
          <div className="text-end">({theme.type})</div>
        ) : null}
      </li>
    );
  });

  return (
    <div
      {...props.props}
      className={
        "dropdown dropdown-bottom self-center " + props.props?.className
      }
    >
      <button
        {...props.buttonProps}
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-secondary btn-xs m-1 sm:btn-sm md:btn-md"
      >
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
      </button>
      <ul
        {...props.dropdownProps}
        className={
          "scrollbar dropdown-content z-[1] h-56 w-52 overflow-y-scroll rounded-box bg-base-300 p-2 shadow-2xl " +
          props?.dropdownProps?.className
        }
      >
        {themeList}
      </ul>
    </div>
  );
}

interface props {
  props?: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
  buttonProps?: DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >;
  dropdownProps?: DetailedHTMLProps<
    HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  >;
}
