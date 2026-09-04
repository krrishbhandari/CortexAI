export const getCurrentUser = async (req , res) => {
    try{
       return res.status(200).json(req.user);
    }
    catch(error){
        res.status(500).json({ message: `Get current user error ${error}` });
    }
}