import React, { Fragment } from "react";

const App = () => {
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
              <span className="quote">
                My aunt told me to fix her computer, so I got late today.
              </span>
            </div>
            <button>Une autre blague</button>
          </div>
        </section>
      </main>
    </Fragment>
  );
};

export default App;
