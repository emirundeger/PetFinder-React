import React from "react";
import { render } from "react-dom";
import pf from "petfinder-client";
import Pet from "./Pet";

const petfinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET
});

class App extends React.Component {
  componentDidMount() {
    const promise = petfinder.breed.list({ animal: "dog" });

    promise.then(console.log, console.error); //if it's successful console the data we got back from the api, if there is an error
  }
  render() {
    return (
      <div>
        <h1>Adopt Me!</h1>
        <Pet name="Luna" animal="dog" breed="havanese" />
        <Pet name="Pepper" animal="bird" breed="Cockatiel" />
        <Pet name="Doink" animal="cat" breed="Mixed" />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
