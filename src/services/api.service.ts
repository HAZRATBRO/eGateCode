import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Title } from 'src/models/title';
import { Subject } from 'src/models/subject';
import { Post } from 'src/models/post';

const apiUrl = 'http://localhost:3000/api/'

const headerDict = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Access-Control-Allow-Headers': 'Content-Type',
}

const requestOptions = {                                                                                                                                                                                 
  headers: new Headers(headerDict), 
};

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  

  private log(message:String){
    console.log(message);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead
      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }


  constructor(private http:HttpClient) { }

  public getTitles():Observable<Title[]>{
    return this.http.get<Title[]>(apiUrl+'title').pipe(
      tap(_ => this.log('fetched Titles')),
        catchError(this.handleError('getTitles', []))
      
    )
  }

  public getSubjects():Observable<Subject[]>{
    return this.http.get<Subject[]>(apiUrl+'subject').pipe(
      tap(res => this.log('fetched Subjects')),
      catchError(this.handleError('getSubjects', []))
    
    )
  }

  public getPosts():Observable<Post[]>{
    return this.http.get<Post[]>(apiUrl + 'post').pipe(
      tap(_ => this.log('fetched Posts')),
      catchError(this.handleError('getPosts', []))
    
    )
  }

  public addPost(post:Post):Observable<Post>{
    return this.http.post<Post>(apiUrl+'post' , post).pipe(
      tap(_ => console.log(`added post`)),
      catchError(this.handleError<any>('addPost'))
    );
  }

  public updatePost(id:any , post:Post):Observable<Post>{
    const url=apiUrl+'post'
    return this.http.put(`${url}/${id}` , post).pipe(
      tap(_ => console.log(`updated post id=${id}`)),
      catchError(this.handleError<any>('updatePost'))
    );
  }

}
