import express from "express"
import {
    getAllUsers,

} from "../controllers/Users.js"

const router = express.Router()

router.get('/api/users', getAllUsers);
// router.get('/api/users:id', getUserById);
// router.post('/api/users', createUser);
// router.patch('/api/users:id', updateUser);
// router.delete('/api/users', deleteUser);

export default router;