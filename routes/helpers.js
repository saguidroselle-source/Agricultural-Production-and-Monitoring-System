import express from 'express';
export const createResourceRouter = (controller, auth) => { const r=express.Router(); r.get('/',auth,controller.list); r.post('/',auth,controller.create); r.put('/:id',auth,controller.update); r.delete('/:id',auth,controller.remove); return r; };
