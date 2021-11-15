import mongoose from 'mongoose';
import connectToDatabase from './db-connect';
import { Button } from './schema';
const buttonData = { pressed: false };
main();

async function main() {
    await connectToDatabase();
    console.log('Connected to database!');
    console.log();

    await clearDatabase();
    console.log();

    await addData();
    console.log();

    // Disconnect when complete
    await mongoose.disconnect();
    console.log('Disconnected from database!');
}
async function clearDatabase() {
    const response = await Button.deleteMany({})//deletes everything due to empty filter in the {}
    console.log(`Database cleared... ${response.deletedCount}`);
}
async function addData() {
    const dbButton = new Button(buttonData);//creates new object to add to DB
    await dbButton.save();
    console.log(`Database added ${dbButton.pressed}`);
}