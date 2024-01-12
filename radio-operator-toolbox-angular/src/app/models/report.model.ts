export interface IReport {
  name: string;
  isFavourite?: boolean;
  isPeaceTime?: boolean;
  elements?: [];
}

export class Report implements IReport {
  name = 'no-name';
}
