import axios from "@/axios"

export default {
    fetchResources(meta) {
        return axios.get("/resources", {
            params: meta,
        })
    },
    fetchAdminResources(meta) {
        return axios.get("/admin/resources", {
            params: meta,
        })
    },
}