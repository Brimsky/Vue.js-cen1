import express from 'express';
import { Getdata, getdizozols } from '../models/pricedata.js';
import { Signup, Login } from '../models/authdata.js';


const router = express.Router();

// get all product prices
router.get('/prices', (req, res) => {
    Getdata((err, results) => {
        if (err) {
            console.log('Error getting all prices:', err);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            res.json(results);
        }
    });
});

// get one product price
router.get('/prices/:id', (req, res) => {
    const productId = req.params.id;

    getdizozols(productId, (err, result) => {
        if (err) {
            console.log('Error getting product price:', err);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            res.json(result);
        }
    });
});

router.post('/signup', (req, res) => {
    const { name, surname, email, password } = req.body;

    Signup(name, surname, email, password, (error, result) => {
        if (error) {
            if (error === 'Email address is already in use') {
                res.status(400).json({ error: 'Email address is already in use' });
            } else {
                console.error('Error during user registration:', error);
                res.status(500).json({ error: 'Internal Server Error' });
            }
        } else {
            res.json({ message: 'User registration successful', result });
        }
    });
});

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Call your database model function to perform user login
        Login(email, password, (error, user) => {
            if (error) {
                console.error('Error during user login:', error);
                res.status(500).json({ error: 'Internal Server Error' });
            } else {
                if (!user) {
                    // User not found or password incorrect
                    res.status(401).json({ error: 'Invalid credentials' });
                } else {
                    // User login successful
                    res.json({ message: 'User login successful' });
                }
            }
        });
    } catch (error) {
        console.error('Error during user login:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
export default router;
