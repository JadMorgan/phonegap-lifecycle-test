var chocolatebars = 
[
	{
		"name": "Cadbury Fruit and Nut",
		"per_100g": 
		{
			"energy(Kcal)": "505Kcal",
			"total_fat": "27.5g",
			"fibre": "1.3g",
			"allergen_information": 
			{
				"nuts": "Contains",
			}
		}
	},
	{
		"name": "Cadbury Dairy Milk",
		"per_100g": 
		{
			"energy(Kcal)": "530Kcal",
			"total_fat": "30.5g",
			"fibre": "0.7g",
			"allergen_information": 
			{
				"nuts": "May contain",
			}
		}
	},
	{
		"name": "Cadbury caramel",
		"per_100g": 
		{
			"energy(Kcal)": "480Kcal",
			"total_fat": "23.5g",
			"fibre": "0.4g",
			"allergen_information": 
			{
				"nuts": "May contain",
			}
		}
	}
];

/*
alert(
	chocolatebars.name +
	" has a fat content of " +
	chocolatebars.per_100g.total_fat +
	" per 100g, " +
	chocolatebars.per_100g.allergen_information.nuts +
	" nuts.");
*/

var chocolatebarsString = JSON.stringify(chocolatebars);
window.localStorage.setItem("fruitandnut", chocolatebarsString);

var getChocolatebars = window.localStorage.getItem("fruitandnut");
var chocolatebarsJSON = JSON.parse(getChocolatebars);

