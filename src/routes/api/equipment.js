import { start_mongo } from '$db/mongo';
import {deleteEquipment} from '$db/equipmentFunc';
import {createEquipment} from '$db/equipmentFunc';

//create
export async function post(request) {
  const { equipmentID, issuedTo, condition, location, noOfUnits, remarks, status, usageRate } = request.body;

  try {
    const result = await createEquipment(equipmentID, issuedTo, condition, location, noOfUnits, remarks, status, usageRate);
    return {
      status: 201,
      body: { message: 'Product created successfully', insertedId: result }
    };
  } catch (error) {
    console.error('Error creating product:', error);
    return {
      status: 500,
      body: { message: 'Internal server error' }
    };
  }
}

//read
export async function get(request) {
  try {
    const client = await start_mongo();
    const db = client.db();
    const equipment = db.collection('equipment');
    const result = await equipment.find({}).toArray();
    return {
      status: 200,
      body: result
    };
  } catch (error) {
    console.error('Error fetching products:', error);
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
    const client = await connectToDatabase();
    const db = client.db();
    const equipment = db.collection('equipment');
    const result = await equipment.updateOne({ equipmentID: id }, { $set: request.body });
    if (result.modifiedCount === 1) {
      return {
        status: 200,
        body: { message: 'Product updated successfully' }
      };
    } else {
      return {
        status: 404,
        body: { message: 'Product not found' }
      };
    }
  } catch (error) {
    console.error('Error updating product:', error);
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
        body: { message: 'Product deleted successfully' }
      };
    } else {
      return {
        status: 404,
        body: { message: 'Product not found' }
      };
    }
  } catch (error) {
    console.error('Error deleting product:', error);
    return {
      status: 500,
      body: { message: 'Internal server error' }
    };
  }
}
  