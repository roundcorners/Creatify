
"use strict";

Creatify.namespace('Creatify.dom');

Creatify.dom.Popouts = function(container) {
    Creatify.dom.Popouts.pods.push(container);
    
    this.pod = $(container);
    this.helpBtn = this.pod.find('a.help').eq(0);
    this.inputs = this.pod.find(':input:not(:image, :radio)');
    this.radios = this.pod.find('input[type="radio"]');
    
    this.setupEventListeners();
    
    if (Creatify.dom.Popouts.pods[0]) {
        this.errorCheck();
    }
};

Creatify.dom.Popouts.pods = [];

Creatify.dom.Popouts.prototype = {
        
    setupEventListeners: function() {
        this.helpBtn.bind('click', $.proxy(this.toggleThisHelp, this));
        this.inputs.bind('focus', $.proxy(this.showThisHelp, this));
        this.radios.bind('change', $.proxy(this.showThisHelp, this));
    },
    
    errorCheck: function() {
        if ((document.getElementById('errorList') !== null || false) && (this.pod.hasClass('initHelp'))) {
            this.hideHelpInstructions();
            this.hideAllHelp();
        }
    },
        
    hideAllHelp: function() {
        var i, 
            pods = Creatify.dom.Popouts.pods, 
            len = pods.length; 
        
        return (function(inst) {
            for (i = 0; i < len; i++) {
                if (inst.pod[0] !== pods[i]) {
                    $(pods[i]).removeClass('pod_active');
                }
                $(pods[0]).removeClass('initHelp');
            }
        }(this));

    },
    
    hideHelpInstructions: function() {
        this.pod.removeClass('initHelp');
    },
    
    showThisHelp: function() {
        this.hideAllHelp();
        this.pod.addClass('pod_active');
    },
    
    hideThisHelp: function() {
        this.pod.removeClass('pod_active');
    },

    
    toggleThisHelp: function(e) {
        if (this.pod.hasClass('pod_active')) {
            this.hideThisHelp();
        } else {
            this.showThisHelp();
        }
        e.preventDefault();
    },
    
    teardown: function() {
        this.inputs.unbind();
        this.radios.unbind();
        this.helpBtn.unbind();
    }
        
};


$(function() {
	"use strict";

	var dom = Creatify.dom,
	    i, 
        containerList = {}, 
        containers = $('.container'), 
        len = containers.length;
	
	$(containers[0]).addClass('initHelp');
	
	for (i = 0; i < len; i++) {
		if (typeof $(containers[i]).find('a.help') !== 'undefined') {
			containerList[containers[i]] = new dom.Popouts(containers[i]);
		}
	}
	
});



