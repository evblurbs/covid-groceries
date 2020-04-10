import React from "react";
import { Box } from "grommet";
import ConfirmText from "../components/ConfirmText";
import ConfirmedText from "../components/ConfirmedText";
import { listenForSmsConfirm } from "../utils/firestore";

interface MyProps {
  orderId: string | undefined;
  confirmOrder: (confirmed: boolean) => any;
  isConfirmed: boolean;
  phone: string;
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
    const { isConfirmed, phone } = this.props;
    return (
      <Box width="large" pad="large">
        {isConfirmed ? <ConfirmedText /> : <ConfirmText phone={phone} />}
      </Box>
    );
  }
}

export default Confirm;
