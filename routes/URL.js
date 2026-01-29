import {Router} from 'express';
import { generateShortUrl } from '../controlers/URL.js';
// import { redirectToOriginalURL } from '../controlers/URL.js';
const urlRouter=Router();

urlRouter.post("/shortner",generateShortUrl);
// urlRouter.get("/:shortID", redirectToOriginalURL);

export default urlRouter;