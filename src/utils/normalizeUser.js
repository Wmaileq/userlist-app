const normalizeUser = (user) => ({
  gender: user.gender,
  createdAt: user.registered.date,
  name: `${user.name.title} ${user.name.first} ${user.name.last}`,
  email: user.email,
  avatar: user.picture.medium,
  image: user.picture.large,
});

export default normalizeUser;
