const validateAddUser = (req, res, next) => {
    const { firstName, lastName, email, password, age, address, tags } = req.body;
    const requiredFields = ['firstName', 'lastName', 'email', 'password', 'age', 'address', 'tags']
    const missedFieldsString = checkRequiredFields(requiredFields, req.body)

    if (!firstName || !lastName || !email || !password || !age || !address || !tags) {
        return res.status(400).json({ error: `Missing required fields in the request body: ${missedFieldsString}` });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ error: 'Invalid email format' });
    }

    if (isNaN(age)) {
        return res.status(400).json({ error: 'Age must be a number' });
    }

    if ('createdAt' in req.body) {
        return res.status(400).json({ error: 'Do not provide createdAt in the request body' });
    }

    next();
};

const validateGetUserByEmail = (req, res, next) => {
    const userEmail = req.params.email;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(userEmail)) {
        return res.status(400).json({ error: 'Invalid email format' });
    }

    next();
};

const validateAddArticle = (req, res, next) => {
    const { name, description, type, tags } = req.body;
    const requiredFields = ['name', 'description', 'type', 'tags']
    const missedFieldsString = checkRequiredFields(requiredFields, req.body)

    if (!name || !description || !type || !tags) {
        return res.status(400).json({ error: `Required fields are missing in the request body: ${missedFieldsString}` });
    }


    const allowedTypes = ['a', 'b', 'c'];
    const allowedTypesString = allowedTypes.join(', ')
    if (!allowedTypes.includes(type)) {
        return res.status(400).json({ error: `Invalid value for field "type", you can only use types: ${allowedTypesString}` });
    }

    next();
};

const validateUpdateArticleTags = (req, res, next) => {
    const { tags } = req.body;

   
    if (!tags) {
        return res.status(400).json({ error: '"Tags" field is required' });
    }

    if (!Array.isArray(tags)) {
        return res.status(400).json({ error: '"Tags" should be an array' });
    }

    next();
};

// helper function
const checkRequiredFields = (requiredFields, bodyPayload) => {
    const missedFields = requiredFields.filter(item => !Object.keys(bodyPayload).includes(item))
    return missedFields.join(', ')
}

module.exports = validateUpdateArticleTags;


module.exports = {
    validateGetUserByEmail,
    validateAddUser,
    validateAddArticle,
    validateUpdateArticleTags
}


