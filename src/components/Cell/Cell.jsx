import React from "react";
import style from "./Cell.module.css";
export const Cell = (props) => {
  return (
    <button className={style.cell} onClick={props.onClick}>
      {props.value}
    </button>
  );
};
