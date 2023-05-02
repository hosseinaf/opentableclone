import validator from "validator";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { use } from "react";
import * as jose from "jose";
import { setCookie } from "cookies-next";
import { Console } from "console";

const prisma = new PrismaClient();
export async function POST(request: Request) {
  const { email, password } = await request.json();
  const errors: string[] = [];

  const validationScheme = [
    {
      valid: validator.isEmail(email),
      errorMessage: "Email is invalid",
    },
    {
      valid: validator.isLength(password, {
        min: 1,
      }),
      errorMessage: "password  is invalid",
    },
  ];

  validationScheme.forEach((check) => {
    if (!check.valid) {
      errors.push(check.errorMessage);
    }
  });


 // console.log("sign in")
  if (errors.length) {
    // return status(400).json({ errorMessage: errors[0] });
    return new Response(JSON.stringify({ errorMessage: errors[0] }), {
      status: 401,
      headers: {
        "content-type": "application/json",
      },
    });
  }

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  console.log({user})

  if (!user) {
    return new Response(
      JSON.stringify({
        errorMessage: "Email or Password is invalid",
      }),
      {
        status: 401,
        headers: {
          "content-type": "application/json",
        },
      }
    );
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return new Response(
      JSON.stringify({
        errorMessage: "Email or Password is invalid",
      }),
      {
        status: 401,
        headers: {
          "content-type": "application/json",
        },
      }
    );
  }

  //create new token
  const alg = "HS256";
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);

  const token = await new jose.SignJWT({ email: user.email })
    .setProtectedHeader({ alg })
    .setExpirationTime("24h")
    .sign(secret);

  // setCookie("jwt", token, { maxAge: 60 * 6 * 24 });
  // setCookie("jwt",token)

  return new Response(
    JSON.stringify({
      // hello: token,
      firstName: user.first_name,
      lastName: user.last_name,
      email: user.email,
      phone: user.phone,
      city: user.city,
      token: token,
    }),
    {
    status: 200,
      headers: {
        "content-type": "application/json",
      },
    }
  );
}
