import Home from '../containers/home/home';
import Dictionary from '../containers/Dictionary/Dictionary';
import FAQs from '../containers/Faqs/FAQs';
import NotFound from '../containers/NotFound/NotFound';
import ContactLA from '../containers/ContactLA/ContactLA';
import MultiStepContainer from '../containers/MultiStep/MultiStepContainer';
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
    path: '/contact-legal-aid',
    component: ContactLA,
  },
  {
    path: '/tool',
    component: MultiStepContainer,
  },
  {
    path: undefined,
    component: NotFound,
  },
];

export default routes;
