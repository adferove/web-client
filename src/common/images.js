import gavel from '../assets/images/gavel.svg';
import calendar from '../assets/images/calendar.svg';
import driving from '../assets/images/driving.svg';
import family from '../assets/images/family.svg';
import yourGuide from '../assets/images/your-guide.svg';
import individual from '../assets/images/individual.svg';
import debt from '../assets/images/debt.svg';

class Images {
  static getImageByName(imageName) {
    let image = null;
    switch (imageName) {
      case 'gavel':
        image = gavel;
        break;
      case 'calendar':
        image = calendar;
        break;
      case 'driving':
        image = driving;
        break;
      case 'family':
        image = family;
        break;
      case 'yourGuide':
        image = yourGuide;
        break;
      case 'individual':
        image = individual;
        break;
      case 'debt':
        image = debt;
        break;
      default:
        break;
    }
    return image;
  }
}

export default Images;
