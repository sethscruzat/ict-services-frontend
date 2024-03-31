import { getEquipmentCollection } from './src/db/mongo.js';
import {deleteEquipment, createEquipment} from './src/db/equipmentFunc.js';

import { json } from '@sveltejs/kit';

//create - done
export async function POST(requestEvent) {
  const { request } = requestEvent;
  const { equipmentID, issuedTo, condition, location, noOfUnits, remarks, status, usageRate } = request;

  try {
    const result = await createEquipment(equipmentID, issuedTo, condition, location, noOfUnits, remarks, status, usageRate);
    return json(result, {status: 201, message: 'Equipment added'})
  } catch (error) {
    console.error('Error creating equipment:', error);
    return {
      status: 500,
      body: { message: 'Internal server error' }
    };
  }
}

//read
// export async function GET(request) {
export async function GET() {
  try {
    const equipment = await getEquipmentCollection();
    // const result = await equipment.find({location:"CICS BUILDING"}).toArray();
    const result = await equipment.find({}).toArray();
    return json(result);
    // return {
    //   status: 200,
    //   body: result
    // };
  } catch (error) {
    console.error('Error fetching equipment list:', error);
    return {
      status: 500,
      body: { message: 'Internal server error' }
    };
  }
}

//update
export async function PUT(request) {
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
export async function DELETE(request) {
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
  