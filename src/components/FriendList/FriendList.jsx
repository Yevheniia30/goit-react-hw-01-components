import PropTypes from "prop-types";
import FriendListItem from ".";
import Container from "../Container/Container";
import s from "./FriendList.module.css";

const FriendList = ({ friends }) => {
  return (
    <Container>
      <h2 className="taskTitle">Task 3 "FriendList"</h2>
      <ul className={s.friendList}>
        {friends.map((friend) => (
          <FriendListItem key={friend.id} friend={friend} />
        ))}
      </ul>
    </Container>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};

FriendList.defaultProps = {
  friends: [],
};

export default FriendList;
