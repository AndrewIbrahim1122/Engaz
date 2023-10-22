import { Component, OnInit } from '@angular/core';
import { Lead } from 'app/lead-model';
import { LeadService } from 'app/services/lead.service';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
  dataSource: MatTableDataSource<Lead>;
  displayedColumns: string[] = ['lead_id', 'source', 'first_name', 'last_name', 'email', 'cell_phone', 'home_phone', 'duplicate_of' , 'view_PotentialDuplicate'];

  constructor(private service : LeadService) { }

  ngOnInit() {
    this.service.getLeads().subscribe((data : any) =>{
      this.dataSource = new MatTableDataSource(data);
    })
  }

}
