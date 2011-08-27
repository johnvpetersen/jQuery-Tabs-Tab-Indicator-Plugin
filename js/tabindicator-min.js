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
(function(a){a.fn.tabindicator=function(b){function s(b){a(b).bind("mouseover",function(){a(this).addClass("ui-state-hover")});a(b).bind("mouseleave",function(){a(this).removeClass("ui-state-hover")})}function r(b){a(b).unbind("mouseover").unbind("mouseleave")}function q(b,c){var e=a(d).tabs("length")-1;m(b.target,e)}function p(a,b){o();n()}function o(){a(e).find(".tabIndicator").remove()}function n(){var b=-1;a(d).find("li").each(function(a,c){b++;m(d,b)})}function m(b,c){var d=a(a(b).find("li")[c]).find("a").attr("href");var f=a(b).tabs("option","selected");var g=a(b).tabs().data().tabs.options["event"];var h=a("<div></div>").addClass("tabIndicator ui-state-default");if(f==c){a(h).addClass("ui-state-active")}a(h).data("index",c);a(h).data("href",d);s(h);a(h).bind(g,function(){a(b).find(".tabIndicator").removeClass("ui-state-active");a(this).addClass("ui-state-active");a(b).tabs({selected:a(h).data("index")})});a(e).append(h);a(e).append(" ");a(e).width(a(e).find(".tabIndicator").length*30)}function l(b){var c=e.find(".tabIndicator");a(c).removeClass("ui-state-active");a(c[b]).addClass("ui-state-active")}function k(a,b){l(b.index)}function j(b){var c=e.find(".tabIndicator");a(c[b]).addClass("ui-state-disabled");r(c[b])}function i(b){var c=e.find(".tabIndicator");a(c[b]).removeClass("ui-state-disabled");s(c[b])}function h(a,b){i(b.index)}function g(a,b){j(b.index)}var c={tabDisplay:"show"};var d=this[0];var e=a(d).find(".tabIndicatorContainer");var f=a(d).attr("class").split(" ");if(a.inArray("ui-tabs",f)>-1&&e.length>0){if(b){a.extend(c,b)}if(c.tabDisplay=="hide"){a(d).find("ul").hide()}a(d).bind("tabsadd",function(a,b){q(a,b)});a(d).bind("tabsremove",function(a,b){p(a,b)});a(d).bind("tabsenable",function(a,b){h(a,b)});a(d).bind("tabsdisable",function(a,b){g(a,b)});a(d).bind("tabsselect",function(a,b){k(a,b)});n()}else{a(this).html("This Tab Indicator Plugin must be associated with a jQuery Tabs Instance and the tabs instance must have a DIV of class type tabIndicatorContainer.")}}})(jQuery)