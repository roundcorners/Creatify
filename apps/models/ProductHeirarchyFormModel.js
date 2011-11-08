Creatify.namespace('apps.models');

Creatify.apps.models.ProductHeirarchyFormModel = function() {};

Creatify.apps.models.ProductHeirarchyFormModel.prototype = {
    
    getJson: function(options) {
        $.ajax({
            url: options.url, 
            data: options.data,
            success: function(data) {
                options.callback('success', data);
            }
        });
    }
    
};