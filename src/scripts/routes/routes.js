import Home from '../views/pages/home'; // eslint-disable-line
import Detail from '../views/pages/detail'; // eslint-disable-line
import Favorite from '../views/pages/favorite';

const routes = {
  '/': Home,
  '/detail/:id': Detail,
  '/favorite': Favorite,
};

export default routes;
