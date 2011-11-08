Creatify.namespace('apps.controllers');

Creatify.apps.controllers.ProductHeirarchyFormController = function(form) {
    
    this.form = form;
    
    this.model = new Creatify.apps.models.ProductHeirarchyFormModel();
    this.view = new Creatify.apps.views.ProductHeirarchyFormView(form);
    
    Creatify.utils.observer.add('success', 'renderResponse', this.view);
    Creatify.utils.observer.add('updated', 'updateResetButton', this);
    
    this.whiteList = {
        'radio': 'ProductHeirarchyFormRadioController', 
        'select-one': 'ProductHeirarchyFormSelectController'
    };
    this.registerFormObjects();
};

Creatify.apps.controllers.ProductHeirarchyFormController.prototype = {
    
    submit: function() {
        var data = this.getPostData(),
            requestData = {
                url: this.form.action,
                data: data,
                callback: Creatify.utils.observer.fire
            };
        this.model.getJson(requestData);
        
    },
    
    getPostData: function() {
        throw new Error('Creatify.apps.controllers.ProductHeirarchyForm#getPostData must *NOT* be called directly');
        return;
    },
    
    registerFormObjects: function() {
        var elements = this.form.elements, i, mForm = Creatify.apps.controllers
        for (i = 0, len = elements.length; i < len; i++) {
            if (this.whiteList[elements[i].type]) {
                new mForm[this.whiteList[elements[i].type]](this.form, elements[i].id);
            }   
        }
    },
    
    updateResetButton: function() {
        var btn = $('#reset');
        btn.removeAttr('disabled');
        btn.bind('click', $.proxy(this.view.removeContent, this.view));
    }
    
};