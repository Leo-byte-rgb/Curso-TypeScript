type User = {
  username: string;
  password: string;
};
type verifyUser = (user: User, sentValues: User) => boolean;

const verifyUsers: verifyUser = (user, sentValues) => {
  return (
    user.username === sentValues.username &&
    user.password === sentValues.password
  );
};

const bdUser = { username: 'joao', password: 'password' };
const sentUser = { username: 'joao', password: 'password' };

const loggedIn = verifyUsers(bdUser, sentUser);

console.log(loggedIn);
