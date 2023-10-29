import NextAuth, {DefaultUser} from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import TwitterProvider from "next-auth/providers/twitter";
import {AuthOptions} from "next-auth/core/types";
import configuration from "@/config/configuration";
import {DynamoDBAdapter} from "@auth/dynamodb-adapter";
import {decodeJwt, encodeJwt, JWT_EXPIRATION_DURATION_30_DAYS} from "@/libs/utils/jwtUtils";
import DynamoDbClientFactory from "@/libs/dynamodb/DynamoDbClientFactory";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */

    // Set custom field into the next session that is stored in the JWT token
    // eslint-disable-next-line unused-imports/no-unused-vars
  interface Session {
    user: DefaultUser & {
      id: string;
    };
  }
}


export const authOptions: AuthOptions = {
  pages: {
    signIn: '/login'
  },

  session: {
    strategy: "jwt",
    maxAge: JWT_EXPIRATION_DURATION_30_DAYS,
  },

  cookies: {
    sessionToken: {
      name: `next-auth.session-token`,
      options: {
        httpOnly: false,
        sameSite: "lax",
        domain:
            process.env.NODE_ENV === "production"
                ? configuration.domain
                : `localhost`,
        path: "/",
        secure: process.env.NODE_ENV === "production",
      },
    },
  },

  jwt: {
    maxAge: JWT_EXPIRATION_DURATION_30_DAYS,
    encode: encodeJwt,
    decode: decodeJwt
  },

  callbacks: {
    async session({session, token}) {
      if (!token.sub) {
        throw new Error("JWT sub not defined");
      }

      session.user.id = token.sub;
      return session;
    },
  },

  providers: [
    GithubProvider({
      clientId: configuration.apiKeys.gitHub.clientId,
      clientSecret: configuration.apiKeys.gitHub.clientSecret,
      allowDangerousEmailAccountLinking: true,
    }),

    TwitterProvider({
      clientId: configuration.apiKeys.twitter.clientId,
      clientSecret: configuration.apiKeys.twitter.clientSecret,
      allowDangerousEmailAccountLinking: true,
      version: "1.0A",
    }),
    GoogleProvider({
      clientId: configuration.apiKeys.google.clientId,
      clientSecret: configuration.apiKeys.google.clientSecret,
      allowDangerousEmailAccountLinking: true,
    }),
  ],

  adapter: DynamoDBAdapter(
      new DynamoDbClientFactory().create(), {
        tableName: `${configuration.environment}_next_auth`,
        partitionKey: "pk",
        sortKey: "sk",
        indexName: "GSI1",
        indexPartitionKey: "GSI1PK",
        indexSortKey: "GSI1SK"
      }
  ),
};

export default NextAuth(authOptions);
