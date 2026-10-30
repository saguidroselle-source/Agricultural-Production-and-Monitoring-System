import { Farmer, Production, Livestock, Fishery, Incident, Inventory, Assistance, Equipment, Budget } from '../models/index.js';

const models = { farmers: Farmer, production: Production, livestock: Livestock, fisheries: Fishery, incidents: Incident, inventory: Inventory, assistance: Assistance, equipment: Equipment, budget: Budget };
export const createResourceController = (resource) => {
  const getModel = () => models[resource];
  return {
    list: async (req,res) => { const M=getModel(); if(!M) return res.status(404).json({message:'Unknown resource'}); res.json(await M.findAll({order:[['createdAt','DESC']],limit:500})); },
    create: async (req,res) => { const M=getModel(); if(!M) return res.status(404).json({message:'Unknown resource'}); try { res.status(201).json(await M.create(req.body)); } catch(e) { res.status(400).json({message:e.errors?.[0]?.message||'Please check the submitted fields.'}); } },
    update: async (req,res) => { const M=getModel(); if(!M) return res.status(404).json({message:'Unknown resource'}); const row=await M.findByPk(req.params.id); if(!row) return res.status(404).json({message:'Record not found'}); try { await row.update(req.body); res.json(row); } catch(e) { res.status(400).json({message:e.errors?.[0]?.message||'Update failed'}); } },
    remove: async (req,res) => { const M=getModel(); if(!M) return res.status(404).json({message:'Unknown resource'}); const count=await M.destroy({where:{id:req.params.id}}); res.json({deleted:count>0}); }
  };
};
