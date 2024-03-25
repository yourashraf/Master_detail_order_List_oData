sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/ui/model/FilterType",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller ,Filter ,FilterOperator ,FilterType , JSONModel) {
        "use strict";

        return Controller.extend("masterdetail.masterdetail.controller.View1", {
            
            onItemPress : function (oEvent){
                var orderId = oEvent.getParameter("listItem").getBindingContext().getProperty("OrderID");
                var oFilter = new Filter("OrderID" , FilterOperator.EQ , orderId);
                this.getView().byId("orderTable").getBinding("items").filter(oFilter , FilterType.Application);
                this.splitObjPage().to(this.createId("orderDetail"));
             },
             onTbItem : function(oEvent){
                
                var that=this;
                var pID = oEvent.getSource().getBindingContext().getProperty("ProductID");
                var oModel = this.getOwnerComponent().getModel();
                oModel.read("/Products(" + pID + ")" ,{success : function(oData){
                var jData = new JSONModel(oData);
                
                  that.getView().byId("formID").setModel(jData);
                  that.splitObjPage().to(that.createId("productDetails"));
                },error: function(oError){
console.log(oError);
                
             }})
             },
              splitObjPage : function(){
                var result = this.byId("splitCont");
                return result;
              },
              onNavBack : function(){
                this.splitObjPage().backDetail();
              }
        });
    });
