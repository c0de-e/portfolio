"use server";
import Header from "./components/header/Header";

export default async function Home() {
  return (
    <div className="">
      <div className="hero h-screen">
      <article className="prose mx-auto px-auto p-8">
        <h1>Garlic bread with cheese: What the science tells us</h1>
        <p>
          For years parents have espoused the health benefits of eating garlic bread with cheese to their
          children, with the food earning such an iconic status in our culture that kids will often dress
          up as warm, cheesy loaf for Halloween.
        </p>
        <p>
          But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases
          springing up around the country.
        </p>
      </article>
      </div>
      <Header />
      <article  className="prose mx-auto px-auto p-8" style={{ height: "2000px" }}>
        <h1 id="home">Garlic bread with cheese: What the science tells us</h1>
        <p>
          For years parents have espoused the health benefits of eating garlic bread with cheese to their
          children, with the food earning such an iconic status in our culture that kids will often dress
          up as warm, cheesy loaf for Halloween.
        </p>
        <p>
          But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases
          springing up around the country.
        </p>
      </article>
    </div>
  );
}
