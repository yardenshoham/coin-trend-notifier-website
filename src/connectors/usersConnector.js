const req = require("request");
const axios = require("axios").default;

const path = "https://coin-trend-notifier-api.herokuapp.com/";
const log = console.log;

// Checks the server's availablity
const check_servers_availablity = () => {
  axios
    .get(path)
    .then(function(res) {
      log(res.data);
    })
    .catch(function(err) {
      log(err);
    });
};

let res;
const create_new_user = func => {
  axios
    .post(path + "api/users", {
      email: "test.av3@gmail.com",
      password: "12345678",
      username: "test_user3",
      alertLimit: 0
    })
    .then(function(res) {
      res = res.data;
    })
    .catch(function(err) {
      log(err);
    })
    .then(function() {
      func();
    });
};
create_new_user(() => {
  log(res);
});

// Creates a new user
const create = () => {
  req.post(
    {
      headers: {},
      url: path + "users",
      json: true,
      body: JSON.stringify()
    },
    (err, res, body) => {
      if (err) {
        log(err);
      } else if (res.statusCode === 422) {
        log("User already exist");
      } else {
        log(body);
      }
    }
  );
};

/*
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
  (err, res, body) => {
    if (err) {
      log(err);
    } else if (res.statusCode === 401) {
      log("User unregistered or Incorrect password");
    } else {
      log(body);
    }
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
  }
);
*/
