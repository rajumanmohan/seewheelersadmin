import * as _ from "lodash";
import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: "dataFilter"
})

export class DataFilterPipe implements PipeTransform {

    transform(array: any[], query: string): any {
        let res=[];
        if (query) {
            for(var i=0;i<array.length;i++){
                var keys=Object.keys(array[i]);
                for(var j=0;j<keys.length;j++){
                    if(array[i][keys[j]].toString().toLowerCase().indexOf(query.toLowerCase())!=-1){
                        res.push(array[i]);
                        break;
                    }
                }
            }
            return res;
           // return _.filter(array, row=>row.name.indexOf(query) > -1);
        }
        return array;
    }
}