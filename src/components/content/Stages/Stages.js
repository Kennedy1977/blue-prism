import React from "react";

export const Stages = (props) => {
  return (
    <section className="panel" role="listitem" tabIndex="0">
      <h2 className="panel__title">{props.data.name}</h2>
      <p className="panel__notification">
        links: <span>{props.data.linksCount}</span>
      </p>
    </section>
  );
};
