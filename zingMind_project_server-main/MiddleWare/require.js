const jwt = require('jsonwebtoken');
const requireUser=(req, res, next) => {
    if(!req.headers ||
        !req.headers.authorization ||
        !req.headers.authorization.startsWith("Bearer")) {
     return res.status(401).send('Authorization header is require');
        }
        const accessToken = req.headers.authorization.split(" ")[1];
        console.log(accessToken);
        try {
            const decoded = jwt.verify(
                accessToken,
                process.env.ACCESS_TOKEN_PRIVATE_KEY
            );
        } catch (error) {

        }     
        next();
};
module.exports = requireUser;