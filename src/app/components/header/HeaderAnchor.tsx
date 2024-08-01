"use client";

import { DetailedHTMLProps, AnchorHTMLAttributes, useState, useEffect } from "react";
// import { useInView } from "react-intersection-observer";
// NOTE - Maybe use the hook with useContext to be passed here

export default function HeaderAnchor(props: props) {
    const [ isIntersecting, setIsIntersecting ] = useState(false);
    const anchor = (typeof window !== 'undefined') ? document.getElementById(props.anchor_id) : null;

    useEffect(() => {
        let observer = new IntersectionObserver((e) => {
            const anchorObserve = e.find(t => t.target.id == `${props.anchor_id}`);
            if (!anchorObserve) return;

            setIsIntersecting(anchorObserve?.isIntersecting);
        }, { threshold: .05 });
        if (anchor) observer?.observe(anchor);
    }, [ anchor, props.anchor_id ]);

    return (<a
        {...props}
        className={isIntersecting ? "selected-navigation" : ""}
        onClick={() => anchor?.scrollIntoView({ behavior: "smooth", inline: "start" })} />);
}

interface props extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
    anchor_id: string;
}