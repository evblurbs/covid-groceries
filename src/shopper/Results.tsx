import React, { useState } from "react";
import { Box, RadioButtonGroup, ResponsiveContext, Grid } from "grommet";
import Navigate from "../form/Navigate";
import Header from "../components/Header";
import Description from "../components/Description";
import { fetchOrderIDs } from "../utils/database";
import { screenIds, PATH_SEARCH } from "../routes/Shopper";
import Result from "./Result";
import "./results.css";

const columnsMap = {
  small: ["100%"],
  medium: ["50%", "0%", "50%", "0%"],
  large: ["33%", "0%", "33%", "0%", "33%", "1%"],
};

const ResultsView = ({ results, next }) => {
  const [result, setResult] = useState("");
  const [response, setResponse] = useState({});

  const size = React.useContext(ResponsiveContext);
  return (
    <Box width="xlarge">
      <fieldset style={{ border: "none", padding: 0, width: "100%" }}>
        <legend style={{ width: "100%" }}>
          <Header>Results</Header>
          {results.length ? (
            <React.Fragment>
              <Description>
                <b>Select a recipient below to donate to.</b> The results are
                sorted by distance. The items listed are just suggestions.
              </Description>
              <RadioButtonGroup
                name="bundle"
                options={results.map(({ key, location, distance }, index) => ({
                  value: key,
                  key,
                  location,
                  distance,
                  index,
                  style: { width: "100%" },
                }))}
                value={result}
                as={Grid}
                // @ts-ignore
                columns={columnsMap[size]}
                onChange={({ target: { value } }) => {
                  setResult(value);
                  setResponse({
                    screenId: screenIds.RESULTS,
                    inputs: { result: value },
                  });
                }}
                margin={{ top: "medium" }}
                className="results"
                gap="small"
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
            </React.Fragment>
          ) : (
            <Description>
              There are no results for your location. Thank you for checking! ❤️
            </Description>
          )}
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
