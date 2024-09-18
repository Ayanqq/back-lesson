import express from 'express'
import cors from 'cors'
import {SETTINGS} from './settings'
import {videosRouter} from './features/videos'
import {allDataRouter} from "./all-data";

export const app = express() // создать приложение
app.use(express.json()) // создание свойств-объектов body во всех реквестах
app.use(cors()) // разрешить любым фронтам делать запросы на наш бэк

app.get('/', (req, res) => {
    // эндпоинт, который будет показывать на верселе какая версия бэкэнда сейчас залита
    res.status(200).json({version: '1.0'})
})
// app.get(SETTINGS.PATH.VIDEOS, getVideosController)
app.use(SETTINGS.PATH.VIDEOS, videosRouter)
app.use(SETTINGS.PATH.SOME, allDataRouter)