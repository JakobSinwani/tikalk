import React from "react";
import random_color from "randomcolor";
function ChartCol(props) {
  const { name, count, height } = props.data;
  const col_style = {
    height,
    backgroundColor: random_color(),
    width: 25,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    boxShadow: "1px 1px 5px #F4FAB9",
  };
  return (
    <div className={"chart_col"}>
      <p className={"chart-label-count"}>{count}</p>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={col_style} />
      </div>
      <p className={"chart-label-name"}>{name}</p>
    </div>
  );
}

export default ChartCol;
