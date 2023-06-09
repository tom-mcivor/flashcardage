import express, { Request, Response } from 'express'
import mongoose from 'mongoose'
import Deck from './models/Deck'
import { confg } from 'dotenv'

const PORT = 5000

const app = express()

app.use(express.json())

app.post("/decks", async (req: Request, res: Response) => {
  const newDeck = new Deck({
    title: req.body.title,
  })
  const createdDeck = await newDeck.save()
  res.json(createdDeck)
})

const db = mongoose.connect(process.env.MONGO_URL)
.then(() => {
  console.log(`listening on port ${PORT}`);
  app.listen(PORT)
})








