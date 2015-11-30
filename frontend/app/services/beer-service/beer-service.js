import HttpService from '../http-service/http-service.js';
import Config from '../../config.js';

export default class BeerService {

  static getAllBeers() {
    let defer = Promise.defer();

    HttpService.send(Config.api.path + Config.api.collections.beers.all, {
      method: 'GET'
    }).then((data) => {
      return data.json();
    }).then((data) => {
      defer.resolve(data)
    });

    return defer.promise;
  }
}
