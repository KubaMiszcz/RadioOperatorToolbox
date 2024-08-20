export interface IAlert {
  code: string;
  name: string;
}

export class Team implements IAlert {
  code = '';
  name = '';
}