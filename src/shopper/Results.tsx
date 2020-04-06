import React from "react";
import { Box, RadioButtonGroup, ResponsiveContext } from "grommet";
import Header from "../components/Header";
import Description from "../components/Description";
import { fetchOrderIDs } from "../utils/database";
import Result from "./Result";

const ResultsView = ({ results }) => {
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
            options={results.map((result) => result)}
            value={"bundle"}
            wrap={true}
            onChange={(event) => {}}
          >
            {(
              { key, location, distance }: any,
              { checked, hover }: { checked: boolean; hover: boolean }
            ) => {
              return (
                <Result
                  key={key}
                  phone={key}
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
  componentWillUnmount() {}
  componentDidUpdate() {}
  handleGeoQuery = (results) => this.setState({ results, isFetching: false });
  render() {
    const { results, isFetching } = this.state;

    console.log("results", results);
    console.log("isFetching", isFetching);
    return <ResultsView results={results} />;
  }
}

export default Results;
