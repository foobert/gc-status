import React from "react";

export default function Summary({ entries }) {
  const allNominal = entries.every(x => x.nominal);
  if (allNominal) {
    return <div className="alert alert-success">All systems nominal</div>;
  } else {
    return <div className="alert alert-danger">System is degraded</div>;
  }
}
