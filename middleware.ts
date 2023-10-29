import withAuth from "next-auth/middleware"
import {decodeJwt} from "@/libs/utils/jwtUtils";

export default withAuth({
  jwt: {
    decode: decodeJwt
  },
  callbacks: {
    authorized: ({token}) => !!token,
  },
})

export const config = {matcher: ["/quiz/:path*"]}
