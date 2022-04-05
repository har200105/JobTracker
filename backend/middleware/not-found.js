const notFoundMiddleware = (req, res) => {
    res.status(404).json({
        message:"Route Doesnot Exist"
    });
}

module.exports = { notFoundMiddleware };