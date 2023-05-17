// Description: Function  to handle response error

const handleError = (res, response, endpointURL, option) => {
    if (!response.data){
        res.status(500)
        throw new Error(`Could not fetch ${option} from ${endpointURL}/${option}`)
    }
}

module.exports = handleError;