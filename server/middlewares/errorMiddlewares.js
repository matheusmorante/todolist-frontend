const errorMiddleware = (error, req, res, next) => {
    console.error(error);
};

module.exports = errorMiddleware;