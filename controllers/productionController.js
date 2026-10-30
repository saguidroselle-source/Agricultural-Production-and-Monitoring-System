import { createResourceController } from './resourceController.js';
const controller = createResourceController('production');
export const { list, create, update, remove } = controller;
