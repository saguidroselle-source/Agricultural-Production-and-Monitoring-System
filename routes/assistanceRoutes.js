import { createResourceRouter } from './helpers.js';
import * as controller from '../controllers/assistanceController.js';
export default (auth) => createResourceRouter(controller,auth);
