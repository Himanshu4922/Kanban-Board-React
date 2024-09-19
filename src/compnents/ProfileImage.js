import React from "react";
import "./ProfileImage.css";

const ProfileImage = ({ name, available }) => {
  const nameParts = name.split(" ");
  const firstNameInitial = nameParts[0] ? nameParts[0][0] : "";
  const lastNameInitial = nameParts[1] ? nameParts[1][0] : "";

  return (
    <div className="profile">
      <div className="user-profile-image">
        {firstNameInitial}
        {lastNameInitial}
      </div>
      {available && <div className="available" />}
    </div>
  );
};

export default ProfileImage;