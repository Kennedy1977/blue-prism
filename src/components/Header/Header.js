import React, { useState, useContext, useEffect } from "react";
import { GlobalContext } from "../../services/context/GlobalState";

export const Header = () => {
  const { env } = useContext(GlobalContext);
  const [title, setTitle] = useState("Process Name");

  useEffect(() => {
    env.path === "stages" ? setTitle(env.heading) : setTitle("Process Name");
  }, [env, title]);

  return (
    <header role="banner">
      <h1 className="title">{title}</h1>
      <div className="network hidden" role="alert" aria-busy="true">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          className="icon"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M16 17.01V10h-2v7.01h-3L15 21l4-3.99h-3zM9 3L5 6.99h3V14h2V6.99h3L9 3z"
            className="icon__fill"
          />
        </svg>
      </div>
      <nav className="menu" role="button" aria-label="Open main menu">
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
  );
};
