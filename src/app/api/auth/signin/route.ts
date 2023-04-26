import validator from "validator";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { use } from "react";
import * as jose from "jose";

const prisma = new PrismaClient();
export async function POST(request: Request) {
    const {email,password } =
      await request.json();
    const errors: string[] = [];
   
    const validationScheme = [
      {
        valid: validator.isEmail(email),
        errorMessage: "Email is invalid",
      },
      {
        valid: validator.isLength(password,{
            min:1
        }),
        errorMessage: "password  is invalid",
      }
       
    ];
  
    validationScheme.forEach((check) => {
      if (!check.valid) {
        errors.push(check.errorMessage);
      }
    });
  
    if (errors.length) {
      // return status(400).json({ errorMessage: errors[0] });
      return new Response(JSON.stringify({ errorMessage: errors[0] }), {
        status: 400,
        headers: {
          "content-type": "application/json",
        },
      });
    }
  
  
    const userWithEmail = await prisma.user.findUnique({
        where: {
          email,
        },
      });

      if (!userWithEmail) {
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


      const isMatch=await bcrypt.compare(password,userWithEmail.password)

      if(!isMatch){
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

 
      const alg = "HS256";
      const secret = new TextEncoder().encode(process.env.JWT_SECRET);
      const token = await new jose.SignJWT({ email: userWithEmail.email })
        .setProtectedHeader({ alg })
        .setExpirationTime("24h")
        .sign(secret);
    
  
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
  