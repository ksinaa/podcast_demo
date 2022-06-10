import { Request, Response, NextFunction } from 'express';

import Podcast from "./Podcast"

const getPodcastById = (req: Request, res: Response, next: NextFunction) => {

    Podcast.findOne({_id: req.params.id}).then(podcast => {
        res.status(200).send(podcast)
    })
}

const getAllPodcasts = (req: Request, res: Response, next: NextFunction) => {


    Podcast.find().then(podcasts => {
        res.status(200).send(podcasts)
    })

}

const createPodcast = (req: Request, res: Response, next: NextFunction) => {

    const subject: String = req.body.subject;
    const file = null;
    const publisherId: String = req.body.publisherId;
    const duration: Number = 0;
    const describtion: String = req.body.describtion;
    const listened: Number = 0;

    const podcast = new Podcast({
        subject,
        file,
        publisherId,
        duration,
        describtion,
        listened
    })

    podcast.save().then(resualt => {
        res.status(200).send(resualt)
    })
}

const updatePodcast = (req: Request, res: Response, next: NextFunction) => {

}

const deletePodcast = (req: Request, res: Response, next: NextFunction) => {
    Podcast.deleteOne({_id: req.params.id}).then(resualt => {
        res.status(200).send(resualt)
    })
}

export {
    getPodcastById,
    getAllPodcasts,
    createPodcast,
    updatePodcast,
    deletePodcast
}


