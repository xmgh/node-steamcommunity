var SteamCommunity = require("../index.js");

SteamCommunity.prototype.getInventoryItemPrice = function(
	appid,
	hashName,
	currency,
	country,
	callback
) {
	var self = this;
	this.httpRequest(
		`https://steamcommunity.com/market/priceoverview/?country=${country}&currency=${currency}&appid=${appid}&market_hash_name=${encodeURIComponent(
			hashName
		)}`,
		function(err, response, body) {
			if (err) {
				callback(err);
				return;
			}
			callback(err, JSON.parse(body));
		},
		"steamcommunity"
	);
};
