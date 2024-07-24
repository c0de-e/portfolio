import ThemeController from "./components/ThemeController";

export default function Home() {
  return (
    <div className="p-10">
      <button className="btn btn-primary">Hello daisyUI!</button>
      <ThemeController />
    </div>
  );
}
