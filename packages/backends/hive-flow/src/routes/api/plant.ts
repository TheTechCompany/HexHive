import { Connector } from '../../connector';
import express from 'express';
const plant = express.Router();

export default (connector: Connector) => {

plant.get('/', function (req, res, next) {
  connector.getPlant((err, plant) => {
    res.send(plant);
  });
})

plant.get('/:plate/details', (req, res) => {
  // connector.getPlateDetails(req.params.plate, (err, details) => {
  //   res.send((err) ? {error: err} : details);
  // })
})

plant.put('/:plate/details', (req, res) => {
  // connector.updatePlateDetails(req.body.updateType, req.params.plate, req.body.details, (err) => {
  //   res.send((err) ? {error: err} : {success: true})
  // })
})

// plant.get('/:plate/service-requests', (req, res) => {
//   req.connector.getPlateRequests(req.params.plate, (err, requests) => {
//     res.send((err) ? {error: err} : requests);
//   })
// })

// plant.put('/:plate/service-requests/:id', (req, res) => {
//   req.connector.completeService(req.params.plate, req.params.id, (err) => {
//     res.send((err) ? {error: err} : {success: true})
//   })
// })

// plant.delete('/:plate/service-requests/:id', (req, res) => {
//   req.connector.removeService(req.params.plate, req.params.id, (err) => {
//     res.send((err) ? {error: err} : {success: true})
//   })
// })

  plant.get('/:plate/history', (req, res) => {
  // connector.getPlateHistory(req.params.plate, (err, history) => {
  //   res.send((err) ? {error: err} : history)
  // })
})

  return plant;
}