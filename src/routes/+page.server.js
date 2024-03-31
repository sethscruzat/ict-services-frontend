// import { getEquipmentCollection } from './src/db/mongo.js';
// import {deleteEquipment, createEquipment} from './src/db/equipmentFunc.js';

// export const actions = {
// 	default: async ({ request }) => {
// 		const data = await request.formData();
// 		db.createTodo( data.get('description'));

//     const { request } = requestEvent;
//     const { equipmentID, issuedTo, condition, location, noOfUnits, remarks, status, usageRate } = request;

//     try {
//       const result = await createEquipment(equipmentID, issuedTo, condition, location, noOfUnits, remarks, status, usageRate);
//       return json(result, {status: 201, message: 'Equipment added'})
//     } catch (error) {
//       console.error('Error creating equipment:', error);
//       return {
//         status: 500,
//         body: { message: 'Internal server error' }
//       };
//     }
// 	}
// };