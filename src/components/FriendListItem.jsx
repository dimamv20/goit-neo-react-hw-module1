const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
      <>
        <img src={avatar} alt={`${name}'s avatar`} width="48" />
        <p className="name-of-friends">{name}</p>
        <span
          style={{
            color: isOnline ? "green" : "red",
          }}
        >
          {isOnline ? "Online" : "Offline"}
        </span>
      </>
    );
  };
  
  export default FriendListItem;
  