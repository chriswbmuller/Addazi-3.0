YUI.add("moodle-form-showadvanced",function(e,t){function n(){n.superclass.constructor.apply(this,arguments)}var r={FIELDSETCONTAINSADVANCED:"fieldset.containsadvancedelements",DIVFITEMADVANCED:"div.fitem.advanced",DIVFCONTAINER:"div.fcontainer",MORELESSLINK:"fieldset.containsadvancedelements .moreless-toggler"},i={SHOW:"show",MORELESSACTIONS:"moreless-actions",MORELESSTOGGLER:"moreless-toggler",SHOWLESS:"moreless-less"},s={FITEM:'<div class="fitem"></div>',FELEMENT:'<div class="felement"></div>'},o={};o.formid={value:null},e.extend(n,e.Base,{initializer:function(){var t=e.one("#"+this.get("formid")),n=t.all(r.FIELDSETCONTAINSADVANCED);n.each(this.processFieldset,this),t.delegate("click",this.switchState,r.MORELESSLINK),t.delegate("key",this.switchState,"down:enter,32",r.MORELESSLINK)},processFieldset:function(t){var n=e.one("input[name=mform_showmore_"+t.get("id")+"]");if(!n)return this;var o=e.Node.create('<a href="#"></a>');o.addClass(i.MORELESSTOGGLER),n.get("value")==="0"?o.setHTML(M.str.form.showmore):(o.setHTML(M.str.form.showless),o.addClass(i.SHOWLESS),t.all(r.DIVFITEMADVANCED).addClass(i.SHOW));var u=[];t.all(r.DIVFITEMADVANCED).each(function(e){u[u.length]=e.generateID()}),o.setAttribute("role","button"),o.setAttribute("aria-controls",u.join(" "));var a=e.Node.create(s.FITEM);a.addClass(i.MORELESSACTIONS);var f=e.Node.create(s.FELEMENT);return f.append(o),a.append(f),t.one(r.DIVFCONTAINER).append(a),this},switchState:function(t){t.preventDefault();var n=this.ancestor(r.FIELDSETCONTAINSADVANCED);n.all(r.DIVFITEMADVANCED).toggleClass(i.SHOW);var s=e.one("input[name=mform_showmore_"+n.get("id")+"]");s.get("value")==="0"?(s.set("value",1),this.addClass(i.SHOWLESS),this.setHTML(M.util.get_string("showless","form"))):(s.set("value",0),this.removeClass(i.SHOWLESS),this.setHTML(M.util.get_string("showmore","form")))}},{NAME:"moodle-form-showadvanced",ATTRS:o}),M.form=M.form||{},M.form.showadvanced=M.form.showadvanced||function(e){return new n(e)}},"@VERSION@",{requires:["node","base","selector-css3"]});
