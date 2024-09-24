import React, { Component } from "react";
import Switch from "react-switch";

const ModeSwitch = ({ handleSoundToggle, isSoundOn }) => {
  return (
    <div>
      <Switch
        checked={isSoundOn}
        onChange={handleSoundToggle}
        onColor="#3b82f6"
        offColor="#3b82f6"
        checkedIcon={<span role="img" aria-label="sound-on"></span>}
        uncheckedIcon={<span role="img" aria-label="sound-off"></span>}
        height={30}
        width={60}
        // onToggle={handleToggleEvent}
      />
    </div>
  );
};

export default ModeSwitch;
