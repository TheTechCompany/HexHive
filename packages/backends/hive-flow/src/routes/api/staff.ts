import { Connector } from '../../connector';
import express from 'express';

const staff = express.Router();
const upload = require('multer')();

export default (connector: Connector) => {
/**
  * Staff routes
 **/

/* Staff collection */
staff.get('/', async (req, res) => {
  const staff = await connector.getStaff()
  res.send(staff)
});


/* Staff contact info (R/W) */
staff.get('/:staffID/contact', function (req, res, next) {
  // connector.fetchStaffContact({ID: req.params.staffID},
  //   (err, dets) => {
  //     res.send((err) ? {error: err} : dets);
  //   });
});
staff.put('/:staffID/contact', function (req, res, next) {
  let org = (req as any).user.organisation
  let contact = req.body.contact
  let name = req.body.name;
  //TODO: Format phone number here

  // connector.updateStaffContact(org,
  //   {ID: req.params.staffID},
  //   contact,
  //   name,
  //   (err, dets) => {
  //     res.send((err) ? {error: err} : dets);
  //   });

});

/* Staff photo */
staff.get('/:staffID/photo', function (req, res, next) {
  connector.getStaffPhoto(req.params.staffID, (err: any, stream: any) => {
    if (err || !stream)
      res.redirect('https://via.placeholder.com/150');
    else
      stream.pipe(res);
  });
});
staff.post('/:staffID/photo', upload.single('file'), function (req, res, next) {
  let staffID = req.params.staffID
  let buffer  = req.file?.buffer;

  // connector.putStaffPhoto(staffID, buffer, (err) => {
  //   res.send((err) ? {error: err} : {success: true});
  // });
});

return staff;
}