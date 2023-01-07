import { monthlyDatas } from "../mock-data/data";
import { IGraphCoordinate,IMonthData,IGraph,problemsOrWarnings,graphType} from "../mock-data/interfaces";





export function createMultipleLinesGraph(dataByMonthes:Array<IMonthData>,problemOrWarning:problemsOrWarnings):Array<IGraph>{
  let productGraphs:Array<IGraph> = [];

  dataByMonthes.forEach(monthlyData=>{
    const graphCoordinate = createNewCoordinate(monthlyData,problemOrWarning);
    const productName = monthlyData.product as string;
    const grahpIndex= getGraphIndex(productGraphs,productName);
    if(grahpIndex!=-1){
      productGraphs[grahpIndex].series.push(graphCoordinate);
    } else{
      const newGraphComponet = createGraphComponent(productName);
      newGraphComponet.series.push(graphCoordinate);
      productGraphs.push(newGraphComponet);
    }
  })
  return productGraphs;
}


export function createTwoLinesGraph(dataByMonthes:Array<IMonthData>):Array<IGraph>{
  const graph:Array<IGraph> = [createGraphComponent('warnings'),createGraphComponent('problems')];
  dataByMonthes.forEach((monthlyData:IMonthData)=>{
    const newWarningCoordinate = createNewCoordinate(monthlyData,'warnings');
    const newProblemsCoordinate = createNewCoordinate(monthlyData,'problems');
    graph[0].series.push(newWarningCoordinate);
    graph[1].series.push(newProblemsCoordinate);
  })
  return graph

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

function createGraphComponent(componentName:string):IGraph{
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


