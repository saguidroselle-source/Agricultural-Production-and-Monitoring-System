import { createResourceRouter } from './helpers.js';
import * as controller from '../controllers/inventoryController.js';
export default (auth) => createResourceRouter(controller,auth);
