import clsx from "clsx";
import { FormTextFieldProps } from "@/lib/types";

const FormTextField: React.FC<FormTextFieldProps> = ({
  placeholder,
  name,
  register,
  error,
}) => {
  return (
    <>
      <textarea
        placeholder={placeholder}
        rows={3}
        {...register(name)}
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
            "text-gray-200 absolute top-0 right-0 text-sm",
            "text-base",
          )}
        >
          {error.message}
        </span>
      )}
    </>
  );
};

export default FormTextField;
