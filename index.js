// import express from 'express';

// const app = express();

// app.use(express.json());

// app.get("/", (req, res)=>{
//     res.status(200).json({"result":"My backend is ruuning devendra"})
// })

// app.listen(5000, ()=>{
//     console.log("Sevrer is running on http://localhost:5000")
// })



import express from 'express';

const app = express();

// Middleware to parse JSON
app.use(express.json());

// GET request
app.get("/", (req, res) => {
    res.status(200).json({ "result": "My backend is running Devendra" });
});

// POST request
app.post("/user", (req, res) => {
    const { name, age } = req.body;

    if (!name || !age) {
        return res.status(400).json({ error: "Name and age are required" });
    }

    res.status(201).json({
        message: "User created successfully",
        data: { name, age }
    });
});

// PATCH request (update partial data)
app.patch("/user/:id", (req, res) => {
    const { id } = req.params;
    const updates = req.body;

    // In real apps, you'd update the database here
    res.status(200).json({
        message: `User ${id} updated successfully`,
        updatedData: updates
    });
});

// DELETE request
app.delete("/user/:id", (req, res) => {
    const { id } = req.params;

    // In real apps, you'd delete from the database here
    res.status(200).json({ message: `User ${id} deleted successfully` });
});

// General request example (handles any HTTP method)
app.all("/all-methods", (req, res) => {
    res.status(200).json({
        message: `Received a ${req.method} request!`,
        body: req.body
    });
});

// Start server
app.listen(5000, () => {
    console.log("Server is running on http://localhost:5000");
});
