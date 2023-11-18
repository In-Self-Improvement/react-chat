const MyMessage = ({ content }) => {
  return (
    <div className="ml-auto bg-blue-500 text-gray-800 max-w-xs rounded-lg p-2">
      {content}
    </div>
  );
};

export default MyMessage;
