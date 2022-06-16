import { Request, Response, NextFunction } from 'express';

import User from './User'

const getUserById = (req: Request, res: Response, next: NextFunction) => {

    User.findOne({_id: req.params.id}).then(resualt => {
        res.status(200).send({
            "status": "OK",
            "resualt": resualt || []
        })
    }).catch(err => {
        res.status(500).send({
            "status": "error",
            "msg": err
        })
    })
}


const getAllUsers = (req: Request, res: Response, next: NextFunction) => {

    User.find().then(resualt => {
        res.status(200).send({
            "status": "OK",
            "resualt": resualt 
        })
    }).catch(err => {
        res.status(500).send({
            "status": "error",
            "msg": err
        })
    }) 
}

const createUser = async (req: Request, res: Response, next: NextFunction) => {

    const userName: String = req.body.userName;
    const email: String = req.body.email;
    const password: String = req.body.password

    const userExistWithEmailAddress = await User.find({email: email})
    const userExistWithUserName = await User.find({userName: userName})

    if(userExistWithEmailAddress.length !== 0 && userExistWithUserName.length !== 0){
        res.status(400).send({
            "status": "error",
            "resualt": {
                "email": "exist",
                "username": "exist"
            }
        })
    }else if(userExistWithEmailAddress.length !== 0){
        res.status(400).send({
            "status": "error",
            "resualt": {
                "email": "exist"
            }
        })

    }else if(userExistWithUserName.length !== 0){
        res.status(400).send({
            "status": "error",
            "resualt": {
                "username": "exist"
            }
        })
    }else{
        const user = new User({
            userName: userName,
            email: email,
            password: password,
            podcast: [],
            history: [],
            subscribe: []
        })
    
        user.save().then(resualt => {
            res.status(200).send({
                "status": "OK",
                "resualt": resualt
            })
        }).catch(err => {
            res.status(500).send({
                "status": "error",
                "msg": err
            })
        })
    }
}

const updateUser = (req: Request, res: Response, next: NextFunction) => {

}

const deleteUser = (req: Request, res: Response, next: NextFunction) => {

    User.deleteOne({_id: req.params.id}).then(resualt => {
        res.status(200).send({
            "status": "OK",
            "resualt": resualt
        })
    }).catch(err => {
        res.status(500).send({
            "status": "error",
            "msg": err
        })
    })
}

export {
    getUserById,
    getAllUsers,
    createUser,
    updateUser,
    deleteUser
}