import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AgGridAngular } from 'ag-grid-angular';
import { FormControl, FormGroup } from '@angular/forms';

interface Product{
    make: string;
    model: string;
    price: number;
}
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('agGrid')
  agGrid!: AgGridAngular;

    columnDefs = [
        { field: 'make', sortable: true, filter: true, checkboxSelection: true  },
        { field: 'model', sortable: true, filter: true },
        { field: 'price', sortable: true, filter: true }
    ];

    rowData: Product[] = [] ;

    constructor(private http: HttpClient) {
    }
    // tslint:disable-next-line: typedef
    ngOnInit() {
      this.http.get<Product[]>('https://www.ag-grid.com/example-assets/small-row-data.json').subscribe(res => {
        this.rowData = res;
      });
  }
  // tslint:disable-next-line: typedef
  getSelectedRows() {
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map(node => node.data );
    const selectedDataStringPresentation = selectedData.map(node => `${node.make} ${node.model}`).join(', ');

    alert(`Selected nodes: ${selectedDataStringPresentation}`);
}
// tslint:disable-next-line: typedef
Add(){ const insert = [{
  make: 'abcd',
  model: 'efgh',
  price: '1234'
}];
       this.rowData.push({
          make: 'abcd',
          model: 'efgh',
          price: 1234
        });
       this.agGrid.api.setRowData(this.rowData);

   }
}
// tslint:disable-next-line: typedef
