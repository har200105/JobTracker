const errorHandler = (err, req, res, next) => {
    console.log(err);
    res.status(500).json({
        msg:"Error Occured"
    });
}

module.exports = {
    errorHandler
}