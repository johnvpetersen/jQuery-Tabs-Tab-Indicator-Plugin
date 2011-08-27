/*!
 * Tab Indicator jQueryUI Tabs Plugin Extension v1.0.0
 * https://github.com/johnvpetersen/jQuery-Tabs-Tab-Indicator-Plugin
 *
 * Copyright 2011, John V. Petersen
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * Includes jquery-1.6.2.js
 * Copyright 2011, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 
 * Includes jQuery UI 1.8.16
 *
 * Copyright 2011, (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI
 *
 * Date: Sat Aug 27 12:25:00 2011 -0400
 */
 (function ($) {
     $.fn.tabindicator = function (options) {

         var settings = {
             tabDisplay: "show"
         };
         var tabs = this[0];
         var container = $(tabs).find(".tabIndicatorContainer");
         var classList = $(tabs).attr('class').split(" ");

         if ($.inArray("ui-tabs", classList) > -1 && container.length > 0) {

             if (options) {
                 $.extend(settings, options)
             }

             if (settings.tabDisplay == "hide") {
                 $(tabs).find("ul").hide();
             }

             $(tabs).bind('tabsadd', function (event, ui) {
                 addTabHandler(event, ui);
             });

             $(tabs).bind('tabsremove', function (event, ui) {
                 removeTabHandler(event, ui);
             });

             $(tabs).bind('tabsenable', function (event, ui) {
                 tabsEnableHandler(event, ui);

             });

             $(tabs).bind('tabsdisable', function (event, ui) {
                 tabsDisableHandler(event, ui);
             });

             $(tabs).bind('tabsselect', function (event, ui) {
                 selectTabHandler(event, ui);
             });

             addIndicators();
         } else {
             $(this).html("This Tab Indicator Plugin must be associated with a jQuery Tabs Instance and the tabs instance must have a DIV of class type tabIndicatorContainer.")
         }

         function tabsDisableHandler(event, ui) {
             disableIndicator(ui.index);

         }

         function tabsEnableHandler(event, ui) {

             enableIndicator(ui.index);
         }

         function enableIndicator(index) {
             var indicators = container.find(".tabIndicator");
             $(indicators[index]).removeClass("ui-state-disabled")
             bindIndicatorMouseEvents(indicators[index]);

         }

         function disableIndicator(index) {
             var indicators = container.find(".tabIndicator");
             $(indicators[index]).addClass("ui-state-disabled");
             unbindIndicatorMouseEvents(indicators[index]);
         }

         function selectTabHandler(event, ui) {
             selectIndicator(ui.index);
         }

         function selectIndicator(index) {
             var indicators = container.find(".tabIndicator");
             $(indicators).removeClass("ui-state-active");
             $(indicators[index]).addClass("ui-state-active");
         }

         function addIndicator(tabs, index) {

             var href = $($(tabs).find("li")[index]).find('a').attr('href');
             var selectedIndex = $(tabs).tabs('option', 'selected');
             var event = $(tabs).tabs().data().tabs.options["event"];
             var indicator = $("<div></div>").addClass("tabIndicator ui-state-default");

             if (selectedIndex == index) {
                 $(indicator).addClass("ui-state-active");
             }

             $(indicator).data("index", index);
             $(indicator).data("href", href);

             bindIndicatorMouseEvents(indicator);

             $(indicator).bind(event, function () {
                 $(tabs).find(".tabIndicator").removeClass("ui-state-active");
                 $(this).addClass("ui-state-active");
                 $(tabs).tabs({
                     selected: $(indicator).data("index")
                 });
             })
             $(container).append(indicator);
             $(container).append("&nbsp;")

             $(container).width($(container).find(".tabIndicator").length * 30);
         }

         function addIndicators() {
             var index = -1;
             $(tabs).find("li").each(function (key, item) {
                 index++;
                 addIndicator(tabs, index);
             });
         }

         function removeIndicators() {
             $(container).find(".tabIndicator").remove();
         }

         function removeTabHandler(event, ui) {
             removeIndicators();
             addIndicators();
         }

         function addTabHandler(event, ui) {
             var index = $(tabs).tabs("length") - 1;
             addIndicator(event.target, index);
         }


         function unbindIndicatorMouseEvents(indicator) {
             $(indicator).unbind("mouseover").unbind("mouseleave");
         }

         function bindIndicatorMouseEvents(indicator) {
             $(indicator).bind("mouseover", function () {
                 $(this).addClass("ui-state-hover");
             })

             $(indicator).bind("mouseleave", function () {
                 $(this).removeClass("ui-state-hover");
             })

         }
     };
 })(jQuery);