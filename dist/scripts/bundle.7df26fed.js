!function e(n,t,a){function l(o,d){if(!t[o]){if(!n[o]){var s="function"==typeof require&&require;if(!d&&s)return s(o,!0);if(i)return i(o,!0);var r=new Error("Cannot find module '"+o+"'");throw r.code="MODULE_NOT_FOUND",r}var c=t[o]={exports:{}};n[o][0].call(c.exports,function(e){var t=n[o][1][e];return l(t?t:e)},c,c.exports,e,n,t,a)}return t[o].exports}for(var i="function"==typeof require&&require,o=0;o<a.length;o++)l(a[o]);return l}({1:[function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}var l=e("./common/routeHandler"),i=a(l),o=e("./common/constants"),d=a(o);!function(){var e={};e[d["default"].TO_LOAN]=i["default"].toLoan,e[d["default"].TO_AMMORTIZATION]=i["default"].toAmmortization,e["*"]=i["default"].toLoan,routie(e)}()},{"./common/constants":2,"./common/routeHandler":5}],2:[function(e,n,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={TO_LOAN:"/loans",TO_AMMORTIZATION:"/ammortize",STOARGE_ALL_LOANS:"STORAGE_ALL_LOANS"}},{}],3:[function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var l=e("./utils.js"),i=a(l);t["default"]={renderMyTemplate:function(e,n,t){var a={imports:{convertToDecimal:i["default"].convertToDecimal,periodicDate:i["default"].periodicDate}},l=_.template(n,a);t?$("#"+e).html(l(t)):$("#"+e).html(l())},bindEvent:function(e,n,t,a){$("#"+e).on(n,t,a)},bind:function(e,n,t,a,l){$(e).on(n,t,a,l)},bindClassEvent:function(e,n,t,a){$("."+e).on(n,t,a)},renderView:function(e,n){e.render(n)}}},{"./utils.js":6}],4:[function(e,n,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={EMPTY:"00000000-0000-0000-0000-000000000000",_padLeft:function(e,n,t){return e.length>=n?e:this._padLeft(t+e,n,t||" ")},_s4:function(e){var n=e.toString(16);return this._padLeft(n,4,"0")},_cryptoGuid:function(){var e=new window.Uint16Array(8);return window.crypto.getRandomValues(e),[this._s4(e[0])+this._s4(e[1]),this._s4(e[2]),this._s4(e[3]),this._s4(e[4]),this._s4(e[5])+this._s4(e[6])+this._s4(e[7])].join("-")},_guid:function(){var e=(new Date).getTime();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(n){var t=(e+16*Math.random())%16|0;return e=Math.floor(e/16),("x"===n?t:7&t|8).toString(16)})},newGuid:function(){var e="undefined"!=typeof window.crypto,n="undefined"!=typeof window.crypto.getRandomValues;return e&&n?this._cryptoGuid():this._guid()}}},{}],5:[function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var l=e("../controller/loanCtrl.js"),i=a(l),o=e("../controller/ammortizeCtrl"),d=a(o);t["default"]={toLoan:function(){i["default"].init()},toAmmortization:function(){d["default"].init()}}},{"../controller/ammortizeCtrl":8,"../controller/loanCtrl.js":9}],6:[function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var l=e("./webStorage");a(l);t["default"]={monthFlag:0,convertToDecimal:function(e){return parseFloat(e).toFixed(2)},periodicDate:function(e){if(0==this.monthFlag)var n=0;else n=1;var t=e.split("-"),a=Number(t[1])+n;13==a&&(a=1,t[0]=Number(t[0])+n);var l=t[0]+"-"+a+"-"+t[2];return this.monthFlag++,l}}},{"./webStorage":7}],7:[function(e,n,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={storage:window.localStorage,get:function(e){return this.storage.getItem(e)},getCollection:function(e){return JSON.parse(this.storage.getItem(e))},set:function(e,n){this.storage.setItem(e,n)},setCollection:function(e,n){this.storage.setItem(e,JSON.stringify(n))},remove:function(e){this.storage.removeItem(e)},clear:function(){this.storage.clear()}}},{}],8:[function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var l=e("../view/ammortizeView.js"),i=a(l);t["default"]={init:function(){this.render()},render:function(){i["default"].render()}}},{"../view/ammortizeView.js":13}],9:[function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var l=e("../view/loanView.js"),i=a(l),o=e("../common/webStorage"),d=a(o),s=e("../common/constants"),r=a(s);t["default"]={init:function(){this.render()},render:function(){i["default"].render(d["default"].getCollection(r["default"].STOARGE_ALL_LOANS))},pmt:function c(e,n,t){var a,c;return a=Math.pow(1+e,n),c=e/(a-1)*-(t*a)},computeSchedule:function(e,n,t,a,l){for(var i=[],o=e,d=t*a,s=0;s<=d;s++){var r=o*(n/100/t),c=l-r,u=[s,c>0?c:0,r>0?r:0,o>0?o:0];i.push(u),o-=c}return i}}},{"../common/constants":2,"../common/webStorage":7,"../view/loanView.js":14}],10:[function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var l=e("../common/webStorage.js"),i=a(l),o=e("../common/utils.js"),d=a(o),s=e("../view/modalView.js"),r=a(s),c=e("../common/constants"),u=a(c),v=e("../view/ammortizeView"),m=a(v),f=e("../model/loansModel"),p=a(f),b=e("../view/loanView"),h=a(b),g=function(){$(this).parents(".loan-row").toggleClass("active")},y=function(){r["default"].render()},w=function(){var e=$(this).data("id"),n=_.find(i["default"].getCollection(u["default"].STOARGE_ALL_LOANS),{id:e});M(n.rateOfInterest/100/n.term,n.term*n.years,-n.loanAmount,n)},M=function L(e,n,t,a){var l=void 0,L=void 0;l=Math.pow(1+e,n),L=e/(l-1)*-(t*l),A(a.loanAmount,a.rateOfInterest,a.term,a.years,L,a)},A=function(e,n,t,a,l,i){for(var o=[],s=e,r=t*a,c=i.rDate,u=0;u<=r-1;u++){var v=s*(n/100/t);c=d["default"].periodicDate(c),console.log(c);var f=l-v,p=s-f;p=Math.abs(p);var b=[u,f>0?f:0,v>0?v:0,v>0?s:0,p,c];o.push(b),s-=f}var h={personalInfo:i,ammortizeTable:o};m["default"].render(h)},E=function(){h["default"].renderLoanTable(p["default"].searchFromAllLoans($(this).val()))};t["default"]={toggleViewMore:g,openLoanModal:y,getAmmortizeTable:w,searchLoan:E}},{"../common/constants":2,"../common/utils.js":6,"../common/webStorage.js":7,"../model/loansModel":12,"../view/ammortizeView":13,"../view/loanView":14,"../view/modalView.js":15}],11:[function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var l=e("../view/modalView"),i=a(l),o=e("../model/loansModel"),d=a(o),s=e("../view/loanView"),r=a(s),c=e("../common/guid"),u=a(c);t["default"]={closeModal:function(e){$("body").find(".bgOverlay")&&("bgOverlay"!=$(e.target).attr("class")&&"close-modal"!=$(e.target).attr("class")||i["default"].renderNoModal())},saveFormDetails:function(){var e={name:$("#name").val(),contact:$("#contact").val(),address:$("#address").val(),loanAmount:$("#amount").val(),term:$("#term").val(),dDate:$("#d-date").val(),rDate:$("#r-date").val(),rateOfInterest:$("#roi").val(),years:$("#years").val(),id:u["default"].newGuid()};d["default"].setAllLoans(e),console.log(d["default"].getAllLoans()),i["default"].renderNoModal(),r["default"].renderLoanTable(d["default"].getAllLoans()),$(".loan-row:nth-child(1)").addClass("highlight-row")},enableSubmitButton:function(){$("#name").val().length>0&&$("#contact").val().length>0&&$("#address").val().length>0&&$("#amount").val().length>0&&$("#term").val().length>0&&$("#d-date").val().length>0&&$("#r-date").val().length>0&&$("#years").val().length>0&&$("#roi").val().length>0?($("#save-form").addClass("active"),$("#save-form").removeAttr("disabled")):($("#save-form").removeClass("active"),$("#save-form").attr("disabled","disabled"))}}},{"../common/guid":4,"../model/loansModel":12,"../view/loanView":14,"../view/modalView":15}],12:[function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var l=e("../common/webStorage"),i=a(l),o=e("../common/constants"),d=a(o);t["default"]={setAllLoans:function(e){var n=i["default"].getCollection(d["default"].STOARGE_ALL_LOANS);n?(n.push(e),i["default"].setCollection(d["default"].STOARGE_ALL_LOANS,n)):i["default"].setCollection(d["default"].STOARGE_ALL_LOANS,null)},getAllLoans:function(){return _.reverse(i["default"].getCollection(d["default"].STOARGE_ALL_LOANS))},searchFromAllLoans:function(e){e=e.toLowerCase();var n=[],t=this.getAllLoans();return _.each(t,function(t){var a=[t.name],l=_.some(a,function(n){if(null!=n)return n.toLowerCase().indexOf(e)!=-1});l&&n.push(t)}),n}}},{"../common/constants":2,"../common/webStorage":7}],13:[function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var l=e("../common/domEventHandler.js"),i=a(l),o=e("../../templates/ammortization.html"),d=a(o);t["default"]={render:function(e){console.log(e),this.viewModel=e,this.registerDOMEvents()},registerDOMEvents:function(){i["default"].renderMyTemplate("globalCntr",d["default"],this.viewModel)}}},{"../../templates/ammortization.html":16,"../common/domEventHandler.js":3}],14:[function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var l=e("../common/domEventHandler.js"),i=a(l),o=e("../../templates/loans.html"),d=a(o),s=e("../../templates/components/table.html"),r=a(s),c=e("../dom-events/loanDOMEvents.js"),u=a(c);t["default"]={render:function(e){this.registerDOMEvents(),this.renderLoanTable(_.reverse(e))},registerDOMEvents:function(){i["default"].renderMyTemplate("globalCntr",d["default"]),i["default"].bindEvent("upload-button","click",u["default"].openLoanModal),this.commonDomEvents()},renderLoanTable:function(e){this.viewModel={},null===e?this.viewModel.loans=[]:this.viewModel.loans=e,i["default"].renderMyTemplate("loanTable",r["default"],this.viewModel),this.commonDomEvents()},commonDomEvents:function(){i["default"].bindClassEvent("show-more","click",u["default"].toggleViewMore),i["default"].bindClassEvent("go-to-ammortize","click",u["default"].getAmmortizeTable),i["default"].bindEvent("search","keyup",u["default"].searchLoan)}}},{"../../templates/components/table.html":17,"../../templates/loans.html":18,"../common/domEventHandler.js":3,"../dom-events/loanDOMEvents.js":10}],15:[function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var l=e("../common/domEventHandler.js"),i=a(l),o=e("../../templates/modal/addLoan.html"),d=a(o),s=e("../dom-events/ModalDomEvents.js"),r=a(s);t["default"]={render:function(){this.registerDOMEvents()},registerDOMEvents:function(){i["default"].renderMyTemplate("modalCntr",d["default"]),i["default"].bind("body","click",r["default"].closeModal),i["default"].bindEvent("save-form","click",r["default"].saveFormDetails),i["default"].bindEvent("name","keyup",r["default"].enableSubmitButton),i["default"].bindEvent("contact","keyup",r["default"].enableSubmitButton),i["default"].bindEvent("address","keyup",r["default"].enableSubmitButton),i["default"].bindEvent("amount","keyup",r["default"].enableSubmitButton),i["default"].bindEvent("term","keyup",r["default"].enableSubmitButton),i["default"].bindEvent("d-date","keyup",r["default"].enableSubmitButton),i["default"].bindEvent("r-date","keyup",r["default"].enableSubmitButton),i["default"].bindEvent("years","keyup",r["default"].enableSubmitButton),i["default"].bindEvent("roi","keyup",r["default"].enableSubmitButton)},renderNoModal:function(){i["default"].renderMyTemplate("modalCntr","")}}},{"../../templates/modal/addLoan.html":19,"../common/domEventHandler.js":3,"../dom-events/ModalDomEvents.js":11}],16:[function(e,n,t){n.exports='<!-- Banner -->\n<div class="banner-section ammortize-banner">\n    <div class="row">\n        <div class="head-cntr">\n            <div class="page-heading">\n                <div class="thumbnail">\n                    All Loans /\n                </div>\n                <img src="../images/defaultImg.d64795c9.png" />\n                <span><%-personalInfo.name %></span>\n            </div>\n        </div>\n\n        <div class="right-section">\n            <div class="right-section-detail">\n                <div>Contact :<%-personalInfo.contact %> </div>\n                <div>Address :<%-personalInfo.address %></div>\n            </div>\n        </div>\n    </div>\n</div>\n</div>\n<!-- Banner End -->\n\n<div id="reportTable">\n    <div class="table-container transaction-table">\n        <h5>LOAN DETAIL</h5>\n        <div class="table">\n            <div class="table-header">\n                <div class="table-row">\n                    <div class="table-cell">Date</div>\n                    <div class="table-cell">Previous Balance</div>\n                    <div class="table-cell">Principal Payment</div>\n                    <div class="table-cell">Interest Payment</div>\n                    <div class="table-cell">Total Payment</div>\n                    <div class="table-cell">Ending Balance</div>\n\n                </div>\n            </div>\n            <div class="table-body" id="salesReportTable">\n                <% for(var i =0; i < ammortizeTable.length; i++){ %>\n\n                    <div class="table-row loan-row active">\n                        <div class="table-cell">\n                            <%-ammortizeTable[i][5] %>\n                        </div>\n                        <div class="table-cell"> <%- convertToDecimal(ammortizeTable[i][3])%></div>\n                        <div class="table-cell"> <%- convertToDecimal(ammortizeTable[i][1])%></div>\n                        <div class="table-cell"> <%- convertToDecimal(ammortizeTable[i][2])%></div>\n                        <div class="table-cell"> <%- convertToDecimal(ammortizeTable[i][2] + ammortizeTable[i][1])%></div>\n                        <div class="table-cell"> <%- convertToDecimal(ammortizeTable[i][4])%></div>\n\n                    </div>\n\n                <% } %>\n\n            </div>\n\n\n            <div class="empty-state" id="empty-state" style="display: none">\n                <h4>No Transactions</h4>\n            </div>\n        </div>\n    </div>\n</div>\n'},{}],17:[function(e,n,t){n.exports='<div class="table">\n    <div class="table-header">\n        <div class="table-row">\n            <div class="table-cell">USER</div>\n            <div class="table-cell">AMOUNT</div>\n            <div class="table-cell">RATE</div>\n            <div class="table-cell">DISBURSEMENT DATE</div>\n            <div class="table-cell">REPAYMENT DATE</div>\n            <div class="table-cell">TABLE</div>\n            <div class="table-cell"></div>\n        </div>\n    </div>\n    <div class="table-body" id="salesReportTable">\n        <% if(loans.length > 0){ %>\n            <% for(var i =0; i < loans.length; i++){ %>\n                <div class="table-row loan-row">\n                    <div class="table-cell">\n                        <img class="user-img" src="images/defaultImg.d64795c9.png" />\n                        <%-loans[i].name%>\n                            <div class="more-settlement-amount-info">\n                                <dl>\n                                    <dt>Address</dt>\n                                    <dd>\n                                        <%- loans[i].address %>\n                                    </dd>\n                                    <dt>Contact</dt>\n                                    <dd>\n                                        <%-loans[i].contact %>\n                                    </dd>\n                                </dl>\n                            </div>\n                    </div>\n                    <div class="table-cell">\n                        <%- loans[i].loanAmount %>\n                    </div>\n                    <div class="table-cell">\n                        <%-loans[i].rateOfInterest%>\n                    </div>\n                    <div class="table-cell">\n                        <%-loans[i].dDate%>\n                    </div>\n                    <div class="table-cell">\n                        <%-loans[i].rDate%>\n                    </div>\n\n                    <div class="table-cell">\n                        <a class="go-to-ammortize" data-id=\'<%-loans[i].id%>\'> View</a>\n                    </div>\n                    <div class="table-cell">\n                        <a href="javascript:void(0)" class="show-more" ></a>\n                    </div>\n\n                </div>\n          <% } %>\n        <% } else { %>\n            <div class="empty-state" id="empty-state">\n                <h4>No Current Loans</h4>\n            </div>\n        <% } %>\n    </div>\n</div>\n'},{}],18:[function(e,n,t){n.exports='<!-- Banner -->\n  <div class="banner-section">\n      <div class="row">\n        <div class="head-cntr">\n          <div class="page-heading">\n                <h1>The Intersect Fund</h1>\n            </div>\n            <p>\n                Making a robust and innovative platform for your loan management system.\n            </p>\n        </div>\n\n        <div class="upload-button" id="upload-button">\n          + add new loan details\n        </div>\n      </div>\n  </div>\n<!-- Banner End -->\n\n\n  <div class="table-container transaction-table">\n      <h5>ALL LOANS</h5>\n      <input type="text" placeholder="Search by name" id="search" class="search"/>\n      <div id="loanTable">\n\n      </div>\n  </div>\n'},{}],19:[function(e,n,t){n.exports='<div id="intNet">\n    <div class="bgOverlay"></div>\n    <div class="overlay noInt">\n      <img src="images/ic-close.dc4c1195.svg" class="close-modal" id="close-modal"/>\n      <p class="modal-heading loan-detail-heading">Enter User Details</p>\n\n      <!-- <p class="modal-sub-heading">quia dolor sit amet, consectetur</p> -->\n      <div class="detail-cntr">\n          <div class="form-group padding-top-30">\n              <label class="">Full Name</label>\n              <div class="input-field-cntr">\n                  <input type="text" class="input-field" id="name" placeholder="Enter full name">\n              </div>\n\n          </div>\n\n          <div class="form-group field-padding">\n              <label class="">Phone number</label>\n              <div class="input-field-cntr">\n                  <input type="number" class="input-field" id="contact" placeholder="Enter valid phone number">\n              </div>\n          </div>\n\n          <div class="form-group field-padding">\n              <label class="">Address</label>\n              <div class="input-field-cntr">\n                  <input type="text" class="input-field" id="address" placeholder="Enter Address">\n              </div>\n          </div>\n\n\n           <p class="modal-heading loan-detail-heading">Enter Loan Details</p>\n\n           <div class="form-group field-padding">\n               <label class="">Loan Amount</label>\n               <div class="input-field-cntr">\n                   <input type="text" class="input-field" id="amount" placeholder="Enter Loan Amount">\n               </div>\n           </div>\n\n           <div class="form-group field-padding">\n               <label class="">Rate of Interest</label>\n               <div class="input-field-cntr">\n                   <input type="text" class="input-field" id="roi" placeholder="(in %)">\n               </div>\n           </div>\n\n           <div class="form-group field-padding">\n               <label class="">Disbursement Date</label>\n               <div class="input-field-cntr">\n                   <input type="date" class="input-field" id="d-date">\n               </div>\n           </div>\n\n           <div class="form-group field-padding">\n               <label class="">Repayment Start Date</label>\n               <div class="input-field-cntr">\n                   <input type="date" class="input-field" id="r-date">\n               </div>\n           </div>\n\n           <div class="form-group field-padding">\n               <label class="">Term</label>\n               <div class="input-field-cntr">\n                   <input type="text" class="input-field" id="term" placeholder="(in months)">\n               </div>\n           </div>\n\n           <div class="form-group field-padding">\n               <label class="">Years</label>\n               <div class="input-field-cntr">\n                   <input type="text" class="input-field" id="years" placeholder="Example: 2">\n               </div>\n           </div>\n\n            <!-- <div class="form-group field-padding">\n               <label class="">Ammortization</label>\n               <div class="input-field-cntr">\n                    <div class="option-cntr">\n                        <input type="radio" class="" id="flatNumber" placeholder="Enter Loan Amount">\n                        <label>option1</label>\n                    </div>\n\n                    <div class="option-cntr right-option">\n                        <input type="radio" class="" id="flatNumber" placeholder="Enter Loan Amount">\n                        <label>option1</label>\n                    </div>\n               </div>\n           </div> -->\n\n            <p class="note">\n                Note: All the fields are mandatory.\n            </p>\n            <div class="btn-cntr">\n                <button disabled class="upload-button save-form" id="save-form">\n                     Save\n                </button>\n            </div>\n        </div>\n    </div>\n</div>\n'},{}]},{},[1]);