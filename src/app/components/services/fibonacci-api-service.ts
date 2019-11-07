import axios from "axios";
import {API_URL, CLOSEST_SERVICE_BASE_URL, REQUEST_NUMBER_PARAM} from './fibonacci-api-constants'

function getClosestFibonacciNumber(requestNumber) {

  return axios({
    method: 'get',
    url: API_URL + CLOSEST_SERVICE_BASE_URL + REQUEST_NUMBER_PARAM + requestNumber,
    responseType: 'json'
  })
    .then(function (response) {
      return response.data.result;
    })
    .catch(function (error) {
       return error;
    });
}

export default getClosestFibonacciNumber;
