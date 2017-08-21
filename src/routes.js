import Home from './App.vue';
import About from './components/sections/About.vue';
import Services from './components/sections/Services.vue';
import Works from './components/sections/Works.vue';
import WorkDetail from './components/sections/WorkDetail.vue';
import Contact from './components/sections/contact.vue';
import MonsterGame from './components/sections/MonsterGame.vue';

export const routes = [
    { path: '' , component: Home },
    { path: '/about' , component: About },
    { path: '/services' , component: Services },
    { path: '/works' , component: Works, children: [
        {path: ':id', component: WorkDetail}
        ] },
    { path: '/contact' , component: Contact },
    { path: '/monstergame' , component: MonsterGame },
];