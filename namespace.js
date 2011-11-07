var Creatify = Creatify || {};

Creatify.namespace = function(ns, container) {
    var parts = ns.split('.'), i, len, parent = this;
    if (parts[0] === container) {
        parts.shift();
    }
    for (i = 0, len = parts.length; i < len; i++) {
        if (typeof parent[parts[i]] === 'undefined') {
            parent[parts[i]] = {};
        }
        parent = parent[parts[i]];   
    }    
    return parent;
};