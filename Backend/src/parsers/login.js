import messages from "../constants/messages.js";
export const parseCheckUserData = function (data) {
  return data?.[0]?.[0]?.[0] ?? [];
};

export const parseCreateUser = function (data) {
  return data?.[0]?.affectedRows > 0
    ? { message: messages.login.userAdded }
    : [];
};
