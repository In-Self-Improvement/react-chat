const YourMessage = ({ content }) => {
  return (
    <div className="flex items-center space-x-2">
      <div className="w-8 h-8 rounded-full overflow-hidden m-2">
        <img
          className="object-cover w-full h-full"
          src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FtEMUl%2FbtrDc6957nj%2FNwJoDw0EOapJNDSNRNZK8K%2Fimg.jpg"
          alt="프로필 이미지"
        />
      </div>
      <div className="bg-gray-300 max-w-xs rounded-lg p-2 text-gray-700">
        {content}
      </div>
    </div>
  );
};
export default YourMessage;
