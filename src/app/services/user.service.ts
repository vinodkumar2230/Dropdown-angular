import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';



@Injectable()
export class UserService {
    constructor(private http: Http) { }    

    // getAll() {
    //     return this.http.get('http://localhost:56625/api/Organisations/GetAllOrg', this.jwt()).map((response: Response) => response.json());
    // }

    getById(id: number) {
        return this.http.get('http://localhost:57977/api/Dropdown/GetCities/' + id, this.jwt()).map((response: Response) => response.json());
    }


    // private helper methods

    private jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }
}
 