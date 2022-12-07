import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

function ContactMe({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:aldringordon@gmail.com?subject=${formData.subject} - ${formData.name}&body=${formData.message}
     ${formData.name}
     ${formData.email}`;
  };

  return (
    <div className="relative flex flex-col items-center h-screen px-10 mx-auto text-center md:text-left md:flex-row max-w-7xl justify-evenly">
      <h3 className="translate-x-[10px] absolute top-[60px] uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>

      <div className="flex flex-col space-y-5">
        <h4 className="text-2xl font-semibold text-center">
          flick me a{" "}
          <span className="underline decoration-[#f8ffae]/60">msg</span>{" "}
        </h4>

        <div className="space-y-6">
          <div className="flex items-center justify-center space-x-5">
            <EnvelopeIcon className="text-[#f8ffae] h-7 w-7 animate-pulse" />
            <p className="text-xl">example@gmail.com</p>
          </div>

          <div className="flex items-center justify-center space-x-5">
            <MapPinIcon className="text-[#f8ffae] h-7 w-7 animate-pulse" />
            <p className="text-xl">Perth, Western Australia</p>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-fit">
          <div className="grid grid-cols-4 grid-rows-6 gap-2">
            <input
              {...register("name")}
              placeholder="Name"
              className="col-span-2 row-span-1 contactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="col-span-2 row-span-1 contactInput"
              type="email"
            />

            <input
              {...register("subject")}
              placeholder="Subject"
              className="col-span-4 row-span-1 contactInput"
              type="text"
            />

            <textarea
              {...register("message")}
              placeholder="Message"
              className="col-span-4 row-span-2 contactInput"
            />

            <button
              type="submit"
              className="bg-[#f8ffae] col-span-4 row-span-1 rounded-md text-black font-bold text-lg"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
