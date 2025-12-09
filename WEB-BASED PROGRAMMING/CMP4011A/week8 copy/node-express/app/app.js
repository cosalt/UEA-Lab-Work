const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get("/", (req, res) => {
    // res.send("Hello, welcome to my NodeJS application!");
    res.sendFile('index.html', (err) => {
        if (err)
            console.log(err);
    });
});

app.get("/hello", (req, res) => {
    res.send("This is the request to Hello!");
});

app.get("/hello/:name", (req, res) => {
    const routeParameter = req.params;
    const name = routeParameter.name;
    // or const name = req.params.name
    res.send(`Hello ${name}, welcome to my NodeJS application!`);
});

app.listen(port, () => {
    console.log(`myapp is listening on port ${port}!`);
});

app.post("/contact", (req, res)=>{
    //process form data here
    console.log(req.body);
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;
    res.send(`Response from the Server: Hello ${name}, thank you for your message!, we will contact you at ${email}`);
});

