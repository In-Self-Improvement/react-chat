"use client";
import React, { useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { SET_LOADING } from "@/redux/slice/loadingSlice";
import { selectUserName } from "@/redux/slice/authSlice";
import { useSelector } from "react-redux";
import Sidebar from "@/components/sidebar/Sidebar";
import ChatList from "@/components/chat/chatList/ChatList";

const ChatClient = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);

  return (
    <div className="flex bg-white">
      <div className="border-r border-s-gray-500">
        <div className="flex-shrink-0 w-64">
          <Sidebar />
        </div>
      </div>
      <div className="flex-grow">
        <ChatList />
      </div>
    </div>
  );
};

export default ChatClient;
