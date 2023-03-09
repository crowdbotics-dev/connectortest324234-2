import axios from "axios"
const myuniqueConnector = axios.create({
  baseURL: "https://hello.com/api/",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function myuniqueconnector_get_users_read(payload) {
  return myuniqueConnector.get(`/users`)
}
export const apiService = { myuniqueconnector_get_users_read }
