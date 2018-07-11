<%--
  ~ Copyright © 2005 - 2018 TIBCO Software Inc. All Rights Reserved. Confidential & Proprietary.
  --%>

<%@ taglib prefix="t" uri="http://tiles.apache.org/tags-tiles" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<%@ page import="com.jaspersoft.ji.license.LicenseManager" %>

<%
    String reason = (String)request.getSession().getAttribute(LicenseManager.LICENSE_FAILED_REASON);
    String contact = (String)request.getSession().getAttribute("contactMessage");
%>

<t:insertTemplate template="/WEB-INF/jsp/templates/page.jsp">
    <t:putAttribute name="pageTitle"><spring:message code='LIC_019_license.failed'/></t:putAttribute>
        <t:putAttribute name="bodyID" value="licenseFailed"/>
        <t:putAttribute name="bodyClass" value="oneColumn"/>

        <t:putAttribute name="bodyContent" >
            <t:insertTemplate template="/WEB-INF/jsp/templates/container.jsp">
                <t:putAttribute name="containerClass" value="column decorated primary"/>
                <t:putAttribute name="containerTitle"><spring:message code='LIC_019_license.failed'/></t:putAttribute>
                <t:putAttribute name="bodyClass" value="flow"/>
                <t:putAttribute name="bodyContent">
                    <div id="flowControls"></div>
                    <div id="stepDisplay">
                        <fieldset class="row instructions">
                            <h2 class="textAccent02"><spring:message code='LIC_019_license.failed'/></h2>
                            <h3 style="white-space:pre-wrap;"><%= reason %></h3>
                            <c:if test="${sessionScope.canRetryLicenseCheck}">
                                <a class="button action primary" href="<c:url value="/login.html"/>">
                                    <span class="wrap"><spring:message code="LIC_027.license.not.activated.button.retry"/></span>
                                </a>
                            </c:if>
                            <h3><%=contact %></h3>
                        </fieldset>
                    </div>
                </t:putAttribute>
            </t:insertTemplate>
        </t:putAttribute>

</t:insertTemplate>