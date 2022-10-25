import axios from "axios";
import React, { Fragment, useState, useEffect } from "react";

const App = () => {
  /**
   * Je vais get des informations depuis l'API
   */

  const API = "https://excuser.herokuapp.com/v1/excuse/developers/";
  const [quote, setQuote] = useState("");

  const getData = () => {
    axios.get(API).then((res) => setQuote(res.data[0].excuse));
  };

  useEffect(() => {
    getData();
  }, []);

  /**
   * Fin du get
   */

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
              <span className="quote">{quote}</span>
            </div>
            <button onClick={getData}>Une autre blague</button>
          </div>
        </section>
      </main>
    </Fragment>
  );
};

export default App;
