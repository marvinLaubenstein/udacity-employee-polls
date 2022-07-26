import { connect } from 'react-redux';
import Navbar from '../navbar/Navbar';
import './leaderboard.css';

const LeaderBoard = (props) => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="leaderboard-title">
        {props.users.map((user) =>
          user.id === props.authedUser ? (
            <div key={'test'}>
              <h3 key={user.id + 'title'}>{`Thank you ${
                String(props.authedUser)[0].toUpperCase() +
                String(props.authedUser).slice(1)
              } for ${Object.values(user.questions).length} Questions and ${
                Object.values(user.answers).length
              } Answers`}</h3>
            </div>
          ) : null
        )}
      </div>

      <table className="leaderboard-table">
        <tbody>
          <tr>
            <th>User</th>
            <th>Answers</th>
            <th>Questions</th>
            <th>Score</th>
          </tr>
          {props.users.map((user) => (
            <tr key={user.id}>
              <td
                key={user.id + 'id'}
                className="leaderboard-table-user-column"
              >
                <img
                  key={user.id + 'avatar'}
                  src={user.avatarURL}
                  alt="User"
                  className="leaderboard-table-avatar-column"
                ></img>
                <div className="leaderboard-table-name-column">{user.id}</div>
              </td>
              <td
                key={user.id + 'answer'}
                className="leaderboard-table-answer-column"
              >
                {Object.values(user.answers).length}
              </td>
              <td
                key={user.id + 'question'}
                className="leaderboard-table-question-column"
              >
                {Object.values(user.questions).length}
              </td>
              <td
                key={user.id + 'question'}
                className="leaderboard-table-question-column"
              >
                {Object.values(user.questions).length +
                  Object.values(user.answers).length}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = ({ users, authedUser }) => ({
  users: Object.values(users).sort((a, b) => {
    const aSum =
      Object.keys(a.answers).length + Object.keys(a.questions).length;
    const bSum =
      Object.keys(b.answers).length + Object.keys(b.questions).length;
    return bSum - aSum;
  }),
  authedUser,
});

export default connect(mapStateToProps)(LeaderBoard);
