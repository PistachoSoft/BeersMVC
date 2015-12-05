import HttpService from '../http-service';
import Config from '../../config';

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
