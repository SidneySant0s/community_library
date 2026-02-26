import userRepositories from "../repositories/user.repositories.js";
import { generateJWT } from './auth.service.js';
import bcrypt from 'bcrypt';

async function createUserService(newUser){
    const foundUser = await userRepositories.findUserByEmailRepository(newUser.email)
    if(foundUser) throw new Error('User already exists!')
    
    const passHash = await bcrypt.hash(newUser.password, 10);
    const user = await userRepositories.createUserRepository({...newUser, password: passHash});
    if (!user) throw new Error ('Error creating User');

    const token = generateJWT(user.id)
    return token ;
    
}

async function findAllUserService() {
    const users = await userRepositories.findAlUserRepository();
    return users;
}

async function findUserByIdServices(id) {
    const user = await userRepositories.findUserByIdRepository(id)
    if (!user) throw new Error("User not found");
    return user;
}

async function updateUserService(newUser, userId) {
    const user = await userRepositories.findUserByIdRepository(userId);
    if (!user) throw new Error("User not found");
    if (newUser.password) {
        newUser.password = await bcrypt.hash(newUser.password, 10)
    }
    const userUpdated= userRepositories.updateUserRepository(userId, newUser)
    return userUpdated
}

async function deleteUserService(id) {
    const user = await userRepositories.findUserByIdRepository(id);
    if (!user) throw new Error("User not found");
    const message = await userRepositories.deleteUserRepository(id);
    return message;
}


export default {
    createUserService,
    findAllUserService,
    findUserByIdServices,
    updateUserService,
    deleteUserService
}