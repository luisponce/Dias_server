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

	    return res.send(list)
	});
    }

};

