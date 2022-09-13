import { render } from "react-dom";
import SearchParams from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      {/* or <Pet...></Pet> */}
      <Pet name="Berlioz" animal="cat" breed="medium-hair" />
      <Pet name="Blush" animal="cat" breed="orange tabby" />
      <Pet
        name="Rusty"
        animal="dog"
        breed="Australian Sheperd/ Border Collie mix"
      />
    </div>
  );
};

// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, "Adopt Me!"),
//     React.createElement(Pet, {
//       name: "Luna",
//       animal: "Dog",
//       breed: "Havanese",
//     }),
//     React.createElement(Pet, {
//       name: "Pepper",
//       animal: "Bird",
//       breed: "Cockatiel",
//     }),
//     React.createElement(Pet, { name: "Doink", animal: "Cat", breed: "Mix" }),
//   ]);
// };

render(<App />, document.getElementById("root"));
