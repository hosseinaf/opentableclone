import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import validator from "validator";
const prisma = new PrismaClient();
import bcrypt from "bcrypt";
import { use } from "react";
import * as jose from "jose";
import jwt from "jsonwebtoken";
 
export async function POST(request: Request) {
  const bearerToken = request.headers.get("authorization") as string;
  const token = bearerToken.split(" ")[1];

  const payload=jwt.decode(token) as {email:string} 
  if(!payload.email){
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
   const user=await  prisma.user.findUnique({
    where:{
        email:payload.email
    },
    select:{
        id:true,
        first_name:true,
        last_name:true,
        email:true,
        phone:true
    }
  })
  return new Response(
    JSON.stringify({
      hello: user,
    }),
    {
      status: 200,
      headers: {
        "content-type": "application/json",
      },
    }
  );
}
