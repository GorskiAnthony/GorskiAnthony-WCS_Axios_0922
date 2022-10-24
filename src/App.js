import React, { Fragment } from "react";
import axios from "axios";

const App = () => {
  const API = "https://excuser.herokuapp.com/v1/excuse/developers/";
  const [joke, setJoke] = React.useState(
    "It must be a hardware issue, not my code problem."
  );

  const getJoke = () => {
    axios
      .get(API)
      .then((res) => {
        setJoke(res.data[0].excuse);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleClick = () => {
    getJoke();
  };

  return (
    <Fragment>
      <header>
        <h1>Comment on utilise une API avec React</h1>
      </header>
      <main>
        <section className="explain">
          <p>Nous allons voir le fonctionnement d'une API avec react</p>
          <p>
            Comment ? En utilisant
            <a
              href="https://www.npmjs.com/package/axios"
              target="_blank"
              rel="noreferrer"
            >
              <code>axios</code>
            </a>
          </p>
        </section>
        <section className="container">
          <h1>Une blague de développeur ?</h1>
          <div>
            <div className="render">
              <span className="quote">{joke}</span>
            </div>
            <button onClick={handleClick}>Une autre blague</button>
          </div>
        </section>
      </main>
    </Fragment>
  );
};

export default App;
