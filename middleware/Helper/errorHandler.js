module.exports = {
    errorHandler: (err, req, res, next) => {

        const statusCode = res.statusCode ? res.statusCode : 500; //if the status code is not set 

        res.status(statusCode).json({
            message: err.message,
            stack: process.env.Node_env === 'production' ? null : err.stack
        })
        // next()
    }
}

