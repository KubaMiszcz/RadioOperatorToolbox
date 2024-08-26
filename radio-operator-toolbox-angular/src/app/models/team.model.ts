export interface ITeam {
  name: string;
  codename: string;
  isFavourite?: boolean;
  authCode?: number;
  correspondentNo?: string;
}

export class Team implements ITeam {
  name = '';
  codename = '';
}