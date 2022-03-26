import postMessage from "../models/postMessage.js";

export const getPosts = async (req, res) => {
  try {
    const postMessage = await postMessage.find();

    console.log(postMessage);

    res.status(200).json(postMessage);
  } catch (error) {
    res.send(400).json("messae: error problemß")
  }
};                                                         

export const createPost = (req, res) => {
 const post = req.body,

 const newPost= new Post
};
