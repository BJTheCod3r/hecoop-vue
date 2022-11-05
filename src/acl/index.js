import Vue from "vue"
import { AclInstaller, AclCreate, AclRule } from "vue-acl"
import router from "@/router"
import store from '@/store'

Vue.use(AclInstaller)

const initialRole = store.state.appActiveUser?.role ?? 'public'

export default new AclCreate({
  initial: initialRole,
  notfound: "/login",
  router,
  acceptLocalRules: true,
  globalRules: {
    admin: new AclRule("admin").generate(),
    student: new AclRule("student").or("admin").generate(),
    public: new AclRule("public").or('student').or("admin").generate(),
  }
})