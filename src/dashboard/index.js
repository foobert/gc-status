import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

import Intro from "./intro";
import Spinner from "./spinner";
import Summary from "./summary";
import StatusTable from "./statustable";

import checks from "./checks";

export function Dashboard(props) {
  return (
    <Query
      query={gql`
        {
          stats {
            geocaches {
              count
              lastUpdate {
                date
                count
              }
            }
            areas {
              lastUpdate
            }
            logs {
              lastUpdate
            }
          }
          travisIntTest: travis(project: "foobert/gc-inttest") @client
          travisQuery: travis(project: "foobert/gc-query") @client
          travisSiphon: travis(project: "foobert/gc-siphon") @client
        }
      `}
    >
      {({ loading, error, data }) => {
        if (loading) {
          return (
            <div>
              <Intro />
              <Spinner />
            </div>
          );
        }

        const entries = checks.map(c => c(data));

        return (
          <div>
            <Intro loading={loading} error={error} stats={data.stats} />
            <div className="container">
              <Summary entries={entries} />
              <StatusTable entries={entries} />
            </div>
          </div>
        );
      }}
    </Query>
  );
}
