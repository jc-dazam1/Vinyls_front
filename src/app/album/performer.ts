export class Performer {
  id: number;
  name: string;
  image: string;
  description: string;
  birthDate: Date;

  constructor(id: number,
    name: string,
    image: string,
    description: string,
    birthDate: Date
  ){
    this.id= id;
    this.name= name;
    this.image= image;
    this.description= description;
    this.birthDate= birthDate;
  }
}
