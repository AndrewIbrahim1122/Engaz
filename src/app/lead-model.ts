export interface Lead {
    // a GUID that uniquely identifies each lead object
    lead_id: string;
    // If the lead is a duplicate of another lead, this field
    // indicates the GUID of the lead that was duplicated.
    // If the lead is not a duplicate, or it has not been marked
    // as such, this field will be returned as `null`
    duplicate_of: string | null;
    // the source through which the lead was submitted
    // (could be an application, a website, or an in-person activity)
    source: string;
    // the first name of the prospective customer
    first_name: string;
    // the last name of the prospective customer
    last_name: string;
    // the e-mail address of the prospective customer
    email: string;
    // the cell phone number of the prospective customer
    cell_phone: string;
    // the home phone number of the prospective customer
    home_phone: string;
   }
   