// TODO: Install the following package:
import { openDB } from 'idb';

// TODO: Complete the initDb() function below:
const initdb = async () =>
    openDB('cards', 1, {
        upgrade(db) {
            if (db.objectStoreNames.contains('cards')) {
                console.log('cards database already exists');
                return;
            }
            db.createObjectStore('todos', { keyPath: 'id', autoIncrement: true });
            console.log('cards database created');
        }
    });


// TODO: Complete the postDb() function below:
export const postDb = async (name, home, cell, email) => {
    console.log('Post to the database');
    const cardsDb = await openDB('cards', 1);
    const tx = cardsDb.transaction('cards', 'readwrite');
    const store = tx.objectStore('cards');
    const request = store.add({ card: name, home, cell, email });
    const result = await request;
    console.log('🚀 - data saved to the database', result);
};

// TODO: Complete the getDb() function below:
export const getDb = async () => {

};

// TODO: Complete the deleteDb() function below:
export const deleteDb = async (id) => {

};

initdb();
