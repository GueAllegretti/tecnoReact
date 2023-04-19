import axios from 'axios'

const apiUrl = process.env.NEXT_PUBLIC_API_URL

export const request = axios.create({
  baseURL: apiUrl,
  headers: {
    Accept: 'application/json'
  }
})

export async function getApi(endPoint) {
  try {
    const response = await request.get(endPoint);
    //console.log(response, 'test')
    return response.data
  } catch (e) {
    console.log(e)
  }
}
