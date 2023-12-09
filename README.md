
# Basic Express.js app for Users, Students and Articles

It's simple application where you can make CRUD operations with users. Also you can get some data about our students and different articles.


## Installation and start server


```bash
  npm install
  npm run start-local
```

## API Reference

### Users
#### Get all users

```http
  GET /users
```

#### Get single user by email

```http
  GET /users/:email
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `email`      | `string` | **Required**. Email of item to fetch |

#### Create user

```http
  POST /users
```

#### Update user

```http
  PUT /users/:email
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `email`      | `string` | **Required**. Email of item to fetch |

```http
  DELETE /users/:email
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `email`      | `string` | **Required**. Email of item to fetch |

### Students
#### Get students statistics

```http
  GET /students/stats
```
#### Get the worst student grade for HW

```http
  GET /students/worst-homework
```
### Articles
#### Get all articles

```http
  GET /articles
```
#### Create article

```http
  POST /articles
```
#### Update article tags by article's id

```http
  PATCH /articles/:articleId/tags
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `articleId`      | `string` | **Required**. ArticleId of item to fetch |


