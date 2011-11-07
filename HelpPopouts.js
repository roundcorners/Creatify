Creatify.homeMove.Popouts = function(container) {
    
    Creatify.homeMove.Popouts.containerList.push(container);
    this.container = $(container);
    this.helpBtn = this.container.find('a.help').eq(0);
    this.inputs = this.container.find(':input:not(:image, :radio)');
    this.radios = this.container.find('input[type="radio"]');
    this.setupEventListeners();
};

Creatify.homeMove.Popouts.containerList = [];

Creatify.homeMove.Popouts.prototype = {
        
    setupEventListeners: function() {
        this.helpBtn.bind('click', $.proxy(this.toggleThisHelp, this));
        this.inputs.bind('focus', $.proxy(this.showThisHelp, this));
        this.radios.bind('change', $.proxy(this.showThisHelp, this));
    },
    
    errorCheck: function() {
        if ((document.getElementById('errorList') !== null || false) && (this.container.hasClass('showHelpInstructions'))) {
            this.hideHelpInstructions();
            this.hideAllHelp();
        }
    },
        
    hideAllHelp: function() {
        var i, 
            containerList = Creatify.homeMove.Popouts.containerList, 
            len = containerList.length; 
        
        return (function(inst) {
            for (i = 0; i < len; i++) {
                if (inst.container[0] !== containerList[i]) {
                    $(containerList[i]).removeClass('showHelp');
                }
                $(containerList[0]).removeClass('showHelpInstructions');
            }
        }(this));

    },
    
    showHelpInstructions: function() {
        this.container.addClass('showHelpInstructions');
    },
    
    hideHelpInstructions: function() {
        this.container.removeClass('showHelpInstructions');
    },
    
    showThisHelp: function() {
        this.hideAllHelp();
        this.container.addClass('showHelp');
    },
    
    hideThisHelp: function() {
        this.container.removeClass('showHelp');
    },

    
    toggleThisHelp: function(e) {
        if (this.container.hasClass('showHelp')) {
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
		container,
		containerList = [], 
		containers = $('.containers'), 
		len = containers.length;

	for (i = 0; i < len; i++) {
		container = containers[i];
		if ($(container).has('a.help').length > 0) {	
			containerList.push(new dom.Popouts(container));
			containerList[0].showHelpInstructions();
			containerList[0].errorCheck();
		}		
	}
	
});