"use client";
import Image from "next/image";
import Login from "@/app/components/Login";
import Chat from "@/app/components/Chat";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLogin, setLogin] = useState(false);
  const [userId, setUserId] = useState("");

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
