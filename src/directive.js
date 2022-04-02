const directiveFactory = (store) => (el, binding) => {
  /**
     *
     * ## rules
     * Show element if the rule this present
     * v-acl.allow="'messenger'"
     *
     * Hide element
     * v-acl.deny="'messenger'"
     *
     *
     * ## roles
     * v-acl.role="'messenger'"
     * v-acl.notRole="'messenger'"
     *
     * v-acl.roles="['admin', 'editor', 'editPost']"
     * v-acl.exclRoles="['search', 'createPost', 'editPost']"
     *
     *
     * ## close all
     * v-acl.deny.all
     *
     */

  const userAuth = store.getters.hasAuth
  const userRole = store.getters.currentUserRole
  const event = binding.value

  const checkPermForUser = (event) => {
    const permissions = store.getters.getAclForAction(event)
    const applicablePerms = permissions.filter(perm => perm.userRole.code === userRole)
    return applicablePerms.length > 0
  }

  if (event === 'have-profile' && binding.modifiers.allow) {
    if (!userAuth) {
      el.remove()
    }
  }

  /*
    *   create_advert: CLIENT, SELLER/BREEDER
    **/
  if (event === 'create_advert' && binding.modifiers.allow) {
    if (!userAuth) {
      el.remove()
      return
    }
    const isAllowed = checkPermForUser('create_advert')
    if (!isAllowed) {
      el.remove()
    }
  }

  /*
    *   create_farm : SELLER/BREEDER
    **/
  if (event === 'create_farm' && binding.modifiers.allow) {
    if (!store.getters.hasAuth) {
      el.remove()
      return
    }
    const isAllowed = checkPermForUser('create_farm')
    if (!isAllowed) {
      el.remove()
    }
  }

  /*
    *   create_calendar : EXPERT
    **/
  if (event === 'create_calendar' && binding.modifiers.allow) {
    if (!store.getters.hasAuth) {
      el.remove()
      return
    }
    const isAllowed = checkPermForUser('create_farm')
    if (!isAllowed) {
      el.remove()
    }
  }

  // todo ?
  /*
    * boolean:
    * v-acl.boolean="'create_farm'" ---> true|false
    **/
  if (binding.value === 'create_farm' && binding.modifiers.boolean) {

  }
}
export default directiveFactory
