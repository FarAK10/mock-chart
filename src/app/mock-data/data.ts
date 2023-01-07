import { IGraphCoordinate,IMonthData,problemsOrWarnings } from "./interfaces";

export const monthlyDatas:Array<IMonthData> = [
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
    product:'one'
  },
  // {
  //   month:'Jan,2022',
  //   problems:7000,
  //   warnings:3000,
  //   product:'Two'
  // },
  // {
  //   month:'Feb,2022',
  //   problems:6000,
  //   warnings:2000,
  //   product:'Two'

  // },
  // {
  //   month:'March,2022',
  //   problems:16000,
  //   warnings:5600,
  //   product:'Two'

  // },
  // {
  //   month:'Apr,2022',
  //   problems:12000,
  //   warnings:5000,
  //   product:'Two'

  // },
  // {
  //   month:'May,2022',
  //   problems:6500,
  //   warnings:3000,
  //   product:'Two'

  // },
  // {
  //   month:'Jun,2022',
  //   problems:14000,
  //   warnings:1000,
  //   product:'Two'
  // },
]


export const barChartData = [
  {
    "name": "Germany",
    "series": [
      {
        "name": "2010",
        "value": 40632,
        "extra": {
          "code": "de"
        }
      },
      {
        "name": "2000",
        "value": 36953,
        "extra": {
          "code": "de"
        }
      },
      {
        "name": "1990",
        "value": 31476,
        "extra": {
          "code": "de"
        }
      }
    ]
  },
  {
    "name": "United States",
    "series": [
      {
        "name": "2010",
        "value": 0,
        "extra": {
          "code": "us"
        }
      },
      {
        "name": "2000",
        "value": 45986,
        "extra": {
          "code": "us"
        }
      },
      {
        "name": "1990",
        "value": 37060,
        "extra": {
          "code": "us"
        }
      }
    ]
  },
  {
    "name": "France",
    "series": [
      {
        "name": "2010",
        "value": 36745,
        "extra": {
          "code": "fr"
        }
      },
      {
        "name": "2000",
        "value": 34774,
        "extra": {
          "code": "fr"
        }
      },
      {
        "name": "1990",
        "value": 29476,
        "extra": {
          "code": "fr"
        }
      }
    ]
  },
  {
    "name": "United Kingdom",
    "series": [
      {
        "name": "2010",
        "value": 36240,
        "extra": {
          "code": "uk"
        }
      },
      {
        "name": "2000",
        "value": 32543,
      },
      {
        "name": "1990",
        "value": 26424,
        "extra": {
          "code": "dd"
        }
      }
    ]
  }
]
