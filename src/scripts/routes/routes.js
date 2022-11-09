import Explore from '../pages/explore';
import Detail from '../pages/detail';
import Favorite from '../pages/favorite';

const routes = {
  '/': Explore,
  '/explore': Explore,
  '/detail/:id': Detail,
  '/favorite': Favorite,
};

export default routes;
