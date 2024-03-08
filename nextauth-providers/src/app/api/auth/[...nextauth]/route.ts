import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import AzureADB2C from "next-auth/providers/azure-ad-b2c";

export const authOptions = {
    providers: [
        // GitHubProvider({
        //     clientId: process.env.GITHUB_ID ?? "",
        //     clientSecret: process.env.GITHUB_SECRET ?? "",
        // }),
        AzureADB2C({
            tenantId: process.env.AZURE_AD_B2C_TENANT_NAME,
            clientId: process.env.AZURE_AD_B2C_CLIENT_ID as string,
            clientSecret: process.env.AZURE_AD_B2C_CLIENT_SECRET as string,
            primaryUserFlow: process.env.AZURE_AD_B2C_PRIMARY_USER_FLOW,
            authorization: {
                params: {
                    scope: "offline_access openid",
                }
            },
            checks: ["pkce"],
            profile(profile) {
                return {
                    id: profile.sub,
                    name: `${profile.given_name} ${profile.family_name}`,
                    email: profile.emails[0],
                    image: null,
                }
            }
        }),
    ]
};

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
