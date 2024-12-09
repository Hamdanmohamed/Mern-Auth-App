import User from "../models/usermodel.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export const addSignupUser = async (req, res) => {
  const { username, email, password } = req.body;
  const alReadyUser = await User.findOne({ email });

  if (alReadyUser) {
    return res.status(400).json({ message: "already user is registered" });
  }

  const salt = 12;
  const hashedPassword = bcryptjs.hashSync(password, salt);

  const newUser = new User({
    username,
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    res.status(200).json({ message: "user created successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "something went wrong in the internal server" });
  }
};

export const addSigninUser = async (req, res) => {
  const { email, password } = req.body;
  const validUser = await User.findOne({ email });

  if (!validUser) {
    return res.status(400).json({ message: "user not found" });
  }

  const validPassword = bcryptjs.compareSync(password, validUser.password);

  if (!validPassword) {
    return res.status(400).json({ message: "invalid password" });
  }

  const token = jwt.sign(
    { id: validUser._id },
    process.env.JWT_SECRET,
    { expiresIn: "15d" } // Token expiration set to 15 days
  );

  res
    .cookie("token", token, {
    //   httpOnly: true,

      maxAge: 15 * 24 * 60 * 60 * 1000, // Cookie expiration set to 15 days in milliseconds
    })
    .status(200)
    .json({ message: "user logged in successfully" });
};
