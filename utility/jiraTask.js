const axios = require('axios');
exports.initiateTrigger = async (url) => {
    try {
        let result;
        result = await axios.post(url, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        return result
    } catch (error) {
        console.log(error);
        throw error

    }

}