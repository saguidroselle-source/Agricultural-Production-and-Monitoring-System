import { sequelize } from './models/db.js';
import './models/index.js';
try { await sequelize.authenticate(); await sequelize.sync(); console.log('AgriConnect database tables are ready.'); }
catch(error){ console.error('Database migration failed:',error.message); process.exitCode=1; }
finally { await sequelize.close(); }
