const mongoose = require('mongoose');
const { Schema } = mongoose;

const accountdataSchema = new Schema({
    'id' : String,
	'Date': String, 
    'BTC': Number, 
    'BTC Available': Number, 
    'BTC Collateral': Number, 
    'BTC USD': Number, 
    'ETH': Number, 
    'ETH Available': Number, 
    'ETH Collateral': Number, 
    'ETH USD': Number
});

mongoose.model('accountdata', accountdataSchema);
