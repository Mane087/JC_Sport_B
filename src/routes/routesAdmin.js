const express = require("express");
const router = express.Router();
const admin = require("../controllers/admin");

router.post('/loginAdmin', async (req, res) => {
    const {user, password} = req.body;

    try {
        const token = await admin.loginAdmin(user, password);
        console.log(token);
        if (!token) {
            const userExists = await admin.userExists(user);
            if (userExists) {
                return res.status(400).send("Invalid password.");
            } else {
                return res.status(400).send("The user does not exist.");
            }
        }
        res.status(200).json({ token: token });
    } catch (error) {
        console.error(error);
        res.status(500).send("An error occurred while logging in.");
    }
});

module.exports = router;