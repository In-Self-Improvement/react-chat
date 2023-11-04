import { SignUpError } from "@/types/errorTypes";

export const SIGNUP_ERROR_CODE: SignUpError = {
  ALREADY_IN_USE: "auth/email-already-in-use",
  INVALID_EMAIL: "auth/invalid-email",
  OPERATION_NOT_ALLOWED: "auth/operation-not-allowed",
  WEAK_PASSWORD: "auth/weak-password",
};
