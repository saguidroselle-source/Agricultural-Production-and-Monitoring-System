import { createResourceRouter } from './helpers.js';
import * as controller from '../controllers/budgetController.js';
export default (auth) => createResourceRouter(controller,auth);
