
import Home from '../components/Home.vue';
import About from '../components/About.vue';

export default [
    { 
        path: '/', 
        component: Home,
        name : 'home' 
    }, 
    { 
        path: '/about', 
        component: About,
        name : 'about' 
    },
    { 
        path: "*", 
        component: Home 
    },
];