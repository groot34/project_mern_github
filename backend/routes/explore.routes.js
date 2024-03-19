import express from 'express'
import { explorePopularRepos } from '../controllers/explore.controllers.js';
import { ensureAuthenticated } from '../middleware/ensureAuthenticate.js';

const router = express.Router();

router.get("/repos/:language",ensureAuthenticated,explorePopularRepos)

export default router;
