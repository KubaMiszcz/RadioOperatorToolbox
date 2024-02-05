export interface INotepad {
  pages: INotepadPage[];
}

export interface INotepadPage {
  pageContent: string;
}


export class Notepad implements INotepad {
  pages = [new NotepadPage()];
}

export class NotepadPage implements INotepadPage {
  pageContent = '';
}


