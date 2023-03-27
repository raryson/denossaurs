import { IDinossaur } from '../models/IDinossaur.ts'
import Dinossaur from '../models/dinossaur.ts'

export const getDinossaurs = async () => await Dinossaur.find({})
export const createDinossaur = async (dinossaur : IDinossaur) => await Dinossaur.create(dinossaur)