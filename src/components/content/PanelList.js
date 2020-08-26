import React from "react";
import { Pages } from "./Pages";
import { Stages } from "./Stages";

export const PanelList = (props) => {
  console.log(props);

  if (props.data !== null && props.display === "pages") {
    const panelSet = props.data.pages.map((pages) => {
      return <Pages data={pages} key={pages.id} />;
    });
    return <>{panelSet}</>;
  }

  if (props.data !== null && props.display === "stages") {
    if (props.data.count > 0) {
      const panelSet = props.data.stages.map((data) => {
        return <Stages data={data} key={data.id} />;
      });
      return <>{panelSet}</>;
    } else {
      return (
        <section className="panel" role="listitem">
          <h2 className="panel__title">No stages found.</h2>
        </section>
      );
    }
  }

  return null;
};
