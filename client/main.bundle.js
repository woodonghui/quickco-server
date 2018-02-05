webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/admin/admin.module": [
		"../../../../../src/app/admin/admin.module.ts"
	],
	"app/sales/sales.module": [
		"../../../../../src/app/sales/sales.module.ts"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../../../src/app/admin/admin.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__outlet_management_outlet_management_component__ = __webpack_require__("../../../../../src/app/admin/outlet-management/outlet-management.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__supplier_management_supplier_management_component__ = __webpack_require__("../../../../../src/app/admin/supplier-management/supplier-management.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material_form_field__ = __webpack_require__("../../../material/esm5/form-field.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__outlet_form_dialog_outlet_form_dialog_component__ = __webpack_require__("../../../../../src/app/admin/outlet-form-dialog/outlet-form-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__outlet_sale_record_list_outlet_sale_record_list_component__ = __webpack_require__("../../../../../src/app/admin/outlet-sale-record-list/outlet-sale-record-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__supplier_product_list_supplier_product_list_component__ = __webpack_require__("../../../../../src/app/admin/supplier-product-list/supplier-product-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__product_form_dialog_product_form_dialog_component__ = __webpack_require__("../../../../../src/app/admin/product-form-dialog/product-form-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__supplier_form_dialog_supplier_form_dialog_component__ = __webpack_require__("../../../../../src/app/admin/supplier-form-dialog/supplier-form-dialog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var routes = [
    {
        path: '',
        // component: OutletManagementComponent,
        children: [
            {
                path: 'outlet',
                component: __WEBPACK_IMPORTED_MODULE_2__outlet_management_outlet_management_component__["a" /* OutletManagementComponent */]
            },
            {
                path: 'outlet/:id',
                component: __WEBPACK_IMPORTED_MODULE_9__outlet_sale_record_list_outlet_sale_record_list_component__["a" /* OutletSaleRecordListComponent */]
            },
            {
                path: 'supplier',
                component: __WEBPACK_IMPORTED_MODULE_3__supplier_management_supplier_management_component__["a" /* SupplierManagementComponent */]
            },
            {
                path: 'supplier/:id',
                component: __WEBPACK_IMPORTED_MODULE_10__supplier_product_list_supplier_product_list_component__["a" /* SupplierProductListComponent */]
            }
        ]
    },
];
var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material_form_field__["c" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["q" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["i" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["f" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["n" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["t" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["k" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["j" /* MatLineModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["o" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["c" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */].forChild(routes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__outlet_management_outlet_management_component__["a" /* OutletManagementComponent */],
                __WEBPACK_IMPORTED_MODULE_3__supplier_management_supplier_management_component__["a" /* SupplierManagementComponent */],
                __WEBPACK_IMPORTED_MODULE_8__outlet_form_dialog_outlet_form_dialog_component__["a" /* OutletFormDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_9__outlet_sale_record_list_outlet_sale_record_list_component__["a" /* OutletSaleRecordListComponent */],
                __WEBPACK_IMPORTED_MODULE_10__supplier_product_list_supplier_product_list_component__["a" /* SupplierProductListComponent */],
                __WEBPACK_IMPORTED_MODULE_11__product_form_dialog_product_form_dialog_component__["a" /* ProductFormDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_12__supplier_form_dialog_supplier_form_dialog_component__["a" /* SupplierFormDialogComponent */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_8__outlet_form_dialog_outlet_form_dialog_component__["a" /* OutletFormDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_11__product_form_dialog_product_form_dialog_component__["a" /* ProductFormDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_12__supplier_form_dialog_supplier_form_dialog_component__["a" /* SupplierFormDialogComponent */]
            ],
        })
    ], AdminModule);
    return AdminModule;
}());



/***/ }),

/***/ "../../../../../src/app/admin/outlet-form-dialog/outlet-form-dialog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-form-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/outlet-form-dialog/outlet-form-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Edit Outlet</h2>\n<div class=\"mat-form-container\">\n  <mat-form-field>\n    <input matInput placeholder=\"Outlet Name\" [(ngModel)]=\"outlet.name\">\n  </mat-form-field>\n  <mat-form-field>\n    <input matInput placeholder=\"Outlet Address\" [(ngModel)]=\"outlet.address\">\n  </mat-form-field>\n  <mat-form-field>\n    <input matInput placeholder=\"Contact\" [(ngModel)]=\"outlet.contact\">\n  </mat-form-field>\n  <button mat-raised-button color=\"primary\" (click)=\"onSaveClick()\">Save</button>\n</div>"

/***/ }),

/***/ "../../../../../src/app/admin/outlet-form-dialog/outlet-form-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OutletFormDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_actions__ = __webpack_require__("../../../../../src/app/service/actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_outlet_service__ = __webpack_require__("../../../../../src/app/service/outlet.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_outlet__ = __webpack_require__("../../../../../src/app/model/outlet.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var OutletFormDialogComponent = /** @class */ (function () {
    function OutletFormDialogComponent(dialogRef, data, service, snackBar) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.service = service;
        this.snackBar = snackBar;
        if (data.outlet) {
            this.outlet = Object.assign({}, data.outlet);
        }
        else {
            this.outlet = new __WEBPACK_IMPORTED_MODULE_4__model_outlet__["a" /* Outlet */]('', '', '');
        }
    }
    OutletFormDialogComponent.prototype.ngOnInit = function () {
    };
    OutletFormDialogComponent.prototype.onSaveClick = function () {
        var _this = this;
        this.service.updateOrCreate(this.outlet).subscribe(function (outlet) {
            _this.dialogRef.close({ action: __WEBPACK_IMPORTED_MODULE_2__service_actions__["a" /* DialogCloseAction */].Refresh });
        }, function (error) {
            console.log(error);
            _this.snackBar.open(error.error.error.message, 'Close', { duration: 4000 });
        });
    };
    OutletFormDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'quickco-outlet-form-dialog',
            template: __webpack_require__("../../../../../src/app/admin/outlet-form-dialog/outlet-form-dialog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/outlet-form-dialog/outlet-form-dialog.component.css")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatDialogRef */], Object, __WEBPACK_IMPORTED_MODULE_3__service_outlet_service__["a" /* OutletService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatSnackBar */]])
    ], OutletFormDialogComponent);
    return OutletFormDialogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin/outlet-management/outlet-management.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card {\n    cursor: pointer;\n}\n.card.bg-primary {\n    background-color: #33C3F0!important;\n}\n.fa-home {\n    color: #eeeeee;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/outlet-management/outlet-management.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-xl-3 col-sm-6 mb-3\" *ngFor=\"let outlet of outlets\">\n      <div class=\"card o-hidden h-100\" routerLink=\"/admin/outlet/{{outlet.id}}\">  \n          <!-- routerLink=\"/admin/outlet/{{outlet.id}}\" -->\n        <div class=\"card-body\">\n          <div class=\"mr-5\">{{outlet.name}}</div>\n          <div class=\"small\"><i class=\"fa fa-fw fa-phone\"></i> {{outlet.contact}}</div>\n          <div class=\"small\"><i class=\"fa fa-fw fa-map-marker\"></i> {{outlet.address}}</div>\n          <!-- <div class=\"small\">\n              <button mat-button (click)=\"openEditingOutletDialog(outlet)\"><i class=\"fa fa-fw fa-edit\"></i> Edit</button>\n          </div> -->\n          <div class=\"card-body-icon\">\n            <i class=\"fa fa-fw fa-home\"></i>\n          </div>\n        </div>\n      </div>\n    </div>\n  \n    <div class=\"col-xl-3 col-sm-6 mb-3\" (click)=\"openEditingOutletDialog()\">\n      <div class=\"card text-white bg-primary o-hidden h-100\">\n        <div class=\"card-body\">\n          <div class=\"card-body-icon\">\n            <i class=\"fa fa-fw fa-plus-circle\"></i>\n          </div>\n          <div class=\"mr-5\">Click here</div>\n          <div class=\"small\">to add outlet</div>\n          <div class=\"small\"></div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/admin/outlet-management/outlet-management.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OutletManagementComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__outlet_form_dialog_outlet_form_dialog_component__ = __webpack_require__("../../../../../src/app/admin/outlet-form-dialog/outlet-form-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_outlet_service__ = __webpack_require__("../../../../../src/app/service/outlet.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_actions__ = __webpack_require__("../../../../../src/app/service/actions.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OutletManagementComponent = /** @class */ (function () {
    function OutletManagementComponent(snackBar, dialog, service) {
        this.snackBar = snackBar;
        this.dialog = dialog;
        this.service = service;
    }
    OutletManagementComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getAll().subscribe(function (outlets) {
            _this.outlets = outlets;
        });
    };
    OutletManagementComponent.prototype.openEditingOutletDialog = function (outlet) {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__outlet_form_dialog_outlet_form_dialog_component__["a" /* OutletFormDialogComponent */], {
            width: '450px',
            data: { outlet: outlet }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result !== undefined && result.action === __WEBPACK_IMPORTED_MODULE_4__service_actions__["a" /* DialogCloseAction */].Refresh) {
                _this.snackBar.open('Item was added successfully!', 'OK', {
                    duration: 4000,
                });
                _this.service.getAll().subscribe(function (outlets) {
                    _this.outlets = outlets;
                });
            }
        });
    };
    OutletManagementComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'quickco-outlet-management',
            template: __webpack_require__("../../../../../src/app/admin/outlet-management/outlet-management.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/outlet-management/outlet-management.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatSnackBar */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_3__service_outlet_service__["a" /* OutletService */]])
    ], OutletManagementComponent);
    return OutletManagementComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin/outlet-sale-record-list/outlet-sale-record-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/outlet-sale-record-list/outlet-sale-record-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <button mat-button color=\"primary\" (click)=\"goBack()\"><i class=\"fa fa-arrow-left\"></i> Back</button>  \n  <mat-table #table [dataSource]=\"dataSource\">\n  \n      <!-- Date Column -->\n      <ng-container matColumnDef=\"date\">\n        <mat-header-cell *matHeaderCellDef> Date </mat-header-cell>\n        <mat-cell *matCellDef=\"let element\"> {{element.date | date}} </mat-cell>\n      </ng-container>\n  \n      <!-- Totalincome Column -->\n      <ng-container matColumnDef=\"totalincome\">\n        <mat-header-cell *matHeaderCellDef> Total Income </mat-header-cell>\n        <mat-cell *matCellDef=\"let element\"> {{element.totalincome | currency}} </mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"foodpandaincome\">\n        <mat-header-cell *matHeaderCellDef> Delivery Income </mat-header-cell>\n        <mat-cell *matCellDef=\"let element\"> {{element.foodpandaincome | currency}} </mat-cell>\n      </ng-container>\n  \n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n    </mat-table>\n  \n    <mat-paginator #paginator\n                   [pageSize]=\"10\"\n                   [pageSizeOptions]=\"[5, 10, 20]\">\n    </mat-paginator>\n  </div>\n  "

/***/ }),

/***/ "../../../../../src/app/admin/outlet-sale-record-list/outlet-sale-record-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OutletSaleRecordListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_sale_record_service__ = __webpack_require__("../../../../../src/app/service/sale-record.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OutletSaleRecordListComponent = /** @class */ (function () {
    function OutletSaleRecordListComponent(route, location, service) {
        this.route = route;
        this.location = location;
        this.service = service;
        this.displayedColumns = ['date', 'totalincome', 'foodpandaincome'];
    }
    OutletSaleRecordListComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.paramMap.get('id');
        this.service.getSaleRecordsByOutlet(id).subscribe(function (records) {
            _this.dataSource = new __WEBPACK_IMPORTED_MODULE_4__angular_material__["s" /* MatTableDataSource */](records);
            _this.dataSource.paginator = _this.paginator;
        });
    };
    OutletSaleRecordListComponent.prototype.goBack = function () {
        this.location.back();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_4__angular_material__["m" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__angular_material__["m" /* MatPaginator */])
    ], OutletSaleRecordListComponent.prototype, "paginator", void 0);
    OutletSaleRecordListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'quickco-outlet-sale-record-list',
            template: __webpack_require__("../../../../../src/app/admin/outlet-sale-record-list/outlet-sale-record-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/outlet-sale-record-list/outlet-sale-record-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */],
            __WEBPACK_IMPORTED_MODULE_3__service_sale_record_service__["a" /* SaleRecordService */]])
    ], OutletSaleRecordListComponent);
    return OutletSaleRecordListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin/product-form-dialog/product-form-dialog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-form-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/product-form-dialog/product-form-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Edit Product in Supplier: {{supplier.name}}</h2>\n<div class=\"mat-form-container\">\n  <mat-form-field>\n    <input matInput placeholder=\"Product Name\" [(ngModel)]=\"product.name\">\n  </mat-form-field>\n  <mat-form-field>\n    <input matInput type=\"number\" placeholder=\"Unit Price\" [(ngModel)]=\"product.unitprice\">\n    <span matPrefix>$&nbsp;</span>\n  </mat-form-field>\n  <mat-form-field>\n    <mat-select placeholder=\"Unit\" [(ngModel)]=\"product.unit\">\n      <mat-option value=\"Kg\">Kg</mat-option>\n      <mat-option value=\"CTN\">CTN</mat-option>\n      <mat-option value=\"Piece\">Piece</mat-option>\n      <mat-option value=\"Bag\">Bag</mat-option>\n    </mat-select>\n  </mat-form-field>\n  <mat-form-field>\n      <input matInput placeholder=\"SKU\" [(ngModel)]=\"product.sku\">\n    </mat-form-field>\n  <button mat-raised-button color=\"primary\" (click)=\"onSaveClick()\">Save</button>\n</div>"

/***/ }),

/***/ "../../../../../src/app/admin/product-form-dialog/product-form-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductFormDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_product__ = __webpack_require__("../../../../../src/app/model/product.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_product_service__ = __webpack_require__("../../../../../src/app/service/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_actions__ = __webpack_require__("../../../../../src/app/service/actions.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var ProductFormDialogComponent = /** @class */ (function () {
    function ProductFormDialogComponent(dialogRef, data, service, matSnackBar) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.service = service;
        this.matSnackBar = matSnackBar;
        this.supplier = data.supplier;
        if (data.product) {
            this.product = Object.assign({}, data.product);
        }
        else {
            this.product = new __WEBPACK_IMPORTED_MODULE_1__model_product__["a" /* Product */](this.supplier.id, '', '', null, '');
        }
    }
    ProductFormDialogComponent.prototype.ngOnInit = function () { };
    ProductFormDialogComponent.prototype.onSaveClick = function () {
        var _this = this;
        this.service.updateOrCreate(this.product).subscribe(function (product) {
            _this.dialogRef.close({ action: __WEBPACK_IMPORTED_MODULE_4__service_actions__["a" /* DialogCloseAction */].Refresh });
        }, function (error) {
            _this.matSnackBar.open(error.error.error.message, 'Close', { duration: 4000 });
        });
    };
    ProductFormDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'quickco-product-form-dialog',
            template: __webpack_require__("../../../../../src/app/admin/product-form-dialog/product-form-dialog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/product-form-dialog/product-form-dialog.component.css")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* MatDialogRef */], Object, __WEBPACK_IMPORTED_MODULE_3__service_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["p" /* MatSnackBar */]])
    ], ProductFormDialogComponent);
    return ProductFormDialogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin/supplier-form-dialog/supplier-form-dialog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-form-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/supplier-form-dialog/supplier-form-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Edit Supplier</h2>\n<div class=\"mat-form-container\">\n  <mat-form-field>\n    <input matInput placeholder=\"Name\" [(ngModel)]=\"supplier.name\">\n  </mat-form-field>\n  <mat-form-field>\n    <input matInput placeholder=\"Address\" [(ngModel)]=\"supplier.address\">\n  </mat-form-field>\n  <mat-form-field>\n    <input matInput placeholder=\"Contact\" [(ngModel)]=\"supplier.contact\">\n  </mat-form-field>\n  <mat-checkbox [(ngModel)]=\"supplier.gstregistered\">GST/VAT Registered</mat-checkbox>\n  <mat-checkbox [(ngModel)]=\"supplier.hasterm\">Has Term Period</mat-checkbox>\n\n  <button mat-raised-button color=\"primary\" (click)=\"onSaveClick()\">Save</button>\n</div>"

/***/ }),

/***/ "../../../../../src/app/admin/supplier-form-dialog/supplier-form-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SupplierFormDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_supplier__ = __webpack_require__("../../../../../src/app/model/supplier.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_supplier_service__ = __webpack_require__("../../../../../src/app/service/supplier.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_actions__ = __webpack_require__("../../../../../src/app/service/actions.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SupplierFormDialogComponent = /** @class */ (function () {
    function SupplierFormDialogComponent(dialogRef, service, snackBar) {
        this.dialogRef = dialogRef;
        this.service = service;
        this.snackBar = snackBar;
        this.supplier = new __WEBPACK_IMPORTED_MODULE_1__model_supplier__["a" /* Supplier */]('', '', '', false, false);
    }
    SupplierFormDialogComponent.prototype.ngOnInit = function () {
    };
    SupplierFormDialogComponent.prototype.onSaveClick = function () {
        var _this = this;
        this.service.create(this.supplier).subscribe(function (outlet) {
            _this.dialogRef.close({ action: __WEBPACK_IMPORTED_MODULE_4__service_actions__["a" /* DialogCloseAction */].Refresh });
        }, function (error) {
            _this.snackBar.open(error.error.error.message, 'Close', { duration: 4000 });
        });
    };
    SupplierFormDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'quickco-supplier-form-dialog',
            template: __webpack_require__("../../../../../src/app/admin/supplier-form-dialog/supplier-form-dialog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/supplier-form-dialog/supplier-form-dialog.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* MatDialogRef */],
            __WEBPACK_IMPORTED_MODULE_3__service_supplier_service__["a" /* SupplierService */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["p" /* MatSnackBar */]])
    ], SupplierFormDialogComponent);
    return SupplierFormDialogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin/supplier-management/supplier-management.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".fa-truck {\n    color: #eeeeee;\n}\n.card {\n    cursor: pointer;\n}\n.card.bg-primary {\n    background-color: #33C3F0!important;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/supplier-management/supplier-management.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-xl-3 col-sm-6 mb-3\" *ngFor=\"let supplier of suppliers\">\n        <div class=\"card o-hidden h-100\" routerLink=\"/admin/supplier/{{supplier.id}}\">\n          <div class=\"card-body\">\n            <div class=\"mr-5\">{{supplier.name}}</div>\n            <div class=\"small\"><i class=\"fa fa-fw fa-map-marker\"></i> {{supplier.address}}</div>\n            <div class=\"small\"><i class=\"fa fa-fw fa-phone\"></i> {{supplier.contact}}</div>\n            <div class=\"card-body-icon\">\n              <i class=\"fa fa-fw fa-truck\"></i>\n            </div>\n          </div>\n        </div>\n      </div>\n    \n      <div class=\"col-xl-3 col-sm-6 mb-3\" (click)=\"openEditingSupplierDialog()\">\n        <div class=\"card text-white bg-primary o-hidden h-100\">\n          <div class=\"card-body\">\n            <div class=\"card-body-icon\">\n              <i class=\"fa fa-fw fa-plus-circle\"></i>\n            </div>\n            <div class=\"mr-5\">Click here</div>\n            <div class=\"small\">to add supplier</div>\n            <div class=\"small\"></div>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  \n  </div>"

/***/ }),

/***/ "../../../../../src/app/admin/supplier-management/supplier-management.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SupplierManagementComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_supplier_service__ = __webpack_require__("../../../../../src/app/service/supplier.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__supplier_form_dialog_supplier_form_dialog_component__ = __webpack_require__("../../../../../src/app/admin/supplier-form-dialog/supplier-form-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_actions__ = __webpack_require__("../../../../../src/app/service/actions.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SupplierManagementComponent = /** @class */ (function () {
    function SupplierManagementComponent(snackBar, dialog, service) {
        this.snackBar = snackBar;
        this.dialog = dialog;
        this.service = service;
    }
    SupplierManagementComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getAll().subscribe(function (suppliers) {
            _this.suppliers = suppliers;
        });
    };
    SupplierManagementComponent.prototype.openEditingSupplierDialog = function (supplier) {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__supplier_form_dialog_supplier_form_dialog_component__["a" /* SupplierFormDialogComponent */], {
            width: '450px',
            data: { supplier: supplier }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result !== undefined && result.action === __WEBPACK_IMPORTED_MODULE_4__service_actions__["a" /* DialogCloseAction */].Refresh) {
                _this.snackBar.open('Item was added successfully!', 'OK', {
                    duration: 4000,
                });
                _this.service.getAll().subscribe(function (suppliers) {
                    _this.suppliers = suppliers;
                });
            }
        });
    };
    SupplierManagementComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'quickco-supplier-management',
            template: __webpack_require__("../../../../../src/app/admin/supplier-management/supplier-management.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/supplier-management/supplier-management.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_material__["p" /* MatSnackBar */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_1__service_supplier_service__["a" /* SupplierService */]])
    ], SupplierManagementComponent);
    return SupplierManagementComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin/supplier-product-list/supplier-product-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container-filter mat-form-field {\n    width: 100%;\n}\n\n.container-actions {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n}\n\n.left-actions {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    text-align: left;\n}\n\n.right-actions {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    text-align: right;\n}\n\n.mat-snack-bar-container.error {\n    background-color: rgb(185, 38, 38);\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/supplier-product-list/supplier-product-list.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"container-fluid\" *ngIf=\"supplier\">\n  <div class=\"mr-3\">{{supplier.name}}</div>\n  <div class=\"\">\n    <i class=\"fa fa-fw fa-map-marker\"></i> {{supplier.address}}</div>\n  <div class=\"\">\n    <i class=\"fa fa-fw fa-phone\"></i> {{supplier.contact}}</div>\n</div> -->\n\n<div class=\"container-fluid\">\n  <div class=\"container-actions\">\n    <div class=\"left-actions\">\n      <button mat-button color=\"primary\" (click)=\"goBack()\"><i class=\"fa fa-arrow-left\"></i> Back</button>\n    </div>\n    <div class=\"right-actions\">\n      <button mat-button (click)=\"openEditingProductDialog()\">\n        <i class=\"fa fa-fw fa-plus\"></i> Add Product</button>\n    </div>\n  </div>\n\n  <div class=\"container-table\">\n    <div class=\"container-filter\">\n      <mat-form-field>\n        <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search product\">\n      </mat-form-field>\n    </div>\n\n    <mat-table #table [dataSource]=\"dataSource\">\n      <ng-container matColumnDef=\"name\">\n        <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\n        <mat-cell *matCellDef=\"let element\"> {{element.name}} </mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"unitprice\">\n        <mat-header-cell *matHeaderCellDef> Price (w/o GST)</mat-header-cell>\n        <mat-cell *matCellDef=\"let element\"> {{element.unitprice | currency}} / {{element.unit}} </mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"sku\">\n        <mat-header-cell *matHeaderCellDef> SKU </mat-header-cell>\n        <mat-cell *matCellDef=\"let element\"> {{element.sku}} </mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"action\">\n        <mat-header-cell *matHeaderCellDef></mat-header-cell>\n        <mat-cell *matCellDef=\"let element\">\n          <button mat-button (click)=\"openEditingProductDialog(element)\"><i class=\"fa fa-fw fa-edit\"></i></button>\n        </mat-cell>\n      </ng-container>\n\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n    </mat-table>\n\n    <mat-paginator #paginator [pageSize]=\"10\" [pageSizeOptions]=\"[5, 10, 20]\">\n    </mat-paginator>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/admin/supplier-product-list/supplier-product-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SupplierProductListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_supplier_service__ = __webpack_require__("../../../../../src/app/service/supplier.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__product_form_dialog_product_form_dialog_component__ = __webpack_require__("../../../../../src/app/admin/product-form-dialog/product-form-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_actions__ = __webpack_require__("../../../../../src/app/service/actions.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SupplierProductListComponent = /** @class */ (function () {
    function SupplierProductListComponent(route, router, location, service, matSnackBar, dialog) {
        this.route = route;
        this.router = router;
        this.location = location;
        this.service = service;
        this.matSnackBar = matSnackBar;
        this.dialog = dialog;
        this.displayedColumns = ['name', 'unitprice', 'sku', 'action'];
    }
    SupplierProductListComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.paramMap.get('id');
        this.service.findById(id).subscribe(function (supplier) {
            _this.supplier = supplier;
            _this.service.getProductsBySupplier(_this.supplier.id).subscribe(function (products) {
                _this.products = products;
                _this.dataSource = new __WEBPACK_IMPORTED_MODULE_4__angular_material__["s" /* MatTableDataSource */](products);
                _this.dataSource.paginator = _this.paginator;
            });
        }, function (error) {
            _this.matSnackBar.open(error.error.error.message, 'Close', { duration: 4000, panelClass: 'error' });
            _this.router.navigate(['/admin/supplier']);
        });
    };
    SupplierProductListComponent.prototype.goBack = function () {
        this.location.back();
    };
    SupplierProductListComponent.prototype.openEditingProductDialog = function (product) {
        var _this = this;
        var supplierId = this.route.snapshot.paramMap.get('id');
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__product_form_dialog_product_form_dialog_component__["a" /* ProductFormDialogComponent */], {
            width: '450px',
            data: { supplier: this.supplier, product: product }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result !== undefined && result.action === __WEBPACK_IMPORTED_MODULE_6__service_actions__["a" /* DialogCloseAction */].Refresh) {
                _this.matSnackBar.open('Item was saved successfully!', 'OK', {
                    duration: 4000,
                });
                _this.service.getProductsBySupplier(supplierId).subscribe(function (products) {
                    _this.products = products;
                    _this.dataSource = new __WEBPACK_IMPORTED_MODULE_4__angular_material__["s" /* MatTableDataSource */](products);
                });
            }
        });
    };
    SupplierProductListComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim();
        filterValue = filterValue.toLowerCase();
        this.dataSource.filter = filterValue;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_4__angular_material__["m" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__angular_material__["m" /* MatPaginator */])
    ], SupplierProductListComponent.prototype, "paginator", void 0);
    SupplierProductListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'quickco-supplier-product-list',
            template: __webpack_require__("../../../../../src/app/admin/supplier-product-list/supplier-product-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/supplier-product-list/supplier-product-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */],
            __WEBPACK_IMPORTED_MODULE_1__service_supplier_service__["a" /* SupplierService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["p" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["e" /* MatDialog */]])
    ], SupplierProductListComponent);
    return SupplierProductListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Navigation-->\n<nav class=\"navbar navbar-expand-lg fixed-top\" id=\"mainNav\">\n  <a class=\"navbar-brand\" href=\"index.html\"><img src=\"assets/logo.png\"></a>\n  <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\"\n    aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\n    <ul class=\"navbar-nav navbar-sidenav\" id=\"exampleAccordion\">\n\n      <li class=\"nav-item\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Sales\">\n          <a class=\"nav-link nav-link-collapse collapsed\" data-toggle=\"collapse\" href=\"#collapseComponents\" data-parent=\"#exampleAccordion\">\n            <i class=\"fa fa-fw fa-dashboard\"></i>\n            <span class=\"nav-link-text\">Sales</span>\n          </a>\n          <ul class=\"sidenav-second-level collapse\" id=\"collapseComponents\">\n            <li>\n                <a routerLink=\"/sales\">Create a Sale</a>\n            </li>\n            <li>\n                <a routerLink=\"/admin/outlet\">History</a>\n            </li>\n          </ul>\n        </li>\n\n\n      <li class=\"nav-item\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Supplier\">\n        <a class=\"nav-link\" routerLink=\"/admin/supplier\">\n          <i class=\"fa fa-fw fa-truck\"></i>\n          <span class=\"nav-link-text\">Supplier & Product</span>\n        </a>\n      </li>\n      <li class=\"nav-item\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Outlet\">\n          <a class=\"nav-link\" routerLink=\"/admin/outlet\">\n            <i class=\"fa fa-fw fa-home\"></i>\n          <span class=\"nav-link-text\">Outlet</span>\n        </a>\n      </li>\n    </ul>\n    <ul class=\"navbar-nav sidenav-toggler\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link text-center\" id=\"sidenavToggler\">\n          <i class=\"fa fa-fw fa-angle-left\"></i>\n        </a>\n      </li>\n    </ul>\n\n  </div>\n</nav>\n<div class=\"content-wrapper\">\n  <router-outlet></router-outlet>\n  <footer class=\"sticky-footer\">\n    <div class=\"container\">\n      <div class=\"text-center\">\n        <small>Copyright © QuickCo 2017</small>\n      </div>\n    </div>\n  </footer>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'quickco-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__admin_admin_module__ = __webpack_require__("../../../../../src/app/admin/admin.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__service_service_module__ = __webpack_require__("../../../../../src/app/service/service.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__sales_sales_module__ = __webpack_require__("../../../../../src/app/sales/sales.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: 'admin',
        loadChildren: 'app/admin/admin.module#AdminModule',
    },
    {
        path: 'sales',
        loadChildren: 'app/sales/sales.module#SalesModule',
    },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__admin_admin_module__["AdminModule"],
                __WEBPACK_IMPORTED_MODULE_8__sales_sales_module__["SalesModule"],
                __WEBPACK_IMPORTED_MODULE_7__service_service_module__["a" /* ServiceModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* RouterModule */].forRoot(routes),
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/model/outlet.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Outlet; });
var Outlet = /** @class */ (function () {
    function Outlet(name, address, contact, id) {
        this.name = name;
        this.address = address;
        this.contact = contact;
        this.id = id;
    }
    return Outlet;
}());



/***/ }),

/***/ "../../../../../src/app/model/product.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Product; });
var Product = /** @class */ (function () {
    function Product(supplierid, name, unit, unitprice, sku, 
        // public excludeincosting: boolean,
        id) {
        this.supplierid = supplierid;
        this.name = name;
        this.unit = unit;
        this.unitprice = unitprice;
        this.sku = sku;
        this.id = id;
    }
    return Product;
}());



/***/ }),

/***/ "../../../../../src/app/model/sale-record.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SaleRecord; });
var SaleRecord = /** @class */ (function () {
    function SaleRecord(outletid, totalincome, bankincash, foodpandaincome, date, honestbeeincome, id) {
        if (honestbeeincome === void 0) { honestbeeincome = 0; }
        this.outletid = outletid;
        this.totalincome = totalincome;
        this.bankincash = bankincash;
        this.foodpandaincome = foodpandaincome;
        this.date = date;
        this.honestbeeincome = honestbeeincome;
        this.id = id;
    }
    return SaleRecord;
}());



/***/ }),

/***/ "../../../../../src/app/model/supplier.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Supplier; });
var Supplier = /** @class */ (function () {
    function Supplier(name, address, contact, gstregistered, hasterm, id) {
        this.name = name;
        this.address = address;
        this.contact = contact;
        this.gstregistered = gstregistered;
        this.hasterm = hasterm;
        this.id = id;
    }
    return Supplier;
}());



/***/ }),

/***/ "../../../../../src/app/sales/sales-record/sales-record.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container-form-field {\n    max-width: 300px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sales/sales-record/sales-record.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-vertical-stepper linear=\"true\">\n  <mat-step [stepControl]=\"firstFormGroup\">\n    <form [formGroup]=\"firstFormGroup\">\n      <ng-template matStepLabel>Select the date and outlet</ng-template>\n      <mat-form-field>\n        <mat-select placeholder=\"Select outlet\" formControlName=\"outlet\" required #outlet>\n          <mat-option *ngFor=\"let outlet of outlets\" [value]=\"outlet\">\n            {{ outlet.name }}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n\n      <mat-form-field>\n        <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\" required formControlName=\"date\">\n        <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n        <mat-datepicker #picker></mat-datepicker>\n      </mat-form-field>\n\n      <div>\n        <button mat-button matStepperNext>Next</button>\n      </div>\n\n    </form>\n  </mat-step>\n  <mat-step [stepControl]=\"secondFormGroup\">\n    <form [formGroup]=\"secondFormGroup\">\n      <ng-template matStepLabel>Fill out the numbers</ng-template>\n\n      <div class=\"container-form-field\">\n        <mat-form-field>\n          <input matInput placeholder=\"Total Income\" type=\"number\" formControlName=\"totalincome\" required>\n          <span matPrefix>$&nbsp;</span>\n        </mat-form-field>\n\n        <mat-form-field>\n          <input matInput placeholder=\"Income from delivery platform\" type=\"number\" formControlName=\"foodpandaincome\" required>\n          <span matPrefix>$&nbsp;</span>\n        </mat-form-field>\n\n        <mat-form-field>\n          <input matInput placeholder=\"Cash\" type=\"number\" formControlName=\"bankincash\" required>\n          <span matPrefix>$&nbsp;</span>\n        </mat-form-field>\n      </div>\n\n      <div>\n        <button mat-button matStepperPrevious>Back</button>\n        <button mat-button matStepperNext>Next</button>\n      </div>\n    </form>\n  </mat-step>\n\n\n  <mat-step>\n    <ng-template matStepLabel>Fill out the costs</ng-template>\n\n    <mat-form-field>\n      <mat-select placeholder=\"Select supplier\" #supplier (selectionChange)=\"onSelectSupplier($event)\">\n        <mat-option *ngFor=\"let supplier of suppliers\" [value]=\"supplier.id\">\n          {{ supplier.name }}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n\n    <mat-form-field>\n      <mat-select placeholder=\"Select product\" #supplierproduct>\n        <mat-option *ngFor=\"let product of supplierProducts\" [value]=\"product\">\n          {{ product.name }} - {{product.unitprice}}/{{product.unit}}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n\n    <mat-form-field>\n      <input matInput placeholder=\"Quantity\" type=\"number\" required #quantity>\n    </mat-form-field>\n\n    <button mat-button (click)=\"addCostItem(supplierproduct.value, quantity.value)\">\n      <i class=\"fa fa-fw fa-plus-circle\"></i>\n    </button>\n\n    <mat-selection-list *ngIf=\"costItems\">\n      <mat-list-option *ngFor=\"let item of costItems\">\n        {{item.productname}} x {{item.quantity}}\n      </mat-list-option>\n    </mat-selection-list>\n    \n    <div>\n      <button mat-button matStepperPrevious>Back</button>\n      <button mat-button matStepperNext>Next</button>\n    </div>\n  </mat-step>\n\n  <mat-step>\n    <ng-template matStepLabel>Preview & Submit</ng-template>\n    <div>\n      <div>Outlet: {{firstFormGroup.value.outlet.name}}</div>\n      <div>Date: {{firstFormGroup.value.date | date}}</div>\n      <div>Total income: {{secondFormGroup.value.totalincome | currency}}</div>\n      <div>Income from delivery platform: {{secondFormGroup.value.foodpandaincome | currency}}</div>\n      <div>Cash: {{secondFormGroup.value.bankincash | currency}}</div>\n      <div *ngIf=\"costItems\">\n        Cost:\n        <mat-list>\n          <mat-list-item *ngFor=\"let item of costItems\">\n            {{item.productname}} x {{item.quantity}}\n          </mat-list-item>\n        </mat-list>    \n      </div>\n    </div>\n\n    <div>\n      <button mat-raised-button color=\"primary\" (click)=\"save()\">Save</button>\n    </div>\n\n  </mat-step>\n\n  <!-- <mat-step>\n    <ng-template matStepLabel>Done</ng-template>\n    You are now done.\n  </mat-step> -->\n</mat-vertical-stepper>"

/***/ }),

/***/ "../../../../../src/app/sales/sales-record/sales-record.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SalesRecordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_outlet_service__ = __webpack_require__("../../../../../src/app/service/outlet.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_supplier_service__ = __webpack_require__("../../../../../src/app/service/supplier.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_sale_record__ = __webpack_require__("../../../../../src/app/model/sale-record.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_sale_record_service__ = __webpack_require__("../../../../../src/app/service/sale-record.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SalesRecordComponent = /** @class */ (function () {
    function SalesRecordComponent(router, matSnackBar, formBuilder, outletService, supplierService, saleRecordService) {
        this.router = router;
        this.matSnackBar = matSnackBar;
        this.formBuilder = formBuilder;
        this.outletService = outletService;
        this.supplierService = supplierService;
        this.saleRecordService = saleRecordService;
        this.costItems = [];
    }
    SalesRecordComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.outletService.getAll().subscribe(function (outlets) {
            _this.outlets = outlets;
        });
        this.supplierService.getAll().subscribe(function (suppliers) {
            _this.suppliers = suppliers;
        });
        this.firstFormGroup = this.formBuilder.group({
            outlet: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            date: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required]
        });
        this.secondFormGroup = this.formBuilder.group({
            totalincome: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            foodpandaincome: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            bankincash: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required]
        });
    };
    SalesRecordComponent.prototype.onSelectSupplier = function ($event) {
        var _this = this;
        this.supplierService.getProductsBySupplier($event.value).subscribe(function (products) {
            _this.supplierProducts = products;
        });
    };
    SalesRecordComponent.prototype.addCostItem = function (product, quantity) {
        this.costItems.push({
            productname: product.name,
            quantity: quantity
        });
    };
    SalesRecordComponent.prototype.save = function () {
        var _this = this;
        var saleRecord = new __WEBPACK_IMPORTED_MODULE_4__model_sale_record__["a" /* SaleRecord */](this.firstFormGroup.value.outlet.id, this.secondFormGroup.value.totalincome, this.secondFormGroup.value.bankincash, this.secondFormGroup.value.foodpandaincome, this.firstFormGroup.value.date);
        this.saleRecordService.create(saleRecord).subscribe(function (result) {
            _this.matSnackBar.open('Item was saved successfully!', 'OK', { duration: 4000 });
            _this.router.navigate(["/admin/outlet/" + result.outletid]);
        });
    };
    SalesRecordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'quickco-sales-record',
            template: __webpack_require__("../../../../../src/app/sales/sales-record/sales-record.component.html"),
            styles: [__webpack_require__("../../../../../src/app/sales/sales-record/sales-record.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["p" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__service_outlet_service__["a" /* OutletService */],
            __WEBPACK_IMPORTED_MODULE_3__service_supplier_service__["a" /* SupplierService */],
            __WEBPACK_IMPORTED_MODULE_5__service_sale_record_service__["a" /* SaleRecordService */]])
    ], SalesRecordComponent);
    return SalesRecordComponent;
}());



/***/ }),

/***/ "../../../../../src/app/sales/sales.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesModule", function() { return SalesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sales_record_sales_record_component__ = __webpack_require__("../../../../../src/app/sales/sales-record/sales-record.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__sales_record_sales_record_component__["a" /* SalesRecordComponent */]
    },
];
var SalesModule = /** @class */ (function () {
    function SalesModule() {
    }
    SalesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["i" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["h" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["q" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["i" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["f" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["n" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["t" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["k" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["j" /* MatLineModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["o" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["c" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["r" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["d" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["l" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["k" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */].forChild(routes),
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__sales_record_sales_record_component__["a" /* SalesRecordComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */]]
        })
    ], SalesModule);
    return SalesModule;
}());



/***/ }),

/***/ "../../../../../src/app/service/actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogCloseAction; });
var DialogCloseAction;
(function (DialogCloseAction) {
    DialogCloseAction[DialogCloseAction["NoAction"] = 0] = "NoAction";
    DialogCloseAction[DialogCloseAction["Refresh"] = 1] = "Refresh";
})(DialogCloseAction || (DialogCloseAction = {}));


/***/ }),

/***/ "../../../../../src/app/service/const.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return API_URL; });
// tslint:disable-next-line:eofline
// export const API_URL = 'http://localhost:3000/api';
var API_URL = '/api';


/***/ }),

/***/ "../../../../../src/app/service/outlet.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OutletService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__const__ = __webpack_require__("../../../../../src/app/service/const.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OutletService = /** @class */ (function () {
    function OutletService(http) {
        this.http = http;
    }
    OutletService.prototype.getAll = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__const__["a" /* API_URL */] + "/outlets");
    };
    OutletService.prototype.find = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__const__["a" /* API_URL */] + "/outlets");
    };
    OutletService.prototype.create = function (outlet) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_1__const__["a" /* API_URL */] + "/outlets", outlet);
    };
    OutletService.prototype.updateOrCreate = function (outlet) {
        if (outlet.id !== undefined) {
            return this.update(outlet);
        }
        else {
            return this.create(outlet);
        }
    };
    OutletService.prototype.update = function (outlet) {
        return this.http.patch(__WEBPACK_IMPORTED_MODULE_1__const__["a" /* API_URL */] + "/outlets/" + outlet.id, outlet);
    };
    OutletService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], OutletService);
    return OutletService;
}());



/***/ }),

/***/ "../../../../../src/app/service/product.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__const__ = __webpack_require__("../../../../../src/app/service/const.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductService = /** @class */ (function () {
    function ProductService(http) {
        this.http = http;
    }
    ProductService.prototype.getProductsBySupplier = function (supplierId) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__const__["a" /* API_URL */] + "/suppliers/" + supplierId + "/products");
    };
    ProductService.prototype.create = function (product) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__const__["a" /* API_URL */] + "/products", product);
    };
    ProductService.prototype.updateOrCreate = function (product) {
        if (product.id !== undefined) {
            return this.update(product);
        }
        else {
            return this.create(product);
        }
    };
    ProductService.prototype.update = function (product) {
        return this.http.patch(__WEBPACK_IMPORTED_MODULE_2__const__["a" /* API_URL */] + "/products/" + product.id, product);
    };
    ProductService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "../../../../../src/app/service/sale-record.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SaleRecordService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__const__ = __webpack_require__("../../../../../src/app/service/const.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SaleRecordService = /** @class */ (function () {
    function SaleRecordService(http) {
        this.http = http;
    }
    SaleRecordService.prototype.getSaleRecordsByOutlet = function (outletId) {
        var filter = { order: 'date DESC' };
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__const__["a" /* API_URL */] + "/outlets/" + outletId + "/salerecords?filter=" + JSON.stringify(filter));
    };
    SaleRecordService.prototype.create = function (saleRecord) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__const__["a" /* API_URL */] + "/salerecords", saleRecord);
    };
    SaleRecordService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], SaleRecordService);
    return SaleRecordService;
}());



/***/ }),

/***/ "../../../../../src/app/service/service.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__outlet_service__ = __webpack_require__("../../../../../src/app/service/outlet.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sale_record_service__ = __webpack_require__("../../../../../src/app/service/sale-record.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__supplier_service__ = __webpack_require__("../../../../../src/app/service/supplier.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__product_service__ = __webpack_require__("../../../../../src/app/service/product.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ServiceModule = /** @class */ (function () {
    function ServiceModule() {
    }
    ServiceModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
            ],
            declarations: [],
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__outlet_service__["a" /* OutletService */],
                __WEBPACK_IMPORTED_MODULE_3__sale_record_service__["a" /* SaleRecordService */],
                __WEBPACK_IMPORTED_MODULE_4__supplier_service__["a" /* SupplierService */],
                __WEBPACK_IMPORTED_MODULE_5__product_service__["a" /* ProductService */]
            ]
        })
    ], ServiceModule);
    return ServiceModule;
}());



/***/ }),

/***/ "../../../../../src/app/service/supplier.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SupplierService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__const__ = __webpack_require__("../../../../../src/app/service/const.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SupplierService = /** @class */ (function () {
    function SupplierService(http) {
        this.http = http;
    }
    SupplierService.prototype.getAll = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__const__["a" /* API_URL */] + "/suppliers");
    };
    SupplierService.prototype.findById = function (supplierId) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__const__["a" /* API_URL */] + "/suppliers/" + supplierId);
    };
    SupplierService.prototype.create = function (supplier) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__const__["a" /* API_URL */] + "/suppliers", supplier);
    };
    SupplierService.prototype.getProductsBySupplier = function (supplierId) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__const__["a" /* API_URL */] + "/suppliers/" + supplierId + "/products");
    };
    SupplierService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], SupplierService);
    return SupplierService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map