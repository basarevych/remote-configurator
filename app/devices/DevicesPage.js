import React from "react";
import PropTypes from "prop-types";
import { graphql } from "react-relay";
import { NextQueryRenderer } from "../app/providers/Relay";
import DeviceList, { pageSize } from "./DeviceListContainer";
import ErrorMessage from "../app/error/ErrorMessageContainer";

const defaultVariables = { first: pageSize };

export const query = graphql`
  query DevicesPageQuery(
    $first: Int
    $after: String
    $last: Int
    $before: String
  ) {
    viewer {
      ...DeviceListContainer_viewer
        @arguments(first: $first, after: $after, last: $last, before: $before)
    }
  }
`;

class DevicesPage extends React.Component {
  static propTypes = {
    isAuthenticated: PropTypes.bool.isRequired
  };

  static async getInitialProps({ statusCode, fetchQuery }) {
    if (statusCode !== 200) return;
    await fetchQuery(query, defaultVariables);
  }

  render() {
    if (!this.props.isAuthenticated) return null;

    return (
      <NextQueryRenderer
        query={query}
        variables={defaultVariables}
        render={({ error, props }) => {
          if (error) return <ErrorMessage error={error} />;
          if (!props) return null;
          return <DeviceList viewer={props.viewer} />;
        }}
      />
    );
  }
}

export default DevicesPage;
