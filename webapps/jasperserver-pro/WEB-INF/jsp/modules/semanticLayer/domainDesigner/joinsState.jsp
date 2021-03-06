<%--
  ~ Copyright © 2005 - 2018 TIBCO Software Inc. All Rights Reserved. Confidential & Proprietary.
  --%>

<%@ taglib uri="http://www.springframework.org/tags" prefix="spring" %>
<%@ taglib prefix="js" uri="/WEB-INF/jasperserver.tld" %>

<js:out javaScriptEscape="true">
<script type="text/javascript">
    // ${sessionScope.XSS_NONCE} do not remove

    if (typeof domain === "undefined") {
        domain = {};
    }

    if (typeof domain._messages === "undefined") {
        domain._messages = {};
    }

    domain._messages["exitMessage"]  = '<spring:message code="domain.designer.exitMessage" javaScriptEscape="true"/>';
    domain._messages["designIsValid"]  = '<spring:message code="domain.designer.designIsValid" javaScriptEscape="true"/>';
    domain._messages["yes"]  = '<spring:message code="button.designer.yes" javaScriptEscape="true"/>';
    domain._messages["no"]  = '<spring:message code="button.designer.no" javaScriptEscape="true"/>';
    domain._messages["ok"]  = '<spring:message code="DIALOG_CONFIRM_BUTTON_LABEL_OK" javaScriptEscape="true"/>';
    domain._messages["cancel"]  = '<spring:message code="DIALOG_CONFIRM_BUTTON_LABEL_CANCEL" javaScriptEscape="true"/>';

    domain._messages['ITEM_BEING_USED_BY_RESOURCE'] ='<spring:message code="ITEM_BEING_USED_BY_RESOURCE" javaScriptEscape="true"/>'.replace(/''/g, "'");
    domain._messages['resource.label'] ='<spring:message code="jsp.listResources.resource" javaScriptEscape="true"/>'.replace(/''/g, "'");
    domain._messages['field.label'] ='<spring:message code="DD_ITEM_PROPERTY_DIMENSION" javaScriptEscape="true"/>'.replace(/''/g, "'");
    domain._messages['resourcesWithNoAccess'] = '<spring:message code="DOMAIN_DEPENDENCY_NO_ACCES_TO_RESOURCE" javaScriptEscape="true"/>'.replace(/''/g, "'");

    if (typeof localContext === "undefined") {
        localContext = {};
    }

    // Initialization of repository search init object.
    localContext.domainInitOptions = {
        flowExecutionKey: '${flowExecutionKey}',
        jsonJoins: JSON.parse('${joinsJSON}'),
        datasourcesProperties: JSON.parse('${datasourcesProperties}'),
        presentationSelected: ${presentationSelected},
        dataSourceId: '${selectedDatasource}',
        usedTablesByItemId: JSON.parse('${tablesUsedForRulesByItemId}'),
        usedFieldsByItemId: JSON.parse('${fieldsUsedForRulesByItemId}'),
        usedJoinedTablesByItemId: JSON.parse('${joinedTablesUsedForRulesByItemId}'),
        unsavedChangesPresent: ${unsavedChangesPresent},
        allowDesignerCloseWithValidationErrors: ${domainDependentsDontBlock}
    };

    if (typeof __jrsConfigs__.domainDesigner === "undefined") {
        __jrsConfigs__.domainDesigner = {};
    }

    // save references to variables defined in state
    __jrsConfigs__.domainDesigner.domain = domain;
    __jrsConfigs__.domainDesigner.localContext = localContext;

</script>
</js:out>