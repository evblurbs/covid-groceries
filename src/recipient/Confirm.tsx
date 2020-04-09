import React from "react";
import { Box } from "grommet";
import { listenForSmsConfirm } from "../utils/firestore";

/*
 * Currently distinguishing confirmation message and order fulfilled.
 * We probably want to change these to screens.
 */
const CONFIRM_TEXT =
  "Please confirm the text message we sent you to finalize your request.";
const SUCCESSFUL_ORDER =
  "Your order has been placed. We will do our best to find someone to fulfill it.";

interface MyProps {
  orderId: string | undefined;
  confirmOrder: (confirmed: boolean) => any;
  isConfirmed: boolean;
}

interface MyState {
  unsubscribe: () => any;
  subscribing: boolean;
}

class Confirm extends React.Component<MyProps, MyState> {
  constructor(props) {
    super(props);

    this.state = {
      unsubscribe: () => false,
      subscribing: false,
    };
  }
  componentDidMount() {
    const { orderId } = this.props;
    const unsubscribe = listenForSmsConfirm(
      orderId,
      this.handleConfirmedTextUpdate
    );
    this.setState({
      unsubscribe,
    });
  }
  componentWillUnmount() {
    const { unsubscribe } = this.state;
    unsubscribe();
  }
  handleConfirmedTextUpdate = ({ textConfirmed = false } = {}) => {
    const { isConfirmed } = this.props;
    if (!textConfirmed || isConfirmed) return;
    const { unsubscribe } = this.state;
    this.props.confirmOrder(textConfirmed) && unsubscribe();
  };
  render() {
    const { isConfirmed } = this.props;
    return (
      <Box width="large" pad="large">
        {isConfirmed ? SUCCESSFUL_ORDER : CONFIRM_TEXT}
      </Box>
    );
  }
}

export default Confirm;
