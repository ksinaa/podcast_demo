import express from 'express';

const router = express.Router();

import user from './user/userRouter';
import podcast from './podcast/podcastRouter'

//test if server is running
router.get('/test', (req, res) => {
    res.send({'server-status': 'running'})
})

router.use('/user', user)
router.use('/podcast', podcast)

export default router;