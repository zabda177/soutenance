/**
 * @description      :
 * @author           : ASUS
 * @group            :
 * @created          : 12/10/2024 - 16:06:45
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 12/10/2024
 * - Author          : ASUS
 * - Modification    :
 **/
export class Categorie {
  id: number;
  libelle: string;
  niveauValidition: string;

  constructor(
    id: number = 0,
    libelle: string = '',
    niveauuValidation: string = ''
  ) {
    this.id = id;
    this.libelle = libelle;
    this.niveauValidition = niveauuValidation;
  }
}
