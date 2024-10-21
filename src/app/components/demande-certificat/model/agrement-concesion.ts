/**
 * @description      :
 * @author           : ASUS
 * @group            :
 * @created          : 12/10/2024 - 16:06:05
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 12/10/2024
 * - Author          : ASUS
 * - Modification    :
 **/
export class AgrementConcesion {
  id: number;
  date: Date;

  constructor(id: number = 0, date: Date = new Date()) {
    this.id = id;
    this.date = date;
  }
}
