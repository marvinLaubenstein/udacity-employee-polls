# Employee Polls (Udacity) 

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

This project is my variant of the Employee Polls project created for Udacity's React course. 
This is an application that allows users to vote via polls which answer they would rather do in a "Would you rather" question scenario.

## Installation

How to start the application:

- Install all required project dependencies
```sh
npm i
```
- Start the Development Server
```sh
npm start
```

## Testing (Jest)
- Navigate to the correct folder 
```sh
npm test 
```



## src/File-structure 

```bash
├── App.css
├── App.js
├── App.test.js
├── __snapshots__
│   └── App.test.js.snap
├── actions
│   ├── authedUser.js
│   ├── questions.js
│   ├── shared.js
│   └── users.js
├── components
│   ├── dashboard
│   │   ├── Dashboard.js
│   │   └── dashboard.css
│   ├── leader-board
│   │   ├── LeaderBoard.js
│   │   └── leaderboard.css
│   ├── login
│   │   ├── LoginScreen.js
│   │   ├── LoginScreen.test.js
│   │   └── __snapshots__
│   │       └── LoginScreen.test.js.snap
│   ├── navbar
│   │   ├── Navbar.js
│   │   ├── Navbar.test.js
│   │   ├── __snapshots__
│   │   │   └── Navbar.test.js.snap
│   │   └── navbar.css
│   ├── privateroute
│   │   └── PrivateRoutes.js
│   ├── question-adding-page
│   │   ├── QuestionAddingPage.js
│   │   ├── QuestionAddingPage.test.js
│   │   ├── __snapshots__
│   │   │   └── QuestionAddingPage.test.js.snap
│   │   └── questionaddingpage.css
│   ├── question-card
│   │   ├── QuestionCard.js
│   │   └── question-card.css
│   └── question-poll-page
│       ├── QuestionPollPage.js
│       └── question-poll-page.css
├── data
│   ├── _DATA.js
│   └── _DATA.test.js
├── index.css
├── index.js
├── middleware
│   ├── index.js
│   └── logger.js
├── reducers
│   ├── authedUser.js
│   ├── index.js
│   ├── questions.js
│   └── users.js
├── reportWebVitals.js
├── setupTests.js
└── utils
    ├── api.js
    └── helper.js


```


## _DATA

Udacity has provided a `_DATA.js`file, which contains not only exemplary user and question data, but also the possibility to modify them with the following functions 

There are 4 possible requests:
- 1️⃣ [`_getUsers`](#_getUsers)
- 2️⃣ [`_getQuestions`](#_getQuestions)
- 3️⃣ [`_saveQuestion`](#_saveQuestion)
- 4️⃣ [`_saveQuestionAnswer`](#_saveQuestionAnswer)

### 1️⃣`_getUsers`

Method Signature:

```js
 _getUsers();
```


### 2️⃣`_getQuestions`

Method Signature:

```js
_getQuestions();
```



### 3️⃣`update`

Method Signature:

```js
_saveQuestion(question);
```

### 4️⃣`search`

Method Signature:

```js
_saveQuestionAnswer({ authedUser, qid, answer })
```

## Important

Creating new questions or answering questions does not directly change _DATA.js. Therefore the page resets itself when the page is reloaded.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebook/create-react-app/blob/main/packages/cra-template/template/README.md).

## Contributing

This repository was created based on the entry code for _all_ Udacity students.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).







