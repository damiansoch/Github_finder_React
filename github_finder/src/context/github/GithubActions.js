const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;

//search users
export const searchUsers = async (text) => {
  const params = new URLSearchParams({
    q: text,
  });
  const responce = await fetch(`${GITHUB_URL}/search/users?${params}`);
  //check the postman on what we are getting back
  const { items } = await responce.json();
  return items;
};

//single user profile
export const getUser = async (login) => {
  const responce = await fetch(`${GITHUB_URL}/users/${login}`);

  //if login is not a real login
  if (responce.status === 404) {
    window.location = "/notfound";
  } else {
    const data = await responce.json();

    return data;
  }
};
//search repos
export const searchRepos = async (login) => {
  const params = new URLSearchParams({
    sort: "created",
    per_page: 10,
  });

  const responce = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`);
  //check the postman on what we are getting back

  const data = await responce.json();

  return data;
};
