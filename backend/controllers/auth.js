const { validationResult } = require('express-validator');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/user');

exports.signup = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) return;

  const nom = req.body.nom;
  const prenom = req.body.prenom;
  const email = req.body.email;
  const motdepasse = req.body.motdepasse;
  const role = req.body.role;
  const numtlf = req.body.numtlf;

  try {
    const hashedmotdepasse = await bcrypt.hash(motdepasse, 12);

    const utilisateurDetails = {
      nom: nom,
      prenom:prenom,
      email: email,
      motdepasse: hashedmotdepasse,
      role:role,
      numtlf:numtlf,
    };

    const result = await User.save(utilisateurDetails);

    res.status(201).json({ message: 'Utilisateur registered!' });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.login = async (req, res, next) => {
  const email = req.body.email;
  const motdepasse = req.body.motdepasse;
  try {
    const user = await User.find(email);

    if (user[0].length !== 1) {
      const error = new Error('A user with this email could not be found.');
      error.statusCode = 401;
      throw error;
    }

    const storedUser = user[0][0];

    const isEqual = await bcrypt.compare(motdepasse, storedUser.motdepasse);

    if (!isEqual) {
      const error = new Error('Wrong motdepasse!');
      error.statusCode = 401;
      throw error;
    }

    const token = jwt.sign(
      {
        email: storedUser.email,
        userId: storedUser.id,
      },
      'secretfortoken',
      { expiresIn: '1h' }
    );
    res.status(200).json({ token: token, userId: storedUser.id });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};