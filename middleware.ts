import withAuth from "next-auth/middleware"
import {jwtVerify} from "jose";
import {JWT_COOKIE_NAME} from "@/libs/utils/jwtUtils";


export default withAuth({
  callbacks: {
    authorized: async (data) => {
      const nextAuthToken = data.req.cookies.get(JWT_COOKIE_NAME)?.value
      return await isTokenValid(nextAuthToken);
    },
  },
})


async function isTokenValid(nextAuthToken: string | undefined): Promise<boolean> {
  try {
    let {payload} = await jwtVerify(nextAuthToken!!, new TextEncoder().encode(process.env.NEXTAUTH_SECRET));
    return !!payload
  } catch (e) {
    // invalid token
    return false
  }
}

export const config = {matcher: ["/quiz/:path*"]}
