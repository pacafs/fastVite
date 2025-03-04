import { useState, useEffect } from "react";
import api from "../api/axios";

interface User {
  id: number;
  username: string;
  email: string;
}

const Users = () => {

  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();

        const fetchUsers = async () => {
            try {
                const response = await api.get("/users", { signal: controller.signal });
                isMounted && setUsers(response.data);
                console.log(response.data);
            } catch (error) {
                console.error(error);
            }
        }
        
        fetchUsers();
        
        return () => {
            isMounted = false;
            controller.abort();
        }

  }, [users]);




  return (
    <article>
      <h2>Users</h2>
      <ul>
        {users.length === 0 ? (
          <li>No users found</li>
        ) : (
          users.map((user) => (
            <li key={user.id}>{user.username}</li>
          ))
        )}
      </ul>
    </article>
  )
}

export default Users