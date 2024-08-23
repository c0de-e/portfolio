"use client";
import { DetailedHTMLProps, ButtonHTMLAttributes, useEffect, useRef } from "react";

export default function TabFocusSkip(props: props) {
    let tabbable_anchor = useRef<HTMLAnchorElement>();
    useEffect(() => { tabbable_anchor.current = Array.from(document.querySelectorAll("[anchor_id]")).find(a => a.getAttribute("anchor_id") == props.tabbable_id) as HTMLAnchorElement; });
    return (
        <button
            {...props}
            tabIndex={0}
            onClick={() => {
                if (tabbable_anchor.current !== undefined)
                    tabbable_anchor.current.focus();
            }}
            className='btn btn-primary absolute -translate-x-full left-0 top-1 text-sm font-bold uppercase focus-visible:translate-x-1 opacity-0 focus-visible:opacity-100'>
            {props.text}
        </button>
    );
}

interface props extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    text: string;
    tabbable_id: string;
}