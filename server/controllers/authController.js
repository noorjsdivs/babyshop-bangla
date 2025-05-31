import asyncHandler from "express-async-handler";

const loginUser = asyncHandler(async (req, res) => {
  console.log(req.body);
  res.send("Login got hit");
});

const registerUser = asyncHandler(async (req, res) => {
  console.log(req.body);
  res.send("Register got hit");
});

const getUserProfile = asyncHandler(async (req, res) => {
  res.send("Hello from getUserProfile");
});

export { loginUser, registerUser, getUserProfile };
