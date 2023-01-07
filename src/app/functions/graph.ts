import { monthlyDatas } from "../mock-data/data";
import { IGraphCoordinate,IMonthData,IGraph,problemsOrWarnings,graphType} from "../mock-data/interfaces";





export function createMultipleLinesGraph(dataByMonthes:Array<IMonthData>,problemOrWarning:problemsOrWarnings):Array<IGraph>{
  let productGraphs:Array<IGraph> = [];

  dataByMonthes.forEach(monthlyData=>{
    const graphCoordinate = createNewCoordinate(monthlyData,problemOrWarning);
    const productName = monthlyData.product as string;
    const grahpIndex= getGraphIndex(productGraphs,productName);
    if(grahpIndex!=-1){
      const productGraph = productGraphs[grahpIndex]
      productGraph.series.push(graphCoordinate);
    } else{
      const newGraph = createEmptyGraph(productName);
      newGraph.series.push(graphCoordinate);
      productGraphs.push(newGraph);
    }
  })
  return productGraphs;
}


export function createTwoLinesGraph(dataByMonthes:Array<IMonthData>):Array<IGraph>{
  const warningsGraph = createEmptyGraph('warnings');
  const problemsGraph = createEmptyGraph('problems');

  const graphs:Array<IGraph> = [warningsGraph,problemsGraph];

  dataByMonthes.forEach((monthlyData:IMonthData)=>{
    const newWarningCoordinate = createNewCoordinate(monthlyData,'warnings');
    const newProblemsCoordinate = createNewCoordinate(monthlyData,'problems');
    warningsGraph.series.push(newWarningCoordinate);
    problemsGraph.series.push(newProblemsCoordinate);
  })

  return graphs
}




function createNewCoordinate(monthlyData:IMonthData,value:problemsOrWarnings):IGraphCoordinate{
  if(value=='problems'){
    return {
      name:monthlyData.month,
      value:monthlyData.problems,
    }
  } else {
    return {
      name:monthlyData.month,
      value:monthlyData.warnings
    }
  }
}

function createEmptyGraph
(componentName:string):IGraph{
   return {
    name:componentName,
    series:[],
   }
}


function getGraphIndex(productGraphs:Array<IGraph>,searchedItem:string){
  return productGraphs.findIndex(graph=>{
    return graph.name === searchedItem
  })
}


