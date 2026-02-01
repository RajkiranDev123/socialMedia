import { Tweet } from "../models/tweetSchema.js";
import { User } from "../models/userSchema.js";

export const createTweet = async (req, res) => {
  try {
    const { description } = req.body;
    const id = req.user;
    console.log(id);

    if (!description || !id) {
      return res.status(400).json({
        message: "All Fields are required.",
        success: false,
      });
    }
    const user = await User.findById(id).select("-password");
    await Tweet.create({
      description,
      userId: id,
      userDetails: user,
    });
    return res.status(201).json({
      message: "Tweet created successfully.",
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

//////////////////////////////////////////

export const deleteTweet = async (req, res) => {
  try {
    const { id } = req.params;
    await Tweet.findByIdAndDelete(id);
    return res.status(200).json({
      message: "Tweet deleted successfully.",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};
