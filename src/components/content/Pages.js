import React from "react";
import { Link } from "react-router-dom";
import { useApi } from "../../services/api/index";

export const Pages = (props) => {
  const { getStageDetails } = useApi();

  return (
    <Link
      to={`/stages/${props.data.id}`}
      className="panel"
      role="listitem"
      tabIndex="0"
      onClick={(e) => getStageDetails(props.data.id, props.data.name)}
    >
      <h2 className="panel__title">{props.data.name}</h2>
      <p className="panel__notification">
        Stages: <span>{props.data.stagesCount}</span>
      </p>
    </Link>
  );
};
