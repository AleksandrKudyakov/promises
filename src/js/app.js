import json from './parser';
import read from './reader';

export default class GameSavingLoader {
  static load() {
    // eslint-disable-next-line no-unused-vars
    return new Promise((resolve, reject) => {
      const data = read();
      data.then((response) => {
        const value = json(response);
        return value;
      }).then((response) => {
        resolve(JSON.parse(response));
      });
    });
  }
}
