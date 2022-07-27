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
## Project Overview
##Login (/login)
Please log in with the data from the _DATA.js
<img width="1790" alt="Bildschirmfoto 2022-07-27 um 03 13 57" src="https://user-images.githubusercontent.com/82942834/181139370-93cdb6ef-ac20-4f54-866a-45b72e6e428e.png">

##Dashboard (/)
###Before Answering
If you have not answered a question yet, it will be displayed on the yet-to-be-answered page. 
<img width="1792" alt="Bildschirmfoto 2022-07-27 um 03 12 56" src="https://user-images.githubusercontent.com/82942834/181139386-568b9eb4-bdaa-4cef-aa20-53ce80499f65.png">
###After Answering
Once the question is answered, it will be displayed on the answered page. Use the slider on the right to get there 
<img width="1791" alt="Bildschirmfoto 2022-07-27 um 03 13 05" src="https://user-images.githubusercontent.com/82942834/181139399-88aeb6d6-173b-4132-a64e-5c6bd122ceb1.png">

##Poll-Page (/questions/:id)
###Before Answering
If a question has not yet been answered, you must answer it first. 
<img width="1792" alt="Bildschirmfoto 2022-07-27 um 03 13 30" src="https://user-images.githubusercontent.com/82942834/181139459-d566890d-537f-414d-9db5-c4b241c5df80.png">

###After Answering
After that you can see how many people have also voted like this 
<img width="1791" alt="Bildschirmfoto 2022-07-27 um 03 13 48" src="https://user-images.githubusercontent.com/82942834/181139453-caec5e0e-34f5-4cd7-b76e-3ef5d08c2829.png">

##Leader-Board (/leaderboard)
Of course there is also a leader board where you can see who has asked and answered how many questions. 
<img width="1792" alt="Bildschirmfoto 2022-07-27 um 03 13 17" src="https://user-images.githubusercontent.com/82942834/181139652-345af917-0b1f-4858-bd01-a17cd9ca7793.png">

##Question-Adding (/add)
If you want to ask your own questions then please use the question adding page 
<img width="1791" alt="Bildschirmfoto 2022-07-27 um 03 11 58" src="https://user-images.githubusercontent.com/82942834/181139706-c641a547-1b6d-4974-b737-68b59a238ff5.png">



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







