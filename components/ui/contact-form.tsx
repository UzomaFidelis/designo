"use client";

import clsx from "clsx";
import { useForm } from "react-hook-form";
import { FormData } from "@/lib/types";
import FormField from "./form-field";
import FormTextField from "./form-text-field";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactSchema } from "@/lib/validation";
import FormPhoneField from "./form-phone-field";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormData>({
    resolver: zodResolver(ContactSchema),
  });

  const onSubmit = async (data: FormData) => {
    console.log("SUCCESS", data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={clsx(
        "text-white flex flex-col gap-[1.7rem] w-full",
        // "md:max-w-[30rem]",
        // "lg:max-w-[28rem] lg:mb-0",
      )}
    >
      <label className="relative">
        <FormField
          type="text"
          placeholder="Name"
          name="name"
          register={register}
          error={errors.name}
        />
        <span className="sr-only">name</span>
      </label>
      <label className="relative">
        <FormField
          type="email"
          placeholder="Email Address"
          name="email"
          register={register}
          error={errors.email}
        />
        <span className="sr-only">email</span>
      </label>
      <label className="relative">
        <FormPhoneField
          placeholder="Phone"
          name="phone"
          register={register}
          setValue={setValue}
          error={errors.phone}
        />
        <span className="sr-only">phone</span>
      </label>
      <label className="relative">
        <FormTextField
          placeholder="Message"
          name="message"
          register={register}
          error={errors.message}
        />
        <span className="sr-only">message</span>
      </label>
      <div className={clsx("flex justify-end")}>
        <button
          type="submit"
          className={clsx(
            "bg-white text-darkgrey font-bold rounded-lg py-3 px-12",
            "hover:bg-lightgrey hover:text-darkgrey/70",
          )}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
