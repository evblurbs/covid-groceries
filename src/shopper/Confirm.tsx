import React from "react";
import { Box } from "grommet";
import ConfirmText from "../components/ConfirmText";
import ConfirmedText from "../components/ConfirmedText";
import { listenForSmsConfirm } from "../utils/firestore";

interface MyProps {
  orderId: string;
  confirmOrder: (confirmed: boolean) => any;
  isConfirmed: boolean;
  phone: string;
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
    const { isConfirmed, phone } = this.props;
    return (
      <Box width="large" pad="large">
        {isConfirmed ? (
          <ConfirmedText isShopper />
        ) : (
          <ConfirmText phone={phone} isShopper />
        )}
      </Box>
    );
  }
}

export default Confirm;
