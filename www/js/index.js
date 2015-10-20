var chocolatebar = {
	"name": "Cadbury Fruit and Nut",
	"per_100g": {
		"energy(kJ)": "2100kJ",
		"energy(Kcal)": "505Kcal",
		"protein": "8.5g",
		"carbohydrate": "55g",
		"(of_which_sugar)": "54g",
		"total_fat": "27.5g",
		"(of_which_saturated_fat)": "15g",
		"fibre": "1.3g",
		"*equivalent_as_salt": "0.20g",
		"allergen_information": {
			"nuts": "yes!",
			"milk": "yes!",
			"wheat": "yes!"
		}
	}
}

alert(
	chocolatebar.name +
	" has a fat content of " +
	chocolatebar.per_100g.total_fat +
	" per 100g, does it contain nuts? " +
	chocolatebar.per_100g.allergen_information.nuts);

var chocolatebarString = JSON.stringify(chocolatebar);
window.localStorage.setItem("fruitandnut", chocolatebarString);

var getChocolatebar = window.localStorage.getItem("fruitandnut");
var chocolatebarJSON = JSON.parse(getChocolatebar);

