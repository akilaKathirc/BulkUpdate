import { 
  Component, 
  OnInit,
  ViewChild,
  Renderer,
  ElementRef
} from '@angular/core';
import { sampleCustomers } from './customers';
import { GridComponent } from '@progress/kendo-angular-grid';

@Component({
  selector: 'app-row-editing',
  templateUrl: './row-editing.component.html',
  styleUrls: ['./row-editing.component.css']
})
export class RowEditingComponent implements OnInit {

  private gridData: any[] = sampleCustomers;
    private hiddenColumns: string[] = [];
private columns: string[] = [];

      constructor(private renderer: Renderer) {}
    private restoreColumns(): void {
        this.hiddenColumns.length = 0;
    }

    private hideColumn(field: string): void {
      this.hiddenColumns.push(field);
    }
    
    public ngOnInit(){
      for(let field in sampleCustomers[0]){
        this.columns.push(field);
      }
    }
    
    public getColumnTitle(field){
      switch(field){
        case 'Id': return 'Id';
        case 'CompanyName': return 'Company Name';
        case 'ContactName': return 'Contact Name';
        case 'ContactTitle': return 'Contact Title';
        case 'Slider': return 'Slider';
        case 'City': return 'City';
        default: return 'No title';
      }
    }
    
    @ViewChild(GridComponent) grid: GridComponent;
    @ViewChild('grid', { read: ElementRef }) gridRef: ElementRef<any>;
  
    ngAfterViewInit() {
      this.renderer.listen(this.gridRef.nativeElement, "mousedown", (event) => {
        if (!event.target.matches('tbody>tr *')) {
          return;
        }
        
        const gridData = this.grid.data;
        const tr = event.target.closest('tr');
        const dataItem = this.grid.data[tr.rowIndex + (this.grid.skip/this.grid.pageSize)];
        
        console.log(tr.rowIndex);
        console.log(dataItem);
      });
    }

}
