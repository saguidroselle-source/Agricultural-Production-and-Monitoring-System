import { Farmer, Production, Livestock, Fishery, Incident, Assistance, Inventory } from '../models/index.js';
export const dashboard = async (req,res) => {
 const [farmers,production,harvests,livestock,fisheries,incidents,pending,inventory] = await Promise.all([Farmer.count(),Production.count(),Production.count({where:{activity:'Harvesting'}}),Livestock.sum('headCount'),Fishery.sum('volume'),Incident.count({where:{status:['Reported','Under Inspection']}}),Assistance.count({where:{status:'Pending'}}),Inventory.count()]);
 res.json({farmers,production,harvests,livestock:Number(livestock||0),fisheries:Number(fisheries||0),incidents,pending,inventory});
};
