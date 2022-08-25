import React, { useEffect, useState } from "react";
import { CHART_HEIGHT } from "./constants";
import ChartCol from "./ChartCol";

function Chart({ data, countSize, title = "Title" }) {
  const [cols, set_cols] = useState([]);
  const create_cols = () => {
    const cols = data.map((item) => {
      return {
        ...item,
        height: item.count * col_unit_height(),
      };
    });
    set_cols([...cols]);
  };
  const col_unit_height = () => {
    const unit = CHART_HEIGHT / countSize;
    return unit;
  };

  useEffect(() => {
    create_cols();
  }, [data]);

  return (
    <>
      <h4 className={"chart-title"}>{title}</h4>

      <div style={{ height: CHART_HEIGHT }} className={"chart-container"}>
        {cols.map((item) => {
          return <ChartCol key={item.name} data={item} />;
        })}
      </div>
    </>
  );
}

export default Chart;
