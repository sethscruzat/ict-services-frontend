import { getEquipmentCollection } from '$db/mongo';
import {deleteEquipment, createEquipment} from '$db/equipmentFunc';

//create
export async function post(request) {
  const { equipmentID, issuedTo, condition, location, noOfUnits, remarks, status, usageRate } = request.body;

  try {
    const result = await createEquipment(equipmentID, issuedTo, condition, location, noOfUnits, remarks, status, usageRate);
    return {
      status: 201,
      body: { message: 'Equipment added', insertedId: result }
    };
  } catch (error) {
    console.error('Error creating equipment:', error);
    return {
      status: 500,
      body: { message: 'Internal server error' }
    };
  }
}

//read
export async function get(request) {
  try {
    const equipment = await getEquipmentCollection();
    const result = await equipment.find({}).toArray();
    return {
      status: 200,
      body: result
    };
  } catch (error) {
    console.error('Error fetching equipment list:', error);
    return {
      status: 500,
      body: { message: 'Internal server error' }
    };
  }
}

//update
export async function put(request) {
  const { id } = request.params;

  try {
    const equipment = await getEquipmentCollection();
    const result = await equipment.updateOne({ equipmentID: id }, { $set: request.body });
    if (result.modifiedCount === 1) {
      return {
        status: 200,
        body: { message: 'Equipment updated successfully' }
      };
    } else {
      return {
        status: 404,
        body: { message: 'Equipment not found' }
      };
    }
  } catch (error) {
    console.error('Error updating Equipment:', error);
    return {
      status: 500,
      body: { message: 'Internal server error' }
    };
  }
}

//delete
export async function del(request) {
  const { id } = request.params;

  try {
    const result = await deleteEquipment(id)
    if (result === 1) {
      return {
        status: 200,
        body: { message: 'Equipment deleted successfully' }
      };
    } else {
      return {
        status: 404,
        body: { message: 'Equipment not found' }
      };
    }
  } catch (error) {
    console.error('Error deleting equipment:', error);
    return {
      status: 500,
      body: { message: 'Internal server error' }
    };
  }
}
  