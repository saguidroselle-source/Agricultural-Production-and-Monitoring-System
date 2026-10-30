import { createResourceController } from './resourceController.js';
const controller = createResourceController('equipment');
export const { list, create, update, remove } = controller;
