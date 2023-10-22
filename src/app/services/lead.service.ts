import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Lead } from 'app/lead-model';
import { map, switchMap } from 'rxjs';



@Injectable({
  providedIn: 'root',
})
export class LeadService {
  private apiUrl = 'http://localhost:3000/api/leads';
  constructor(private http: HttpClient) {}

  getLeads(){
    return this.http.get<Lead>(this.apiUrl);
  }

  getPotentialDuplicates(leadId: string){
    return this.http.get(`${this.apiUrl}/${leadId}/potential-duplicates`).pipe(
      switchMap((potentialDuplicateIds : any) => {
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
