requirejs.config({
  enforceDefine: true,
  config: {
    moment: {
      noGlobal: true
    },
    logger: {
      enabled: true,
      level: 'error',
      appenders: ['console']
    },
    stdnav: {
    
    },
    i18n: {
      paths: {
        'js-sdk': 'bower_components/js-sdk'
      }
    }
  },
  paths: {
    request: 'bower_components/jrs-ui/src/transport/request',
    requestSettings: 'bower_components/jrs-ui/src/config/requestSettings',
    backbone: 'bower_components/jrs-ui/src/config/Backbone',
    'underscore.string': 'bower_components/underscore.string/lib/underscore.string',
    'requirejs.plugin.css': 'bower_components/require-css/css',
    'tv4.original': 'bower_components/tv4/tv4',
    'backbone.validation.original': 'bower_components/backbone-validation/dist/backbone-validation-amd',
    jquery: 'bower_components/jquery/dist/jquery',
    'lodash.custom': 'bower_components/lodash.custom/dist/lodash.custom',
    xregexp: 'bower_components/xregexp/xregexp-all',
    momentTimezone: 'bower_components/moment-timezone/builds/moment-timezone-with-data',
    moment: 'bower_components/moment/min/moment-with-locales',
    domReady: 'bower_components/requirejs-domready/domReady',
    xdm: 'bower_components/xdm/artifacts/v2.4.19/easyXDM.jasper',
    base64: 'bower_components/js-base64/base64',
    'backbone.epoxy.original': 'bower_components/backbone.epoxy/backbone.epoxy',
    'backbone.marionette': 'bower_components/backbone.marionette/lib/backbone.marionette',
    'backbone.wreqr': 'bower_components/backbone.wreqr/lib/backbone.wreqr',
    'backbone.babysitter': 'bower_components/backbone.babysitter/lib/backbone.babysitter',
    'jquery-ui': 'bower_components/jquery-ui/ui',
    'perfect-scrollbar': 'bower_components/perfect-scrollbar/js/perfect-scrollbar.jquery',
    'jquery.ui.mouse.touch': 'bower_components/jquery.ui.touch-punch/jquery.ui.touch-punch',
    'jquery.selection': 'bower_components/jquery.selection/src/jquery.selection',
    'jquery.urldecoder': 'bower_components/jquery.urldecoder/jquery.urldecoder',
    'jquery.jcryption': 'bower_components/jCryption/jquery.jcryption',
    underscore: 'bower_components/js-sdk/src/common/config/lodashTemplateSettings',
    tv4: 'bower_components/js-sdk/src/common/config/tv4Settings',
    'backbone.validation': 'bower_components/js-sdk/src/common/extension/backboneValidationExtension',
    'backbone.epoxy': 'bower_components/js-sdk/src/common/extension/epoxyExtension',
    bundle: 'bower_components/jrs-ui/src/plugin/bundle',
    text: 'bower_components/jrs-ui/src/plugin/text',
    css: 'bower_components/js-sdk/src/common/plugin/css',
    csslink: 'bower_components/js-sdk/src/common/plugin/csslink',
    vizShim: 'bower_components/js-sdk/src/common/plugin/vizShim',
    logger: 'bower_components/js-sdk/src/common/logging/logger',
    stdnav: 'bower_components/js-sdk/src/common/stdnav/stdnav',
    stdnavPluginAnchor: 'bower_components/js-sdk/src/common/stdnav/plugins/stdnavPluginAnchor',
    stdnavPluginButton: 'bower_components/js-sdk/src/common/stdnav/plugins/stdnavPluginButton',
    stdnavPluginForms: 'bower_components/js-sdk/src/common/stdnav/plugins/stdnavPluginForms',
    stdnavPluginGrid: 'bower_components/js-sdk/src/common/stdnav/plugins/stdnavPluginGrid',
    stdnavPluginList: 'bower_components/js-sdk/src/common/stdnav/plugins/stdnavPluginList',
    stdnavPluginTable: 'bower_components/js-sdk/src/common/stdnav/plugins/stdnavPluginTable',
    async: 'bower_components/requirejs-plugins/src/async',
    common: 'bower_components/js-sdk/src/common',
    components: 'bower_components/js-sdk/src/components',
    json3: 'bower_components/json3/lib/json3',
    highcharts: 'bower_components/highcharts-pack/highcharts/highcharts',
    'highcharts-more': 'bower_components/highcharts-pack/highcharts/highcharts-more',
    'highcharts-heatmap': 'bower_components/highcharts-pack/highcharts/heatmap',
    'highcharts-treemap': 'bower_components/highcharts-pack/highcharts/treemap',
    'highcharts-grouped-categories': 'bower_components/highcharts-pack/highcharts/grouped-categories',
    'highcharts-solid-gauge': 'bower_components/highcharts-pack/highcharts/solid-gauge',
    'highcharts-3d': 'bower_components/highcharts-pack/highcharts/highcharts-3d',
    mustache: 'bower_components/mustache/mustache',
    'bi/chart': 'bower_components/bi-chart/src',
    backboneNoConflict: 'bower_components/js-sdk/src/common/config/backboneNoConflict',
    'bi/report': 'bower_components/bi-report/src/bi/report',
    'bi/control': 'bower_components/bi-control/src/bi/control',
    'bi/repository': 'bower_components/bi-repository/src/bi/repository',
    'adhoc/chart': 'bower_components/bi-report/src/adhoc/chart',
    fusioncharts: '../fusion/fusioncharts',
    'backbone.original': 'bower_components/backbone/backbone',
    'backbone.stickit': 'bower_components/backbone.stickit/backbone.stickit',
    'backbone-deep-model': 'bower_components/backbone-deep-model/distribution/deep-model',
    restResource: 'bower_components/jrs-ui/src/plugin/restResource',
    settings: 'bower_components/jrs-ui/src/plugin/settings',
    'config/datepickerSettings': 'bower_components/jrs-ui/src/config/datepickerSettings',
    'config/timepickerSettings': 'bower_components/jrs-ui/src/config/timepickerSettings',
    heatmap: 'bower_components/highcharts-pack/highcharts/heatmap',
    'grouped-categories': 'bower_components/highcharts-pack/highcharts/grouped-categories',
    'report.global': 'bower_components/jrs-ui/src/report.global',
    ReportRequireJsConfig: '../getRequirejsConfig.html?noext',
    'ireport.highcharts.default.service': '../reportresource?resource=com/jaspersoft/jasperreports/highcharts/charts/services/default.service.js',
    'jasperreports-loader': 'reportViewer/jasperreports-loader',
    fakeXhrFactory: 'bower_components/jrs-ui/src/transport/fakeXhrFactory',
    'requirejs.plugin.text': 'bower_components/requirejs-text/text',
    prototype: 'bower_components/prototype/dist/prototype',
    builder: 'bower_components/scriptaculous/src/builder',
    effects: 'bower_components/scriptaculous/src/effects',
    dragdrop: 'bower_components/scriptaculous/src/dragdrop',
    iscroll: 'bower_components/iscroll/src/iscroll',
    'dragdrop.extra': 'bower_components/dragdropextra/dragdropextra',
    encoding: 'bower_components/encoding/encoding',
    touchcontroller: 'bower_components/jrs-ui/src/touch.controller',
    'components.toolbar': 'bower_components/jrs-ui/src/components.toolbarButtons.events',
    'components.list': 'bower_components/jrs-ui/src/list.base',
    'components.dynamicTree': 'bower_components/jrs-ui/src/dynamicTree.treesupport',
    'component.repository.search': 'repository.search.pro',
    'report.view': 'report.view.pro',
    stdnavPluginActionMenu: 'bower_components/jrs-ui/src/stdnav/plugins/stdnavPluginActionMenu',
    stdnavPluginDynamicList: 'bower_components/jrs-ui/src/stdnav/plugins/stdnavPluginDynamicList',
    'wcf.scroll': '../wcf/scroller',
    dateFormatter: 'lib/dateFormatter-patched',
    'dragdrop.extra.v0.5': 'lib/dragdrop.extra-0.5-patched',
    'bi/dashboard': 'bower_components/bi-dashboard/src/bi/dashboard',
    'bi/adhoc': 'bower_components/bi-adhoc/src/bi/adhoc',
    dashboard: 'bower_components/bi-dashboard/src/dashboard',
    'dashboard/hyperlink/handler/dashboardHyperlinkHandlerLocalAnchor': 'bower_components/bi-dashboard/src/dashboard/hyperlink/handler/dashboardHyperlinkHandlerLocalAnchor',
    'dashboard/hyperlink/handler/dashboardHyperlinkHandlerLocalPage': 'bower_components/bi-dashboard/src/dashboard/hyperlink/handler/dashboardHyperlinkHandlerLocalPage',
    'dashboard/hyperlink/handler/dashboardHyperlinkHandlerReference': 'bower_components/bi-dashboard/src/dashboard/hyperlink/handler/dashboardHyperlinkHandlerReference',
    'dashboard/hyperlink/handler/dashboardHyperlinkHandlerRemoteAnchor': 'bower_components/bi-dashboard/src/dashboard/hyperlink/handler/dashboardHyperlinkHandlerRemoteAnchor',
    'dashboard/hyperlink/handler/dashboardHyperlinkHandlerRemotePage': 'bower_components/bi-dashboard/src/dashboard/hyperlink/handler/dashboardHyperlinkHandlerRemotePage',
    'dashboard/hyperlink/handler/dashboardHyperlinkHandlerReportExecution': 'bower_components/bi-dashboard/src/dashboard/hyperlink/handler/dashboardHyperlinkHandlerReportExecution',
    'dashboard/hyperlink/handler/dashboardHyperlinkHandlerAdhocExecution': 'bower_components/bi-dashboard/src/dashboard/hyperlink/handler/dashboardHyperlinkHandlerAdhocExecution',
    'adhoc/api': 'bower_components/bi-adhoc/src/adhoc/api',
    'adhoc/common': 'bower_components/bi-adhoc/src/adhoc/common',
    adhocHighchartsSettingService: 'adhoc/intelligentChart/jr/jive/adhocHighchartsSettingService',
    'transport/xdmRequest': 'bower_components/jrs-ui/src/transport/xdmRequest',
    'transport/xhrRequest': 'bower_components/jrs-ui/src/transport/xhrRequest',
    'config/dateAndTimeSettings': 'bower_components/jrs-ui/src/config/dateAndTimeSettings',
    jasper: 'loader/jasper',
    loader: 'loader',
    visualize: 'client/visualize',
    BiComponentFactory: 'client/BiComponentFactory',
    attributes: 'bower_components/jrs-ui/src/attributes',
    serverSettingsCommon: 'bower_components/jrs-ui/src/serverSettingsCommon',
    tenantImportExport: 'bower_components/jrs-ui/src/tenantImportExport',
    dataSource: 'bower_components/jrs-ui/src/dataSource',
    addResource: 'bower_components/jrs-ui/src/addResource',
    administer: 'bower_components/jrs-ui/src/administer',
    manage: 'bower_components/jrs-ui/src/manage',
    encrypt: 'bower_components/jrs-ui/src/encrypt',
    system: 'bower_components/jrs-ui/src/system',
    messages: 'bower_components/jrs-ui/src/messages',
    repository: 'bower_components/jrs-ui/src/repository',
    reportViewer: 'bower_components/jrs-ui/src/reportViewer',
    scheduler: 'bower_components/jrs-ui/src/scheduler',
    login: 'bower_components/jrs-ui/src/login',
    olapView: 'bower_components/jrs-ui/src/olapView',
    'commons.minimal.main': 'bower_components/jrs-ui/src/commons.minimal.main',
    'commons.bare.main': 'bower_components/jrs-ui/src/commons.bare.main',
    namespace: 'bower_components/jrs-ui/src/namespace',
    'jpivot.jaPro': 'bower_components/jrs-ui/src/jpivot.jaPro',
    'utils.common': 'bower_components/jrs-ui/src/utils.common',
    'utils.animation': 'bower_components/jrs-ui/src/utils.animation',
    'tools.truncator': 'bower_components/jrs-ui/src/tools.truncator',
    'tools.drag': 'bower_components/jrs-ui/src/tools.drag',
    'actionModel.modelGenerator': 'bower_components/jrs-ui/src/actionModel.modelGenerator',
    'actionModel.primaryNavigation': 'bower_components/jrs-ui/src/actionModel.primaryNavigation',
    'core.layout': 'bower_components/jrs-ui/src/core.layout',
    'home.simple': 'bower_components/jrs-ui/src/home.simple',
    'ajax.mock': 'bower_components/jrs-ui/src/ajax.mock',
    'core.ajax': 'bower_components/jrs-ui/src/core.ajax',
    'core.accessibility': 'bower_components/jrs-ui/src/core.accessibility',
    'core.events.bis': 'bower_components/jrs-ui/src/core.events.bis',
    'core.key.events': 'bower_components/jrs-ui/src/core.key.events',
    errorPage: 'bower_components/jrs-ui/src/errorPage',
    'components.templateengine': 'bower_components/jrs-ui/src/components.templateengine',
    'components.dialogs': 'bower_components/jrs-ui/src/components.dialogs',
    'components.dialog': 'bower_components/jrs-ui/src/components.dialog',
    'components.dependent.dialog': 'bower_components/jrs-ui/src/components.dependent.dialog',
    'components.searchBox': 'bower_components/jrs-ui/src/components.searchBox',
    'components.toolbarButtons': 'bower_components/jrs-ui/src/components.toolbarButtons',
    'components.calendarInput': 'bower_components/jrs-ui/src/components.calendarInput',
    'messages/list/messageList': 'bower_components/jrs-ui/src/messages/list/messageList',
    'messages/details/messageDetails': 'bower_components/jrs-ui/src/messages/details/messageDetails',
    'components.tooltip': 'bower_components/jrs-ui/src/components.tooltip',
    'components.utils': 'bower_components/jrs-ui/src/components.utils',
    heartbeat: 'bower_components/jrs-ui/src/heartbeat',
    'components.heartbeat': 'bower_components/jrs-ui/src/components.heartbeat',
    'components.customTooltip': 'bower_components/jrs-ui/src/components.customTooltip',
    'components.pickers': 'bower_components/jrs-ui/src/components.pickers',
    'controls.core': 'bower_components/jrs-ui/src/controls.core',
    localContext: 'bower_components/jrs-ui/src/localContext',
    'controls.dataconverter': 'bower_components/jrs-ui/src/controls.dataconverter',
    'controls.datatransfer': 'bower_components/jrs-ui/src/controls.datatransfer',
    'controls.basecontrol': 'bower_components/jrs-ui/src/controls.basecontrol',
    'controls.base': 'bower_components/jrs-ui/src/controls.base',
    'repository.search.globalSearchBoxInit': 'bower_components/jrs-ui/src/repository.search.globalSearchBoxInit',
    'controls.components': 'bower_components/jrs-ui/src/controls.components',
    'controls.viewmodel': 'bower_components/jrs-ui/src/controls.viewmodel',
    'controls.logging': 'bower_components/jrs-ui/src/controls.logging',
    'controls.controller': 'bower_components/jrs-ui/src/controls.controller',
    'components.about': 'bower_components/jrs-ui/src/components.about',
    'dynamicTree.tree': 'bower_components/jrs-ui/src/dynamicTree.tree',
    'dynamicTree.treenode': 'bower_components/jrs-ui/src/dynamicTree.treenode',
    'dynamicTree.events': 'bower_components/jrs-ui/src/dynamicTree.events',
    'dynamicTree.utils': 'bower_components/jrs-ui/src/dynamicTree.utils',
    'components.webHelp': 'bower_components/jrs-ui/src/components.webHelp',
    'components.loginBox': 'bower_components/jrs-ui/src/components.loginBox',
    'components.tabs': 'bower_components/jrs-ui/src/components.tabs',
    'login.form': 'bower_components/jrs-ui/src/login.form',
    'tools.infiniteScroll': 'bower_components/jrs-ui/src/tools.infiniteScroll',
    'mng.common': 'bower_components/jrs-ui/src/mng.common',
    'mng.main': 'bower_components/jrs-ui/src/mng.main',
    'mng.common.actions': 'bower_components/jrs-ui/src/mng.common.actions',
    'org.role.mng.main': 'bower_components/jrs-ui/src/org.role.mng.main',
    'org.role.mng.actions': 'bower_components/jrs-ui/src/org.role.mng.actions',
    'org.role.mng.components': 'bower_components/jrs-ui/src/org.role.mng.components',
    'org.user.mng.main': 'bower_components/jrs-ui/src/org.user.mng.main',
    'org.user.mng.actions': 'bower_components/jrs-ui/src/org.user.mng.actions',
    'org.user.mng.components': 'bower_components/jrs-ui/src/org.user.mng.components',
    'administer.base': 'bower_components/jrs-ui/src/administer.base',
    'administer.logging': 'bower_components/jrs-ui/src/administer.logging',
    'administer.options': 'bower_components/jrs-ui/src/administer.options',
    'repository.search.components': 'bower_components/jrs-ui/src/repository.search.components',
    'repository.search.actions': 'bower_components/jrs-ui/src/repository.search.actions',
    'repository.search.main': 'bower_components/jrs-ui/src/repository.search.main',
    'controls.report': 'bower_components/jrs-ui/src/controls.report',
    'resource.base': 'bower_components/jrs-ui/src/resource.base',
    'resource.locate': 'bower_components/jrs-ui/src/resource.locate',
    'resource.dataSource': 'bower_components/jrs-ui/src/resource.dataSource',
    'resource.dataSource.jdbc': 'bower_components/jrs-ui/src/resource.dataSource.jdbc',
    'resource.dataSource.jndi': 'bower_components/jrs-ui/src/resource.dataSource.jndi',
    'resource.dataSource.bean': 'bower_components/jrs-ui/src/resource.dataSource.bean',
    'resource.dataSource.aws': 'bower_components/jrs-ui/src/resource.dataSource.aws',
    'resource.dataSource.virtual': 'bower_components/jrs-ui/src/resource.dataSource.virtual',
    'resource.dataType': 'bower_components/jrs-ui/src/resource.dataType',
    'resource.dataType.locate': 'bower_components/jrs-ui/src/resource.dataType.locate',
    'resource.listOfValues.locate': 'bower_components/jrs-ui/src/resource.listOfValues.locate',
    'resource.listofvalues': 'bower_components/jrs-ui/src/resource.listofvalues',
    'resource.inputControl': 'bower_components/jrs-ui/src/resource.inputControl',
    'resource.add.files': 'bower_components/jrs-ui/src/resource.add.files',
    'resource.add.mondrianxmla': 'bower_components/jrs-ui/src/resource.add.mondrianxmla',
    'resource.query': 'bower_components/jrs-ui/src/resource.query',
    'resource.report': 'bower_components/jrs-ui/src/resource.report',
    'resource.reportResourceNaming': 'bower_components/jrs-ui/src/resource.reportResourceNaming',
    'resource.inputControl.locate': 'bower_components/jrs-ui/src/resource.inputControl.locate',
    'resource.query.locate': 'bower_components/jrs-ui/src/resource.query.locate',
    'resource.analysisView': 'bower_components/jrs-ui/src/resource.analysisView',
    'resource.analysisConnection.mondrian.locate': 'bower_components/jrs-ui/src/resource.analysisConnection.mondrian.locate',
    'resource.analysisConnection.xmla.locate': 'bower_components/jrs-ui/src/resource.analysisConnection.xmla.locate',
    'resource.analysisConnection': 'bower_components/jrs-ui/src/resource.analysisConnection',
    'resource.analysisConnection.dataSource.locate': 'bower_components/jrs-ui/src/resource.analysisConnection.dataSource.locate',
    'addinputcontrol.queryextra': 'bower_components/jrs-ui/src/addinputcontrol.queryextra',
    'org.rootObjectModifier': 'bower_components/jrs-ui/src/org.rootObjectModifier',
    'report.schedule': 'bower_components/jrs-ui/src/report.schedule',
    'report.schedule.list': 'bower_components/jrs-ui/src/report.schedule.list',
    'report.schedule.setup': 'bower_components/jrs-ui/src/report.schedule.setup',
    'report.schedule.output': 'bower_components/jrs-ui/src/report.schedule.output',
    'report.schedule.params': 'bower_components/jrs-ui/src/report.schedule.params',
    'report.view.base': 'bower_components/jrs-ui/src/report.view.base',
    'report.view.runtime': 'bower_components/jrs-ui/src/report.view.runtime',
    'util/historyHelper': 'bower_components/jrs-ui/src/util/historyHelper'
  },
  shim: {
    jquery: {
      init: function () {
                return this.jQuery.noConflict();
            }
    },
    momentTimezone: {
      deps: ['moment']
    },
    base64: {
      exports: 'Base64',
      init: function () {
                return this.Base64.noConflict();
            }
    },
    'jquery.selection': {
      deps: ['jquery'],
      exports: 'jQuery'
    },
    'jquery.doubletap': {
      deps: ['jquery'],
      exports: 'jQuery'
    },
    'jquery.urldecoder': {
      deps: ['jquery'],
      exports: 'jQuery'
    },
    xregexp: {
      exports: 'XRegExp'
    },
    'jquery.jcryption': {
      deps: ['jquery'],
      exports: 'jQuery'
    },
    highcharts: {
      deps: ['jquery'],
      exports: 'Highcharts'
    },
    'highcharts-grouped-categories': {
      deps: ['highcharts'],
      exports: 'Highcharts'
    },
    'highcharts-more': {
      deps: ['highcharts'],
      exports: 'Highcharts'
    },
    'highcharts-heatmap': {
      deps: ['highcharts'],
      exports: 'Highcharts'
    },
    'highcharts-treemap': {
      deps: ['highcharts-heatmap'],
      exports: 'Highcharts'
    },
    'highcharts-solid-gauge': {
      deps: ['highcharts-more'],
      exports: 'Highcharts'
    },
    'highcharts-3d': {
      deps: ['highcharts'],
      exports: 'Highcharts'
    },
    mustache: {
      exports: 'Mustache'
    },
    'grouped-categories': {
      deps: ['highcharts'],
      exports: 'Highcharts'
    },
    heatmap: {
      deps: ['highcharts'],
      exports: 'Highcharts'
    },
    'ireport.highcharts.default.service': {
      deps: ['highcharts-more'],
      exports: 'JRDefaultHighchartsSettingService'
    },
    jasper: {
      exports: 'jasper',
      deps: ['xdm','logger']
    },
    prototype: {
      exports: '__dollar_sign__'
    },
    builder: {
      deps: ['prototype'],
      exports: 'Builder'
    },
    effects: {
      deps: ['prototype'],
      exports: 'Effect'
    },
    dragdrop: {
      deps: ['prototype','effects'],
      exports: 'Draggable'
    },
    'dragdrop.extra': {
      deps: ['dragdrop','jquery'],
      exports: 'Draggable'
    },
    iscroll: {
      exports: 'iScroll'
    },
    'wcf.scroll': {
      exports: 'document'
    },
    ReportRequireJsConfig: {
      exports: 'window'
    },
    'fakeActionModel.primaryNavigation': {
      exports: 'primaryNavModule'
    },
    namespace: {
      exports: 'jaspersoft'
    },
    touchcontroller: {
      deps: ['jquery'],
      exports: 'TouchController'
    },
    'jpivot.jaPro': {
      deps: ['prototype','utils.common'],
      exports: 'bWidth'
    },
    'utils.common': {
      deps: ['prototype','jquery','underscore'],
      exports: 'jQuery'
    },
    'utils.animation': {
      deps: ['prototype','effects'],
      exports: 'jQuery'
    },
    'tools.truncator': {
      deps: ['prototype'],
      exports: 'jQuery'
    },
    'tools.drag': {
      deps: ['jquery','prototype'],
      exports: 'Dragger'
    },
    'actionModel.modelGenerator': {
      deps: ['prototype','utils.common','core.events.bis'],
      exports: 'actionModel'
    },
    'actionModel.primaryNavigation': {
      deps: ['actionModel.modelGenerator'],
      exports: 'primaryNavModule'
    },
    'core.layout': {
      deps: ['jquery','prototype','utils.common','dragdrop.extra','tools.truncator','iscroll','components.webHelp'],
      exports: 'layoutModule'
    },
    'home.simple': {
      deps: ['prototype','components.webHelp'],
      exports: 'home'
    },
    'ajax.mock': {
      deps: ['jquery'],
      exports: 'fakeResponce'
    },
    'core.ajax': {
      deps: ['jquery','prototype','utils.common','builder','namespace'],
      exports: 'ajax'
    },
    'core.accessibility': {
      deps: ['prototype','components.list','actionModel.modelGenerator','core.events.bis'],
      exports: 'accessibilityModule'
    },
    'core.events.bis': {
      deps: ['jquery','prototype','utils.common','core.layout','components.tooltip'],
      exports: 'buttonManager'
    },
    'core.key.events': {
      deps: ['jquery','prototype','utils.common','core.layout'],
      exports: 'keyManager'
    },
    'components.templateengine': {
      deps: ['namespace','jquery','underscore','mustache'],
      exports: 'jaspersoft.components.templateEngine'
    },
    'components.dialogs': {
      deps: ['jquery','prototype','underscore','utils.common','utils.animation','core.layout'],
      exports: 'dialogs'
    },
    'components.dependent.dialog': {
      deps: ['prototype','components.dialogs','jquery','components.list'],
      exports: 'dialogs.dependentResources'
    },
    'components.list': {
      deps: ['jquery','prototype','touchcontroller','utils.common','dragdrop.extra','core.events.bis'],
      exports: 'dynamicList'
    },
    'components.searchBox': {
      deps: ['prototype','utils.common','core.events.bis'],
      exports: 'SearchBox'
    },
    'components.toolbarButtons': {
      deps: ['jquery','prototype'],
      exports: 'toolbarButtonModule'
    },
    'messages/list/messageList': {
      deps: ['prototype','components.list','components.toolbar','core.layout'],
      exports: 'messageListModule'
    },
    'messages/details/messageDetails': {
      deps: ['prototype','components.toolbar','core.layout'],
      exports: 'messageDetailModule'
    },
    'components.toolbar': {
      deps: ['jquery','prototype','utils.common','components.toolbarButtons'],
      exports: 'toolbarButtonModule'
    },
    'components.tooltip': {
      deps: ['jquery','prototype','underscore','utils.common','core.layout'],
      exports: 'JSTooltip'
    },
    'components.dynamicTree': {
      deps: ['prototype','dynamicTree.tree','dynamicTree.treenode','dynamicTree.events','core.ajax'],
      exports: 'dynamicTree'
    },
    'components.utils': {
      deps: ['jquery','underscore','mustache','components.dialogs','core.ajax'],
      exports: 'jaspersoft.components.utils'
    },
    heartbeat: {
      deps: ['jquery'],
      exports: 'checkHeartBeat'
    },
    'components.heartbeat': {
      deps: ['prototype','core.ajax'],
      exports: 'heartbeat'
    },
    'components.customTooltip': {
      deps: [],
      exports: 'customTooltip'
    },
    'components.pickers': {
      deps: ['utils.common','components.dialogs','core.layout','core.events.bis','prototype','jquery','dynamicTree.utils'],
      exports: 'picker'
    },
    'controls.core': {
      deps: ['jquery','underscore','mustache','components.dialogs','namespace','controls.logging'],
      exports: 'JRS.Controls'
    },
    localContext: {
      exports: 'window'
    },
    'controls.dataconverter': {
      deps: ['underscore','controls.core'],
      exports: 'JRS.Controls'
    },
    'controls.datatransfer': {
      deps: ['jquery','controls.core','backbone','controls.dataconverter'],
      exports: 'JRS.Controls'
    },
    'controls.basecontrol': {
      deps: ['jquery','underscore','controls.core'],
      exports: 'JRS.Controls'
    },
    'controls.base': {
      deps: ['jquery','underscore','utils.common'],
      exports: 'ControlsBase'
    },
    'repository.search.globalSearchBoxInit': {
      deps: ['prototype','actionModel.primaryNavigation','components.searchBox'],
      exports: 'globalSearchBox'
    },
    'report.view.base': {
      deps: ['jquery','underscore','controls.basecontrol','controls.base','core.ajax'],
      exports: 'Report'
    },
    'controls.components': {
      deps: ['jquery','underscore','controls.basecontrol','components/singleSelect/view/SingleSelect','components/multiSelect/view/MultiSelect','components/singleSelect/dataprovider/CacheableDataProvider','common/util/parse/date'],
      exports: 'JRS.Controls'
    },
    'controls.viewmodel': {
      deps: ['jquery','underscore','controls.core','controls.basecontrol','jquery-ui/jquery.ui.sortable'],
      exports: 'JRS.Controls'
    },
    'controls.logging': {
      deps: ['namespace'],
      exports: 'JRS'
    },
    'controls.controller': {
      deps: ['jquery','underscore','controls.core','controls.datatransfer','controls.viewmodel','controls.components','report.view.base','jquery.urldecoder'],
      exports: 'JRS.Controls'
    },
    'components.about': {
      deps: ['components.dialogs'],
      exports: 'about'
    },
    'dynamicTree.tree': {
      deps: ['prototype','dragdrop.extra','touchcontroller','utils.common','core.layout'],
      exports: 'dynamicTree'
    },
    'dynamicTree.treenode': {
      deps: ['prototype','underscore','dynamicTree.tree'],
      exports: 'dynamicTree'
    },
    'dynamicTree.events': {
      deps: ['prototype','dynamicTree.tree'],
      exports: 'dynamicTree'
    },
    'dynamicTree.utils': {
      deps: ['components.dynamicTree','touchcontroller','dynamicTree.treenode'],
      exports: 'dynamicTree'
    },
    'components.webHelp': {
      deps: ['jrs.configs'],
      exports: 'webHelpModule'
    },
    'components.loginBox': {
      deps: ['prototype','components.webHelp','components.dialogs','components.utils','core.layout'],
      exports: 'loginBox'
    },
    'components.tabs': {
      deps: ['prototype'],
      exports: 'tabModule'
    },
    'login.form': {
      deps: ['jquery','components.loginBox','jrs.configs','common/util/encrypter'],
      exports: 'jQuery'
    },
    'tools.infiniteScroll': {
      deps: ['prototype','utils.common'],
      exports: 'InfiniteScroll'
    },
    'mng.common': {
      deps: ['jquery','underscore','prototype','utils.common','tools.infiniteScroll','components.list','components.dynamicTree','components.toolbar','common/component/dialog/ConfirmationDialog'],
      exports: 'orgModule'
    },
    'mng.main': {
      deps: ['jquery','mng.common'],
      exports: 'orgModule'
    },
    'mng.common.actions': {
      deps: ['jquery','prototype','mng.common'],
      exports: 'orgModule'
    },
    'org.role.mng.main': {
      deps: ['jquery','mng.main','components.webHelp'],
      exports: 'orgModule'
    },
    'org.role.mng.actions': {
      deps: ['org.role.mng.main'],
      exports: 'orgModule'
    },
    'org.role.mng.components': {
      deps: ['jquery','org.role.mng.main'],
      exports: 'orgModule'
    },
    'org.user.mng.main': {
      deps: ['jquery','mng.main'],
      exports: 'orgModule'
    },
    'org.user.mng.actions': {
      deps: ['jquery','org.role.mng.main','org.user.mng.main','mng.common.actions'],
      exports: 'orgModule'
    },
    'org.user.mng.components': {
      deps: ['jquery','org.user.mng.main','mng.common.actions','common/util/encrypter'],
      exports: 'orgModule'
    },
    'administer.base': {
      deps: ['prototype','underscore','core.ajax'],
      exports: 'Administer'
    },
    'administer.logging': {
      deps: ['administer.base','core.layout','components.webHelp','utils.common'],
      exports: 'logging'
    },
    'administer.options': {
      deps: ['administer.base','core.layout','components.webHelp','utils.common'],
      exports: 'Options'
    },
    'repository.search.components': {
      deps: ['repository.search.main','prototype','utils.common','dynamicTree.utils','tools.infiniteScroll','tools.infiniteScroll','tenantImportExport/export/view/ExportDialogView','tenantImportExport/export/enum/exportTypesEnum'],
      exports: 'GenerateResource'
    },
    'component.repository.search': {
      deps: ['prototype','core.ajax','actionModel.modelGenerator','utils.common','repository.search.actions','core.ajax'],
      exports: 'repositorySearch'
    },
    'repository.search.actions': {
      deps: ['repository.search.main','repository.search.components','prototype','actionModel.modelGenerator','utils.common','core.ajax'],
      exports: 'repositorySearch'
    },
    'repository.search.main': {
      deps: ['prototype','actionModel.modelGenerator','utils.common','common/component/dialog/AlertDialog'],
      exports: 'repositorySearch'
    },
    'report.global': {
      exports: 'jasperreports'
    },
    'report.view': {
      deps: ['report.view.runtime'],
      exports: 'Report'
    },
    'controls.report': {
      deps: ['controls.controller','report.view.base','controls.options'],
      exports: 'Controls'
    },
    'resource.base': {
      deps: ['prototype','utils.common','core.layout'],
      exports: 'resource'
    },
    'resource.locate': {
      deps: ['resource.base','jquery','components.pickers'],
      exports: 'resourceLocator'
    },
    'resource.dataSource': {
      deps: ['jquery','underscore','backbone','core.ajax','components.dialogs','utils.common','resource.locate'],
      exports: 'window.ResourceDataSource'
    },
    'resource.dataSource.jdbc': {
      deps: ['resource.dataSource','mustache','components.dialog','core.events.bis','xregexp'],
      exports: 'window.JdbcDataSourceEditor'
    },
    'resource.dataSource.jndi': {
      deps: ['resource.dataSource','mustache','components.dialog','core.events.bis','xregexp'],
      exports: 'window.JndiResourceDataSource'
    },
    'resource.dataSource.bean': {
      deps: ['resource.dataSource','mustache','components.dialog','core.events.bis','xregexp'],
      exports: 'window.BeanResourceDataSource'
    },
    'resource.dataSource.aws': {
      deps: ['resource.dataSource.jdbc'],
      exports: 'window.AwsResourceDataSource'
    },
    'resource.dataSource.virtual': {
      deps: ['resource.dataSource','mustache','components.dialog','core.events.bis','xregexp','components.dependent.dialog'],
      exports: 'window.VirtualResourceDataSource'
    },
    'resource.dataType': {
      deps: ['resource.base','prototype','utils.common'],
      exports: 'resourceDataType'
    },
    'resource.dataType.locate': {
      deps: ['resource.locate'],
      exports: 'resourceDataTypeLocate'
    },
    'resource.listOfValues.locate': {
      deps: ['resource.locate'],
      exports: 'resourceListOfValuesLocate'
    },
    'resource.listofvalues': {
      deps: ['resource.base','utils.common'],
      exports: 'resourceListOfValues'
    },
    'resource.inputControl': {
      deps: ['resource.base','prototype','utils.common'],
      exports: 'addInputControl'
    },
    'resource.add.files': {
      deps: ['resource.locate','prototype','utils.common','core.events.bis'],
      exports: 'addFileResource'
    },
    'resource.add.mondrianxmla': {
      deps: ['resource.base','components.pickers','prototype','utils.common'],
      exports: 'resourceMondrianXmla'
    },
    'resource.query': {
      deps: ['resource.base','prototype','utils.common'],
      exports: 'resourceQuery'
    },
    'resource.report': {
      deps: ['resource.locate','prototype','jquery','utils.common'],
      exports: 'resourceReport'
    },
    'resource.reportResourceNaming': {
      deps: ['resource.base','components.pickers','prototype','utils.common'],
      exports: 'resourceReportResourceNaming'
    },
    'resource.inputControl.locate': {
      deps: ['resource.locate','core.events.bis','prototype'],
      exports: 'inputControl'
    },
    'resource.query.locate': {
      deps: ['resource.locate','prototype'],
      exports: 'resourceQueryLocate'
    },
    'resource.analysisView': {
      deps: ['resource.base','utils.common','prototype'],
      exports: 'resourceAnalysisView'
    },
    'resource.analysisConnection.mondrian.locate': {
      deps: ['resource.locate','prototype'],
      exports: 'resourceMondrianLocate'
    },
    'resource.analysisConnection.xmla.locate': {
      deps: ['resource.locate','prototype'],
      exports: 'resourceOLAPLocate'
    },
    'resource.analysisConnection': {
      deps: ['resource.base','prototype','components.pickers','utils.common'],
      exports: 'resourceAnalysisConnection'
    },
    'resource.analysisConnection.dataSource.locate': {
      deps: ['resource.locate'],
      exports: 'resourceDataSourceLocate'
    },
    'addinputcontrol.queryextra': {
      deps: ['prototype','utils.common','core.events.bis','core.layout'],
      exports: 'addListOfValues'
    },
    'org.rootObjectModifier': {
      deps: [],
      exports: 'rom_init'
    },
    'report.schedule': {
      deps: ['prototype'],
      exports: 'Schedule'
    },
    'report.schedule.list': {
      deps: ['prototype'],
      exports: 'ScheduleList'
    },
    'report.schedule.setup': {
      deps: ['prototype'],
      exports: 'ScheduleSetup'
    },
    'report.schedule.output': {
      deps: ['prototype'],
      exports: 'ScheduleOutput'
    },
    'report.schedule.params': {
      deps: ['prototype','controls.controller'],
      exports: 'ScheduleParams'
    },
    'backbone.original': {
      deps: ['underscore'],
      exports: 'Backbone',
      init: null
    },
    dateFormatter: {
      exports: 'window'
    },
    'dragdrop.extra.v0.5': {
      deps: ['dragdrop.extra'],
      exports: 'Draggable'
    },
    'controls.dashboard': {
      deps: ['jquery','underscore','controls.controller'],
      exports: 'JRS.Controls'
    },
    'controls.options': {
      deps: ['namespace','jquery','underscore','controls.core','controls.basecontrol','controls.base'],
      exports: 'JRS.Controls'
    },
    'org.mng.main': {
      deps: ['jquery','mng.main'],
      exports: 'orgModule'
    },
    'org.mng.actions': {
      deps: ['jquery','org.mng.main','mng.common.actions'],
      exports: 'orgModule'
    },
    'org.mng.components': {
      deps: ['jquery','org.mng.main','mng.common.actions'],
      exports: 'orgModule'
    },
    'administer.cache': {
      deps: ['administer.base','core.layout','components.webHelp','utils.common','jquery','components.dialogs','core.events.bis'],
      exports: 'DataSetList'
    },
    'reportOptions/controls.editoptions': {
      deps: ['jquery','underscore','controls.controller'],
      exports: 'JRS.EditOptions'
    },
    'dialog.definitions': {
      deps: ['namespace','jquery','dynamicTree.utils'],
      exports: 'JRS.RepositorySelectionDialog'
    },
    'create.report': {
      deps: ['namespace','jrs.configs','jquery','dialog.definitions'],
      exports: 'JRS.CreateReport'
    },
    'designer.base': {
      deps: ['jquery','core.ajax','underscore','prototype','utils.common','actionModel.modelGenerator'],
      exports: 'designerBase'
    },
    'dashboard.designer': {
      deps: ['designer.base','controls.dashboard','components.toolbar','dialog.definitions'],
      exports: 'localContext'
    },
    'dashboard.runtime': {
      deps: ['designer.base','controls.dashboard.runtime','dateFormatter'],
      exports: 'localContext'
    },
    'controls.dashboard.runtime': {
      deps: ['controls.controller','jquery','underscore'],
      exports: 'JRS.Controls'
    },
    'report.view.runtime': {
      deps: ['report.view.base'],
      exports: 'Report'
    },
    'domain.base': {
      deps: ['jquery','underscore','backbone','utils.common'],
      exports: 'domain'
    },
    'domain.components': {
      deps: ['domain.base','dynamicTree.utils','components.list'],
      exports: 'domain'
    },
    'domain.filters': {
      deps: ['domain.components'],
      exports: 'domain.filter'
    },
    'domain.chooser': {
      deps: ['domain.base'],
      exports: 'domain'
    },
    'domain.chooser.fields': {
      deps: ['domain.chooser','domain.components'],
      exports: 'domain'
    },
    'domain.chooser.saveAsTopic': {
      deps: ['domain.chooser','domain.components'],
      exports: 'domain'
    },
    'domain.chooser.filters': {
      deps: ['domain.chooser','domain.filters'],
      exports: 'domain'
    },
    'domain.chooser.display': {
      deps: ['domain.chooser','domain.components'],
      exports: 'domain'
    },
    'domain.setup': {
      deps: ['domain.components','resource.base','components.pickers','domain/domainUtil'],
      exports: 'domain.wizard'
    },
    'domain.setup.dialogs': {
      deps: ['domain.setup'],
      exports: 'SelectFileDialog'
    },
    'domain.designer': {
      deps: ['domain.components','components.toolbar','domain/domainUtil'],
      exports: 'dd'
    },
    'domain.designer.validators': {
      deps: ['domain.designer'],
      exports: 'dd'
    },
    'domain.designer.tables': {
      deps: ['domain.designer.validators','dragdrop.extra'],
      exports: 'dd_tables'
    },
    'domain.designer.tables.dialogs': {
      deps: ['domain.designer.tables'],
      exports: 'dd_tables'
    },
    'domain.designer.tables.validators': {
      deps: ['domain.designer.tables.dialogs'],
      exports: 'dd_tables'
    },
    'domain.designer.derivedTables': {
      deps: ['domain.designer.validators'],
      exports: 'dd_derivedTables'
    },
    'domain.designer.joins': {
      deps: ['domain.designer.validators'],
      exports: 'dd_joins'
    },
    'domain.designer.joins.validators': {
      deps: ['domain.designer.joins'],
      exports: 'dd_joins'
    },
    'domain.designer.calculatedFields': {
      deps: ['domain.designer.validators'],
      exports: 'dd_calcFields'
    },
    'domain.designer.filters': {
      deps: ['domain.filters','domain.designer.validators'],
      exports: 'dd_filters'
    },
    'domain.designer.display': {
      deps: ['domain.designer.validators'],
      exports: 'dd_display'
    },
    'domain.designer.display.validators': {
      deps: ['domain.designer.display'],
      exports: 'dd_display'
    },
    'adhoc.start': {
      deps: ['prototype','components.dialogs','components.dynamicTree','dynamicTree.utils'],
      exports: 'adhocStart'
    },
    fusioncharts: {
      exports: 'FusionCharts'
    },
    'adhoc/table': {
      deps: ['jquery','underscore','prototype','designer.base','utils.common','jquery-ui/jquery.ui.position'],
      exports: 'AdHocTable'
    },
    'adhoc/table.actions': {
      deps: ['adhoc/table'],
      exports: 'AdHocTable'
    },
    'adhoc/table.dnd': {
      deps: ['adhoc/table'],
      exports: 'AdHocTable'
    },
    'adhoc/table.helpers': {
      deps: ['adhoc/table'],
      exports: 'AdHocTable'
    },
    'adhoc/table.observers': {
      deps: ['adhoc/table'],
      exports: 'AdHocTable'
    },
    'adhoc/table.ajax': {
      deps: ['adhoc/table.observers'],
      exports: 'AdHocTable'
    },
    'adhoc/table.init': {
      deps: ['adhoc/table','adhoc/table.ajax','adhoc/table.actions','adhoc/table.helpers','adhoc/table.observers','adhoc/table.dnd'],
      exports: 'AdHocTable'
    },
    'adhoc/crosstab': {
      deps: ['jquery','underscore','prototype','designer.base','utils.common','tools.truncator'],
      exports: 'AdHocCrosstab'
    },
    'adhoc/crosstab.actions': {
      deps: ['adhoc/crosstab','adhoc/TopBottomFilterDialog','backbone'],
      exports: 'AdHocCrosstab'
    },
    'adhoc/crosstab.ajax': {
      deps: ['adhoc/crosstab'],
      exports: 'AdHocCrosstab'
    },
    'adhoc/crosstab.helpers': {
      deps: ['adhoc/crosstab'],
      exports: 'AdHocCrosstab'
    },
    'adhoc/crosstab.observers': {
      deps: ['adhoc/crosstab'],
      exports: 'AdHocCrosstab'
    },
    'adhoc/crosstab.tests': {
      deps: ['adhoc/crosstab','adhoc/crosstab.actions','adhoc/crosstab.ajax','adhoc/crosstab.helpers','adhoc/crosstab.observers'],
      exports: 'AdHocCrosstab'
    },
    'adhoc/chart.init': {
      deps: ['designer.base'],
      exports: 'AdHocChart'
    },
    'adhoc/chart.helpers': {
      deps: ['adhoc/chart.init'],
      exports: 'AdHocChart'
    },
    'adhoc/chart.ajax': {
      deps: ['underscore','adhoc/chart.init'],
      exports: 'AdHocChart'
    },
    'adhoc/chart.actions': {
      deps: ['adhoc/chart.init'],
      exports: 'AdHocChart'
    },
    'adhoc/chart.observers': {
      deps: ['adhoc/chart.init','adhoc/chart.helpers','adhoc/chart.ajax','adhoc/chart.actions'],
      exports: 'AdHocChart'
    },
    'adhoc/designer.calculatedFields': {
      deps: ['adhoc/calculatedFields/CalculatedFieldsService'],
      exports: 'adhocCalculatedFields'
    },
    'adhoc/designer.sort': {
      deps: ['prototype','utils.common'],
      exports: 'adhocSort'
    },
    'adhoc/designer.reentrant': {
      deps: ['domain.components'],
      exports: 'adhocReentrance'
    },
    'controls.adhoc': {
      deps: ['controls.controller','report.view.base'],
      exports: 'adhocControls'
    },
    'adhoc/crosstab.multiselect': {
      deps: [],
      exports: 'crossTabMultiSelect'
    },
    visualize: {
      deps: ['jasper','BiComponentFactory','auth/Authentication','bi/report/jive/jr/jive.all.deps'],
      exports: 'visualize'
    }
  },
  waitSeconds: 60,
  map: {
    '*': {
      xssUtil: 'common/util/xssUtil',
      'settings/localeSettings': 'jrs.configs',
      'settings/dateTimeSettings': 'settings!dateTimeSettings',
      'settings/decimalFormatSymbols': 'settings!decimalFormatSymbols',
      'settings/generalSettings': 'jrs.configs',
      'jquery.ui': 'reportViewer/jquery.ui.custom',
      'jquery.timepicker': 'config/dateAndTimeSettings',
      'jquery.timepicker.addon': 'config/dateAndTimeSettings',
      'common/component/option/OptionContainer': 'common/component/base/OptionContainer'
    },
    'scheduler/view/editor/parametersTabView': {
      'controls.options': 'controls.options'
    }
  },
  baseUrl: ''
});