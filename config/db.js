const mongoose = require('mongoose')

module.exports = {

    connectDB: async () => {
        try {
            const conn = await mongoose.connect(process.env.Mongo_URL)

            console.log(`Mongodb connected : ${conn.connection.host}`.cyan.underline);
        } catch (error) {
            console.log(`Error: ${error.message}`.red.underline.bold);
            process.exit(1) // this make it to exit with failure and exits the entire process
        }
    }
}