import React from "react";
import profileImg from "../../assets/profile.png";

const Profile: React.FC = () => {
  return (
    <>
      <div className="relative w-[72px] h-[72px]">
        <img className=" w-full rounded-xl" src={profileImg} alt="profile" />
        <div className="w-2 h-2 bg-red p-3 flex justify-center items-center rounded-full absolute -top-2 -right-2 ">
          <span>4</span>
        </div>
      </div>
      <div className="mt-5">
        <h1 className="text-3xl font-bold">Samantha</h1>
        <p className="text-gray">samantha@email.com</p>
      </div>
    </>
  );
};

export default Profile;
