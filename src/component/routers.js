import Home from './Home';
import ContextComponent from './context';

const routers = [
  {
    pathName: '/context',
    displayName: 'Context',
    routeComponent: ContextComponent,
  },
  { pathName: '/', displayName: 'Home', routeComponent: Home },
];

export default routers;
