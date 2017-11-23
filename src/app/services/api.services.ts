import { Injectable } from '@angular/core'
import {Http,Response} from '@angular/http'
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map'

@Injectable()
export class ApiService {
    apiUrl ="https://5a163ea600caf30012274d83.mockapi.io/api/test"
    constructor (private _http :Http){

    }
    getApi(): Observable<any[]>{
        return this._http.get(this.apiUrl).map((response:Response)=>response.json())
    }
}
