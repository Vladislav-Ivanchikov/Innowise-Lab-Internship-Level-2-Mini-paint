import * as Tools from './toolAction'
import * as Draw from './drawAction'
import * as Canvas from './canvasAction'

export const ActionCreator = {
    ...Tools,
    ...Draw,
    ...Canvas
}
