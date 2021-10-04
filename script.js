var bichos;

$(document).ready(() => {
	$.ajax({
		cache: false,
		url: 'bichos.json',
		dataType: 'json',
		success: function(data) {
			bichos = data;
			func();
		}
	});	
});


function func(){

	var res;

	// ********* BASIC *********************************************************

	console.log('---------------------------------------');
	console.log('SELECT * FROM bichos');
	res = bichos;
	console.log(res);

	console.log('---------------------------------------');
	console.log('SELECT COUNT(*) FROM bichos');
	res = bichos.length;
	console.log(res);

	
	// ********* SLICE *********************************************************
	// não altera a matriz existente

	console.log('---------------------------------------');
	console.log('SELECT TOP 5 * FROM bichos');
	res = bichos.slice(0, 5);
	console.log(res);

	
	// ********* FILTER *********************************************************
	// não altera a matriz existente

	console.log('---------------------------------------');
	console.log('SELECT COUNT(*) FROM bichos WHERE tipo = \'Mamífero\'');
	// sintaxe completa
	res = bichos.filter(function(element){
		if (element.tipo == 'Mamífero') {
			return true;
		} else {
			return false;	
		}
	}).length;
	console.log(res);
	// sintaxe simplificada
	res = bichos.filter(element => (element.tipo == 'Mamífero')).length;
	console.log(res);

	// com mais de um critério
	res = bichos.filter(element => (element.tipo == 'Mamífero') && (element.peso < 10)).length;
	console.log(res);
	
	
	// ********* MAP *********************************************************
	// não altera a matriz existente

	console.log('---------------------------------------');
	console.log('SELECT animal, tipo FROM bichos');
	// sintaxe completa
	res = bichos.map(function(element){
		var row = {
			'animal': element.animal,
			'tipo': element.tipo
		};
		return row
	});
	// sintaxe simplificada
	res = bichos.map(element => ({'animal': element.animal, 'tipo': element.tipo}));
	console.log(res);


	// ********* MAP + FILTER (remove duplicates) *********************************************************
	
	console.log('---------------------------------------');
	console.log('SELECT DISTINCT tipo FROM bichos');
	res = bichos.map(element => element.tipo).filter((element, index, self) => self.indexOf(element) === index);
	console.log(res);





	// ********* SORT *********************************************************
	// altera a matriz existente, precisa fazer uma cópia antes se for usar várias vezes
	
	console.log('---------------------------------------');
	console.log('SELECT * FROM bichos ORDER BY peso ASC');
	// sintaxe completa
	res = bichos.map(element => element); // precisa copiar dessa forma, para criar nova matriz
	res.sort(function(element1, element2) {
		if (element1.peso < element2.peso) {
			return -1;
		} else if (element1.peso > element2.peso) {
			return 1;
		} else {
			return 0;
		}
	});
	console.log(res);
	// sintaxe simplificada
	res = bichos.map(element => element); // precisa copiar dessa forma, para criar nova matriz
	res.sort((element1, element2) => element1.peso - element2.peso);
	console.log(res);
	

	console.log('---------------------------------------');
	console.log('SELECT * FROM bichos ORDER BY peso DESC');
	res = bichos.map(element => element); // precisa copiar dessa forma, para criar nova matriz
	res.sort((element1, element2) => element2.peso - element1.peso);
	console.log(res);


	console.log('---------------------------------------');
	console.log('SELECT * FROM bichos ORDER BY tipo');
	res = bichos.map(element => element); // precisa copiar dessa forma, para criar nova matriz
	res.sort((element1, element2) => element1.tipo.localeCompare(element2.tipo));
	console.log(res);


	console.log('---------------------------------------');
	console.log('SELECT * FROM bichos ORDER BY tipo, peso');
	res = bichos.map(element => element); // precisa copiar dessa forma, para criar nova matriz
	res.sort((element1, element2) => (element1.tipo.localeCompare(element2.tipo)) || (element1.peso - element2.peso));
	console.log(res);




	//*** REDUCE ****************************************************
	// para fazer cálculos com os objetos da matriz

	console.log('---------------------------------------');
	console.log('SELECT SUM(peso) FROM bichos');
	// sintaxe completa (o "zero" no final é o valor inicial, alterar conforme desejado)
	res = bichos.reduce(function(value, element) {
		return value + element.peso;
	}, 0);
	console.log(res);
	// sintaxe simplificada
	res = bichos.reduce((value, element) => value + element.peso, 0);
	console.log(res);

	console.log('---------------------------------------');
	console.log('SELECT tipo, COUNT(*) FROM bichos GROUP BY tipo');
	res = bichos.reduce((value, element) => {
		var property = element.tipo; 
		if (!value.hasOwnProperty(property)) { 
			value[property] = 0;
		}
		value[property]++;
		return value;
	}, {}); // {} é o valor inicial (um objeto vazio)
	console.log(res);

	console.log('---------------------------------------');
	console.log('SELECT tipo, SUM(peso) FROM bichos GROUP BY tipo');
	res = bichos.reduce((value, element) => {
		var property = element.tipo; 
		if (!value.hasOwnProperty(property)) { 
			value[property] = 0;
		}
		value[property] += element.peso;
		return value;
	}, {}); // {} é o valor inicial (um objeto vazio)
	console.log(res);



	//*** PUSH / INSERT ****************************************************

	console.log('---------------------------------------');
	console.log('INSERT INTO bichos (id, faixa, animal, english, tipo, peso) VALUES (26, \'00_00_00_00\', \'Zebu\', \'Zebu\', \'Zebu\', 0)');
	var row =  {
		"id": 26, 
		"faixa": "00_00_00_00", 
		"animal": "Zebu", 
		"english": "Zebu", 
		"tipo": "Zebu", 
		"peso": 0
	};
	bichos.push(row);

	
	//*** DELETE ****************************************************
	console.log('---------------------------------------');
	console.log('DELETE FROM bichos WHERE id = 26');
	bichos = bichos.filter(element => element.id != 26);





	//*** FOR EACH ****************************************************
	// é um simples loop, método mais lento que os anteriores
	// deve ser usado ocasionalmente, quando nenhum dos outros servir

	bichos.forEach(element => {
		console.log(element.animal);
	});


	
	
}



