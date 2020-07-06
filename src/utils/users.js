const users = [];

// addUser

const addUser = ({ id, username, room }) => {
  // Clean the data
  username = username.trim().toLowerCase();
  room = room.trim().toLowerCase();

  // validate the data

  if (!username || !room) {
    return {
      error: "Username and room are required",
    };
  }

  // Check for existing user

  const existingUser = users.find(
    (user) => user.room === room && user.username === username
  );

  // Validate username
  if (existingUser) {
    return {
      error: "Username is in use",
    };
  }

  // Store user
  const user = { id, username, room };
  users.push(user);
  return { user };
};

const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);

  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
};

const getUser = (id) => {
  const user = users.find((user) => user.id === id);

  if (!user) {
    return {
      error: "No user found",
    };
  }

  return user;
};

const getUsersInRoom = (room) => {
  const roomUsers = users.filter((user) => user.room === room);

  if (roomUsers.length === 0) {
    return {
      error: "No users in this room",
    };
  }

  return {
    roomUsers,
  };
};

module.exports = {
  addUser,
  removeUser,
  getUser,
  getUsersInRoom,
};
