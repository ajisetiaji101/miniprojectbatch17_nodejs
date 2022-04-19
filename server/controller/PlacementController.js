const List = async (req, res) => {
  try {
    const data = await req.context.models.placement.findAll({
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
    res.status(200).json({ data });
  } catch (error) {
    console.log(error);
  }
};

export default {
  List,
};
