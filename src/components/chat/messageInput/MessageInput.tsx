const MessageInput = () => {
  // 메시지 전송 로직을 여기에 추가합니다.
  const sendMessage = () => {
    // 메시지 보내는 로직
  };

  return (
    <div className="flex items-center p-4">
      <input
        type="text"
        placeholder="메시지를 입력하세요."
        className="flex-grow p-2 border border-gray-300 rounded-lg m-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
        onKeyDown={(e) => e.key === "Enter" && sendMessage()}
      />
      <button
        onClick={sendMessage}
        className="bg-blue-500 hover:bg-blue-600 text-black px-4 rounded-lg"
        type="button"
      >
        전송
      </button>
    </div>
  );
};

export default MessageInput;
