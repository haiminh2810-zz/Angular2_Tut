import { Injectable } from '@angular/core'

@Injectable()
export class EmployeeService {
    getList(): Array<any> {
        let arr: Array<any> = [
            {
                Id: 1, Name: 'Minh 1'
            },
            {
                Id: 2, Name: 'Minh 2'
            },
            {
                Id: 3, Name: 'Minh 3'
            },
            {
                Id: 4, Name: 'Minh 4'
            }
        ]
        return arr;
    }
}