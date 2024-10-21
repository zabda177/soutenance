/**
 * @description      :
 * @author           : ASUS
 * @group            :
 * @created          : 12/10/2024 - 13:35:48
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 12/10/2024
 * - Author          : ASUS
 * - Modification    :
 **/
export class Demande {
  id: number;
  categorie: string;
  nom: string;
  prenom: string;
  mail: string;
  dateNaissance: Date;
  genre: string;
  telephone: number;
  lieuResidence: string;
  typePiece: string;
  numPiece: string;

  constructor(
    id: number = 0,
    categorie: string = '',
    nom: string = '',
    prenom: string = '',
    mail: string = '',
    dateNaissance: Date,
    genre: string = '',
    telephone: number = 0,
    lieuResidence: string = '',
    typePiece: string = '',
    numPiece: string = ''
  ) {
    this.id = id;
    this.categorie = categorie;
    this.nom = nom;
    this.prenom = prenom;
    this.mail = mail;
    this.dateNaissance = dateNaissance;
    this.dateNaissance = new Date();
    this.genre = genre;
    this.telephone = telephone;
    this.lieuResidence = lieuResidence;
    this.typePiece = typePiece;
    this.numPiece = numPiece;
  }
}
