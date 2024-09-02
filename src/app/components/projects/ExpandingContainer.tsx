"use client";

import { useEffect, useRef, useState } from "react";
import "@/app/styles/expandingContainer.css";

export default function ExpandingContainer(props: props) {
  const [showing, setShowing] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    props.tabbableDivs =
      props.tabbableDivs ??
      Array.from(
        containerRef.current?.querySelectorAll(
          "li",
        ) as NodeListOf<HTMLLIElement>,
      );
    updateTabbableDivs();
  });

  const updateTabbableDivs = () => {
    if (!props.tabbableDivs) return;
    props.tabbableDivs.forEach((child) => {
      const pr = containerRef.current?.getBoundingClientRect() as DOMRect;
      const cr = child.getBoundingClientRect();
      const clipTolarance = 75;
      const isNotClipped = pr.bottom - clipTolarance >= cr.top && pr.top <= cr.bottom;
      if (!isNotClipped) child.setAttribute("inert", "true");
      else child.removeAttribute("inert");
    });
  };

  return (
    <div className="flex flex-col">
      <div
        ref={containerRef}
        className={`${!showing ? "expanding-container max-h-[100vh]" : ""} overflow-clip`}
      >
        {props.div}
      </div>
      <button
        className="btn btn-ghost mx-auto w-[52%] max-w-full"
        onClick={() => {
          // TODO - Add focus back to relevant div
          setShowing(!showing);
          updateTabbableDivs();
        }}
      >
        {showing ? "Show Less" : "Show More"}
      </button>
    </div>
  );
}
interface props {
  div: JSX.Element;
  tabbableDivs?: HTMLElement[];
}
