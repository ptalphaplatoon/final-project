import React from 'react';

const TriggerButton = ({ triggerText, buttonRef, showModal }) => {
  return (
    <div onClick={showModal}>
    {triggerText}
    </div>
  );
};
export default TriggerButton;