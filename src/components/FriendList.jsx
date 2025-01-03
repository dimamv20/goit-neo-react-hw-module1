import FriendListItem from "./FriendListItem";

const FriendList = ({ friends }) => {
  return (
    <ul className="card-of-friends">
      {friends.map(friend => (
        <li className="card-for-friends" key={friend.id}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
