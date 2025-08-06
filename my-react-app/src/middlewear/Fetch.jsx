import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import fetchUser from './UserAction.js';
function Fetch() {
  const { users, loading, error } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  if (loading) {
    return <p>Loading User Details</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1>HELLOOOOOO USER API</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>{user.title}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Fetch;
