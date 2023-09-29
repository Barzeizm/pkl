import bcrypt from "bcrypt";
import Users from "../models/UserModel.js";

export const getAllUsers = async (req, res) => {
    try {
        const response = await Users.findAll();
        res.status(200).json(response); // Sending a successful response with status code 200
    } catch (error) {
        console.log(error.message); // Sending an error response with status code 500
    }
};

export const getUserById = async (req, res) => {
    try {
        const response = await Users.findOne({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
};
export const createUser = async (req, res) => {
    const { nama, email, password, matchPwd, role } = req.body;
    if (password !== matchPwd)
        return res.status(400).json({ msg: "Konfirmasi Password tidak cocok" });
    const hashPassword = await bcrypt.hash(password, 10);
    try {
        await Users.create({
            nama: nama,
            email: email,
            password: hashPassword,
            role: role,
        });
        res.status(200).json({ msg: "Registrasi Berhasil" });
    } catch (error){
        res.status(400).json({ msg: error.message });
    }
};
// export const updateUser = (req,res) => {

// }
// export const deleteUser = (req,res) => {

// }
