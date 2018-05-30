import React from "react";
import { Alert } from "reactstrap";

export default function Summary({ entries }) {
  const allNominal = entries.every(x => x.nominal);
  if (allNominal) {
    return <Alert color="success">All systems nominal</Alert>;
  } else {
    return <Alert color="danger">System is degraded</Alert>;
  }
}
