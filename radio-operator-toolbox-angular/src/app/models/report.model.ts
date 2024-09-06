export interface IReport {
  type: string;
  name?: string;
  isFavourite?: boolean;
  lines?: IReportLine[];
  // savedReports?: IReport; //km depr
}

export class Report implements IReport {
  type = 'no-type';
}

export interface IReportLine {
  lineHeader: string;
  descriptionHeader: string;
  descriptionLines?: string[];
  lineValues: IReportLineValue[];
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
  MGRS1m,
  MGRS1km,
  DTG,
}
