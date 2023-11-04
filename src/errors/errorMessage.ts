import { SignUpError } from "@/types/errorTypes";

export const SIGNUP_ERROR_MESSAGES: SignUpError = {
  ALREADY_IN_USE: "이미 가입된 이메일입니다.",
  INVALID_EMAIL: "유효하지 않는 이메일 형식입니다.",
  OPERATION_NOT_ALLOWED: "회원가입 기능이 비활성화 되어 있습니다.",
  WEAK_PASSWORD: "비밀번호가 취약합니다.",
};
