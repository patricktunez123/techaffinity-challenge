import axios from "axios";
import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [users, setUsers] = useState();

  const fetchUsers = async () => {
    const response = await axios
      .get("https://api.github.com/users")
      .catch((e) => {
        console.log(e);
      });

    setUsers(response);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          {users &&
            users.data.map((user) => {
              return (
                <div key={user.id} className="col-md-3 col-lg-3 col-sm-1">
                  <span>
                    User: <b> {user.login}</b> with ID
                    <strong>{user.id}</strong>
                  </span>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default App;
