
##ISTRUZIONI:

1) download della distribuzione standard di Solr, estrazione in una directory "solr" dentro SolrPA

2) aggiunta di file di prova in CSV

3) run con 

./start.sh

4) per avviare il processo di Data Import Handler:

http://localhost:8983/solr/#/PA/dataimport//dih


### ESEMPIO 1: OUTPUT CSV con selezione campi

http://localhost:8983/solr/PA/select?q=*%3A*&rows=100000&fl=DATA_INIZIO+DATA_FINE+REGIONE+SETTORE+IMPORTO_EROGATO+IMPORTO_PREVISTO&wt=csv&indent=true

# ESEMPIO 2: faceted search per regione

http://localhost:8983/solr/PA/select?q=*:*&rows=0&fl=REGIONE+IMPORTO_EROGATO+IMPORTO_PREVISTO+SETTORE&facet=true&facet.mincount=3&facet.field=REGIONE&wt=json&indent=true

### TODO

- *date*:

1) modificare schema introducendo le date con il campo opportuno

2) rigenerare gli indinci 

3) generare esempi sorted e ranged query sulle date

- *entities*: espandere entities dai nomi su wikipedia, geonames etc

4) miglioramento campi per full-text search (stemming, sinonimi etc etc)