import mongoose from "mongoose"

const Connection = async (username, password) => {
    const URL = `mongodb+srv://adarsh:aidbull@documents.h7jqagh.mongodb.net/?retryWrites=true&w=majority`
    try {
        await mongoose.connect(URL, { useNewUrlParser: true });
        console.log('Database connected successfully')
    } catch (error) {
        console.log('Error while database connection', error)
    }
}

export default Connection;