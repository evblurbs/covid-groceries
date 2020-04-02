import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "grommet";

const RoutedButton = ({ path, ...rest }) => {
  let history = useHistory();
  const handleClick = () => history.push(path);
  return <Button onClick={handleClick} {...rest} />;
};

export default RoutedButton;
