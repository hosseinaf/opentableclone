import * as jose from "jose"; 
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
    console.log("i am midle ware")
    const bearerToken = request.headers.get("authorization") as string;
  if (!bearerToken) {
    return new Response(
      JSON.stringify({
        errorMessage: "Unauthorized request(no beaker token) ",
      }),
      {
        status: 401,
        headers: {
          "content-type": "application/json",
        },
      }
    );
  }

  const token = bearerToken.split(" ")[1];
  if (!token) {
    return new Response(
      JSON.stringify({
        errorMessage: "Unauthorized request(no token) ",
      }),
      {
        status: 401,
        headers: {
          "content-type": "application/json",
        },
      }
    );
  }

  const secret = new TextEncoder().encode(process.env.JWT_SECRET);
  try {
    await jose.jwtVerify(token,secret)
  } catch(error) {
    return new Response(
        JSON.stringify({
          errorMessage: "Unauthorized request(token invalid) ",
        }),
        {
          status: 401,
          headers: {
            "content-type": "application/json",
          },
        }
      );
  }
 

}

 
export const config = {
   matcher: '/api/auth/me',
}