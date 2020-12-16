import React from 'react';
import Button from "react-bootstrap/Button";

const TriggerButton = ({ triggerText, buttonRef, showModal }) => {
  return (
    <Button
    onClick={showModal}
    color="link"
    size="sm"
    className="btn-link-primary">
    {triggerText}
    </Button>
  );
};
export default TriggerButton;