// import Users from "../models/UserModel"

// export const verifyUser = async (res, req, next) => {
//         if(!req.session.userId){
//             return res.status(401).json({msg: "Mohon login ke akun Anda!"});
//         }
//         const users = await Users.findOne({
//             where: {
//                 uuid: req.session.userId
//             }
//         });
//         if(!users) return res.status(404).json({msg: "User tidak ditemukan"});
//         req.userId = users.id;
//         req.role = users.role; 
//         next();
// }