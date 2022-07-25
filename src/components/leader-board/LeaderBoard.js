import { connect } from 'react-redux';
import users from '../../reducers/users';
import { Link } from 'react-router-dom';
import Navbar from '../navbar/Navbar';

const LeaderBoard = (props) => {
  const getUserLeadershipData = () => {
    props.users.map((user) => {
      if (user.id === props.authedUser) {
        console.log(Object.values(user.answers).length);
      }
    });
  };

  return (
    <div>
      <Navbar></Navbar>
      <div
        style={{
          width: '600px',
          border: '1px solid black',
          overflow: 'hidden',
        }}
      >
        {props.users.map((user) => (
          <div>{user.id === props.authedUser ? user.id : null}</div>
        ))}
        {props.users.map((user) => (
          <div>
            {user.id === props.authedUser
              ? Object.values(user.answers).length
              : null}
          </div>
        ))}
        {props.users.map((user) => (
          <div>
            {user.id === props.authedUser
              ? Object.values(user.questions).length
              : null}
          </div>
        ))}
        {props.users.map((user) => (
          <div>{user.id}</div>
        ))}
        {props.users.map((user) => (
          <div>{Object.values(user.answers).length}</div>
        ))}
        {props.users.map((user) => (
          <div>{Object.values(user.questions).length}</div>
        ))}
      </div>
      <Link to={'/'}>
        <div className="question-poll-option-two">Home</div>
      </Link>
    </div>
  );
};

const mapStateToProps = ({ questions, users, authedUser }) => ({
  questionIDs: Object.keys(questions).sort(
    (a, b) => questions[b].timestamp - questions[a].timestamp
  ),
  questions,
  users: Object.values(users),
  authedUser,
});

export default connect(mapStateToProps)(LeaderBoard);
