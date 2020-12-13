import React from 'react';
import { Button } from 'reactstrap'
const TriggerButton = ({ triggerText, buttonRef, showModal }) => {
  return (
    // <Button size="sm" color="primary" ref={buttonRef} onClick={showModal}>
    //   {triggerText}
    // </Button>
    <div onClick={showModal}>
    {triggerText}
    </div>
  );
};
export default TriggerButton;