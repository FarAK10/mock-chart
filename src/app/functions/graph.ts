import { IGraphCoordinate,IMonthData,IProductGraph,problemsOrWarnings,graphType} from "../mock-data/interfaces";





export function createMultipleLinesGraph(dataByMonthes:Array<IMonthData>,problemOrWarning:problemsOrWarnings):Array<IProductGraph>{
  let productGraphs:Array<IProductGraph> = [];

  dataByMonthes.forEach(monthlyData=>{
    const graphCoordinate = createNewCoordinate(monthlyData,problemOrWarning);
    let isFound = false
    productGraphs.forEach(product=>{
      if(product.name===monthlyData.product){
        isFound=true
        product.series.push(graphCoordinate);
      }
    })
    if(!isFound){
      const productGraphInfo:IProductGraph= {
        name:monthlyData.product as string,
        series:[graphCoordinate]
      }
      productGraphs.push(productGraphInfo);
    }
  })
  return productGraphs;
}


export function createTwoLinesGraph(dataByMonthes:Array<IMonthData>):Array<IProductGraph>{
  let produc
    return []
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
