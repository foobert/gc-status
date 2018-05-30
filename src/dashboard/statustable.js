import React from "react";
import Status from "./statusitem";

export default function StatusTable(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Component</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>{props.entries.map((e, i) => <Status key={i} {...e} />)}</tbody>
    </table>
  );
}
