export interface INotepad {
  pages: INotepadPage[];
}

export interface INotepadPage {
  // pageNo: number;
  pageContent: string;
}


export class Notepad implements INotepad {
  pages = [new NotepadPage()];
}

export class NotepadPage implements INotepadPage {
  // pageNo = 1;
  pageContent = '';
}


