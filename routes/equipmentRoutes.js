import { createResourceRouter } from './helpers.js';
import * as controller from '../controllers/equipmentController.js';
export default (auth) => createResourceRouter(controller,auth);
