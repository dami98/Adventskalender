import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Adventskalender';
  arrayOfDates = new Array(false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false);
  isLoggedIn = true;

  public scratchOpenToday()
  {
    
  }
  
  public presentsForToday()
  {
    let dayOfDec = new Date().getDay();

    for(let i = 0;i <= dayOfDec; i++)
    {
      this.arrayOfDates[i] = true;
    }
    return true;
  }

  checkBox = false;

  public loadAllPresentsTillToday()
  {
    return true;
  }

  public openNextPresent()
  {
    this.checkBox = true;
  }

}
