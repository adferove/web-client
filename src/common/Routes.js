import Home from '../components/Home/Home';
import Dictionary from '../components/Dictionary/Dictionary';
import FAQs from '../components/FAQs/FAQs';
import NotFound from '../components/NotFound/NotFound';
import Legalbot from '../components/Legalbot/Legalbot';
import TriageTool from '../components/TriageTool/TriageTool';

const routes = [
  {
    path: '/dictionary',
    component: Dictionary,
  },
  {
    path: '/faqs',
    component: FAQs,
  },
  {
    path: '/legalbot',
    component: Legalbot,
    quickExit: true,
  },
  {
    path: '/',
    component: Home,
  },
  {
    path: '/triagetool',
    component: TriageTool,
  },
  {
    path: undefined,
    component: NotFound,
  },
];

export default routes;
