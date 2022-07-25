import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import './leaderboard.css';
import { useState } from 'react';

const LeaderBoard = (props) => {
  const [authUserData, setUserData] = useState('');

  return (
    <div>
      <Navbar></Navbar>
      <div className="leaderboard-title">
        {props.users.map((user) =>
          user.id === props.authedUser ? (
            <h3 key={user.id + 'title'}>{`Thank you ${
              String(props.authedUser)[0].toUpperCase() +
              String(props.authedUser).slice(1)
            } for ${Object.values(user.questions).length} Questions and ${
              Object.values(user.answers).length
            } Answers`}</h3>
          ) : null
        )}
      </div>
      <table className="leaderboard-table">
        <tbody>
          <tr>
            <th>User</th>
            <th>Answers</th>
            <th>Questions</th>
          </tr>
          {props.users.map((user) => (
            <tr key={user.id}>
              <td key={user.id + 'id'}>{user.id}</td>
              <td key={user.id + 'answer'}>
                {Object.values(user.answers).length}
              </td>
              <td key={user.id + 'question'}>
                {Object.values(user.questions).length}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = ({ users, authedUser }) => ({
  users: Object.values(users).sort(
    (a, b) => Object.keys(b.answers).length - Object.keys(a.answers).length
  ),
  authedUser,
});

export default connect(mapStateToProps)(LeaderBoard);
