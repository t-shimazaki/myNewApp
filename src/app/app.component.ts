import { Component } from '@angular/core';
   
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    
  chartData = {
      type: 'BarChart',
      data: [
      ["PHP Books",  500],
      [".Net Books",  800],
      ["Java Books",  400],
   ],
   chartColumns: ['Books', 'Sell'],
   width: 1000,
   height: 400
  };
     
}