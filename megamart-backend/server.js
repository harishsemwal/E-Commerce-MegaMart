const app = require('../app');
const PORT = process.env.PORT || 5000;
const dotenv = require("dotenv");

const connectDatabase = require("./config/database");

dotenv.config({path: "megamart-backend/config/config.env"});

//connect with database
connectDatabase();



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
