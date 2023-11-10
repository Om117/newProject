import { Client, Account, Databases, Permission, Role } from 'appwrite';
import config from '../Config/Config';
export const client = new Client();

client
    .setEndpoint(config.appwriteUrl)
    .setProject(config.appwriteProjectId); // Replace with your project ID



export const account = new Account(client);
// export { ID } from 'appwrite';