"use strict";((self||this).webpackChunk=(self||this).webpackChunk||[]).push([[624,822,256],{8256:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});n(1539),n(8674),n(7727);var r=n(2122),i=n(3248);const a={name:"url-autocomplete",extends:r.Z,props:{url:{type:String},itemValue:{default:"id"},itemText:{default:"name"}},watch:{url:function(){this.fetchItems()}},mounted:function(){this.fetchItems()},methods:{fetchItems:function(){var e=this;this.url&&(this.$emit("update:loading",!0),i.Z.get(this.url).then((function(t){var n=t.data;e.cachedItems=n})).finally((function(){e.$emit("update:loading",!1)})))}}}},5370:(e,t,n)=>{n.d(t,{X:()=>c});n(2222),n(4678),n(3210),n(9753),n(4916),n(4723);var r=function(e){return"string"==typeof e?!!e.trim():!!e},i=function(e){return Array.isArray(e)&&e.length>0},a=function(e){var t;return!e||(null===(t=e.match(/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/g))||void 0===t?void 0:t.length)>0},s=function(e){var t,n;return!e||(null===(t=e.match(/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/g))||void 0===t?void 0:t.length)>0||(null===(n=e.match("[[a-zA-Z0-9]+]"))||void 0===n?void 0:n.length)>0},o=function(e,t){return!e||e&&e.length<=t},l=function(e,t){return!e||e&&e.length>=t},u=function(e){var t;return!e||(null===(t=e.match(/^[a-z0-9][a-z0-9-]{1,61}[a-z0-9](?:\.[a-z]{2,})+$/g))||void 0===t?void 0:t.length)>0},d=function(e){var t;return!e||(null===(t=e.match(/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/g))||void 0===t?void 0:t.length)>0},c={methods:{getText:function(){var e,t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,r="This field";null!=n&&null!==(e=n.$props)&&void 0!==e&&e.label&&(r="".concat(null==n||null===(t=n.$props)||void 0===t?void 0:t.label));return r},isRequired:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return r(e)||"".concat(this.getText(t)," is required")},isTel:function(e){return function(e){var t;return!e||(null===(t=e.match(/^(\+)?(\d+ )*\d+$/g))||void 0===t?void 0:t.length)>0}(e)||"Not a valid number"},isEmail:function(e){return function(e){var t;return!e||(null===(t=e.match(/^[a-zA-Z0-9][a-zA-Z0-9\.\_\+\-]*[a-zA-Z0-9\_]@[a-zA-Z0-9][a-zA-Z0-9\.\_\-]*[a-zA-Z0-9]\.[a-zA-Z]{2,63}$/g))||void 0===t?void 0:t.length)>0}(e)||"Not an email"},isValidName:function(e){return function(e){var t;return!e||(null===(t=e.match(/^[ &',-\.0-9@-Za-z\xC0-\xCF\xD1-\xD6\xD8-\xDD\xDF-\xE5\xE7-\xF6\xF8-\xFD\xFF\u0104-\u0107\u010C\u010D\u0116-\u0119\u012E\u012F\u0141-\u0144\u0152\u0160\u0161\u016A\u016B\u0172\u0173\u0178-\u017E\u2202]+$/g))||void 0===t?void 0:t.length)>0}(e)||"Not a valid name"},isRequiredArray:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return i(e)||"".concat(this.getText(t)," is required")},isUrl:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return a(e)||"".concat(this.getText(t)," is not a valid url")},isUrlOrContainsReplaceField:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return s(e)||"".concat(this.getText(t)," is not a valid url")},isMaxLength:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return o(e,t)||"".concat(this.getText(n)," should have a maximum length of ").concat(t)},isMinLength:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return l(e,t)||"".concat(this.getText(n)," should have a minimum length of ").concat(t)},isDomain:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return u(e)||"".concat(this.getText(t)," is not a valid domain")},isUrlWithScheme:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return d(e)||"".concat(this.getText(t)," is not a valid url. Ensure there is a scheme present in the given URL (i.e. https://)")}}}},4822:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var r=function(){var e=this,t=e.$createElement;return(e._self._c||t)("v-text-field",e._g(e._b({ref:"input",attrs:{"error-messages":e.internalErrorMessages,loading:e.internalLoading||e.loading},model:{value:e.internalValue,callback:function(t){e.internalValue=t},expression:"internalValue"}},"v-text-field",[e.$attrs,e.$props],!1),e.internalListeners))};r._withStripped=!0;n(9653),n(9753),n(2222),n(1539),n(8674),n(7727);var i=n(3248);const a={name:"UTextField",props:{value:{type:String},errorMessages:{type:[String,Array],default:function(){return[]}},checkUrl:{type:String,required:!0},itemId:{type:Number|String},loading:{type:Boolean,default:!1}},data:function(){return{errors:[],internalLoading:!1}},computed:{internalErrorMessages:function(){return Array.isArray(this.errorMessages)&&Array.isArray(this.errors)?this.errors.concat(this.errorMessages):"string"==typeof this.errorMessages&&Array.isArray(this.errors)?this.errors.concat([this.errorMessages]):[]},internalListeners:function(){var e={input:[this.clearError],change:[this.checkUniqueness]},t=this.$listeners;for(var n in t)e.hasOwnProperty(n)?e[n].push(t[n]):e[n]=t[n];return e},internalValue:{get:function(){return this.value},set:function(e){this.$emit("input",e)}}},methods:{checkUniqueness:function(){var e=this;if(this.internalValue){this.internalLoading=!0;var t={value:this.internalValue};this.itemId&&(t.id=this.itemId),i.Z.post(this.checkUrl,t).then((function(){})).catch((function(t){e.errors=t.response.data.errors})).finally((function(){e.internalLoading=!1}))}},clearError:function(){this.errors=[]},validate:function(){var e,t=this.$refs.input;return t.validate()&&!(null!==(e=t.externalError)&&void 0!==e&&e)},resetValidation:function(){this.clearError(),this.$refs.input.resetValidation()}}};var s=n(1900),o=n(3453),l=n.n(o),u=n(9856),d=(0,s.Z)(a,r,[],!1,null,"d35ada80",null);l()(d,{VTextField:u.Z}),d.options.__file="assets/js/components/general/UTextField.vue";const c=d.exports},9637:(e,t,n)=>{n.r(t),n.d(t,{default:()=>b});var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"8"}},[n("v-card",{attrs:{loading:e.loading}},[n("v-card-title",[e._v("\n                    "+e._s(e.isEditRoute?"Edit":"Create")+" User\n                ")]),e._v(" "),n("v-card-text",[n("v-form",[n("span",{staticClass:"text-subtitle-2"},[e._v("Contact Details")]),e._v(" "),n("v-row",[n("v-col",{attrs:{cols:"12",md:"6"}},[n("u-text-field",{attrs:{"item-id":e.userIdentifier,readonly:e.loading||e.saving,rules:[e.isRequired,e.isEmail],"check-url":"api_user_unique_email",dense:"",label:"Email","validate-on-blur":""},on:{paste:e.pastePlainText},model:{value:e.user.username,callback:function(t){e.$set(e.user,"username",t)},expression:"user.username"}})],1)],1),e._v(" "),n("v-row",[n("v-col",{attrs:{cols:"12",lg:"6"}},[n("v-text-field",{attrs:{"error-messages":e.errors.name,readonly:e.loading||e.saving,color:"primary",dense:"",label:"Name"},on:{input:function(t){delete e.errors.name},paste:e.pastePlainText},model:{value:e.user.name,callback:function(t){e.$set(e.user,"name",t)},expression:"user.name"}})],1),e._v(" "),n("v-col",{attrs:{cols:"12",lg:"6"}},[n("v-text-field",{attrs:{"error-messages":e.errors.surname,readonly:e.loading||e.saving,color:"primary",dense:"",label:"Surname"},on:{input:function(t){delete e.errors.surname},paste:e.pastePlainText},model:{value:e.user.surname,callback:function(t){e.$set(e.user,"surname",t)},expression:"user.surname"}})],1)],1),e._v(" "),n("span",{staticClass:"text-subtitle-2"},[e._v("Access & Affiliation")]),e._v(" "),n("v-row",[n("v-col",{attrs:{cols:"12",md:"6"}},[n("url-autocomplete",{attrs:{url:"api_users_primary_roles",label:"Primary Role",rules:[e.isRequired],loading:e.loadingItems.primaryRole,dense:""},on:{"update:loading":function(t){return e.$set(e.loadingItems,"primaryRole",t)}},model:{value:e.user.primaryRole,callback:function(t){e.$set(e.user,"primaryRole",t)},expression:"user.primaryRole"}})],1)],1)],1)],1),e._v(" "),n("v-card-actions",[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{disabled:e.loading||e.saving,text:""},on:{click:function(t){return e.$router.push({name:"Users Index"})}}},[e._v("Cancel\n                    ")]),e._v(" "),n("v-btn",{attrs:{disabled:e.loading,loading:e.saving,color:"primary"},on:{click:e.save}},[e._v("Save\n                    ")])],1)],1)],1)],1)],1)};r._withStripped=!0;n(6699),n(2023),n(1539),n(8674),n(7727);var i=n(4822),a=n(5370),s=(n(2772),n(3210),n(4916),n(5306),{methods:{pastePlainText:function(e){if(0!=e.clipboardData){var t=e.clipboardData.items;if(void 0!==t)for(var n=0;n<t.length;n++){var r=t[n];if(r.kind.indexOf("file")){if(r.type.indexOf("text")>-1){var i=(e.originalEvent||e).clipboardData.getData("text/plain");i=i.replace(/[\u200B-\u200D\uFEFF]/g,"").trim(),document.queryCommandSupported("insertText")?document.execCommand("insertText",!1,i):document.execCommand("paste",!1,i),e.preventDefault()}return}var a="";e.clipboardData||e.originalEvent.clipboardData?a=(e.originalEvent||e).clipboardData.getData("text/plain"):window.clipboardData&&(a=window.clipboardData.getData("Text")),a=a.replace(/[\u200B-\u200D\uFEFF]/g,"").trim(),document.queryCommandSupported("insertText")?document.execCommand("insertText",!1,a):document.execCommand("paste",!1,a),e.preventDefault()}}}}}),o=n(3248);const l={name:"UserCreateEdit",components:{UrlAutocomplete:n(8256).default,UTextField:i.default},mixins:[a.X,s],data:function(){return{user:{},errors:{},saving:!1,loading:!1,primaryRoles:[],loadingItems:{primaryRole:!1}}},computed:{isEditRoute:function(){return this.$route.path.includes("edit")},userIdentifier:function(){var e;return null!==(e=this.$route.params.id)&&void 0!==e?e:null}},mounted:function(){this.init()},watch:{},methods:{init:function(){var e=this;this.loading=!0,o.Z.get("api_user_information",this.getIdentifier("default")).then((function(t){var n=t.data.user;e.user=n})).finally((function(){e.loading=!1}))},save:function(){var e=this;this.saving=!0,o.Z.post(this.userIdentifier?"api_user_edit":"api_user_create",this.user,{params:this.getIdentifier()}).then((function(t){var n=t.data.user;e.isEditRoute||e.$router.push({name:"Users Edit",params:{id:n.id}})})).finally((function(){e.saving=!1}))},getIdentifier:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return this.userIdentifier?{user:this.userIdentifier}:e?{user:e}:{}}}};var u=n(1900),d=n(3453),c=n.n(d),v=n(461),h=n(7318),m=n(5255),p=n(7024),f=n(5386),g=n(3240),x=n(7894),_=n(2515),y=n(9856),w=(0,u.Z)(l,r,[],!1,null,"d3b7bd3e",null);c()(w,{VBtn:v.Z,VCard:h.Z,VCardActions:m.h7,VCardText:m.ZB,VCardTitle:m.EB,VCol:p.Z,VContainer:f.Z,VForm:g.Z,VRow:x.Z,VSpacer:_.Z,VTextField:y.Z}),w.options.__file="assets/js/views/users/UserCreateEdit.vue";const b=w.exports}}]);