import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  word: string;
  title = 'dictionaryUI';
  submitCliked = false;
  apiURL = 'https://api.dictionaryapi.dev/api/v2/entries/en/';
  meaningBody: any;
  errorMessage: string;
  hasError = false;

  constructor(private http: HttpClient){
  }

  searchMeaning(){
    this.hasError = false;
    const Url: string = this.apiURL + this.word;
    this.http.get(Url).subscribe(data => {
      console.log(this.word);
      if (data){
        this.submitCliked = true;
        this.meaningBody = data;
        console.log(this.meaningBody);
      }

    }, (error => {
      console.log(error);
      this.handleError();
    }));
  }
  exaplePresent(example: any){
    if (example){
      return true;
    }
    else {
      return false;
    }
  }

  handleError(){
    this.hasError = true;
    this.errorMessage = 'Something went Wrong';
  }
}
