// src/mocks/handlers.js
import { rest } from 'msw'

export const handlers = [
  rest.post('http://localhost:3000/save-feedback', (req, res, ctx) => {


    return res(
      // Respond with a 200 status code
      ctx.json({
        id:Date.now(),
        feedbackText:req.body.feedbackText
      })
    )
  })


]