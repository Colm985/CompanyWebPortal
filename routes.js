// post route
router.post('/addcity', (req, res) => { 
    var city = req.body
    var countrycode = req.body.countrycode

    if(!countrycode.search(/^(GBR|IRL)$/)){ 
        let insertedKey = await citydata.addCity(req.body) 
        res.render('list-cities', { cities: await citydata.getCities()} ) 
    } else {
    res.locals.errormessage = "Country code must be GBR or IRL" 
    res.render('newcityform', req.body ) 
  }
});