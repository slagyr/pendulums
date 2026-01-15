// Compiled by ClojureScript 1.12.134 {:optimizations :none}
goog.provide('com.micahmartin.pendulums.web');
goog.require('cljs.core');
goog.require('c3kit.apron.time');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('com.micahmartin.pendulums.engine');
goog.require('com.micahmartin.pendulums.ui');
com.micahmartin.pendulums.web.colors = com.micahmartin.pendulums.ui.pendulum_colors_css;
if((typeof com !== 'undefined') && (typeof com.micahmartin !== 'undefined') && (typeof com.micahmartin.pendulums !== 'undefined') && (typeof com.micahmartin.pendulums.web !== 'undefined') && (typeof com.micahmartin.pendulums.web.app_state !== 'undefined')){
} else {
com.micahmartin.pendulums.web.app_state = reagent.core.atom.call(null,cljs.core.merge.call(null,com.micahmartin.pendulums.ui.default_state,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"animation-id","animation-id",1756745780),null,new cljs.core.Keyword(null,"editing-angle","editing-angle",1617361729),null,new cljs.core.Keyword(null,"angle-input","angle-input",712036151),"",new cljs.core.Keyword(null,"canvas-width","canvas-width",1321931102),com.micahmartin.pendulums.ui.default_canvas_width,new cljs.core.Keyword(null,"canvas-height","canvas-height",291287231),com.micahmartin.pendulums.ui.default_canvas_height,new cljs.core.Keyword(null,"ui","ui",-469653645),null,new cljs.core.Keyword(null,"show-info?","show-info?",-1849013397),false], null)));
}
com.micahmartin.pendulums.web.step_simulation_BANG_ = (function com$micahmartin$pendulums$web$step_simulation_BANG_(_STAR_state){
var now = c3kit.apron.time.now.call(null);
return cljs.core.swap_BANG_.call(null,_STAR_state,com.micahmartin.pendulums.ui.step_state,now);
});
com.micahmartin.pendulums.web.animation_loop = (function com$micahmartin$pendulums$web$animation_loop(_STAR_state){
if(cljs.core.truth_(new cljs.core.Keyword(null,"running?","running?",-257884763).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,_STAR_state)))){
com.micahmartin.pendulums.web.step_simulation_BANG_.call(null,_STAR_state);

var id = requestAnimationFrame((function (){
return com.micahmartin.pendulums.web.animation_loop.call(null,_STAR_state);
}));
return cljs.core.swap_BANG_.call(null,_STAR_state,cljs.core.assoc,new cljs.core.Keyword(null,"animation-id","animation-id",1756745780),id);
} else {
return null;
}
});

/**
* @constructor
 * @implements {com.micahmartin.pendulums.ui.UI}
*/
com.micahmartin.pendulums.web.WebUI = (function (_STAR_state){
this._STAR_state = _STAR_state;
});
(com.micahmartin.pendulums.web.WebUI.prototype.com$micahmartin$pendulums$ui$UI$ = cljs.core.PROTOCOL_SENTINEL);

(com.micahmartin.pendulums.web.WebUI.prototype.com$micahmartin$pendulums$ui$UI$start$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(new cljs.core.Keyword(null,"running?","running?",-257884763).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__._STAR_state)))){
return null;
} else {
cljs.core.swap_BANG_.call(null,self__._STAR_state,com.micahmartin.pendulums.ui.prepare_start);

return com.micahmartin.pendulums.web.animation_loop.call(null,self__._STAR_state);
}
}));

(com.micahmartin.pendulums.web.WebUI.prototype.com$micahmartin$pendulums$ui$UI$stop$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var temp__5825__auto___6742 = new cljs.core.Keyword(null,"animation-id","animation-id",1756745780).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__._STAR_state));
if(cljs.core.truth_(temp__5825__auto___6742)){
var id_6743 = temp__5825__auto___6742;
cancelAnimationFrame(id_6743);
} else {
}

return cljs.core.swap_BANG_.call(null,self__._STAR_state,(function (p1__6741_SHARP_){
return cljs.core.assoc.call(null,com.micahmartin.pendulums.ui.prepare_stop.call(null,p1__6741_SHARP_),new cljs.core.Keyword(null,"animation-id","animation-id",1756745780),null);
}));
}));

(com.micahmartin.pendulums.web.WebUI.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*state","*state",2112112842,null)], null);
}));

(com.micahmartin.pendulums.web.WebUI.cljs$lang$type = true);

(com.micahmartin.pendulums.web.WebUI.cljs$lang$ctorStr = "com.micahmartin.pendulums.web/WebUI");

(com.micahmartin.pendulums.web.WebUI.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write.call(null,writer__5435__auto__,"com.micahmartin.pendulums.web/WebUI");
}));

/**
 * Positional factory function for com.micahmartin.pendulums.web/WebUI.
 */
com.micahmartin.pendulums.web.__GT_WebUI = (function com$micahmartin$pendulums$web$__GT_WebUI(_STAR_state){
return (new com.micahmartin.pendulums.web.WebUI(_STAR_state));
});

/**
 * Converts mouse event to canvas coordinates.
 */
com.micahmartin.pendulums.web.get_canvas_coords = (function com$micahmartin$pendulums$web$get_canvas_coords(e,canvas){
var rect = canvas.getBoundingClientRect();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(e.clientX - rect.left),(e.clientY - rect.top)], null);
});
com.micahmartin.pendulums.web.handle_mouse_down = (function com$micahmartin$pendulums$web$handle_mouse_down(e,canvas){
var vec__6744 = com.micahmartin.pendulums.web.get_canvas_coords.call(null,e,canvas);
var mx = cljs.core.nth.call(null,vec__6744,(0),null);
var my = cljs.core.nth.call(null,vec__6744,(1),null);
return cljs.core.swap_BANG_.call(null,com.micahmartin.pendulums.web.app_state,com.micahmartin.pendulums.ui.handle_mouse_down,mx,my);
});
com.micahmartin.pendulums.web.handle_mouse_move = (function com$micahmartin$pendulums$web$handle_mouse_move(e,canvas){
var vec__6747 = com.micahmartin.pendulums.web.get_canvas_coords.call(null,e,canvas);
var mx = cljs.core.nth.call(null,vec__6747,(0),null);
var my = cljs.core.nth.call(null,vec__6747,(1),null);
return com.micahmartin.pendulums.ui.handle_mouse_move_BANG_.call(null,com.micahmartin.pendulums.web.app_state,mx,my);
});
com.micahmartin.pendulums.web.handle_mouse_up = (function com$micahmartin$pendulums$web$handle_mouse_up(_e,_canvas){
return com.micahmartin.pendulums.ui.handle_mouse_up_BANG_.call(null,com.micahmartin.pendulums.web.app_state);
});
com.micahmartin.pendulums.web.handle_mouse_wheel = (function com$micahmartin$pendulums$web$handle_mouse_wheel(e,canvas){
var vec__6750 = com.micahmartin.pendulums.web.get_canvas_coords.call(null,e,canvas);
var mx = cljs.core.nth.call(null,vec__6750,(0),null);
var my = cljs.core.nth.call(null,vec__6750,(1),null);
var rotation = e.deltaY;
e.preventDefault();

return com.micahmartin.pendulums.ui.handle_mouse_wheel_BANG_.call(null,com.micahmartin.pendulums.web.app_state,mx,my,rotation);
});
/**
 * Draws a tabular display of pendulum angles in the top left of the canvas.
 */
com.micahmartin.pendulums.web.draw_angle_display = (function com$micahmartin$pendulums$web$draw_angle_display(ctx,system,editing_angle){
var pendulums = new cljs.core.Keyword(null,"pendulums","pendulums",191378563).cljs$core$IFn$_invoke$arity$1(system);
var header_y = (com.micahmartin.pendulums.ui.angle_display_padding + com.micahmartin.pendulums.ui.angle_display_line_height);
var swatch_width = (12);
var num_x = ((com.micahmartin.pendulums.ui.angle_display_padding + swatch_width) + (4));
var angle_x = (num_x + (24));
(ctx.font = "14px monospace");

(ctx.fillStyle = "#c8c8c8");

ctx.fillText("#",num_x,header_y);

ctx.fillText("Angle",angle_x,header_y);

var seq__6753 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,pendulums));
var chunk__6754 = null;
var count__6755 = (0);
var i__6756 = (0);
while(true){
if((i__6756 < count__6755)){
var vec__6765 = cljs.core._nth.call(null,chunk__6754,i__6756);
var idx = cljs.core.nth.call(null,vec__6765,(0),null);
var map__6768 = cljs.core.nth.call(null,vec__6765,(1),null);
var map__6768__$1 = cljs.core.__destructure_map.call(null,map__6768);
var theta = cljs.core.get.call(null,map__6768__$1,new cljs.core.Keyword(null,"theta","theta",-427510258));
var y_6773 = (header_y + ((idx + (1)) * com.micahmartin.pendulums.ui.angle_display_line_height));
var color_6774 = cljs.core.nth.call(null,com.micahmartin.pendulums.web.colors,cljs.core.mod.call(null,idx,cljs.core.count.call(null,com.micahmartin.pendulums.web.colors)));
var display_angle_6775 = com.micahmartin.pendulums.ui.normalize_angle.call(null,theta);
var angle_str_6776 = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(display_angle_6775.toFixed((2)))+"\u00B0");
var is_editing_6777 = cljs.core._EQ_.call(null,idx,editing_angle);
(ctx.fillStyle = color_6774);

ctx.fillRect(com.micahmartin.pendulums.ui.angle_display_padding,(y_6773 - (10)),swatch_width,swatch_width);

(ctx.strokeStyle = "#ffffff");

(ctx.lineWidth = (1));

ctx.strokeRect(com.micahmartin.pendulums.ui.angle_display_padding,(y_6773 - (10)),swatch_width,swatch_width);

(ctx.fillStyle = "#c8c8c8");

ctx.fillText((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((idx + (1)))),num_x,y_6773);

if(is_editing_6777){
} else {
ctx.fillText(angle_str_6776,angle_x,y_6773);
}


var G__6778 = seq__6753;
var G__6779 = chunk__6754;
var G__6780 = count__6755;
var G__6781 = (i__6756 + (1));
seq__6753 = G__6778;
chunk__6754 = G__6779;
count__6755 = G__6780;
i__6756 = G__6781;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq.call(null,seq__6753);
if(temp__5825__auto__){
var seq__6753__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6753__$1)){
var c__5673__auto__ = cljs.core.chunk_first.call(null,seq__6753__$1);
var G__6782 = cljs.core.chunk_rest.call(null,seq__6753__$1);
var G__6783 = c__5673__auto__;
var G__6784 = cljs.core.count.call(null,c__5673__auto__);
var G__6785 = (0);
seq__6753 = G__6782;
chunk__6754 = G__6783;
count__6755 = G__6784;
i__6756 = G__6785;
continue;
} else {
var vec__6769 = cljs.core.first.call(null,seq__6753__$1);
var idx = cljs.core.nth.call(null,vec__6769,(0),null);
var map__6772 = cljs.core.nth.call(null,vec__6769,(1),null);
var map__6772__$1 = cljs.core.__destructure_map.call(null,map__6772);
var theta = cljs.core.get.call(null,map__6772__$1,new cljs.core.Keyword(null,"theta","theta",-427510258));
var y_6786 = (header_y + ((idx + (1)) * com.micahmartin.pendulums.ui.angle_display_line_height));
var color_6787 = cljs.core.nth.call(null,com.micahmartin.pendulums.web.colors,cljs.core.mod.call(null,idx,cljs.core.count.call(null,com.micahmartin.pendulums.web.colors)));
var display_angle_6788 = com.micahmartin.pendulums.ui.normalize_angle.call(null,theta);
var angle_str_6789 = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(display_angle_6788.toFixed((2)))+"\u00B0");
var is_editing_6790 = cljs.core._EQ_.call(null,idx,editing_angle);
(ctx.fillStyle = color_6787);

ctx.fillRect(com.micahmartin.pendulums.ui.angle_display_padding,(y_6786 - (10)),swatch_width,swatch_width);

(ctx.strokeStyle = "#ffffff");

(ctx.lineWidth = (1));

ctx.strokeRect(com.micahmartin.pendulums.ui.angle_display_padding,(y_6786 - (10)),swatch_width,swatch_width);

(ctx.fillStyle = "#c8c8c8");

ctx.fillText((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((idx + (1)))),num_x,y_6786);

if(is_editing_6790){
} else {
ctx.fillText(angle_str_6789,angle_x,y_6786);
}


var G__6791 = cljs.core.next.call(null,seq__6753__$1);
var G__6792 = null;
var G__6793 = (0);
var G__6794 = (0);
seq__6753 = G__6791;
chunk__6754 = G__6792;
count__6755 = G__6793;
i__6756 = G__6794;
continue;
}
} else {
return null;
}
}
break;
}
});
com.micahmartin.pendulums.web.submit_angle_edit_BANG_ = (function com$micahmartin$pendulums$web$submit_angle_edit_BANG_(){
var map__6795 = cljs.core.deref.call(null,com.micahmartin.pendulums.web.app_state);
var map__6795__$1 = cljs.core.__destructure_map.call(null,map__6795);
var editing_angle = cljs.core.get.call(null,map__6795__$1,new cljs.core.Keyword(null,"editing-angle","editing-angle",1617361729));
var angle_input = cljs.core.get.call(null,map__6795__$1,new cljs.core.Keyword(null,"angle-input","angle-input",712036151));
if(cljs.core.truth_((function (){var and__5140__auto__ = editing_angle;
if(cljs.core.truth_(and__5140__auto__)){
return (!(isNaN(parseFloat(angle_input))));
} else {
return and__5140__auto__;
}
})())){
return cljs.core.swap_BANG_.call(null,com.micahmartin.pendulums.web.app_state,com.micahmartin.pendulums.ui.submit_angle_edit,parseFloat(angle_input));
} else {
return com.micahmartin.pendulums.ui.cancel_angle_edit_BANG_.call(null,com.micahmartin.pendulums.web.app_state);
}
});
/**
 * Draws fading trails for each pendulum bob.
 */
com.micahmartin.pendulums.web.draw_trails = (function com$micahmartin$pendulums$web$draw_trails(ctx,trails,trail_duration,zoom,pan,canvas_width){
var now = c3kit.apron.time.now.call(null);
var duration_ms = (trail_duration * (1000));
(ctx.lineWidth = ((2) * zoom));

var seq__6796 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,trails));
var chunk__6797 = null;
var count__6798 = (0);
var i__6799 = (0);
while(true){
if((i__6799 < count__6798)){
var vec__6852 = cljs.core._nth.call(null,chunk__6797,i__6799);
var idx = cljs.core.nth.call(null,vec__6852,(0),null);
var trail = cljs.core.nth.call(null,vec__6852,(1),null);
var color_6904 = cljs.core.nth.call(null,com.micahmartin.pendulums.ui.pendulum_colors,cljs.core.mod.call(null,idx,cljs.core.count.call(null,com.micahmartin.pendulums.ui.pendulum_colors)));
var vec__6855_6905 = com.micahmartin.pendulums.ui.hex__GT_rgb.call(null,color_6904);
var r_6906 = cljs.core.nth.call(null,vec__6855_6905,(0),null);
var g_6907 = cljs.core.nth.call(null,vec__6855_6905,(1),null);
var b_6908 = cljs.core.nth.call(null,vec__6855_6905,(2),null);
var seq__6858_6909 = cljs.core.seq.call(null,trail);
var chunk__6859_6910 = null;
var count__6860_6911 = (0);
var i__6861_6912 = (0);
while(true){
if((i__6861_6912 < count__6860_6911)){
var map__6870_6913 = cljs.core._nth.call(null,chunk__6859_6910,i__6861_6912);
var map__6870_6914__$1 = cljs.core.__destructure_map.call(null,map__6870_6913);
var pos_6915 = cljs.core.get.call(null,map__6870_6914__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var time_6916 = cljs.core.get.call(null,map__6870_6914__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var age_6917 = (now - time_6916);
var alpha_6918 = cljs.core.max.call(null,0.0,(1.0 - (age_6917 / duration_ms)));
var vec__6871_6919 = com.micahmartin.pendulums.ui.world__GT_screen.call(null,pos_6915,zoom,pan,canvas_width);
var sx_6920 = cljs.core.nth.call(null,vec__6871_6919,(0),null);
var sy_6921 = cljs.core.nth.call(null,vec__6871_6919,(1),null);
var radius_6922 = (com.micahmartin.pendulums.ui.trail_dot_radius * zoom);
if((alpha_6918 > 0.0)){
(ctx.fillStyle = (""+"rgba("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(r_6906)+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(g_6907)+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(b_6908)+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(alpha_6918)+")"));

ctx.beginPath();

ctx.arc(sx_6920,sy_6921,radius_6922,(0),((2) * Math.PI));

ctx.fill();
} else {
}


var G__6923 = seq__6858_6909;
var G__6924 = chunk__6859_6910;
var G__6925 = count__6860_6911;
var G__6926 = (i__6861_6912 + (1));
seq__6858_6909 = G__6923;
chunk__6859_6910 = G__6924;
count__6860_6911 = G__6925;
i__6861_6912 = G__6926;
continue;
} else {
var temp__5825__auto___6927 = cljs.core.seq.call(null,seq__6858_6909);
if(temp__5825__auto___6927){
var seq__6858_6928__$1 = temp__5825__auto___6927;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6858_6928__$1)){
var c__5673__auto___6929 = cljs.core.chunk_first.call(null,seq__6858_6928__$1);
var G__6930 = cljs.core.chunk_rest.call(null,seq__6858_6928__$1);
var G__6931 = c__5673__auto___6929;
var G__6932 = cljs.core.count.call(null,c__5673__auto___6929);
var G__6933 = (0);
seq__6858_6909 = G__6930;
chunk__6859_6910 = G__6931;
count__6860_6911 = G__6932;
i__6861_6912 = G__6933;
continue;
} else {
var map__6874_6934 = cljs.core.first.call(null,seq__6858_6928__$1);
var map__6874_6935__$1 = cljs.core.__destructure_map.call(null,map__6874_6934);
var pos_6936 = cljs.core.get.call(null,map__6874_6935__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var time_6937 = cljs.core.get.call(null,map__6874_6935__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var age_6938 = (now - time_6937);
var alpha_6939 = cljs.core.max.call(null,0.0,(1.0 - (age_6938 / duration_ms)));
var vec__6875_6940 = com.micahmartin.pendulums.ui.world__GT_screen.call(null,pos_6936,zoom,pan,canvas_width);
var sx_6941 = cljs.core.nth.call(null,vec__6875_6940,(0),null);
var sy_6942 = cljs.core.nth.call(null,vec__6875_6940,(1),null);
var radius_6943 = (com.micahmartin.pendulums.ui.trail_dot_radius * zoom);
if((alpha_6939 > 0.0)){
(ctx.fillStyle = (""+"rgba("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(r_6906)+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(g_6907)+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(b_6908)+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(alpha_6939)+")"));

ctx.beginPath();

ctx.arc(sx_6941,sy_6942,radius_6943,(0),((2) * Math.PI));

ctx.fill();
} else {
}


var G__6944 = cljs.core.next.call(null,seq__6858_6928__$1);
var G__6945 = null;
var G__6946 = (0);
var G__6947 = (0);
seq__6858_6909 = G__6944;
chunk__6859_6910 = G__6945;
count__6860_6911 = G__6946;
i__6861_6912 = G__6947;
continue;
}
} else {
}
}
break;
}


var G__6948 = seq__6796;
var G__6949 = chunk__6797;
var G__6950 = count__6798;
var G__6951 = (i__6799 + (1));
seq__6796 = G__6948;
chunk__6797 = G__6949;
count__6798 = G__6950;
i__6799 = G__6951;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq.call(null,seq__6796);
if(temp__5825__auto__){
var seq__6796__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6796__$1)){
var c__5673__auto__ = cljs.core.chunk_first.call(null,seq__6796__$1);
var G__6952 = cljs.core.chunk_rest.call(null,seq__6796__$1);
var G__6953 = c__5673__auto__;
var G__6954 = cljs.core.count.call(null,c__5673__auto__);
var G__6955 = (0);
seq__6796 = G__6952;
chunk__6797 = G__6953;
count__6798 = G__6954;
i__6799 = G__6955;
continue;
} else {
var vec__6878 = cljs.core.first.call(null,seq__6796__$1);
var idx = cljs.core.nth.call(null,vec__6878,(0),null);
var trail = cljs.core.nth.call(null,vec__6878,(1),null);
var color_6956 = cljs.core.nth.call(null,com.micahmartin.pendulums.ui.pendulum_colors,cljs.core.mod.call(null,idx,cljs.core.count.call(null,com.micahmartin.pendulums.ui.pendulum_colors)));
var vec__6881_6957 = com.micahmartin.pendulums.ui.hex__GT_rgb.call(null,color_6956);
var r_6958 = cljs.core.nth.call(null,vec__6881_6957,(0),null);
var g_6959 = cljs.core.nth.call(null,vec__6881_6957,(1),null);
var b_6960 = cljs.core.nth.call(null,vec__6881_6957,(2),null);
var seq__6884_6961 = cljs.core.seq.call(null,trail);
var chunk__6885_6962 = null;
var count__6886_6963 = (0);
var i__6887_6964 = (0);
while(true){
if((i__6887_6964 < count__6886_6963)){
var map__6896_6965 = cljs.core._nth.call(null,chunk__6885_6962,i__6887_6964);
var map__6896_6966__$1 = cljs.core.__destructure_map.call(null,map__6896_6965);
var pos_6967 = cljs.core.get.call(null,map__6896_6966__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var time_6968 = cljs.core.get.call(null,map__6896_6966__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var age_6969 = (now - time_6968);
var alpha_6970 = cljs.core.max.call(null,0.0,(1.0 - (age_6969 / duration_ms)));
var vec__6897_6971 = com.micahmartin.pendulums.ui.world__GT_screen.call(null,pos_6967,zoom,pan,canvas_width);
var sx_6972 = cljs.core.nth.call(null,vec__6897_6971,(0),null);
var sy_6973 = cljs.core.nth.call(null,vec__6897_6971,(1),null);
var radius_6974 = (com.micahmartin.pendulums.ui.trail_dot_radius * zoom);
if((alpha_6970 > 0.0)){
(ctx.fillStyle = (""+"rgba("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(r_6958)+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(g_6959)+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(b_6960)+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(alpha_6970)+")"));

ctx.beginPath();

ctx.arc(sx_6972,sy_6973,radius_6974,(0),((2) * Math.PI));

ctx.fill();
} else {
}


var G__6975 = seq__6884_6961;
var G__6976 = chunk__6885_6962;
var G__6977 = count__6886_6963;
var G__6978 = (i__6887_6964 + (1));
seq__6884_6961 = G__6975;
chunk__6885_6962 = G__6976;
count__6886_6963 = G__6977;
i__6887_6964 = G__6978;
continue;
} else {
var temp__5825__auto___6979__$1 = cljs.core.seq.call(null,seq__6884_6961);
if(temp__5825__auto___6979__$1){
var seq__6884_6980__$1 = temp__5825__auto___6979__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6884_6980__$1)){
var c__5673__auto___6981 = cljs.core.chunk_first.call(null,seq__6884_6980__$1);
var G__6982 = cljs.core.chunk_rest.call(null,seq__6884_6980__$1);
var G__6983 = c__5673__auto___6981;
var G__6984 = cljs.core.count.call(null,c__5673__auto___6981);
var G__6985 = (0);
seq__6884_6961 = G__6982;
chunk__6885_6962 = G__6983;
count__6886_6963 = G__6984;
i__6887_6964 = G__6985;
continue;
} else {
var map__6900_6986 = cljs.core.first.call(null,seq__6884_6980__$1);
var map__6900_6987__$1 = cljs.core.__destructure_map.call(null,map__6900_6986);
var pos_6988 = cljs.core.get.call(null,map__6900_6987__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var time_6989 = cljs.core.get.call(null,map__6900_6987__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var age_6990 = (now - time_6989);
var alpha_6991 = cljs.core.max.call(null,0.0,(1.0 - (age_6990 / duration_ms)));
var vec__6901_6992 = com.micahmartin.pendulums.ui.world__GT_screen.call(null,pos_6988,zoom,pan,canvas_width);
var sx_6993 = cljs.core.nth.call(null,vec__6901_6992,(0),null);
var sy_6994 = cljs.core.nth.call(null,vec__6901_6992,(1),null);
var radius_6995 = (com.micahmartin.pendulums.ui.trail_dot_radius * zoom);
if((alpha_6991 > 0.0)){
(ctx.fillStyle = (""+"rgba("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(r_6958)+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(g_6959)+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(b_6960)+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(alpha_6991)+")"));

ctx.beginPath();

ctx.arc(sx_6993,sy_6994,radius_6995,(0),((2) * Math.PI));

ctx.fill();
} else {
}


var G__6996 = cljs.core.next.call(null,seq__6884_6980__$1);
var G__6997 = null;
var G__6998 = (0);
var G__6999 = (0);
seq__6884_6961 = G__6996;
chunk__6885_6962 = G__6997;
count__6886_6963 = G__6998;
i__6887_6964 = G__6999;
continue;
}
} else {
}
}
break;
}


var G__7000 = cljs.core.next.call(null,seq__6796__$1);
var G__7001 = null;
var G__7002 = (0);
var G__7003 = (0);
seq__6796 = G__7000;
chunk__6797 = G__7001;
count__6798 = G__7002;
i__6799 = G__7003;
continue;
}
} else {
return null;
}
}
break;
}
});
com.micahmartin.pendulums.web.draw_pendulum_system = (function com$micahmartin$pendulums$web$draw_pendulum_system(ctx,system,running,trails,trail_duration,zoom,pan,canvas_width,canvas_height,editing_angle){
var positions = com.micahmartin.pendulums.engine.bob_positions.call(null,system);
var pendulums = new cljs.core.Keyword(null,"pendulums","pendulums",191378563).cljs$core$IFn$_invoke$arity$1(system);
var vec__7004 = com.micahmartin.pendulums.ui.pivot_screen_pos.call(null,zoom,pan,canvas_width);
var piv_sx = cljs.core.nth.call(null,vec__7004,(0),null);
var piv_sy = cljs.core.nth.call(null,vec__7004,(1),null);
ctx.clearRect((0),(0),canvas_width,canvas_height);

com.micahmartin.pendulums.web.draw_trails.call(null,ctx,trails,trail_duration,zoom,pan,canvas_width);

var prev_x_7021 = piv_sx;
var prev_y_7022 = piv_sy;
var idx_7023 = (0);
var bobs_7024 = positions;
while(true){
if(cljs.core.seq.call(null,bobs_7024)){
var vec__7014_7025 = cljs.core.first.call(null,bobs_7024);
var x_7026 = cljs.core.nth.call(null,vec__7014_7025,(0),null);
var y_7027 = cljs.core.nth.call(null,vec__7014_7025,(1),null);
var vec__7017_7028 = com.micahmartin.pendulums.ui.world__GT_screen.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_7026,y_7027], null),zoom,pan,canvas_width);
var screen_x_7029 = cljs.core.nth.call(null,vec__7017_7028,(0),null);
var screen_y_7030 = cljs.core.nth.call(null,vec__7017_7028,(1),null);
var color_7031 = cljs.core.nth.call(null,com.micahmartin.pendulums.web.colors,cljs.core.mod.call(null,idx_7023,cljs.core.count.call(null,com.micahmartin.pendulums.web.colors)));
(ctx.strokeStyle = com.micahmartin.pendulums.ui.arm_color_css);

(ctx.lineWidth = (com.micahmartin.pendulums.ui.arm_stroke_width * zoom));

ctx.beginPath();

ctx.moveTo(prev_x_7021,prev_y_7022);

ctx.lineTo(screen_x_7029,screen_y_7030);

ctx.stroke();

var map__7020_7032 = cljs.core.nth.call(null,pendulums,idx_7023);
var map__7020_7033__$1 = cljs.core.__destructure_map.call(null,map__7020_7032);
var mass_7034 = cljs.core.get.call(null,map__7020_7033__$1,new cljs.core.Keyword(null,"mass","mass",-2138950046));
var base_radius_7035 = com.micahmartin.pendulums.ui.bob_radius.call(null,mass_7034);
var radius_7036 = (base_radius_7035 * zoom);
(ctx.fillStyle = color_7031);

ctx.beginPath();

ctx.arc(screen_x_7029,screen_y_7030,radius_7036,(0),((2) * Math.PI));

ctx.fill();

(ctx.strokeStyle = com.micahmartin.pendulums.ui.bob_outline_color_css);

(ctx.lineWidth = (com.micahmartin.pendulums.ui.bob_outline_width * zoom));

ctx.stroke();

var G__7037 = screen_x_7029;
var G__7038 = screen_y_7030;
var G__7039 = (idx_7023 + (1));
var G__7040 = cljs.core.rest.call(null,bobs_7024);
prev_x_7021 = G__7037;
prev_y_7022 = G__7038;
idx_7023 = G__7039;
bobs_7024 = G__7040;
continue;
} else {
}
break;
}

var pivot_radius_7041 = (com.micahmartin.pendulums.ui.pivot_radius * zoom);
(ctx.fillStyle = com.micahmartin.pendulums.ui.pivot_color_css);

ctx.beginPath();

ctx.arc(piv_sx,piv_sy,pivot_radius_7041,(0),((2) * Math.PI));

ctx.fill();

return com.micahmartin.pendulums.web.draw_angle_display.call(null,ctx,system,editing_angle);
});
/**
 * Updates canvas size to fill the container. Sets dimensions directly on
 * the canvas DOM element to avoid React re-render clearing the canvas.
 */
com.micahmartin.pendulums.web.update_canvas_size_BANG_ = (function com$micahmartin$pendulums$web$update_canvas_size_BANG_(container_ref,canvas_ref){
var temp__5825__auto__ = cljs.core.deref.call(null,container_ref);
if(cljs.core.truth_(temp__5825__auto__)){
var container = temp__5825__auto__;
var temp__5825__auto____$1 = cljs.core.deref.call(null,canvas_ref);
if(cljs.core.truth_(temp__5825__auto____$1)){
var canvas = temp__5825__auto____$1;
var rect = container.getBoundingClientRect();
var w = rect.width;
var h = rect.height;
if((((w > (0))) && ((h > (0))))){
(canvas.width = w);

(canvas.height = h);

return cljs.core.swap_BANG_.call(null,com.micahmartin.pendulums.web.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"canvas-width","canvas-width",1321931102),w,new cljs.core.Keyword(null,"canvas-height","canvas-height",291287231),h);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
com.micahmartin.pendulums.web.canvas_component = (function com$micahmartin$pendulums$web$canvas_component(){
var canvas_ref = reagent.core.atom.call(null,null);
var container_ref = reagent.core.atom.call(null,null);
var resize_handler = cljs.core.atom.call(null,null);
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"pendulum-canvas",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (_){
cljs.core.reset_BANG_.call(null,resize_handler,(function (){
return com.micahmartin.pendulums.web.update_canvas_size_BANG_.call(null,container_ref,canvas_ref);
}));

window.addEventListener("resize",cljs.core.deref.call(null,resize_handler));

var temp__5825__auto__ = cljs.core.deref.call(null,canvas_ref);
if(cljs.core.truth_(temp__5825__auto__)){
var canvas = temp__5825__auto__;
var ctx = canvas.getContext("2d");
cljs.core.add_watch.call(null,com.micahmartin.pendulums.web.app_state,new cljs.core.Keyword(null,"render","render",-1408033454),(function (___$1,___$2,___$3,p__7049){
var map__7050 = p__7049;
var map__7050__$1 = cljs.core.__destructure_map.call(null,map__7050);
var trails = cljs.core.get.call(null,map__7050__$1,new cljs.core.Keyword(null,"trails","trails",-1542689191));
var canvas_width = cljs.core.get.call(null,map__7050__$1,new cljs.core.Keyword(null,"canvas-width","canvas-width",1321931102));
var canvas_height = cljs.core.get.call(null,map__7050__$1,new cljs.core.Keyword(null,"canvas-height","canvas-height",291287231));
var editing_angle = cljs.core.get.call(null,map__7050__$1,new cljs.core.Keyword(null,"editing-angle","editing-angle",1617361729));
var zoom = cljs.core.get.call(null,map__7050__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var system = cljs.core.get.call(null,map__7050__$1,new cljs.core.Keyword(null,"system","system",-29381724));
var running_QMARK_ = cljs.core.get.call(null,map__7050__$1,new cljs.core.Keyword(null,"running?","running?",-257884763));
var pan = cljs.core.get.call(null,map__7050__$1,new cljs.core.Keyword(null,"pan","pan",-307712792));
var trail_duration = cljs.core.get.call(null,map__7050__$1,new cljs.core.Keyword(null,"trail-duration","trail-duration",1730204306));
return com.micahmartin.pendulums.web.draw_pendulum_system.call(null,ctx,system,running_QMARK_,trails,trail_duration,zoom,pan,canvas_width,canvas_height,editing_angle);
}));

com.micahmartin.pendulums.web.update_canvas_size_BANG_.call(null,container_ref,canvas_ref);

var map__7051_7053 = cljs.core.deref.call(null,com.micahmartin.pendulums.web.app_state);
var map__7051_7054__$1 = cljs.core.__destructure_map.call(null,map__7051_7053);
var trails_7055 = cljs.core.get.call(null,map__7051_7054__$1,new cljs.core.Keyword(null,"trails","trails",-1542689191));
var canvas_width_7056 = cljs.core.get.call(null,map__7051_7054__$1,new cljs.core.Keyword(null,"canvas-width","canvas-width",1321931102));
var canvas_height_7057 = cljs.core.get.call(null,map__7051_7054__$1,new cljs.core.Keyword(null,"canvas-height","canvas-height",291287231));
var editing_angle_7058 = cljs.core.get.call(null,map__7051_7054__$1,new cljs.core.Keyword(null,"editing-angle","editing-angle",1617361729));
var zoom_7059 = cljs.core.get.call(null,map__7051_7054__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var system_7060 = cljs.core.get.call(null,map__7051_7054__$1,new cljs.core.Keyword(null,"system","system",-29381724));
var running_QMARK__7061 = cljs.core.get.call(null,map__7051_7054__$1,new cljs.core.Keyword(null,"running?","running?",-257884763));
var pan_7062 = cljs.core.get.call(null,map__7051_7054__$1,new cljs.core.Keyword(null,"pan","pan",-307712792));
var trail_duration_7063 = cljs.core.get.call(null,map__7051_7054__$1,new cljs.core.Keyword(null,"trail-duration","trail-duration",1730204306));
com.micahmartin.pendulums.web.draw_pendulum_system.call(null,ctx,system_7060,running_QMARK__7061,trails_7055,trail_duration_7063,zoom_7059,pan_7062,canvas_width_7056,canvas_height_7057,editing_angle_7058);

return com.micahmartin.pendulums.ui.start_simulation_BANG_.call(null,com.micahmartin.pendulums.web.app_state);
} else {
return null;
}
}),new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),(function (_){
cljs.core.remove_watch.call(null,com.micahmartin.pendulums.web.app_state,new cljs.core.Keyword(null,"render","render",-1408033454));

if(cljs.core.truth_(cljs.core.deref.call(null,resize_handler))){
return window.removeEventListener("resize",cljs.core.deref.call(null,resize_handler));
} else {
return null;
}
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
var canvas = cljs.core.deref.call(null,canvas_ref);
var map__7052 = cljs.core.deref.call(null,com.micahmartin.pendulums.web.app_state);
var map__7052__$1 = cljs.core.__destructure_map.call(null,map__7052);
var running_QMARK_ = cljs.core.get.call(null,map__7052__$1,new cljs.core.Keyword(null,"running?","running?",-257884763));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.canvas-container","div.canvas-container",1415599719),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref","ref",1289896967),(function (p1__7042_SHARP_){
return cljs.core.reset_BANG_.call(null,container_ref,p1__7042_SHARP_);
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"ref","ref",1289896967),(function (p1__7043_SHARP_){
return cljs.core.reset_BANG_.call(null,canvas_ref,p1__7043_SHARP_);
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),(cljs.core.truth_(running_QMARK_)?"default":"pointer"),new cljs.core.Keyword(null,"display","display",242065432),"block"], null),new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),(function (p1__7044_SHARP_){
if(cljs.core.truth_(canvas)){
return com.micahmartin.pendulums.web.handle_mouse_down.call(null,p1__7044_SHARP_,canvas);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-mouse-move","on-mouse-move",-1386320874),(function (p1__7045_SHARP_){
if(cljs.core.truth_(canvas)){
return com.micahmartin.pendulums.web.handle_mouse_move.call(null,p1__7045_SHARP_,canvas);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-mouse-up","on-mouse-up",-1340533320),(function (p1__7046_SHARP_){
if(cljs.core.truth_(canvas)){
return com.micahmartin.pendulums.web.handle_mouse_up.call(null,p1__7046_SHARP_,canvas);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),(function (p1__7047_SHARP_){
if(cljs.core.truth_(canvas)){
return com.micahmartin.pendulums.web.handle_mouse_up.call(null,p1__7047_SHARP_,canvas);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-wheel","on-wheel",-1971630708),(function (p1__7048_SHARP_){
if(cljs.core.truth_(canvas)){
return com.micahmartin.pendulums.web.handle_mouse_wheel.call(null,p1__7048_SHARP_,canvas);
} else {
return null;
}
})], null)], null)], null);
})], null));
});
com.micahmartin.pendulums.web.angle_input_component = (function com$micahmartin$pendulums$web$angle_input_component(){
var map__7065 = cljs.core.deref.call(null,com.micahmartin.pendulums.web.app_state);
var map__7065__$1 = cljs.core.__destructure_map.call(null,map__7065);
var editing_angle = cljs.core.get.call(null,map__7065__$1,new cljs.core.Keyword(null,"editing-angle","editing-angle",1617361729));
var angle_input = cljs.core.get.call(null,map__7065__$1,new cljs.core.Keyword(null,"angle-input","angle-input",712036151));
if(cljs.core.truth_(editing_angle)){
var header_y = (com.micahmartin.pendulums.ui.angle_display_padding + com.micahmartin.pendulums.ui.angle_display_line_height);
var row_y = (header_y + ((editing_angle + (1)) * com.micahmartin.pendulums.ui.angle_display_line_height));
var input_top = (row_y - (14));
var input_left = (50);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.angle-input-overlay","div.angle-input-overlay",-1861249506),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"top","top",-1856271961),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_top)+"px"),new cljs.core.Keyword(null,"left","left",-399115937),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_left)+"px")], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),angle_input,new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"width","width",-384071477),"60px",new cljs.core.Keyword(null,"padding","padding",1660304693),"2px 4px",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"monospace",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#121212",new cljs.core.Keyword(null,"color","color",1011675173),"#c8c8c8",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #404040",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"2px"], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__7064_SHARP_){
return cljs.core.swap_BANG_.call(null,com.micahmartin.pendulums.web.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"angle-input","angle-input",712036151),p1__7064_SHARP_.target.value);
}),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),(function (e){
var G__7066 = e.key;
switch (G__7066) {
case "Enter":
return com.micahmartin.pendulums.web.submit_angle_edit_BANG_.call(null);

break;
case "Escape":
return com.micahmartin.pendulums.ui.cancel_angle_edit_BANG_.call(null,com.micahmartin.pendulums.web.app_state);

break;
default:
return null;

}
}),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),(function (){
return com.micahmartin.pendulums.ui.cancel_angle_edit_BANG_.call(null,com.micahmartin.pendulums.web.app_state);
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"2px",new cljs.core.Keyword(null,"color","color",1011675173),"#c8c8c8",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"monospace",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px"], null)], null),"\u00B0"], null)], null);
} else {
return null;
}
});
com.micahmartin.pendulums.web.set_trail_duration_BANG_ = (function com$micahmartin$pendulums$web$set_trail_duration_BANG_(duration){
return cljs.core.swap_BANG_.call(null,com.micahmartin.pendulums.web.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"trail-duration","trail-duration",1730204306),duration);
});
com.micahmartin.pendulums.web.play_pause_button = (function com$micahmartin$pendulums$web$play_pause_button(){
var map__7068 = cljs.core.deref.call(null,com.micahmartin.pendulums.web.app_state);
var map__7068__$1 = cljs.core.__destructure_map.call(null,map__7068);
var running_QMARK_ = cljs.core.get.call(null,map__7068__$1,new cljs.core.Keyword(null,"running?","running?",-257884763));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.play-pause","button.play-pause",-473510631),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return com.micahmartin.pendulums.ui.toggle_simulation_BANG_.call(null,com.micahmartin.pendulums.web.app_state);
}),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"transform","transform",1381301764),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"left","left",-399115937)],["center","translateX(-50%)","#000","20px","18px",(cljs.core.truth_(running_QMARK_)?"rgba(245, 158, 11, 0.9)":"rgba(34, 197, 94, 0.9)"),"48px","pointer","0","center","flex","absolute","none","50%","48px","50%"])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"inline-block",new cljs.core.Keyword(null,"transform","transform",1381301764),(cljs.core.truth_(running_QMARK_)?"none":"translateX(2px)")], null)], null),(cljs.core.truth_(running_QMARK_)?"\u23F8":"\u25B6")], null)], null);
});
com.micahmartin.pendulums.web.center_button = (function com$micahmartin$pendulums$web$center_button(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return com.micahmartin.pendulums.ui.center_view_BANG_.call(null,com.micahmartin.pendulums.web.app_state);
}),new cljs.core.Keyword(null,"title","title",636505583),"Center screen",new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"height","height",1025178622)],["center","#fafaf9","18px","10px","rgba(64, 64, 64, 0.8)","36px","pointer","center","54px","flex","absolute","none","50%","36px"])], null),"\u25CE"], null);
});
com.micahmartin.pendulums.web.info_button = (function com$micahmartin$pendulums$web$info_button(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,com.micahmartin.pendulums.web.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"show-info?","show-info?",-1849013397),true);
}),new cljs.core.Keyword(null,"title","title",636505583),"About",new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"height","height",1025178622)],["center","#fafaf9","18px","10px","rgba(64, 64, 64, 0.8)","36px","pointer","center","10px","flex","absolute","none","50%","36px"])], null),"i"], null);
});
com.micahmartin.pendulums.web.info_modal = (function com$micahmartin$pendulums$web$info_modal(){
var map__7070 = cljs.core.deref.call(null,com.micahmartin.pendulums.web.app_state);
var map__7070__$1 = cljs.core.__destructure_map.call(null,map__7070);
var show_info_QMARK_ = cljs.core.get.call(null,map__7070__$1,new cljs.core.Keyword(null,"show-info?","show-info?",-1849013397));
if(cljs.core.truth_(show_info_QMARK_)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.info-modal-overlay","div.info-modal-overlay",-629946660),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"left","left",-399115937)],["center",(0),(0),"rgba(0, 0, 0, 0.7)",(100),"center",(0),"flex","absolute",(0)]),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,com.micahmartin.pendulums.web.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"show-info?","show-info?",-1849013397),false);
})], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.info-modal","div.info-modal",1025832790),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#1e1e1e",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"12px",new cljs.core.Keyword(null,"padding","padding",1660304693),"24px",new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"400px",new cljs.core.Keyword(null,"color","color",1011675173),"#fafaf9",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"0 4px 20px rgba(0, 0, 0, 0.5)"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__7069_SHARP_){
return p1__7069_SHARP_.stopPropagation();
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(0),new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"16px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"20px",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"600"], null)], null),"Pendulum Simulator"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"12px",new cljs.core.Keyword(null,"line-height","line-height",1870784992),"1.5",new cljs.core.Keyword(null,"color","color",1011675173),"#c8c8c8"], null)], null),"A physics simulation of coupled pendulums demonstrating chaotic motion."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"8px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"600"], null)], null),"Controls"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"margin","margin",-995903681),(0),new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),"20px",new cljs.core.Keyword(null,"color","color",1011675173),"#c8c8c8",new cljs.core.Keyword(null,"line-height","line-height",1870784992),"1.6"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"Drag bobs to reposition (when paused)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"Scroll to zoom in/out"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"Click angles to edit directly"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"+/- buttons to add or remove pendulums"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,com.micahmartin.pendulums.web.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"show-info?","show-info?",-1849013397),false);
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"20px",new cljs.core.Keyword(null,"padding","padding",1660304693),"8px 16px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgba(64, 64, 64, 0.8)",new cljs.core.Keyword(null,"border","border",1444987323),"none",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"6px",new cljs.core.Keyword(null,"color","color",1011675173),"#fafaf9",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px"], null)], null),"Close"], null)], null)], null);
} else {
return null;
}
});
com.micahmartin.pendulums.web.add_remove_buttons = (function com$micahmartin$pendulums$web$add_remove_buttons(){
var map__7071 = cljs.core.deref.call(null,com.micahmartin.pendulums.web.app_state);
var map__7071__$1 = cljs.core.__destructure_map.call(null,map__7071);
var system = cljs.core.get.call(null,map__7071__$1,new cljs.core.Keyword(null,"system","system",-29381724));
var n = com.micahmartin.pendulums.engine.pendulum_count.call(null,system);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"top","top",-1856271961),"10px",new cljs.core.Keyword(null,"left","left",-399115937),"50%",new cljs.core.Keyword(null,"transform","transform",1381301764),"translateX(-50%)",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"gap","gap",80255254),"8px",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return com.micahmartin.pendulums.ui.remove_pendulum_BANG_.call(null,com.micahmartin.pendulums.web.app_state);
}),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(n < (2)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"padding","padding",1660304693),"4px 8px",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgba(64, 64, 64, 0.8)",new cljs.core.Keyword(null,"border","border",1444987323),"none",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"4px",new cljs.core.Keyword(null,"color","color",1011675173),"#fafaf9"], null)], null),"-"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"#c8c8c8",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px"], null)], null),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)+" pendulums")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return com.micahmartin.pendulums.ui.add_pendulum_BANG_.call(null,com.micahmartin.pendulums.web.app_state);
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"padding","padding",1660304693),"4px 8px",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgba(64, 64, 64, 0.8)",new cljs.core.Keyword(null,"border","border",1444987323),"none",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"4px",new cljs.core.Keyword(null,"color","color",1011675173),"#fafaf9"], null)], null),"+"], null)], null);
});
com.micahmartin.pendulums.web.trail_slider = (function com$micahmartin$pendulums$web$trail_slider(){
var map__7073 = cljs.core.deref.call(null,com.micahmartin.pendulums.web.app_state);
var map__7073__$1 = cljs.core.__destructure_map.call(null,map__7073);
var trail_duration = cljs.core.get.call(null,map__7073__$1,new cljs.core.Keyword(null,"trail-duration","trail-duration",1730204306));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"top","top",-1856271961),"42px",new cljs.core.Keyword(null,"left","left",-399115937),"50%",new cljs.core.Keyword(null,"transform","transform",1381301764),"translateX(-50%)",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"gap","gap",80255254),"8px",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"#c8c8c8",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px"], null)], null),"Trail:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"range",new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"max","max",61366548),(100),new cljs.core.Keyword(null,"value","value",305978217),(trail_duration * (10)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"80px"], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__7072_SHARP_){
return com.micahmartin.pendulums.web.set_trail_duration_BANG_.call(null,(parseInt(p1__7072_SHARP_.target.value) / 10.0));
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"#c8c8c8",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px"], null)], null),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(trail_duration.toFixed((1)))+"s")], null)], null);
});
com.micahmartin.pendulums.web.app_component = (function com$micahmartin$pendulums$web$app_component(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#app","div#app",840279329),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.simulation-container","div.simulation-container",716718285),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.micahmartin.pendulums.web.canvas_component], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.micahmartin.pendulums.web.angle_input_component], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.micahmartin.pendulums.web.add_remove_buttons], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.micahmartin.pendulums.web.trail_slider], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.micahmartin.pendulums.web.center_button], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.micahmartin.pendulums.web.info_button], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.micahmartin.pendulums.web.play_pause_button], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.micahmartin.pendulums.web.info_modal], null)], null)], null);
});
com.micahmartin.pendulums.web.init = (function com$micahmartin$pendulums$web$init(){
cljs.core.swap_BANG_.call(null,com.micahmartin.pendulums.web.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"ui","ui",-469653645),(new com.micahmartin.pendulums.web.WebUI(com.micahmartin.pendulums.web.app_state)));

return reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.micahmartin.pendulums.web.app_component], null),document.getElementById("app"));
});
goog.exportSymbol('com.micahmartin.pendulums.web.init', com.micahmartin.pendulums.web.init);
com.micahmartin.pendulums.web.reload = (function com$micahmartin$pendulums$web$reload(){
return com.micahmartin.pendulums.web.init.call(null);
});

//# sourceMappingURL=web.js.map
