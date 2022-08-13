import { useContext } from "react";
import UserItem from "../UserItem";
import GithubContext from "../../context/github/GithubContext";

import Spinner from "../layout/Spinner";

const UserResults = () => {
  const { users, isLoading } = useContext(GithubContext);

  if (!isLoading) {
    return (
      <div className="grid gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        {users.map((user) => (
          <UserItem user={user} key={user.id} />
        ))}
      </div>
    );
  } else {
    return <Spinner />;
  }
};

export default UserResults;
