//@ui5-bundle masterdetail/masterdetail/Component-preload.js
sap.ui.require.preload({
	"masterdetail/masterdetail/Component.js":function(){
sap.ui.define(["sap/ui/core/UIComponent","sap/ui/Device","masterdetail/masterdetail/model/models"],function(e,t,i){"use strict";return e.extend("masterdetail.masterdetail.Component",{metadata:{manifest:"json"},init:function(){e.prototype.init.apply(this,arguments);this.getRouter().initialize();this.setModel(i.createDeviceModel(),"device")}})});
},
	"masterdetail/masterdetail/controller/App.controller.js":function(){
sap.ui.define(["sap/ui/core/mvc/Controller"],function(e){"use strict";return e.extend("masterdetail.masterdetail.controller.App",{onInit:function(){}})});
},
	"masterdetail/masterdetail/controller/View1.controller.js":function(){
sap.ui.define(["sap/ui/core/mvc/Controller","sap/ui/model/Filter","sap/ui/model/FilterOperator","sap/ui/model/FilterType","sap/ui/model/json/JSONModel"],function(e,t,r,i,o){"use strict";return e.extend("masterdetail.masterdetail.controller.View1",{onItemPress:function(e){var o=e.getParameter("listItem").getBindingContext().getProperty("OrderID");var n=new t("OrderID",r.EQ,o);this.getView().byId("orderTable").getBinding("items").filter(n,i.Application);this.splitObjPage().to(this.createId("orderDetail"))},onTbItem:function(e){var t=this;var r=e.getSource().getBindingContext().getProperty("ProductID");var i=this.getOwnerComponent().getModel();i.read("/Products("+r+")",{success:function(e){var r=new o(e);t.getView().byId("formID").setModel(r);t.splitObjPage().to(t.createId("productDetails"))},error:function(e){console.log(e)}})},splitObjPage:function(){var e=this.byId("splitCont");return e},onNavBack:function(){this.splitObjPage().backDetail()}})});
},
	"masterdetail/masterdetail/i18n/i18n.properties":'# This is the resource bundle for masterdetail.masterdetail\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=Master Detail\n\n#YDES: Application description\nappDescription=An SAP Fiori application.\n#XTIT: Main view title\ntitle=Master Detail',
	"masterdetail/masterdetail/manifest.json":'{"_version":"1.59.0","sap.app":{"id":"masterdetail.masterdetail","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","sourceTemplate":{"id":"@sap/generator-fiori:basic","version":"1.13.0","toolsId":"ed99a01b-9bd5-4bf2-8368-47151fb5c9c4"},"dataSources":{"mainService":{"uri":"v2/northwind/northwind.svc/","type":"OData","settings":{"annotations":[],"localUri":"localService/metadata.xml","odataVersion":"2.0"}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":true,"dependencies":{"minUI5Version":"1.122.0","libs":{"sap.m":{},"sap.ui.core":{},"sap.f":{},"sap.suite.ui.generic.template":{},"sap.ui.comp":{},"sap.ui.generic.app":{},"sap.ui.table":{},"sap.ushell":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"masterdetail.masterdetail.i18n.i18n"}},"":{"dataSource":"mainService","preload":true,"settings":{}}},"resources":{"css":[{"uri":"css/style.css"}]},"routing":{"config":{"routerClass":"sap.m.routing.Router","viewType":"XML","async":true,"viewPath":"masterdetail.masterdetail.view","controlAggregation":"pages","controlId":"app","clearControlAggregation":false},"routes":[{"name":"RouteView1","pattern":":?query:","target":["TargetView1"]}],"targets":{"TargetView1":{"viewType":"XML","transition":"slide","clearControlAggregation":false,"viewId":"View1","viewName":"View1"}}},"rootView":{"viewName":"masterdetail.masterdetail.view.App","type":"XML","async":true,"id":"App"}},"sap.cloud":{"public":true,"service":"masterdetailmasterdetail"}}',
	"masterdetail/masterdetail/model/models.js":function(){
sap.ui.define(["sap/ui/model/json/JSONModel","sap/ui/Device"],function(e,n){"use strict";return{createDeviceModel:function(){var i=new e(n);i.setDefaultBindingMode("OneWay");return i}}});
},
	"masterdetail/masterdetail/view/App.view.xml":'<mvc:View controllerName="masterdetail.masterdetail.controller.App"\n    xmlns:html="http://www.w3.org/1999/xhtml"\n    xmlns:mvc="sap.ui.core.mvc" displayBlock="true"\n    xmlns="sap.m"><App id="app"></App></mvc:View>\n',
	"masterdetail/masterdetail/view/View1.view.xml":'<mvc:View controllerName="masterdetail.masterdetail.controller.View1"\n    xmlns:mvc="sap.ui.core.mvc" displayBlock="true"\n    xmlns="sap.m"\n    xmlns:f="sap.ui.layout.form"><Page id="page" ><customHeader><OverflowToolbar ><content><ToolbarSpacer /><Title text="Order Summary Master detail" /><ToolbarSpacer /></content></OverflowToolbar></customHeader><content /><content><SplitContainer id="splitCont" initialMaster="master" initialDetail="orderDetail"><detailPages><Page id="orderDetail" title="Order Details"><Table id="orderTable" items="{/Order_Details}"><columns><Column ><Text text="Order ID"></Text></Column><Column ><Text text="Product ID"></Text></Column><Column ><Text text="Unit Price"></Text></Column><Column ><Text text="Quantity"></Text></Column><Column ><Text text="Discount"></Text></Column></columns><items><ColumnListItem type="Navigation" press="onTbItem"><cells><Text text="{OrderID}"></Text><Text text="{ProductID}"></Text><Text text="{UnitPrice}"></Text><Text text="{Quantity}"></Text><Text text="{Discount}"></Text></cells></ColumnListItem></items></Table></Page><Page id="productDetails" title="Product" showNavButton="true" navButtonPress="onNavBack"><VBox ><f:SimpleForm id="formID" editable="false" layout="ResponsiveGridLayout" labelSpanXL="3" labelSpanL="3" labelSpanM="3" labelSpanS="12" adjustLabelSpan="false" emptySpanXL="4" emptySpanL="4" emptySpanM="4" emptySpanS="0" columnsXL="1" columnsL="1" columnsM="1"><f:content><Label text="Product name"/><Text text="{/ProductName}"/><Label text="Supplier ID"/><Text text="{/SupplierID}"/><Label text="Quantity/Unit"/><Text text="{/QuantityPerUnit}"/><Label text="unit Price"/><Text text="{/UnitPrice}"/><Label text="Units on Order"/><Text text="{/UnitsOnOrder}"/></f:content></f:SimpleForm></VBox></Page></detailPages><masterPages><Page id="master" title="Order Master"><List id="orderList" items="{/Orders}" itemPress="onItemPress"><StandardListItem title="{OrderID}" type="Navigation"></StandardListItem></List></Page></masterPages></SplitContainer></content></Page></mvc:View>\n'
});
//# sourceMappingURL=Component-preload.js.map
