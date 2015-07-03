/**
 * jQuery iCheck Plugin
 *
 * Copyright (c) 2015 Amyth Arora
 * Licensed under MIT License
 *
 * https://github.com/amyth/jquery-icheck
 *
 * VERSION: 0.0.1
 *
 */
(function($) {
    $.fn.icheck = function(options) {
        
        var plugin = this;
        var defaults = {
            checkedText: 'ON',
            uncheckedText: 'OFF',
        };
        
        // Override defaults with given options
        plugin.settings = $.extend({}, defaults, options);
        
        return this.each(function() {
            
            var $switch;
            var $elm = $(this);
            var $container = $elm.parent();
            
            // Checks the given icheck checkbox
            var _check = function(e) {
                e.prop('checked', true);
            };
            
            // Un-checks the given icheck checkbox
            var _uncheck = function(e) {
                e.prop('checked', false);
            };
            
            // Returns a boolean of whether or not the
            // given checkbox element is checked
            var _isChecked = function(e) {
                return e.is(':checked');
            };
            
            var isChecked = _isChecked($elm);
            
            // Switches the switch on
            var switchOn = function(s) {
                s.children().css({'color': 'black'});           
                s.children().removeClass('ic-selected');
                
                s.children('.ic-on').css({'color': '#565656'});
                s.children('.ic-on').addClass('ic-selected');
            };
            
            // Switches the switch off
            var switchOff = function(s) {
                s.children().css({'color': 'black'});
                s.children().removeClass('ic-selected');
                
                s.children('.ic-off').css({'color': '#565656'});
                s.children('.ic-off').addClass('ic-selected');                
            };
            
            var clickCallback = function() {
                if (isChecked) {
                    _uncheck($elm);
                    switchOff($switch);
                } else if (!isChecked) {
                    _check($elm);
                    switchOn($switch)
                }
                isChecked = _isChecked($elm);
            };
            
            // Hides the given checkbox element and adds
            // a switch with a better UI
            var replaceUI = function(e) {
                
                // hide the checkbox element
                e.hide();
                
                // add the switch
                $switch = $('<span class="icswitch"></span>');
               
                $offElm = $('<span class="ic-off ic"></span>');
                $offElm.text(plugin.settings.uncheckedText);
                $offElm.appendTo($switch);
                
                $onElm = $('<span class="ic-on ic"></span>')
                $onElm.text(plugin.settings.checkedText);
                $onElm.appendTo($switch);
                
                $switch.appendTo($container);
                
                // update the switch value to the initial value
                if (isChecked) {
                    switchOn($switch);
                } else {
                    switchOff($switch);
                }
            };
            
            // process the element
            replaceUI($elm);
            $switch.on('click', clickCallback);
        });
    };
}(jQuery));
