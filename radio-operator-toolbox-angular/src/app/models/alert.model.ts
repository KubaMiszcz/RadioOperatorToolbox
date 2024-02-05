export interface IAlert {
  name: string;
  code: string;
}

export class Team implements IAlert {
  name = '';
  code = '';
}