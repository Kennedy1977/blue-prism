import React from "react";

function App() {
  return (
    <>
      <header role="banner">
        <h1 className="title">Process Name</h1>
        <nav className="menu" role="button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            className="icon"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              className="icon__fill"
              d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
            />
          </svg>
        </nav>
      </header>
      <main id="main" role="main">
        <article className="container" role="list">
          <section className="panel" role="listitem" tabIndex="0">
            <h2 className="panel__title">Page Name</h2>
            <p className="panel__notification">
              Stages: <span>10</span>
            </p>
          </section>

          <section className="panel" tabIndex="0">
            <h2 className="panel__title">Page Name</h2>
            <p className="panel__notification">
              Stages: <span>10</span>
            </p>
          </section>

          <section className="panel" tabIndex="0">
            <h2 className="panel__title">Page Name</h2>
            <p className="panel__notification">
              Stages: <span>10</span>
            </p>
          </section>

          <section className="panel" tabIndex="0">
            <h2 className="panel__title">Page Name</h2>
            <p className="panel__notification">
              Stages: <span>10</span>
            </p>
          </section>

          <section className="panel" tabIndex="0">
            <h2 className="panel__title">Page Name</h2>
            <p className="panel__notification">
              Stages: <span>10</span>
            </p>
          </section>
          <section className="btn-container">
            <button className="btn btn--primary" type="button">
              add new
            </button>
          </section>
        </article>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
