export default class HttpService {

  static send(url, options) {
    let defer = Promise.defer();

    fetch(url, options).then((data) => {
      if (!/^[4|5]/.test(data.status)) {
        defer.resolve(data);
      } else {
        defer.reject(data);
      }
    });

    return defer.promise;
  }
}
