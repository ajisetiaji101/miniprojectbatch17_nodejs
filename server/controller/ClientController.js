const list = async (req, res) => {
    try {
        const result = await req.context.models.client.findAll({
            include : [{
                all : true
            }]
        });
        return res.send(result);
    } catch (error) {
        return res.send(error)
    }
}

const findClient = async (req, res) => {

    try {
        const client  = await req.context.models.client.findOne({
          include : [{
              all : true
          }]
      });
        return res.send(client)
      } catch (error) {
        return res.status(404).json({ message: error.message });
    }
}
export default { list, findClient }