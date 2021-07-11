import { Button, Spinner } from "react-bootstrap";
import React from "react";

const LoadingButton = ({
  variant,
  type,
  loading,
  loadingText,
  text,
  onClickFn,
}) => {
  const buttonText = () => {
    return loading ? (
      <div style={{ display: "flex", alignItems: "center" }}>
        <Spinner animation="border" size="sm" style={{ marginRight: "5px" }} />
        {loadingText}
      </div>
    ) : (
      <div className="logintxt">{text}</div>
    );
  };
  if (type)
    return (
      <Button variant={variant} type={type} onClick={onClickFn}>
        {buttonText()}
      </Button>
    );
  else
    return (
      <Button variant={variant} onClick={onClickFn}>
        {buttonText()}
      </Button>
    );
};

export default LoadingButton;
