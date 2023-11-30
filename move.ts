import * as  path from 'path'
import fs from 'fs-extra'
import { move } from './build-translate'

const startMove = async () => {
    await move(path.resolve(process.cwd(), './package.json'), path.resolve(process.cwd(), './dist/package.json'))
}

startMove() 