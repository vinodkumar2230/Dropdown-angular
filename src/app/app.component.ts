import { Component } from '@angular/core';

import { UserService } from "./services/user.service";
import { StateService } from "./services/state.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  states: State[];
    cities:City[];
     loading = false;

    constructor(
          private _stateService: StateService, 
        
        private userService: UserService,
        ) {
            this._stateService.getStates().subscribe(state => {
      console.log(state);
      this.states = state;
    });
        }  
 
 ngOnInit() {
    
    
      
 }

 fetchCities(stateid:any) {  
            console.log(stateid);

      this.loading = true;
      //  this._countryService.getStates(countryid).subscribe((state) => {
        this.userService.getById(stateid).subscribe((city) => {
      console.log(city);
      this.cities = city;
      console.log(this.cities);
    });
} 
}
interface State {
  id: number,
  name: string,
  sortname:string
}
interface City {
  id: number,
  name: string,
  stateid:number
}

