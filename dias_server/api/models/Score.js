/**
* Score.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
      playerName:{
	  type: 'string',
	  required: true
      },

      points: {
	  type: 'integer',
	  required: true
      },

      email:{
	  type: 'string'
	  
      }
  }
};

