import { createResourceRouter } from './helpers.js';
import * as controller from '../controllers/productionController.js';
export default (auth) => createResourceRouter(controller,auth);
