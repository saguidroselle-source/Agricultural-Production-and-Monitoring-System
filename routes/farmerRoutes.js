import { createResourceRouter } from './helpers.js';
import * as controller from '../controllers/farmerController.js';
export default (auth) => createResourceRouter(controller,auth);
