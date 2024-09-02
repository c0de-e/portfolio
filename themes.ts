export const CustomThemes =
{
    cool: {
        "primary": "#9749e6",
        "secondary": "#1b3a4b",
        "accent": "#e5e7eb",
        "neutral": "#1b1b1b",
        "base-100": "#212f45",
        "info": "#008dff",
        "success": "#66fa04",
        "warning": "#ff7400",
        "error": "#ff3963",
    },
    red: {
        "primary": "red",
        "secondary": "#B80F0A",
        "secondary-content": "#ffb4b0",
        "accent": "#FF2800",
        "base-100": "#60100b",
    },
    luxury: {
        ...require("daisyui/src/theming/themes")[ "luxury" ],
        "accent": "#9f7d97"
    },
    coffee: {
        ...require("daisyui/src/theming/themes")[ "coffee" ],
        "accent": "#1a8db0"
    },
    corporate: {
        ...require("daisyui/src/theming/themes")[ "corporate" ],
        "accent": "#95dbbc"
    },
    nord: {
        ...require("daisyui/src/theming/themes")[ "nord" ],
        "accent": "#acd3de"
    }
};

export const DarkThemes = [
    "dark",
    "cool",
    "synthwave",
    "halloween",
    "forest",
    "aqua",
    "luxury",
    "dracula",
    "business",
    "night",
    "coffee",
    "dim",
    "sunset",
    "red"
];

export const LightThemes = [
    "light",
    "emerald",
    "cmyk",
    "corporate",
    "lemonade",
    "nord",
    "winter",
];

export const themeTypes = [ { name: "default", type: "" } ]
    .concat(DarkThemes.map(t => { return { name: t, type: "dark" }; })
        .concat(LightThemes.map(t => { return { name: t, type: "light" }; }))
        .sort((t1, t2) => t1.name.localeCompare(t2.name)));
