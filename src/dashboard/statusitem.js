import React from "react";

export default function Status(props) {
  const { title, nominal } = props;
  let className, label;
  if (nominal) {
    className = "text-success";
    label = "Nominal";
  } else {
    className = "text-danger";
    label = "Degraded";
  }
  return (
    <tr>
      <td>{title}</td>
      <td>
        <span className={className}>{label}</span>
      </td>
    </tr>
  );
}
