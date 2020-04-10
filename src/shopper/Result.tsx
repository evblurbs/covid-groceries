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

const ResultDescription = ({ bundle }) => {
  if (bundle === "food") {
    return (
      <span>
        <b>Food:</b> Items such as canned soup, frozen meals, and fresh
        vegetables.
      </span>
    );
  }
  if (bundle === "toiletries") {
    return (
      <span>
        <b>Toiletries:</b> Items such as toilet paper, soap, and cleaning
        products.
      </span>
    );
  }
  return (
    <span>
      <b>Mixed:</b> Items such as toilet paper, canned soup, and frozen meals.
    </span>
  );
};

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
    return orderData.bundle ? (
      <RadioBox
        {...this.props}
        label={orderData.formattedAddress}
        description={<ResultDescription bundle={orderData.bundle} />}
      />
    ) : null;
  }
}

export default Result;
