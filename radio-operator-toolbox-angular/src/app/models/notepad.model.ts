export interface INotepad {
  pages: string[];
}

export class Notepad implements INotepad {
  pages = [];
}
