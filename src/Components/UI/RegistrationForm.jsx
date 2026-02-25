'use client'
import { useForm } from "react-hook-form";
import WalletIcon from "$/wallet-logo.svg";
import EmailIco from "$/email-ico.svg";
import PasswordIco from "$/password-ico.svg";
import AccountIco from "$/account-ico.svg";
import Link from "next/link";
import { useDispatch } from "react-redux";
import * as authOperations from "%/auth/auth-operations";

function RegistrationForm() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = ({ email, username, password }) => {
      dispatch(authOperations.register({ email, username, password }));
      reset();
  }

  return (
    <div className="flex flex-col justify-center items-center py-9 px-5 w-80">
      <WalletIcon />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-center items-center mt-[50px] w-full"
      >
        <div className="relative">
          <EmailIco
            className="absolute left-2.5 top-2.5"
          />
          <input
            type="email"
            {...register("email")}
            className="border-b-[1px] border-gray-5 mb-10 text-gray-4 p-2.5 pl-11"
            placeholder="E-mail"
          />
        </div>
        <div className="relative">
          <PasswordIco
            className="absolute left-2.5 top-2.5"
          />
          <input
            type="password"
            {...register("password")}
            className="border-b-[1px] border-gray-5 mb-10 text-gray-4 p-2.5 pl-11"
            placeholder="Пароль"
          />
        </div>
        <div className="relative">
          <PasswordIco
            className="absolute left-2.5 top-2.5"
          />
          <input
            type="password"
            {...register("repeatedPassword")}
            className="border-b-[1px] border-gray-5 mb-10 text-gray-4 p-2.5 pl-11"
            placeholder="Підтвердіть пароль"
          />
        </div>
        <div className="relative">
          <AccountIco
            className="absolute left-2.5 top-2.5"
          />
          <input
            type="text"
            {...register("username")}
            className="border-b-[1px] border-gray-5 mb-10 text-gray-4 p-2.5 pl-11"
            placeholder="Ваше ім'я"
          />
        </div>
        <button type="submit" className="bg-green-1 cursor-pointer w-full h-[50px] rounded-[20px] font-circe text-white text-lg tracking-widest">Реєстрація</button>
      </form>
      <Link href={"/login"} className=" flex justify-center items-center mt-5 w-[280px] cursor-pointer h-[50px] rounded-[20px] border font-circe text-blue text-lg tracking-widest">Вхід</Link>
    </div>
  );
}

export default RegistrationForm;
