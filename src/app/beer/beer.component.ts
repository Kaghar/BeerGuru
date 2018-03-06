import { Component, OnInit, Output } from '@angular/core';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.css']
})
export class BeerComponent implements OnInit {
  beers = [];
  currentBeer = [];
  randomBeer = [];
  moreIbuBeer = [];
  lessIbuBeer = [];
  page = 1;  
  finished = false;  
  firstLoad = 20;
  scrollLoad = 20;
  clicked = false;
  

  
  constructor(private serverService: ServerService) {}
  
  ngOnInit(){
    //Fetch first 20 beers
    this.serverService.getBeers(this.page, this.firstLoad)
      .subscribe(
        (beers: any[]) => {this.beers = beers}
      )
  }


  onScroll(){
    //Fetch another 20 beers per page, with each call get next page of beers
    this.page++;
    this.serverService.getBeers(this.page, this.scrollLoad)
      .subscribe(
       (beers: any[]) => {
          beers.forEach(e => {
            this.beers.push(e);
          });
        }
      )
      //End of database check - hardcored. Not ideal, could be changed?
      if (this.beers.length >= 229) {
        this.finished = true;
      }
  }
  
  
 
 
  
  checkId(event){
    this.clicked = true;
    //Get the beer ID
    let selectedBeerIdNum = event.target.id
    //Set fechted beer Id to currentBeer from beer array
    this.currentBeer=this.beers[selectedBeerIdNum - 1];
    //Find Ibu property from fetched beer
    let Ibu = Object.entries(this.currentBeer)[7];
    //Get Ibu number 
    let IbuNum = parseInt(Ibu[1])
        
    //Fetching a random beer
    this.serverService.getRandom()
      .subscribe(
        (beers: any[]) => {this.randomBeer = beers}
      )
     

    //Fetching beer with more Ibu
    this.serverService.getMoreIbu(IbuNum+10)
      .subscribe(
        (beers: any[]) => {this.moreIbuBeer = beers}
      )
     
    //Fetching beer with less Ibu
    this.serverService.getLessIbu(IbuNum-10)
      .subscribe(
        (beers: any[]) => {this.lessIbuBeer = beers}
      )
  }

  //Hide the current beer box on click
  disableView(){
     this.clicked = false;
  }
  //Hide the end of database message on click
  dismiss(){
    document.getElementById('spin').style.display= 'none';
  }
  
}

