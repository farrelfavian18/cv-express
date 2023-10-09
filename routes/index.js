var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    nama: 'Farrel' , 
    universitas: 'Universitas Multi Data Palembang Fakultas Ilmu Komputer & Rekayasa, Prodi Sistem Informasi',
    sma: 'SMA Negeri 15 Palembang',
    ttl: "Palembang, 18 Mei 2002",
  }
  );
});

module.exports = router;
