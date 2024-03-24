const { DB } = require("./DB");

(async () => {
    const email = localStorage.getItem("email")
    const collection = await DB("students")

    const user = await collection.findOne({ email })
    console.log(user);
    document.querySelector("p").innerHTML = user.name
})()