import { required, email } from "@vuelidate/validators";

export const getErrorMessage = ($errors) => {
  return $errors.length ? $errors[0].$message : "";
}

export const vRequired = {
  ...required,
  $message: "Field is required"
}

export const vEmail = {
  ...email,
  $message: "Invalid email"
}

export const vUsername = {
  $message: "4-16 characters. Valid: a-z A-Z 0-9 _",
  $params: { type: "username" },
  $validator: (value) => {
    const regex = /^[a-zA-Z0-9_]{4,16}$/g
    return value.match(regex);
  }
}

export const vPassword = {
  $message: "6-16 characters. Valid: a-z A-Z 0-9 _ ! @ # $ % ^ & *",
  $params: { type: "password" },
  $validator: (value) => {
    const regex = /^[a-zA-Z0-9_!@#$%^&*]{6,16}$/g
    return value.match(regex);
  }
}
