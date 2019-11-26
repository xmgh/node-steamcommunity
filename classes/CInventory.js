var SteamCommunity = require("../index.js");

SteamCommunity.prototype.getInventoryItemPrice = function({ appid, hashName }) {
	return new Promise((resolve, reject) => {
		const url = `https://steamcommunity.com/market/priceoverview/?country=US&currency=1&appid=${appid}&market_hash_name=${encodeURIComponent(
			hashName
		)}`;
		this.httpRequest(
			url,
			function(err, response, body) {
				if (err) {
					reject(err);
				} else {
					const resp = JSON.parse(body);
					if (resp.success) {
						resolve(resp);
					} else {
						reject(new Error(body));
					}
				}
			},
			"steamcommunity"
		);
	});
};
