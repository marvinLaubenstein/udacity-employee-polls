import { connect } from 'react-redux';
import users from '../../reducers/users';

const LeaderBoard = (props) => {
  const getUserNames = () => {
    console.log(props.users);
    props.users.map((user) => console.log(user));
    props.users.map((user) => console.log(Object.values(user.answers).length));
    props.users.map((user) =>
      console.log(Object.values(user.questions).length)
    );
  };

  return (
    <div
      style={{ width: '600px', border: '1px solid black', overflow: 'hidden' }}
    >
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
