import User from "../models/User.js";

export const getUser = async (req, res) => {
    // console.log(req)
    // try {
    //     const {id} = req.params;
    //     const user = await User.findById(id);
    //     res.send(200).json(user);
        
    // } catch (error) {
    //     res.send(400).json(error);
    // }
    res.send(200).json("Hello from server")
}