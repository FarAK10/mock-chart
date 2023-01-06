interface IMonthData {
  month:string;
  warnings:number;
  problems:number;
  product?:string;
}

interface IProductGraph {
  name:string;
  series:Array<IGraphCoordinate>;
}

interface IGraphCoordinate {
  name:string;
  value:number;
}

type problemsOrWarnings = 'problems'|'warnings'

export {IMonthData,IProductGraph,IGraphCoordinate,problemsOrWarnings}

