import axios from "@/axios"

export default {
    signin(payload) {
        return axios.post("/login", payload)
    },
    fetchUsers() {
        return axios.get("/admin/users")
    },
}