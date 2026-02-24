import userService from "../service/user.service.js";

async function createUserController(req, res){
    const newUser = req.body;

    try{
        const user = await userService.createUserService(newUser);
        res.status(201).send({user})
    } catch (e){
        res.status(400).send(e.message)
    }
}

async function findAllUserController(req, res) {
  try{
     const users = await userService.findAllUserService();
     res.send({users})
  } catch (e) {
    console.error(e)
    res.status(500).send({ error: 'Internal server error' })
  }  
}

async function findUserByIdControlle(req, res){
  const {id} = req.params;

  try{
    const user = await userService.findUserByIdServices(id);
    console.log(user)
    res.send({user});
  } catch (e) {
    console.error(e)
    res.status(500).send({ error: 'Internal server error' })
  }
}

async function updateUserController(req, res){
  const {id} = req.params;
  const newUser = req.body;

    try{
    const user = await userService.updateUserService(newUser, id);
    res.send({user});
  } catch (e) {
    console.error(e)
    res.status(500).send({ error: 'Internal server error' })
  }
}

async function deleteUserController(req, res) {
  const { id } = req.params;
  try {
    const deleted = await userService.deleteUserService(id);
    if (deleted === 0) {
      return res.status(404).send({ error: "Usuário não encontrado" });
    }
    res.status(200).send({ message: "Usuário removido com sucesso" });
  } catch (e) {
    console.error(e);
    res.status(500).send({ error: "Internal server error" });
  }
}



export default {createUserController, findAllUserController, findUserByIdControlle, updateUserController, deleteUserController}
