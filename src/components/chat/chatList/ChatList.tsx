import React from "react";
import ChatHeader from "@/components/chat/chatHeader/ChatHeader";
import MessageList from "@/components/chat/messageList/MessageList";
import MessageInput from "@/components/chat/messageInput/MessageInput";

const ChatList = () => {
  return (
    <div>
      <ChatHeader />
      <MessageList />
      <MessageInput />
    </div>
  );
};

export default ChatList;
