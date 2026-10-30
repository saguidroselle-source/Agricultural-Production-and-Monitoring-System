import { createResourceController } from './resourceController.js';
const controller = createResourceController('farmers');
export const { list, create, update, remove } = controller;
