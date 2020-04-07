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
  phone: string;
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
    const { phone, isConfirmed } = this.props;
    if (phone.length && !isConfirmed) {
      const unsubscribe = listenForSmsConfirm(
        phone,
        this.handleConfirmedTextUpdate,
        true
      );
      this.setState({ unsubscribe });
    }
  }
  componentWillUnmount() {
    const { unsubscribe } = this.state;
    unsubscribe();
  }
  componentDidUpdate() {
    const { isConfirmed } = this.props;
    isConfirmed && this.state.unsubscribe();
  }
  shouldComponentUpdate(nextProps) {
    return false;
  }
  handleConfirmedTextUpdate = ({ textConfirmed = false } = {}) => {
    if (!textConfirmed) return;
    const { unsubscribe } = this.state;
    return this.props.confirmOrder(textConfirmed) && unsubscribe();
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
