export default {
    online: navigator.onLine,
    appActiveUser: JSON.parse(localStorage.getItem("userInfo")) || null
}