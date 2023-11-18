import React from "react";
import MyMessage from "./MyMessage";
import YourMessage from "./YourMessage";
const MessageList = () => {
  const messages = [
    { id: 0, isMine: true, content: "안녕하세요!" },
    { id: 1, isMine: false, content: "안녕하세요, 잘 지내시나요?" },
    { id: 2, isMine: true, content: "네, 잘 지내고 있어요!" },
    { id: 3, isMine: false, content: "오늘 날씨가 참 좋네요." },
    { id: 4, isMine: true, content: "정말요? 창밖을 봐야겠네요." },
    { id: 5, isMine: false, content: "점심은 무엇을 드셨나요?" },
    { id: 6, isMine: true, content: "저는 샐러드를 먹었어요." },
    { id: 7, isMine: false, content: "건강에 좋은 선택이시네요!" },
    { id: 8, isMine: true, content: "감사합니다. 여러분은요?" },
    { id: 9, isMine: false, content: "저는 돈까스를 먹었습니다." },
    { id: 10, isMine: true, content: "저녁에는 뭐 드실 예정이세요?" },
    {
      id: 11,
      isMine: false,
      content: "아직 계획이 없어요, 추천해주실만한게 있나요?",
    },
    {
      id: 12,
      isMine: true,
      content: "한식이 어떠세요? 김치찌개 같은 것도 좋을 것 같아요.",
    },
    {
      id: 13,
      isMine: false,
      content: "오, 좋은 생각이네요. 김치찌개 좋아합니다!",
    },
    {
      id: 14,
      isMine: true,
      content: "저도 그럼 오늘 저녁은 김치찌개로 해야겠네요!",
    },
    { id: 15, isMine: false, content: "함께 해서 기쁘네요!" },
    { id: 16, isMine: true, content: "채팅으로 배웅해주셔서 감사합니다!" },
    {
      id: 17,
      isMine: false,
      content: "언제나 환영이에요, 다음에 또 채팅해요!",
    },
    { id: 18, isMine: true, content: "네, 기대하겠습니다. 좋은 하루 되세요!" },
    { id: 19, isMine: false, content: "감사합니다, 당신도요!" },
  ];

  return (
    <div className="flex flex-col space-y-2 p-4 overflow-y-auto max-h-[80vh]">
      {messages.map((message) =>
        message.isMine ? (
          <MyMessage key={message.id} content={message.content} />
        ) : (
          <YourMessage key={message.id} content={message.content} />
        )
      )}
    </div>
  );
};

export default MessageList;
