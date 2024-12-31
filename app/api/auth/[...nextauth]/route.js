import NextAuth from "@node_modules/next-auth";
import GoogleProvider from "next-auth/providers/google";

console.log({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
});

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
    }),
  ],
  async session({ session }) {},

  async signIn({ profile }) {},
});

export { handler as GET, handler as POST };
 