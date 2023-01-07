interface IMonthData {
  month:string;
  warnings:number;
  problems:number;
  product?:string;
}

interface IGraph {
  name:string;
  series:Array<IGraphCoordinate>;
}

interface IGraphCoordinate {
  name:string;
  value:number;
}

type problemsOrWarnings = 'problems'|'warnings'
type graphType = 'multi-line'|'two-line'|'vertical-bar'

export {IMonthData,IGraph,IGraphCoordinate,problemsOrWarnings,graphType}

