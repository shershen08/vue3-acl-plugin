const initialUseVue3ACL = (store) => () => {
  const userRole = store.getters.currentUserRole
  const userAuth = store.getters.hasAuth

  const checkPermForUser = (event) => {
    const permissions = store.getters.getAclForAction(event)
    const applicablePerms = permissions.filter(perm => perm.userRole.code === userRole)
    return applicablePerms.length > 0
  }

  return function (action) {
    if (!userAuth) {
      return false
    }
    return checkPermForUser(action)
  }
}

export default initialUseVue3ACL
