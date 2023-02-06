module.exports.home = function(req,res) {
    // return res.end('<h1>Express Controller is working</h1>')
    
    return res.render('home',{
        title:"Home"
    })
}

// module.exports = home