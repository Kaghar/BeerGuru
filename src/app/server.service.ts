import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()

export class ServerService {

    constructor(private http: Http){}
      
    getBeers(pageNum,perPage){
        return this.http.get(`https://api.punkapi.com/v2/beers?page=`+pageNum+`&per_page=`+perPage)      
            .map(
                (response: Response) => {
                    const data = response.json();
                    return data;
                }
            )
            .catch(
                (error: Response) => {
                    return Observable.throw('Something went wrong'); }
            );
    }

    getRandom(){
        return this.http.get(`https://api.punkapi.com/v2/beers/random`)      
            .map(
                (response: Response) => {
                    const data = response.json();
                    return data;
                }
            )
            .catch(
                (error: Response) => {
                    return Observable.throw('Something went wrong'); }
            );
    }

    getLessIbu(AbvNum){
        return this.http.get(`https://api.punkapi.com/v2/beers?page=1&per_page=1&ibu_lt=`+AbvNum)      
            .map(
                (response: Response) => {
                    const data = response.json();
                    return data;
                }
            )
            .catch(
                (error: Response) => {
                    return Observable.throw('Something went wrong'); }
            );
    }
   
    getMoreIbu(AbvNum){
        return this.http.get(`https://api.punkapi.com/v2/beers?page=1&per_page=1&ibu_gt=`+AbvNum) 
            .map(
                (response: Response) => {
                    const data = response.json();
                    return data;
                }
            )
            .catch(
                (error: Response) => {
                    return Observable.throw('Something went wrong'); }
            );

    }
    
}