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
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
};

const findOne = async (req, res, next) => {
  try {
    const { id } = req.params;

    const result = await req.context.models.placement.findOne({
      where: { place_id: id },
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
    return res.status(200).json(result);
  } catch (error) {
    return next(error);
  }
};

const hapusPlace = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await req.context.models.placement.destroy({
      where: {
        place_id: parseInt(id),
      },
    });
    return res.status(200).send("delete" + result + "rows.");
  } catch (error) {
    return res.status(404).send("data not found");
  }
};

export default {
  List,
  findOne,
  hapusPlace,
};
