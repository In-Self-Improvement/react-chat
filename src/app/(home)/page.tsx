"use client";
import Image from "next/image";
import Login from "@/app/components/Login";
import Chat from "@/app/components/Chat";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLogin, setLogin] = useState(false);
  const [userId, setUserId] = useState("");
  // 1. 페이지가 나뉘어져 있으면 좋겠다.
  // 2. setLogin 이 부분도 관리하기 어려워 질 수도 있을 듯 -> store로 관리 (새로고침 했을 때 로그인 유지)
  // 3. 회원가입 (비밀번호 보기, 유효성 검사 onchange 될때)
  // 4. 로딩
  // 5. 로그인 화면에서 엔터 눌렀을때 넘어가기
  // 테일윈드 커스텀 하기

  return (
    <main className="grid bg-white">
      {isLogin ? (
        <Chat setLogin={setLogin} userId={userId} />
      ) : (
        <Login setLogin={setLogin} setUserId={setUserId} />
      )}
    </main>
  );
}
