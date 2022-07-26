describe('_saveQuestionAnswer', () => {
  const { _saveQuestionAnswer } = require('./_DATA');
  const validQuestionAnswerData = {
    authedUser: 'mtsamis',
    qid: '6ni6ok3ym7mf1p33lnez',
    answer: 'optionOne',
  };
  const invalidQuestionAnswerData = {
    authedUser: 'sarahedo',
    qid: null,
    answer: null,
  };
  it('should return true for valid passed answer data', async () => {
    const response = await _saveQuestionAnswer(validQuestionAnswerData);
    expect(response).toBeTruthy();
  });
  it('should return error message for invalid passed answer data', async () => {
    await expect(_saveQuestionAnswer(invalidQuestionAnswerData)).rejects.toBe(
      'Please provide authedUser, qid, and answer'
    );
  });
});

describe('_saveQuestion()', () => {
  const { _saveQuestion } = require('./_DATA');

  const validQuestionData = {
    optionOneText: 'This is option one',
    optionTwoText: 'This is option two',
    author: 'tylermcginnis',
  };

  const invalidQuestionData = {
    optionOneText: 'This is option one',
    optionTwoText: null,
    author: 'tylermcginnis',
  };

  it('should return valid data for valid passed question data', async () => {
    const result = await _saveQuestion(validQuestionData);
    expect(result).toEqual(
      expect.objectContaining({
        id: expect.any(String),
        timestamp: expect.any(Number),
        author: 'tylermcginnis',
        optionOne: expect.objectContaining({
          text: 'This is option one',
          votes: expect.arrayContaining([]),
        }),
        optionTwo: expect.objectContaining({
          text: 'This is option two',
          votes: expect.arrayContaining([]),
        }),
      })
    );
  });

  it('should return error message for invalid passed question data', async () => {
    await expect(_saveQuestion(invalidQuestionData)).rejects.toEqual(
      'Please provide optionOneText, optionTwoText, and author'
    );
  });
});
