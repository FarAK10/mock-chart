import { Component ,OnInit} from '@angular/core';
import { colorSets } from '@swimlane/ngx-charts';
import { productSales,allProblems } from 'data';
import { convertFormat } from 'data';
import { createMultipleLinesGraph,createTwoLinesGraph} from 'src/app/functions/graph';
import { monthlyDatas,barChartData } from 'src/app/mock-data/data';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit{
  barChartData:any[]=[]
  lineChartData:any[]=[];

  view:[number,number] = [900,600];
  schemeType:string = 'ordinal';
  animations= true;
  xAxis = true;
  yAxis = true;
  showGridLines = true;
  showXAxisLabel = true;
  showYaxixLabel =true;
  legendPosition = 'below';
  showataLabel = true;
  legend = true;
  roundEdges = true;
  legendTitle = 'Products';

  legendTitleMulti = "Month";




  ngOnInit():void{
    this.barChartData = createMultipleLinesGraph(monthlyDatas,'warnings');
    this.lineChartData= createTwoLinesGraph(monthlyDatas);
    console.log(this.lineChartData)
  }

}
