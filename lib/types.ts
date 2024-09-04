import { FieldError, UseFormRegister, UseFormSetValue } from "react-hook-form";

type ValidFieldNames = "name" | "email" | "phone" | "message";

export type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export type FormTextFieldProps = {
  placeholder: string;
  name: ValidFieldNames;
  register: UseFormRegister<FormData>;
  error: FieldError | undefined;
};

export type FormPhoneFieldProps = FormTextFieldProps & {
  setValue: UseFormSetValue<FormData>;
};

export type FormFieldProps = FormTextFieldProps & {
  type: string;
};
