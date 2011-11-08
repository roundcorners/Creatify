Creatify.namespace('apps.views');

Creatify.apps.views.ProductHeirarchyFormView = function(form) {
    this.form = form;
    this.resultsContainer = $("<p id='results'></p>");
};

Creatify.apps.views.ProductHeirarchyFormView.prototype = {
    
    renderResponse: function(data) { 
        if (this.hasContent()) { 
            this.removeContent();
        }
        this.resultsContainer.text("You selected " + data);
        $(this.form).after(this.resultsContainer);
        Creatify.utils.observer.fire('updated');
    },
    
    removeContent: function() {
        this.resultsContainer.empty();
    },
    
    hasContent: function() {
        return this.resultsContainer.text().length > 0;
    }
};
