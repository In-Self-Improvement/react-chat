import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { SET_LOADING } from "@/redux/slice/loadingSlice";
import { selectUserName } from "@/redux/slice/authSlice";
import { useSelector } from "react-redux";
const SidebarHeader = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const signout = () => {
    dispatch(SET_LOADING(true));
    signOut(auth)
      .then(() => {
        // toast.success("로그아웃 되었습니다.");
        dispatch(SET_LOADING(false));
        router.push("/signin");
      })
      .catch((error) => {
        // toast.error(error.message);
      });
  };

  return (
    <div className="flex items-center justify-between p-4 bg-gray-100 border-b border-gray-200">
      <h1 className="text-xl font-semibold text-black">채팅</h1>
      <button
        className="p-2 hover:text-gray-700 rounded-full text-black"
        onClick={signout}
      >
        <p>로그아웃</p>
      </button>
    </div>
  );
};

export default SidebarHeader;
