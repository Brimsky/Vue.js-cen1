// Import necessary modules and models
import express from 'express';
import { Signup, Login } from '../models/authdata.js';

const authController = express.Router();

// Route for user registration (signup)
authController.post('/signup', async (req, res) => {
    try {
        const { name, surname, email, password } = req.body;

        // Call your database model function to save user registration
        await Signup(name, surname, email, password);

        // Return a success message (or token in a real application)
        res.json({ message: 'User registration successful' });
    } catch (error) {
        console.error('Error during user registration:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Route for user login
authController.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Call your database model function to perform user login
        const user = await Login(email, password);

        // Check if the user exists and the password is correct
        if (!user) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        // Return a success message (or token in a real application)
        res.json({ message: 'User login successful' });
    } catch (error) {
        console.error('Error during user login:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Route for user logout
authController.post('/logout', (req, res) => {
    // Example logic to handle user logout

    // Return a success message (or clear session/token in a real application)
    res.json({ message: 'User logout successful' });
});

export default authController;
