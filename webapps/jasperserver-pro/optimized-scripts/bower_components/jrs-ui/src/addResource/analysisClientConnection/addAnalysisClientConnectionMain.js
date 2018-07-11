var resourceAnalysisConnection={TYPE_ID:"analysisConnection.type",LABEL_ID:"connectionLabel",RESOURCE_ID_ID:"connectionName",DESCRIPTION_ID:"connectionDescription",RESOURCE_INPUT_ID:"resourceUri",BROWSE_BUTTON_ID:"browser_button",TREE_ID:"folderTreeRepoLocation",FOLDERS_TREE_DATA_PROVIDER_ID:"repositoryExplorerTreeFoldersProvider",XMLA_CATALOG_ID:"xmlaCatalog",XMLA_DATA_SOURCE_ID:"xmlaDatasource",XMLA_CONNECTION_URI_ID:"xmlaConnectionUri",TEST_BUTTON_ID:"testXMLAConnection",NEXT_BUTTON_ID:"next",DONE_BUTTON_ID:"done",CHANGE_TYPE_BUTTON_ID:"changeCombo",_canGenerateId:!0,initialize:function(e){this._form=$(document.body).select("form")[0],this._type=$(this.TYPE_ID),this._label=$(this.LABEL_ID),this._resourceId=$(this.RESOURCE_ID_ID),this._description=$(this.DESCRIPTION_ID);var t=this._type.getValue();"olapXmlaCon"==t&&(this._xmlaCatalog=$(this.XMLA_CATALOG_ID),this._xmlaDataSource=$(this.XMLA_DATA_SOURCE_ID),this._xmlaConnectionUri=$(this.XMLA_CONNECTION_URI_ID)),this._nextButton=$(this.NEXT_BUTTON_ID),this._doneButton=$(this.DONE_BUTTON_ID),this._testButton=$(this.TEST_BUTTON_ID),this._changeTypeButton=$(this.CHANGE_TYPE_BUTTON_ID),this._isEditMode=e.isEditMode,this._label.validator=resource.labelValidator.bind(this),this._resourceId.validator=resource.resourceIdValidator.bind(this),this._description.validator=resource.descriptionValidator.bind(this),"olapXmlaCon"==t&&(this._xmlaCatalog.validator=this._xmlaCatalogValidator.bind(this),this._xmlaDataSource.validator=this._xmlaDataSourceValidator.bind(this),this._xmlaConnectionUri.validator=this._xmlaConnectionUriValidator.bind(this)),this._initResourcePicker(),this._initEvents()},_initResourcePicker:function(){new picker.FileSelector({treeId:this.TREE_ID,providerId:this.FOLDERS_TREE_DATA_PROVIDER_ID,uriTextboxId:this.RESOURCE_INPUT_ID,browseButtonId:this.BROWSE_BUTTON_ID,title:resource.messages["resource.SaveToFolder.Title"]})},_initEvents:function(){this._type.observe("change",function(){this._changeTypeButton.click()}.bindAsEventListener(this));var e=function(e){this._isDataValid()||e.stop()}.bindAsEventListener(this),t=function(e){this._isDataValid()?this.testXMLAConnection():e.stop()}.bindAsEventListener(this);this._nextButton.observe("click",e),this._doneButton.observe("click",e),this._testButton&&this._testButton.observe("click",t),this._form.observe("keyup",function(e){var t=e.element(),i=[this._label,this._resourceId,this._description,this._xmlaCatalog,this._xmlaDataSource,this._xmlaConnectionUri];i.include(t)&&(ValidationModule.validate(resource.getValidationEntries([t])),t==this._resourceId&&this._resourceId.getValue()!=resource.generateResourceId(this._label.getValue())&&(this._canGenerateId=!1),t==this._label&&!this._isEditMode&&this._canGenerateId&&(this._resourceId.setValue(resource.generateResourceId(this._label.getValue())),ValidationModule.validate(resource.getValidationEntries([this._resourceId]))))}.bindAsEventListener(this))},testXMLAConnection:function(){var e=this._testButton,t=jQuery(this._form),i=t.serializeArray();i.push({name:"_eventId_testXMLAConnection",value:""}),ajaxTargettedUpdate(t.attr("action"),{postData:jQuery.param(i),fillLocation:"ajaxbuffer",callback:function(t){var i=jQuery(t).text();try{var s=JSON.parse(i);"OK"==s.status?ValidationModule.showSuccess(e,resource.messages.connectionStatePassed):ValidationModule.showError(e,s.message,s.details)}catch(o){dialogs.systemConfirm.show(i)}},errorHandler:baseErrorHandler,hideLoader:!1})},_isDataValid:function(){var e=[this._label,this._resourceId,this._description],t=this._type.getValue();return"olapXmlaCon"==t&&(e.push(this._xmlaCatalog),e.push(this._xmlaDataSource),e.push(this._xmlaConnectionUri)),ValidationModule.validate(resource.getValidationEntries(e))},_xmlaCatalogValidator:function(e){var t=!0,i="";return e.blank()&&(i=resource.messages.catalogIsEmpty,t=!1),{isValid:t,errorMessage:i}},_xmlaDataSourceValidator:function(e){var t=!0,i="";return e.blank()&&(i=resource.messages.dataSourceIsEmpty,t=!1),{isValid:t,errorMessage:i}},_xmlaConnectionUriValidator:function(e){var t=!0,i="";return e.blank()&&(i=resource.messages.uriIsEmpty,t=!1),{isValid:t,errorMessage:i}}};"undefined"==typeof require&&document.observe("dom:loaded",function(){resourceAnalysisConnection.initialize(localContext.initOptions)}),define("resource.analysisConnection",["resource.base","prototype","components.pickers","utils.common"],function(e){return function(){var t;return t||e.resourceAnalysisConnection}}(this)),define("addResource/analysisClientConnection/addAnalysisClientConnectionMain",["require","!domReady","resource.analysisConnection","underscore","jrs.configs","resource.base"],function(e){"use strict";var t=e("!domReady"),i=e("resource.analysisConnection"),s=e("underscore"),o=e("jrs.configs"),n=e("resource.base");t(function(){var e=o.connectionType.localContext.initOptions;s.extend(window.localContext,o.connectionType.localContext),s.extend(n.messages,o.connectionType.resource.messages),i.initialize(e),isIPad()&&n.initSwipeScroll()})});