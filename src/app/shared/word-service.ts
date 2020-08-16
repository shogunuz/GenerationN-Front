import { Injectable } from '@angular/core';
import {ModelWord} from './model-word';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class WordService {
  formData: ModelWord;
  readonly rootURL = 'https://localhost:44339/api/Endings';

  constructor(private http: HttpClient) { }

  // For adding in DB
  postWord(){
    console.log('This is postRequest of Word:');
    console.log(this.formData);
    return this.http.post(this.rootURL, this.formData);
  }
  /*
    putWorkerDetail(){
      return this.http.put(this.rootURL+'/WorkerDetail/'+this.formData.PMId, this.formData)
    }

    refreshList(){
      this.http.get(this.rootURL + '/WorkerDetail')
        .toPromise()
        .then(res => this.list = res as WorkerDetail[]);
    }
    getData(): Observable<any>{
      return this.http.get<any>(this.rootURL + '/WorkerDetail');
    }
  */
}

