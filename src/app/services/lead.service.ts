import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Lead } from 'app/lead-model';



@Injectable({
  providedIn: 'root',
})
export class LeadService {
  private apiUrl = 'http://localhost:3000/api/leads'; // Replace with the actual API URL

  constructor(private http: HttpClient) {}

  getLeads(){
    return this.http.get<Lead>(this.apiUrl);
  }

  getPotentialDuplicates(leadId: string){
    return this.http.get(`${this.apiUrl}/${leadId}/potential-duplicates`);
  }

  markDuplicate(leadId: string, duplicateId: string){
    return this.http.put(`${this.apiUrl}/${leadId}`, { lead_id: leadId , duplicate_of: duplicateId });
  }
}
