import Message from "../modals/message.modal.js";
import User from "../modals/user.modal.js";

export const getMessages = async (req, res) => {
    try {
        const {id: chatUserId} = req.params;

        const myId = req.user;

        const messages = await Message.find({
            $or: [
                { senderId: myId, receiverId: chatUserId },
                { senderId: chatUserId, receiverId: myId }
            ]
        });

        res.status(200).json(messages)

    } catch (error) {
        console.log("Error in getMessages controller:", error.message);
        res.status(500).json({error: "Internal server error"});
    }
}

export const sendMessages = async (req, res) => {
    try {
        const {text} = req.body;

        const {id: receiverId} = req.params

        const senderId = req.user._id;

        const newMessage = new Message({
            senderId,
            receiverId,
            text
        })

        await newMessage.save();

        // SOCKETIO
        res.status(200).json(newMessage)
    } catch (error) {
        console.log("Error in sendMessage controller:", error.message);
        res.status(500).json({error: "Internal server error"});
    }
}

export const getUserForSidepanel = async (req, res) =>{
    try {
        const loggedInUser = req.user._id;

        const filteredUsers = await User.find({_id: { $ne: loggedInUser}}).select("-password");

        res.status(200).json(filteredUsers);
    } catch (error) {
        console.log("Error in sendMessage controller:", error.message);
        res.status(500).json({error: "Internal server error"});
    }
}