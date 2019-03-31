'use strict';

module.exports.api = async (event) => {
    /** Immediate response for WarmUP plugin */
    if (event.source === 'serverless-plugin-warmup') {
        console.log('WarmUP - Lambda is warm!');
        return callback(null, 'Lambda is warm!');
    }
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Function executed!'
        }),
    };
};

