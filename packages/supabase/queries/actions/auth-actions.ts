"use server";

import { useSupabaseServer } from "@repo/supabase/utils/server";

export const verifyOtp = async (data: {
  email: string;
  otp: string;
  type: string;
}) => {
  const supabase = await useSupabaseServer();

  const res = await supabase.auth.verifyOtp({
    email: data.email,
    token: data.otp,
    type: "email",
  });
  return JSON.stringify(res);
};

export const postEmail = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  };
  // Send the POST request
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/signup`,
    requestOptions,
  );
  const json = await res.json();
  return json;
};

export const verifyRecaptcha = async (token: string) => {
  const response = await fetch(
    "https://www.google.com/recaptcha/api/siteverify",
    {
      method: "POST",
      body: new URLSearchParams({
        secret: process.env.RECAPTCHA_SECRET_KEY as string,
        response: token,
      }),
    },
  );
  const data = await response.json();
  return data.success;
};
