const mongoose = require("mongoose");

const connect = () => {
    mongoose.set("debug", true);

    mongoose.connect(
        `mongodb://4leaf:fourleaf0309@210.114.1.127:27017/admin`,
        {
            dbName: `CRUD_JGM`,
            useNewUrlParser: true,
            useCreateIndex: true,
        },
        (error) => {
            if (error) {
                console.log(error);
                console.log(`❌`);
            } else {
                console.log(`✅`);
            }
        }
    )
};

mongoose.connection.on(`error`, (error) => {
    console.log(error);
    console.log(`❌`);
    connect();
});

mongoose.connection.on(`disconnect`, () => {
    console.log(`❌`);
    connect();
});

module.exports = connect;