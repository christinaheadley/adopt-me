import { useState } from "react";

const SearchParams = () => {
  // const location = "Chapel Hill, NC";
  // if don't add hook useState and ability to set Location, field is immutable/ cannot type in it or change it

  // Do not have conditional hooks!
  // Hooks are dependent on order listed and have to be called in the same order every time. If statements and loops can create variable numbers of hooks to be called and interfere with that order.
  // ESLint react-hooks will montior
  const [location, setLocation] = useState("");
  return (
    <div className="search-params">
      {/* Below is example of controlled form, NOT a best practice unless you need it, for example with an area code or zip code */}
      {/* <form>
        <label htmlFor="location">
          Location {location}
          <input
            id="location"
            value={location}
            placeholder="Location"
            // Anytime a change event happens on this input, going to call function below, going to pull out target.value of that event (target is input), then going to call setLocation (line 6), which is going to update the state. React re-renders with new state.
            // To verify, add {location} as on-screen text (line 11) and you can see it update in real time as you type in the search box
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <button>Submit</button>
      </form> */}
      {/* uncontrolled input/form is the preferred way: */}
      <form onSubmit={somethingHere}>
        <label htmlFor="location">
          Location
          <input id="location" placeholder="Location" />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
