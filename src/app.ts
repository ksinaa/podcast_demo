import express from 'express';

const router = express.Router();

import user from './user/userRouter';

//test if server is running
router.get('/test', (req, res) => {
    res.send({'server-status': 'running'})
})

router.use('/user', user)

export default router;