import { connect } from 'react-redux';
import Navbar from '../navbar/Navbar';
import './leaderboard.css';

const LeaderBoard = (props) => {
  return (
    <div>
      <Navbar></Navbar>
      <table className="leaderboard-table">
        <tbody>
          <tr className="leaderboard-table-head-row">
            <th>User</th>
            <th>Answers</th>
            <th>Questions</th>
            <th>Score</th>
          </tr>
          {props.users.map((user) => (
            <tr
              className={
                user.id === props.authedUser
                  ? 'leaderboard-table-auth-user-row'
                  : 'leaderboard-table-user-row'
              }
              key={user.id}
            >
              <td
                className="leaderboard-table-user-column"
                key={user.id + 'id'}
              >
                <img
                  className="leaderboard-table-avatar-column"
                  key={user.id + 'avatar'}
                  src={user.avatarURL}
                  alt="User"
                ></img>
                <div className="leaderboard-table-name-column">{user.id}</div>
              </td>
              <td
                className="leaderboard-table-answer-column"
                key={user.id + 'answer'}
              >
                {Object.values(user.answers).length}
              </td>
              <td
                className="leaderboard-table-question-column"
                key={user.id + 'question'}
              >
                {Object.values(user.questions).length}
              </td>
              <td
                className="leaderboard-table-question-column"
                key={user.id + 'sum'}
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
