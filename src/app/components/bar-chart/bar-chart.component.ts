import { Component ,OnInit} from '@angular/core';
import { colorSets } from '@swimlane/ngx-charts';
import { productSales,allProblems } from 'data';
import { convertFormat } from 'data';
import { createGraphs } from 'src/app/functions/graph';
import { monthlyDatas } from 'src/app/mock-data/data';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit{
  productSales:any[]=[];
  productsSalesMulti:any[]=[];
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
    this.productSales = productSales;
    this.productsSalesMulti= createGraphs(monthlyDatas,'problems');
    console.log(this.productsSalesMulti)
  }

  onActivate(){
    console.log('hurraah')
  }


}
