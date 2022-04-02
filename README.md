# Vue3 ACL Plugin

## Usage

### Getting started

`npm install vue3-acl-plugin` or
`yarn add vue3-acl-plugin`

### Directive

```js
<button v-acl.allow="'create_post'"></button>
```

```js
<button v-acl.deny="'create_post'"></button>
```

### Component

```js
<ACLComponent allow="create_post">
</ACLComponent>
```

### Hook

```js
import {useVue3ACL} from 'vue3-acl-plugin'

setup(){
    const acl = useVue3ACL()

    //..

    return {
        acl

        //..
    }
}
```

## License

MIT
