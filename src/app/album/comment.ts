export class Comments {
  id?: number;
  description: string;
  rating: number;
  collector?: {id?: number}

  constructor(id?: number,
    description?: string,
    rating?: number,
    collector?: {id?: number}
  ){
    this.id= id;
    this.description= description;
    this.rating = rating;
    this.collector = collector;
  }


}
