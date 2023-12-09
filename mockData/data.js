const users = [
    {
        "firstName": "John",
        "lastName": "Doe",
        "email": "johndoe@example.com",
        "password": "mysecretpassword",
        "age": 30,
        "address": {
            "street": "123 Main St",
            "city": "Anytown",
            "state": "CA",
            "zip": "12345",
            "country": "USA"
        },
        "createdAt": "2023-05-06T08:12:34.567Z",
        "tags": [
            "Sales",
            "Marketing"
        ]
    },
    {
        "firstName": "Nikita",
        "lastName": "Kovalov",
        "email": "boba.bibap@gmail.com",
        "password": "mysecretpassword",
        "age": 22,
        "address": {
            "street": "123 Main St",
            "city": "Anytown",
            "state": "CA",
            "zip": "12345",
            "country": "USA"
        },
        "createdAt": "2023-05-06T08:12:34.567Z",
        "tags": [
            "Sales",
            "Marketing"
        ]
    },
    {
        "firstName": "Nikita",
        "lastName": "Koval",
        "email": "kovalov.kovalov@gmail.com",
        "password": "mysecretpassword",
        "age": 22,
        "address": {
            "street": "123 Main St",
            "city": "Anytown",
            "state": "CA",
            "zip": "12345",
            "country": "USA"
        },
        "createdAt": "2023-05-06T08:12:34.567Z",
        "tags": [
            "Sales",
            "Marketing"
        ]
    }
];

const students = [
    {
        "name": "Aimee Zank",
        "scores": [
            {
                "score": 1.463179736705023,
                "type": "exam"
            },
            {
                "score": 11.78273309957772,
                "type": "quiz"
            },
            {
                "score": 35.8740349954354,
                "type": "homework"
            }
        ]
    },
    {
        "name": "Bad Zank",
        "scores": [
            {
                "score": 1.1,
                "type": "exam"
            },
            {
                "score": 8.78273309957772,
                "type": "quiz"
            },
            {
                "score": 25.8740349954354,
                "type": "homework"
            }
        ]
    },
    {
        "name": "Smart Zank",
        "scores": [
            {
                "score": 1.463179736705023,
                "type": "exam"
            },
            {
                "score": 21.78273309957772,
                "type": "quiz"
            },
            {
                "score": 45.8740349954354,
                "type": "homework"
            }
        ]
    }
];

const articles = [
    {
        id: "15c03c70-8c21-4bf7-82ca-dd5e988aa78b",
        name: 'Express - introduction',
        description: 'Express - text',
        type: 'a',
        tags: []
    },
    {
        id: "f50241f3-1d2b-4d29-b543-eba17e952ab4",
        name: 'Rip SD cards',
        description: 'some text...',
        type: 'b',
        tags: ['news']
    }
];

module.exports = {
    users,
    students,
    articles
};