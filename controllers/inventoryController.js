import { createResourceController } from './resourceController.js';
const controller = createResourceController('inventory');
export const { list, create, update, remove } = controller;
