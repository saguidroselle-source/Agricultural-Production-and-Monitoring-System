import { createResourceController } from './resourceController.js';
const controller = createResourceController('assistance');
export const { list, create, update, remove } = controller;
