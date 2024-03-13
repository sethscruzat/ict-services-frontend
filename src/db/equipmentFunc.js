import { start_mongo } from './mongo';

export async function createEquipment(equipmentID, issuedTo, condition, location, noOfUnits, remarks, status, usageRate) {
    try {
      const client = await start_mongo();
      const db = client.db();
      const equipment = db.collection('equipment');
      const result = await equipment.insertOne({ equipmentID, issuedTo, condition, location, noOfUnits, remarks, status, usageRate});
      return result.insertedId;
    } catch (error) {
      console.error('Error creating equipment:', error);
      throw error;
    }
  }
  
  export async function deleteEquipment(id) {
    try {
      const client = await start_mongo();
      const db = client.db();
      const equipment = db.collection('equipment');
      const result = await equipment.deleteOne({ equipmentID: id });
      return result.deletedCount === 1;
    } catch (error) {
      console.error('Error deleting equipment:', error);
      throw error;
    }
  }