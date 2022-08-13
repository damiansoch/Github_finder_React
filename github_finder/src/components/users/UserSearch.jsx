import { useState, useContext } from "react";
import Alert from "../layout/assets/Alert";
import GithubContext from "../../context/github/GithubContext";
import AlertContext from "../../context/Alert/AlertContext";
import { searchUsers } from "../../context/github/GithubActions";

const UserSearch = () => {
  const [text, setText] = useState("");
  //from GithubContext
  const { users, dispatch } = useContext(GithubContext);

  //from AlertContext
  const { setAlert } = useContext(AlertContext);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (text === "") {
      setAlert("Please enter something", "error"); //(msg,type)
    } else {
      dispatch({ type: "SET_LOADING" });
      const users = await searchUsers(text);
      dispatch({ type: "GET_USERS", payload: users });
      setText("");
    }
  };
  const clearUsers = () => {
    dispatch({ type: "CLEAR_USERS" });
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cals-2 mb-8 gap-8">
      <div>
        <Alert />
        <form onSubmit={handleSubmit}>
          <div className="form-controll">
            <div className="relative">
              <input
                type="text"
                className="w-full pr-40 bg-gray-200 input input-lg text-black"
                placeholder="Search"
                value={text}
                onChange={handleChange}
              />
              <button
                className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg"
                type="submit"
              >
                Go
              </button>
            </div>
          </div>
        </form>
      </div>
      {users.length > 0 && (
        <div>
          <button onClick={clearUsers} className="btn btn-ghost btn-large">
            Clear
          </button>
        </div>
      )}
    </div>
  );
};

export default UserSearch;
