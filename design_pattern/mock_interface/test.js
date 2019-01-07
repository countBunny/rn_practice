import Interface from "./interface";

var DynamicMap = new Interface('DynamicMap', ['centerOnPoint', 'zoom', 'draw']);

function displayRoute(mapInstance){
    Interface.ensureImplements(mapInstance, DynamicMap);
    mapInstance.centerOnPoint(12, 34);
    mapInstance.zoom(5);
    mapInstance.draw();
}

var ResultSet = new Interface('ResultSet', ['getDate', 'getResults']);
var ResultFormatter = function(resultsObject) {
    Interface.ensureImplements(resultsObject, ResultSet);
    this.resultsObject = resultsObject;
}

ResultFormatter.prototype.renderResults = function(){
    
}