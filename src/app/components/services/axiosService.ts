import axios from "axios";
import {HttpResponse} from "@angular/common/http";

function getClosest(requestNumber) {

  return axios.get('http://127.0.0.1:5000/fibonacci/closer?number=' + requestNumber,
    {
      timeout: 1000,
    })
    .then(function (response) {
      debugger;
      // handle success
      console.log('You ARE LOGGED ' + response.data.result + ' with TOKEN : ');
      return response.data.result
    });
}

export default getClosest;



