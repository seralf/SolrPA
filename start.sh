export SOLR="solr-4.5.0/example"

java -Xms128m -Xmx1024m -Djetty.home=$SOLR -Dsolr.solr.home=solr-home -DSTOP.PORT=8893 -DSTOP.KEY=solr_stop -jar $SOLR/start.jar

