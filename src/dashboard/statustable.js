import React from "react";
import { Table } from "reactstrap";
import Status from "./statusitem";

export default function StatusTable(props) {
  return (
    <Table>
      <thead>
        <tr>
          <th>Component</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>{props.entries.map((e, i) => <Status key={i} {...e} />)}</tbody>
    </Table>
  );
}
