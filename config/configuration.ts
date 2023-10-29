type Config = {
  environment: "dev" | "prod";
  domain: string;
  apiKeys: {
    twitter: { clientId: string; clientSecret: string };
    gitHub: { clientId: string; clientSecret: string };
    google: { clientId: string; clientSecret: string }
  },
  awsAccessKey: {
    id: string,
    secret: string
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
let config: Config = {
  domain: "learn-to-code.io",

  apiKeys: {
    twitter: {
      clientId: process.env.TWITTER_CLIENT_ID!!,
      clientSecret: process.env.TWITTER_CLIENT_SECRET!!
    },
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID!!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!!
    },
    gitHub: {
      clientId: process.env.GITHUB_CLIENT_ID!!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!!
    }
  },

  environment: process.env.NODE_ENV === "production" ? "prod" : "dev",

  awsAccessKey: {
    id: process.env.NEXT_AUTH_AWS_ACCESS_KEY!!,
    secret: process.env.NEXT_AUTH_AWS_SECRET_KEY!!
  },
};

export default config;
