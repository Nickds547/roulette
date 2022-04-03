import { decodeToken } from "../services/auth.service";

export const adminAuthentication = (req,res,next) =>{
    const authHeader = req.headers.authorization;
    if(authHeader === null || authHeader === undefined) res.status(401).send()
    const authToken = authHeader.split('bearer ')[1]

    const parsedToken = decodeToken(authToken);

    if(parsedToken.userAccount.role === 'admin') next();
    else res.status(401).send()
}