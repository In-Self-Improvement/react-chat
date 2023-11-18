"use client";
import { usePathname, useRouter } from "next/navigation";
import { auth } from "@/firebase";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
const AuthRedirect = () => {
  const router = useRouter();
  const pathname = usePathname();

  const currentUser = auth.currentUser;
  const checkLogin = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("로그인 중입니당~");
      } else if (
        pathname !== "/signin" &&
        pathname !== "/signup" &&
        !currentUser
      ) {
        router.push("/signin");
      }
    });
  };
  useEffect(() => {
    checkLogin();
  }, [pathname]);
  return null;
};

export default AuthRedirect;
