import { Connector } from '../../connector';
import express from 'express';
const quotes = express.Router();

export default (connector: Connector) => {
quotes.get('/', async (req, res, next) => {
  let c = connector;
  let year = req.query.year
  let date = new Date();
  let currentYear = date.getFullYear();

  if (year) {         /* Requesting quotes by year */
    const quotes = await c.getQuotesYearAhead(parseInt(year.toString()))
    res.send(quotes);
  } else {            /* Default: get quotes for current year */
    const quotes = await c.getQuotesYearAhead(currentYear)
     res.send(quotes);
    
  }
});

return quotes;
}
