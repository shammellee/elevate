import {
  NavLink
  ,Outlet
  ,useMatch
  ,useLoaderData
} from 'react-router-dom';

import { getUserIds } from 'api';
import defaultAvatar from 'images/default_avatar.png';
import './Root.css';

export async function loader() {
  const users = await getUserIds();

  return {users};
};

export default function Root() {
  const {users} = useLoaderData();
  const isRoot = useMatch({path: '/', end: true});

  return (
    <>
      <div className='page--root'>
        <aside className='root-sidebar'>
          <h1 className='root-sidebar-title'>Users</h1>
          <nav className='root-sidebar-nav'>
            <ul className='user-list'>
              {users?.length ? (
                  users.map( u => (
                    <li className='user-list-item' key={u.id}>
                      <NavLink className='user-list-item-link' to={`users/${u.id}`}>
                        <div className='user-list-item-avatar'
                        style={{backgroundImage: `url(${u.image ? `data:image/png;base64,${u.image}` : defaultAvatar}`}}
                        ></div>
                        <h2 className='user-list-item-name'>{`${u.first_name} ${u.last_name}`}</h2>
                      </NavLink>
                    </li>
                  ))
                ) : (
                  <li>No users</li>
                )
              }
            </ul>
          </nav>
        </aside>
        <main className='root-content'>
          {isRoot ? (
              <h2 className='root-content-title'>Select a user to see their stats</h2>
            ) : (
            <Outlet />
          )}
        </main>
      </div>
    </>
  );
}

