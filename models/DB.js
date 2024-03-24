const { MongoClient } = require("mongodb")
const uri = "mongodb+srv://root:2004@cluster0.ud7ebkh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const client = new MongoClient(uri)


module.exports = {
    DB: async function (collectionName) {
        try {
            const conn = await client.connect()
            return conn.db("exam_registration").collection(collectionName)
        } catch (err) {
            return false
        }
    }
}
