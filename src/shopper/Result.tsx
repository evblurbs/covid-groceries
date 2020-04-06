import React from "react";
import { Box, RadioButtonGroup, ResponsiveContext } from "grommet";
import Header from "../components/Header";
import Description from "../components/Description";
import RadioBox from "../components/RadioBox";
import { getOrder } from "../utils/firestore";

interface MyProps {
  location: number[];
  distance: number;
  phone: string;
  checked: boolean;
  hover: boolean;
}

interface MyState {
  isFetching: boolean;
  orderData?: any;
}

class Result extends React.Component<MyProps, MyState> {
  constructor(props) {
    super(props);

    this.state = {
      isFetching: true,
      orderData: {},
    };
  }
  componentDidMount() {
    getOrder(this.props.phone).then((res) =>
      this.setState({
        orderData: res.data(),
      })
    );
  }
  componentWillUnmount() {}
  componentDidUpdate() {}
  render() {
    console.log("result props", this.props);
    console.log("result state", this.state);
    const { orderData } = this.state;
    return (
      <RadioBox
        {...this.props}
        label={orderData.formattedAddress}
        description={
          orderData && orderData.bundles
            ? `${orderData.bundles[0]}: blah blah blah`
            : undefined
        }
      />
    );
  }
}

export default Result;
