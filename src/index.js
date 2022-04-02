import initialUseVue3ACL from './hook'
import directiveFactory from './directive'
import ACLComponent from './ACLComponent'

let useVue3ACL

const aclPlugin = {
  install (app, { store }) {
    /*
    * Hook
    */
    useVue3ACL = initialUseVue3ACL(store)

    /*
    * Component
    */
    app.component('ACLComponent', ACLComponent)

    /*
    * Directive
    */
    app.directive('acl', {
      mounted: directiveFactory(store)
    })
  }
}

export default aclPlugin

export {
  useVue3ACL
}
