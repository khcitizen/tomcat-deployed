var resourceLocator={CONTENT_REPOSITORY:"CONTENT_REPOSITORY",LOCAL:"LOCAL",NONE:"NONE",FILE_SYSTEM:"FILE_SYSTEM",LOCATE_EVENT:"resource:locate",ALLOWED_FILE_RESOURCE_EXTENSIONS:["css","ttf","jpg","jpeg","gif","bmp","png","jar","jrxml","properties","jrtx","xml","agxml","docx","doc","ppt","pptx","xls","xlsx","ods","odt","odp","pdf","rtf","html"],initialize:function(e){var t=function(e){return _.isObject(e)?e:$(e)};this.resourceUri=t(e.resourceInput),this.browseButton=t(e.browseButton),this.filePath=t(e.fileUploadInput),this.fakeFilePath=t(e.fakeFileUploadInput),this.fakeFileInput=t(e.fakeFileUploadInputText),this.newResourceLink=t(e.newResourceLink);try{this._initFileSelector(e)}catch(r){}finally{this._initEvents(e)}return this},_initEvents:function(e){jQuery(document).on("click","#CONTENT_REPOSITORY, #FILE_SYSTEM, #NONE, #LOCAL",this._clickHandler),"fileResourceTreeDataProvider"===e.providerId&&(jQuery("#next").on("click",resourceLocator._nextClickHandler),jQuery("#filePath").on("change",resourceLocator._uploadChangeHandler))},_nextClickHandler:function(e){jQuery("#fileUpload").hasClass("error")&&e.preventDefault()},_uploadChangeHandler:function(e){jQuery("#fileUpload").removeClass("error");var t=!0,r=jQuery("#filePath")[0].value;if(r){var i=jQuery("#filePath")[0].value.match(/.*\.([^\.]+)$/);if(i){var o=i[1];_.indexOf(resourceLocator.ALLOWED_FILE_RESOURCE_EXTENSIONS,o)<0&&(t=!1)}else t=!1}else t=!1;if(!t){var s=resource.messages["resource.report.unsupportedFileType.error"]+" "+resourceLocator.ALLOWED_FILE_RESOURCE_EXTENSIONS.join(", ");jQuery("#fileUpload").addClass("error").find("span.warning").html(s)}},_clickHandler:function(e){resourceLocator._updateResourceSelectorState(e.target.id)},_updateResourceSelectorState:function(e){resource.switchButtonState(this.filePath,e===this.FILE_SYSTEM),resource.switchButtonState(this.fakeFilePath,e===this.FILE_SYSTEM),resource.switchButtonState(this.fakeFileInput,e===this.FILE_SYSTEM),resource.switchButtonState(this.browseButton,e===this.CONTENT_REPOSITORY),resource.switchDisableState(this.resourceUri,e!==this.CONTENT_REPOSITORY);var t=e===this.LOCAL?["disabled","launcher"]:["launcher","disabled"];this._switchElementClasses(this.newResourceLink,t)},_initFileSelector:function(e){this.fileSelector=new picker.FileSelector(_.extend({},e,{uriTextboxId:this.resourceUri,browseButtonId:this.browseButton,title:e.dialogTitle}))},remove:function(e){this.fileSelector.remove()},_switchElementClasses:function(e,t){e&&t&&e.removeClassName(t[0]).addClassName(t[1])}};define("resource.locate",["resource.base","jquery","components.pickers"],function(e){return function(){var t;return t||e.resourceLocator}}(this));var resourceReport={SET_UP_PAGE_ID:"addReport_SetUp",LABEL_ID:"label",RESOURCE_ID_ID:"resourceID",DESCRIPTION_ID:"reportUnit.description",FILE_PATH_ID:"filePath",RESOURCE_URI_ID:"resourceUri",FILE_SYSTEM_SOURCE_ID:"FILE_SYSTEM",CONTENT_REPOSITORY_SOURCE_ID:"CONTENT_REPOSITORY",RESOURCE_NAME_ID:"resourceName",EDIT_RESOURCE_BUTTON_ID:"editResourceButton",REMOVE_RESOURCE_BUTTON_ID:"removeResourceButton",ADD_RESOURCE_BUTTON_ID:"addResourceButton",EDIT_CONTROL_BUTTON_ID:"editControlButton",REMOVE_CONTROL_BUTTON_ID:"removeControlButton",ADD_CONTROL_BUTTON_ID:"addControlButton",FILE_NAME_ID:"fileName",FILE_UPLOAD_BUTTON_ID:"fake_upload_button",SAVE_BUTTON_ID:"done",JRXML_FILE_PATH_COOKIE:"jrxmlFilePath",_canGenerateId:!0,initialize:function(e){this._setUpPage=$(this.SET_UP_PAGE_ID),this._setUpPage&&(this._form=$(document.body).select("form")[0],this._label=$(this.LABEL_ID),this._resourceId=$(this.RESOURCE_ID_ID),this._description=$(this.DESCRIPTION_ID),this._filePath=$(this.FILE_PATH_ID),this._resourceUri=$(this.RESOURCE_URI_ID),this._fileName=$(this.FILE_NAME_ID),this._fileSystemSource=$(this.FILE_SYSTEM_SOURCE_ID),this._contentRepositorySource=$(this.CONTENT_REPOSITORY_SOURCE_ID),this._saveButton=$(this.SAVE_BUTTON_ID),this._isEditMode=e?e.isEditMode:!1,this._initialSource=this._fileSystemSource.checked?this._fileSystemSource:this._contentRepositorySource,this._jrxmlFileResourceAlreadyUploaded=e.jrxmlFileResourceAlreadyUploaded,this._label.validator=resource.labelValidator.bind(this),this._resourceId.validator=resource.resourceIdValidator.bind(this),this._description.validator=resource.descriptionValidator.bind(this),this._filePath.validator=this._filePathValidator.bind(this),this._resourceUri.validator=this._resourceUriValidator.bind(this),this._initEvents(),this._adjustFileSelectorPosition(),this._fileName.value=this._jrxmlFileResourceAlreadyUploaded);var t={fileUploadInput:"filePath",fakeFileUploadInput:"fake_upload_button",fakeFileUploadInputText:"fileName",resourceInput:"resourceUri",browseButton:"browser_button",uploadButton:"upload_button",treeId:"resourceTreeRepoLocation",dialogTitle:resource.messages["resource.Report.Title"],selectLeavesOnly:!0};e&&$(t.browseButton)&&("fileResource"==e.type?t.providerId="fileResourceTreeDataProvider":"jrxml"==e.type?t.providerId="jrxmlTreeDataProvider":"olapMondrianSchema"==e.type?t.providerId="olapSchemaTreeDataProvider":"folder"==e.type&&(t.treeId="addFileTreeRepoLocation",t.providerId="repositoryExplorerTreeFoldersProvider",t.resourceInput="folderUri"),resourceLocator.initialize(t),resourceLocator._updateResourceSelectorState(jQuery("input[type=radio]:checked").attr("id")))},_initEvents:function(){var e=this;jQuery("#"+this.FILE_UPLOAD_BUTTON_ID).click(function(t){t.preventDefault(),jQuery("#"+e.FILE_PATH_ID).trigger("click")}),this._saveButton.observe("click",function(t){e._isDataValid()||t.stop()}),this._form.observe("keyup",function(t){var r=t.element(),i=[e._label,e._resourceId,e._description];i.include(r)&&(ValidationModule.validate(resource.getValidationEntries([r])),r==e._resourceId&&e._resourceId.getValue()!=resource.generateResourceId(e._label.getValue())&&(e._canGenerateId=!1),r==e._label&&!e._isEditMode&&e._canGenerateId&&(e._resourceId.setValue(resource.generateResourceId(e._label.getValue())),ValidationModule.validate(resource.getValidationEntries([e._resourceId]))))}),this._filePath.observe("change",function(){isIE()?-1!=this.value.toLowerCase().indexOf("c:\\fakepath\\")?e._fileName.value=this.value.substring("c:\\fakepath\\".length,this.value.length):e._fileName.value=this.value:e._fileName.value=this.files[0].name,$("fileUpload").removeClassName("error"),e._adjustFileSelectorPosition()})},_isDataValid:function(){var e=[this._label,this._resourceId,this._description,this._filePath,this._resourceUri];return isIE()?this.file=this._filePath.value:this.file=this._filePath.files[0],this.html=this._filePath.innerHTML,ValidationModule.validate(resource.getValidationEntries(e))},_filePathValidator:function(e){var t=!0,r="";return!this._fileSystemSource.checked||!e.blank()||this._isEditMode&&this._initialSource==this._fileSystemSource||this._jrxmlFileResourceAlreadyUploaded||(r=resource.messages.filePathIsEmpty,t=!1),t?ValidationModule.hideError($("fileName")):ValidationModule.showError($("fileName"),r),{isValid:t,errorMessage:r}},_resourceUriValidator:function(e){var t=!0,r="";return this._contentRepositorySource.checked&&e.blank()&&(r=resource.messages.resourceUriIsEmpty,t=!1),{isValid:t,errorMessage:r}},_adjustFileSelectorPosition:function(){var e=jQuery("#filePath");if(isIE7()||isIE8()||isIE9()||isIE10()){var t=20,r=0,i=95,o=30,s=e.parents("label").hasClass("error");s&&(t+=13),e.css({opacity:"0",position:"absolute",right:r,top:t,width:i,height:o})}else e.css({position:"fixed",right:"-1000px",top:"-1000px"})},editResource:function(e){$(this.RESOURCE_NAME_ID).setValue(e),$(this.EDIT_RESOURCE_BUTTON_ID).click()},removeResource:function(e){$(this.RESOURCE_NAME_ID).setValue(e),$(this.REMOVE_RESOURCE_BUTTON_ID).click()},addResource:function(){$(this.ADD_RESOURCE_BUTTON_ID).click()},editControl:function(e){$(this.RESOURCE_NAME_ID).setValue(e),$(this.EDIT_CONTROL_BUTTON_ID).click()},removeControl:function(e){$(this.RESOURCE_NAME_ID).setValue(e),$(this.REMOVE_CONTROL_BUTTON_ID).click()},addControl:function(){$(this.ADD_CONTROL_BUTTON_ID).click()}};"undefined"==typeof require&&document.observe("dom:loaded",function(){resourceReport.initialize(localContext.initOptions)}),define("resource.report",["resource.locate","prototype","jquery","utils.common"],function(e){return function(){var t;return t||e.resourceReport}}(this)),define("addResource/jasperReport/addJasperReportResourcesAndControlsMain",["require","!domReady","resource.report","underscore","components.templateengine","jrs.configs","resource.base","jquery","utils.common"],function(e){"use strict";function t(e,t){var r=u.getTemplateText("addJasperReportAddResourceTemplate"),i=h(u.render(r,t));i.find("a.launcher").on("click",function(){return c.addResource(),!1}),e.append(i)}function r(e,t){var r=u.getTemplateText("addJasperReportAddControlTemplate"),i=h(u.render(r,t));i.find("a.launcher").on("click",function(){return c.addControl(),!1}),e.append(i)}function i(e,t){var r=u.getTemplateText("addJasperReportSuggestedResourceTemplate");l.each(t,function(t){var i=h(u.render(r,t));i.find("a.emphasis").on("click",function(){return c.editResource(t.name),!1}),t.located||i.find("a.launcher").on("click",function(){return c.editResource(t.name),!1}),e.append(i)})}function o(e,t){var r=u.getTemplateText("addJasperReportSuggestedControlTemplate");l.each(t,function(t){var i=h(u.render(r,t));i.find("a.emphasis").on("click",function(){return c.editControl(t.name),!1}),t.located&&i.find("a.launcher").on("click",function(){return c.removeControl(t.name),!1}),e.append(i)})}function s(e,t,r){var i=u.getTemplateText("addJasperReportNonSuggestedResourceTemplate");l.each(t,function(t){var o=h(u.render(i,t));r&&(o.find("a.emphasis").on("click",function(){return c.editResource(t.name),!1}),o.find("a.launcher").on("click",function(){return c.removeResource(t.name),!1})),e.append(o)})}function a(e,t,r){var i=u.getTemplateText("addJasperReportNonSuggestedControlTemplate");l.each(t,function(t){var o=h(u.render(i,t));r&&(o.find("a.emphasis").on("click",function(){return t.local?c.editControl(t.name):c.editControl(t.referenceURI),!1}),o.find("a.launcher").on("click",function(){return t.local?c.removeControl(t.name):c.removeControl(t.referenceURI),!1})),e.append(o)})}var n=e("!domReady"),c=e("resource.report"),l=e("underscore"),u=e("components.templateengine"),d=e("jrs.configs"),_=e("resource.base"),h=e("jquery");e("utils.common"),n(function(){l.extend(_.messages,d.addJasperReport.resource.messages),c.initialize(),isIPad()&&_.initSwipeScroll();var e=h(h("#resources ul")[0]);s(e,d.addJasperReport.nonSuggestedResources,d.addJasperReport.canChangeResources),i(e,d.addJasperReport.suggestedResources),t(e,{canChangeResources:d.addJasperReport.canChangeResources});var n=h(h("#controls ul")[0]);a(n,d.addJasperReport.nonSuggestedControls,d.addJasperReport.canChangeResources),o(n,d.addJasperReport.suggestedControls),r(n,{canChangeResources:d.addJasperReport.canChangeResources})})});