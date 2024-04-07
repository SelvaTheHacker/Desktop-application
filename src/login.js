let { DB } = require("./DB")
const bcrypt = require("bcrypt")
let loginForm = document.querySelector('#login-form')

loginForm.addEventListener('submit', async e => {
    e.preventDefault()

    const data = {}
    for (let inp of e.target) {
        if (inp.name == undefined || inp.name.length == 0) continue
        data[inp.name] = inp.value
    }

    const collection = await DB("students")

    if (!collection) {
        alert("database connection error.")
        return
    }

    const checkUser = await collection.findOne({ email: data.email })
    if (!checkUser) {
        alert("user not found.")
        return
    }


    if (!bcrypt.compareSync(data.pass, checkUser.pass)) {
        alert("password error.")
        return
    }

    localStorage.setItem("email", checkUser.email)
    location.href = "../Home/index.html"
})