import {Injectable} from '@angular/core';
import {BaseService} from './base.service';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class BaseServiceImpl<T> implements BaseService<T> {

  constructor(private url: string, private http: Http) {
  }

  create(entity: T): Promise<T> {
    return this.http.post(this.url, JSON.stringify(entity))
      .toPromise()
      .then(res => res.json() as T)
      .catch(this.handleError);
  }

  read(): Promise<T[]> {
    return this.http.get(this.url)
      .toPromise()
      .then(res => res.json() as T[])
      .catch(this.handleError);
  }

  update(id: number, entity: T): Promise<T> {
    const url = `${this.url}/${id}`;
    return this.http.put(url, JSON.stringify(entity))
      .toPromise()
      .then(res => res.json() as T)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.url}/${id}`;
    return this.http.delete(url)
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  findOne(id: number): Promise<T> {
    const url = `${this.url}/${id}`;
    return this.http.get(url).toPromise()
      .then(res => res.json() as T)
      .catch(this.handleError);
  }

  private  handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
