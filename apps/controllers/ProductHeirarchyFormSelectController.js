Creatify.apps.controllers.ProductHeirarchyFormSelectController = function(form, id) {   
    this.form = form;
    this.id = id;
    this.node = document.getElementById(id);
    
    this.model = new Creatify.apps.models.ProductHeirarchyFormModel();
    this.view = new Creatify.apps.views.ProductHeirarchyFormView(form);
    
    $(this.node).change($.proxy(this.submit, this));
};

Creatify.apps.controllers.ProductHeirarchyFormSelectController.prototype = Object.create(Creatify.apps.controllers.ProductHeirarchyFormController.prototype);

Creatify.apps.controllers.ProductHeirarchyFormSelectController.prototype.getPostData = function() {
    var index = this.node.selectedIndex;
    return this.id +'='+ this.node[index].value;
};