import { Component } from '@angular/core';
import { BrowserDomAdapter } from '@angular/platform-browser/src/browser/browser_adapter';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Adventskalender';
  arrayOfDates = new Array(false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false);
  day24h = true;
  day23h = true;
  day22h = true;
  day21h = true;
  day20h = true;
  day19h = true;
  day18h = true;
  day17h = true;
  day16h = true;
  day15h = true;
  day14h = true;
  day13h = true;
  day12h = true;
  day11h = true;
  day10h = true;
  day9h = true;
  day8h = true;
  day7h = true;
  day6h = true;
  day5h = true;
  day4h = true;
  day3h = true;
  day2h = true;
  day1h = true;
  
  public scratchOpenToday(dayToScratch:string)
  {

    let numberOfToday = new Date().getDate();
    let month = new Date().getMonth();

    if(month == 11)
    {
    if(+dayToScratch == numberOfToday)
    {
    switch(+dayToScratch)
    {
      case 1:
        this.day1h = false;
      break;
	  case 1:
        this.day1h = false;
      break;
	  case 2:
        this.day2h = false;
      break;
	  case 3:
        this.day3h = false;
      break;
	  case 4:
        this.day4h = false;
      break;
	  case 5:
        this.day5h = false;
      break;
	  case 6:
        this.day6h = false;
      break;
	  case 7:
        this.day7h = false;
      break;
	  case 8:
        this.day8h = false;
      break;
	  case 9:
        this.day9h = false;
      break;
	  case 10:
        this.day10h = false;
      break;
	  case 11:
        this.day11h = false;
      break;
	  case 12:
        this.day12h = false;
      break;
	  case 13:
        this.day13h = false;
      break;
	  case 14:
        this.day14h = false;
      break;
	  case 15:
        this.day15h = false;
      break;
	  case 16:
        this.day16h = false;
      break;
	  case 17:
        this.day17h = false;
      break;
	  case 18:
        this.day18h = false;
      break;
	  case 19:
        this.day19h = false;
      break;
	  case 20:
        this.day20h = false;
      break;
	  case 21:
        this.day21h = false;
      break;
	  	  case 22:
        this.day22h = false;
      break;
	  	  case 23:
        this.day23h = false;
      break;
	  	  case 24:
        this.day24h = false;
      break;
     }
    }
  }
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

  public loadAllPresentsTillToday(): boolean
  {
    let todayMinus1 = new Date().getDate();
    let month = new Date().getMonth();

    if(month == 11 || new Date().getFullYear() != 2018)
    {
      if(new Date().getFullYear() != 2018)
      {
        todayMinus1 = 25;
      }
    switch(todayMinus1)
    {	
		case 1:
    break;      

    case 2:
      this.day1h = false;
    break;      

    case 3:
      this.day2h = false;
      this.day1h = false;
    break;      

    case 4:
      this.day3h = false;
      this.day2h = false;
      this.day1h = false;
    break;      

    case 5:
      this.day4h = false;
      this.day3h = false;
      this.day2h = false;
      this.day1h = false;
    break;      

    case 6:
      this.day5h = false;
      this.day4h = false;
      this.day3h = false;
      this.day2h = false;
      this.day1h = false;
    break;      

    case 7:
      this.day6h = false;
      this.day5h = false;
      this.day4h = false;
      this.day3h = false;
      this.day2h = false;
      this.day1h = false;
    break;      

    case 8:
      this.day7h = false;
      this.day6h = false;
      this.day5h = false;
      this.day4h = false;
      this.day3h = false;
      this.day2h = false;
      this.day1h = false;
    break;      

    case 9:
      this.day8h = false;
      this.day7h = false;
      this.day6h = false;
      this.day5h = false;
      this.day4h = false;
      this.day3h = false;
      this.day2h = false;
      this.day1h = false;
    break;      

    case 10:
      this.day9h = false;
      this.day8h = false;
      this.day7h = false;
      this.day6h = false;
      this.day5h = false;
      this.day4h = false;
      this.day3h = false;
      this.day2h = false;
      this.day1h = false;
    break;      

    case 11:
      this.day10h = false;
      this.day9h = false;
      this.day8h = false;
      this.day7h = false;
      this.day6h = false;
      this.day5h = false;
      this.day4h = false;
      this.day3h = false;
      this.day2h = false;
      this.day1h = false;
    break;      

    case 12:
      this.day11h = false;
      this.day10h = false;
      this.day9h = false;
      this.day8h = false;
      this.day7h = false;
      this.day6h = false;
      this.day5h = false;
      this.day4h = false;
      this.day3h = false;
      this.day2h = false;
      this.day1h = false;
    break;      
      case 13:
          this.day12h = false;
          this.day11h = false;
          this.day10h = false;
          this.day9h = false;
          this.day8h = false;
          this.day7h = false;
          this.day6h = false;
          this.day5h = false;
          this.day4h = false;
          this.day3h = false;
          this.day2h = false;
          this.day1h = false;
        break;      
  
  
        case 14:
          this.day13h = false;
          this.day12h = false;
          this.day11h = false;
          this.day10h = false;
          this.day9h = false;
          this.day8h = false;
          this.day7h = false;
          this.day6h = false;
          this.day5h = false;
          this.day4h = false;
          this.day3h = false;
          this.day2h = false;
          this.day1h = false;
        break;
  
        case 15:
          this.day14h = false;
          this.day13h = false;
          this.day12h = false;
          this.day11h = false;
          this.day10h = false;
          this.day9h = false;
          this.day8h = false;
          this.day7h = false;
          this.day6h = false;
          this.day5h = false;
          this.day4h = false;
          this.day3h = false;
          this.day2h = false;
          this.day1h = false;
        break;
  
        case 16:
          this.day15h = false;
          this.day14h = false;
          this.day13h = false;
          this.day12h = false;
          this.day11h = false;
          this.day10h = false;
          this.day9h = false;
          this.day8h = false;
          this.day7h = false;
          this.day6h = false;
          this.day5h = false;
          this.day4h = false;
          this.day3h = false;
          this.day2h = false;
          this.day1h = false;
        break;
      
      case 17:
          this.day16h = false;
          this.day15h = false;
          this.day14h = false;
          this.day13h = false;
          this.day12h = false;
          this.day11h = false;
          this.day10h = false;
          this.day9h = false;
          this.day8h = false;
          this.day7h = false;
          this.day6h = false;
          this.day5h = false;
          this.day4h = false;
          this.day3h = false;
          this.day2h = false;
          this.day1h = false;
        break;      
  
  
        case 18:
          this.day17h = false;
          this.day16h = false;
          this.day15h = false;
          this.day14h = false;
          this.day13h = false;
          this.day12h = false;
          this.day11h = false;
          this.day10h = false;
          this.day9h = false;
          this.day8h = false;
          this.day7h = false;
          this.day6h = false;
          this.day5h = false;
          this.day4h = false;
          this.day3h = false;
          this.day2h = false;
          this.day1h = false;
        break;
  
        case 19:
          this.day18h = false;
          this.day17h = false;
          this.day16h = false;
          this.day15h = false;
          this.day14h = false;
          this.day13h = false;
          this.day12h = false;
          this.day11h = false;
          this.day10h = false;
          this.day9h = false;
          this.day8h = false;
          this.day7h = false;
          this.day6h = false;
          this.day5h = false;
          this.day4h = false;
          this.day3h = false;
          this.day2h = false;
          this.day1h = false;
        break;
  
        case 20:
          this.day19h = false;
          this.day18h = false;
          this.day17h = false;
          this.day16h = false;
          this.day15h = false;
          this.day14h = false;
          this.day13h = false;
          this.day12h = false;
          this.day11h = false;
          this.day10h = false;
          this.day9h = false;
          this.day8h = false;
          this.day7h = false;
          this.day6h = false;
          this.day5h = false;
          this.day4h = false;
          this.day3h = false;
          this.day2h = false;
          this.day1h = false;
        break;
      case 21:
        this.day20h = false;
        this.day19h = false;
        this.day18h = false;
        this.day17h = false;
        this.day16h = false;
        this.day15h = false;
        this.day14h = false;
        this.day13h = false;
        this.day12h = false;
        this.day11h = false;
        this.day10h = false;
        this.day9h = false;
        this.day8h = false;
        this.day7h = false;
        this.day6h = false;
        this.day5h = false;
        this.day4h = false;
        this.day3h = false;
        this.day2h = false;
        this.day1h = false;
      break;      


      case 22:
        this.day21h = false;
        this.day20h = false;
        this.day19h = false;
        this.day18h = false;
        this.day17h = false;
        this.day16h = false;
        this.day15h = false;
        this.day14h = false;
        this.day13h = false;
        this.day12h = false;
        this.day11h = false;
        this.day10h = false;
        this.day9h = false;
        this.day8h = false;
        this.day7h = false;
        this.day6h = false;
        this.day5h = false;
        this.day4h = false;
        this.day3h = false;
        this.day2h = false;
        this.day1h = false;
      break;

      case 23:
        this.day22h = false;
        this.day21h = false;
        this.day20h = false;
        this.day19h = false;
        this.day18h = false;
        this.day17h = false;
        this.day16h = false;
        this.day15h = false;
        this.day14h = false;
        this.day13h = false;
        this.day12h = false;
        this.day11h = false;
        this.day10h = false;
        this.day9h = false;
        this.day8h = false;
        this.day7h = false;
        this.day6h = false;
        this.day5h = false;
        this.day4h = false;
        this.day3h = false;
        this.day2h = false;
        this.day1h = false;
      break;

      case 24:
        this.day23h = false;
        this.day22h = false;
        this.day21h = false;
        this.day20h = false;
        this.day19h = false;
        this.day18h = false;
        this.day17h = false;
        this.day16h = false;
        this.day15h = false;
        this.day14h = false;
        this.day13h = false;
        this.day12h = false;
        this.day11h = false;
        this.day10h = false;
        this.day9h = false;
        this.day8h = false;
        this.day7h = false;
        this.day6h = false;
        this.day5h = false;
        this.day4h = false;
        this.day3h = false;
        this.day2h = false;
        this.day1h = false;
      break;

      case 25:
      this.day24h = false;
      this.day23h = false;
      this.day22h = false;
      this.day21h = false;
      this.day20h = false;
      this.day19h = false;
      this.day18h = false;
      this.day17h = false;
      this.day16h = false;
      this.day15h = false;
      this.day14h = false;
      this.day13h = false;
      this.day12h = false;
      this.day11h = false;
      this.day10h = false;
      this.day9h = false;
      this.day8h = false;
      this.day7h = false;
      this.day6h = false;
      this.day5h = false;
      this.day4h = false;
      this.day3h = false;
      this.day2h = false;
      this.day1h = false;
    break;
    }
  }


  return true;
  }

  public openNextPresent()
  {
    this.checkBox = true;
  }

}
