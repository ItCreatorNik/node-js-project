const { students } = require("../mockData/data");

const getStudentStats = (req, res) => {
    res.json(students);
};

const getWorstHomeworkScore = (req, res) => {
    const worstHomeworkStudent = students.reduce((prev, current) => {
        const currentHomeworkScore = current.scores.find(score => score.type === 'homework').score;
        const prevHomeworkScore = prev.scores.find(score => score.type === 'homework').score;
        return currentHomeworkScore < prevHomeworkScore ? current : prev;
    });

    res.json(worstHomeworkStudent);
};

module.exports = {
    getStudentStats,
    getWorstHomeworkScore,
};