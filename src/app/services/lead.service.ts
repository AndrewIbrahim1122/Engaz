import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Lead } from 'app/lead-model';
import { map, of, switchMap, tap } from 'rxjs';



@Injectable({
  providedIn: 'root',
})
export class LeadService {
  private apiUrl = 'http://localhost:3000/api/leads';
  leadsList : Lead[]
  constructor(private http: HttpClient) {}

  getLeads(){
    return this.http.get<Lead[]>(this.apiUrl).pipe(
      tap((leads) => {
        this.leadsList = leads;
      })
    );  }

  getPotentialDuplicates(leadId: string){
    return this.http.get(`${this.apiUrl}/${leadId}/potential-duplicates`).pipe(
      switchMap((potentialDuplicateIds : any) => {
        if(this.leadsList){          
          return of(this.leadsList.filter(lead => potentialDuplicateIds.includes(lead.lead_id)))
        }
        return this.getLeads().pipe(
          map((allLeads : any) => {
            return allLeads.filter(lead => potentialDuplicateIds.includes(lead.lead_id));
          })
        );
      })
    );
  }

  markDuplicate(leadId: string, duplicateId: string){
    return this.http.put(`${this.apiUrl}/${leadId}`, { lead_id: leadId , duplicate_of: duplicateId });
  }
}
