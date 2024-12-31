import '../App.css'
const Profile = ({ name, tag, location, image, stats }) => {
    return (
        <div className='card'>
          <div>
            <img
              src={image}
              alt="User avatar"
            />
            <p className='info'>{name}</p>
            <p className='info'>@{tag}</p>
            <p className='info'>{location}</p>
          </div>
  
          <ul className='list-of-stats'>
            <li>
              <span className='name-stat'>Followers</span>
              <span className='stats'>{stats.followers}</span>
            </li>
            <li>
              <span className='name-stat'>Views</span>
              <span className='stats'>{stats.views}</span>
            </li>
            <li>
              <span className='name-stat'>Likes</span>
              <span className='stats'>{stats.likes}</span>
            </li>
          </ul>
        </div>
  
    );
  };
  export default Profile;