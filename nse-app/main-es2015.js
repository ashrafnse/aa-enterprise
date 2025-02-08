(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/add-pay-form/add-pay-form.component.ts":
/*!********************************************************!*\
  !*** ./src/app/add-pay-form/add-pay-form.component.ts ***!
  \********************************************************/
/*! exports provided: AddPayFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPayFormComponent", function() { return AddPayFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _my_modal_payment_confirm_payment_confirm_modal_payment_confirm_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../my-modal/payment-confirm/payment-confirm-modal/payment-confirm-modal.component */ "./src/app/my-modal/payment-confirm/payment-confirm-modal/payment-confirm-modal.component.ts");
/* harmony import */ var _services_data_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/data-storage.service */ "./src/app/services/data-storage.service.ts");
/* harmony import */ var _services_payform_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/payform.service */ "./src/app/services/payform.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");

// this is test


















function AddPayFormComponent_div_0_mat_error_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddPayFormComponent_div_0_mat_error_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddPayFormComponent_div_0_mat_spinner_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 22);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("diameter", 20);
} }
function AddPayFormComponent_div_0_mat_error_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddPayFormComponent_div_0_mat_error_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddPayFormComponent_div_0_mat_option_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const eachPayTypeOption_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", eachPayTypeOption_r15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](eachPayTypeOption_r15);
} }
function AddPayFormComponent_div_0_mat_error_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddPayFormComponent_div_0_mat_error_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddPayFormComponent_div_0_mat_option_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const bankName_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", bankName_r16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", bankName_r16, " ");
} }
function AddPayFormComponent_div_0_mat_error_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddPayFormComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddPayFormComponent_div_0_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Beneficiery Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AddPayFormComponent_div_0_mat_error_7_Template, 2, 0, "mat-error", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Sender Mobile Number:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function AddPayFormComponent_div_0_Template_input_blur_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.getOldPayDataData(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AddPayFormComponent_div_0_mat_error_12_Template, 2, 0, "mat-error", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AddPayFormComponent_div_0_mat_spinner_13_Template, 1, 1, "mat-spinner", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-form-field", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Sender Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AddPayFormComponent_div_0_mat_error_18_Template, 2, 0, "mat-error", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-form-field", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Account Number:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, AddPayFormComponent_div_0_mat_error_24_Template, 2, 0, "mat-error", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-form-field", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Type:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-select", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, AddPayFormComponent_div_0_mat_option_29_Template, 2, 2, "mat-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, AddPayFormComponent_div_0_mat_error_30_Template, 2, 0, "mat-error", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-form-field", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "IFCS Code:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, AddPayFormComponent_div_0_mat_error_35_Template, 2, 0, "mat-error", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-form-field", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Bank Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-autocomplete", 15, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, AddPayFormComponent_div_0_mat_option_42_Template, 2, 2, "mat-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](43, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-form-field", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Amount:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, AddPayFormComponent_div_0_mat_error_48_Template, 2, 0, "mat-error", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " Save Payment Details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddPayFormComponent_div_0_Template_button_click_53_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.resetForm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " Reset Form ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](41);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.paymentForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.paymentForm.get("benefName").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.paymentForm.get("senderMobNo").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isSenderMobNoLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.paymentForm.get("senderName").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.paymentForm.get("accountNumber").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.payTypeOption);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.paymentForm.get("payType").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.paymentForm.get("ifscCode").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](43, 13, ctx_r0.filteredBankNames));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.paymentForm.get("payAmount").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r0.paymentForm.valid);
} }
function AddPayFormComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddPayFormComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddPayFormComponent_div_2_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.closeMatchFoundCard(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddPayFormComponent_div_3_tr_12_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddPayFormComponent_div_3_tr_12_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const i_r25 = ctx.index; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r26.patchFoundPayData(i_r25); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const payDataFound_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](payDataFound_r24.benefName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](payDataFound_r24.accountNumber);
} }
function AddPayFormComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Benificiery Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Account No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AddPayFormComponent_div_3_tr_12_Template, 8, 2, "tr", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddPayFormComponent_div_3_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r28.closeMatchFoundCard(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.foundMatchedPayData);
} }
class AddPayFormComponent {
    constructor(dataStorageService, payFormService, dialog, router) {
        this.dataStorageService = dataStorageService;
        this.payFormService = payFormService;
        this.dialog = dialog;
        this.router = router;
        this.isLoading = false;
        this.isSenderMobNoLoading = false;
        this.foundMatchedPayData = [];
        this.openfoundMatchCard = false;
        this.payTypeOption = [
            'IMPS',
            'NEFT'
        ];
    }
    ngOnInit() {
        // payment form
        this.paymentForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'benefName': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            'senderMobNo': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            'senderName': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            'accountNumber': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            'payType': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('IMPS', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            'ifscCode': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            'bankName': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            'payAmount': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
        /*
        this.paymentForm = new FormGroup({
          'benefName': new FormControl('null', Validators.required),
          'senderMobNo': new FormControl('null', Validators.required),
          'senderName': new FormControl('null', Validators.required),
          'accountNumber': new FormControl('null', Validators.required),
          'payType': new FormControl('IMPS', Validators.required),
          'ifscCode': new FormControl('null', Validators.required),
          'bankName': new FormControl('Central Bank of India', Validators.required),
          'payAmount': new FormControl('634565', Validators.required)
        });
        */
        // this.fetchBankName();
        this.isLoading = true;
        this.dataStorageService.fetchBankName()
            .subscribe(() => {
            this.isLoading = false;
            this.bankName = this.dataStorageService.bankName;
            // filter banklist
            this.filteredBankNames = this.paymentForm.get('bankName').valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(value => this._filter(value)));
        });
    }
    _filter(value) {
        if (value === null) {
            return;
        }
        const filterValue = value.toLowerCase();
        return this.bankName.filter(bankName => bankName.toLowerCase().indexOf(filterValue) === 0);
    }
    onSubmit() {
        console.log(this.paymentForm.value);
        const submittedPayData = {
            benefName: this.paymentForm.value.benefName,
            senderMobNo: this.paymentForm.value.senderMobNo,
            senderName: this.paymentForm.value.senderName,
            accountNumber: this.paymentForm.value.accountNumber,
            payType: this.paymentForm.value.payType,
            ifscCode: this.paymentForm.value.ifscCode,
            bankName: this.paymentForm.value.bankName,
            payAmount: this.paymentForm.value.payAmount,
            payAmountInWords: this.getAmountInWords(),
            todayDate: this.getTodayDate(),
            todayTime: this.getTodayTime(),
            transactionId: this.getTransId(),
            status: 'SUCCESS'
        };
        this.payFormService.addPayData(submittedPayData);
        this.openDialog();
        setTimeout(function () {
        }, 5000);
    }
    gotoPayInfo() {
        this.router.navigate(['/pay-success-invoice']);
    }
    // get today's date
    getTodayDate() {
        let dateObj = new Date();
        let day = String(dateObj.getDate()).padStart(2, '0');
        let month = dateObj.getMonth() + 1;
        if (month < 10) {
            month = '0' + month;
        }
        let year = dateObj.getFullYear();
        return `${day}-${month}-${year}`;
    }
    // get today's time
    getTodayTime() {
        var today = new Date();
        var hour = today.getHours();
        var minute = today.getMinutes();
        var seconds = today.getSeconds();
        // add a zero in front of numbers<10
        hour = this.checkTime(hour);
        minute = this.checkTime(minute);
        seconds = this.checkTime(seconds);
        return `${hour}:${minute}:${seconds}`;
    }
    checkTime(i) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }
    // convert number to indian system
    price_in_words(price) {
        var sglDigit = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"], dblDigit = ["Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"], tensPlace = ["", "Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"], handle_tens = function (dgt, prevDgt) {
            return 0 == dgt ? "" : " " + (1 == dgt ? dblDigit[prevDgt] : tensPlace[dgt]);
        }, handle_utlc = function (dgt, nxtDgt, denom) {
            return (0 != dgt && 1 != nxtDgt ? " " + sglDigit[dgt] : "") + (0 != nxtDgt || dgt > 0 ? " " + denom : "");
        };
        var str = "", digitIdx = 0, digit = 0, nxtDigit = 0, words = [];
        if (price += "", isNaN(parseInt(price)))
            str = "";
        else if (parseInt(price) > 0 && price.length <= 10) {
            for (digitIdx = price.length - 1; digitIdx >= 0; digitIdx--)
                switch (digit = price[digitIdx] - 0, nxtDigit = digitIdx > 0 ? price[digitIdx - 1] - 0 : 0, price.length - digitIdx - 1) {
                    case 0:
                        words.push(handle_utlc(digit, nxtDigit, ""));
                        break;
                    case 1:
                        words.push(handle_tens(digit, price[digitIdx + 1]));
                        break;
                    case 2:
                        words.push(0 != digit ? " " + sglDigit[digit] + " Hundred" + (0 != price[digitIdx + 1] && 0 != price[digitIdx + 2] ? " and" : "") : "");
                        break;
                    case 3:
                        words.push(handle_utlc(digit, nxtDigit, "Thousand"));
                        break;
                    case 4:
                        words.push(handle_tens(digit, price[digitIdx + 1]));
                        break;
                    case 5:
                        words.push(handle_utlc(digit, nxtDigit, "Lakh"));
                        break;
                    case 6:
                        words.push(handle_tens(digit, price[digitIdx + 1]));
                        break;
                    case 7:
                        words.push(handle_utlc(digit, nxtDigit, "Crore"));
                        break;
                    case 8:
                        words.push(handle_tens(digit, price[digitIdx + 1]));
                        break;
                    case 9:
                        words.push(0 != digit ? " " + sglDigit[digit] + " Hundred" + (0 != price[digitIdx + 1] || 0 != price[digitIdx + 2] ? " and" : " Crore") : "");
                }
            str = words.reverse().join("");
        }
        else
            str = "";
        return str;
    }
    getAmountInWords() {
        let amountInNumber = this.paymentForm.value.payAmount;
        amountInNumber = amountInNumber.replace(/\,/g, "");
        console.log(amountInNumber);
        let amountInWords = this.price_in_words(amountInNumber);
        var x = amountInNumber;
        x = x.toString();
        var lastThree = x.substring(x.length - 3);
        var otherNumbers = x.substring(0, x.length - 3);
        if (otherNumbers != '')
            lastThree = ',' + lastThree;
        var resAmountInNumber = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
        return `${resAmountInNumber} (Rs${amountInWords} only)`;
    }
    // transaction ID
    getTransId() {
        let todayDate = this.getTodayDate().split("-");
        let todayTime = this.getTodayTime().split(":");
        return `${todayDate[2]}${todayDate[1]}${todayDate[0]}${todayTime[2]}${todayTime[1]}${todayTime[0]}`;
    }
    // modal
    openDialog() {
        const dialogRef = this.dialog.open(_my_modal_payment_confirm_payment_confirm_modal_payment_confirm_modal_component__WEBPACK_IMPORTED_MODULE_3__["PaymentConfirmModalComponent"], { disableClose: true });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }
    getOldPayDataData() {
        this.isSenderMobNoLoading = true;
        this.dataStorageService.fetchPayData()
            .subscribe(res => {
            this.payData = this.dataStorageService.payFormData;
            // console.log(this.payData);
            this.checkIfNumberMatched();
            this.isSenderMobNoLoading = false;
        });
    }
    checkIfNumberMatched() {
        let tempPayData = this.payData;
        let tempSenderMobNo = this.paymentForm.value.senderMobNo;
        this.foundMatchedPayData = [];
        for (let k in tempPayData) {
            if (tempPayData[k].senderMobNo === tempSenderMobNo) {
                console.log('Match Found !!');
                console.log();
                this.foundMatchedPayData.push(tempPayData[k]);
                this.openfoundMatchCard = true;
            }
            else { }
        }
    }
    patchFoundPayData(index) {
        let payDataJSON = this.foundMatchedPayData[index];
        console.log(payDataJSON);
        // return;
        this.paymentForm.patchValue({
            'benefName': payDataJSON.benefName,
            // 'senderMobNo': payDataJSON.senderMobNo,
            'senderName': payDataJSON.senderName,
            'accountNumber': payDataJSON.accountNumber,
            'payType': payDataJSON.payType,
            'ifscCode': payDataJSON.ifscCode,
            'bankName': payDataJSON.bankName,
            'payAmount': payDataJSON.payAmount,
        });
        this.openfoundMatchCard = false;
    }
    closeMatchFoundCard() {
        this.openfoundMatchCard = false;
    }
    resetForm() {
        this.paymentForm.reset();
        this.paymentForm.patchValue({
            'benefName': null,
            'senderMobNo': null,
            'senderName': null,
            'accountNumber': null,
            'payType': 'IMPS',
            'ifscCode': null,
            'bankName': null,
            'payAmount': null
        });
    }
}
AddPayFormComponent.ɵfac = function AddPayFormComponent_Factory(t) { return new (t || AddPayFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_storage_service__WEBPACK_IMPORTED_MODULE_4__["DataStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_payform_service__WEBPACK_IMPORTED_MODULE_5__["PayFormService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"])); };
AddPayFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddPayFormComponent, selectors: [["app-add-pay-form"]], decls: 4, vars: 4, consts: [[4, "ngIf"], ["class", "my-spinner", 4, "ngIf"], ["class", "black-overlay", 3, "click", 4, "ngIf"], [3, "formGroup", "ngSubmit"], ["appearance", "fill", 1, "w-100"], ["matInput", "", "formControlName", "benefName"], ["appearance", "fill", 1, "w-50", "w-sm-100"], ["matInput", "", "formControlName", "senderMobNo", 3, "blur"], ["class", "input-spinner", 3, "diameter", 4, "ngIf"], ["matInput", "", "formControlName", "senderName"], ["matInput", "", "formControlName", "accountNumber"], ["formControlName", "payType"], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "formControlName", "ifscCode"], ["type", "text", "placeholder", "Pick one", "aria-label", "Number", "matInput", "", "formControlName", "bankName", 3, "matAutocomplete"], ["autoActiveFirstOption", ""], ["auto", "matAutocomplete"], ["matInput", "", "formControlName", "payAmount"], ["mat-raised-button", "", "type", "submit", "color", "primary", 1, "btn-submit", 3, "disabled"], [1, "fas", "fa-paper-plane"], ["mat-raised-button", "", "type", "button", "color", "warn", 1, "btn-submit", "btn-reset", 3, "click"], [1, "fas", "fa-times"], [1, "input-spinner", 3, "diameter"], [3, "value"], [1, "my-spinner"], [1, "black-overlay", 3, "click"], [1, "match-found-card"], ["role", "listitem", 4, "ngFor", "ngForOf"], ["type", "button", "mat-raised-button", "", "color", "warn", 3, "click"], ["role", "listitem"], ["type", "button", "mat-icon-button", "", "color", "primary", 2, "font-size", "24px", 3, "click"], [1, "fas", "fa-check-circle"]], template: function AddPayFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AddPayFormComponent_div_0_Template, 57, 15, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddPayFormComponent_div_1_Template, 2, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AddPayFormComponent_div_2_Template, 1, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AddPayFormComponent_div_3_Template, 16, 1, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.openfoundMatchCard);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.openfoundMatchCard);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCard"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__["MatAutocompleteTrigger"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__["MatAutocomplete"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatError"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__["MatSpinner"], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatOption"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"]], styles: ["form[_ngcontent-%COMP%] {\r\n  padding-bottom: 20px;\r\n}\r\nmat-card[_ngcontent-%COMP%] {\r\n  margin: 20px 20px;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  padding-bottom: 10px;\r\n}\r\nmat-card[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  position: relative;\r\n  text-align: left;\r\n  \r\n  margin: 0 10px 10px;\r\n}\r\n.btn-submit[_ngcontent-%COMP%] {\r\n  display: block;\r\n  margin: auto;\r\n  font-size: 18px;\r\n}\r\n.btn-submit[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\r\n  font-size: 15px;\r\n  margin-top: -3px;\r\n  margin-left: 3px;\r\n}\r\n.btn-reset[_ngcontent-%COMP%] {\r\n  margin: 0 auto 0 20px;\r\n  font-size: 12px;\r\n  padding: 0 10px;\r\n  height: 30px;\r\n  line-height: initial;\r\n}\r\n.w-100[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n.w-50[_ngcontent-%COMP%] {\r\n  width: calc(50% - 20px);\r\n}\r\n@media only screen and (max-width: 500px) {\r\n  .w-sm-100[_ngcontent-%COMP%] {\r\n    width: 100% !important;\r\n  }\r\n}\r\n.mat-center[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  background: rgb(0 0 0 / 35%);\r\n  width: 100vw;\r\n  height: 100vh;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n.input-spinner[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 0;\r\n  left: auto;\r\n  right: 0;\r\n}\r\n.match-found-card[_ngcontent-%COMP%] {\r\n  width: 60vw;\r\n  margin: 0;\r\n  max-height: 80vh;\r\n  overflow-y: auto;\r\n}\r\n.match-found-card[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.match-found-card[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  border-bottom: 1px solid #ddd;\r\n  margin: 0 0 10px;\r\n  \r\n}\r\n.match-found-card[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .match-found-card[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  font-size: 14px;\r\n}\r\n.match-found-card[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n  font-weight: 600;\r\n}\r\n@media only screen and (max-width: 500px) {\r\n  .match-found-card[_ngcontent-%COMP%] {\r\n    width: 80vw;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLXBheS1mb3JtL2FkZC1wYXktZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLGVBQWU7RUFDZixvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLDZCQUE2QjtFQUM3QixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGNBQWM7RUFDZCxZQUFZO0VBQ1osZUFBZTtBQUNqQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsZUFBZTtFQUNmLFlBQVk7RUFDWixvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0UsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRTtJQUNFLHNCQUFzQjtFQUN4QjtBQUNGO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsUUFBUTtFQUNSLFNBQVM7RUFDVCxnQ0FBZ0M7RUFDaEMsNEJBQTRCO0VBQzVCLFlBQVk7RUFDWixhQUFhO0VBQ2IsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sVUFBVTtFQUNWLFFBQVE7QUFDVjtBQUNBO0VBQ0UsV0FBVztFQUNYLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckI7QUFDQTs7R0FFRztBQUNIO0VBQ0UsV0FBVztFQUNYLDZCQUE2QjtFQUM3QixnQkFBZ0I7RUFDaEI7cUJBQ21CO0FBQ3JCO0FBQ0E7O0VBRUUsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0U7SUFDRSxXQUFXO0VBQ2I7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FkZC1wYXktZm9ybS9hZGQtcGF5LWZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImZvcm0ge1xyXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG59XHJcbm1hdC1jYXJkIHtcclxuICBtYXJnaW46IDIwcHggMjBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxufVxyXG5tYXQtY2FyZCBtYXQtZm9ybS1maWVsZCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIC8qIHdpZHRoOiBjYWxjKDUwJSAtIDIwcHgpOyAqL1xyXG4gIG1hcmdpbjogMCAxMHB4IDEwcHg7XHJcbn1cclxuLmJ0bi1zdWJtaXQge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuLmJ0bi1zdWJtaXQgc3ZnIHtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgbWFyZ2luLXRvcDogLTNweDtcclxuICBtYXJnaW4tbGVmdDogM3B4O1xyXG59XHJcbi5idG4tcmVzZXQge1xyXG4gIG1hcmdpbjogMCBhdXRvIDAgMjBweDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgcGFkZGluZzogMCAxMHB4O1xyXG4gIGhlaWdodDogMzBweDtcclxuICBsaW5lLWhlaWdodDogaW5pdGlhbDtcclxufVxyXG4udy0xMDAge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi53LTUwIHtcclxuICB3aWR0aDogY2FsYyg1MCUgLSAyMHB4KTtcclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgLnctc20tMTAwIHtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbi5tYXQtY2VudGVyIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIGJhY2tncm91bmQ6IHJnYigwIDAgMCAvIDM1JSk7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5pbnB1dC1zcGlubmVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IGF1dG87XHJcbiAgcmlnaHQ6IDA7XHJcbn1cclxuLm1hdGNoLWZvdW5kLWNhcmQge1xyXG4gIHdpZHRoOiA2MHZ3O1xyXG4gIG1hcmdpbjogMDtcclxuICBtYXgtaGVpZ2h0OiA4MHZoO1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbn1cclxuLm1hdGNoLWZvdW5kLWNhcmQgPiBkaXYge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLyogLm1hdGNoLWZvdW5kLWNhcmQgaDUge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufSAqL1xyXG4ubWF0Y2gtZm91bmQtY2FyZCB0YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XHJcbiAgbWFyZ2luOiAwIDAgMTBweDtcclxuICAvKiBoZWlnaHQ6IDI1MHB4O1xyXG4gIG92ZXJmbG93LXk6IGF1dG87ICovXHJcbn1cclxuLm1hdGNoLWZvdW5kLWNhcmQgdGgsXHJcbi5tYXRjaC1mb3VuZC1jYXJkIHRkIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbi5tYXRjaC1mb3VuZC1jYXJkIHRkIHtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcclxuICAubWF0Y2gtZm91bmQtY2FyZCB7XHJcbiAgICB3aWR0aDogODB2dztcclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddPayFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-pay-form',
                templateUrl: './add-pay-form.component.html',
                styleUrls: ['./add-pay-form.component.css']
            }]
    }], function () { return [{ type: _services_data_storage_service__WEBPACK_IMPORTED_MODULE_4__["DataStorageService"] }, { type: _services_payform_service__WEBPACK_IMPORTED_MODULE_5__["PayFormService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AppComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.title = 'nse-app';
    }
    gotoAccountPage() {
        this.router.navigate(['/account']);
    }
    gotoHomePage() {
        this.router.navigate(['/add-pay-form']);
    }
    gotoPayInvoice() {
        this.router.navigate(['/pay-success-invoice']);
    }
    ngOnInit() {
        this.authService.autoLogin();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _core_material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core/material.module */ "./src/app/core/material.module.ts");
/* harmony import */ var _services_payform_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/payform.service */ "./src/app/services/payform.service.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _pay_success_invoice_pay_success_invoice_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pay-success-invoice/pay-success-invoice.component */ "./src/app/pay-success-invoice/pay-success-invoice.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _add_pay_form_add_pay_form_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./add-pay-form/add-pay-form.component */ "./src/app/add-pay-form/add-pay-form.component.ts");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/home-page/home-page.component.ts");
/* harmony import */ var _my_modal_payment_confirm_payment_confirm_modal_payment_confirm_modal_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./my-modal/payment-confirm/payment-confirm-modal/payment-confirm-modal.component */ "./src/app/my-modal/payment-confirm/payment-confirm-modal/payment-confirm-modal.component.ts");
/* harmony import */ var _login_auth_guard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./login/auth.guard */ "./src/app/login/auth.guard.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _dashboard_manage_form_manage_form_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./dashboard/manage-form/manage-form.component */ "./src/app/dashboard/manage-form/manage-form.component.ts");
/* harmony import */ var _dashboard_dash_menu_dash_menu_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./dashboard/dash-menu/dash-menu.component */ "./src/app/dashboard/dash-menu/dash-menu.component.ts");
/* harmony import */ var _dashboard_manage_payment_manage_payment_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./dashboard/manage-payment/manage-payment.component */ "./src/app/dashboard/manage-payment/manage-payment.component.ts");
/* harmony import */ var _data_table_data_table_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./data-table/data-table.component */ "./src/app/data-table/data-table.component.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _my_modal_delete_pay_data_modal_delete_pay_data_modal_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./my-modal/delete-pay-data-modal/delete-pay-data-modal.component */ "./src/app/my-modal/delete-pay-data-modal/delete-pay-data-modal.component.ts");






// angular modules

// http client

// custom material module

// services

// component







// dashboard











// import { AuthInterceptorSerivce } from './login/auth-interceptor.service';
// routing
const appRoutes = [
    {
        path: '', component: _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__["NavbarComponent"],
        children: [
            { path: '', component: _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_14__["HomePageComponent"], canActivate: [_login_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]] },
            { path: 'add-pay-form', component: _add_pay_form_add_pay_form_component__WEBPACK_IMPORTED_MODULE_13__["AddPayFormComponent"], canActivate: [_login_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]] },
            {
                path: 'dashboard',
                component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_17__["DashboardComponent"],
                canActivate: [_login_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]],
                children: [
                    { path: '', component: _dashboard_dash_menu_dash_menu_component__WEBPACK_IMPORTED_MODULE_19__["DashMenuComponent"] },
                    { path: 'manage-form', component: _dashboard_manage_form_manage_form_component__WEBPACK_IMPORTED_MODULE_18__["ManageComponent"] },
                    { path: 'manage-payment', component: _dashboard_manage_payment_manage_payment_component__WEBPACK_IMPORTED_MODULE_20__["ManagePaymentComponent"] }
                ]
            },
        ]
    },
    { path: 'account', component: _login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"] },
    { path: 'pay-success-invoice', component: _pay_success_invoice_pay_success_invoice_component__WEBPACK_IMPORTED_MODULE_11__["PaySuccessInvoiceComponent"], canActivate: [_login_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]] }
];
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _services_payform_service__WEBPACK_IMPORTED_MODULE_9__["PayFormService"]
        // ,
        // {
        //   provide: HTTP_INTERCEPTORS,
        //   useClass: AuthInterceptorSerivce,
        //   multi: true
        // }    
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _core_material_module__WEBPACK_IMPORTED_MODULE_8__["CustomMaterialModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes),
            _angular_material_table__WEBPACK_IMPORTED_MODULE_22__["MatTableModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_23__["MatPaginatorModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_24__["MatSortModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__["NavbarComponent"],
        _pay_success_invoice_pay_success_invoice_component__WEBPACK_IMPORTED_MODULE_11__["PaySuccessInvoiceComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
        _add_pay_form_add_pay_form_component__WEBPACK_IMPORTED_MODULE_13__["AddPayFormComponent"],
        _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_14__["HomePageComponent"],
        _my_modal_payment_confirm_payment_confirm_modal_payment_confirm_modal_component__WEBPACK_IMPORTED_MODULE_15__["PaymentConfirmModalComponent"],
        // dashboard
        _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_17__["DashboardComponent"],
        _dashboard_dash_menu_dash_menu_component__WEBPACK_IMPORTED_MODULE_19__["DashMenuComponent"],
        _dashboard_manage_form_manage_form_component__WEBPACK_IMPORTED_MODULE_18__["ManageComponent"],
        _dashboard_manage_payment_manage_payment_component__WEBPACK_IMPORTED_MODULE_20__["ManagePaymentComponent"],
        _data_table_data_table_component__WEBPACK_IMPORTED_MODULE_21__["DataTableComponent"],
        _my_modal_delete_pay_data_modal_delete_pay_data_modal_component__WEBPACK_IMPORTED_MODULE_25__["DeletePayDataModalComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
        _core_material_module__WEBPACK_IMPORTED_MODULE_8__["CustomMaterialModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_22__["MatTableModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_23__["MatPaginatorModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_24__["MatSortModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__["NavbarComponent"],
                    _pay_success_invoice_pay_success_invoice_component__WEBPACK_IMPORTED_MODULE_11__["PaySuccessInvoiceComponent"],
                    _login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
                    _add_pay_form_add_pay_form_component__WEBPACK_IMPORTED_MODULE_13__["AddPayFormComponent"],
                    _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_14__["HomePageComponent"],
                    _my_modal_payment_confirm_payment_confirm_modal_payment_confirm_modal_component__WEBPACK_IMPORTED_MODULE_15__["PaymentConfirmModalComponent"],
                    // dashboard
                    _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_17__["DashboardComponent"],
                    _dashboard_dash_menu_dash_menu_component__WEBPACK_IMPORTED_MODULE_19__["DashMenuComponent"],
                    _dashboard_manage_form_manage_form_component__WEBPACK_IMPORTED_MODULE_18__["ManageComponent"],
                    _dashboard_manage_payment_manage_payment_component__WEBPACK_IMPORTED_MODULE_20__["ManagePaymentComponent"],
                    _data_table_data_table_component__WEBPACK_IMPORTED_MODULE_21__["DataTableComponent"],
                    _my_modal_delete_pay_data_modal_delete_pay_data_modal_component__WEBPACK_IMPORTED_MODULE_25__["DeletePayDataModalComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                    _core_material_module__WEBPACK_IMPORTED_MODULE_8__["CustomMaterialModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes),
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_22__["MatTableModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_23__["MatPaginatorModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_24__["MatSortModule"]
                ],
                providers: [
                    _services_payform_service__WEBPACK_IMPORTED_MODULE_9__["PayFormService"]
                    // ,
                    // {
                    //   provide: HTTP_INTERCEPTORS,
                    //   useClass: AuthInterceptorSerivce,
                    //   multi: true
                    // }    
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/core/material.module.ts":
/*!*****************************************!*\
  !*** ./src/app/core/material.module.ts ***!
  \*****************************************/
/*! exports provided: CustomMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomMaterialModule", function() { return CustomMaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/badge.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/bottom-sheet.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tree.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/overlay.js");
/*
import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
// import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {LayoutModule } from '@angular/cdk/layout';
import {MatSidenavModule } from '@angular/material/sidenav';
import {MatListModule } from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatRadioModule} from '@angular/material/radio';
import {MatSortModule} from '@angular/material/sort';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule,
    MatMenuModule,
    // MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    LayoutModule,
    MatSidenavModule,
    MatListModule,
    MatDividerModule,
    MatGridListModule,
    MatFormFieldModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatExpansionModule,
    MatRadioModule,
    MatSortModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule
  ],
  exports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule,
    MatMenuModule,
    // MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    LayoutModule,
    MatSidenavModule,
    MatListModule,
    MatDividerModule,
    MatGridListModule,
    MatFormFieldModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatExpansionModule,
    MatRadioModule,
    MatSortModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule
   ]
})
export class CustomMaterialModule { }
*/





































class CustomMaterialModule {
}
CustomMaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CustomMaterialModule });
CustomMaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CustomMaterialModule_Factory(t) { return new (t || CustomMaterialModule)(); }, imports: [[
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_2__["MatBadgeModule"],
            _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_3__["MatBottomSheetModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_5__["MatButtonToggleModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_8__["MatChipsModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_9__["MatStepperModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__["MatDividerModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridListModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatNativeDateModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_20__["MatPaginatorModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_21__["MatProgressBarModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_22__["MatProgressSpinnerModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_23__["MatRadioModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatRippleModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_24__["MatSelectModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_25__["MatSidenavModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_26__["MatSliderModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_27__["MatSlideToggleModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_28__["MatSnackBarModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_29__["MatSortModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_30__["MatTableModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__["MatTabsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_32__["MatToolbarModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__["MatTooltipModule"],
            _angular_material_tree__WEBPACK_IMPORTED_MODULE_34__["MatTreeModule"],
            _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_35__["OverlayModule"],
        ],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_2__["MatBadgeModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_3__["MatBottomSheetModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_5__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_8__["MatChipsModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_9__["MatStepperModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__["MatDividerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatNativeDateModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_20__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_21__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_22__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_23__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_24__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_25__["MatSidenavModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_26__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_27__["MatSlideToggleModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_28__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_29__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_30__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_32__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__["MatTooltipModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_34__["MatTreeModule"],
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_35__["OverlayModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CustomMaterialModule, { imports: [_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_2__["MatBadgeModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_3__["MatBottomSheetModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_5__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_8__["MatChipsModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_9__["MatStepperModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__["MatDividerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatNativeDateModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_20__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_21__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_22__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_23__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_24__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_25__["MatSidenavModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_26__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_27__["MatSlideToggleModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_28__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_29__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_30__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_32__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__["MatTooltipModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_34__["MatTreeModule"],
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_35__["OverlayModule"]], exports: [_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_2__["MatBadgeModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_3__["MatBottomSheetModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_5__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_8__["MatChipsModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_9__["MatStepperModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__["MatDividerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatNativeDateModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_20__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_21__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_22__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_23__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_24__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_25__["MatSidenavModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_26__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_27__["MatSlideToggleModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_28__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_29__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_30__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_32__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__["MatTooltipModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_34__["MatTreeModule"],
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_35__["OverlayModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomMaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"],
                    _angular_material_badge__WEBPACK_IMPORTED_MODULE_2__["MatBadgeModule"],
                    _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_3__["MatBottomSheetModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_5__["MatButtonToggleModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_8__["MatChipsModule"],
                    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_9__["MatStepperModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"],
                    _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__["MatDividerModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridListModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatNativeDateModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_20__["MatPaginatorModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_21__["MatProgressBarModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_22__["MatProgressSpinnerModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_23__["MatRadioModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatRippleModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_24__["MatSelectModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_25__["MatSidenavModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_26__["MatSliderModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_27__["MatSlideToggleModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_28__["MatSnackBarModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_29__["MatSortModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_30__["MatTableModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__["MatTabsModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_32__["MatToolbarModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__["MatTooltipModule"],
                    _angular_material_tree__WEBPACK_IMPORTED_MODULE_34__["MatTreeModule"],
                    _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_35__["OverlayModule"],
                ],
                exports: [
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"],
                    _angular_material_badge__WEBPACK_IMPORTED_MODULE_2__["MatBadgeModule"],
                    _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_3__["MatBottomSheetModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_5__["MatButtonToggleModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_8__["MatChipsModule"],
                    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_9__["MatStepperModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"],
                    _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__["MatDividerModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridListModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatNativeDateModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_20__["MatPaginatorModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_21__["MatProgressBarModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_22__["MatProgressSpinnerModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_23__["MatRadioModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatRippleModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_24__["MatSelectModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_25__["MatSidenavModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_26__["MatSliderModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_27__["MatSlideToggleModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_28__["MatSnackBarModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_29__["MatSortModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_30__["MatTableModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__["MatTabsModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_32__["MatToolbarModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__["MatTooltipModule"],
                    _angular_material_tree__WEBPACK_IMPORTED_MODULE_34__["MatTreeModule"],
                    _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_35__["OverlayModule"],
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/dashboard/dash-menu/dash-menu.component.ts":
/*!************************************************************!*\
  !*** ./src/app/dashboard/dash-menu/dash-menu.component.ts ***!
  \************************************************************/
/*! exports provided: DashMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashMenuComponent", function() { return DashMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_data_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/data-storage.service */ "./src/app/services/data-storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");








function DashMenuComponent_p_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-progress-bar", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashMenuComponent_p_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.bankData.length);
} }
function DashMenuComponent_p_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-progress-bar", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashMenuComponent_p_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.payData.length);
} }
function DashMenuComponent_p_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-progress-bar", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashMenuComponent_p_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.totalPaid);
} }
class DashMenuComponent {
    constructor(dataStorageService, router) {
        this.dataStorageService = dataStorageService;
        this.router = router;
        this.bankData = [];
        this.payData = [];
        this.totalPaid = 0;
        this.bankLoading = false;
        this.payLoading = false;
        this.totalLoading = false;
    }
    ngOnInit() {
        this.bankLoading = false;
        this.payLoading = false;
        this.totalLoading = false;
        this.dataStorageService.fetchBankName()
            .subscribe(() => {
            this.bankData = this.dataStorageService.bankName;
            this.bankLoading = true;
        });
        this.dataStorageService.fetchPayData()
            .subscribe(() => {
            this.payData = this.dataStorageService.payFormData;
            this.payLoading = true;
            this.totalPaid = this.calcTotalPayment();
            this.totalLoading = true;
        });
    }
    gotoManageBank() {
        this.router.navigate(['/dashboard/manage-form']);
    }
    gotoManagePayment() {
        this.router.navigate(['/dashboard/manage-payment']);
    }
    calcTotalPayment() {
        let amount = 0;
        for (let k in this.payData) {
            amount += +this.payData[k].payAmount;
        }
        var x = amount;
        x = x.toString();
        var lastThree = x.substring(x.length - 3);
        var otherNumbers = x.substring(0, x.length - 3);
        if (otherNumbers != '')
            lastThree = ',' + lastThree;
        amount = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
        return amount;
    }
}
DashMenuComponent.ɵfac = function DashMenuComponent_Factory(t) { return new (t || DashMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_data_storage_service__WEBPACK_IMPORTED_MODULE_1__["DataStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
DashMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashMenuComponent, selectors: [["app-dash-menu"]], decls: 26, vars: 6, consts: [[1, "main-menu"], ["type", "button", "mat-raised-button", "", "color", "primary", 3, "click"], [1, "view-card"], [4, "ngIf"], ["mode", "indeterminate"]], template: function DashMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Dashbord Menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashMenuComponent_Template_button_click_4_listener() { return ctx.gotoManageBank(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Manage Bank Names ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashMenuComponent_Template_button_click_8_listener() { return ctx.gotoManagePayment(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Manage Payment Entries ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Banks Added");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, DashMenuComponent_p_14_Template, 2, 0, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, DashMenuComponent_p_15_Template, 2, 1, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Payment Done");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, DashMenuComponent_p_19_Template, 2, 0, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, DashMenuComponent_p_20_Template, 2, 1, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Total (\u20B9)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, DashMenuComponent_p_24_Template, 2, 0, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, DashMenuComponent_p_25_Template, 2, 1, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.bankLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.bankLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.payLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.payLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.totalLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.totalLoading);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__["MatProgressBar"]], styles: ["h4[_ngcontent-%COMP%] {\r\n  margin-bottom: 10px;\r\n}\r\nmat-card[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  \r\n}\r\n@media only screen and (max-width: 500px) {\r\n  .main-menu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    display: block;\r\n    margin-bottom: 10px;\r\n  }\r\n  .main-menu[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n}\r\n.view-card[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  margin: 0 -10px;\r\n  flex-wrap: wrap;\r\n}\r\n.view-card[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%] {\r\n  width: calc(33.33% - 52px);\r\n  margin: 10px 10px;\r\n  display: inline-block;\r\n}\r\n.view-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  font-size: 16px;\r\n}\r\n.view-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  font-size: 34px;\r\n  margin: 10px 0 0;\r\n}\r\n@media only screen and (max-width: 500px) {\r\n  .view-card[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%] {\r\n    width: calc(100% - 52px);\r\n    margin: 10px 10px 0;\r\n    display: inline-block;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2gtbWVudS9kYXNoLW1lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0Usc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRTtJQUNFLGNBQWM7SUFDZCxtQkFBbUI7RUFDckI7RUFDQTtJQUNFLGFBQWE7RUFDZjtBQUNGO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLGVBQWU7QUFDakI7QUFDQTtFQUNFLDBCQUEwQjtFQUMxQixpQkFBaUI7RUFDakIscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxTQUFTO0VBQ1QsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0U7SUFDRSx3QkFBd0I7SUFDeEIsbUJBQW1CO0lBQ25CLHFCQUFxQjtFQUN2QjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2Rhc2gtbWVudS9kYXNoLW1lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImg0IHtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbm1hdC1jYXJkIGRpdiB7XHJcbiAgLyogbWFyZ2luLXRvcDogMTBweDsgKi9cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgLm1haW4tbWVudSBidXR0b24ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIH1cclxuICAubWFpbi1tZW51IHNwYW4ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuLnZpZXctY2FyZCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW46IDAgLTEwcHg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcbi52aWV3LWNhcmQgbWF0LWNhcmQge1xyXG4gIHdpZHRoOiBjYWxjKDMzLjMzJSAtIDUycHgpO1xyXG4gIG1hcmdpbjogMTBweCAxMHB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG4udmlldy1jYXJkIGgzIHtcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcbi52aWV3LWNhcmQgcCB7XHJcbiAgZm9udC1zaXplOiAzNHB4O1xyXG4gIG1hcmdpbjogMTBweCAwIDA7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcclxuICAudmlldy1jYXJkIG1hdC1jYXJkIHtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA1MnB4KTtcclxuICAgIG1hcmdpbjogMTBweCAxMHB4IDA7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashMenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dash-menu',
                templateUrl: './dash-menu.component.html',
                styleUrls: ['./dash-menu.component.css']
            }]
    }], function () { return [{ type: src_app_services_data_storage_service__WEBPACK_IMPORTED_MODULE_1__["DataStorageService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_data_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data-storage.service */ "./src/app/services/data-storage.service.ts");




class DashboardComponent {
    constructor(router, dataStorageService) {
        this.router = router;
        this.dataStorageService = dataStorageService;
    }
    ngOnInit() {
        // this.dataStorageService.fetchBankName();
    }
    managePage() {
        this.router.navigate(['/dashboard/manage-form']);
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_storage_service__WEBPACK_IMPORTED_MODULE_2__["DataStorageService"])); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 2, vars: 0, consts: [[1, "main"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".main[_ngcontent-%COMP%] {\r\n  margin: 10px;\r\n}\r\n.main[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%] {\r\n  margin-bottom: 10px;\r\n}\r\n.main[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]:last-child {\r\n  margin-bottom: 0;\r\n}\r\ntable[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\nmat-form-field[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7RUFDRSxXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbiB7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG59XHJcbi5tYWluIG1hdC1jYXJkIHtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbi5tYWluIG1hdC1jYXJkOmxhc3QtY2hpbGQge1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxudGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbm1hdC1mb3JtLWZpZWxkIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dashboard',
                templateUrl: './dashboard.component.html',
                styleUrls: ['./dashboard.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _services_data_storage_service__WEBPACK_IMPORTED_MODULE_2__["DataStorageService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/dashboard/manage-form/manage-form.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/dashboard/manage-form/manage-form.component.ts ***!
  \****************************************************************/
/*! exports provided: ManageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageComponent", function() { return ManageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_data_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/data-storage.service */ "./src/app/services/data-storage.service.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");










function ManageComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Bank Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "textarea", 5, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManageComponent_div_3_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.updateBankNames(_r2.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Update Bank Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " | ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManageComponent_div_3_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.fetchBankName(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Fetch Bank Names ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.fullBankNames);
} }
function ManageComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ManageComponent {
    constructor(router, dataStorageService) {
        this.router = router;
        this.dataStorageService = dataStorageService;
        this.fullBankNames = '';
        this.isLoading = false;
    }
    ngOnInit() {
        // this.addBankNamesToForm();
        // this.dataStorageService.fetchBankName();
        this.fetchBankName();
    }
    goBack() {
        this.router.navigate(['/dashboard']);
    }
    addBankNamesToForm() {
        this.fullBankNames = '';
        for (let i = 0; i < this.bankName.length; i++) {
            if (this.bankName[i] != '') {
                this.fullBankNames += `${this.bankName[i]}\n`;
            }
        }
    }
    updateBankNames(bankList) {
        this.isLoading = true;
        var arrayOfLines = bankList.split('\n');
        this.dataStorageService.storeBankName(arrayOfLines)
            .subscribe(() => {
            this.isLoading = false;
            this.dataStorageService.openSnackBar('Bank Name updated successfully', 'Okay');
            this.fetchBankName();
        });
    }
    fetchBankName() {
        this.isLoading = true;
        this.dataStorageService.fetchBankName()
            .subscribe(() => {
            this.isLoading = false;
            this.bankName = this.dataStorageService.bankName;
            console.log(this.bankName);
            this.addBankNamesToForm();
            this.dataStorageService.openSnackBar('Bank Name list fetched successfully', 'Okay');
        });
    }
}
ManageComponent.ɵfac = function ManageComponent_Factory(t) { return new (t || ManageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_data_storage_service__WEBPACK_IMPORTED_MODULE_2__["DataStorageService"])); };
ManageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ManageComponent, selectors: [["app-manage"]], decls: 5, vars: 2, consts: [["type", "button", "color", "primary", "mat-raised-button", "", 2, "margin-bottom", "10px", 3, "click"], [1, "fas", "fa-arrow-left"], [4, "ngIf"], ["class", "my-spinner", 4, "ngIf"], ["appearance", "fill", 1, "w-100"], ["matInput", "", "rows", "20"], ["bankNamesTextArea", ""], ["type", "button", "mat-raised-button", "", "color", "primary", 3, "click"], [1, "my-spinner"]], template: function ManageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManageComponent_Template_button_click_0_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u00A0\u00A0 go back\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ManageComponent_div_3_Template, 15, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ManageComponent_div_4_Template, 2, 0, "div", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__["MatSpinner"]], styles: ["mat-form-field[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL21hbmFnZS1mb3JtL21hbmFnZS1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvbWFuYWdlLWZvcm0vbWFuYWdlLWZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1mb3JtLWZpZWxkIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ManageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-manage',
                templateUrl: './manage-form.component.html',
                styleUrls: ['./manage-form.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: src_app_services_data_storage_service__WEBPACK_IMPORTED_MODULE_2__["DataStorageService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/dashboard/manage-payment/manage-payment.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/dashboard/manage-payment/manage-payment.component.ts ***!
  \**********************************************************************/
/*! exports provided: ManagePaymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagePaymentComponent", function() { return ManagePaymentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_data_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/data-storage.service */ "./src/app/services/data-storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _data_table_data_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../data-table/data-table.component */ "./src/app/data-table/data-table.component.ts");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");









function ManagePaymentComponent_mat_card_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Payment Entries Database");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-data-table");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ManagePaymentComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ManagePaymentComponent {
    constructor(dataStorageService, router) {
        this.dataStorageService = dataStorageService;
        this.router = router;
        this.isLoading = false;
    }
    ngOnInit() {
    }
    goBack() {
        this.router.navigate(['/dashboard']);
    }
}
ManagePaymentComponent.ɵfac = function ManagePaymentComponent_Factory(t) { return new (t || ManagePaymentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_data_storage_service__WEBPACK_IMPORTED_MODULE_1__["DataStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
ManagePaymentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ManagePaymentComponent, selectors: [["app-manage-payment"]], decls: 5, vars: 2, consts: [["type", "button", "color", "primary", "mat-raised-button", "", 2, "margin-bottom", "10px", 3, "click"], [1, "fas", "fa-arrow-left"], [4, "ngIf"], ["class", "my-spinner", 4, "ngIf"], [1, "my-spinner"]], template: function ManagePaymentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagePaymentComponent_Template_button_click_0_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u00A0\u00A0 go back\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ManagePaymentComponent_mat_card_3_Template, 4, 0, "mat-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ManagePaymentComponent_div_4_Template, 2, 0, "div", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _data_table_data_table_component__WEBPACK_IMPORTED_MODULE_6__["DataTableComponent"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__["MatSpinner"]], styles: ["mat-table[_ngcontent-%COMP%], table[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  overflow: auto;\r\n}\r\n\r\n.mat-header-cell[_ngcontent-%COMP%], .mat-footer-cell[_ngcontent-%COMP%], .mat-cell[_ngcontent-%COMP%] {\r\n  box-sizing: border-box;\r\n}\r\n\r\n.mat-column-filler[_ngcontent-%COMP%] {\r\n  padding: 0 8px;\r\n  font-size: 10px;\r\n  text-align: center;\r\n}\r\n\r\n.w-80px[_ngcontent-%COMP%] {\r\n  min-width: 80px;\r\n}\r\n\r\n.w-100px[_ngcontent-%COMP%] {\r\n  min-width: 100px;\r\n}\r\n\r\n.w-120px[_ngcontent-%COMP%] {\r\n  min-width: 150px;\r\n}\r\n\r\n.w-300px[_ngcontent-%COMP%] {\r\n  min-width: 300px;\r\n}\r\n\r\nmat-cell.w-400px[_ngcontent-%COMP%] {\r\n  font-size: 12px;\r\n}\r\n\r\n.w-500px[_ngcontent-%COMP%] {\r\n  min-width: 500px;\r\n}\r\n\r\n.mat-form-field[_ngcontent-%COMP%] {\r\n  font-size: 14px;\r\n  width: 100%;\r\n}\r\n\r\n.col-SUCCESS[_ngcontent-%COMP%] {\r\n  color: #3faf4b;\r\n}\r\n\r\n.col-PENDING[_ngcontent-%COMP%] {\r\n  color: #10ac84;\r\n}\r\n\r\n.col-AWAITED[_ngcontent-%COMP%] {\r\n  color: #ff6300;\r\n}\r\n\r\n.col-DENIED[_ngcontent-%COMP%] {\r\n  color: #ec1b30;\r\n}\r\n\r\n.col-REJECTED[_ngcontent-%COMP%] {\r\n  color: #576474;\r\n}\r\n\r\nmat-row[_ngcontent-%COMP%]:hover {\r\n  background: #e6e6e6;\r\n}\r\n\r\nmat-header-cell[_ngcontent-%COMP%], mat-cell[_ngcontent-%COMP%] {\r\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\r\n}\r\n\r\nmat-header-row[_ngcontent-%COMP%], mat-row[_ngcontent-%COMP%] {\r\n  border-bottom-width: 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL21hbmFnZS1wYXltZW50L21hbmFnZS1wYXltZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsV0FBVztFQUNYLGNBQWM7QUFDaEI7O0FBRUE7OztFQUdFLHNCQUFzQjtBQUN4Qjs7QUFDQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSxlQUFlO0VBQ2YsV0FBVztBQUNiOztBQUNBO0VBQ0UsY0FBYztBQUNoQjs7QUFDQTtFQUNFLGNBQWM7QUFDaEI7O0FBQ0E7RUFDRSxjQUFjO0FBQ2hCOztBQUNBO0VBQ0UsY0FBYztBQUNoQjs7QUFDQTtFQUNFLGNBQWM7QUFDaEI7O0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7O0FBQ0E7O0VBRUUsNENBQTRDO0FBQzlDOztBQUNBOztFQUVFLHNCQUFzQjtBQUN4QiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9tYW5hZ2UtcGF5bWVudC9tYW5hZ2UtcGF5bWVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LXRhYmxlLFxyXG50YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuXHJcbi5tYXQtaGVhZGVyLWNlbGwsXHJcbi5tYXQtZm9vdGVyLWNlbGwsXHJcbi5tYXQtY2VsbCB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG4ubWF0LWNvbHVtbi1maWxsZXIge1xyXG4gIHBhZGRpbmc6IDAgOHB4O1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnctODBweCB7XHJcbiAgbWluLXdpZHRoOiA4MHB4O1xyXG59XHJcbi53LTEwMHB4IHtcclxuICBtaW4td2lkdGg6IDEwMHB4O1xyXG59XHJcbi53LTEyMHB4IHtcclxuICBtaW4td2lkdGg6IDE1MHB4O1xyXG59XHJcbi53LTMwMHB4IHtcclxuICBtaW4td2lkdGg6IDMwMHB4O1xyXG59XHJcbm1hdC1jZWxsLnctNDAwcHgge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG4udy01MDBweCB7XHJcbiAgbWluLXdpZHRoOiA1MDBweDtcclxufVxyXG4ubWF0LWZvcm0tZmllbGQge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4uY29sLVNVQ0NFU1Mge1xyXG4gIGNvbG9yOiAjM2ZhZjRiO1xyXG59XHJcbi5jb2wtUEVORElORyB7XHJcbiAgY29sb3I6ICMxMGFjODQ7XHJcbn1cclxuLmNvbC1BV0FJVEVEIHtcclxuICBjb2xvcjogI2ZmNjMwMDtcclxufVxyXG4uY29sLURFTklFRCB7XHJcbiAgY29sb3I6ICNlYzFiMzA7XHJcbn1cclxuLmNvbC1SRUpFQ1RFRCB7XHJcbiAgY29sb3I6ICM1NzY0NzQ7XHJcbn1cclxubWF0LXJvdzpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogI2U2ZTZlNjtcclxufVxyXG5tYXQtaGVhZGVyLWNlbGwsXHJcbm1hdC1jZWxsIHtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxufVxyXG5tYXQtaGVhZGVyLXJvdyxcclxubWF0LXJvdyB7XHJcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ManagePaymentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-manage-payment',
                templateUrl: './manage-payment.component.html',
                styleUrls: ['./manage-payment.component.css']
            }]
    }], function () { return [{ type: src_app_services_data_storage_service__WEBPACK_IMPORTED_MODULE_1__["DataStorageService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/data-table/data-table-datasource.ts":
/*!*****************************************************!*\
  !*** ./src/app/data-table/data-table-datasource.ts ***!
  \*****************************************************/
/*! exports provided: DataTableDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableDataSource", function() { return DataTableDataSource; });
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/collections.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



// TODO: Replace this with your own data model type
// export interface DataTableItem {
//   name: string;
//   id: number;
// }
// TODO: replace this with real data from your application
// const EXAMPLE_DATA: DataTableItem[] = [
//   {id: 1, name: 'Hydrogen'},
//   {id: 2, name: 'Helium'},
//   {id: 3, name: 'Lithium'},
//   {id: 4, name: 'Beryllium'},
//   {id: 5, name: 'Boron'},
// ];
/**
 * Data source for the DataTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
class DataTableDataSource extends _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__["DataSource"] {
    constructor() {
        super();
        // EXAMPLE_DATA
        this.data = [];
    }
    /**
     * Connect this data source to the table. The table will only update when
     * the returned stream emits new items.
     * @returns A stream of the items to be rendered.
     */
    connect() {
        // Combine everything that affects the rendered data into one update
        // stream for the data-table to consume.
        const dataMutations = [
            Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.data),
            this.paginator.page,
            this.sort.sortChange
        ];
        // console.log(11);
        // console.log(this.data);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(...dataMutations).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(() => {
            return this.getPagedData(this.getSortedData([...this.data]));
        }));
    }
    /**
     *  Called when the table is being destroyed. Use this function, to clean up
     * any open connections or free any held resources that were set up during connect.
     */
    disconnect() { }
    /**
     * Paginate the data (client-side). If you're using server-side pagination,
     * this would be replaced by requesting the appropriate data from the server.
     */
    getPagedData(data) {
        const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
        return data.splice(startIndex, this.paginator.pageSize);
    }
    /**
     * Sort the data (client-side). If you're using server-side sorting,
     * this would be replaced by requesting the appropriate data from the server.
     */
    getSortedData(data) {
        if (!this.sort.active || this.sort.direction === '') {
            return data;
        }
        return data.sort((a, b) => {
            const isAsc = this.sort.direction === 'asc';
            switch (this.sort.active) {
                case 'benefName': return compare(a.benefName, b.benefName, isAsc);
                case 'senderName': return compare(a.senderName, b.senderName, isAsc);
                case 'payType': return compare(a.payType, b.payType, isAsc);
                case 'ifscCode': return compare(a.ifscCode, b.ifscCode, isAsc);
                case 'bankName': return compare(a.bankName, b.bankName, isAsc);
                case 'payAmount': return compare(a.payAmount, b.payAmount, isAsc);
                case 'payAmountInWords': return compare(a.payAmountInWords, b.payAmountInWords, isAsc);
                case 'todayDate': return compare(a.todayDate, b.todayDate, isAsc);
                case 'todayTime': return compare(a.todayTime, b.todayTime, isAsc);
                case 'transactionId': return compare(a.transactionId, b.transactionId, isAsc);
                case 'status': return compare(a.status, b.status, isAsc);
                case 'delId': return compare(a.delId, b.delId, isAsc);
                case 'senderMobNo': return compare(+a.senderMobNo, +b.senderMobNo, isAsc);
                case 'accountNumber': return compare(+a.accountNumber, +b.accountNumber, isAsc);
                default: return 0;
            }
        });
    }
}
/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}


/***/ }),

/***/ "./src/app/data-table/data-table.component.ts":
/*!****************************************************!*\
  !*** ./src/app/data-table/data-table.component.ts ***!
  \****************************************************/
/*! exports provided: DataTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableComponent", function() { return DataTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _data_table_datasource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data-table-datasource */ "./src/app/data-table/data-table-datasource.ts");
/* harmony import */ var _my_modal_delete_pay_data_modal_delete_pay_data_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../my-modal/delete-pay-data-modal/delete-pay-data-modal.component */ "./src/app/my-modal/delete-pay-data-modal/delete-pay-data-modal.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _services_data_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/data-storage.service */ "./src/app/services/data-storage.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");















function DataTableComponent_th_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DataTableComponent_td_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r33 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _r30.pageIndex * _r30.pageSize + (i_r33 + 1), " ");
} }
function DataTableComponent_th_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Benifeciery Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DataTableComponent_td_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dataSource_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", dataSource_r34.benefName, " ");
} }
function DataTableComponent_th_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Sender Mobile No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DataTableComponent_td_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dataSource_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", dataSource_r35.senderMobNo, " ");
} }
function DataTableComponent_th_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Sender Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DataTableComponent_td_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dataSource_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", dataSource_r36.senderName, " ");
} }
function DataTableComponent_th_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Account No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DataTableComponent_td_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dataSource_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", dataSource_r37.accountNumber, " ");
} }
function DataTableComponent_th_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DataTableComponent_td_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dataSource_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", dataSource_r38.payType, " ");
} }
function DataTableComponent_th_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "IFSC Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DataTableComponent_td_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dataSource_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", dataSource_r39.ifscCode, " ");
} }
function DataTableComponent_th_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Bank Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DataTableComponent_td_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dataSource_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", dataSource_r40.bankName, " ");
} }
function DataTableComponent_th_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DataTableComponent_td_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dataSource_r41 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", dataSource_r41.payAmountInWords, " ");
} }
function DataTableComponent_th_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DataTableComponent_td_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dataSource_r42 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", dataSource_r42.todayDate, " ");
} }
function DataTableComponent_th_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DataTableComponent_td_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dataSource_r43 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", dataSource_r43.todayTime, " ");
} }
function DataTableComponent_th_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Transaction ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DataTableComponent_td_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dataSource_r44 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", dataSource_r44.transactionId, " ");
} }
function DataTableComponent_th_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DataTableComponent_td_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dataSource_r45 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("w-100px col-", dataSource_r45.status, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", dataSource_r45.status, " ");
} }
function DataTableComponent_th_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DataTableComponent_td_43_Template(rf, ctx) { if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataTableComponent_td_43_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48); const dataSource_r46 = ctx.$implicit; const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r47.onDeletePayData(dataSource_r46.delId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DataTableComponent_tr_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 44);
} }
function DataTableComponent_tr_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 45);
} }
function DataTableComponent_div_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return [5, 10, 20, 50, 100, 250, 500]; };
class DataTableComponent {
    constructor(dialog, dataStorageService) {
        this.dialog = dialog;
        this.dataStorageService = dataStorageService;
        this.dataSource = new _data_table_datasource__WEBPACK_IMPORTED_MODULE_4__["DataTableDataSource"]();
        this.isLoading = false;
        this.displayedColumns = [
            'index',
            'benefName',
            'senderMobNo',
            'senderName',
            'accountNumber',
            'payType',
            'ifscCode',
            'bankName',
            'payAmountInWords',
            'todayDate',
            'todayTime',
            'transactionId',
            'status',
            'delete',
        ];
    }
    ngOnInit() {
        this.isLoading = true;
        this.dataStorageService.fetchPayData()
            .subscribe(() => {
            // this.dataSource = new DataTableDataSource();
            console.log(this.dataStorageService.payFormData);
            console.log(this.dataSource);
            this.dataSource.data = this.dataStorageService.payFormData;
            // this.dataSource = new DataTableDataSource();
            this.dataSource.sort = this.sort;
            this.dataSource.paginator = this.paginator;
            this.table.dataSource = this.dataSource;
            this.isLoading = false;
        });
    }
    ngAfterViewInit() {
        // this.dataSource.sort = this.sort;
        // this.dataSource.paginator = this.paginator;
        // this.table.dataSource = this.dataSource;
    }
    onDeletePayData(delId) {
        this.dataSource.data.splice(10, 1);
        // console.log(this.dataSource.data);
        // return;
        this.openDialog();
        // console.log(delId);
        this.dataStorageService.deletePaymentId = delId;
        // this.dataStorageService.deletePayData(delId)
        //   .subscribe(res => {
        //     // console.log(res);
        //   });
    }
    openDialog() {
        const dialogRef = this.dialog.open(_my_modal_delete_pay_data_modal_delete_pay_data_modal_component__WEBPACK_IMPORTED_MODULE_5__["DeletePayDataModalComponent"]);
        dialogRef.afterClosed().subscribe(result => {
            // console.log('The dialog was closed');
        });
    }
}
DataTableComponent.ɵfac = function DataTableComponent_Factory(t) { return new (t || DataTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_storage_service__WEBPACK_IMPORTED_MODULE_7__["DataStorageService"])); };
DataTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DataTableComponent, selectors: [["app-data-table"]], viewQuery: function DataTableComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
    } }, decls: 49, vars: 9, consts: [[1, "data-table"], ["mat-table", "", "matSort", "", "aria-label", "dataSource"], ["matColumnDef", "index", "sticky", ""], ["class", "w-30px", "mat-sort-header", "", 4, "matHeaderCellDef"], ["class", "w-30px", 4, "matCellDef"], ["matColumnDef", "benefName"], ["class", "w-120px", "mat-sort-header", "", 4, "matHeaderCellDef"], ["class", "w-120px", 4, "matCellDef"], ["matColumnDef", "senderMobNo"], ["matColumnDef", "senderName"], ["matColumnDef", "accountNumber"], ["matColumnDef", "payType"], ["class", "w-80px", "mat-sort-header", "", 4, "matHeaderCellDef"], ["class", "w-80px", 4, "matCellDef"], ["matColumnDef", "ifscCode"], ["class", "w-100px", "mat-sort-header", "", 4, "matHeaderCellDef"], ["class", "w-100px", 4, "matCellDef"], ["matColumnDef", "bankName"], ["matColumnDef", "payAmountInWords"], ["class", "w-300px", "mat-sort-header", "", 4, "matHeaderCellDef"], ["class", "w-300px", 4, "matCellDef"], ["matColumnDef", "todayDate"], ["matColumnDef", "todayTime"], ["matColumnDef", "transactionId"], ["matColumnDef", "status"], [3, "class", 4, "matCellDef"], ["matColumnDef", "delete"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "length", "pageIndex", "pageSize", "pageSizeOptions"], ["paginator", ""], ["class", "my-spinner", 4, "ngIf"], ["mat-sort-header", "", 1, "w-30px"], [1, "w-30px"], ["mat-sort-header", "", 1, "w-120px"], [1, "w-120px"], ["mat-sort-header", "", 1, "w-80px"], [1, "w-80px"], ["mat-sort-header", "", 1, "w-100px"], [1, "w-100px"], ["mat-sort-header", "", 1, "w-300px"], [1, "w-300px"], ["type", "button", "color", "warn", "mat-raised-button", "", 3, "click"], [1, "fas", "fa-trash"], ["mat-header-row", ""], ["mat-row", ""], [1, "my-spinner"]], template: function DataTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](2, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DataTableComponent_th_3_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DataTableComponent_td_4_Template, 2, 1, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](5, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DataTableComponent_th_6_Template, 2, 0, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DataTableComponent_td_7_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](8, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, DataTableComponent_th_9_Template, 2, 0, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, DataTableComponent_td_10_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](11, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, DataTableComponent_th_12_Template, 2, 0, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, DataTableComponent_td_13_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](14, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, DataTableComponent_th_15_Template, 2, 0, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, DataTableComponent_td_16_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](17, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, DataTableComponent_th_18_Template, 2, 0, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, DataTableComponent_td_19_Template, 2, 1, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](20, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, DataTableComponent_th_21_Template, 2, 0, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, DataTableComponent_td_22_Template, 2, 1, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](23, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, DataTableComponent_th_24_Template, 2, 0, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, DataTableComponent_td_25_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](26, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, DataTableComponent_th_27_Template, 2, 0, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, DataTableComponent_td_28_Template, 2, 1, "td", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](29, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, DataTableComponent_th_30_Template, 2, 0, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, DataTableComponent_td_31_Template, 2, 1, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](32, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, DataTableComponent_th_33_Template, 2, 0, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, DataTableComponent_td_34_Template, 2, 1, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](35, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, DataTableComponent_th_36_Template, 2, 0, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, DataTableComponent_td_37_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](38, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, DataTableComponent_th_39_Template, 2, 0, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, DataTableComponent_td_40_Template, 2, 4, "td", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](41, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, DataTableComponent_th_42_Template, 2, 0, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, DataTableComponent_td_43_Template, 3, 0, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, DataTableComponent_tr_44_Template, 1, 0, "tr", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, DataTableComponent_tr_45_Template, 1, 0, "tr", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "mat-paginator", 29, 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, DataTableComponent_div_48_Template, 2, 0, "div", 31);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns)("matHeaderRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("length", ctx.dataSource == null ? null : ctx.dataSource.data.length)("pageIndex", 0)("pageSize", 10)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
    } }, directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSortHeader"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRow"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__["MatSpinner"]], styles: [".full-width-table[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n.data-table[_ngcontent-%COMP%] {\r\n  overflow: auto;\r\n}\r\n\r\nmat-table[_ngcontent-%COMP%], table[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  font-size: 14px;\r\n}\r\n.mat-header-cell[_ngcontent-%COMP%], .mat-footer-cell[_ngcontent-%COMP%], .mat-cell[_ngcontent-%COMP%] {\r\n  box-sizing: border-box;\r\n}\r\n.mat-column-filler[_ngcontent-%COMP%] {\r\n  padding: 0 8px;\r\n  font-size: 10px;\r\n  text-align: center;\r\n}\r\n.w-30px[_ngcontent-%COMP%] {\r\n  min-width: 30px;\r\n}\r\n.w-60px[_ngcontent-%COMP%] {\r\n  min-width: 60px;\r\n}\r\n.w-80px[_ngcontent-%COMP%] {\r\n  min-width: 80px;\r\n}\r\n.w-100px[_ngcontent-%COMP%] {\r\n  min-width: 100px;\r\n}\r\n.w-120px[_ngcontent-%COMP%] {\r\n  min-width: 150px;\r\n}\r\n.w-300px[_ngcontent-%COMP%] {\r\n  min-width: 300px;\r\n}\r\nmat-cell.w-400px[_ngcontent-%COMP%] {\r\n  font-size: 12px;\r\n}\r\n.w-500px[_ngcontent-%COMP%] {\r\n  min-width: 500px;\r\n}\r\n.mat-form-field[_ngcontent-%COMP%] {\r\n  font-size: 14px;\r\n  width: 100%;\r\n}\r\n.col-SUCCESS[_ngcontent-%COMP%] {\r\n  color: #3faf4b;\r\n}\r\n.col-PENDING[_ngcontent-%COMP%] {\r\n  color: #10ac84;\r\n}\r\n.col-AWAITED[_ngcontent-%COMP%] {\r\n  color: #ff6300;\r\n}\r\n.col-DENIED[_ngcontent-%COMP%] {\r\n  color: #ec1b30;\r\n}\r\n.col-REJECTED[_ngcontent-%COMP%] {\r\n  color: #576474;\r\n}\r\nmat-row[_ngcontent-%COMP%]:hover {\r\n  background: #e6e6e6;\r\n}\r\nmat-header-cell[_ngcontent-%COMP%], mat-cell[_ngcontent-%COMP%] {\r\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\r\n}\r\nmat-header-row[_ngcontent-%COMP%], mat-row[_ngcontent-%COMP%] {\r\n  border-bottom-width: 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGF0YS10YWJsZS9kYXRhLXRhYmxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTs7OztHQUlHO0FBQ0g7O0VBRUUsV0FBVztFQUNYLGVBQWU7QUFDakI7QUFFQTs7O0VBR0Usc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsV0FBVztBQUNiO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTs7RUFFRSw0Q0FBNEM7QUFDOUM7QUFDQTs7RUFFRSxzQkFBc0I7QUFDeEIiLCJmaWxlIjoic3JjL2FwcC9kYXRhLXRhYmxlL2RhdGEtdGFibGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mdWxsLXdpZHRoLXRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4uZGF0YS10YWJsZSB7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuLyogQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NzBweCkge1xyXG4gIC5kYXRhLXRhYmxlIHtcclxuICAgIGhlaWdodDogNjB2aDtcclxuICB9XHJcbn0gKi9cclxubWF0LXRhYmxlLFxyXG50YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4ubWF0LWhlYWRlci1jZWxsLFxyXG4ubWF0LWZvb3Rlci1jZWxsLFxyXG4ubWF0LWNlbGwge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuLm1hdC1jb2x1bW4tZmlsbGVyIHtcclxuICBwYWRkaW5nOiAwIDhweDtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi53LTMwcHgge1xyXG4gIG1pbi13aWR0aDogMzBweDtcclxufVxyXG4udy02MHB4IHtcclxuICBtaW4td2lkdGg6IDYwcHg7XHJcbn1cclxuLnctODBweCB7XHJcbiAgbWluLXdpZHRoOiA4MHB4O1xyXG59XHJcbi53LTEwMHB4IHtcclxuICBtaW4td2lkdGg6IDEwMHB4O1xyXG59XHJcbi53LTEyMHB4IHtcclxuICBtaW4td2lkdGg6IDE1MHB4O1xyXG59XHJcbi53LTMwMHB4IHtcclxuICBtaW4td2lkdGg6IDMwMHB4O1xyXG59XHJcbm1hdC1jZWxsLnctNDAwcHgge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG4udy01MDBweCB7XHJcbiAgbWluLXdpZHRoOiA1MDBweDtcclxufVxyXG4ubWF0LWZvcm0tZmllbGQge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4uY29sLVNVQ0NFU1Mge1xyXG4gIGNvbG9yOiAjM2ZhZjRiO1xyXG59XHJcbi5jb2wtUEVORElORyB7XHJcbiAgY29sb3I6ICMxMGFjODQ7XHJcbn1cclxuLmNvbC1BV0FJVEVEIHtcclxuICBjb2xvcjogI2ZmNjMwMDtcclxufVxyXG4uY29sLURFTklFRCB7XHJcbiAgY29sb3I6ICNlYzFiMzA7XHJcbn1cclxuLmNvbC1SRUpFQ1RFRCB7XHJcbiAgY29sb3I6ICM1NzY0NzQ7XHJcbn1cclxubWF0LXJvdzpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogI2U2ZTZlNjtcclxufVxyXG5tYXQtaGVhZGVyLWNlbGwsXHJcbm1hdC1jZWxsIHtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxufVxyXG5tYXQtaGVhZGVyLXJvdyxcclxubWF0LXJvdyB7XHJcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-data-table',
                templateUrl: './data-table.component.html',
                styleUrls: ['./data-table.component.css']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] }, { type: _services_data_storage_service__WEBPACK_IMPORTED_MODULE_7__["DataStorageService"] }]; }, { paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]]
        }], sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"]]
        }], table: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"]]
        }] }); })();


/***/ }),

/***/ "./src/app/home-page/home-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/home-page/home-page.component.ts ***!
  \**************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");






class HomePageComponent {
    constructor() {
        this.imgCheckedOne = false;
        this.imgCheckedTwo = true;
        this.imgCheckedThree = true;
        this.imgCheckedFour = true;
        this.imgCheckedFive = true;
    }
    ngOnInit() {
        // switch (new Date().getDay()) {
        //   case 0:
        //     day = "Sunday";
        //     break;
        //   case 1:
        //     day = "Monday";
        //     break;
        //   case 2:
        //     day = "Tuesday";
        //     break;
        //   case 3:
        //     day = "Wednesday";
        //     break;
        //   case 4:
        //     day = "Thursday";
        //     break;
        //   case 5:
        //     day = "Friday";
        //     break;
        //   case  6:
        //     day = "Saturday";
        // }
    }
}
HomePageComponent.ɵfac = function HomePageComponent_Factory(t) { return new (t || HomePageComponent)(); };
HomePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomePageComponent, selectors: [["app-home-page"]], decls: 184, vars: 0, consts: [[1, "carousel"], [1, "slides"], ["type", "radio", "name", "radio-buttons", "id", "img-1", "checked", ""], [1, "slide-container"], [1, "slide-image"], ["src", "assets/img/banner/1.jpg"], [1, "banner-text"], ["mat-raised-button", "", "type", "button", "color", "primary", "routerLinkActive", "active", "routerLink", "/add-pay-form", 1, "btn-submit"], [1, "services", "we-offer-area", "text-center", "bg-gray"], ["id", "services", 1, "my-title", "m-0"], [1, "container"], [1, "row"], [1, "col-md-12"], [1, "site-heading", "text-center"], [1, "row", "our-offer-items", "less-carousel"], [1, "col-lg-3", "col-md-4", "col-6", "equal-height"], [1, "item"], [1, "fas", "fa-globe-americas"], [1, "fas", "fa-ticket-alt"], [1, "fas", "fa-rupee-sign"], [1, "fas", "fa-user-friends"], [1, "fas", "fa-heartbeat"], [1, "fas", "fa-balance-scale"], [1, "footer-section"], ["id", "contactus", 1, "footer-cta", "pt-5", "pb-5"], [1, "col-md-4", "col-12"], [1, "single-cta"], [1, "fas", "fa-map-marker-alt"], [1, "cta-text"], [1, "fas", "fa-phone"], ["href", "tel:+918927485537"], [1, "far", "fa-envelope-open"], ["href", "mailto:asrafcomputerandservices@gmail.com"], [1, "footer-content", "pt-5", "pb-5"], [1, "col-xl-4", "col-md-12", "col-12"], [1, "footer-widget"], [1, "footer-logo"], ["href", "index.html"], [1, "footer-text"], [1, "footer-social-icon"], ["href", "#"], [1, "fab", "fa-facebook-f", "facebook-bg"], [1, "fab", "fa-twitter", "twitter-bg"], [1, "fab", "fa-google-plus-g", "google-bg"], [1, "col-xl-4", "col-md-6", "col-12"], [1, "footer-widget-heading"], ["href", "#top"], ["href", "#services"], ["href", "#aboutus"], ["href", "#contactus"], [1, "footer-text", "mb-25"], [1, "subscribe-form"], ["action", "#"], ["type", "text", "placeholder", "Email Address"], [1, "fab", "fa-telegram-plane"], [1, "copyright-area"], [1, "col-6", "text-center", "text-lg-left", "col-12"], [1, "copyright-text"], [1, "col-6", "d-sm-none", "text-right"], [1, "footer-menu"], ["routerLink", "/add-pay-form"]], template: function HomePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "SPEND TIME TO MAKE MONEY");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "SPEND TIME TO ENJOY MONEY");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "India's Fastest Online Payment Center");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " New Payment ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h4", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Our Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "What we ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Offer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-card", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "ONLINE SERVICES");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-card", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Air & TRAIN TICKETING");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-card", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "MONEY TRANSFER");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-card", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "LIFE INSURANCE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-card", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "HEALTH & GEN. INSURANCE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-card", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "LOAN SERVICES");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "footer", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Find us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Head Office:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " Champasari, Ward No. 46, Siliguri - 734003 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Branch:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " Jeevan Deep Building, Sevoke Road, Siliguri - 734001 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Call us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Ashraf:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "89274 85537");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Mail us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "E-mail:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "asrafcomputerandservices@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "AA Enterprises");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Online payment portal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, " India's fastest money transfer. Spend time to make money, Spend time to enjoy money ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Follow us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "i", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "i", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "i", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "Useful Links");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "a", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "Our Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "a", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "About us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "Expert Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "Latest News");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "a", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "Contact us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "Subscribe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, " Don\u2019t miss to subscribe to our new feeds, kindly fill the form below. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "form", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](154, "input", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](156, "i", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, " Copyright \u00A9 2021, All Right Reserved ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "AA Enterprises");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "a", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "|");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "a", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "New Payment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["a[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:hover, a[_ngcontent-%COMP%]:focus, a[_ngcontent-%COMP%]:active {\r\n  text-decoration: none;\r\n  outline: none;\r\n}\r\n[_ngcontent-%COMP%]:root {\r\n  --accent: #3f51b5;\r\n}\r\n.my-title[_ngcontent-%COMP%] {\r\n  font-size: 34px;\r\n  background: #3f51b5;\r\n  color: #fff;\r\n  font-weight: 700;\r\n  border-radius: 5px;\r\n  padding: 3px 10px 5px;\r\n  text-align: center;\r\n}\r\n.services[_ngcontent-%COMP%], .about-us[_ngcontent-%COMP%] {\r\n  padding: 30px 20px;\r\n}\r\n\r\n\r\n.row[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n}\r\n.pt-5[_ngcontent-%COMP%] {\r\n  padding-top: 15px;\r\n}\r\n.pb-5[_ngcontent-%COMP%] {\r\n  padding-bottom: 15px;\r\n}\r\n.col-lg-3[_ngcontent-%COMP%] {\r\n  width: 25%;\r\n}\r\n.col-md-4[_ngcontent-%COMP%] {\r\n  width: 33.33% !important;\r\n}\r\n.col-md-12[_ngcontent-%COMP%], .col-12[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n.col-6[_ngcontent-%COMP%] {\r\n  width: 50%;\r\n}\r\n@media only screen and (min-width: 770px) {\r\n  .col-xl-4[_ngcontent-%COMP%] {\r\n    width: 33.33% !important;\r\n  }\r\n  .col-md-6[_ngcontent-%COMP%] {\r\n    width: 50%;\r\n  }\r\n}\r\n@media only screen and (max-width: 770px) {\r\n  .col-md-6[_ngcontent-%COMP%] {\r\n    width: 50% !important;\r\n  }\r\n  .col-md-4[_ngcontent-%COMP%] {\r\n    width: 33.33% !important;\r\n  }\r\n}\r\n@media only screen and (max-width: 500px) {\r\n  .col-12[_ngcontent-%COMP%] {\r\n    width: 100% !important;\r\n  }\r\n  .col-6[_ngcontent-%COMP%] {\r\n    width: 50% !important;\r\n  }\r\n  .d-sm-none[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n  .col-sm-6[_ngcontent-%COMP%] {\r\n    width: 50% !important;\r\n  }\r\n}\r\n.text-lg-left[_ngcontent-%COMP%] {\r\n  text-align: left !important;\r\n}\r\n.text-right[_ngcontent-%COMP%] {\r\n  text-align: right;\r\n}\r\n.text-center[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\n.text-left[_ngcontent-%COMP%] {\r\n  text-align: left;\r\n}\r\n\r\n.carousel[_ngcontent-%COMP%] {\r\n  \r\n  position: relative;\r\n}\r\nul.slides[_ngcontent-%COMP%] {\r\n  display: block;\r\n  position: relative;\r\n  height: 500px;\r\n  margin: 0;\r\n  padding: 0;\r\n  overflow: hidden;\r\n  list-style: none;\r\n}\r\n.slides[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\r\n  user-select: none;\r\n  -ms-user-select: none;\r\n  -moz-user-select: none;\r\n  -khtml-user-select: none;\r\n  -webkit-user-select: none;\r\n  -webkit-touch-callout: none;\r\n}\r\nul.slides[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  display: none;\r\n}\r\n.slide-container[_ngcontent-%COMP%] {\r\n  display: block;\r\n}\r\n.slide-image[_ngcontent-%COMP%] {\r\n  display: block;\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  top: 0;\r\n  opacity: 0;\r\n  transition: all 0.7s ease-in-out;\r\n}\r\n.slide-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  \r\n  width: 100%;\r\n  min-width: 100%;\r\n  height: auto;\r\n}\r\n.carousel-controls[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  z-index: 999;\r\n  font-size: 80px;\r\n  line-height: 500px;\r\n  color: #fff;\r\n}\r\n.carousel-controls[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  display: none;\r\n  position: absolute;\r\n  padding: 0 20px;\r\n  opacity: 0;\r\n  transition: opacity 0.2s;\r\n  cursor: pointer;\r\n}\r\n\r\n.slide-image[_ngcontent-%COMP%]    + .carousel-controls[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  opacity: 0.5;\r\n  transition: all 0.3s ease-in-out;\r\n}\r\n.slide-image[_ngcontent-%COMP%]    + .carousel-controls[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:hover {\r\n  opacity: 1;\r\n  font-size: 100px;\r\n}\r\n.carousel-controls[_ngcontent-%COMP%]   .prev-slide[_ngcontent-%COMP%] {\r\n  width: 49%;\r\n  text-align: left;\r\n  left: 0;\r\n}\r\n.carousel-controls[_ngcontent-%COMP%]   .next-slide[_ngcontent-%COMP%] {\r\n  width: 49%;\r\n  text-align: right;\r\n  right: 0;\r\n}\r\n.carousel-dots[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 20px;\r\n  z-index: 999;\r\n  text-align: center;\r\n}\r\n.carousel-dots[_ngcontent-%COMP%]   .carousel-dot[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  width: 15px;\r\n  height: 15px;\r\n  border-radius: 50%;\r\n  background-color: #fff;\r\n  opacity: 0.5;\r\n  margin: 10px;\r\n}\r\ninput[_ngcontent-%COMP%]:checked    + .slide-container[_ngcontent-%COMP%]   .slide-image[_ngcontent-%COMP%] {\r\n  opacity: 1;\r\n  transform: scale(1);\r\n  transition: opacity 1s ease-in-out;\r\n  filter: brightness(50%);\r\n}\r\ninput[_ngcontent-%COMP%]:checked    + .slide-container[_ngcontent-%COMP%]   .carousel-controls[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  display: block;\r\n}\r\ninput#img-1[_ngcontent-%COMP%]:checked    ~ .carousel-dots[_ngcontent-%COMP%]   label#img-dot-1[_ngcontent-%COMP%], input#img-2[_ngcontent-%COMP%]:checked    ~ .carousel-dots[_ngcontent-%COMP%]   label#img-dot-2[_ngcontent-%COMP%], input#img-3[_ngcontent-%COMP%]:checked    ~ .carousel-dots[_ngcontent-%COMP%]   label#img-dot-3[_ngcontent-%COMP%], input#img-4[_ngcontent-%COMP%]:checked    ~ .carousel-dots[_ngcontent-%COMP%]   label#img-dot-4[_ngcontent-%COMP%], input#img-5[_ngcontent-%COMP%]:checked    ~ .carousel-dots[_ngcontent-%COMP%]   label#img-dot-5[_ngcontent-%COMP%], input#img-6[_ngcontent-%COMP%]:checked    ~ .carousel-dots[_ngcontent-%COMP%]   label#img-dot-6[_ngcontent-%COMP%] {\r\n  opacity: 1;\r\n}\r\ninput[_ngcontent-%COMP%]:checked    + .slide-container[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  display: block;\r\n}\r\n.banner-text[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  color: #fff;\r\n  z-index: 999;\r\n  background: #1113;\r\n  border-radius: 10px;\r\n  padding: 20px 20px;\r\n  width: 75vw;\r\n  text-align: center;\r\n}\r\n.banner-text[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  font-size: 42px;\r\n  font-family: sans-serif;\r\n}\r\n.banner-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  margin: 10px 0 20px;\r\n  border-top: 1px solid #fff5;\r\n  padding-top: 10px;\r\n}\r\n@media only screen and (max-width: 500px) {\r\n  ul.slides[_ngcontent-%COMP%] {\r\n    height: 300px;\r\n  }\r\n  .carousel-controls[_ngcontent-%COMP%] {\r\n    font-size: 50px;\r\n    line-height: 300px;\r\n  }\r\n  .carousel-controls[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n    padding: 0 10px;\r\n  }\r\n  .carousel-dots[_ngcontent-%COMP%]   .carousel-dot[_ngcontent-%COMP%] {\r\n    width: 10px;\r\n    height: 10px;\r\n    margin: 5px;\r\n  }\r\n  .banner-text[_ngcontent-%COMP%] {\r\n    padding: 20px 20px;\r\n    \r\n  }\r\n  .banner-text[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    margin-bottom: 10px;\r\n  }\r\n  .banner-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n  }\r\n}\r\n\r\n.services[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  min-height: 100vh;\r\n}\r\n.services[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  padding: 0;\r\n  list-style: none;\r\n}\r\n.bg-gray[_ngcontent-%COMP%] {\r\n  background-color: #f9f9f9;\r\n}\r\n.site-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  display: block;\r\n  font-weight: 700;\r\n  margin-bottom: 10px;\r\n  text-transform: uppercase;\r\n}\r\n.site-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  color: #3f51b5;\r\n}\r\n.site-heading[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  padding-bottom: 20px;\r\n  position: relative;\r\n  text-transform: capitalize;\r\n  z-index: 1;\r\n  margin: 0;\r\n}\r\n.site-heading[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]::before {\r\n  background: #3f51b5 none repeat scroll 0 0;\r\n  bottom: 0;\r\n  content: \"\";\r\n  height: 2px;\r\n  left: 50%;\r\n  margin-left: -25px;\r\n  position: absolute;\r\n  width: 50px;\r\n}\r\n.site-heading[_ngcontent-%COMP%] {\r\n  margin-bottom: 30px;\r\n  overflow: hidden;\r\n  margin-top: -5px;\r\n}\r\n.carousel-shadow[_ngcontent-%COMP%]   .owl-stage-outer[_ngcontent-%COMP%] {\r\n  margin: -15px -15px 0;\r\n  padding: 15px;\r\n}\r\n.we-offer-area[_ngcontent-%COMP%]   .our-offer-carousel[_ngcontent-%COMP%]   .owl-dots[_ngcontent-%COMP%]   .owl-dot[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  background: #ffffff none repeat scroll 0 0;\r\n  border: 2px solid;\r\n  height: 15px;\r\n  margin: 0 5px;\r\n  width: 15px;\r\n}\r\n.we-offer-area[_ngcontent-%COMP%]   .our-offer-carousel[_ngcontent-%COMP%]   .owl-dots[_ngcontent-%COMP%]   .owl-dot.active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  background: #3f51b5 none repeat scroll 0 0;\r\n  border-color: #3f51b5;\r\n}\r\n.we-offer-area[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\r\n  background: #ffffff none repeat scroll 0 0;\r\n  border-left: 2px solid #3f51b5;\r\n  -o-box-shadow: 0 0 10px #cccccc;\r\n  box-shadow: 0 0 10px #cccccc;\r\n  overflow: hidden;\r\n  padding: 30px;\r\n  position: relative;\r\n  z-index: 1;\r\n}\r\n.we-offer-area.text-center[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\r\n  \r\n  border: medium none;\r\n  \r\n  margin: 0 10px;\r\n}\r\n.we-offer-area.text-center[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\r\n  background: #3f51b5 none repeat scroll 0 0;\r\n  border-radius: 50%;\r\n  color: #ffffff;\r\n  font-size: 40px;\r\n  height: 60px;\r\n  line-height: 80px;\r\n  position: relative;\r\n  text-align: center;\r\n  width: 60px;\r\n  z-index: 1;\r\n  transition: all 0.35s ease-in-out;\r\n  -webkit-transition: all 0.35s ease-in-out;\r\n  -moz-transition: all 0.35s ease-in-out;\r\n  -ms-transition: all 0.35s ease-in-out;\r\n  -o-transition: all 0.35s ease-in-out;\r\n  margin-bottom: 25px;\r\n  padding: 20px;\r\n}\r\n.we-offer-area.text-center[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]::after {\r\n  border: 2px solid #3f51b5;\r\n  border-radius: 50%;\r\n  content: \"\";\r\n  height: 90px;\r\n  left: -5px;\r\n  position: absolute;\r\n  top: -5px;\r\n  width: 90px;\r\n  z-index: -1;\r\n  transition: all 0.35s ease-in-out;\r\n  -webkit-transition: all 0.35s ease-in-out;\r\n  -moz-transition: all 0.35s ease-in-out;\r\n  -ms-transition: all 0.35s ease-in-out;\r\n  -o-transition: all 0.35s ease-in-out;\r\n}\r\n.we-offer-area.item-border-less[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\r\n  border: medium none;\r\n}\r\n.we-offer-area.item-border-less[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%] {\r\n  font-family: \"Poppins\", sans-serif;\r\n  font-size: 50px;\r\n  font-weight: 900;\r\n  opacity: 0.1;\r\n  position: absolute;\r\n  right: 30px;\r\n  top: 30px;\r\n}\r\n.our-offer-carousel.center-active[_ngcontent-%COMP%]   .owl-item[_ngcontent-%COMP%]:nth-child(2n)   .item[_ngcontent-%COMP%], .we-offer-area.center-active[_ngcontent-%COMP%]   .single-item[_ngcontent-%COMP%]:nth-child(2n)   .item[_ngcontent-%COMP%] {\r\n  background: #3f51b5 none repeat scroll 0 0;\r\n}\r\n.our-offer-carousel.center-active[_ngcontent-%COMP%]   .owl-item[_ngcontent-%COMP%]:nth-child(2n)   .item[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], .our-offer-carousel.center-active[_ngcontent-%COMP%]   .owl-item[_ngcontent-%COMP%]:nth-child(2n)   .item[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .our-offer-carousel.center-active[_ngcontent-%COMP%]   .owl-item[_ngcontent-%COMP%]:nth-child(2n)   .item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .we-offer-area.center-active[_ngcontent-%COMP%]   .single-item[_ngcontent-%COMP%]:nth-child(2n)   .item[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], .we-offer-area.center-active[_ngcontent-%COMP%]   .single-item[_ngcontent-%COMP%]:nth-child(2n)   .item[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .we-offer-area.center-active[_ngcontent-%COMP%]   .single-item[_ngcontent-%COMP%]:nth-child(2n)   .item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  color: #ffffff;\r\n}\r\n.we-offer-area[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\r\n  color: #3f51b5;\r\n  display: inline-block;\r\n  font-size: 60px;\r\n  margin-bottom: 20px;\r\n}\r\n.we-offer-area[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n  font-weight: 600;\r\n  text-transform: capitalize;\r\n}\r\n.we-offer-area[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n}\r\n.we-offer-area[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], .we-offer-area[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .we-offer-area[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  transition: all 0.35s ease-in-out;\r\n  -webkit-transition: all 0.35s ease-in-out;\r\n  -moz-transition: all 0.35s ease-in-out;\r\n  -ms-transition: all 0.35s ease-in-out;\r\n  -o-transition: all 0.35s ease-in-out;\r\n}\r\n.we-offer-area[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]::after {\r\n  background: #3f51b5 none repeat scroll 0 0;\r\n  content: \"\";\r\n  height: 100%;\r\n  left: -100%;\r\n  position: absolute;\r\n  top: 0;\r\n  transition: all 0.35s ease-in-out;\r\n  -webkit-transition: all 0.35s ease-in-out;\r\n  -moz-transition: all 0.35s ease-in-out;\r\n  -ms-transition: all 0.35s ease-in-out;\r\n  -o-transition: all 0.35s ease-in-out;\r\n  width: 100%;\r\n  z-index: -1;\r\n}\r\n.we-offer-area[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:hover::after {\r\n  left: 0;\r\n}\r\n.we-offer-area[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%], .we-offer-area[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:hover   h4[_ngcontent-%COMP%], .we-offer-area[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:hover   p[_ngcontent-%COMP%] {\r\n  color: #ffffff !important;\r\n}\r\n.we-offer-area.text-center[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%]::after {\r\n  border-color: #ffffff !important;\r\n}\r\n.we-offer-area.text-center[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%] {\r\n  background-color: #ffffff !important;\r\n  color: #3f51b5 !important;\r\n}\r\n.we-offer-area.text-left[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\r\n  background: #3f51b5 none repeat scroll 0 0;\r\n  border-radius: 50%;\r\n  color: #ffffff;\r\n  display: inline-block;\r\n  font-size: 60px;\r\n  height: 100px;\r\n  line-height: 100px;\r\n  margin-bottom: 30px;\r\n  position: relative;\r\n  width: 100px;\r\n  z-index: 1;\r\n  text-align: center;\r\n}\r\n.we-offer-area.text-left[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]::after {\r\n  border: 2px solid #3f51b5;\r\n  border-radius: 50%;\r\n  content: \"\";\r\n  height: 120px;\r\n  left: -10px;\r\n  position: absolute;\r\n  top: -10px;\r\n  width: 120px;\r\n}\r\n.less-carousel[_ngcontent-%COMP%] {\r\n  margin-left: -10px;\r\n  margin-right: -10px;\r\n}\r\n.equal-height[_ngcontent-%COMP%] {\r\n  margin-bottom: 20px;\r\n}\r\n.equal-height[_ngcontent-%COMP%]    > .item[_ngcontent-%COMP%] {\r\n  \r\n}\r\n@media only screen and (max-width: 770px) {\r\n  .equal-height[_ngcontent-%COMP%]    > .item[_ngcontent-%COMP%] {\r\n    \r\n    \r\n  }\r\n}\r\n@media only screen and (max-width: 500px) {\r\n  .we-offer-area.text-center[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\r\n    padding: 20px;\r\n  }\r\n  .we-offer-area.text-center[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\r\n    height: 40px;\r\n    width: 40px;\r\n    margin-bottom: 10px;\r\n  }\r\n  .equal-height[_ngcontent-%COMP%]    > .item[_ngcontent-%COMP%] {\r\n    \r\n    \r\n  }\r\n}\r\n\r\n\r\n\r\n\r\n\r\nfooter[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n  margin: 0px;\r\n  padding: 0px;\r\n}\r\n.footer-section[_ngcontent-%COMP%] {\r\n  background: #151414;\r\n  position: relative;\r\n}\r\n.copyright-area[_ngcontent-%COMP%], .footer-cta[_ngcontent-%COMP%], .footer-content[_ngcontent-%COMP%] {\r\n  padding: 30px 20px;\r\n}\r\n.footer-cta[_ngcontent-%COMP%] {\r\n  border-bottom: 1px solid #373636;\r\n}\r\n.single-cta[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\r\n  color: #3f51b5;\r\n  font-size: 30px;\r\n  float: left;\r\n  margin-top: 8px;\r\n}\r\n.single-cta[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  padding: 20px 0 0;\r\n}\r\n.cta-text[_ngcontent-%COMP%] {\r\n  padding-left: 15px;\r\n  display: inline-block;\r\n}\r\n.cta-text[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n  color: #fff;\r\n  font-size: 18px;\r\n  font-weight: 500;\r\n  margin: 0;\r\n  margin-bottom: 10px;\r\n}\r\n.cta-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  color: #757575;\r\n  font-size: 14px;\r\n  display: block;\r\n  margin-bottom: 10px;\r\n}\r\n.cta-text[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\r\n  color: #ddd;\r\n  font-weight: 500;\r\n  display: block;\r\n}\r\n.cta-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  color: #757575;\r\n  cursor: pointer;\r\n}\r\n.cta-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  color: #ddd;\r\n}\r\n.footer-content[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  z-index: 2;\r\n}\r\n.footer-pattern[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  height: 330px;\r\n  background-size: cover;\r\n  background-position: 100% 100%;\r\n}\r\n.footer-logo[_ngcontent-%COMP%] {\r\n  margin-bottom: 30px;\r\n}\r\n.footer-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  max-width: 200px;\r\n}\r\n.footer-logo[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .footer-logo[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  font-weight: 500;\r\n  color: #fff;\r\n  text-decoration: underline;\r\n  border-bottom: 0;\r\n  -webkit-text-decoration-color: #151414;\r\n          text-decoration-color: #151414;\r\n}\r\n.footer-logo[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n  font-size: 26px;\r\n}\r\n.footer-logo[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\r\n  font-size: 12px;\r\n}\r\n.footer-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  margin-bottom: 14px;\r\n  font-size: 14px;\r\n  color: #7e7e7e;\r\n  padding-right: 40px;\r\n  line-height: 28px;\r\n}\r\n.footer-social-icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  color: #fff;\r\n  display: block;\r\n  font-size: 18px;\r\n  font-weight: 500;\r\n  font-family: \"Poppins\", sans-serif;\r\n  margin-bottom: 20px;\r\n}\r\n.footer-social-icon[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  color: #fff;\r\n  font-size: 16px;\r\n  margin-right: 15px;\r\n}\r\n.footer-social-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\r\n  height: 15px;\r\n  width: 15px;\r\n  text-align: center;\r\n  line-height: 38px;\r\n  border-radius: 50%;\r\n  padding: 10px;\r\n}\r\n.facebook-bg[_ngcontent-%COMP%] {\r\n  background: #3b5998;\r\n}\r\n.twitter-bg[_ngcontent-%COMP%] {\r\n  background: #55acee;\r\n}\r\n.google-bg[_ngcontent-%COMP%] {\r\n  background: #dd4b39;\r\n}\r\n.footer-widget-heading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n  color: #fff;\r\n  font-size: 18px;\r\n  font-weight: 500;\r\n  margin-bottom: 40px;\r\n  position: relative;\r\n}\r\n.footer-widget-heading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]::before {\r\n  content: \"\";\r\n  position: absolute;\r\n  left: 0;\r\n  bottom: -15px;\r\n  height: 2px;\r\n  width: 50px;\r\n  background: #3f51b5;\r\n}\r\n.footer-widget[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  float: left;\r\n  width: 50%;\r\n  margin-bottom: 12px;\r\n}\r\n.footer-widget[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  color: #3f51b5;\r\n}\r\n.footer-widget[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  color: #878787;\r\n  text-transform: capitalize;\r\n  text-decoration: none;\r\n}\r\n.subscribe-form[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  overflow: hidden;\r\n}\r\n.subscribe-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  padding: 14px 28px;\r\n  background: #2e2e2e;\r\n  border: 1px solid #2e2e2e;\r\n  color: #fff;\r\n}\r\n.subscribe-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n  position: absolute;\r\n  right: 0;\r\n  background: #3f51b5;\r\n  padding: 13px 20px;\r\n  border: 1px solid #3f51b5;\r\n  top: 0;\r\n}\r\n.subscribe-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\r\n  color: #fff;\r\n  font-size: 22px;\r\n  transform: rotate(-6deg);\r\n}\r\n.copyright-area[_ngcontent-%COMP%] {\r\n  background: #202020;\r\n}\r\n.copyright-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  font-size: 14px;\r\n  color: #878787;\r\n}\r\n.copyright-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  color: #3f51b5;\r\n}\r\n.footer-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  margin-left: 20px;\r\n}\r\n.footer-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%] {\r\n  color: #3f51b5;\r\n}\r\n.footer-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  font-size: 14px;\r\n  text-decoration: none;\r\n  color: #878787;\r\n}\r\ninput[_ngcontent-%COMP%] {\r\n  outline: none !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0VBSUUscUJBQXFCO0VBQ3JCLGFBQWE7QUFDZjtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixrQkFBa0I7QUFDcEI7QUFFQTs7RUFFRSxrQkFBa0I7QUFDcEI7QUFDQTs7R0FFRztBQUNILGNBQWM7QUFDZDtFQUNFLGFBQWE7RUFDYixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0UsVUFBVTtBQUNaO0FBQ0E7RUFDRSx3QkFBd0I7QUFDMUI7QUFDQTs7RUFFRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLFVBQVU7QUFDWjtBQUNBO0VBQ0U7SUFDRSx3QkFBd0I7RUFDMUI7RUFDQTtJQUNFLFVBQVU7RUFDWjtBQUNGO0FBQ0E7RUFDRTtJQUNFLHFCQUFxQjtFQUN2QjtFQUNBO0lBQ0Usd0JBQXdCO0VBQzFCO0FBQ0Y7QUFDQTtFQUNFO0lBQ0Usc0JBQXNCO0VBQ3hCO0VBQ0E7SUFDRSxxQkFBcUI7RUFDdkI7RUFDQTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0UscUJBQXFCO0VBQ3ZCO0FBQ0Y7QUFDQTtFQUNFLDJCQUEyQjtBQUM3QjtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBLGNBQWM7QUFDZDtFQUNFO3NCQUNvQjtFQUNwQixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFNBQVM7RUFDVCxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsd0JBQXdCO0VBQ3hCLHlCQUF5QjtFQUN6QiwyQkFBMkI7QUFDN0I7QUFFQTtFQUNFLGFBQWE7QUFDZjtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLE1BQU07RUFDTixVQUFVO0VBQ1YsZ0NBQWdDO0FBQ2xDO0FBRUE7RUFDRTs7aUJBRWU7RUFDZixXQUFXO0VBQ1gsZUFBZTtFQUNmLFlBQVk7QUFDZDtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLFlBQVk7RUFDWixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjtBQUVBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsVUFBVTtFQUNWLHdCQUF3QjtFQUN4QixlQUFlO0FBQ2pCO0FBRUE7O0dBRUc7QUFDSDtFQUNFLFlBQVk7RUFDWixnQ0FBZ0M7QUFDbEM7QUFFQTtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsT0FBTztBQUNUO0FBRUE7RUFDRSxVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLFFBQVE7QUFDVjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxRQUFRO0VBQ1IsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLFlBQVk7QUFDZDtBQUVBO0VBQ0UsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQixrQ0FBa0M7RUFDbEMsdUJBQXVCO0FBQ3pCO0FBRUE7RUFDRSxjQUFjO0FBQ2hCO0FBRUE7Ozs7OztFQU1FLFVBQVU7QUFDWjtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0NBQWdDO0VBQ2hDLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsU0FBUztFQUNULGVBQWU7RUFDZix1QkFBdUI7QUFDekI7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQiwyQkFBMkI7RUFDM0IsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0UsZUFBZTtJQUNmLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixXQUFXO0VBQ2I7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLGVBQWU7SUFDZixtQkFBbUI7RUFDckI7RUFDQTtJQUNFLGVBQWU7RUFDakI7QUFDRjtBQUVBLGlCQUFpQjtBQUNqQjtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLHlCQUF5QjtBQUMzQjtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsMEJBQTBCO0VBQzFCLFVBQVU7RUFDVixTQUFTO0FBQ1g7QUFFQTtFQUNFLDBDQUEwQztFQUMxQyxTQUFTO0VBQ1QsV0FBVztFQUNYLFdBQVc7RUFDWCxTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsYUFBYTtBQUNmO0FBRUE7RUFDRSwwQ0FBMEM7RUFDMUMsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixhQUFhO0VBQ2IsV0FBVztBQUNiO0FBRUE7RUFDRSwwQ0FBMEM7RUFDMUMscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSwwQ0FBMEM7RUFDMUMsOEJBQThCO0VBRzlCLCtCQUErQjtFQUMvQiw0QkFBNEI7RUFDNUIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsVUFBVTtBQUNaO0FBRUE7RUFDRSxnREFBZ0Q7RUFDaEQsbUJBQW1CO0VBQ25CLHdCQUF3QjtFQUN4QixjQUFjO0FBQ2hCO0FBRUE7RUFDRSwwQ0FBMEM7RUFDMUMsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxVQUFVO0VBQ1YsaUNBQWlDO0VBQ2pDLHlDQUF5QztFQUN6QyxzQ0FBc0M7RUFDdEMscUNBQXFDO0VBQ3JDLG9DQUFvQztFQUNwQyxtQkFBbUI7RUFDbkIsYUFBYTtBQUNmO0FBRUE7RUFDRSx5QkFBeUI7RUFHekIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVztFQUNYLFdBQVc7RUFDWCxpQ0FBaUM7RUFDakMseUNBQXlDO0VBQ3pDLHNDQUFzQztFQUN0QyxxQ0FBcUM7RUFDckMsb0NBQW9DO0FBQ3RDO0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFNBQVM7QUFDWDtBQUVBOztFQUVFLDBDQUEwQztBQUM1QztBQUVBOzs7Ozs7RUFNRSxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQiwwQkFBMEI7QUFDNUI7QUFFQTtFQUNFLFNBQVM7QUFDWDtBQUVBOzs7RUFHRSxpQ0FBaUM7RUFDakMseUNBQXlDO0VBQ3pDLHNDQUFzQztFQUN0QyxxQ0FBcUM7RUFDckMsb0NBQW9DO0FBQ3RDO0FBRUE7RUFDRSwwQ0FBMEM7RUFDMUMsV0FBVztFQUNYLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixpQ0FBaUM7RUFDakMseUNBQXlDO0VBQ3pDLHNDQUFzQztFQUN0QyxxQ0FBcUM7RUFDckMsb0NBQW9DO0VBQ3BDLFdBQVc7RUFDWCxXQUFXO0FBQ2I7QUFFQTtFQUNFLE9BQU87QUFDVDtBQUVBOzs7RUFHRSx5QkFBeUI7QUFDM0I7QUFFQTtFQUNFLGdDQUFnQztBQUNsQztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLHlCQUF5QjtBQUMzQjtBQUVBO0VBQ0UsMENBQTBDO0VBRzFDLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFVBQVU7RUFDVixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLHlCQUF5QjtFQUd6QixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGFBQWE7RUFDYixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixZQUFZO0FBQ2Q7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRTtJQUNFLG1CQUFtQjtJQUNuQix5QkFBeUI7RUFDM0I7QUFDRjtBQUNBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLFlBQVk7SUFDWixXQUFXO0lBQ1gsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxtQkFBbUI7SUFDbkIseUJBQXlCO0VBQzNCO0FBQ0Y7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUViOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBa0ZHO0FBQ0gsYUFBYTtBQUNiLFdBQVc7QUFDWDtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7QUFDQTs7O0VBR0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxnQ0FBZ0M7QUFDbEM7QUFDQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsV0FBVztFQUNYLGVBQWU7QUFDakI7QUFDQTtFQUNFLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0IsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1QsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGNBQWM7RUFDZCxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjtBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7QUFDakI7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7O0VBRUUsU0FBUztFQUNULGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsMEJBQTBCO0VBQzFCLGdCQUFnQjtFQUNoQixzQ0FBOEI7VUFBOUIsOEJBQThCO0FBQ2hDO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0NBQWtDO0VBQ2xDLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsYUFBYTtBQUNmO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxhQUFhO0VBQ2IsV0FBVztFQUNYLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsVUFBVTtFQUNWLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UsY0FBYztFQUNkLDBCQUEwQjtFQUMxQixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixXQUFXO0FBQ2I7QUFDQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLE1BQU07QUFDUjtBQUNBO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZix3QkFBd0I7QUFDMUI7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsU0FBUztFQUNULGVBQWU7RUFDZixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLGNBQWM7QUFDaEI7QUFDQTtFQUNFLHdCQUF3QjtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL2hvbWUtcGFnZS9ob21lLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImEsXHJcbmE6aG92ZXIsXHJcbmE6Zm9jdXMsXHJcbmE6YWN0aXZlIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG46cm9vdCB7XHJcbiAgLS1hY2NlbnQ6ICMzZjUxYjU7XHJcbn1cclxuLm15LXRpdGxlIHtcclxuICBmb250LXNpemU6IDM0cHg7XHJcbiAgYmFja2dyb3VuZDogIzNmNTFiNTtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBwYWRkaW5nOiAzcHggMTBweCA1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uc2VydmljZXMsXHJcbi5hYm91dC11cyB7XHJcbiAgcGFkZGluZzogMzBweCAyMHB4O1xyXG59XHJcbi8qIG1hdC1jYXJkIHtcclxuICBtYXJnaW46IDEwcHggMTBweDtcclxufSAqL1xyXG4vKiBib290c3RyYXAgKi9cclxuLnJvdyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuLnB0LTUge1xyXG4gIHBhZGRpbmctdG9wOiAxNXB4O1xyXG59XHJcbi5wYi01IHtcclxuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxufVxyXG4uY29sLWxnLTMge1xyXG4gIHdpZHRoOiAyNSU7XHJcbn1cclxuLmNvbC1tZC00IHtcclxuICB3aWR0aDogMzMuMzMlICFpbXBvcnRhbnQ7XHJcbn1cclxuLmNvbC1tZC0xMixcclxuLmNvbC0xMiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmNvbC02IHtcclxuICB3aWR0aDogNTAlO1xyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzcwcHgpIHtcclxuICAuY29sLXhsLTQge1xyXG4gICAgd2lkdGg6IDMzLjMzJSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuY29sLW1kLTYge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICB9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NzBweCkge1xyXG4gIC5jb2wtbWQtNiB7XHJcbiAgICB3aWR0aDogNTAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5jb2wtbWQtNCB7XHJcbiAgICB3aWR0aDogMzMuMzMlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcclxuICAuY29sLTEyIHtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5jb2wtNiB7XHJcbiAgICB3aWR0aDogNTAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5kLXNtLW5vbmUge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgLmNvbC1zbS02IHtcclxuICAgIHdpZHRoOiA1MCUgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuLnRleHQtbGctbGVmdCB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xyXG59XHJcbi50ZXh0LXJpZ2h0IHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG4udGV4dC1jZW50ZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4udGV4dC1sZWZ0IHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbi8qIGJvb3RzdHJhcCAqL1xyXG4uY2Fyb3VzZWwge1xyXG4gIC8qIG1hcmdpbi1sZWZ0OiAxNSU7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNSU7ICovXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG51bC5zbGlkZXMge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBoZWlnaHQ6IDUwMHB4O1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG5cclxuLnNsaWRlcyAqIHtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XHJcbn1cclxuXHJcbnVsLnNsaWRlcyBpbnB1dCB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnNsaWRlLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5zbGlkZS1pbWFnZSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB0b3A6IDA7XHJcbiAgb3BhY2l0eTogMDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC43cyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLnNsaWRlLWltYWdlIGltZyB7XHJcbiAgLyogd2lkdGg6IGF1dG87XHJcbiAgbWluLXdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTsgKi9cclxuICB3aWR0aDogMTAwJTtcclxuICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uY2Fyb3VzZWwtY29udHJvbHMge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICB6LWluZGV4OiA5OTk7XHJcbiAgZm9udC1zaXplOiA4MHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiA1MDBweDtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLmNhcm91c2VsLWNvbnRyb2xzIGxhYmVsIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgb3BhY2l0eTogMDtcclxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnM7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4vKiAuc2xpZGUtaW1hZ2U6aG92ZXIgKyAuY2Fyb3VzZWwtY29udHJvbHMgbGFiZWwge1xyXG4gIG9wYWNpdHk6IDAuNTtcclxufSAqL1xyXG4uc2xpZGUtaW1hZ2UgKyAuY2Fyb3VzZWwtY29udHJvbHMgbGFiZWwge1xyXG4gIG9wYWNpdHk6IDAuNTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLnNsaWRlLWltYWdlICsgLmNhcm91c2VsLWNvbnRyb2xzIGxhYmVsOmhvdmVyIHtcclxuICBvcGFjaXR5OiAxO1xyXG4gIGZvbnQtc2l6ZTogMTAwcHg7XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1jb250cm9scyAucHJldi1zbGlkZSB7XHJcbiAgd2lkdGg6IDQ5JTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGxlZnQ6IDA7XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1jb250cm9scyAubmV4dC1zbGlkZSB7XHJcbiAgd2lkdGg6IDQ5JTtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICByaWdodDogMDtcclxufVxyXG5cclxuLmNhcm91c2VsLWRvdHMge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvdHRvbTogMjBweDtcclxuICB6LWluZGV4OiA5OTk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY2Fyb3VzZWwtZG90cyAuY2Fyb3VzZWwtZG90IHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDE1cHg7XHJcbiAgaGVpZ2h0OiAxNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIG9wYWNpdHk6IDAuNTtcclxuICBtYXJnaW46IDEwcHg7XHJcbn1cclxuXHJcbmlucHV0OmNoZWNrZWQgKyAuc2xpZGUtY29udGFpbmVyIC5zbGlkZS1pbWFnZSB7XHJcbiAgb3BhY2l0eTogMTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZS1pbi1vdXQ7XHJcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDUwJSk7XHJcbn1cclxuXHJcbmlucHV0OmNoZWNrZWQgKyAuc2xpZGUtY29udGFpbmVyIC5jYXJvdXNlbC1jb250cm9scyBsYWJlbCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbmlucHV0I2ltZy0xOmNoZWNrZWQgfiAuY2Fyb3VzZWwtZG90cyBsYWJlbCNpbWctZG90LTEsXHJcbmlucHV0I2ltZy0yOmNoZWNrZWQgfiAuY2Fyb3VzZWwtZG90cyBsYWJlbCNpbWctZG90LTIsXHJcbmlucHV0I2ltZy0zOmNoZWNrZWQgfiAuY2Fyb3VzZWwtZG90cyBsYWJlbCNpbWctZG90LTMsXHJcbmlucHV0I2ltZy00OmNoZWNrZWQgfiAuY2Fyb3VzZWwtZG90cyBsYWJlbCNpbWctZG90LTQsXHJcbmlucHV0I2ltZy01OmNoZWNrZWQgfiAuY2Fyb3VzZWwtZG90cyBsYWJlbCNpbWctZG90LTUsXHJcbmlucHV0I2ltZy02OmNoZWNrZWQgfiAuY2Fyb3VzZWwtZG90cyBsYWJlbCNpbWctZG90LTYge1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbmlucHV0OmNoZWNrZWQgKyAuc2xpZGUtY29udGFpbmVyIC5uYXYgbGFiZWwge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi5iYW5uZXItdGV4dCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICBjb2xvcjogI2ZmZjtcclxuICB6LWluZGV4OiA5OTk7XHJcbiAgYmFja2dyb3VuZDogIzExMTM7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBwYWRkaW5nOiAyMHB4IDIwcHg7XHJcbiAgd2lkdGg6IDc1dnc7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5iYW5uZXItdGV4dCBoNCB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGZvbnQtc2l6ZTogNDJweDtcclxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxufVxyXG4uYmFubmVyLXRleHQgcCB7XHJcbiAgbWFyZ2luOiAxMHB4IDAgMjBweDtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2ZmZjU7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gIHVsLnNsaWRlcyB7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gIH1cclxuICAuY2Fyb3VzZWwtY29udHJvbHMge1xyXG4gICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDMwMHB4O1xyXG4gIH1cclxuICAuY2Fyb3VzZWwtY29udHJvbHMgbGFiZWwge1xyXG4gICAgcGFkZGluZzogMCAxMHB4O1xyXG4gIH1cclxuICAuY2Fyb3VzZWwtZG90cyAuY2Fyb3VzZWwtZG90IHtcclxuICAgIHdpZHRoOiAxMHB4O1xyXG4gICAgaGVpZ2h0OiAxMHB4O1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgfVxyXG4gIC5iYW5uZXItdGV4dCB7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDIwcHg7XHJcbiAgICAvKiB3aWR0aDogNzB2dzsgKi9cclxuICB9XHJcbiAgLmJhbm5lci10ZXh0IGg0IHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgfVxyXG4gIC5iYW5uZXItdGV4dCBwIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICB9XHJcbn1cclxuXHJcbi8qIG91ciBzZXJ2aWNlcyAqL1xyXG4uc2VydmljZXMge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLnNlcnZpY2VzIHVsIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcbi5iZy1ncmF5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xyXG59XHJcblxyXG4uc2l0ZS1oZWFkaW5nIGgyIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLnNpdGUtaGVhZGluZyBoMiBzcGFuIHtcclxuICBjb2xvcjogIzNmNTFiNTtcclxufVxyXG5cclxuLnNpdGUtaGVhZGluZyBoNCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICB6LWluZGV4OiAxO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLnNpdGUtaGVhZGluZyBoNDo6YmVmb3JlIHtcclxuICBiYWNrZ3JvdW5kOiAjM2Y1MWI1IG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgaGVpZ2h0OiAycHg7XHJcbiAgbGVmdDogNTAlO1xyXG4gIG1hcmdpbi1sZWZ0OiAtMjVweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbn1cclxuXHJcbi5zaXRlLWhlYWRpbmcge1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBtYXJnaW4tdG9wOiAtNXB4O1xyXG59XHJcblxyXG4uY2Fyb3VzZWwtc2hhZG93IC5vd2wtc3RhZ2Utb3V0ZXIge1xyXG4gIG1hcmdpbjogLTE1cHggLTE1cHggMDtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG59XHJcblxyXG4ud2Utb2ZmZXItYXJlYSAub3VyLW9mZmVyLWNhcm91c2VsIC5vd2wtZG90cyAub3dsLWRvdCBzcGFuIHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmIG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XHJcbiAgYm9yZGVyOiAycHggc29saWQ7XHJcbiAgaGVpZ2h0OiAxNXB4O1xyXG4gIG1hcmdpbjogMCA1cHg7XHJcbiAgd2lkdGg6IDE1cHg7XHJcbn1cclxuXHJcbi53ZS1vZmZlci1hcmVhIC5vdXItb2ZmZXItY2Fyb3VzZWwgLm93bC1kb3RzIC5vd2wtZG90LmFjdGl2ZSBzcGFuIHtcclxuICBiYWNrZ3JvdW5kOiAjM2Y1MWI1IG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XHJcbiAgYm9yZGVyLWNvbG9yOiAjM2Y1MWI1O1xyXG59XHJcblxyXG4ud2Utb2ZmZXItYXJlYSAuaXRlbSB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZiBub25lIHJlcGVhdCBzY3JvbGwgMCAwO1xyXG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgIzNmNTFiNTtcclxuICAtbW96LWJveC1zaGFkb3c6IDAgMCAxMHB4ICNjY2NjY2M7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMTBweCAjY2NjY2NjO1xyXG4gIC1vLWJveC1zaGFkb3c6IDAgMCAxMHB4ICNjY2NjY2M7XHJcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggI2NjY2NjYztcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBhZGRpbmc6IDMwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi53ZS1vZmZlci1hcmVhLnRleHQtY2VudGVyIC5pdGVtIHtcclxuICAvKiBiYWNrZ3JvdW5kOiAjZmZmZmZmIG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7ICovXHJcbiAgYm9yZGVyOiBtZWRpdW0gbm9uZTtcclxuICAvKiBwYWRkaW5nOiAzMHB4IDQwcHg7ICovXHJcbiAgbWFyZ2luOiAwIDEwcHg7XHJcbn1cclxuXHJcbi53ZS1vZmZlci1hcmVhLnRleHQtY2VudGVyIC5pdGVtIHN2ZyB7XHJcbiAgYmFja2dyb3VuZDogIzNmNTFiNSBub25lIHJlcGVhdCBzY3JvbGwgMCAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiA4MHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDYwcHg7XHJcbiAgei1pbmRleDogMTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zNXMgZWFzZS1pbi1vdXQ7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zNXMgZWFzZS1pbi1vdXQ7XHJcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zNXMgZWFzZS1pbi1vdXQ7XHJcbiAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjM1cyBlYXNlLWluLW91dDtcclxuICAtby10cmFuc2l0aW9uOiBhbGwgMC4zNXMgZWFzZS1pbi1vdXQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4ud2Utb2ZmZXItYXJlYS50ZXh0LWNlbnRlciAuaXRlbSBzdmc6OmFmdGVyIHtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjM2Y1MWI1O1xyXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIC1tb3otYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGhlaWdodDogOTBweDtcclxuICBsZWZ0OiAtNXB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IC01cHg7XHJcbiAgd2lkdGg6IDkwcHg7XHJcbiAgei1pbmRleDogLTE7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMzVzIGVhc2UtaW4tb3V0O1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMzVzIGVhc2UtaW4tb3V0O1xyXG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMzVzIGVhc2UtaW4tb3V0O1xyXG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgMC4zNXMgZWFzZS1pbi1vdXQ7XHJcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuMzVzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4ud2Utb2ZmZXItYXJlYS5pdGVtLWJvcmRlci1sZXNzIC5pdGVtIHtcclxuICBib3JkZXI6IG1lZGl1bSBub25lO1xyXG59XHJcblxyXG4ud2Utb2ZmZXItYXJlYS5pdGVtLWJvcmRlci1sZXNzIC5pdGVtIC5udW1iZXIge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDUwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICBvcGFjaXR5OiAwLjE7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAzMHB4O1xyXG4gIHRvcDogMzBweDtcclxufVxyXG5cclxuLm91ci1vZmZlci1jYXJvdXNlbC5jZW50ZXItYWN0aXZlIC5vd2wtaXRlbTpudGgtY2hpbGQoMm4pIC5pdGVtLFxyXG4ud2Utb2ZmZXItYXJlYS5jZW50ZXItYWN0aXZlIC5zaW5nbGUtaXRlbTpudGgtY2hpbGQoMm4pIC5pdGVtIHtcclxuICBiYWNrZ3JvdW5kOiAjM2Y1MWI1IG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XHJcbn1cclxuXHJcbi5vdXItb2ZmZXItY2Fyb3VzZWwuY2VudGVyLWFjdGl2ZSAub3dsLWl0ZW06bnRoLWNoaWxkKDJuKSAuaXRlbSBzdmcsXHJcbi5vdXItb2ZmZXItY2Fyb3VzZWwuY2VudGVyLWFjdGl2ZSAub3dsLWl0ZW06bnRoLWNoaWxkKDJuKSAuaXRlbSBoNCxcclxuLm91ci1vZmZlci1jYXJvdXNlbC5jZW50ZXItYWN0aXZlIC5vd2wtaXRlbTpudGgtY2hpbGQoMm4pIC5pdGVtIHAsXHJcbi53ZS1vZmZlci1hcmVhLmNlbnRlci1hY3RpdmUgLnNpbmdsZS1pdGVtOm50aC1jaGlsZCgybikgLml0ZW0gc3ZnLFxyXG4ud2Utb2ZmZXItYXJlYS5jZW50ZXItYWN0aXZlIC5zaW5nbGUtaXRlbTpudGgtY2hpbGQoMm4pIC5pdGVtIGg0LFxyXG4ud2Utb2ZmZXItYXJlYS5jZW50ZXItYWN0aXZlIC5zaW5nbGUtaXRlbTpudGgtY2hpbGQoMm4pIC5pdGVtIHAge1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG4ud2Utb2ZmZXItYXJlYSAuaXRlbSBzdmcge1xyXG4gIGNvbG9yOiAjM2Y1MWI1O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6IDYwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLndlLW9mZmVyLWFyZWEgLml0ZW0gaDQge1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn1cclxuXHJcbi53ZS1vZmZlci1hcmVhIC5pdGVtIHAge1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLndlLW9mZmVyLWFyZWEgLml0ZW0gc3ZnLFxyXG4ud2Utb2ZmZXItYXJlYSAuaXRlbSBoNCxcclxuLndlLW9mZmVyLWFyZWEgLml0ZW0gcCB7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMzVzIGVhc2UtaW4tb3V0O1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMzVzIGVhc2UtaW4tb3V0O1xyXG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMzVzIGVhc2UtaW4tb3V0O1xyXG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgMC4zNXMgZWFzZS1pbi1vdXQ7XHJcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuMzVzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4ud2Utb2ZmZXItYXJlYSAuaXRlbTo6YWZ0ZXIge1xyXG4gIGJhY2tncm91bmQ6ICMzZjUxYjUgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBsZWZ0OiAtMTAwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjM1cyBlYXNlLWluLW91dDtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjM1cyBlYXNlLWluLW91dDtcclxuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjM1cyBlYXNlLWluLW91dDtcclxuICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuMzVzIGVhc2UtaW4tb3V0O1xyXG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjM1cyBlYXNlLWluLW91dDtcclxuICB3aWR0aDogMTAwJTtcclxuICB6LWluZGV4OiAtMTtcclxufVxyXG5cclxuLndlLW9mZmVyLWFyZWEgLml0ZW06aG92ZXI6OmFmdGVyIHtcclxuICBsZWZ0OiAwO1xyXG59XHJcblxyXG4ud2Utb2ZmZXItYXJlYSAuaXRlbTpob3ZlciBzdmcsXHJcbi53ZS1vZmZlci1hcmVhIC5pdGVtOmhvdmVyIGg0LFxyXG4ud2Utb2ZmZXItYXJlYSAuaXRlbTpob3ZlciBwIHtcclxuICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ud2Utb2ZmZXItYXJlYS50ZXh0LWNlbnRlciAuaXRlbTpob3ZlciBzdmc6OmFmdGVyIHtcclxuICBib3JkZXItY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLndlLW9mZmVyLWFyZWEudGV4dC1jZW50ZXIgLml0ZW06aG92ZXIgc3ZnIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICMzZjUxYjUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLndlLW9mZmVyLWFyZWEudGV4dC1sZWZ0IC5pdGVtIHN2ZyB7XHJcbiAgYmFja2dyb3VuZDogIzNmNTFiNSBub25lIHJlcGVhdCBzY3JvbGwgMCAwO1xyXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIC1tb3otYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zaXplOiA2MHB4O1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDEwMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICB6LWluZGV4OiAxO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLndlLW9mZmVyLWFyZWEudGV4dC1sZWZ0IC5pdGVtIHN2Zzo6YWZ0ZXIge1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICMzZjUxYjU7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgaGVpZ2h0OiAxMjBweDtcclxuICBsZWZ0OiAtMTBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAtMTBweDtcclxuICB3aWR0aDogMTIwcHg7XHJcbn1cclxuLmxlc3MtY2Fyb3VzZWwge1xyXG4gIG1hcmdpbi1sZWZ0OiAtMTBweDtcclxuICBtYXJnaW4tcmlnaHQ6IC0xMHB4O1xyXG59XHJcblxyXG4uZXF1YWwtaGVpZ2h0IHtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbi5lcXVhbC1oZWlnaHQgPiAuaXRlbSB7XHJcbiAgLyogaGVpZ2h0OiAzMjBweDsgKi9cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NzBweCkge1xyXG4gIC5lcXVhbC1oZWlnaHQgPiAuaXRlbSB7XHJcbiAgICAvKiBoZWlnaHQ6IDM1MHB4OyAqL1xyXG4gICAgLyogbWFyZ2luLWJvdHRvbTogMzBweDsgKi9cclxuICB9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gIC53ZS1vZmZlci1hcmVhLnRleHQtY2VudGVyIC5pdGVtIHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgfVxyXG4gIC53ZS1vZmZlci1hcmVhLnRleHQtY2VudGVyIC5pdGVtIHN2ZyB7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgfVxyXG4gIC5lcXVhbC1oZWlnaHQgPiAuaXRlbSB7XHJcbiAgICAvKiBoZWlnaHQ6IDI4MHB4OyAqL1xyXG4gICAgLyogbWFyZ2luLWJvdHRvbTogNzBweDsgKi9cclxuICB9XHJcbn1cclxuLyogb3VyIHNlcnZpY2VzICovXHJcbi8qIGFib3V0IHVzICovXHJcblxyXG4vKiAuYWJvdXR1cy1tYWluIHtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uYWJvdXR1cy1tYWluID4gaDIge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGNvbG9yOiAjM2Y1MWI1O1xyXG4gIGZvbnQtc2l6ZTogMzJweDtcclxuICBsaW5lLWhlaWdodDogMzFweDtcclxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgbWFyZ2luOiAwIGF1dG8gMzBweDtcclxufVxyXG5cclxuLmFib3V0dXMtbWFpbiA+IHNwYW4ge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGNvbG9yOiAjMjIyO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBsaW5lLWhlaWdodDogMS43NTtcclxuICBtYXJnaW46IDIwcHggYXV0byAxMHB4O1xyXG59XHJcblxyXG4uYWJvdXR1cy1tYWluID4gcCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNzU7XHJcbiAgbWFyZ2luOiAwIGF1dG8gMTBweDtcclxuICBjb2xvcjogIzMzMztcclxufVxyXG5cclxuLmFib3V0dXMtbWFpbiA+IGltZyB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgbWFyZ2luOiAyMHB4IGF1dG87XHJcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggLTVweCAjMDAwO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmZmO1xyXG59XHJcblxyXG4uYWJvdXR1cy1tYWluID4gLm1pc3Npb24ge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGRpc3BsYXk6IGJsY29rO1xyXG4gIHdpZHRoOiA2MCU7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjU7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwJTtcclxuICBwYWRkaW5nOiA1cHggMTBweDtcclxufVxyXG5cclxuLmFib3V0dXMtbWFpbiA+IC5taXNzaW9uID4gc3BhbiB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luOiAwIGF1dG8gMTBweDtcclxuICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNzU7XHJcbn1cclxuLmFib3V0dXMtbWFpbiA+IC5taXNzaW9uID4gcCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luOiAwIGF1dG8gMTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBsaW5lLWhlaWdodDogMS43NTtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gIC5hYm91dHVzLW1haW4gPiBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcclxuICAuYWJvdXR1cy1tYWluID4gLm1pc3Npb24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG59ICovXHJcbi8qIGFib3V0IHVzICovXHJcbi8qIGZvb3RlciAqL1xyXG5mb290ZXIgdWwge1xyXG4gIG1hcmdpbjogMHB4O1xyXG4gIHBhZGRpbmc6IDBweDtcclxufVxyXG4uZm9vdGVyLXNlY3Rpb24ge1xyXG4gIGJhY2tncm91bmQ6ICMxNTE0MTQ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5jb3B5cmlnaHQtYXJlYSxcclxuLmZvb3Rlci1jdGEsXHJcbi5mb290ZXItY29udGVudCB7XHJcbiAgcGFkZGluZzogMzBweCAyMHB4O1xyXG59XHJcbi5mb290ZXItY3RhIHtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzM3MzYzNjtcclxufVxyXG4uc2luZ2xlLWN0YSBzdmcge1xyXG4gIGNvbG9yOiAjM2Y1MWI1O1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBmbG9hdDogbGVmdDtcclxuICBtYXJnaW4tdG9wOiA4cHg7XHJcbn1cclxuLnNpbmdsZS1jdGEge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIHBhZGRpbmc6IDIwcHggMCAwO1xyXG59XHJcbi5jdGEtdGV4dCB7XHJcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG4uY3RhLXRleHQgaDQge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIG1hcmdpbjogMDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbi5jdGEtdGV4dCBzcGFuIHtcclxuICBjb2xvcjogIzc1NzU3NTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG4uY3RhLXRleHQgYiB7XHJcbiAgY29sb3I6ICNkZGQ7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmN0YS10ZXh0IHNwYW4gYSB7XHJcbiAgY29sb3I6ICM3NTc1NzU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5jdGEtdGV4dCBzcGFuIGE6aG92ZXIge1xyXG4gIGNvbG9yOiAjZGRkO1xyXG59XHJcbi5mb290ZXItY29udGVudCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDI7XHJcbn1cclxuLmZvb3Rlci1wYXR0ZXJuIGltZyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGhlaWdodDogMzMwcHg7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDEwMCU7XHJcbn1cclxuLmZvb3Rlci1sb2dvIHtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcbi5mb290ZXItbG9nbyBpbWcge1xyXG4gIG1heC13aWR0aDogMjAwcHg7XHJcbn1cclxuLmZvb3Rlci1sb2dvIGg0LFxyXG4uZm9vdGVyLWxvZ28gc21hbGwge1xyXG4gIG1hcmdpbjogMDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gIGJvcmRlci1ib3R0b206IDA7XHJcbiAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiAjMTUxNDE0O1xyXG59XHJcbi5mb290ZXItbG9nbyBoNCB7XHJcbiAgZm9udC1zaXplOiAyNnB4O1xyXG59XHJcbi5mb290ZXItbG9nbyBzbWFsbCB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbi5mb290ZXItdGV4dCBwIHtcclxuICBtYXJnaW4tYm90dG9tOiAxNHB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBjb2xvcjogIzdlN2U3ZTtcclxuICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG59XHJcbi5mb290ZXItc29jaWFsLWljb24gc3BhbiB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuLmZvb3Rlci1zb2NpYWwtaWNvbiBhIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG59XHJcbi5mb290ZXItc29jaWFsLWljb24gc3ZnIHtcclxuICBoZWlnaHQ6IDE1cHg7XHJcbiAgd2lkdGg6IDE1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGxpbmUtaGVpZ2h0OiAzOHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbi5mYWNlYm9vay1iZyB7XHJcbiAgYmFja2dyb3VuZDogIzNiNTk5ODtcclxufVxyXG4udHdpdHRlci1iZyB7XHJcbiAgYmFja2dyb3VuZDogIzU1YWNlZTtcclxufVxyXG4uZ29vZ2xlLWJnIHtcclxuICBiYWNrZ3JvdW5kOiAjZGQ0YjM5O1xyXG59XHJcbi5mb290ZXItd2lkZ2V0LWhlYWRpbmcgaDMge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5mb290ZXItd2lkZ2V0LWhlYWRpbmcgaDM6OmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IC0xNXB4O1xyXG4gIGhlaWdodDogMnB4O1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIGJhY2tncm91bmQ6ICMzZjUxYjU7XHJcbn1cclxuLmZvb3Rlci13aWRnZXQgdWwgbGkge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmbG9hdDogbGVmdDtcclxuICB3aWR0aDogNTAlO1xyXG4gIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbn1cclxuLmZvb3Rlci13aWRnZXQgdWwgbGkgYTpob3ZlciB7XHJcbiAgY29sb3I6ICMzZjUxYjU7XHJcbn1cclxuLmZvb3Rlci13aWRnZXQgdWwgbGkgYSB7XHJcbiAgY29sb3I6ICM4Nzg3ODc7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbi5zdWJzY3JpYmUtZm9ybSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLnN1YnNjcmliZS1mb3JtIGlucHV0IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxNHB4IDI4cHg7XHJcbiAgYmFja2dyb3VuZDogIzJlMmUyZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMmUyZTJlO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcbi5zdWJzY3JpYmUtZm9ybSBidXR0b24ge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYmFja2dyb3VuZDogIzNmNTFiNTtcclxuICBwYWRkaW5nOiAxM3B4IDIwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzNmNTFiNTtcclxuICB0b3A6IDA7XHJcbn1cclxuLnN1YnNjcmliZS1mb3JtIGJ1dHRvbiBzdmcge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNmRlZyk7XHJcbn1cclxuLmNvcHlyaWdodC1hcmVhIHtcclxuICBiYWNrZ3JvdW5kOiAjMjAyMDIwO1xyXG59XHJcbi5jb3B5cmlnaHQtdGV4dCBwIHtcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGNvbG9yOiAjODc4Nzg3O1xyXG59XHJcbi5jb3B5cmlnaHQtdGV4dCBwIGEge1xyXG4gIGNvbG9yOiAjM2Y1MWI1O1xyXG59XHJcbi5mb290ZXItbWVudSBsaSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG59XHJcbi5mb290ZXItbWVudSBsaTpob3ZlciBhIHtcclxuICBjb2xvcjogIzNmNTFiNTtcclxufVxyXG4uZm9vdGVyLW1lbnUgbGkgYSB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogIzg3ODc4NztcclxufVxyXG5pbnB1dCB7XHJcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomePageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home-page',
                templateUrl: './home-page.component.html',
                styleUrls: ['./home-page.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/login/auth.guard.ts":
/*!*************************************!*\
  !*** ./src/app/login/auth.guard.ts ***!
  \*************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");




class AuthGuard {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    // canActivate (
    //   route: ActivatedRouteSnapshot,
    //   router: RouterStateSnapshot
    // ): boolean | Promise<boolean  | Observable<boolean> {
    //   return !!this.authService.user;
    // }
    canActivate(route, state) {
        const isAuth = !!this.authService.user;
        if (isAuth) {
            return true;
        }
        return this.router.createUrlTree(['/account']);
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _services_data_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/data-storage.service */ "./src/app/services/data-storage.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");













function LoginComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " AA Enterprise ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 5, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_div_1_Template_form_ngSubmit_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.onSubmit(_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "User Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" USER ", ctx_r0.isLoginMode ? "LOGIN" : "SIGN UP", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.isLoginMode ? "Login" : "Sign up", " ");
} }
function LoginComponent_mat_spinner_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner");
} }
class LoginComponent {
    constructor(authService, router, _snackBar, dataStorageService) {
        this.authService = authService;
        this.router = router;
        this._snackBar = _snackBar;
        this.dataStorageService = dataStorageService;
        this.allowedUser = [
            'ashraf@nsentreprise.com',
            'admin@gmail.com',
            'asraf@aaenterprise.com',
        ];
        this.isLoginMode = true;
        this.isLoading = false;
    }
    ngOnInit() {
    }
    onSwitchMode() {
        this.isLoginMode = !this.isLoginMode;
    }
    onSubmit(form) {
        if (!form.valid) {
            return;
        }
        // console.log(form.value);
        const email = form.value.email;
        // console.log(email);
        // console.log(this.allowedUser);
        // console.log(this.allowedUser.includes(email));
        if (!this.allowedUser.includes(email)) {
            this.openSnackBar('This is not a registered user', 'okay');
            return;
        }
        const password = form.value.password;
        this.isLoading = true;
        let authObs;
        if (this.isLoginMode) {
            authObs = this.authService.login(email, password);
        }
        else {
            // authObs = this.authService.signup(email, password);
        }
        authObs.subscribe(resData => {
            // console.log(resData);
            this.isLoading = false;
            // only for logged in
            this.dataStorageService.fetchBankName();
            this.gotoHomePage();
        }, errorMessage => {
            // console.log(errorMessage);
            this.openSnackBar(errorMessage, 'Close');
            this.isLoading = false;
        });
        form.reset();
    }
    gotoHomePage() {
        this.router.navigate(['']);
    }
    openSnackBar(message, action) {
        this._snackBar.open(message, action, {
            duration: 2000,
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_storage_service__WEBPACK_IMPORTED_MODULE_4__["DataStorageService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 4, vars: 2, consts: [[1, "auth-wrapper"], [4, "ngIf"], [1, "spinner-div"], [1, "logo-div"], [2, "color", "#eeeeee", "text-transform", "uppercase", "font-weight", "400"], [3, "ngSubmit"], ["authForm", "ngForm"], [1, "w-100"], ["matInput", "", "type", "email", "ngModel", "", "name", "email", "required", "", "email", ""], ["matInput", "", "type", "password", "ngModel", "", "name", "password", "required", "", "minlength", "6"], ["mat-raised-button", "", "type", "submit", 1, "btn-submit"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_1_Template, 19, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LoginComponent_mat_spinner_3_Template, 1, 0, "mat-spinner", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["EmailValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["MinLengthValidator"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__["MatSpinner"]], styles: [".auth-wrapper[_ngcontent-%COMP%] {\r\n  background: #002837;\r\n  width: 100vw;\r\n  height: 100vh;\r\n}\r\n.logo-div[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  top: 5vh;\r\n  left: 50%;\r\n  transform: translate(-50%, 0);\r\n}\r\n.logo-div[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\r\n  width: 120px;\r\n}\r\nform[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  width: 70%;\r\n}\r\n@media only screen and (max-width: 500px) {\r\n  form[_ngcontent-%COMP%] {\r\n    width: 90%;\r\n  }\r\n}\r\n.w-100[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\nh4[_ngcontent-%COMP%] {\r\n  color: #333;\r\n  text-shadow: none;\r\n  outline: none;\r\n  text-align: center;\r\n  font-size: 24px;\r\n}\r\n.btn-submit[_ngcontent-%COMP%] {\r\n  display: block;\r\n  margin: auto;\r\n  font-size: 18px;\r\n}\r\nmat-card[_ngcontent-%COMP%] {\r\n  background-image: linear-gradient(45deg, #00b09f, #009688);\r\n  width: 40vw;\r\n  margin: auto;\r\n}\r\n@media only screen and (max-width: 770px) {\r\n  mat-card[_ngcontent-%COMP%] {\r\n    width: 60vw;\r\n  }\r\n}\r\n@media only screen and (max-width: 500px) {\r\n  mat-card[_ngcontent-%COMP%] {\r\n    width: 80vw;\r\n  }\r\n}\r\nh4[_ngcontent-%COMP%], input[_ngcontent-%COMP%], mat-label[_ngcontent-%COMP%] {\r\n  color: #fff;\r\n}\r\n.switch-btn[_ngcontent-%COMP%] {\r\n  font-size: 12px;\r\n  padding: 0 5px;\r\n  height: auto;\r\n  line-height: 20px;\r\n  display: flex;\r\n  justify-content: center;\r\n  margin: 10px auto 0;\r\n}\r\n.spinner-div[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osYUFBYTtBQUNmO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsUUFBUTtFQUNSLFNBQVM7RUFDVCw2QkFBNkI7QUFDL0I7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsZUFBZTtFQUNmLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0NBQWdDO0VBQ2hDLFVBQVU7QUFDWjtBQUNBO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7QUFDRjtBQUNBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsY0FBYztFQUNkLFlBQVk7RUFDWixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSwwREFBMEQ7RUFDMUQsV0FBVztFQUNYLFlBQVk7QUFDZDtBQUNBO0VBQ0U7SUFDRSxXQUFXO0VBQ2I7QUFDRjtBQUNBO0VBQ0U7SUFDRSxXQUFXO0VBQ2I7QUFDRjtBQUNBOzs7RUFHRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2QsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0NBQWdDO0FBQ2xDIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hdXRoLXdyYXBwZXIge1xyXG4gIGJhY2tncm91bmQ6ICMwMDI4Mzc7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbn1cclxuLmxvZ28tZGl2IHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiA1dmg7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xyXG59XHJcbi5sb2dvLWRpdiA+IGltZyB7XHJcbiAgd2lkdGg6IDEyMHB4O1xyXG59XHJcbmZvcm0ge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgd2lkdGg6IDcwJTtcclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgZm9ybSB7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gIH1cclxufVxyXG4udy0xMDAge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbmg0IHtcclxuICBjb2xvcjogIzMzMztcclxuICB0ZXh0LXNoYWRvdzogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbn1cclxuLmJ0bi1zdWJtaXQge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxubWF0LWNhcmQge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzAwYjA5ZiwgIzAwOTY4OCk7XHJcbiAgd2lkdGg6IDQwdnc7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzcwcHgpIHtcclxuICBtYXQtY2FyZCB7XHJcbiAgICB3aWR0aDogNjB2dztcclxuICB9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gIG1hdC1jYXJkIHtcclxuICAgIHdpZHRoOiA4MHZ3O1xyXG4gIH1cclxufVxyXG5oNCxcclxuaW5wdXQsXHJcbm1hdC1sYWJlbCB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuLnN3aXRjaC1idG4ge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBwYWRkaW5nOiAwIDVweDtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW46IDEwcHggYXV0byAwO1xyXG59XHJcbi5zcGlubmVyLWRpdiB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] }, { type: _services_data_storage_service__WEBPACK_IMPORTED_MODULE_4__["DataStorageService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/model/user.model.ts":
/*!*************************************!*\
  !*** ./src/app/model/user.model.ts ***!
  \*************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
class User {
    constructor(email, password, _token, _tokenExpirationDate) {
        this.email = email;
        this.password = password;
        this._token = _token;
        this._tokenExpirationDate = _tokenExpirationDate;
    }
    get token() {
        if (!this._tokenExpirationDate ||
            new Date() > this._tokenExpirationDate) {
            return null;
        }
        return this._token;
    }
}


/***/ }),

/***/ "./src/app/my-modal/delete-pay-data-modal/delete-pay-data-modal.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/my-modal/delete-pay-data-modal/delete-pay-data-modal.component.ts ***!
  \***********************************************************************************/
/*! exports provided: DeletePayDataModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeletePayDataModalComponent", function() { return DeletePayDataModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_data_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/data-storage.service */ "./src/app/services/data-storage.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");








function DeletePayDataModalComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Do you really want to delete this payment data ?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeletePayDataModalComponent_div_0_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.deletePaymentData(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeletePayDataModalComponent_div_0_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.onNoClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Cancle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DeletePayDataModalComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class DeletePayDataModalComponent {
    constructor(dataStorageService, dialogRef, router
    // private dataTableDataSource: DataTableDataSource
    ) {
        this.dataStorageService = dataStorageService;
        this.dialogRef = dialogRef;
        this.router = router;
        this.isLoading = false;
    }
    ngOnInit() {
        // console.log(this.dataTableDataSource.getTableData());
    }
    onNoClick() {
        this.dialogRef.close();
    }
    deletePaymentData() {
        this.isLoading = true;
        this.dataStorageService.deletePayData()
            .subscribe(res => {
            this.dataStorageService.openSnackBar('Payment data was successfully deleted', 'okay');
            this.isLoading = false;
            this.onNoClick();
        });
        // this.router.navigate(['/dashboard/manage-payment']);
    }
}
DeletePayDataModalComponent.ɵfac = function DeletePayDataModalComponent_Factory(t) { return new (t || DeletePayDataModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_data_storage_service__WEBPACK_IMPORTED_MODULE_1__["DataStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
DeletePayDataModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DeletePayDataModalComponent, selectors: [["app-delete-pay-data-modal"]], decls: 2, vars: 2, consts: [[4, "ngIf"], ["class", "my-spinner", 4, "ngIf"], ["mat-dialog-title", ""], ["mat-dialog-actions", "", 1, "action-div"], ["mat-button", "", "mat-raised-button", "", "color", "warn", 3, "click"], ["mat-button", "", "mat-raised-button", "", "color", "warn", 1, "btn-dark", 3, "click"], [1, "my-spinner"]], template: function DeletePayDataModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DeletePayDataModalComponent_div_0_Template, 8, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DeletePayDataModalComponent_div_1_Template, 2, 0, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__["MatSpinner"]], styles: [".action-div[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXktbW9kYWwvZGVsZXRlLXBheS1kYXRhLW1vZGFsL2RlbGV0ZS1wYXktZGF0YS1tb2RhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQyIsImZpbGUiOiJzcmMvYXBwL215LW1vZGFsL2RlbGV0ZS1wYXktZGF0YS1tb2RhbC9kZWxldGUtcGF5LWRhdGEtbW9kYWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hY3Rpb24tZGl2IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DeletePayDataModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-delete-pay-data-modal',
                templateUrl: './delete-pay-data-modal.component.html',
                styleUrls: ['./delete-pay-data-modal.component.css']
            }]
    }], function () { return [{ type: src_app_services_data_storage_service__WEBPACK_IMPORTED_MODULE_1__["DataStorageService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/my-modal/payment-confirm/payment-confirm-modal/payment-confirm-modal.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/my-modal/payment-confirm/payment-confirm-modal/payment-confirm-modal.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: PaymentConfirmModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentConfirmModalComponent", function() { return PaymentConfirmModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_data_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/data-storage.service */ "./src/app/services/data-storage.service.ts");
/* harmony import */ var src_app_services_payform_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/payform.service */ "./src/app/services/payform.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");










function PaymentConfirmModalComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Are you sure to save this payment detail ?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Beneficiary Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Account Number:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "IFSC Code:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaymentConfirmModalComponent_div_0_Template_button_click_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.gotoPayInvoice(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Save Detail");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaymentConfirmModalComponent_div_0_Template_button_click_31_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.onNoClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Cancle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.payFormData.benefName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.payFormData.accountNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.payFormData.ifscCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.payFormData.payAmountInWords);
} }
function PaymentConfirmModalComponent_mat_spinner_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner");
} }
function PaymentConfirmModalComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Payment Detail successfully saved");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("GENERATING RECEIPT IN (", ctx_r2.redirectCountDown, " Sec)");
} }
class PaymentConfirmModalComponent {
    constructor(dataStorageService, payFormService, router, dialogRef) {
        this.dataStorageService = dataStorageService;
        this.payFormService = payFormService;
        this.router = router;
        this.dialogRef = dialogRef;
        // paymentInitiated: boolean;
        this.inPaymentMode = false;
        this.redirectToInvoice = false;
        // redirectCount: number = 0;
        this.redirectCountDown = 5;
    }
    ngOnInit() {
        this.payFormData = this.payFormService.payFormData;
        console.log(this.payFormData);
        console.log(111111);
        // this.playAudio();
    }
    onNoClick() {
        this.dialogRef.close();
        this.payFormService.paymentDone = false;
    }
    gotoPayInvoice() {
        this.dataStorageService.storePayData(this.payFormData)
            .subscribe(() => {
            this.dataStorageService.openSnackBar('Payment detail was successfully saved', 'Okay');
        });
        this.inPaymentMode = true;
        setTimeout(() => {
            this.payFormService.paymentDone = true;
            this.inPaymentMode = false;
            this.redirectToInvoice = true;
            // this.startRedirectCount();
            this.startRedirectCountDown();
        }, 5000);
        setTimeout(() => {
            this.onNoClick();
            this.redirectToInvoice = false;
            this.router.navigate(['/pay-success-invoice']);
        }, 10000);
    }
    // startRedirectCount() {
    //   var refreshIntervalId = setInterval(() => {
    //     this.redirectCount += 5;
    //     if (this.redirectCount >= 100) {
    //       clearInterval(refreshIntervalId);
    //     }
    //   }, 200);    
    // }
    startRedirectCountDown() {
        var refreshIntervalId = setInterval(() => {
            this.redirectCountDown -= 1;
            if (this.redirectCountDown <= 0) {
                clearInterval(refreshIntervalId);
            }
        }, 800);
    }
}
PaymentConfirmModalComponent.ɵfac = function PaymentConfirmModalComponent_Factory(t) { return new (t || PaymentConfirmModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_data_storage_service__WEBPACK_IMPORTED_MODULE_1__["DataStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_payform_service__WEBPACK_IMPORTED_MODULE_2__["PayFormService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"])); };
PaymentConfirmModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PaymentConfirmModalComponent, selectors: [["app-payment-confirm-modal"]], decls: 3, vars: 3, consts: [["class", "modal-wrapper", 4, "ngIf"], [4, "ngIf"], ["class", "success-card", 4, "ngIf"], [1, "modal-wrapper"], ["mat-dialog-title", ""], ["mat-dialog-content", ""], [1, "main-div"], ["mat-dialog-actions", ""], ["mat-button", "", "mat-raised-button", "", "color", "primary", 3, "click"], ["mat-button", "", "mat-raised-button", "", "color", "warn", 3, "click"], [1, "success-card"], [1, "img-fluid", 2, "font-size", "110px"], [1, "far", "fa-check-circle"], [1, "p2"]], template: function PaymentConfirmModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PaymentConfirmModalComponent_div_0_Template, 33, 4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PaymentConfirmModalComponent_mat_spinner_1_Template, 1, 0, "mat-spinner", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PaymentConfirmModalComponent_div_2_Template, 8, 1, "div", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.inPaymentMode && !ctx.redirectToInvoice);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.inPaymentMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.redirectToInvoice);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogContent"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__["MatDivider"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__["MatSpinner"]], styles: [".main-div[_ngcontent-%COMP%] {\r\n}\r\n.main-div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\r\n  margin-bottom: 0;\r\n  display: flex;\r\n  justify-content: flex-start;\r\n}\r\n.main-div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  padding-left: 10px;\r\n  margin: 0;\r\n}\r\n.mat-dialog-actions[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n.mat-divider[_ngcontent-%COMP%] {\r\n  margin: 12px 0;\r\n}\r\n.mat-dialog-title[_ngcontent-%COMP%] {\r\n  margin: 0 0 30px;\r\n  text-align: center;\r\n  font-size: 22px;\r\n}\r\n.success-card[_ngcontent-%COMP%] {\r\n  z-index: 99999;\r\n  padding: 30px 50px;\r\n  color: #097b0f;\r\n  background-color: #d4edda;\r\n  border: 1px solid #c3e6cb;\r\n  margin: -24px;\r\n}\r\n.success-card[_ngcontent-%COMP%]   .img-fluid[_ngcontent-%COMP%] {\r\n  max-width: 100%;\r\n  height: auto;\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n.success-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  vertical-align: middle;\r\n  border-style: none;\r\n}\r\n.success-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  margin-top: 20px;\r\n  font-weight: 700;\r\n}\r\n.success-card[_ngcontent-%COMP%]   p.p2[_ngcontent-%COMP%] {\r\n  font-size: 12px;\r\n  color: #333;\r\n  text-align: center;\r\n  margin-bottom: 10px;\r\n}\r\n.success-card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n}\r\n.success-card[_ngcontent-%COMP%]   .mat-progress-bar-fill[_ngcontent-%COMP%]::after {\r\n  background-color: #4fc654;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXktbW9kYWwvcGF5bWVudC1jb25maXJtL3BheW1lbnQtY29uZmlybS1tb2RhbC9wYXltZW50LWNvbmZpcm0tbW9kYWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLDJCQUEyQjtBQUM3QjtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixTQUFTO0FBQ1g7QUFDQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QixhQUFhO0FBQ2Y7QUFDQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsU0FBUztFQUNULGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL215LW1vZGFsL3BheW1lbnQtY29uZmlybS9wYXltZW50LWNvbmZpcm0tbW9kYWwvcGF5bWVudC1jb25maXJtLW1vZGFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1kaXYge1xyXG59XHJcbi5tYWluLWRpdiA+IGRpdiB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxufVxyXG4ubWFpbi1kaXYgcCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuLm1hdC1kaWFsb2ctYWN0aW9ucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuLm1hdC1kaXZpZGVyIHtcclxuICBtYXJnaW46IDEycHggMDtcclxufVxyXG4ubWF0LWRpYWxvZy10aXRsZSB7XHJcbiAgbWFyZ2luOiAwIDAgMzBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG59XHJcbi5zdWNjZXNzLWNhcmQge1xyXG4gIHotaW5kZXg6IDk5OTk5O1xyXG4gIHBhZGRpbmc6IDMwcHggNTBweDtcclxuICBjb2xvcjogIzA5N2IwZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDRlZGRhO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjM2U2Y2I7XHJcbiAgbWFyZ2luOiAtMjRweDtcclxufVxyXG4uc3VjY2Vzcy1jYXJkIC5pbWctZmx1aWQge1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4uc3VjY2Vzcy1jYXJkIGltZyB7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICBib3JkZXItc3R5bGU6IG5vbmU7XHJcbn1cclxuLnN1Y2Nlc3MtY2FyZCBwIHtcclxuICBtYXJnaW46IDA7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcbi5zdWNjZXNzLWNhcmQgcC5wMiB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGNvbG9yOiAjMzMzO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbi5zdWNjZXNzLWNhcmQgYnV0dG9uIHtcclxufVxyXG4uc3VjY2Vzcy1jYXJkIC5tYXQtcHJvZ3Jlc3MtYmFyLWZpbGw6OmFmdGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGZjNjU0O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaymentConfirmModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-payment-confirm-modal',
                templateUrl: './payment-confirm-modal.component.html',
                styleUrls: ['./payment-confirm-modal.component.css']
            }]
    }], function () { return [{ type: src_app_services_data_storage_service__WEBPACK_IMPORTED_MODULE_1__["DataStorageService"] }, { type: src_app_services_payform_service__WEBPACK_IMPORTED_MODULE_2__["PayFormService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"] }]; }, null); })();


/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");










function NavbarComponent_a_6_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_a_6_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return _r0.toggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u00A0\u00A0 New Payment ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavbarComponent_a_8_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_a_8_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return _r0.toggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u00A0\u00A0 Accounts ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavbarComponent_a_9_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_a_9_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.logout(); })("click", function NavbarComponent_a_9_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return _r0.toggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u00A0\u00A0 Log Out ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavbarComponent_a_11_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_a_11_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return _r0.toggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u00A0\u00A0 Dashboard ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavbarComponent_a_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavbarComponent_a_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavbarComponent_a_24_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_a_24_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class NavbarComponent {
    constructor(authService) {
        this.authService = authService;
        this.events = [];
        this.isAuthenticated = false;
    }
    ngOnInit() {
        this.userSub = this.authService.user;
        // this.userSub = this.authService.user.subscribe(user => {
        //     this.isAuthenticated = !user ? false : true;
        // });
        this.isAuthenticated = !!this.userSub;
        // console.log(this.userSub);
        // this.isAuthenticated = this.userSub ? true : false;
        // console.log(this.isAuthenticated);
    }
    logout() {
        this.authService.logout(true);
    }
    ngOnDestroy() {
        // this.userSub.unsubscribe();
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 26, vars: 8, consts: [[1, "example-container"], ["mode", "over", 3, "opened", "openedChange", "closed"], ["sidenav", ""], ["mat-list-item", "", "routerLinkActive", "active", "routerLink", "/add-pay-form", 3, "click", 4, "ngIf"], ["mat-list-item", "", "routerLinkActive", "active", "routerLink", "/account", 3, "click", 4, "ngIf"], ["mat-list-item", "", "routerLinkActive", "active", "routerLink", "/dashboard", 3, "click", 4, "ngIf"], ["color", "primary"], ["type", "button", "aria-label", "Toggle sidenav", "mat-icon-button", "", 3, "click"], [1, "fa", "fa-bars"], ["routerLink", "", 1, "navbar-brand"], [1, "nav-menu-link", 2, "margin-left", "auto"], ["mat-raised-button", "", "routerLinkActive", "active", "routerLink", "/add-pay-form", 4, "ngIf"], ["mat-raised-button", "", "routerLinkActive", "active", "routerLink", "/account", 4, "ngIf"], ["mat-raised-button", "", "routerLinkActive", "active", "routerLink", "/account", 3, "click", 4, "ngIf"], ["mat-list-item", "", "routerLinkActive", "active", "routerLink", "/add-pay-form", 3, "click"], [1, "fas", "fa-money-check"], ["mat-list-item", "", "routerLinkActive", "active", "routerLink", "/account", 3, "click"], [1, "fas", "fa-user-circle"], [1, "fas", "fa-power-off"], ["mat-list-item", "", "routerLinkActive", "active", "routerLink", "/dashboard", 3, "click"], [1, "fas", "fa-cogs"], ["mat-raised-button", "", "routerLinkActive", "active", "routerLink", "/add-pay-form"], ["mat-raised-button", "", "routerLinkActive", "active", "routerLink", "/account"], ["mat-raised-button", "", "routerLinkActive", "active", "routerLink", "/account", 3, "click"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-sidenav-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-sidenav", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("openedChange", function NavbarComponent_Template_mat_sidenav_openedChange_1_listener($event) { return ctx.opened = $event; })("opened", function NavbarComponent_Template_mat_sidenav_opened_1_listener() { return ctx.events.push("open!"); })("closed", function NavbarComponent_Template_mat_sidenav_closed_1_listener() { return ctx.events.push("close!"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Menu ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NavbarComponent_a_6_Template, 3, 0, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NavbarComponent_a_8_Template, 3, 0, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, NavbarComponent_a_9_Template, 3, 0, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, NavbarComponent_a_11_Template, 3, 0, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-sidenav-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-toolbar", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " AA Enterprises ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Online payment portal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, NavbarComponent_a_22_Template, 2, 0, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, NavbarComponent_a_23_Template, 2, 0, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, NavbarComponent_a_24_Template, 2, 0, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("opened", ctx.opened);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAuthenticated);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isAuthenticated);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAuthenticated);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAuthenticated);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAuthenticated);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isAuthenticated);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAuthenticated);
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenav"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbar"], _angular_material_list__WEBPACK_IMPORTED_MODULE_4__["MatNavList"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__["MatDivider"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenavContent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterOutlet"], _angular_material_list__WEBPACK_IMPORTED_MODULE_4__["MatListItem"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLinkActive"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatAnchor"]], styles: [".example-container[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  background: #eee;\r\n}\r\n.mat-drawer-content[_ngcontent-%COMP%] {\r\n  \r\n}\r\n\r\n.nav-menu-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  margin-left: 5px;\r\n}\r\n.nav-menu-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:first-child {\r\n  margin-left: 0;\r\n}\r\n\r\nmat-sidenav[_ngcontent-%COMP%] {\r\n  width: 220px;\r\n}\r\n\r\nmat-toolbar[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\r\n  background: #3f51b5;\r\n  color: #fff;\r\n  border: 1px solid #fff;\r\n}\r\nmat-nav-list[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\r\n  background: #3f51b5;\r\n  color: #fff;\r\n  border: 1px solid #fff;\r\n}\r\n.navbar-brand[_ngcontent-%COMP%] {\r\n  outline: none !important;\r\n  cursor: pointer;\r\n}\r\n.navbar-brand[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\r\n  display: block;\r\n  line-height: 0;\r\n  font-size: 8px;\r\n  margin-top: 2px;\r\n}\r\n.mat-drawer-content[_ngcontent-%COMP%] {\r\n  width: 100vw;\r\n  overflow-x: hidden;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixTQUFTO0VBQ1QsT0FBTztFQUNQLFFBQVE7RUFDUixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFO3VCQUNxQjtBQUN2QjtBQUVBLHdCQUF3QjtBQUN4QjtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBLHNCQUFzQjtBQUN0QjtFQUNFLFlBQVk7QUFDZDtBQUNBO0dBQ0c7QUFDSDtFQUNFLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0Usd0JBQXdCO0VBQ3hCLGVBQWU7QUFDakI7QUFDQTtFQUNFLGNBQWM7RUFDZCxjQUFjO0VBQ2QsY0FBYztFQUNkLGVBQWU7QUFDakI7QUFDQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYmFja2dyb3VuZDogI2VlZTtcclxufVxyXG4ubWF0LWRyYXdlci1jb250ZW50IHtcclxuICAvKiB3aWR0aDogMTAwdnc7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuOyAqL1xyXG59XHJcblxyXG4vKiBuYXZiYXIgZGVza3RvcCBsaXN0ICovXHJcbi5uYXYtbWVudS1saW5rIGEge1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn1cclxuLm5hdi1tZW51LWxpbmsgYTpmaXJzdC1jaGlsZCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDA7XHJcbn1cclxuLyogbW9kZT1vdmVyIFNpZGVCYXIgKi9cclxubWF0LXNpZGVuYXYge1xyXG4gIHdpZHRoOiAyMjBweDtcclxufVxyXG4vKiBtYXQtc2lkZW5hdi1jb250ZW50IHtcclxufSAqL1xyXG5tYXQtdG9vbGJhciAuYWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kOiAjM2Y1MWI1O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XHJcbn1cclxubWF0LW5hdi1saXN0IC5hY3RpdmUge1xyXG4gIGJhY2tncm91bmQ6ICMzZjUxYjU7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcclxufVxyXG4ubmF2YmFyLWJyYW5kIHtcclxuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5uYXZiYXItYnJhbmQgc21hbGwge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGxpbmUtaGVpZ2h0OiAwO1xyXG4gIGZvbnQtc2l6ZTogOHB4O1xyXG4gIG1hcmdpbi10b3A6IDJweDtcclxufVxyXG4ubWF0LWRyYXdlci1jb250ZW50IHtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.css']
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pay-success-invoice/pay-success-invoice.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pay-success-invoice/pay-success-invoice.component.ts ***!
  \**********************************************************************/
/*! exports provided: PaySuccessInvoiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaySuccessInvoiceComponent", function() { return PaySuccessInvoiceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_payform_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/payform.service */ "./src/app/services/payform.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");









function PaySuccessInvoiceComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "AA Enterprises");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "TRANSACTION RECEIPT");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Beneficiery Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Agent Mobile Number:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "8927485537");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Sender Mobile Number:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h5", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Agent Shop Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Asraf Computer and Services");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Sender Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Account Number:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Type:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "IFCS Code:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Bank Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Date:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Time:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "\u00A0\u00A0\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Transaction Id:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Amount:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Status:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "select", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "SUCCESS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "PENDING");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "AWAITED");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "DENIED");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "REJECTED");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, " ** THIS IS COMPUTER GENERATED RECEIPT ** ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "small", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaySuccessInvoiceComponent_div_0_Template_small_click_98_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.printScreen(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "print");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "small", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaySuccessInvoiceComponent_div_0_Template_small_click_100_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.gotoPayForm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "go back");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "small", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "your payment detail has been saved. Payment will be done soon. for any query contact our agent. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.payFormData.benefName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.payFormData.senderMobNo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.payFormData.senderName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.payFormData.accountNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.payFormData.payType);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.payFormData.ifscCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.payFormData.bankName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.payFormData.todayDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.payFormData.todayTime, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.payFormData.transactionId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.payFormData.payAmountInWords);
} }
function PaySuccessInvoiceComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Looks like there is no Payment Information");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Please go to Payment Page to make payment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaySuccessInvoiceComponent_div_1_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.gotoPayForm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Make New Payment ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class PaySuccessInvoiceComponent {
    constructor(payFormService, router) {
        this.payFormService = payFormService;
        this.router = router;
        this.showPrintButton = true;
        this.paymentDone = true;
    }
    ngOnInit() {
        // this.paymentDone = this.payFormService.paymentDone;
        console.log(this.paymentDone);
        this.payFormData = this.payFormService.payFormData;
        console.log(this.payFormData);
        if (this.payFormData === undefined) {
            this.paymentDone = false;
        }
    }
    gotoPayForm() {
        this.router.navigate(['/add-pay-form']);
    }
    printScreen() {
        // this.showPrintButton = false;
        setTimeout(() => {
            window.print();
        }, 100);
        setTimeout(() => {
            // this.showPrintButton = true;
        }, 2000);
    }
}
PaySuccessInvoiceComponent.ɵfac = function PaySuccessInvoiceComponent_Factory(t) { return new (t || PaySuccessInvoiceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_payform_service__WEBPACK_IMPORTED_MODULE_1__["PayFormService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
PaySuccessInvoiceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PaySuccessInvoiceComponent, selectors: [["app-pay-success-invoice"]], decls: 2, vars: 2, consts: [["class", "pay-invoice", 4, "ngIf"], ["class", "error-box", 4, "ngIf"], [1, "pay-invoice"], [1, "container-fluid"], [1, "logo-div"], ["routerLink", "/add-pay-form", 2, "font-size", "30px", "font-weight", "500", "color", "#21005b", "cursor", "pointer"], [1, "main-title"], [1, "main-table"], [1, "row"], [1, "col-4"], [1, "col-8"], [2, "padding-right", "5px"], [2, "padding-left", "0"], [1, "col-4", "jcb"], [1, "date-time-div"], [1, "col-12"], [1, "status-select"], ["selected", "", "value", "SUCCESS"], ["value", "PENDING"], ["value", "AWAITED"], ["value", "DENIED"], ["value", "REJECTED"], [1, "generated-text"], [1, "print", "no-print", 3, "click"], [1, "goback", "no-print", 3, "click"], [1, "gen-info"], [1, "error-box"], ["type", "button", "mat-raised-button", "", "color", "primary", 3, "click"]], template: function PaySuccessInvoiceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PaySuccessInvoiceComponent_div_0_Template, 104, 11, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PaySuccessInvoiceComponent_div_1_Template, 10, 0, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.paymentDone);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.paymentDone);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__["MatDivider"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"]], styles: [".pay-invoice[_ngcontent-%COMP%] {\r\n  overflow-x: hidden;\r\n  scroll-behavior: smooth;\r\n  text-align: center;\r\n  font-family: roboto, helvetica, sans-serif;\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n  max-width: 1026px;\r\n  min-width: 1026px;\r\n  width: 1026px;\r\n  margin: auto;\r\n}\r\n.container-fluid[_ngcontent-%COMP%] {\r\n  padding: 20px 0;\r\n}\r\n.main-title[_ngcontent-%COMP%] {\r\n  font-size: 24px;\r\n  font-weight: 700;\r\n  margin-bottom: 15px;\r\n}\r\n.main-table[_ngcontent-%COMP%] {\r\n  text-align: left;\r\n  border-top: 1px solid #494949;\r\n  border-left: 1px solid #494949;\r\n}\r\n.row[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  \r\n  margin: 0;\r\n}\r\n.row[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\r\n  border-right: 1px solid #494949;\r\n  border-bottom: 1px solid #494949;\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  padding: 4px 0;\r\n}\r\n.col-4[_ngcontent-%COMP%] {\r\n  \r\n  width: 342px;\r\n}\r\n.col-8[_ngcontent-%COMP%] {\r\n  \r\n  width: 684px;\r\n}\r\n.col-12[_ngcontent-%COMP%] {\r\n  \r\n  width: 1026px;\r\n}\r\n.date-time-div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  padding: 0;\r\n}\r\n#dateYYYY[_ngcontent-%COMP%] {\r\n  width: 50px;\r\n}\r\n#amount[_ngcontent-%COMP%] {\r\n  padding-left: 20px;\r\n}\r\n.date-time-div[_ngcontent-%COMP%] {\r\n}\r\n.main-table[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  font-size: 14px;\r\n  white-space: pre;\r\n  padding: 0.375rem 0.75rem;\r\n  align-self: center;\r\n}\r\n.main-table[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  white-space: pre;\r\n  padding: 0.375rem 0.75rem;\r\n  align-self: center;\r\n  font-size: 15px;\r\n  margin: 0;\r\n}\r\n.form-control[_ngcontent-%COMP%] {\r\n  display: block;\r\n  width: 100%;\r\n  height: calc(1.5em + 0.75rem + 2px);\r\n  padding: 0.375rem 0.75rem;\r\n  font-size: 1rem;\r\n  font-weight: 400;\r\n  line-height: 1.5;\r\n  color: #495057;\r\n  background-color: #fff;\r\n  background-clip: padding-box;\r\n  border: 1px solid #ced4da;\r\n  border-radius: 0.25rem;\r\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\r\n}\r\n.main-table[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .main-table[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\r\n  border-width: 0;\r\n  background: transparent;\r\n}\r\n.generated-text[_ngcontent-%COMP%] {\r\n  font-weight: 700;\r\n  color: #333;\r\n  font-size: 14px;\r\n  margin-bottom: 0;\r\n}\r\n.gen-info[_ngcontent-%COMP%] {\r\n  color: #333;\r\n  font-size: 8px;\r\n}\r\nselect[_ngcontent-%COMP%]::-ms-expand {\r\n  display: none;\r\n}\r\n.jcb[_ngcontent-%COMP%] {\r\n  justify-content: space-between !important;\r\n}\r\n.print[_ngcontent-%COMP%] {\r\n  float: right;\r\n  cursor: pointer;\r\n}\r\n.goback[_ngcontent-%COMP%] {\r\n  float: left;\r\n  cursor: pointer;\r\n  color: #f4f4f4;\r\n}\r\n.goback[_ngcontent-%COMP%]:hover {\r\n  color: #333;\r\n}\r\n.error-box[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  \r\n}\r\n.error-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n  margin-bottom: 0px;\r\n  font-size: 18px;\r\n}\r\n.error-box[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\r\n  margin: 10px 0 30px;\r\n  display: block;\r\n  font-size: 14px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF5LXN1Y2Nlc3MtaW52b2ljZS9wYXktc3VjY2Vzcy1pbnZvaWNlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQiwwQ0FBMEM7RUFDMUMsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixZQUFZO0FBQ2Q7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsNkJBQTZCO0VBQzdCLDhCQUE4QjtBQUNoQztBQUNBO0VBQ0UsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixTQUFTO0FBQ1g7QUFFQTtFQUNFLCtCQUErQjtFQUMvQixnQ0FBZ0M7RUFDaEMsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtBQUNkO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtBQUNkO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtBQUNmO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtBQUNaO0FBRUE7RUFDRSxXQUFXO0FBQ2I7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUVBO0FBQ0E7QUFDQTtFQUNFLFNBQVM7RUFDVCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixTQUFTO0FBQ1g7QUFDQTtFQUNFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsbUNBQW1DO0VBQ25DLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1Qix5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLHdFQUF3RTtBQUMxRTtBQUNBOztFQUVFLGVBQWU7RUFDZix1QkFBdUI7QUFDekI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsV0FBVztFQUNYLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UseUNBQXlDO0FBQzNDO0FBQ0E7RUFDRSxZQUFZO0VBQ1osZUFBZTtBQUNqQjtBQUNBO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFFQTtFQUNFLGVBQWU7RUFDZixRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQztFQUNoQzs7Ozs7bUJBS2lCO0FBQ25CO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvcGF5LXN1Y2Nlc3MtaW52b2ljZS9wYXktc3VjY2Vzcy1pbnZvaWNlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGF5LWludm9pY2Uge1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6IHJvYm90bywgaGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gIG1heC13aWR0aDogMTAyNnB4O1xyXG4gIG1pbi13aWR0aDogMTAyNnB4O1xyXG4gIHdpZHRoOiAxMDI2cHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcbi5jb250YWluZXItZmx1aWQge1xyXG4gIHBhZGRpbmc6IDIwcHggMDtcclxufVxyXG4ubWFpbi10aXRsZSB7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG4ubWFpbi10YWJsZSB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgIzQ5NDk0OTtcclxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICM0OTQ5NDk7XHJcbn1cclxuLnJvdyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAvKiBmbGV4LXdyYXA6IHdyYXA7ICovXHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4ucm93ID4gZGl2IHtcclxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjNDk0OTQ5O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNDk0OTQ5O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIHBhZGRpbmc6IDRweCAwO1xyXG59XHJcbi5jb2wtNCB7XHJcbiAgLyogd2lkdGg6IDMyLjI0JTsgKi9cclxuICB3aWR0aDogMzQycHg7XHJcbn1cclxuLmNvbC04IHtcclxuICAvKiB3aWR0aDogNjQuNTIlOyAqL1xyXG4gIHdpZHRoOiA2ODRweDtcclxufVxyXG4uY29sLTEyIHtcclxuICAvKiB3aWR0aDogMTAwJTsgKi9cclxuICB3aWR0aDogMTAyNnB4O1xyXG59XHJcblxyXG4uZGF0ZS10aW1lLWRpdiBzcGFuIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuI2RhdGVZWVlZIHtcclxuICB3aWR0aDogNTBweDtcclxufVxyXG5cclxuI2Ftb3VudCB7XHJcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG59XHJcblxyXG4uZGF0ZS10aW1lLWRpdiB7XHJcbn1cclxuLm1haW4tdGFibGUgaDUge1xyXG4gIG1hcmdpbjogMDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgd2hpdGUtc3BhY2U6IHByZTtcclxuICBwYWRkaW5nOiAwLjM3NXJlbSAwLjc1cmVtO1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxufVxyXG4ubWFpbi10YWJsZSBwIHtcclxuICB3aGl0ZS1zcGFjZTogcHJlO1xyXG4gIHBhZGRpbmc6IDAuMzc1cmVtIDAuNzVyZW07XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuLmZvcm0tY29udHJvbCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBjYWxjKDEuNWVtICsgMC43NXJlbSArIDJweCk7XHJcbiAgcGFkZGluZzogMC4zNzVyZW0gMC43NXJlbTtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBsaW5lLWhlaWdodDogMS41O1xyXG4gIGNvbG9yOiAjNDk1MDU3O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2VkNGRhO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XHJcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0O1xyXG59XHJcbi5tYWluLXRhYmxlIGlucHV0LFxyXG4ubWFpbi10YWJsZSBzZWxlY3Qge1xyXG4gIGJvcmRlci13aWR0aDogMDtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG4uZ2VuZXJhdGVkLXRleHQge1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgY29sb3I6ICMzMzM7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuLmdlbi1pbmZvIHtcclxuICBjb2xvcjogIzMzMztcclxuICBmb250LXNpemU6IDhweDtcclxufVxyXG5zZWxlY3Q6Oi1tcy1leHBhbmQge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLmpjYiB7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuICFpbXBvcnRhbnQ7XHJcbn1cclxuLnByaW50IHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5nb2JhY2sge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBjb2xvcjogI2Y0ZjRmNDtcclxufVxyXG4uZ29iYWNrOmhvdmVyIHtcclxuICBjb2xvcjogIzMzMztcclxufVxyXG5cclxuLmVycm9yLWJveCB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAvKiBwYWRkaW5nOiAxMHB4O1xyXG4gIGJhY2tncm91bmQ6IHdoZWF0O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmNDQzMzY7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IC0zcHggIzAwMDtcclxuICBjb2xvcjogI2Y0NDMzNjsgKi9cclxufVxyXG4uZXJyb3ItYm94IGg0IHtcclxuICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcbi5lcnJvci1ib3ggc21hbGwge1xyXG4gIG1hcmdpbjogMTBweCAwIDMwcHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaySuccessInvoiceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pay-success-invoice',
                templateUrl: './pay-success-invoice.component.html',
                styleUrls: ['./pay-success-invoice.component.css'],
            }]
    }], function () { return [{ type: _services_payform_service__WEBPACK_IMPORTED_MODULE_1__["PayFormService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _model_user_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/user.model */ "./src/app/model/user.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");







const fbase_key = 'AIzaSyAmcuRcBveG0gQb4SZZlPyWHJspWV7kK8U';
class AuthService {
    constructor(router, http) {
        this.router = router;
        this.http = http;
        this.userSub = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.token = null;
    }
    /*
    signup(email: string, password: string) {
      return this.http.post<AuthResonseData>(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${fbase_key}`,
        {
          email: email,
          password: password,
          returnSecureToken: true
        }
      ).pipe(
        catchError(this.errorHandler),
        tap(resData => {
          this.handelAunthenntication(
            resData.email,
            resData.localId,
            resData.idToken,
            +resData.expiresIn
          );
        })
      );
    }
    */
    login(email, password) {
        return this.http
            .post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${fbase_key}`, {
            email: email,
            password: password,
            returnSecureToken: true,
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.errorHandler), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])((resData) => {
            // console.log(this.token);
            console.log(resData);
            this.handelAunthenntication(resData.email, resData.localId, resData.idToken, +resData.expiresIn);
        }));
    }
    autoLogin() {
        const UserData = JSON.parse(localStorage.getItem('UserData'));
        if (!UserData) {
            return;
        }
        const loadedUser = new _model_user_model__WEBPACK_IMPORTED_MODULE_3__["User"](UserData.email, UserData.id, UserData._token, new Date(UserData._tokenExpirationDate));
        if (loadedUser.token) {
            this.user = loadedUser;
            this.login(this.user.email, this.user.password);
            this.token = loadedUser.token;
            const expirationDuration = new Date(UserData._tokenExpirationDate).getTime() -
                new Date().getTime();
            this.autoLogout(expirationDuration);
        }
    }
    logout(accPage) {
        this.user = null;
        if (accPage) {
            this.router.navigate(['/account']);
            localStorage.removeItem('UserData');
        }
        if (this.tokenExpirationTimer) {
            clearTimeout(this.tokenExpirationTimer);
        }
        this.tokenExpirationTimer = null;
    }
    autoLogout(expirationDuration) {
        this.tokenExpirationTimer = setTimeout(() => {
            this.logout(false);
            console.log('Auto login called');
            console.log(expirationDuration);
            this.autoLogin();
            // }, 5000);
        }, expirationDuration);
    }
    handelAunthenntication(email, userId, token, expiresIn) {
        this.token = token;
        let expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
        // console.log(expirationDate);
        // expirationDate = expirationDate.toLocaleString('en-US', { timeZone: 'Asia/Calcutta' })
        const user = new _model_user_model__WEBPACK_IMPORTED_MODULE_3__["User"](email, userId, token, expirationDate);
        // this.userSub.next(user);
        this.autoLogout(expiresIn * 1000);
        this.user = user;
        localStorage.setItem('UserData', JSON.stringify(user));
    }
    errorHandler(errorRes) {
        let errorMessage = 'An unkonwn Error Occurred!';
        if (!errorRes.error || !errorRes.error.error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errorMessage);
        }
        switch (errorRes.error.error.message) {
            case 'EMAIL_EXISTS':
                errorMessage =
                    'The email address is already in use by another account.';
                break;
            case 'OPERATION_NOT_ALLOWED':
                errorMessage = 'Password sign-in is disabled for this project.';
                break;
            case 'TOO_MANY_ATTEMPTS_TRY_LATER':
                errorMessage =
                    'We have blocked all requests from this device due to unusual activity. Try again later.';
                break;
            case 'EMAIL_NOT_FOUND':
                errorMessage =
                    'There is no user record corresponding to this identifier. The user may have been deleted.';
                break;
            case 'INVALID_PASSWORD':
                errorMessage =
                    'The password is invalid or the user does not have a password.';
                break;
            case 'USER_DISABLED':
                errorMessage =
                    'The user account has been disabled by an administrator.';
            // break;
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errorMessage);
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/data-storage.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/data-storage.service.ts ***!
  \**************************************************/
/*! exports provided: DataStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataStorageService", function() { return DataStorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");






class DataStorageService {
    constructor(authService, http, _snackBar) {
        this.authService = authService;
        this.http = http;
        this._snackBar = _snackBar;
        this.bankName = [];
        this.deletePaymentId = null;
    }
    // payment call backs
    storePayData(payData) {
        let userToken = this.authService.token;
        return this.http.post('https://nse-app-85c76-default-rtdb.firebaseio.com/payment.json?auth=' +
            userToken, payData);
    }
    fetchPayData() {
        let userToken = this.authService.token;
        return this.http
            .get('https://nse-app-85c76-default-rtdb.firebaseio.com/payment.json?auth=' +
            userToken)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((responseData) => {
            this.payFormData = [];
            for (let k in responseData) {
                responseData[k].delId = k;
                this.payFormData.push(responseData[k]);
            }
        }));
    }
    deletePayData() {
        let delId = this.deletePaymentId;
        let userToken = this.authService.token;
        return this.http.delete(`https://nse-app-85c76-default-rtdb.firebaseio.com/payment/${delId}.json?auth=${userToken}`);
        // .delete('https://nse-app-85c76-default-rtdb.firebaseio.com/payment.json?auth=' + userToken)
    }
    // dashboard call backs
    storeBankName(bankNameArr) {
        let userToken = this.authService.token;
        return this.http.put('https://nse-app-85c76-default-rtdb.firebaseio.com/dashboard/bankName.json?auth=' +
            userToken, bankNameArr);
    }
    fetchBankName() {
        let userToken = this.authService.token;
        console.log('fetchBankName');
        return this.http
            .get('https://nse-app-85c76-default-rtdb.firebaseio.com/dashboard/bankName.json?auth=' +
            userToken)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((responseData) => {
            this.bankName = responseData;
        }));
    }
    openSnackBar(message, action) {
        this._snackBar.open(message, action, {
            duration: 2000,
        });
    }
}
DataStorageService.ɵfac = function DataStorageService_Factory(t) { return new (t || DataStorageService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"])); };
DataStorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DataStorageService, factory: DataStorageService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataStorageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/payform.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/payform.service.ts ***!
  \*********************************************/
/*! exports provided: PayFormService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayFormService", function() { return PayFormService; });
// import { DataStorageService } from "./data-storage.service";
class PayFormService {
    constructor(
    // private dataStorageService: DataStorageService
    ) {
        this.paymentInitiated = false;
        this.paymentDone = false;
    }
    addPayData(payData) {
        this.payFormData = payData;
        // this.dataStorageService.storePayData(payData);
    }
    getPayFormData() {
        return this.payFormData;
    }
}


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\github\notthewaquar\NSE-APP\NSE-App\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map