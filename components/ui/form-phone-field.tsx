import clsx from "clsx";
import { FormPhoneFieldProps } from "@/lib/types";
import { ChangeEvent } from "react";

const FormPhoneField: React.FC<FormPhoneFieldProps> = ({
  placeholder,
  name,
  register,
  setValue,
  error,
}) => {
  const handlePhoneNumberChange = (e: ChangeEvent) => {
    if (e.target instanceof HTMLInputElement) {
      const value = e.target.value;
      if (!value.startsWith("+")) {
        setValue("phone", `+${value}`);
      }
      // const regex = /^\+?[0-9]+$/;
      // if (!regex.test(value)) {
      //   setValue("phone", `${value.slice(0, -1)}`);
      // }
    }
  };
  return (
    <>
      <input
        placeholder={placeholder}
        {...register(name, { onChange: handlePhoneNumberChange })}
        className={clsx(
          error ? "border-b-gray-300" : "border-b-white",
          "w-full pl-6 py-4 border-b bg-transparent outline-none",
          "placeholder:text-lightgrey",
          "focus:border-b focus:border-b-lightgrey",
        )}
      />
      {error && (
        <span
          className={clsx(
            "text-gray-200 absolute right-0 top-0 text-sm",
            "text-base",
          )}
        >
          {error.message}
        </span>
      )}
    </>
  );
};

export default FormPhoneField;
