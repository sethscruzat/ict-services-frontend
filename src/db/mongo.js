import {MongoClient} from 'mongodb';
import { MONGO_DB } from '$env/static/private'; 

const client = new MongoClient(MONGO_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

export async function start_mongo() {
    try{
        await client.connect();
        console.log('Connected to database');
        return client
    }catch (error) {
        console.error('MongoDB connection error:', error);
        throw error;
  }

}

export default client.db()