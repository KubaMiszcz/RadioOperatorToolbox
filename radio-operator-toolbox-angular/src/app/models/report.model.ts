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
  isInPeacetime?: boolean;
}

export interface IReportLineValue {
  label: string;
  value?: any;
  valueType?: VALUE_TYPES_ENUM;
  valueSize?: VALUE_SIZES_ENUM;
}

export enum VALUE_TYPES_ENUM {
  unused = 0,
  number,
  text,
  bool,
}

export enum VALUE_SIZES_ENUM {
  short,
  medium,
  long,
}
