export const config = {
    tokenSecret: process.env.TOKEN_SECRET || "mySuperSecretTokenPlzDontHack",
    port: process.env.PORT || 3000,
    databaseURL: process.env.DATABASE
}
