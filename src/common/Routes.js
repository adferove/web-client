import Home from '../containers/home/home';
import Dictionary from '../containers/Dictionary/Dictionary';
// import FAQs from '../components/FAQs/FAQs';
import NotFound from '../containers/NotFound/NotFound';
// import Legalbot from '../components/Legalbot/Legalbot';
// import TriageTool from '../components/TriageTool/TriageTool';
import Redirect from '../components/navigation/Header/Redirect';

const routes = [
  {
    path: '/legal-dictionary',
    component: Dictionary,
  },
  // {
  //   path: '/faqs',
  //   component: FAQs,
  // },
  // {
  //   path: '/legalbot',
  //   component: Legalbot,
  //   quickExit: true,
  // },
  {
    path: '/',
    component: Home,
  },
  // {
  //   path: '/triagetool',
  //   component: TriageTool,
  // },
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
