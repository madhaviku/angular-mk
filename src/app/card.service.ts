import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class CardService {
  private readonly url : string;
  constructor(private readonly http:HttpClient) { this.url = '';}

  paymentDetails(body:any){
   return this.http.post(this.url,body);
  }

}