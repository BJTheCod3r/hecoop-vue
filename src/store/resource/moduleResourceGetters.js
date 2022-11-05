export default {
    hasChildren: (state) => (id) => {
        return state.resources.findIndex(resource => resource.parent_resource_id === id) >= 0
    },
    getChildren: (state) => (id) => {
        return state.resources.filter(resource => resource.parent_resource_id === id)
    },
    getTreeNode: (state, getters) => (id) => {
        let nodes = []
        getters.getChildren(id).forEach(child => {
            let node = {
                id: child.id,
                text: '',
                nodes: [],
                state: {
                    expanded: true
                }
            }
            node.text = child.completed_at !== null ? `✔ ${child.title}, completed at ${child.completed_at}` : child.title
            node.nodes = state.searchParam ? [] : getters.getTreeNode(child.id)
            if (node.nodes.length) {
                node.state.selected = true
            }
            nodes.push(node)
        })
        return nodes

    },
    treeNodes: (state, getters)  => {
        let nodes = []
        
        const children = state.searchParam ? state.resources : getters.getChildren(null)
        children.forEach(child => {
            let node = {
                id: child.id,
                text: '',
                state: {
                    expanded: true
                },
                nodes: [],
            }
            node.text = child.completed_at !== null ? `✔ ${child.title}, completed at ${child.completed_at}` : child.title
            node.nodes = state.searchParam ? [] : getters.getTreeNode(child.id)
            if (node.nodes.length) {
                node.state.selected = true
            }
            nodes.push(node)
        })

        return nodes
    }
}