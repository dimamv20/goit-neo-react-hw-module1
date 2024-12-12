const FriendList = ({ friends }) => {
    return (
      <ul className='card-of-friends'>
        {friends.map(friend => (
          <li className='card-for-friends' key={friend.id}>
            <img src={friend.avatar} alt={`${friend.name}'s avatar`} width="48" />
            <p className='name-of-friends'>{friend.name}</p>
            <span
              style={{
                color: friend.isOnline ? "green" : "red",
              }}
            >
              {friend.isOnline ? "Online" : "Offline"}
            </span>
          </li>
        ))}
      </ul>
    );
  };
  
  export default FriendList;
  