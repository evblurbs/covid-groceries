import React, { useState } from "react";
import { Box, RadioButtonGroup, ResponsiveContext } from "grommet";
import Navigate from "../form/Navigate";
import Header from "../components/Header";
import Description from "../components/Description";
import { fetchOrderIDs } from "../utils/database";
import { screenIds, PATH_SEARCH } from "../routes/Shopper";
import Result from "./Result";

const ResultsView = ({ results, next }) => {
  const [result, setResult] = useState("");
  const [response, setResponse] = useState({});

  const size = React.useContext(ResponsiveContext);

  return (
    <Box width="large">
      <fieldset style={{ border: "none", padding: 0 }}>
        <legend>
          <Header>Results</Header>
          <Description>
            Select a result below to choose the order you want to fulfill.
          </Description>
          <RadioButtonGroup
            name="bundle"
            justify="center"
            align="center"
            direction={size === "small" ? "column" : "row"}
            gap="medium"
            height={{
              min: "unset",
            }}
            options={results.map(({ key, location, distance }, index) => ({
              value: key,
              key,
              location,
              distance,
              index,
            }))}
            value={result}
            wrap={true}
            onChange={({ target: { value } }) => {
              setResult(value);
              setResponse({
                screenId: screenIds.RESULTS,
                inputs: { result: value },
              });
            }}
          >
            {(
              { key, location, distance }: any,
              { checked, hover }: { checked: boolean; hover: boolean }
            ) => {
              return (
                <Result
                  key={key}
                  value={key}
                  location={location}
                  distance={distance}
                  checked={checked}
                  hover={hover}
                />
              );
            }}
          </RadioButtonGroup>
        </legend>
      </fieldset>
      <Navigate
        disabled={!result.length}
        onClick={() => next(response)}
        backPath={PATH_SEARCH}
      />
    </Box>
  );
};

interface MyProps {
  location: number[];
  next: any;
}

interface MyState {
  results: any;
  isFetching: boolean;
}

class Results extends React.Component<MyProps, MyState> {
  constructor(props) {
    super(props);

    this.state = {
      results: [],
      isFetching: true,
    };
  }
  componentDidMount() {
    fetchOrderIDs(this.props.location, this.handleGeoQuery);
  }
  handleGeoQuery = (results) => this.setState({ results, isFetching: false });
  render() {
    const { results, isFetching } = this.state;
    if (!isFetching)
      return <ResultsView results={results} next={this.props.next} />;
    // TODO: Replace null with loading screen
    return null;
  }
}

export default Results;
