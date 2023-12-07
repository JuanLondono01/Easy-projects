const createTable = () => {
	const int1 = document.getElementById('int1').value;
	const int2 = document.getElementById('int2').value;
	const tTitle = document.getElementById('tableTitle');
	const table = document.getElementById('tabla');

	table.innerHTML = '';
	if (int1 == '' || int2 == '') {
		tTitle.textContent = 'Por favor ingresa los numeros';
	} else {
		tTitle.textContent = `Tabla del numero ${int1}`;
		for (let i = 1; i <= int2; i++) {
			let newElement = document.createElement('li');
			newElement.textContent = `${int1} * ${i} = ${int1 * i}`;
			table.appendChild(newElement);
		}
	}
};

const limpiar = () => {
	document.getElementById('int1').value = '';
	document.getElementById('int2').value = '';
	document.getElementById('tabla').innerHTML = '';
	const tTitle = (document.getElementById('tableTitle').textContent = '');
};
