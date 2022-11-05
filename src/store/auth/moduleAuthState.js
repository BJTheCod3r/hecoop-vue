export default {
    accessToken: localStorage.getItem("accessToken") || null,
    timestamp: localStorage.getItem('timestamp') || null,
    rememberMe: !!localStorage.getItem('rememberMe'),
    users: []
}