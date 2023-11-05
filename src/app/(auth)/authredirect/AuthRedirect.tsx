"use client";
import { usePathname, useRouter } from "next/navigation";
import { auth } from "@/firebase";

const AuthRedirect = () => {
  const router = useRouter();
  const pathname = usePathname();

  const currentUser = auth.currentUser;

  if (pathname !== "/signin" && pathname !== "/signup" && !currentUser) {
    // alert("로그인 후 이용 가능합니다.");
    router.push("/signin");
  }

  return null;
};

export default AuthRedirect;
