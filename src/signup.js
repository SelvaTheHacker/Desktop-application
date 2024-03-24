const bcrypt = require("bcrypt")
let { DB } = require("./DB")
let signUpForm = document.querySelector('#signupForm')

signUpForm.addEventListener('submit', async e => {
    e.preventDefault()

    const data = {}
    for (let inp of e.target) {
        if (inp.name == undefined || inp.name.length == 0) continue
        data[inp.name] = inp.value
    }

    const collection = await DB("students")
    if (collection) {
        const checkUser = await collection.findOne({ email: data.email })

        if (checkUser == null) {
            data.pass = bcrypt.hashSync(data.pass, 10)
            const response = await collection.insertOne(data)
            if (response.acknowledged) {
                alert("success")
                location.href = "./login.html"
            } else {
                alert("failed try again")
            }
        } else {
            alert("user already found")
        }
    } else {
        alert("database connection error.")
    }

})
