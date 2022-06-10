import express from "express";

import {getPodcastById, getAllPodcasts, createPodcast, updatePodcast, deletePodcast} from './podcastController'

const router = express.Router();


router.get('/:id', getPodcastById)

router.get('', getAllPodcasts)

router.post('', createPodcast)

router.patch('/:id', updatePodcast)

router.delete('/:id', deletePodcast)


export default router;