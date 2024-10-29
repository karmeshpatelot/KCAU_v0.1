import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Table, TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { DialogModule } from 'primeng/dialog';
import { TooltipModule } from 'primeng/tooltip';
import { MenuModule } from 'primeng/menu';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'lib-table',
  standalone: true,
  imports: [CommonModule,TableModule,ToastModule,DialogModule,TooltipModule,MenuModule,InputTextModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})

export class TableComponent implements OnInit{
 
  @Input() allowRowSelect = false;
  @Input() allowPagination = true;
  @Input() data!: any[];
  @Input() totalRecords!: number;
  @Input() columns: any;

  selectAll: boolean = false;
  selectedItem!: any;

  @Output() filterChanged = new EventEmitter<any>();

  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  loadCustomers(event : any){

  }
  onSelectionChange(value = []) { 
  }

  onSelectAllChange(event: any) {
  }

  onGlobalFilter(table: Table, event: Event) {
  } 

}
