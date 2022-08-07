const usersData = require("../database/db.json");

module.exports = {
  index(req, res) {
    res.json(usersData);
  },
  findOne(req, res) {
    const { id } = req.params;
    const userById = usersData.find((user) => user.id == id);

    res.json(userById);
  },
  create(req, res) {
    const newUser = req.body;

    res.json({ newUser });
  },
  update(req, res) {
    const { id } = req.params;
    const { name } = req.body;

    const userById = usersData.find((user) => user.id == id);

    userById.name = name;

    res.json(userById);
  },
  destroy(req, res) {
    const { id } = req.params;
    const filteredUsers = usersData.filter((user) => user.id != id);

    res.json(filteredUsers);
  },
};
