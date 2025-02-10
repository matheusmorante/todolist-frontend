const errorMiddleware = (error, req, res, next) => {
    console.error(error.message);

    res.status(500).json({ error })
};

module.exports = errorMiddleware;