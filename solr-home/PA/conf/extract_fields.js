function processAdd(cmd) {
	var doc = cmd.solrDoc;
	// sets up the last update time:
	doc.setField("last_update", new java.util.Date());
	// NOTE: here you can perform some field extraction...
}

function processDelete(cmd) {
	// not implemented
}

function processMergeIndexes(cmd) {
	// not implemented
}

function processCommit(cmd) {
	// not implemented
}

function processRollback(cmd) {
	// not implemented
}

function finish() {
}
