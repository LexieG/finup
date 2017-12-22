import MallHome from '../pages/MallHome';

export const routers = [
    {
        path: '/',
        redirect: to => '/home',
    },
    {
        path: '/home',
        name: 'home',
        component: MallHome
    },
];
export default routers;