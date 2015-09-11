/**
 * ScoreController
 *
 * @description :: Server-side logic for managing scores
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    top10: function(req,res){
	Score.find({ where: { }, limit: 10, sort: 'points DESC' })
	.exec(function(err, list){
	    if(err) return res.send(400, err);

	    return res.send(list);
	});
    },
    position: function(req, res){
	var scoreId = req.query.id;

	Score.find({ where: {}, sort: 'points DESC'})
	.exec(function(err, list){
	    if(err) return res.send(400, err);

	    for(var i = list.length-1; i >= 0; i--){
		if(list[i].id == scoreId){
		    return res.json({ pos : i+1 });
		}
	    }

	    return res.send(400, err);
	});
    }

};

