import mongoose from "mongoose";
import app from "./app";


async function databaseConnection() {
  try {
    await mongoose.connect("mongodb+srv://iqbal:DTp9DRZWA6pe2SC1@cluster0.c3fbyna.mongodb.net/bookself?retryWrites=true&w=majority");
    console.log('Database connection established');

    // Additional code for your application logic goes here

    // Start your server
    const port =5000;
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  } catch (error) {
    console.error('Failed to connect to the database', error);
  }
}

// Call the databaseConnection function to establish the connection
databaseConnection();

