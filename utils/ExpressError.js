class ExpressError extends Error {
    constructor(massage, statusCode) {
        super();
        this.message = massage;
        this.statusCode = statusCode;
    }
}

module.exports = ExpressError;