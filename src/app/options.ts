import {HttpHeaders} from "@angular/common/http";
import {environment} from "../environments/environment";

export const value = {
    httpOptions : {
        headers: new HttpHeaders({
            'Content-Type':  'application/json'
        })
    }
};
