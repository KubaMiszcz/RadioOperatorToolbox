export interface ITeam {
  name: string;
  codename: string;
  isFavourite?: boolean;
}

export class Team implements ITeam {
  name = '';
  codename = '';
}