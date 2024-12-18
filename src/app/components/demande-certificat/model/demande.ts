/**
 * @description      :
 * @author           : ASUS
 * @group            :
 * @created          : 25/11/2024 - 12:53:48
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 25/11/2024
 * - Author          : ASUS
 * - Modification    :
 **/
export interface SoumissionDto {
  //Propriete demandeurMorale
  id: number;
  ifu: string;
  nomResponsable: string;
  denomination: string;
  siege: string;
  mail: string;
  telephone1: Number;
  telephone2: Number;
  // Propriete demandeurPhysique
  nom: string;
  prenom: string;
  genre: string;
  dateNaisse: Date;
  lieuResidence: string;
  typePiece: string;
  numPiece: string;
  mailP: string;
  telephoneP1: String;
  telephoneP2: String;
  // propiete de demane
  typeDemande: string;
  typeDemandeur: string;
  statut: string;
  prix: number;
  numeroDemande: number;
  codeDemande: string;
  dateDepot: string;
  dateValidation: Date;
  fichier: File;
}

export interface PieceJointeDto {
  libelle: string;
  url: string;
  fichier: File;
}
export interface DashboardStats {
  demandeEncours: number;
  demandeRejete: number;
  demandeValide: number;
  demandeAccepte: number;
  totalDemandes: number;
}
export interface Region {
  id: number;
  codeDgess: string;
  libelle: string;
}
export interface Province {
  id: number;
  codeDgess: string;
  libelle: string;
  regionId: number;
  regionLibelle: string;
}
export interface Commune {
  id: number;
  codeDgess: string;
  libelle: string;
  provinceId: number;
  provinceLibelle: string;
  regionId: number;
  regionLibelle: string;
}
