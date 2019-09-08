const express = require('express');
const router = express.Router();
const HistoryModule = require('../public/javascripts/HistoryModule');

history = new HistoryModule();

router.get('/', async function(req, res) {
  const history = await HistoryModule.prototype.getHistory();
  res.send(history);
});

router.post('/save', async function(req, res) {
  const id = req.body.id;
  const name = req.body.name;
  const history = await HistoryModule.prototype.saveOne(id,name);
  res.send(history);
});

router.post('/delete', async function(req, res) {
  await HistoryModule.prototype.deleteOne(req.body.id);
  res.send().status(200);
});

module.exports = router;
