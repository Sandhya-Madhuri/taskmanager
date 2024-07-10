import jwt from "jsonwebtoken";
import { MongoClient } from "mongodb";
import mongoose from "mongoose";

const connectWithRetry = async () => {
  console.log("Mongoose connection with retry");

  try {
    await mongoose.connect("mongodb://localhost:27017/provider_test", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB connection established");
  } catch (error) {
    console.error(
      "Mongoose connection unsuccessful, retrying in 5 seconds...",
      error
    );
    setTimeout(connectWithRetry, 5000); // Retry connection after 5 seconds
  }
};

export const dbConnection = connectWithRetry;
// const uri =
//   "mongodb+srv://sandhyamadhuri789:Gyhz4hLz8q18SBIv@cluster0.sazs0wq.mongodb.net/sample_airbnb?retryWrites=true&w=majority";

// export const dbConnection = () => {
//   console.log("MongoDB connection with retry");
//   mongoose
//     .connect(uri, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       serverSelectionTimeoutMS: 30000, // 30 seconds
//       socketTimeoutMS: 45000, // 45 seconds
//     })
//     .then(() => {
//       console.log("MongoDB is connected");
//     })
//     .catch((err) => {
//       console.log(
//         "MongoDB connection unsuccessful, retry after 5 seconds.",
//         err
//       );
//       setTimeout(connectWithRetry, 5000);
//     });
// };

export const createJWT = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

  // Change sameSite from strict to none when you deploy your app
  res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development",
    sameSite: "strict", //prevent CSRF attack
    maxAge: 1 * 24 * 60 * 60 * 1000, //1 day
  });
};
