import React from "react";

function Table({ rows, columns }) {
  const render_columns = (columns) => {
    return Object.values(columns).map((col, i) => <th key={i}>{col}</th>);
  };

  const render_rows = (rows) => {
    return rows.map((row, i) => {
      return (
        <tr key={i}>
          {Object.keys(row).map((item_property, key) => {
            return <td key={key}>{row[item_property]}</td>;
          })}
        </tr>
      );
    });
  };

  return (
    <table>
      <thead>{render_columns(columns)}</thead>
      <tbody>{render_rows(rows)}</tbody>
    </table>
  );
}

export default React.memo(Table);
