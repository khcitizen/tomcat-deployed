define(["require","backbone","underscore","bi/repository/model/RepositoryResourceModel","bundle!jasperserver_messages"],function(e){"use strict";var r=e("backbone"),t=(e("underscore"),e("bi/repository/model/RepositoryResourceModel")),o=e("bundle!jasperserver_messages");return r.Model.extend({defaults:{id:void 0,uri:"",name:"",readOnly:!1},idAttribute:"uri",validation:{id:[{required:!0,msg:o["ReportDataSourceValidator.error.not.empty.reportDataSource.name"]},{maxLength:t.settings.NAME_MAX_LENGTH,msg:o["ReportDataSourceValidator.error.too.long.reportDataSource.name"]},{startsWithLetter:!0,msg:o["ReportDataSourceValidator.error.invalid.chars.shouldStartWithLetter"]},{containsOnlyWordCharacters:!0,msg:o["ReportDataSourceValidator.error.invalid.chars.wordCharsOnly"]}]},initialize:function(e){this.set("name",/.*\/(.+)$/.exec(e.uri)[1])}})});