const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
app.use(express.json());

const PORT = 3000;
const jwtPassword = "12345678";

const ALL_USERS = [
  { username: "harkirat@gmail.com", password: "123", name: "Harkirat Singh" },
  { username: "raman@gmail.com", password: "123321", name: "Raman Singh" },
  { username: "priya@gmail.com", password: "123321", name: "Priya Kumari" }
];

function checkUserExists(username, password) {
  return ALL_USERS.some(u => u.username === username && u.password === password);
}

// POST /signin – issue JWT with only username encoded
app.post('/signin', (req, res) => {
  const { username, password } = req.body;

  if (checkUserExists(username, password)) {
    const token = jwt.sign({ username }, jwtPassword);
    return res.json({ token });
  } else {
    return res.status(403).json({ msg: "Invalid username or password" });
  }
});

// GET /user – protected route
app.get('/user', (req, res) => {
  let token = req.headers['authorization'];
  if (!token || !token.startsWith("Bearer ")) {
    return res.status(401).json({ msg: "Missing or invalid Authorization header" });
  }

  token = token.split(" ")[1];

  try {
    const decoded = jwt.verify(token, jwtPassword);
    const user = ALL_USERS.find(u => u.username === decoded.username);

    if (user) {
      return res.json({ ALL_USERS });
    } else {
      return res.status(403).json({ msg: "User not found" });
    }
  } catch (err) {
    return res.status(403).json({ msg: "Invalid token" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
