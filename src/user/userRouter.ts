import express from "express";

import {getUserById, getAllUsers, createUser, updateUser, deleteUser} from './userController'

const router = express.Router();


router.get('/:id', getUserById)

router.get('', getAllUsers)

router.post('', createUser)

router.patch('/:id', updateUser)

router.delete('/:id', deleteUser)


export default router;