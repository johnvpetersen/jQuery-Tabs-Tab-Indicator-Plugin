/*!
 * Tab Indicator jQueryUI Tabs Plugin Extension Tests v1.0.0
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

function disableTabTest() {

    module("When the tabs have been loaded");
    var tabs = $(getTabsHTMLFragment());
    loadTabIndicator(tabs, "show");

    $('#tabs').tabs('disable', 1);

    var indicators = tabs.find(".tabIndicator");

    var classList = $(indicators[1]).attr('class').split(" ")

    test("Given that the second tab is disabled", function () {
        expect(1);
        ok($.inArray("ui-state-disabled", classList), "The second indicator should be disabled");
    });

}


function selectIndicatorTest() {

    module("When the tabs have been loaded");
    var tabs = $(getTabsHTMLFragment());
    loadTabIndicator(tabs, "show");
    var indicators = tabs.find(".tabIndicator");

    $(indicators[1]).trigger("click");

    var selectedTab = $(tabs).tabs('option', 'selected');


    test("Given that the second indicator is selected", function () {
        expect(1);
        equal(selectedTab, 1, "The second tab should be selected");
    });





}


function selectTabTest() {

    module("When the tabs have been loaded");

    var tabs = $(getTabsHTMLFragment());
    loadTabIndicator(tabs, "show");

    $(tabs).tabs({
        selected: 1
    });

    var indicators = tabs.find(".tabIndicator");

    test("Given that the second tab is selected", function () {
        expect(1);
        var classList = $(indicators[1]).attr('class').split(" ");
        ok($.inArray("ui-state-active", classList), "The second indicator should be selected");
    });


}



function removeTabTest() {

    module("When removing a tab");

    var tabs = $(getTabsHTMLFragment());
    loadTabIndicator(tabs, "hide");
    var lastIndex = tabs.tabs("length") - 1
    $(tabs).tabs('remove', lastIndex);

    indicators = tabs.find(".tabIndicator");

    test("Given that a tab is removed", function () {
        expect(1);

        equal(indicators.length, 2, "There will be 2 tab indicators");
    });

}

function addTabTest() {

    module("When adding a tab");

    var tabs = $(getTabsHTMLFragment());
    loadTabIndicator(tabs, "hide");

    $(tabs).tabs('add', "newtab");

    var indicators = tabs.find(".tabIndicator");

    test("Given that three tabs were initially defined", function () {
        expect(1);

        equal(indicators.length, 4, "There will be four tab indicators");
    });

}


function loadTabIndicatorTestTabsHidden() {

    module("When loading the tab indicator (tabs hidden)");

    var tabs = $(getTabsHTMLFragment());
    loadTabIndicator(tabs, "hide");
    var indicators = tabs.find(".tabIndicator");

    test("Given that three tabs are defined", function () {
        expect(1);

        equal(indicators.length, 3, "There will be three tab indicators");
    });

    test("Given that the tabDisplay option was set to hide", function () {
        expect(1);

        var display = tabs.find("ul").css("display");

        equal(display, "none", "The tabs should be hidden");
    });

    test("Given that the first tab was selected", function () {
        expect(1);

        var classList = indicators.attr('class').split(" ");

        ok($.inArray("ui-state-active", classList), "The first indicator should also be selected");
    });


}

function loadTabIndicatorTestTabsDisplay() {
    module("When loading the tab indicator (tabs display)");

    var tabs = $(getTabsHTMLFragment());
    loadTabIndicator(tabs, "show");

    var indicators = tabs.find(".tabIndicator");


    test("Given that three tabs are defined", function () {
        expect(1);

        equal(indicators.length, 3, "There will be three tab indicators");
    });

    test("Given that the tabDisplay option was set to show", function () {
        expect(1);

        var display = tabs.find("ul").css("display");

        equal(display, "block", "The tabs should be displayed");
    });

    test("Given that the first tab was selected", function () {
        expect(1);

        var classList = indicators.attr('class').split(" ");

        ok($.inArray("ui-state-active", classList), "The first indicator should also be selected");
    });



}

function getTabsHTMLFragment() {

    return '<div id="tabs"><ul><li><a href="#tabs-1">First</a></li><li><a href="#tabs-2">Second</a></li><li><a href="#tabs-3">Third</a></li></ul><div id="tabs-1">Page 1</div><div id="tabs-2">Page 2</div><div id="tabs-3">Page 3</div><div class="tabIndicatorContainer"></div></div>'

}

function loadTabIndicator(tabs, tabDisplay) {

    $(tabs).tabs().tabindicator({
        tabDisplay: tabDisplay
    });


}