import Home from '../containers/home/home';
import Dictionary from '../containers/Dictionary/Dictionary';
import FAQs from '../containers/Faqs/FAQs';
import NotFound from '../containers/NotFound/NotFound';
import Redirect from '../components/navigation/Header/Redirect';

const routes = [
  {
    path: '/legal-dictionary',
    component: Dictionary,
  },
  {
    path: '/faqs',
    component: FAQs,
  },
  {
    path: '/',
    component: Home,
  },
  {
    path: '/quickexit',
    component: Redirect,
  },
  {
    path: undefined,
    component: NotFound,
  },
];

export default routes;
