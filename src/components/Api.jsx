import axios from 'axios'

export const fetchUserData = async () => {
  try {
    const response = await axios.get('https://my-json-server.typicode.com/brasilcursinhos/fake-rest-api/db')
    return response.data.programs[3]
  } catch (error) {
    console.error(error)
  }
}

