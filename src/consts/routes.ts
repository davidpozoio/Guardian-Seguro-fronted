export const routes = {
  HOME: {
    name: "home",
    NOTIFICATIONS: "notifications",
    ALERTS: "alert",
    USER_DETAILS: "user-details",
  },
  AUTH: {
    name: "auth",
    LOGIN: "login",
    SIGNUP: "signup",
  },
  ALERT: {
    name: "/home/alert",
    TYPES: function () {
      return this.name + "/types";
    },
  },
};
