var Creatify = Creatify || {};

// Namespace function
Creatify.namespace = function(ns, container) {
    var parts = ns.split('.'), part, i, len, parent = this;
    if (parts[0] === container) {
        parts.slice(0,1);
    }
    for (i = 0, len = parts.length; i < len; i++) {
        if (typeof parent[parts[i]] === 'undefined') {
            parent[parts[i]] = {};
        }
        parent = parent[parts[i]];   }    
    return parent;
};