export type SignUpErrorCode =
  | "ALREADY_IN_USE"
  | "INVALID_EMAIL"
  | "OPERATION_NOT_ALLOWED"
  | "WEAK_PASSWORD";

export type SignUpError = {
  [code in SignUpErrorCode]: string;
};
