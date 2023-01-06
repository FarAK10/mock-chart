export var productSales = [
  {
    "name": "book",
    "value": 50
  }, {
    "name": "graphic card",
    "value": 70
  }, {
    "name": "desk",
    "value": 10
  }, {
    "name": "laptop",
    "value":14
  }, {
    "name": "monitor",
    "value": 30
  }
];




export let bubbleData = [
  {
    name: 'book',
    series: [
      {
        name: 'January',
        x: 'January',
        y: 80.3,
        r: 80.4
      },
      {
        name: 'February',
        x: 'February',
        y: 80.3,
        r: 78
      },
      {
        name: 'March',
        x: 'March',
        y: 75.4,
        r: 79
      },
      {
        name: 'March',
        x: 'March',
        y: 75.4,
        r: 79
      }
    ]
  },
  {
    name: 'graphic card',
    series: [
      {
        name: 'January',
        x: 'January',
        y: 78.8,
        r: 144
      },
      {
        name: 'February',
        x: 'February',
        y: 76.9,
        r: 178
      },
      {
        name: 'March',
        x: 'March',
        y: 75.4,
        r: 155
      }
    ]
  },
  {
    name: 'desk',
    series: [
      {
        name: 'January',
        x: 'January',
        y: 81.4,
        r: 63
      },
      {
        name: 'February',
        x: 'February',
        y: 79.1,
        r: 59.4
      },
      {
        name: 'March',
        x: 'March',
        y: 77.2,
        r: 56.9
      }
    ]
  },
  {
    name: 'laptop',
    series: [
      {
        name: 'January',
        x: 'January',
        y: 80.2,
        r: 62.7
      },
      {
        name: 'February',
        x: 'February',
        y: 77.8,
        r: 58.9
      },
      {
        name: 'March',
        x: 'March',
        y: 75.7,
        r: 57.1
      }
    ]
  }
];




interface IMonthData {
  month:string,
  problems:number,
  warnings:number
}

type IAllData = Array<IMonthData>;

interface IProductProblems {
  name:string,
  value:number
}

 const  allData:IAllData = [
  {
    month:'Jan,2022',
    problems:10000,
    warnings:2000,
  },
  {
    month:'Feb,2022',
    problems:9000,
    warnings:5000,
  },
  {
    month:'March,2022',
    problems:11000,
    warnings:2600,
  },
  {
    month:'Apr,2022',
    problems:14000,
    warnings:1000,
  },
  {
    month:'May,2022',
    problems:6000,
    warnings:7000,
  },
  {
    month:'Jun,2022',
    problems:17000,
    warnings:4000,
  },
]

interface ProblemsByProduct {
  month:string,
  problems: number,
  warnings:number,
  product:string
}

interface IProductGraph {
  name:string,
  series:Array<IProductProblems>,
}

type IProblemsByProducts = Array<ProblemsByProduct>;

const problemsByProducts:IProblemsByProducts = [
  {
    month:'Jan,2022',
    problems:10000,
    warnings:2000,
    product:'one'
  },
  {
    month:'Feb,2022',
    problems:9000,
    warnings:5000,
    product:'one'

  },
  {
    month:'March,2022',
    problems:11000,
    warnings:2600,
    product:'one'

  },
  {
    month:'Apr,2022',
    problems:14000,
    warnings:1000,
    product:'one'

  },
  {
    month:'May,2022',
    problems:6000,
    warnings:7000,
    product:'one'

  },
  {
    month:'Jun,2022',
    problems:17000,
    warnings:4000,
    product:'One'
  },
  {
    month:'Jan,2022',
    problems:7000,
    warnings:3000,
    product:'Two'
  },
  {
    month:'Feb,2022',
    problems:6000,
    warnings:2000,
    product:'Two'

  },
  {
    month:'March,2022',
    problems:16000,
    warnings:5600,
    product:'Two'

  },
  {
    month:'Apr,2022',
    problems:12000,
    warnings:5000,
    product:'Two'

  },
  {
    month:'May,2022',
    problems:6500,
    warnings:3000,
    product:'Two'

  },
  {
    month:'Jun,2022',
    problems:14000,
    warnings:1000,
    product:'Two'
  },
]



export function convertFormat(arr:IAllData):Array<IProductProblems>{
   return arr.map(v=>{
    return {
      name:v.month,
      value:v.problems,
    }
   })
}





export function filterByProductName(productsProblems:IProblemsByProducts){
   let lineGraphData:Array<IProductGraph>;
   productsProblems.forEach(monthlyProblems=>{
     lineGraphData.forEach(product=>{
      let isProductAdded = false;
      if(product.name ===monthlyProblems.product){
        isProductAdded =true;
      }

     })
   })
}

export let allProblems = [
  {
    "name": "Problems",
    "series":[...convertFormat(allData)],
  },
]


