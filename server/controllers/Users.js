import Users from "../models/UserModel.js"

export const getAllUsers = async(res) => {
    try{
        const response = await Users.findAll();
        res.status(200).json(response);
        console.log(response)
        
    } catch (error){
        res.status(500).json({msg : error.message})
    }
}

// export const getUserById = (req,res) => {

// }
// export const createUser = (req,res) => {

// }
// export const updateUser = (req,res) => {

// }
// export const deleteUser = (req,res) => {

// }