# Javascript SQL

Esse é um tutorial sobre como usar funções nativas do Javascript para simular, no navegador, os comandos SQL mais populares.

Nesse tutorial, estou usando uma base de dados fictícia, com animais, seus pesos e tipos (bichos.json). Basta baixar a pasta toda e executar localmente em qualquer navegador.

### FILTER
Devolve uma matriz de objetos com uma menor quantidade de linhas, mas com todas colunas.  
Equivale a:  
``SELECT * FROM bichos WHERE tipo = 'Mamífero'``

### MAP
Devolve uma matriz de objetos com uma menor quantidade de colunas, mas com todas linhas.  
Equivale a:  
``SELECT animal, tipo FROM bichos``

### SORT
Ordena a matriz de objetos por uma ou mais de suas colunas.  
Equivale a:  
``SELECT * FROM bichos ORDER BY animal``

### REDUCE
Devolve um número ou um conjunto de números calculados.  
Equivale a:   
``SELECT SUM(peso) FROM bichos``
  
### Encadeamento  
As funções podem ser encadeadas, para sintaxes mais complexas.   
  
Exemplo:  
``bichos.map(...).filter(...).sort(...)``  
  
  
Equivale a:   
``SELECT animal, tipo FROM bichos WHERE tipo = 'Mamífero' ORDER BY animal``

