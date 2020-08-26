import React from "react";
import { Button } from "../Button/Button";

export const ButtonContainer = (props) => {
  const ButtonSet = props.data.map((data, index) => {
    return <Button key={index} data={data} />;
  });

  return <div className="btn-container">{ButtonSet}</div>;
};
