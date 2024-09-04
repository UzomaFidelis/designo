import clsx from "clsx";
import { FormFieldProps } from "@/lib/types";

const FormField: React.FC<FormFieldProps> = ({
  type,
  placeholder,
  name,
  register,
  error,
}) => {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        {...register(name)}
        className={clsx(
          error ? "border-b-gray-300" : "border-b-white",
          "w-full pl-6 py-4 border-b bg-transparent outline-none",
          "placeholder:text-lightgrey",
          "focus:border-b focus:border-b-lightgrey",
          "autofill:bg-gray-500",
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

export default FormField;
