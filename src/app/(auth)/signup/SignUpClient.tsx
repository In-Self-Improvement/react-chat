"use client";
import React, { useState } from "react";

import { auth } from "@/firebase";
import { useRouter } from "next/navigation";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { SET_LOADING } from "@/redux/slice/loadingSlice";

const SignUpClient = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isPasswordMatch, setIsPasswordMatch] = useState(false);

  const router = useRouter();
  const dispatch = useDispatch();

  const createUser = async () => {
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (user) {
        router.push("/signin");
      }
    } catch (error) {
      signUpError(error);
    }
  };

  const signUpError = (error: any) => {
    const isAlreadyInUse = error?.code === "auth/email-already-in-use";
    if (isAlreadyInUse) {
      alert("이미 가입된 이메일입니다.");
    }
  };

  const isPasswordsMatch = () => {
    if (password !== confirmPassword) {
      setPasswordError("비밀번호가 일치하지 않습니다.");
      return false;
    }
    return true;
  };

  const signUp = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(SET_LOADING(true));

    if (!isPasswordsMatch()) {
      dispatch(SET_LOADING(false));
      return;
    }

    await createUser();
    dispatch(SET_LOADING(false));
  };

  const navToSignIn = () => {
    router.push("/signin");
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const checkEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const emailValue = event.target.value;
    setEmail(emailValue);
    if (!validateEmail(emailValue)) {
      setEmailError("유효한 이메일을 입력하세요.");
      setIsPasswordMatch(false);
    } else {
      setEmailError("");
    }
  };

  const checkPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const passwordValue = event.target.value;
    setPassword(passwordValue);
    if (confirmPassword && passwordValue !== confirmPassword) {
      setPasswordError("비밀번호가 일치하지 않습니다.");
      setIsPasswordMatch(false);
    } else {
      setPasswordError("");
      setIsPasswordMatch(confirmPassword.length > 0);
    }
  };

  const checkConfirmPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const confirmPasswordValue = event.target.value;
    setConfirmPassword(confirmPasswordValue);
    if (password !== confirmPasswordValue) {
      setPasswordError("비밀번호가 일치하지 않습니다.");
      setIsPasswordMatch(false);
    } else {
      setPasswordError("");
      setIsPasswordMatch(confirmPasswordValue.length > 0);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-md">
        <form
          onSubmit={signUp}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <h2 className="text-2xl font-bold mb-4">회원가입</h2>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="email"
            >
              이메일
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                emailError ? "border-red-500" : ""
              }`}
              id="email"
              type="email"
              placeholder="이메일을 입력하세요."
              value={email}
              onChange={checkEmailChange}
            />
            {emailError && (
              <p className="text-red-500 text-xs italic">{emailError}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="password"
            >
              비밀번호
            </label>
            <div className="relative">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type={isPasswordVisible ? "text" : "password"}
                placeholder="비밀번호를 입력하세요."
                value={password}
                onChange={checkPasswordChange}
              />
              <button
                className="absolute top-0 right-0 h-full px-3 text-gray-700"
                onClick={togglePasswordVisibility}
              >
                {isPasswordVisible ? "숨기기" : "보기"}
              </button>
            </div>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="confirmPassword"
            >
              비밀번호 확인
            </label>
            <div className="relative">
              <input
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  passwordError ? "border-red-500" : ""
                }`}
                id="confirmPassword"
                type={isPasswordVisible ? "text" : "password"}
                placeholder="비밀번호를 다시 입력하세요."
                value={confirmPassword}
                onChange={checkConfirmPasswordChange}
              />
            </div>
            {passwordError && (
              <p className="text-red-500 text-xs italic">{passwordError}</p>
            )}
            {isPasswordMatch && (
              <p className="text-green-500 text-xs italic">
                비밀번호가 일치합니다.
              </p>
            )}
          </div>
          <div className="flex items-center justify-between">
            <button
              className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                emailError || passwordError
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
              type="submit"
              disabled={!!emailError || !!passwordError || !isPasswordMatch}
            >
              가입하기
            </button>
            <button
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={navToSignIn}
            >
              로그인으로 돌아가기
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpClient;
