<template>
  <slot></slot>
</template>

<script>
export default {
  name: 'ACLComponent',
  props: ['permissions', 'role'],
  setup () {

  }
}
</script>
