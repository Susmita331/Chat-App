import jwt from "jsonwebtoken";

const createTokenAndSaveCookie = (userId, res) => {
  const token = jwt.sign(
    { userId }, 
    process.env.JWT_TOKEN, // secret from .env
    { expiresIn: "90d" }    // token valid for 5 days
  );

  res.cookie("jwt", token, {
    httpOnly: true,   // prevents XSS (can’t access cookie in JS)
    secure: true,     // only sent on HTTPS
    sameSite: "strict" // helps protect against CSRF
  });
};

export default createTokenAndSaveCookie;
