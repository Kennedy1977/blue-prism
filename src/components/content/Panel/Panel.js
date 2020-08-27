import React, { useEffect, useContext, useState } from "react";
import { GlobalContext } from "../../../services/context/GlobalState";
import { useApi } from "../../../services/api/index";
import { PanelList } from "../PanelList/PanelList";
import { ButtonContainer } from "../../buttons/ButtonContainer/ButtonContainer";

export const Panel = () => {
  const [display, setDisplay] = useState(null);
  const [label, setLabel] = useState("");
  const { stages, pages, env, isLoading } = useContext(GlobalContext);

  const { getAllPages } = useApi();

  useEffect(() => {
    if (pages === null && env.loading === false) {
      isLoading(true);
      getAllPages();
    }

    if (env.path === "stages" && display !== "stages") {
      setDisplay("stages");
      setLabel("Add Stage");
    }

    if (env.path === "" && display !== "pages") {
      setDisplay("pages");
      setLabel("Add New");
    }
  }, [getAllPages, env, isLoading, pages, stages, display]);

  return (
    <article className="container" role="list">
      <PanelList
        tid="PanelList"
        display={display}
        data={display === "pages" ? pages : stages}
      />
      <ButtonContainer
        tid="ButtonContainer"
        data={[{ label: label, css: "btn btn-primary" }]}
      />
    </article>
  );
};
