import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from './student';
import { HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/internal/operators';



@Injectable({
  providedIn: 'root'
})


export class ApiService {
  apiURL: string = 'http://localhost:8080/student';
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      // 'Authorization': 'my-auth-token'
    })
  };

  constructor( private httpClient:HttpClient) {}

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      // this.log(`${operation} failed: ${error.message}`);
  
      return of(result as T);
    };
  }

  public createStudent(student: Student) {
    return this.httpClient.post<Student>(`${this.apiURL}/add/`, student)
   
  }

 
  public updateStudent(student: Student){
    // return this.httpClient.put(`${this.apiURL}/${id}/`);
  }



  public deleteStudent(id: number): Observable<{}> {
    return this.httpClient.delete<Student>(`${this.apiURL}/${id}/`)
    .pipe(
      catchError(this.handleError())
    );
    // .pipe(
    //   tap( data => console.log(data))
    //   //   data => {},
    //   //   error => this.logError(filename, error)
    //   // )
    // );
  }

  public getStudentById(id: number){
    return this.httpClient.get<{}>(`${this.apiURL}/${id}/`);
  }

  public getAllStudent(url?: string){
    return this.httpClient.get<Student[]>(`${this.apiURL}/all/`);
  }
  public getAllStudentById(id: number){
    return this.httpClient.get<Student[]>(`${this.apiURL}/all/${id}/`);
  }


  public getAllStudentByText(txt: string){
    return this.httpClient.get<Student[]>(`${this.apiURL}/search/${txt}/`);
  }

  public getContacts(){
    return this.httpClient.get<Student[]>(`${this.apiURL}/all/`);
  }

}
