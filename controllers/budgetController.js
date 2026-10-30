import { createResourceController } from './resourceController.js';
const controller = createResourceController('budget');
export const { list, create, update, remove } = controller;
