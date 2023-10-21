First , i create a service which return observable of many methods , each method return an observable which call a specific API ,
i used the HttpClient service to make API calls to fetch leads, potential duplicates, and mark leads as duplicates. When marking a lead as a duplicate, the corresponding duplicate_of field was updated using the PUT request to the server.

Interceptor for Handling Errors
To enhance the user experience, we implemented an HTTP interceptor that intercepted server responses with a 500 error status code. The interceptor checked for these errors and provided user-friendly error messages to sales staff, ensuring they are aware of any issues that may occur during lead management.

i designed and developed Angular components to manage leads. These components included:
A list of all received leads.
A list of potential duplicates associated with a lead.
A user interface for sales staff to interact with the leads, marking potential duplicates as actual duplicates.

The user interface was carefully designed to allow sales staff to:
View the list of leads from various sources.
See potential duplicates for each lead.
Mark potential duplicates as actual duplicates.
Receive error messages or notifications when issues arise.


The first component : table-list
this component used to fetch the list of all recevied leads
i fetched this list in table
there is a column which contain a button which used to route to the potential duplicate list of the selected lead

the second component : potential-duplicates
first , i received the lead_id from the params to can use it in Potential duplicates's API 
This Api return the lead's id of the potential duplicate , so i used these ids to can return the full object of the lead

there is a column which contain a button which used to mark this specific lead as actual duplicates.
The API of marked as actual duplicates take the lead_id as a body and take lead_id and duplicate_of as a params of this API 
to can set which lead i will duplicate with
