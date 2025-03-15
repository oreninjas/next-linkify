import client from "@/lib/client.primise";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import NextAuth, { DefaultSession } from "next-auth";
import { AdapterUser } from "next-auth/adapters";
import GithubProvider from "next-auth/providers/github";

interface IUserExtend extends AdapterUser {
  role?: string | null;
}

const handler = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
      profile(profile) {
        return {
          id: profile.id,
          name: profile.name,
          email: profile.email,
          picture: profile.avatar_url,
          role: profile.role ?? "user",
        };
      },
    }),
  ],
  pages: {
    signIn: "/login",
    signOut: "/signout",
  },
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.role = (user as IUserExtend).role || "user";
      }
      return token;
    },
  },
  adapter: MongoDBAdapter(client),
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
