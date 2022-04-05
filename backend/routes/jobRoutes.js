const express = require('express');
const route = express.Router()

const {
  createJob,
  deleteJob,
  getAllJobs,
  updateJob,
  showStats,
} = require( '../controllers/jobControllers');

route.route('/').post(createJob).get(getAllJobs);
route.route('/getStats').get(showStats);
route.route('/deleteJob/:id').delete(deleteJob);
route.patch('/updateJob/:id', updateJob);

module.exports = route;