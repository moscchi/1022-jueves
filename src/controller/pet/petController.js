const getPetsController = async (req, res) => {
  /*  try {
      const allUsers = await UsuarioModel.find();
      res.json(allUsers);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({
          message: error.message + "No se ha podido acceder a los usuarios",
        });
    } */
  const petsMock = [
    {
      name: "Names",
      animal: "Dog",
      createAt: new Date(),
    },
    {
      name: "Names",
      animal: "Dog",
      createAt: new Date(),
    },
  ];
  res.json(petsMock);
};
const getAdminPetsController = async (req, res) => {
  /*  try {
      const allUsers = await UsuarioModel.find();
      res.json(allUsers);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({
          message: error.message + "No se ha podido acceder a los usuarios",
        });
    } */
  const petsMock = [
    {
      name: "Names",
      animal: "Dog",
      createAt: new Date(),
    },
    {
      name: "Names",
      animal: "Dog",
      createAt: new Date(),
    },
  ];
  res.json({petsMock, isAdmin: "Hola soy el admin"});
};

module.exports = { getPetsController, getAdminPetsController };
