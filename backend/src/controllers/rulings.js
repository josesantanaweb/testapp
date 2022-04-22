import Ruling from "../models/Ruling";

export const findAll = async (req, res) => {
  const rulings = await Ruling.find();
  res.json(rulings);
};

export const create = async (req, res) => {
  const { name, description, picture, votes, category } = req.body;
  const newRuling = new Ruling({
    name,
    description,
    picture,
    votes,
    category,
  });
  const rulingSaved = await newRuling.save();
  res.json(rulingSaved);
};

export const update = async (req, res) => {
  await Ruling.findByIdAndUpdate(req.params.id, req.body);
  res.json({ message: "Update ruling" });
};
