export class Premio {
  id: number;
  organization: string;
  name: string;
  description: string;
  premiationDate: Date;
  performerPrizes: any[];

  constructor(
    id?: number,
    organization?: string,
    name?: string,
    description?: string,
    premiationDate?: Date,
    performerPrizes?: any[]
  ) {
    this.id = id;
    this.organization = organization;
    this.name = name;
    this.description = description;
    this.premiationDate = premiationDate;
    this.performerPrizes = performerPrizes;
  }
}
