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
    <div className="container-fluid app__container">
      <div className="row app__container--users">
        {!users ? (
          <h6>Loading..., pls wait</h6>
        ) : (
          users.data.map((user) => {
            return (
              <div key={user.id} className="user col-md-2 col-lg-2 col-sm-1">
                <div className="user-details">
                  <span>
                    Type of the user is <strong>{user.type}</strong>
                  </span>
                  <span className="user-name">
                    Name of the user is <strong>{user.login}</strong>
                  </span>
                  <span>
                    <strong>{user.login}</strong>'s ID is{" "}
                    <strong>{user.id}</strong>
                  </span>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default App;
