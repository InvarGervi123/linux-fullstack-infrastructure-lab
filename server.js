const express = require("express");
const { Pool } = require("pg");
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(express.static('public'));


const db = new Pool({
	user: "backend_user",
	host: "localhost",
	database: "backend_db",
	password: process.env.DB_PASSWORD,
	port: 5432,
});

app.get("/", (req, res) => {
	res.send("Backend is running");
});

app.get("/db", async (req, res) => {
	try {
		const result = await db.query("SELECT NOW()");
		res.json({
			status: "Database connected!",
			time: result.rows[0].now,
		});
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});

app.listen(3000, () => {
	console.log("Server running on port 3000");
});

app.post("/users", async (req, res) => {
	try {
		const { name } = req.body;

		const result = await db.query(
			"INSERT INTO users (name) VALUES ($1) RETURNING *",
			[name]
		);

		res.json(result.rows[0]);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});

app.get("/users", async (req, res) => {
	try {
		const result = await db.query("SELECT * FROM users ORDER BY id");
		res.json(result.rows);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});
