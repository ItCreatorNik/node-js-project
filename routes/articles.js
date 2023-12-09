const express = require('express');
const router = express.Router();
const { getArticles, addArticle, updateArticleTags } = require('../controllers/articles');

const { validateAddArticle, validateUpdateArticleTags } = require('../middlewares/validation.mdware')

router.get('/', getArticles);
router.post('/', validateAddArticle, addArticle);
router.patch('/:articleId/tags', validateUpdateArticleTags, updateArticleTags);

module.exports = router;