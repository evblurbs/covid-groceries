import React from "react";
import { Box } from "grommet";
import { listenForSmsConfirm } from "../utils/firestore";

/*
 * Currently distinguishing confirmation message and order fulfilled.
 * We probably want to change these to screens.
 */
const CONFIRM_TEXT = "Please confirm the text message we sent you to finish.";
const SUCCESSFUL_ORDER =
  "Thank you for your help! You are all set to go shopping. YOU ARE AWESOME!";

interface MyProps {
  orderId: string;
  confirmOrder: (confirmed: boolean) => any;
  isConfirmed: boolean;
}

interface MyState {
  unsubscribe: () => any;
}

class Confirm extends React.Component<MyProps, MyState> {
  constructor(props) {
    super(props);

    this.state = {
      unsubscribe: () => false,
    };
  }
  componentDidMount() {
    const { orderId, isConfirmed } = this.props;
    if (orderId.length && !isConfirmed) {
      const unsubscribe = listenForSmsConfirm(
        orderId,
        this.handleConfirmedTextUpdate
      );
      this.setState({ unsubscribe });
    }
  }
  componentWillUnmount() {
    const { unsubscribe } = this.state;
    unsubscribe();
  }
  handleConfirmedTextUpdate = ({ shopperConfirmed = false } = {}) => {
    const { isConfirmed } = this.props;
    if (!shopperConfirmed || isConfirmed) return;
    const { unsubscribe } = this.state;
    return this.props.confirmOrder(shopperConfirmed) && unsubscribe();
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
