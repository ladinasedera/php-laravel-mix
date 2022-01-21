<template>
    <div class="container">    
        <h1>{{pageTitle}}</h1>
        <navigation></navigation>
        <slot></slot>
    </div>
</template>

<script>
import Navigation from '../Navigation.vue';

export default {
    name: 'BaseLayout',
    components: {
        'navigation' : Navigation
    },
    props : {
        pageTitle : String
    },
    mounted () {
    },
    data() {
        return {
            name : "Ladina"
        }
    }
}
</script>

<style>

</style>