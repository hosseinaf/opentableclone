import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import validator from "validator";
const prisma = new PrismaClient();
import bcrypt from "bcrypt";
import { use } from "react";
import * as jose from "jose";

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//  return  res.status(200).json({
//     hello: "there",
//   });
// }
export async function POST(request: Request) {
  const { firstName, lastName, email, phone, city, password } =
    await request.json();
  const errors: string[] = [];
 

  //validation schema
  const validationScheme = [
    {
      valid: validator.isLength(firstName, {
        min: 1,
        max: 20,
      }),
      errorMessage: "First name is invalid",
    },
    {
      valid: validator.isLength(lastName, {
        min: 1,
        max: 20,
      }),
      errorMessage: "Last name is invalid",
    },
    {
      valid: validator.isLength(email),
      errorMessage: "email is invalid",
    },
    {
      valid: validator.isMobilePhone(phone),
      errorMessage: "Phone number is invalid",
    },
    {
      valid: validator.isLength(city, {
        min: 1,
        max: 20,
      }),
      errorMessage: "city is invalid",
    },
    {
      valid: validator.isStrongPassword(password),
      errorMessage: "password  is not strong enough",
    },
  ];


  //validation schema extraction
  validationScheme.forEach((check) => {
    if (!check.valid) {
      errors.push(check.errorMessage);
    }
  });


  //if error exist
  if (errors.length) {
    return new Response(JSON.stringify({ errorMessage: errors[0]
     }), {
      status: 400,
      headers: {
        "content-type": "application/json",
      },
    });
  }


  //if email exist before
  const userWithEmail = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (userWithEmail) {
    return new Response(
      JSON.stringify({
        errorMessage: "Email is associated with another account",
      }),
      {
        status: 401,
        headers: {
          "content-type": "application/json",
        },
      }
    );
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      first_name: firstName,
      last_name: lastName,
      password: hashedPassword,
      city,
      phone,
      email,
    },
  });

  const alg = "HS256";
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);
  const token = await new jose.SignJWT({ email: user.email })
    .setProtectedHeader({ alg })
    .setExpirationTime("24h")
    .sign(secret);



  //last return
  return new Response(
    JSON.stringify({
     hello: token,
    }),
    {
      status: 200,
      headers: {
        "content-type": "application/json",
      },
    }
  );
}
