# Estudo de api com testes unitarios e Mercado financeiro
[MyAPI](http://3.15.194.42:7000/stock/T/average)


## /stock/[sua-stock-ex:ITSA3.SA]
Nessa rota é possivel pegar uma lista dos preços da ação de fechamento dos
ultimos 260 dias de negociação na bolsa

## /stock/[sua-stock-ex:ITSA3.SA]/average
Nessa rota é retornada a média do preço da ação nos ultimos 260 dias

## /stock/[sua-stock-ex:ITSA3.SA]/profit
Nessa rota é possivel capturar o lucro de uma ação em 260 dias


## /stock/[sua-stock]?br=true
O parametro permite que seja possivel pegar uma ação sem colocar o .SA
Antes seria necessario colocar o ITSA3.SA agora com o parametro br basta
apenas colocar o ITSA3
