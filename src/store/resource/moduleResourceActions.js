import resource from "@/http/requests/resource"

export default {
    fetchResources({ commit }, meta) {
        return new Promise((resolve, reject) => {
            resource.fetchResources(meta)
                .then(response => {
                    commit("SET_RESOURCES", response.data.data)
                    commit("SET_SEARCH", meta?.q)
                    resolve(response)
                })
                .catch(error => {
                    reject(error)
                })
        })
    },
    fetchAdminResources({ commit }, meta) {
        return new Promise((resolve, reject) => {
            resource.fetchAdminResources(meta)
                .then(response => {
                    commit("SET_RESOURCES", response.data.data)
                    commit("SET_SEARCH", meta?.q)
                    resolve(response)
                })
                .catch(error => {
                    reject(error)
                })
        })
    },
}