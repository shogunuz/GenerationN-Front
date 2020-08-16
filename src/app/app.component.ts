import {HttpClient, HttpParams} from '@angular/common/http';
import {WordService} from './shared/word-service';
import {ToastrModule, ToastrService} from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import {ModelWord} from '../../src/app/shared/model-word';
import {ChangeDetectorRef } from '@angular/core';
import {AfterContentChecked, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit{

  constructor(public service: WordService,
              private toastr: ToastrService) {

  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.resetForm();
  }

  // tslint:disable-next-line:typedef
  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
    this.service.formData = {
      word: ''
    };
  }

  // tslint:disable-next-line:typedef
  onSubmit(form: NgForm) {
  if ( this.service.formData.word.length >= 1 )
  {
    this.insertRecord(form);
  }
  else{
    this.toastr.error('Что-то пошло не так......', 'Произошла ошибка!');
  }

  }

  // tslint:disable-next-line:typedef
  insertRecord(form: NgForm){
    this.service.postWord().subscribe(
      res => {
       // this.resetForm(form);
        this.toastr.success('Запрос сделан успешно', 'Данные получены');
        console.log('словарь', res);
       // this.service.refreshList();
      },
      err => {
        console.log(err);
      }
    );
  }
    // this.http.post(this.myurl, word).subscribe();
    // return this.http.post(this.myurl, word).subscribe();
    // return console.log(typeof this.str);
  }

