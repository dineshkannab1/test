import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class AssetService {

  url = 'http://localhost:3020/assetDetails'; /*Provide the URL of the web service to consume*/
  authenticate = false;
  constructor(private httpClient: HttpClient) { }

  /*
    Consumes the web service exposed at the POST URL -> http://localhost:3020/assetDetails
    After sending the request, the response must be an Observable
    Return the response back to the AddAssetComponent
  */

  addAsset(data: any) {
    // Code here
    return this.httpClient.post<any>(`${this.url}`, data);
  }




  /*
   Consumes the web service exposed at the GET URL -> http://localhost:3020/assetDetails/:assetId
   After sending the request, the response must be an Observable
   Return the response back to the ViewAssetComponent
  */

  getAssetDetails(assetId: any) {
    // Code here
    return this.httpClient.get<any>(`${this.url}/${assetId}`);
  }

  /*
 Consumes the web service exposed at the PATCH URL -> http://localhost:3020/assetDetails/:assetId
 After sending the request, the response must be an Observable
 Return the response back to the UpdateAssetComponent
*/

  updateAsset(assetId: any, data: any) {
    // Code here
    return this.httpClient.post<any>(`${this.url}/${assetId}`,data);
  }


  
  addBook(book: any): Observable<any> {
    const options = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.post('http://localhost:3020/addBook', book, { headers: options }).pipe(
      catchError(this.handleError));
  }

  private handleError(err: HttpErrorResponse) {
    let errMsg = '';
    if (err.error instanceof Error) {
      // A client-side or network error occurred. Handle it accordingly.
      console.log('An error occurred:', err.error.message);
      errMsg = err.error.message;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.log(`Backend returned code ${err.status}`);
      errMsg = err.error.status;
    }
    return throwError(errMsg);
  }


}
function catchError(handleError: (err: any) => any): import("rxjs").OperatorFunction<Object, any> {
  throw new Error('Function not implemented.');
}

