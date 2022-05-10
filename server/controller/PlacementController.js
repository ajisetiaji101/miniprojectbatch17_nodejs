const List = async (req, res) => {
  try {
    const result = await req.context.models.placement.findAll({
      include: [
        {
          model: req.context.models.client,
          as: "place_client",
        },
        {
          model: req.context.models.talent_placement,
          as: "talent_placements",
          include: [
            {
              model: req.context.models.talent,
              as: "tapl_tale",
            },
          ],
        },
      ],
    });
    res.status(200).send(result);
  } catch (error) {
    console.log(error);
  }
};

export default {
  List,
};
