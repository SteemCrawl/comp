/*! http://mths.be/placeholder v2.0.7 by @mathias */
(function(e,t,n){function l(e){var t={};var r=/^jQuery\d+$/;n.each(e.attributes,function(e,n){if(n.specified&&!r.test(n.name)){t[n.name]=n.value}});return t}function c(e,t){var r=this;var i=n(r);if(r.value==i.attr("placeholder")&&i.hasClass("placeholder")){if(i.data("placeholder-password")){i=i.hide().next().show().attr("id",i.removeAttr("id").data("placeholder-id"));if(e===true){return i[0].value=t}i.focus()}else{r.value="";i.removeClass("placeholder");r==p()&&r.select()}}}function h(){var e;var t=this;var r=n(t);var i=this.id;if(t.value==""){if(t.type=="password"){if(!r.data("placeholder-textinput")){try{e=r.clone().attr({type:"text"})}catch(s){e=n("<input>").attr(n.extend(l(this),{type:"text"}))}e.removeAttr("name").data({"placeholder-password":r,"placeholder-id":i}).bind("focus.placeholder",c);r.data({"placeholder-textinput":e,"placeholder-id":i}).before(e)}r=r.removeAttr("id").hide().prev().attr("id",i).show()}r.addClass("placeholder");r[0].value=r.attr("placeholder")}else{r.removeClass("placeholder")}}function p(){try{return t.activeElement}catch(e){}}var r="placeholder"in t.createElement("input");var i="placeholder"in t.createElement("textarea");var s=n.fn;var o=n.valHooks;var u=n.propHooks;var a;var f;if(r&&i){f=s.placeholder=function(){return this};f.input=f.textarea=true}else{f=s.placeholder=function(){var e=this;e.filter((r?"textarea":":input")+"[placeholder]").not(".placeholder").bind({"focus.placeholder":c,"blur.placeholder":h}).data("placeholder-enabled",true).trigger("blur.placeholder");return e};f.input=r;f.textarea=i;a={get:function(e){var t=n(e);var r=t.data("placeholder-password");if(r){return r[0].value}return t.data("placeholder-enabled")&&t.hasClass("placeholder")?"":e.value},set:function(e,t){var r=n(e);var i=r.data("placeholder-password");if(i){return i[0].value=t}if(!r.data("placeholder-enabled")){return e.value=t}if(t==""){e.value=t;if(e!=p()){h.call(e)}}else if(r.hasClass("placeholder")){c.call(e,true,t)||(e.value=t)}else{e.value=t}return r}};if(!r){o.input=a;u.value=a}if(!i){o.textarea=a;u.value=a}n(function(){n(t).delegate("form","submit.placeholder",function(){var e=n(".placeholder",this).each(c);setTimeout(function(){e.each(h)},10)})});n(e).bind("beforeunload.placeholder",function(){n(".placeholder").each(function(){this.value=""})})}})(this,document,jQuery);
$(function() {$("input, textarea").placeholder();});

/* Array.contains as facade for checking if element exists in array */
if (!Array.prototype.contains) {
    Array.prototype.contains = function(element) { var i = this.length; while (i--) { if (this.hasOwnProperty(i) && this[i] == element) { return true; } } return false; };
}

function addParamsToUrl(url, params) {
    for (var key in params) {
        if (params.hasOwnProperty(key)) {
            url += (url.split('?')[1] ? '&':'?') + encodeURIComponent(key) + '=' + encodeURIComponent(params[key])
        }
    }

    return url;
}
/* get url params */
function getUrlVars() { var vars = {}; var href = document.URL ? document.URL : window.location.href; href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) { vars[key] = value; }); return vars; }

$(function () {
    var supported = ['utm_source', 'utm_campaign', 'utm_medium', 'utm_term', 'utm_content'];
    var params = getUrlVars();
    var utms = {};

    $.each(params, function(key, value){
        if (supported.contains(key)) {
            utms[key] = value;
        }
    });

    $('form').each(function() {
        $(this).prop('action', function (i, val) {
            return addParamsToUrl(val, utms)
        });
    });
});
