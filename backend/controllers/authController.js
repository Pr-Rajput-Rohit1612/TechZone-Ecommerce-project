const User = require('../models/User');
const jwt = require('jsonwebtoken');


// Generate JWT Token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });
};

// =================== SIGNUP ===================
const signup = async (req, res) => {
  try {
    const { name, email, password, contact } = req.body;
    const firstName = name?.firstname;
    const lastName = name?.lastname;


    // Check if user exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create user
    const savedUser = await User.create({
      username: email,          
      email,
      password,                 
      name: { firstname: firstName, lastname: lastName },
      phone: contact,
    });
    const token = generateToken(savedUser._id);
  res.status(201).json({ 
  token,
  message: "User created successfully",
  user: {
    id: savedUser._id,
    firstName: savedUser.name.firstname,
    lastName: savedUser.name.lastname,
    email: savedUser.email,
    phone: savedUser.phone
  }
});


  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ message: error.message });
  }
};

// =================== LOGIN ===================
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
       console.log("USER FROM DB:", user);          
    console.log("USER NAME:", user.name); 
    

    if (!user) return res.status(400).json({ message: "User not found" });

    const isMatch = await user.matchPassword(password);
    if (!isMatch) return res.status(400).json({ message: "Invalid password" });

    const token = generateToken(user._id);

    res.status(200).json({ 
  token, 
  message: "User logged in successfully",
  user: {
  id: user._id,
  firstName: user.name?.firstname || user.username || "User",
  lastName: user.name?.lastname || "",
  email: user.email,
  phone: user.phone
}
});

  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: error.message });
  }
};

// =================== GET ALL USERS ===================
const profileUser = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ users, message: "Users fetched successfully" });
  } catch (error) {
    console.error("Profile fetch error:", error);
    res.status(500).json({ message: error.message });
  }
};

// =================== DELETE USER ===================
const deleteUser = async (req, res) => {
  try {
    const { id } = req.body;
    const user = await User.findByIdAndDelete(id);
    res.status(200).json({ user, message: "User deleted successfully" });
  } catch (error) {
    console.error("Delete user error:", error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = { signup, login, profileUser, deleteUser };






// const User = require('../models/userModels')
// const jwt = require("jsonwebtoken")

/*

Generate JWT Token


const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d'
  });
};


const signup = async (req, res) => {
  try {
    const { email, firstName, password, name, phone, address } = req.body;

    // Check if user exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create user
    const user = await User.create({
      email,
      firstName,
      password,
      name,
      phone,
      address
    });

    if (user) {
      res.status(201).json({
        _id: user._id,
        email: user.email,
        firstName: user.firstName,
        token: generateToken(user._id)
      });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Login user
// @route   POST /api/auth/login
// @access  Public
const login = async (req, res) => {
  try {
    const { firstName, password } = req.body;

    // Find user by username
    const user = await User.findOne({ firstName });

    // Check user and password
    if (user && (await user.matchPassword(password))) {
      res.json({
        token: generateToken(user._id)
      });
    } else {
      res.status(401).json({ message: 'Invalid username or password' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { signup, login };


*/


// ////////////////////////////////////////////////////////////////////


