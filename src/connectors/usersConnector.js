const req = require("request");

const path = "https://coin-trend-notifier-api.herokuapp.com/api/";
const log = console.log;

// Checks the server's availablity
const check_servers_availablity = () => {
  req.get(path, (json = true), (err, res, body) => {
    if (err) {
      return log(err);
    }
    return log(res.body);
  });
};

// Creates a new user
req.post(
  {
    headers: {},
    url: path + "users",
    json: true,
    body: JSON.stringify({
      email: "test.av2@gmail.com",
      password: "12345678",
      username: "test_user2",
      alertLimit: 0
    })
  },
  () => {
    (err, res, body) => {
      if (err) {
        log(err);
      } else if (res.statusCode === 422) {
        log("User already exist");
      } else {
        log(body);
      }
    };
  }
);

// Update a user
req.put(
  {
    headers: {},
    url: path + "users",
    json: true,
    body: JSON.stringify({
      email: "test.me@gmail.com",
      username: "test_user",
      phoneNumber: "+972-523546888",
      alertLimit: 604800
    })
  },
  () => {
    (err, res, body) => {
      if (err) {
        log(err);
      } else if (res.statusCode === 400) {
        log("Validation Error");
      } else if (res.statusCode === 409) {
        log("Email is taken");
      } else {
        log(body);
      }
    };
  }
);

// Login a user
req.post(
  {
    headers: {},
    url: path + "users",
    json: true,
    body: JSON.stringify({
      email: "test.user@testdomain.com",
      password: "123456789"
    })
  },
  () => {
    (err, res, body) => {
      if (err) {
        log(err);
      } else if (res.statusCode === 401) {
        log("User unregistered or Incorrect password");
      } else {
        log(body);
      }
    };
  }
);

// change a user's password
req.patch(
  {
    headers: {},
    url: path + "users/password",
    json: true,
    body: JSON.stringify({
      oldPassword: "12345678",
      newPassword: "123456789"
    })
  },
  () => {
    (err, res, body) => {
      if (err) {
        log(err);
      } else if (res.statusCode === 400) {
        log("Validation Error");
      } else if (res.statusCode === 422) {
        log("User not exist or Wrong password");
      } else {
        log(body);
      }
    };
  }
);
