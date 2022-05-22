const List = async (req, res) => {
  try {
    const result = await req.context.models.talent_timeline.findAll();
    return res.status(200).json(result);
  } catch (error) {
    return res.status(404).send(error);
  }
};

const createTale = async (req, res) => {
  try {
    const { files, fields } = req.fileAttrb;
    const { tati_tale_id, tati_date, tati_timeline_name } = req.body;
    const result = await req.context.models.talent_timeline.create({
      tati_date: fields[9].value,
      tati_tale_id: parseInt(fields[10].value),
      tati_timeline_name: fields[11].value,
    });
    return res.status(200).send(result);
  } catch (error) {
    return res.status(404).send(error);
  }
};

const findTime = async (req, res, next) => {
  try {
    const { id } = req.params;

    const result = await req.context.models.talent_timeline.findAll({
      where: { tati_tale_id: id },
    });
    return res.status(200).json(result);
  } catch (error) {
    return next(error);
  }
};

export default { List, createTale, findTime };
