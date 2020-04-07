import React from "react";
import RadioBox from "../components/RadioBox";
import { getOrder } from "../utils/firestore";

interface MyProps {
  location: number[];
  distance: number;
  value: string;
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
    getOrder(this.props.value).then((res) =>
      this.setState({
        orderData: res.data(),
      })
    );
  }
  componentWillUnmount() {}
  componentDidUpdate() {}
  render() {
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
