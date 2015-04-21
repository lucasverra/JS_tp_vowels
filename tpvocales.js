var vocales = ["a","e","i","o","u"];
var arrayatrabajar = ['Agent', 'Smith:', 'Never', 'send', 'a', 'human', 'to', 'do', 'a', 'machine\'s', 'job'];
var cantvocales = 0 ;
var arraycontadordevocales = [];
debugger;

for (var i = 0;  i < arrayatrabajar.length ; i = i + 1) {
	palabraatrabajar = arrayatrabajar[i];
	cantvocales = 0;
	for (var u = 0; u < palabraatrabajar.length; u++) {
		letraaanalizar = palabraatrabajar[u];
		if (vocales.indexOf(letraaanalizar.toLowerCase()) > -1) {cantvocales++;};
		arraycontadordevocales[i]=cantvocales;
	};
};

console.log(arraycontadordevocales);