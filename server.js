const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3000;

dotenv.config();
app.use(cors());

app.get('/me', async (req, res) => {
    const status = "success";
    const user = {
        email: "femisolomon15@gmail.com",
        name: "Favour Solomon",
        stack: "Node.js/Express"
    }
    const timestamp = new Date().toISOString();
    try {
        const { data } = await axios.get('https://catfact.ninja/fact', { timeout: 5000 });
        res.json({
            status,
            user,
            timestamp,
            fact: data.fact
        });

    } catch (error) {
        if (error.code === "ECONNABORTED") {
            // Timeout
            return res.status(504).json({ error: "External API timed out" });
        }

        console.error("API error:", error.message);

        res.status(502).json({
            error: "Failed to fetch cat fact.",
            fallback: "Fun fact: Cats sleep 70% of their lives.",
        });
    }
});

app.listen(port, () => {
    console.log(`Server is running on PORT: ${port}`);
});