import React, { use } from "react";
import User from "../User/User";

const Useres2 = ({ usersPromise }) => {
  const users = use(usersPromise);
  //   console.log(users, "users to suspanse load");
  return (
    <div>
      <h2>This is Users 2</h2>
      <div>
        {
          <div>
            {users.map((user) => (
              <User key={user.id} user={user}></User>
            ))}
          </div>
        }
      </div>
    </div>
  );
};

export default Useres2;
