import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Lead } from 'app/lead-model';
import { LeadService } from 'app/services/lead.service';
import { MatTableDataSource } from '@angular/material/table';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-potential-duplicates',
  templateUrl: './potential-duplicates.component.html',
  styleUrls: ['./potential-duplicates.component.scss']
})
export class PotentialDuplicatesComponent implements OnInit {
  potentialDuplicateIds: Lead[];
  lead_id
  leads : Lead
  dataSource: MatTableDataSource<Lead>[];
  displayedColumns: string[] = ['lead_id', 'source', 'first_name', 'last_name', 'email', 'cell_phone', 'home_phone', 'duplicate_of' , 'actual_duplicates'];

  constructor(private service: LeadService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getParams()
    this.getPotentialDuplicates()    
  }

  getPotentialDuplicates() {
    this.service.getPotentialDuplicates(this.lead_id).subscribe((res: any) => {
      this.dataSource = res      
      console.log(res);
      
    })   
  }

  getParams() {
    this.activatedRoute.params.subscribe(params => this.lead_id = params.id)
  }


  markAsDuplicate(id){
    this.service.markDuplicate(this.lead_id , id).subscribe(res => {
      console.log(res);
    })
  }

  confirmBox(lead_id){
    Swal.fire({
      title: 'Are you sure want to mark this to Actual duplicates ?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes, do it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        this.markAsDuplicate(lead_id)
        Swal.fire(
          'Done!',
          'Your lead has been marked as Actual duplicate.',
          'success'
        )
        this.getPotentialDuplicates()

      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
        )
      }
    })
  }
}
