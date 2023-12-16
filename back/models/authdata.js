// models/authdata.js
import database from '../config/database.js';
import bcrypt from 'bcrypt';

export const Signup = (name, surname, email, password, callback) => {
    // Check if the email is already in use
    database.query('SELECT * FROM users WHERE email = ?', [email], (emailCheckError, existingUser) => {
        if (emailCheckError) {
            return callback(emailCheckError);
        }

        // If an existing user is found, return an error
        if (existingUser.length > 0) {
            return callback('Email address is already in use');
        }

        // Hash the password
        bcrypt.hash(password, 10, (hashError, hashedPassword) => {
            if (hashError) {
                return callback(hashError);
            }

            // Save user registration with hashed password
            database.query(
                'INSERT INTO users (name, surname, email, password) VALUES (?, ?, ?, ?)',
                [name, surname, email, hashedPassword],
                (queryError, results) => {
                    if (queryError) {
                        return callback(queryError);
                    }

                    // The results variable now contains information about the inserted row, if needed
                    callback(null, results);
                }
            );
        });
    });
};

export const Login = (email, password, callback) => {
    // Retrieve user with the given email
    database.query('SELECT * FROM users WHERE email = ?', [email], (queryError, results) => {
        if (queryError) {
            return callback(queryError);
        }

        // Check if the user exists and the password is correct
        if (results.length > 0) {
            bcrypt.compare(password, results[0].password, (compareError, match) => {
                if (compareError) {
                    return callback(compareError);
                }

                if (match) {
                    // Pass null as the first argument to indicate success
                    callback(null, results[0]);
                } else {
                    // Pass null as the first argument to indicate success
                    callback(null, null);
                }
            });
        } else {
            // Pass null as the first argument to indicate success
            callback(null, null);
        }
    });
};
