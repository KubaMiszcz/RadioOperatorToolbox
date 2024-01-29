export interface IReport {
  name: string;
  isFavourite?: boolean;
  isInPeaceTime?: boolean;
  lines?: IReportLine[];
  savedReports?: IReport;
}

export class Report implements IReport {
  name = 'no-name';
}

export interface IReportLine {
  lineHeader: string;
  descriptionHeader: string;
  descriptionLines?: string[];
  lineValues: IReportLineValue[];
  isInPeacetime?: boolean;
}

export interface IReportLineValue {
  label?: string;
  description?: string;
  value?: any;
  valueType?: VALUE_TYPES_ENUM;
}

export enum VALUE_TYPES_ENUM {
  unused = 0, //it is for bool operationss, dont use, remove or change this
  shortNumber,
  longNumber,
  textLine,
  textArea,
  bool,
}
