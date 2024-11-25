import request from "supertest"
import reporter from "../helper/reporter"


let payload = {
        email: "eve.holt@reqres.in",
        password: "pistol"
}

// what is Request

console.log(`The typeof request: ${typeof request}`); // function
console.log(`Number of args: ${request.length}`); // 1
console.log(`What is the defination of the function: ${request.toString()}`);


async function GET(testid:string, baseURL:string, endpoint:string, authToken:string, queryParam: object,){ // Self invoking fuctions
  
  if(!baseURL || !endpoint){  // truthy value check
    throw Error (`one of the given values base URL:${baseURL}, Given endpoint:${endpoint} is not valid.`)
  }
  
  baseURL = baseURL.trim()
  endpoint = endpoint.trim()
  reporter.addStep(testid, "Info", `Making a GET to ${endpoint}`)

    try {
        return await request(baseURL)
          .get(endpoint)
          .query(queryParam)
          .auth(authToken, {type: 'bearer'})
          .set("Content-Type", "application/json")
          .set("Accept", "application/json")
    } catch (err) {
        err.message `Error making a GET call to ${endpoint}, ${err}`   
        throw err
    }
}

async function POST(testid:string, baseURL:string, endpoint:string, authToken:string, payload: object,){ // Self invoking fuctions
  
    if(!baseURL || !endpoint){  // truthy value check
      throw Error (`one of the given values base URL:${baseURL}, Given endpoint:${endpoint} is not valid.`)
    }
    
    baseURL = baseURL.trim()
    endpoint = endpoint.trim()
    reporter.addStep(testid, "Info", `Making a GET to ${endpoint}`)
  
      try {
          return await request(baseURL)
            .post(endpoint)
            .auth(authToken, {type: 'bearer'})
            .set("Content-Type", "application/json")
            .set("Accept", "application/json")
            .send(payload)
      } catch (err) {
          err.message `Error making a post call to ${endpoint}, ${err}`   
          throw err
      }
  }
  
  
  export default { GET, POST }


