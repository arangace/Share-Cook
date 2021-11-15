import express from 'express';
import { Button } from "../../database/schema";
import * as buttonDao from '../../database/button-dao';
const HTTP_OK = 200;
const HTTP_NOT_FOUND = 404;
const HTTP_NO_CONTENT = 204;
const HTTP_BAD_REQUEST = 400;
const HTTP_CREATED = 201;

const router = express.Router();

// TODO Exercise Four: Add your RESTful routes here.
router.get('/state', async (req, res) => {

    console.log("state getter..");
    try {
        const response = await buttonDao.retrieveButtonState(1);
        console.log(response);
        console.log(response.pressed);
        res.json(response.pressed);
    }
    catch {
        res.sendStatus(HTTP_NOT_FOUND);
    }


})
router.put('/setState', async (req, res) => {
    console.log("setting state...");
    try {
        const response = await buttonDao.setButtonState(1);
        res.status(HTTP_NO_CONTENT).header('Button', response).json(Button);
    }
    catch {
        res.sendStatus(HTTP_BAD_REQUEST);
    }

})
router.post('/', async (req, res) => {
    const response = await buttonDao.createButton(req.body);
    res.sendStatus(HTTP_CREATED);
})
export default router;