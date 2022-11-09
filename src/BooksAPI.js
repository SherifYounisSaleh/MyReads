import axios from "axios"
const api = "https://reactnd-books-api.udacity.com"



// Generate a unique token for storing your bookshelf data on the backend server.
let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)
console.log(`token ${token}`)

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

export const get = async (bookId) => {
  const { data } = axios.get(`${api}/books/${bookId}`, { headers })
  console.log(data)
  return data;
}


export const getAll = async () => {
  const { data } = await axios.get(`${api}/books`, { headers })
  console.log(`getAll- ${data.books}`)
  return data;
}
// console.log("getAll"+ getAll.)
//.then(res => res.books)

export const update = async (book, shelf) => {
  const { data } = axios.put(`${api}/books/${book.id}`, { shelf }, {
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    }
  })
  console.log(`update ${book.id} - ${shelf}`)
  return data;
}

export const search = async (query) => {
  // let data;

  const { data } =await axios.post(`${api}/search`, { query },
    {
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      }
    })//.then(res => data = res.data.books).catch(err => console.log(`Error ${err}`))
  console.log(`search ${data.books}`)
  return data
}
