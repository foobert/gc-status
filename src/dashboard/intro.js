import React from "react";

export default function Intro({ stats }) {
  return (
    <div>
      <div className="jumbotron">
        <div className="container text-center">
          <h1 className="display-3">Geocaching Status</h1>
          <p className="lead">
            This shows a status overview of the Geocaching components.
          </p>
          <hr className="my-2" />
          {stats && (
            <p className="lead">
              The database contains <strong>{stats.geocaches.count}</strong>{" "}
              geocaches.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
