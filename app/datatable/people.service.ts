import { Injectable } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Person } from './person';

@Injectable()
export class PeopleService{
  private baseUrl: string = 'http://swapi.co/api';
  // private baseUrl: string = 'http://rahul-pc:2020/RestServicesWeb/rest/UserService/persons1';

  constructor(private http : Http){
  }

  getAll(): Observable<Person[]>{
    let people$ = this.http
      .get(`${this.baseUrl}/people`, {headers: this.getHeaders()})
      .map(mapPersons)
      .catch(handleError);
      return people$;
    // return this.http
    //   .get(this.baseUrl)
    //   .map(mapPersons)
    //   .catch(handleError);
    //   // return people$;
  }

  get(id: number): Observable<Person> {
    let person$ = this.http
      .get(`${this.baseUrl}/people/${id}`, {headers: this.getHeaders()})
      .map(mapPerson);
      console.log("person$:"+person$);
      return person$;
  }

  save(person: Person) : Observable<Response>{
    // this won't actually work because the StarWars API doesn't
    // is read-only. But it would look like this:
    return this.http
      .put(`${this.baseUrl}/people/${person.id}`, JSON.stringify(person), {headers: this.getHeaders()});
  }

  private getHeaders(){
    let headers = new Headers();
    // var headers = {
		// 		'Access-Control-Allow-Origin' : '*',
		// 		'Access-Control-Allow-Methods' : 'POST, GET, OPTIONS, PUT',
		// 		'Content-Type': 'application/json',
		// 		'Accept': 'application/json'
		// 	};
    headers.append('Accept', 'application/json');
          // headers.append('Access-Control-Allow-Origin','http://localhost:3000/');
				// headers.append('Access-Control-Allow-Methods','POST, GET, OPTIONS, PUT');

    return headers;
  }
}

function mapPersons(response:Response): Person[]{
   // uncomment to simulate error:
   // throw new Error('ups! Force choke!');

   // The response of the API has a results
   // property with the actual results
   return response.json().results.map(toPerson)
}

function toPerson(r:any): Person{
  let person = <Person>({
    id: extractId(r),
    url: r.url,
    name: r.name,
    weight: r.mass,
    height: r.height,
  });
  console.log('Parsed person:', person);
  return person;
}

// to avoid breaking the rest of our app
// I extract the id from the person url
function extractId(personData:any){
  let extractedId = personData.url.replace('http://swapi.co/api/people/','').replace('/','');
  return parseInt(extractedId);
}

function mapPerson(response:Response): Person{
  // toPerson looks just like in the previous example
  return toPerson(response.json());
}

// this could also be a private method of the component class
function handleError (error: any) {
  // log error
  // could be something more sofisticated
  let errorMsg = error.message || `Yikes! There was was a problem with our hyperdrive device and we couldn't retrieve your data!`
  console.error(errorMsg);

  // throw an application level error
  return Observable.throw(errorMsg);
}
