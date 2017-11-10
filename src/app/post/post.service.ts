import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import "rxjs/add/operator/retry";
import {Post} from "./post";

@Injectable()
export class PostService {

  constructor(private http:HttpClient) { }



  getAllPosts(): Observable<Post[]>{

    return this.http.get<Post[]>('api/posts').retry(3);

  };

 /* getOneBookHttp(id:number): Observable<Livre>{

    return this.http.get<Livre>(`api/livres/${id}`).retry(3);
    //this.http.put('api/livres/' + livre.id, livre).subscribe();

  };*/



}
