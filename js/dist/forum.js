module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./forum.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./forum.js":
/*!******************!*\
  !*** ./forum.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.js");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

/***/ }),

/***/ "./src/common/models/Odeme.js":
/*!************************************!*\
  !*** ./src/common/models/Odeme.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Odeme; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/Model */ "flarum/Model");
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_Model__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_utils_mixin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/utils/mixin */ "flarum/utils/mixin");
/* harmony import */ var flarum_utils_mixin__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_mixin__WEBPACK_IMPORTED_MODULE_2__);




var Odeme =
/*#__PURE__*/
function (_mixin) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Odeme, _mixin);

  function Odeme() {
    return _mixin.apply(this, arguments) || this;
  }

  return Odeme;
}(flarum_utils_mixin__WEBPACK_IMPORTED_MODULE_2___default()(flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a, {
  kullanici: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('kullanici'),
  para: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('para'),
  advesoyad: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('advesoyad'),
  iban: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('iban'),
  zaman: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('zaman'),
  durum: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('durum')
}));



/***/ }),

/***/ "./src/forum/components/GetMoneyModal.js":
/*!***********************************************!*\
  !*** ./src/forum/components/GetMoneyModal.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GetMoneyModal; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/Modal */ "flarum/components/Modal");
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Modal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_components_LogInModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/components/LogInModal */ "flarum/components/LogInModal");
/* harmony import */ var flarum_components_LogInModal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_components_LogInModal__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _GoHome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./GoHome */ "./src/forum/components/GoHome.js");







var GetMoneyModal =
/*#__PURE__*/
function (_Modal) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(GetMoneyModal, _Modal);

  function GetMoneyModal() {
    return _Modal.apply(this, arguments) || this;
  }

  var _proto = GetMoneyModal.prototype;

  _proto.init = function init() {
    _Modal.prototype.init.call(this);

    this.username = m.prop(flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.session.user.username());
    this.money = m.prop(flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.session.user.attribute('money'));
    this.odeme = this.props.odeme || flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.store.createRecord('odemeler');
    this.user = this.props.user;
    this.kullanici = m.prop(this.odeme.kullanici() || '');
    this.para = m.prop(this.odeme.para() || '');
    this.advesoyad = m.prop(this.odeme.advesoyad() || '');
    this.iban = m.prop(this.odeme.iban() || '');

    if (!flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.session.user) {
      flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.modal.show(new flarum_components_LogInModal__WEBPACK_IMPORTED_MODULE_3___default.a());
      return;
    }
  };

  _proto.className = function className() {
    return 'UserMoneyModal Modal--small';
  };

  _proto.title = function title() {
    return 'Para Çek';
  };

  _proto.content = function content() {
    return m("div", {
      className: "Modal-body"
    }, m("div", {
      className: "Form"
    }, m("div", {
      className: "Form-group"
    }, m("p", {
      style: "text-align:center"
    }, "L\xFCtfen Bilgilerinizi Eksiksiz ve Do\u011Fru Girin !"), m("p", {
      style: "text-align:center"
    }, "Hesab\u0131n\u0131zda 20 Lira olmadan para \xE7ekme i\u015Flemi ger\xE7ekle\u015Fmez."), m("hr", {
      style: "border-top: 2px solid #005dff;"
    }), m("p", null, "Kullan\u0131c\u0131 Ad\u0131 : ", this.username()), m("p", null, "Hesab\u0131n\u0131zdaki Para : ", this.money(), " TL"), m("p", null, "Ad ve Soyad\u0131n\u0131z"), m("input", {
      required: true,
      className: "FormControl",
      name: "advesoyad",
      type: "text",
      value: ""
    }), m("p", null, "IBAN numaran\u0131z"), m("input", {
      required: true,
      className: "FormControl",
      name: "iban",
      pattern: "TR\\d{2}[ ]\\d{4}[ ]\\d{4}[ ]\\d{4}[ ]\\d{4}[ ]\\d{2}|TR\\d{20}",
      placeholder: "TR__ ____ ____ ____ ____ __"
    })), m("div", {
      className: "Form-group",
      style: "text-align:center"
    }, m(flarum_components_Button__WEBPACK_IMPORTED_MODULE_4___default.a, {
      className: "Button Button--primary",
      loading: this.loading,
      type: "submit"
    }, "Para \xC7ek"))));
  };

  _proto.onsubmit = function onsubmit(e) {
    var _this = this;

    if (this.money() < 20) {
      flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.modal.show(new _GoHome__WEBPACK_IMPORTED_MODULE_5__["default"]());
    }

    var advesoyad = document.querySelector('input[name=advesoyad]').value;
    var iban = document.querySelector('input[name=iban]').value;
    var durum = 'İşlem Sırasında';
    e.preventDefault();
    this.loading = true;
    this.odeme.save({
      kullanici: this.username(),
      para: this.money(),
      advesoyad: advesoyad,
      iban: iban,
      durum: durum
    }).then(function () {
      return _this.hide();
    }, function (response) {
      _this.handleErrors(response);
    });
  };

  return GetMoneyModal;
}(flarum_components_Modal__WEBPACK_IMPORTED_MODULE_2___default.a);



/***/ }),

/***/ "./src/forum/components/GoHome.js":
/*!****************************************!*\
  !*** ./src/forum/components/GoHome.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GoHome; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/Modal */ "flarum/components/Modal");
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_2__);




var GoHome =
/*#__PURE__*/
function (_Modal) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(GoHome, _Modal);

  function GoHome() {
    return _Modal.apply(this, arguments) || this;
  }

  var _proto = GoHome.prototype;

  _proto.init = function init() {
    _Modal.prototype.init.call(this);
  };

  _proto.className = function className() {
    return 'GoHome Modal--small';
  };

  _proto.title = function title() {
    return 'Yetersiz Bakiye';
  };

  _proto.content = function content() {
    return m("div", {
      className: "Modal-body"
    }, m("div", {
      className: "Form"
    }, m("div", {
      className: "Form-group"
    }, m("p", null, "Bakiyenizde 20 Lira ve \xFCzeri para bulundu\u011Funda para \xE7ekme i\u015Flemi ger\xE7ekle\u015Ftirebilirsiniz.")), m("div", {
      className: "Form-group",
      style: "text-align:center"
    }, m(flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
      className: "Button Button--primary",
      loading: this.loading,
      type: "submit"
    }, "Tamam"))));
  };

  _proto.onsubmit = function onsubmit(e) {
    e.preventDefault();
    this.loading = true;
    m.route('/');
  };

  return GoHome;
}(flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/components/TumOdemeler.js":
/*!*********************************************!*\
  !*** ./src/forum/components/TumOdemeler.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TumOdemeler; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/Page */ "flarum/components/Page");
/* harmony import */ var flarum_components_Page__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Page__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/components/IndexPage */ "flarum/components/IndexPage");
/* harmony import */ var flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_3__);





var TumOdemeler =
/*#__PURE__*/
function (_Page) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(TumOdemeler, _Page);

  function TumOdemeler() {
    return _Page.apply(this, arguments) || this;
  }

  var _proto = TumOdemeler.prototype;

  _proto.view = function view() {
    return m("div", {
      className: "OdemelerPage"
    }, m("div", {
      className: "TagsPage"
    }, flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_3___default.a.prototype.hero(), "                ", m("div", {
      className: "OdemelerPage-list"
    }), m("div", {
      className: "container"
    }, m("div", {
      className: "OdemeItems",
      style: "text-align: center;margin-top:15px;"
    }), m("table", {
      style: "width:100%;margin-bottom:15px"
    }, m("tr", null, m("th", {
      style: "width:25%;text-align:center"
    }, m("u", null, "Kullan\u0131c\u0131 Ad\u0131")), m("th", {
      style: "width:25%;text-align:center"
    }, m("u", null, "Yat\u0131r\u0131lacak Para")), m("th", {
      style: "width:25%;text-align:center"
    }, m("u", null, "Tarih")), m("th", {
      style: "width:25%;text-align:center"
    }, m("u", null, "Durum")))), flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.store.all('odemeler').reverse().map(OdemeItem))));
  };

  return TumOdemeler;
}(flarum_components_Page__WEBPACK_IMPORTED_MODULE_2___default.a);



function OdemeItem(odeme) {
  var $date = odeme.zaman();
  return m("li", {
    style: "width:100%;list-style:none",
    "data-id": odeme.id()
  }, m("table", {
    style: "width:100%"
  }, m("tr", null, m("td", {
    style: "width:25%;text-align:center"
  }, odeme.kullanici()), m("td", {
    style: "width:25%;text-align:center"
  }, odeme.para(), " TL"), m("td", {
    style: "width:25%;text-align:center"
  }, $date), m("td", {
    style: "width:25%;text-align:center"
  }, odeme.durum()))), m("hr", {
    style: "margin-top: 10px;margin-bottom: 10px;"
  }));
}

/***/ }),

/***/ "./src/forum/index.js":
/*!****************************!*\
  !*** ./src/forum/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_GetMoneyModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/GetMoneyModal */ "./src/forum/components/GetMoneyModal.js");
/* harmony import */ var _components_TumOdemeler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/TumOdemeler */ "./src/forum/components/TumOdemeler.js");
/* harmony import */ var flarum_components_SessionDropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/components/SessionDropdown */ "flarum/components/SessionDropdown");
/* harmony import */ var flarum_components_SessionDropdown__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_components_SessionDropdown__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _common_models_Odeme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/models/Odeme */ "./src/common/models/Odeme.js");
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/Model */ "flarum/Model");
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_Model__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var flarum_components_DiscussionHero__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! flarum/components/DiscussionHero */ "flarum/components/DiscussionHero");
/* harmony import */ var flarum_components_DiscussionHero__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(flarum_components_DiscussionHero__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var flarum_models_Discussion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! flarum/models/Discussion */ "flarum/models/Discussion");
/* harmony import */ var flarum_models_Discussion__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(flarum_models_Discussion__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! flarum/components/IndexPage */ "flarum/components/IndexPage");
/* harmony import */ var flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! flarum/components/LinkButton */ "flarum/components/LinkButton");
/* harmony import */ var flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_11__);












flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.initializers.add('flarumalshain', function () {
  flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.routes.flagrowDirectLinksGetMoney = {
    path: '/getmoney',
    component: _components_GetMoneyModal__WEBPACK_IMPORTED_MODULE_2__["default"].component()
  };
});
flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.initializers.add('mynew', function () {
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_SessionDropdown__WEBPACK_IMPORTED_MODULE_4___default.a.prototype, 'items', function (items) {
    items.add('mynew', flarum_components_Button__WEBPACK_IMPORTED_MODULE_5___default.a.component({
      children: 'Para Çek',
      icon: 'fas fa-check-circle',
      onclick: function onclick() {
        flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.modal.show(new _components_GetMoneyModal__WEBPACK_IMPORTED_MODULE_2__["default"]());
      }
    }), -1);
  });
});
flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.initializers.add('odemeler', function () {
  flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.store.models.odemeler = _common_models_Odeme__WEBPACK_IMPORTED_MODULE_6__["default"];
});
flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.initializers.add('flarumalshain-gorunum', function () {
  flarum_models_Discussion__WEBPACK_IMPORTED_MODULE_9___default.a.prototype.views = flarum_Model__WEBPACK_IMPORTED_MODULE_7___default.a.attribute('views');
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_DiscussionHero__WEBPACK_IMPORTED_MODULE_8___default.a.prototype, 'items', function (items) {
    var discussion = this.props.discussion;
    items.add('flarumalshain-discussion-views', 'Görüntülenme Sayısı : ' + [discussion.views()]);
  });
});
flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.initializers.add('tumodemeler', function () {
  flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.store.models.odemeler = _common_models_Odeme__WEBPACK_IMPORTED_MODULE_6__["default"];
  flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.routes.odemeler = {
    path: '/tumodemeler',
    component: _components_TumOdemeler__WEBPACK_IMPORTED_MODULE_3__["default"].component()
  };
});
Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_10___default.a.prototype, 'navItems', function (items) {
  items.add('tumodemeler', flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_11___default.a.component({
    href: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.route('odemeler'),
    children: 'Ödemeler',
    icon: 'fas fa-coins'
  }), 85);
});

/***/ }),

/***/ "flarum/Model":
/*!**********************************************!*\
  !*** external "flarum.core.compat['Model']" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['Model'];

/***/ }),

/***/ "flarum/app":
/*!********************************************!*\
  !*** external "flarum.core.compat['app']" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['app'];

/***/ }),

/***/ "flarum/components/Button":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['components/Button']" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Button'];

/***/ }),

/***/ "flarum/components/DiscussionHero":
/*!******************************************************************!*\
  !*** external "flarum.core.compat['components/DiscussionHero']" ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/DiscussionHero'];

/***/ }),

/***/ "flarum/components/IndexPage":
/*!*************************************************************!*\
  !*** external "flarum.core.compat['components/IndexPage']" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/IndexPage'];

/***/ }),

/***/ "flarum/components/LinkButton":
/*!**************************************************************!*\
  !*** external "flarum.core.compat['components/LinkButton']" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/LinkButton'];

/***/ }),

/***/ "flarum/components/LogInModal":
/*!**************************************************************!*\
  !*** external "flarum.core.compat['components/LogInModal']" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/LogInModal'];

/***/ }),

/***/ "flarum/components/Modal":
/*!*********************************************************!*\
  !*** external "flarum.core.compat['components/Modal']" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Modal'];

/***/ }),

/***/ "flarum/components/Page":
/*!********************************************************!*\
  !*** external "flarum.core.compat['components/Page']" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Page'];

/***/ }),

/***/ "flarum/components/SessionDropdown":
/*!*******************************************************************!*\
  !*** external "flarum.core.compat['components/SessionDropdown']" ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/SessionDropdown'];

/***/ }),

/***/ "flarum/extend":
/*!***********************************************!*\
  !*** external "flarum.core.compat['extend']" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['extend'];

/***/ }),

/***/ "flarum/models/Discussion":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['models/Discussion']" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['models/Discussion'];

/***/ }),

/***/ "flarum/utils/mixin":
/*!****************************************************!*\
  !*** external "flarum.core.compat['utils/mixin']" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['utils/mixin'];

/***/ })

/******/ });
//# sourceMappingURL=forum.js.map