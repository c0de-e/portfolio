export const CustomThemes =
{
    cool: {
        "primary": "#4d194d",
        "secondary": "#1b3a4b",
        "accent": "#e5e7eb",
        "neutral": "#1b1b1b",
        "base-100": "#212f45",
        "info": "#008dff",
        "success": "#66fa04",
        "warning": "#ff7400",
        "error": "#ff3963",
    },
};

export const DarkThemes = [
    "default",
    "aqua",
    "cool",
    "dark",
    "dim",
    "dracula",
    "halloween",
    "night",
    "synthwave",
];

export const LightThemes = [
    "bumblebee",
    "emerald",
    "garden",
    "light",
    "lofi",
    "pastel",
];

export const themeTypes = DarkThemes.map(t => { return { name: t, type: "dark" }; }).concat(
    LightThemes.map(t => { return { name: t, type: "light" }; }));