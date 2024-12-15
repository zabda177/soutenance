/**
    * @description      :
    * @author           : ASUS
    * @group            :
    * @created          : 13/12/2024 - 02:53:09
    *
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 13/12/2024
    * - Author          : ASUS
    * - Modification    :
**/
export interface SoumissionDto {
  id: number;
  ifu: string;
  nomResponsable: string;
  denomination: string;
  siege: string;
  mail: string;
  telephone1: number;
  telephone2: number;
  nom: string;
  prenom: string;
  genre: string;
  dateNaisse: Date;
  lieuResidence: string;
  typePiece: string;
  numPiece: string;
  telephoneP1: number;
  telephoneP2: number;
  mailP: string;
  categorie: string;
  typeDemande: string;
  statut: string;
  prix: number;
  numeroDemande: number;
  codeDemande: string;
  dateDepot: Date;
  dateValidation: Date;
  fichier: File;
  libelle: string;
  url: string;
  pieceJointes: PieceJointeDto[];
}

interface PieceJointeDto {
  id: number;
  libelle: string;
  url: string;
}



