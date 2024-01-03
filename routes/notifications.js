var express = require('express');
var notificationsReportsController = require('../controllers/notification_reports_controller')
var notificationsModelController = require('../controllers/notification_model_controller')
var router = express.Router();

router.post('/push',notificationsModelController.pushNotification);
router.post('/set-status-value',notificationsModelController.setStatusValue);
router.get('/',notificationsReportsController.getAll);

module.exports = router;
