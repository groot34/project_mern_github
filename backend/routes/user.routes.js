import express from 'express';
import { getUserProfileAndRepos } from '../controllers/user.controller.js';
import { ensureAuthenticated } from '../middleware/ensureAuthenticate.js';
import { likeProfile } from '../controllers/user.controller.js';
import { getLikes } from '../controllers/user.controller.js';

const router = express.Router();

router.get("/profile/:username", getUserProfileAndRepos)

//TODO => GetLikes( who liked the profile)
router.get('/likes', ensureAuthenticated, getLikes);


//TODO=> Post likes on a profile
 router.post('/like/:username', ensureAuthenticated, likeProfile);

export default router;