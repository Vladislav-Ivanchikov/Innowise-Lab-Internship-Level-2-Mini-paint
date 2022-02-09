import * as Tools from './toolAction'
import * as Draw from './drawAction'
import * as Canvas from './canvasAction'
import * as Data from '../async-actions/dataAction'

export const ActionCreator = {
    ...Tools,
    ...Draw,
    ...Canvas,
    ...Data
}
