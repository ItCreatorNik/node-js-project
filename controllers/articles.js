const { articles } = require("../mockData/data");

const getArticles = (req, res) => {
    res.json(articles);
};

const addArticle = (req, res) => {
    const newArticle = req.body;
    articles.push(newArticle);
    res.status(201).json(newArticle);
};

const updateArticleTags = (req, res) => {
    const id = req.params.articleId;
    const updatedTags = req.body.tags;
    const articleIndex = articles.findIndex(article => article.id === id);
    if (articleIndex === -1) {
        res.status(404).json({ error: 'Article not found' });
    } else {
        articles[articleIndex].tags = updatedTags;
        res.json(articles[articleIndex]);
    }
};

module.exports = {
    getArticles,
    addArticle,
    updateArticleTags,
};