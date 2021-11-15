import routes from '../routes';
import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';
import express from 'express';
import axios from 'axios';
import connectToDatabase from '../../../database/db-connect';
import { Button } from '../../../database/schema';

let mongod, app, server;

// Start database and server before any tests run
beforeAll(async done => {
    mongod = new MongoMemoryServer();

    await mongod.getUri()
        .then(cs => connectToDatabase(cs));

    app = express();
    app.use(express.json());
    app.use('/api/button', routes);
    server = app.listen(3000, done);
});


// Stop db and server before we finish
afterAll(done => {
    server.close(async () => {
        await mongoose.disconnect();
        await mongod.stop();
        done();
    });
});

it('Test getting button state', async () => {
    const url = 'http://localhost:3000/api/button/state';
    const response = await axios.get(url);
    const button = response.data;
    expect(button).toBe(false);
})
it('Toggling state works', async () => {
    try {
        const url = 'http://localhost:3000/api/button/setState';
        await axios.put(url);
        const response = await axios.get("http://localhost:3000/api/button/state");
        const button = response.data;
        console.log(`response is..${button}`)
        expect(button).toBe(true);
    }
    catch (error) {
        expect(error.response).toBeDefined();
        expect(error.response.status).toBe(400);
    }

})
it('Toggling state again works', async () => {
    try {
        const url = 'http://localhost:3000/api/button/setState';
        await axios.put(url);
        const response = await axios.get("http://localhost:3000/api/button/state");
        const button = response.data;
        console.log(`response is..${button}`)
        expect(button).toBe(false);
    }
    catch (error) {
        expect(error.response).toBeDefined();
        expect(error.response.status).toBe(400);
    }

})