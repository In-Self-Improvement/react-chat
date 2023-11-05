"use client";
import React from "react";
import { User } from "@/types/user";

const UserCard = () => {
  // const { profileImage, userName } = user;

  return (
    <div>
      <div className="flex items-center space-x-4 p-2 m-4 border border-gray-200 hover:bg-gray-200 rounded cursor-pointer">
        <div className="w-8 h-8 rounded-full overflow-hidden m-2">
          <img
            className="object-cover w-full h-full "
            src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FtEMUl%2FbtrDc6957nj%2FNwJoDw0EOapJNDSNRNZK8K%2Fimg.jpg"
            alt="프로필 이미지"
          />
        </div>
        {/* <p className="hidden sm:inline-flex font-medium">{userName}</p> */}
        <p className=" sm:inline-flex font-light text-black">유저이름3</p>
      </div>
    </div>
  );
};

export default UserCard;
