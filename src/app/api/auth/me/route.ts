import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import validator from "validator";
const prisma = new PrismaClient();
import bcrypt from "bcrypt";
import { use } from "react";
import * as jose from "jose";
import jwt from "jsonwebtoken";

export async function GET(request: Request) {
  const bearerToken = request.headers.get("authorization") as string;
  const token = bearerToken.split(" ")[1];

  const payload = jwt.decode(token) as { email: string };
  if (!payload.email) {
    return new Response(
      JSON.stringify({
        hello: "Unauthorized request(token invalid) ",
      }),
      {
        status: 401,
        headers: {
          "content-type": "application/json",
        },
      }
    );
  }
  const user = await prisma.user.findUnique({
    where: {
      email: payload.email,
    },
    select: {
      id: true,
      first_name: true,
      last_name: true,
      email: true,
      phone: true,
      city: true,
    },
  });
  if (!user) {
    return new Response(
      JSON.stringify({
        hello: "User not found",
      }),
      {
        status: 401,
        headers: {
          "content-type": "application/json",
        },
      }
    );
  }

  return new Response(
    JSON.stringify({
      //   hello: user,
      id: user.id,
      firstName: user.first_name,
      lastName: user.last_name,
      phone: user.phone,
      city: user.city,
    }),
    {
      status: 200,
      headers: {
        "content-type": "application/json",
      },
    }
  );
}
