export class person {
  //Atributos da classe person

  firstName1: string;
  middleName2: string;
  lastName3: string;
  agex: number;

  constructor(
    firstName: string,
    middleName: string,
    lastName: string,
    age: number
  ) {
    this.firstName1 = firstName;
    this.middleName1 = middleName;
    this.middleName2 = middleName;
    this.lastName3 = lastName;
    this.agex = age;
  }

  //Métodos da classe person

  getFullName() {
    return this.firstName1 + ' ' + this.middleName2 + ' ' + this.lastName3;
  }
  getBirthdayYear() {
    return this.agex + ' anos';
  }
}
