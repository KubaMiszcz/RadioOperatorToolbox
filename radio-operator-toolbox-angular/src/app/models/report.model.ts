export interface IReport {
  name: string;
  isFavourite?: boolean;
  isPeaceTime?: boolean;
  lines?: IReportLine[];
}

export class Report implements IReport {
  name = 'no-name';
}

export interface IReportLine {
  lineHeader: string;
  descriptionHeader: string;
  descriptionLines: string[];
  lineValues: IReportLineValue[];
}

export interface IReportLineValue {
  label: string;
  value?: any;
  valueType: valueTypesEnum;
}

export enum valueTypesEnum {
  number,
  text,
  bool,
}
