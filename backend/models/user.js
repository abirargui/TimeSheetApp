const db = require('../util/database');

module.exports = class User {
  constructor(nom, prenom,email,motdepasse,role,numtlf) {
    this.nom = nom;
    this.prenom = prenom;
    this.email = email;
    this.motdepasse = motdepasse;
    this.role = role;
    this.numtlf = numtlf;
  }

  static find(email) {
    return db.execute('SELECT * FROM utilisateur WHERE email = ?', [email]);
  }

  static save(utilisateur) {
    return db.execute(
      'INSERT INTO utilisateur (nom ,prenom, email, motdepasse,role,numtlf) VALUES (?, ?, ?,?, ?, ?)',
      [utilisateur.nom, utilisateur.prenom, utilisateur.email, utilisateur.motdepasse,utilisateur.role,utilisateur.numtlf]
    );

  }
};