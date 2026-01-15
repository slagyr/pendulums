// Compiled by ClojureScript 1.12.134 {:optimizations :none}
goog.provide('com.micahmartin.pendulums.core');
goog.require('cljs.core');
goog.require('c3kit.apron.time');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('com.micahmartin.pendulums.engine');
goog.require('com.micahmartin.pendulums.ui');
com.micahmartin.pendulums.core.colors = com.micahmartin.pendulums.ui.pendulum_colors_css;
if((typeof com !== 'undefined') && (typeof com.micahmartin !== 'undefined') && (typeof com.micahmartin.pendulums !== 'undefined') && (typeof com.micahmartin.pendulums.core !== 'undefined') && (typeof com.micahmartin.pendulums.core.app_state !== 'undefined')){
} else {
com.micahmartin.pendulums.core.app_state = reagent.core.atom.call(null,cljs.core.merge.call(null,com.micahmartin.pendulums.ui.default_state,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"animation-id","animation-id",1756745780),null,new cljs.core.Keyword(null,"editing-angle","editing-angle",1617361729),null,new cljs.core.Keyword(null,"angle-input","angle-input",712036151),"",new cljs.core.Keyword(null,"canvas-width","canvas-width",1321931102),com.micahmartin.pendulums.ui.default_canvas_width,new cljs.core.Keyword(null,"canvas-height","canvas-height",291287231),com.micahmartin.pendulums.ui.default_canvas_height], null)));
}
com.micahmartin.pendulums.core.step_simulation_BANG_ = (function com$micahmartin$pendulums$core$step_simulation_BANG_(){
var now = c3kit.apron.time.now.call(null);
return cljs.core.swap_BANG_.call(null,com.micahmartin.pendulums.core.app_state,(function (p__6741){
var map__6742 = p__6741;
var map__6742__$1 = cljs.core.__destructure_map.call(null,map__6742);
var state = map__6742__$1;
var system = cljs.core.get.call(null,map__6742__$1,new cljs.core.Keyword(null,"system","system",-29381724));
var trail_duration = cljs.core.get.call(null,map__6742__$1,new cljs.core.Keyword(null,"trail-duration","trail-duration",1730204306));
var trails = cljs.core.get.call(null,map__6742__$1,new cljs.core.Keyword(null,"trails","trails",-1542689191));
var vec__6743 = com.micahmartin.pendulums.engine.step_with_trails.call(null,system,com.micahmartin.pendulums.ui.dt,trail_duration,trails,now);
var new_system = cljs.core.nth.call(null,vec__6743,(0),null);
var new_trails = cljs.core.nth.call(null,vec__6743,(1),null);
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"system","system",-29381724),new_system,new cljs.core.Keyword(null,"trails","trails",-1542689191),new_trails);
}));
});
com.micahmartin.pendulums.core.animation_loop = (function com$micahmartin$pendulums$core$animation_loop(){
if(cljs.core.truth_(new cljs.core.Keyword(null,"running","running",1554969103).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,com.micahmartin.pendulums.core.app_state)))){
com.micahmartin.pendulums.core.step_simulation_BANG_.call(null);

var id = requestAnimationFrame(com.micahmartin.pendulums.core.animation_loop);
return cljs.core.swap_BANG_.call(null,com.micahmartin.pendulums.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"animation-id","animation-id",1756745780),id);
} else {
return null;
}
});
com.micahmartin.pendulums.core.start_simulation_BANG_ = (function com$micahmartin$pendulums$core$start_simulation_BANG_(){
if(cljs.core.truth_(new cljs.core.Keyword(null,"running","running",1554969103).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,com.micahmartin.pendulums.core.app_state)))){
return null;
} else {
cljs.core.swap_BANG_.call(null,com.micahmartin.pendulums.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"running","running",1554969103),true,new cljs.core.Keyword(null,"selected","selected",574897764),null,new cljs.core.Keyword(null,"dragging","dragging",1185097613),false);

return com.micahmartin.pendulums.core.animation_loop.call(null);
}
});
com.micahmartin.pendulums.core.stop_simulation_BANG_ = (function com$micahmartin$pendulums$core$stop_simulation_BANG_(){
var temp__5825__auto___6746 = new cljs.core.Keyword(null,"animation-id","animation-id",1756745780).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,com.micahmartin.pendulums.core.app_state));
if(cljs.core.truth_(temp__5825__auto___6746)){
var id_6747 = temp__5825__auto___6746;
cancelAnimationFrame(id_6747);
} else {
}

return cljs.core.swap_BANG_.call(null,com.micahmartin.pendulums.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"running","running",1554969103),false,new cljs.core.Keyword(null,"animation-id","animation-id",1756745780),null);
});
com.micahmartin.pendulums.core.toggle_simulation_BANG_ = (function com$micahmartin$pendulums$core$toggle_simulation_BANG_(){
if(cljs.core.truth_(new cljs.core.Keyword(null,"running","running",1554969103).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,com.micahmartin.pendulums.core.app_state)))){
return com.micahmartin.pendulums.core.stop_simulation_BANG_.call(null);
} else {
return com.micahmartin.pendulums.core.start_simulation_BANG_.call(null);
}
});
com.micahmartin.pendulums.core.add_pendulum_BANG_ = (function com$micahmartin$pendulums$core$add_pendulum_BANG_(){
return cljs.core.swap_BANG_.call(null,com.micahmartin.pendulums.core.app_state,com.micahmartin.pendulums.ui.add_pendulum);
});
com.micahmartin.pendulums.core.remove_pendulum_BANG_ = (function com$micahmartin$pendulums$core$remove_pendulum_BANG_(){
return cljs.core.swap_BANG_.call(null,com.micahmartin.pendulums.core.app_state,com.micahmartin.pendulums.ui.remove_pendulum);
});
com.micahmartin.pendulums.core.center_view_BANG_ = (function com$micahmartin$pendulums$core$center_view_BANG_(){
return cljs.core.swap_BANG_.call(null,com.micahmartin.pendulums.core.app_state,com.micahmartin.pendulums.ui.center_view);
});
/**
 * Converts mouse event to canvas coordinates.
 */
com.micahmartin.pendulums.core.get_canvas_coords = (function com$micahmartin$pendulums$core$get_canvas_coords(e,canvas){
var rect = canvas.getBoundingClientRect();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(e.clientX - rect.left),(e.clientY - rect.top)], null);
});
com.micahmartin.pendulums.core.handle_mouse_down = (function com$micahmartin$pendulums$core$handle_mouse_down(e,canvas){
var vec__6748 = com.micahmartin.pendulums.core.get_canvas_coords.call(null,e,canvas);
var mx = cljs.core.nth.call(null,vec__6748,(0),null);
var my = cljs.core.nth.call(null,vec__6748,(1),null);
return cljs.core.swap_BANG_.call(null,com.micahmartin.pendulums.core.app_state,com.micahmartin.pendulums.ui.handle_mouse_down,mx,my);
});
com.micahmartin.pendulums.core.handle_mouse_move = (function com$micahmartin$pendulums$core$handle_mouse_move(e,canvas){
var vec__6751 = com.micahmartin.pendulums.core.get_canvas_coords.call(null,e,canvas);
var mx = cljs.core.nth.call(null,vec__6751,(0),null);
var my = cljs.core.nth.call(null,vec__6751,(1),null);
return cljs.core.swap_BANG_.call(null,com.micahmartin.pendulums.core.app_state,com.micahmartin.pendulums.ui.handle_mouse_move,mx,my);
});
com.micahmartin.pendulums.core.handle_mouse_up = (function com$micahmartin$pendulums$core$handle_mouse_up(_e,_canvas){
return cljs.core.swap_BANG_.call(null,com.micahmartin.pendulums.core.app_state,com.micahmartin.pendulums.ui.handle_mouse_up);
});
com.micahmartin.pendulums.core.handle_mouse_wheel = (function com$micahmartin$pendulums$core$handle_mouse_wheel(e,canvas){
var vec__6754 = com.micahmartin.pendulums.core.get_canvas_coords.call(null,e,canvas);
var mx = cljs.core.nth.call(null,vec__6754,(0),null);
var my = cljs.core.nth.call(null,vec__6754,(1),null);
var rotation = e.deltaY;
e.preventDefault();

return cljs.core.swap_BANG_.call(null,com.micahmartin.pendulums.core.app_state,com.micahmartin.pendulums.ui.handle_mouse_wheel,mx,my,rotation);
});
/**
 * Draws a tabular display of pendulum angles in the top left of the canvas.
 */
com.micahmartin.pendulums.core.draw_angle_display = (function com$micahmartin$pendulums$core$draw_angle_display(ctx,system,editing_angle){
var pendulums = new cljs.core.Keyword(null,"pendulums","pendulums",191378563).cljs$core$IFn$_invoke$arity$1(system);
var header_y = (com.micahmartin.pendulums.ui.angle_display_padding + com.micahmartin.pendulums.ui.angle_display_line_height);
var swatch_width = (12);
var num_x = ((com.micahmartin.pendulums.ui.angle_display_padding + swatch_width) + (4));
var angle_x = (num_x + (24));
(ctx.font = "14px monospace");

(ctx.fillStyle = "#c8c8c8");

ctx.fillText("#",num_x,header_y);

ctx.fillText("Angle",angle_x,header_y);

var seq__6757 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,pendulums));
var chunk__6758 = null;
var count__6759 = (0);
var i__6760 = (0);
while(true){
if((i__6760 < count__6759)){
var vec__6769 = cljs.core._nth.call(null,chunk__6758,i__6760);
var idx = cljs.core.nth.call(null,vec__6769,(0),null);
var map__6772 = cljs.core.nth.call(null,vec__6769,(1),null);
var map__6772__$1 = cljs.core.__destructure_map.call(null,map__6772);
var theta = cljs.core.get.call(null,map__6772__$1,new cljs.core.Keyword(null,"theta","theta",-427510258));
var y_6777 = (header_y + ((idx + (1)) * com.micahmartin.pendulums.ui.angle_display_line_height));
var color_6778 = cljs.core.nth.call(null,com.micahmartin.pendulums.core.colors,cljs.core.mod.call(null,idx,cljs.core.count.call(null,com.micahmartin.pendulums.core.colors)));
var display_angle_6779 = com.micahmartin.pendulums.ui.normalize_angle.call(null,theta);
var angle_str_6780 = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(display_angle_6779.toFixed((2)))+"\u00B0");
var is_editing_6781 = cljs.core._EQ_.call(null,idx,editing_angle);
(ctx.fillStyle = color_6778);

ctx.fillRect(com.micahmartin.pendulums.ui.angle_display_padding,(y_6777 - (10)),swatch_width,swatch_width);

(ctx.strokeStyle = "#ffffff");

(ctx.lineWidth = (1));

ctx.strokeRect(com.micahmartin.pendulums.ui.angle_display_padding,(y_6777 - (10)),swatch_width,swatch_width);

(ctx.fillStyle = "#c8c8c8");

ctx.fillText((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((idx + (1)))),num_x,y_6777);

if(is_editing_6781){
} else {
ctx.fillText(angle_str_6780,angle_x,y_6777);
}


var G__6782 = seq__6757;
var G__6783 = chunk__6758;
var G__6784 = count__6759;
var G__6785 = (i__6760 + (1));
seq__6757 = G__6782;
chunk__6758 = G__6783;
count__6759 = G__6784;
i__6760 = G__6785;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq.call(null,seq__6757);
if(temp__5825__auto__){
var seq__6757__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6757__$1)){
var c__5673__auto__ = cljs.core.chunk_first.call(null,seq__6757__$1);
var G__6786 = cljs.core.chunk_rest.call(null,seq__6757__$1);
var G__6787 = c__5673__auto__;
var G__6788 = cljs.core.count.call(null,c__5673__auto__);
var G__6789 = (0);
seq__6757 = G__6786;
chunk__6758 = G__6787;
count__6759 = G__6788;
i__6760 = G__6789;
continue;
} else {
var vec__6773 = cljs.core.first.call(null,seq__6757__$1);
var idx = cljs.core.nth.call(null,vec__6773,(0),null);
var map__6776 = cljs.core.nth.call(null,vec__6773,(1),null);
var map__6776__$1 = cljs.core.__destructure_map.call(null,map__6776);
var theta = cljs.core.get.call(null,map__6776__$1,new cljs.core.Keyword(null,"theta","theta",-427510258));
var y_6790 = (header_y + ((idx + (1)) * com.micahmartin.pendulums.ui.angle_display_line_height));
var color_6791 = cljs.core.nth.call(null,com.micahmartin.pendulums.core.colors,cljs.core.mod.call(null,idx,cljs.core.count.call(null,com.micahmartin.pendulums.core.colors)));
var display_angle_6792 = com.micahmartin.pendulums.ui.normalize_angle.call(null,theta);
var angle_str_6793 = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(display_angle_6792.toFixed((2)))+"\u00B0");
var is_editing_6794 = cljs.core._EQ_.call(null,idx,editing_angle);
(ctx.fillStyle = color_6791);

ctx.fillRect(com.micahmartin.pendulums.ui.angle_display_padding,(y_6790 - (10)),swatch_width,swatch_width);

(ctx.strokeStyle = "#ffffff");

(ctx.lineWidth = (1));

ctx.strokeRect(com.micahmartin.pendulums.ui.angle_display_padding,(y_6790 - (10)),swatch_width,swatch_width);

(ctx.fillStyle = "#c8c8c8");

ctx.fillText((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((idx + (1)))),num_x,y_6790);

if(is_editing_6794){
} else {
ctx.fillText(angle_str_6793,angle_x,y_6790);
}


var G__6795 = cljs.core.next.call(null,seq__6757__$1);
var G__6796 = null;
var G__6797 = (0);
var G__6798 = (0);
seq__6757 = G__6795;
chunk__6758 = G__6796;
count__6759 = G__6797;
i__6760 = G__6798;
continue;
}
} else {
return null;
}
}
break;
}
});
com.micahmartin.pendulums.core.start_angle_edit_BANG_ = (function com$micahmartin$pendulums$core$start_angle_edit_BANG_(idx){
return cljs.core.swap_BANG_.call(null,com.micahmartin.pendulums.core.app_state,com.micahmartin.pendulums.ui.start_angle_edit,idx);
});
com.micahmartin.pendulums.core.cancel_angle_edit_BANG_ = (function com$micahmartin$pendulums$core$cancel_angle_edit_BANG_(){
return cljs.core.swap_BANG_.call(null,com.micahmartin.pendulums.core.app_state,com.micahmartin.pendulums.ui.cancel_angle_edit);
});
com.micahmartin.pendulums.core.submit_angle_edit_BANG_ = (function com$micahmartin$pendulums$core$submit_angle_edit_BANG_(){
var map__6799 = cljs.core.deref.call(null,com.micahmartin.pendulums.core.app_state);
var map__6799__$1 = cljs.core.__destructure_map.call(null,map__6799);
var editing_angle = cljs.core.get.call(null,map__6799__$1,new cljs.core.Keyword(null,"editing-angle","editing-angle",1617361729));
var angle_input = cljs.core.get.call(null,map__6799__$1,new cljs.core.Keyword(null,"angle-input","angle-input",712036151));
if(cljs.core.truth_((function (){var and__5140__auto__ = editing_angle;
if(cljs.core.truth_(and__5140__auto__)){
return (!(isNaN(parseFloat(angle_input))));
} else {
return and__5140__auto__;
}
})())){
return cljs.core.swap_BANG_.call(null,com.micahmartin.pendulums.core.app_state,com.micahmartin.pendulums.ui.submit_angle_edit,parseFloat(angle_input));
} else {
return com.micahmartin.pendulums.core.cancel_angle_edit_BANG_.call(null);
}
});
/**
 * Draws fading trails for each pendulum bob.
 */
com.micahmartin.pendulums.core.draw_trails = (function com$micahmartin$pendulums$core$draw_trails(ctx,trails,trail_duration,zoom,pan,canvas_width){
var now = c3kit.apron.time.now.call(null);
var duration_ms = (trail_duration * (1000));
(ctx.lineWidth = ((2) * zoom));

var seq__6800 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,trails));
var chunk__6801 = null;
var count__6802 = (0);
var i__6803 = (0);
while(true){
if((i__6803 < count__6802)){
var vec__6856 = cljs.core._nth.call(null,chunk__6801,i__6803);
var idx = cljs.core.nth.call(null,vec__6856,(0),null);
var trail = cljs.core.nth.call(null,vec__6856,(1),null);
var color_6908 = cljs.core.nth.call(null,com.micahmartin.pendulums.ui.pendulum_colors,cljs.core.mod.call(null,idx,cljs.core.count.call(null,com.micahmartin.pendulums.ui.pendulum_colors)));
var vec__6859_6909 = com.micahmartin.pendulums.ui.hex__GT_rgb.call(null,color_6908);
var r_6910 = cljs.core.nth.call(null,vec__6859_6909,(0),null);
var g_6911 = cljs.core.nth.call(null,vec__6859_6909,(1),null);
var b_6912 = cljs.core.nth.call(null,vec__6859_6909,(2),null);
var seq__6862_6913 = cljs.core.seq.call(null,trail);
var chunk__6863_6914 = null;
var count__6864_6915 = (0);
var i__6865_6916 = (0);
while(true){
if((i__6865_6916 < count__6864_6915)){
var map__6874_6917 = cljs.core._nth.call(null,chunk__6863_6914,i__6865_6916);
var map__6874_6918__$1 = cljs.core.__destructure_map.call(null,map__6874_6917);
var pos_6919 = cljs.core.get.call(null,map__6874_6918__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var time_6920 = cljs.core.get.call(null,map__6874_6918__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var age_6921 = (now - time_6920);
var alpha_6922 = cljs.core.max.call(null,0.0,(1.0 - (age_6921 / duration_ms)));
var vec__6875_6923 = com.micahmartin.pendulums.ui.world__GT_screen.call(null,pos_6919,zoom,pan,canvas_width);
var sx_6924 = cljs.core.nth.call(null,vec__6875_6923,(0),null);
var sy_6925 = cljs.core.nth.call(null,vec__6875_6923,(1),null);
var radius_6926 = (com.micahmartin.pendulums.ui.trail_dot_radius * zoom);
if((alpha_6922 > 0.0)){
(ctx.fillStyle = (""+"rgba("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(r_6910)+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(g_6911)+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(b_6912)+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(alpha_6922)+")"));

ctx.beginPath();

ctx.arc(sx_6924,sy_6925,radius_6926,(0),((2) * Math.PI));

ctx.fill();
} else {
}


var G__6927 = seq__6862_6913;
var G__6928 = chunk__6863_6914;
var G__6929 = count__6864_6915;
var G__6930 = (i__6865_6916 + (1));
seq__6862_6913 = G__6927;
chunk__6863_6914 = G__6928;
count__6864_6915 = G__6929;
i__6865_6916 = G__6930;
continue;
} else {
var temp__5825__auto___6931 = cljs.core.seq.call(null,seq__6862_6913);
if(temp__5825__auto___6931){
var seq__6862_6932__$1 = temp__5825__auto___6931;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6862_6932__$1)){
var c__5673__auto___6933 = cljs.core.chunk_first.call(null,seq__6862_6932__$1);
var G__6934 = cljs.core.chunk_rest.call(null,seq__6862_6932__$1);
var G__6935 = c__5673__auto___6933;
var G__6936 = cljs.core.count.call(null,c__5673__auto___6933);
var G__6937 = (0);
seq__6862_6913 = G__6934;
chunk__6863_6914 = G__6935;
count__6864_6915 = G__6936;
i__6865_6916 = G__6937;
continue;
} else {
var map__6878_6938 = cljs.core.first.call(null,seq__6862_6932__$1);
var map__6878_6939__$1 = cljs.core.__destructure_map.call(null,map__6878_6938);
var pos_6940 = cljs.core.get.call(null,map__6878_6939__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var time_6941 = cljs.core.get.call(null,map__6878_6939__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var age_6942 = (now - time_6941);
var alpha_6943 = cljs.core.max.call(null,0.0,(1.0 - (age_6942 / duration_ms)));
var vec__6879_6944 = com.micahmartin.pendulums.ui.world__GT_screen.call(null,pos_6940,zoom,pan,canvas_width);
var sx_6945 = cljs.core.nth.call(null,vec__6879_6944,(0),null);
var sy_6946 = cljs.core.nth.call(null,vec__6879_6944,(1),null);
var radius_6947 = (com.micahmartin.pendulums.ui.trail_dot_radius * zoom);
if((alpha_6943 > 0.0)){
(ctx.fillStyle = (""+"rgba("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(r_6910)+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(g_6911)+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(b_6912)+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(alpha_6943)+")"));

ctx.beginPath();

ctx.arc(sx_6945,sy_6946,radius_6947,(0),((2) * Math.PI));

ctx.fill();
} else {
}


var G__6948 = cljs.core.next.call(null,seq__6862_6932__$1);
var G__6949 = null;
var G__6950 = (0);
var G__6951 = (0);
seq__6862_6913 = G__6948;
chunk__6863_6914 = G__6949;
count__6864_6915 = G__6950;
i__6865_6916 = G__6951;
continue;
}
} else {
}
}
break;
}


var G__6952 = seq__6800;
var G__6953 = chunk__6801;
var G__6954 = count__6802;
var G__6955 = (i__6803 + (1));
seq__6800 = G__6952;
chunk__6801 = G__6953;
count__6802 = G__6954;
i__6803 = G__6955;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq.call(null,seq__6800);
if(temp__5825__auto__){
var seq__6800__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6800__$1)){
var c__5673__auto__ = cljs.core.chunk_first.call(null,seq__6800__$1);
var G__6956 = cljs.core.chunk_rest.call(null,seq__6800__$1);
var G__6957 = c__5673__auto__;
var G__6958 = cljs.core.count.call(null,c__5673__auto__);
var G__6959 = (0);
seq__6800 = G__6956;
chunk__6801 = G__6957;
count__6802 = G__6958;
i__6803 = G__6959;
continue;
} else {
var vec__6882 = cljs.core.first.call(null,seq__6800__$1);
var idx = cljs.core.nth.call(null,vec__6882,(0),null);
var trail = cljs.core.nth.call(null,vec__6882,(1),null);
var color_6960 = cljs.core.nth.call(null,com.micahmartin.pendulums.ui.pendulum_colors,cljs.core.mod.call(null,idx,cljs.core.count.call(null,com.micahmartin.pendulums.ui.pendulum_colors)));
var vec__6885_6961 = com.micahmartin.pendulums.ui.hex__GT_rgb.call(null,color_6960);
var r_6962 = cljs.core.nth.call(null,vec__6885_6961,(0),null);
var g_6963 = cljs.core.nth.call(null,vec__6885_6961,(1),null);
var b_6964 = cljs.core.nth.call(null,vec__6885_6961,(2),null);
var seq__6888_6965 = cljs.core.seq.call(null,trail);
var chunk__6889_6966 = null;
var count__6890_6967 = (0);
var i__6891_6968 = (0);
while(true){
if((i__6891_6968 < count__6890_6967)){
var map__6900_6969 = cljs.core._nth.call(null,chunk__6889_6966,i__6891_6968);
var map__6900_6970__$1 = cljs.core.__destructure_map.call(null,map__6900_6969);
var pos_6971 = cljs.core.get.call(null,map__6900_6970__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var time_6972 = cljs.core.get.call(null,map__6900_6970__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var age_6973 = (now - time_6972);
var alpha_6974 = cljs.core.max.call(null,0.0,(1.0 - (age_6973 / duration_ms)));
var vec__6901_6975 = com.micahmartin.pendulums.ui.world__GT_screen.call(null,pos_6971,zoom,pan,canvas_width);
var sx_6976 = cljs.core.nth.call(null,vec__6901_6975,(0),null);
var sy_6977 = cljs.core.nth.call(null,vec__6901_6975,(1),null);
var radius_6978 = (com.micahmartin.pendulums.ui.trail_dot_radius * zoom);
if((alpha_6974 > 0.0)){
(ctx.fillStyle = (""+"rgba("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(r_6962)+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(g_6963)+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(b_6964)+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(alpha_6974)+")"));

ctx.beginPath();

ctx.arc(sx_6976,sy_6977,radius_6978,(0),((2) * Math.PI));

ctx.fill();
} else {
}


var G__6979 = seq__6888_6965;
var G__6980 = chunk__6889_6966;
var G__6981 = count__6890_6967;
var G__6982 = (i__6891_6968 + (1));
seq__6888_6965 = G__6979;
chunk__6889_6966 = G__6980;
count__6890_6967 = G__6981;
i__6891_6968 = G__6982;
continue;
} else {
var temp__5825__auto___6983__$1 = cljs.core.seq.call(null,seq__6888_6965);
if(temp__5825__auto___6983__$1){
var seq__6888_6984__$1 = temp__5825__auto___6983__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6888_6984__$1)){
var c__5673__auto___6985 = cljs.core.chunk_first.call(null,seq__6888_6984__$1);
var G__6986 = cljs.core.chunk_rest.call(null,seq__6888_6984__$1);
var G__6987 = c__5673__auto___6985;
var G__6988 = cljs.core.count.call(null,c__5673__auto___6985);
var G__6989 = (0);
seq__6888_6965 = G__6986;
chunk__6889_6966 = G__6987;
count__6890_6967 = G__6988;
i__6891_6968 = G__6989;
continue;
} else {
var map__6904_6990 = cljs.core.first.call(null,seq__6888_6984__$1);
var map__6904_6991__$1 = cljs.core.__destructure_map.call(null,map__6904_6990);
var pos_6992 = cljs.core.get.call(null,map__6904_6991__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var time_6993 = cljs.core.get.call(null,map__6904_6991__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var age_6994 = (now - time_6993);
var alpha_6995 = cljs.core.max.call(null,0.0,(1.0 - (age_6994 / duration_ms)));
var vec__6905_6996 = com.micahmartin.pendulums.ui.world__GT_screen.call(null,pos_6992,zoom,pan,canvas_width);
var sx_6997 = cljs.core.nth.call(null,vec__6905_6996,(0),null);
var sy_6998 = cljs.core.nth.call(null,vec__6905_6996,(1),null);
var radius_6999 = (com.micahmartin.pendulums.ui.trail_dot_radius * zoom);
if((alpha_6995 > 0.0)){
(ctx.fillStyle = (""+"rgba("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(r_6962)+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(g_6963)+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(b_6964)+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(alpha_6995)+")"));

ctx.beginPath();

ctx.arc(sx_6997,sy_6998,radius_6999,(0),((2) * Math.PI));

ctx.fill();
} else {
}


var G__7000 = cljs.core.next.call(null,seq__6888_6984__$1);
var G__7001 = null;
var G__7002 = (0);
var G__7003 = (0);
seq__6888_6965 = G__7000;
chunk__6889_6966 = G__7001;
count__6890_6967 = G__7002;
i__6891_6968 = G__7003;
continue;
}
} else {
}
}
break;
}


var G__7004 = cljs.core.next.call(null,seq__6800__$1);
var G__7005 = null;
var G__7006 = (0);
var G__7007 = (0);
seq__6800 = G__7004;
chunk__6801 = G__7005;
count__6802 = G__7006;
i__6803 = G__7007;
continue;
}
} else {
return null;
}
}
break;
}
});
com.micahmartin.pendulums.core.draw_pendulum_system = (function com$micahmartin$pendulums$core$draw_pendulum_system(ctx,system,running,trails,trail_duration,zoom,pan,canvas_width,canvas_height,editing_angle){
var positions = com.micahmartin.pendulums.engine.bob_positions.call(null,system);
var pendulums = new cljs.core.Keyword(null,"pendulums","pendulums",191378563).cljs$core$IFn$_invoke$arity$1(system);
var vec__7008 = com.micahmartin.pendulums.ui.pivot_screen_pos.call(null,zoom,pan,canvas_width);
var piv_sx = cljs.core.nth.call(null,vec__7008,(0),null);
var piv_sy = cljs.core.nth.call(null,vec__7008,(1),null);
ctx.clearRect((0),(0),canvas_width,canvas_height);

com.micahmartin.pendulums.core.draw_trails.call(null,ctx,trails,trail_duration,zoom,pan,canvas_width);

var prev_x_7025 = piv_sx;
var prev_y_7026 = piv_sy;
var idx_7027 = (0);
var bobs_7028 = positions;
while(true){
if(cljs.core.seq.call(null,bobs_7028)){
var vec__7018_7029 = cljs.core.first.call(null,bobs_7028);
var x_7030 = cljs.core.nth.call(null,vec__7018_7029,(0),null);
var y_7031 = cljs.core.nth.call(null,vec__7018_7029,(1),null);
var vec__7021_7032 = com.micahmartin.pendulums.ui.world__GT_screen.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_7030,y_7031], null),zoom,pan,canvas_width);
var screen_x_7033 = cljs.core.nth.call(null,vec__7021_7032,(0),null);
var screen_y_7034 = cljs.core.nth.call(null,vec__7021_7032,(1),null);
var color_7035 = cljs.core.nth.call(null,com.micahmartin.pendulums.core.colors,cljs.core.mod.call(null,idx_7027,cljs.core.count.call(null,com.micahmartin.pendulums.core.colors)));
(ctx.strokeStyle = com.micahmartin.pendulums.ui.arm_color_css);

(ctx.lineWidth = (com.micahmartin.pendulums.ui.arm_stroke_width * zoom));

ctx.beginPath();

ctx.moveTo(prev_x_7025,prev_y_7026);

ctx.lineTo(screen_x_7033,screen_y_7034);

ctx.stroke();

var map__7024_7036 = cljs.core.nth.call(null,pendulums,idx_7027);
var map__7024_7037__$1 = cljs.core.__destructure_map.call(null,map__7024_7036);
var mass_7038 = cljs.core.get.call(null,map__7024_7037__$1,new cljs.core.Keyword(null,"mass","mass",-2138950046));
var base_radius_7039 = com.micahmartin.pendulums.ui.bob_radius.call(null,mass_7038);
var radius_7040 = (base_radius_7039 * zoom);
(ctx.fillStyle = color_7035);

ctx.beginPath();

ctx.arc(screen_x_7033,screen_y_7034,radius_7040,(0),((2) * Math.PI));

ctx.fill();

(ctx.strokeStyle = com.micahmartin.pendulums.ui.bob_outline_color_css);

(ctx.lineWidth = (com.micahmartin.pendulums.ui.bob_outline_width * zoom));

ctx.stroke();

var G__7041 = screen_x_7033;
var G__7042 = screen_y_7034;
var G__7043 = (idx_7027 + (1));
var G__7044 = cljs.core.rest.call(null,bobs_7028);
prev_x_7025 = G__7041;
prev_y_7026 = G__7042;
idx_7027 = G__7043;
bobs_7028 = G__7044;
continue;
} else {
}
break;
}

var pivot_radius_7045 = (com.micahmartin.pendulums.ui.pivot_radius * zoom);
(ctx.fillStyle = com.micahmartin.pendulums.ui.pivot_color_css);

ctx.beginPath();

ctx.arc(piv_sx,piv_sy,pivot_radius_7045,(0),((2) * Math.PI));

ctx.fill();

return com.micahmartin.pendulums.core.draw_angle_display.call(null,ctx,system,editing_angle);
});
/**
 * Updates canvas size to fill the container. Sets dimensions directly on
 * the canvas DOM element to avoid React re-render clearing the canvas.
 */
com.micahmartin.pendulums.core.update_canvas_size_BANG_ = (function com$micahmartin$pendulums$core$update_canvas_size_BANG_(container_ref,canvas_ref){
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

return cljs.core.swap_BANG_.call(null,com.micahmartin.pendulums.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"canvas-width","canvas-width",1321931102),w,new cljs.core.Keyword(null,"canvas-height","canvas-height",291287231),h);
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
com.micahmartin.pendulums.core.canvas_component = (function com$micahmartin$pendulums$core$canvas_component(){
var canvas_ref = reagent.core.atom.call(null,null);
var container_ref = reagent.core.atom.call(null,null);
var resize_handler = cljs.core.atom.call(null,null);
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"pendulum-canvas",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (_){
cljs.core.reset_BANG_.call(null,resize_handler,(function (){
return com.micahmartin.pendulums.core.update_canvas_size_BANG_.call(null,container_ref,canvas_ref);
}));

window.addEventListener("resize",cljs.core.deref.call(null,resize_handler));

var temp__5825__auto__ = cljs.core.deref.call(null,canvas_ref);
if(cljs.core.truth_(temp__5825__auto__)){
var canvas = temp__5825__auto__;
var ctx = canvas.getContext("2d");
cljs.core.add_watch.call(null,com.micahmartin.pendulums.core.app_state,new cljs.core.Keyword(null,"render","render",-1408033454),(function (___$1,___$2,___$3,p__7053){
var map__7054 = p__7053;
var map__7054__$1 = cljs.core.__destructure_map.call(null,map__7054);
var trails = cljs.core.get.call(null,map__7054__$1,new cljs.core.Keyword(null,"trails","trails",-1542689191));
var canvas_width = cljs.core.get.call(null,map__7054__$1,new cljs.core.Keyword(null,"canvas-width","canvas-width",1321931102));
var canvas_height = cljs.core.get.call(null,map__7054__$1,new cljs.core.Keyword(null,"canvas-height","canvas-height",291287231));
var editing_angle = cljs.core.get.call(null,map__7054__$1,new cljs.core.Keyword(null,"editing-angle","editing-angle",1617361729));
var zoom = cljs.core.get.call(null,map__7054__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var system = cljs.core.get.call(null,map__7054__$1,new cljs.core.Keyword(null,"system","system",-29381724));
var pan = cljs.core.get.call(null,map__7054__$1,new cljs.core.Keyword(null,"pan","pan",-307712792));
var running = cljs.core.get.call(null,map__7054__$1,new cljs.core.Keyword(null,"running","running",1554969103));
var trail_duration = cljs.core.get.call(null,map__7054__$1,new cljs.core.Keyword(null,"trail-duration","trail-duration",1730204306));
return com.micahmartin.pendulums.core.draw_pendulum_system.call(null,ctx,system,running,trails,trail_duration,zoom,pan,canvas_width,canvas_height,editing_angle);
}));

com.micahmartin.pendulums.core.update_canvas_size_BANG_.call(null,container_ref,canvas_ref);

var map__7055_7057 = cljs.core.deref.call(null,com.micahmartin.pendulums.core.app_state);
var map__7055_7058__$1 = cljs.core.__destructure_map.call(null,map__7055_7057);
var trails_7059 = cljs.core.get.call(null,map__7055_7058__$1,new cljs.core.Keyword(null,"trails","trails",-1542689191));
var canvas_width_7060 = cljs.core.get.call(null,map__7055_7058__$1,new cljs.core.Keyword(null,"canvas-width","canvas-width",1321931102));
var canvas_height_7061 = cljs.core.get.call(null,map__7055_7058__$1,new cljs.core.Keyword(null,"canvas-height","canvas-height",291287231));
var editing_angle_7062 = cljs.core.get.call(null,map__7055_7058__$1,new cljs.core.Keyword(null,"editing-angle","editing-angle",1617361729));
var zoom_7063 = cljs.core.get.call(null,map__7055_7058__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var system_7064 = cljs.core.get.call(null,map__7055_7058__$1,new cljs.core.Keyword(null,"system","system",-29381724));
var pan_7065 = cljs.core.get.call(null,map__7055_7058__$1,new cljs.core.Keyword(null,"pan","pan",-307712792));
var running_7066 = cljs.core.get.call(null,map__7055_7058__$1,new cljs.core.Keyword(null,"running","running",1554969103));
var trail_duration_7067 = cljs.core.get.call(null,map__7055_7058__$1,new cljs.core.Keyword(null,"trail-duration","trail-duration",1730204306));
com.micahmartin.pendulums.core.draw_pendulum_system.call(null,ctx,system_7064,running_7066,trails_7059,trail_duration_7067,zoom_7063,pan_7065,canvas_width_7060,canvas_height_7061,editing_angle_7062);

return com.micahmartin.pendulums.core.start_simulation_BANG_.call(null);
} else {
return null;
}
}),new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),(function (_){
cljs.core.remove_watch.call(null,com.micahmartin.pendulums.core.app_state,new cljs.core.Keyword(null,"render","render",-1408033454));

if(cljs.core.truth_(cljs.core.deref.call(null,resize_handler))){
return window.removeEventListener("resize",cljs.core.deref.call(null,resize_handler));
} else {
return null;
}
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
var canvas = cljs.core.deref.call(null,canvas_ref);
var map__7056 = cljs.core.deref.call(null,com.micahmartin.pendulums.core.app_state);
var map__7056__$1 = cljs.core.__destructure_map.call(null,map__7056);
var running = cljs.core.get.call(null,map__7056__$1,new cljs.core.Keyword(null,"running","running",1554969103));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.canvas-container","div.canvas-container",1415599719),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref","ref",1289896967),(function (p1__7046_SHARP_){
return cljs.core.reset_BANG_.call(null,container_ref,p1__7046_SHARP_);
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"ref","ref",1289896967),(function (p1__7047_SHARP_){
return cljs.core.reset_BANG_.call(null,canvas_ref,p1__7047_SHARP_);
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),(cljs.core.truth_(running)?"default":"pointer"),new cljs.core.Keyword(null,"display","display",242065432),"block"], null),new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),(function (p1__7048_SHARP_){
if(cljs.core.truth_(canvas)){
return com.micahmartin.pendulums.core.handle_mouse_down.call(null,p1__7048_SHARP_,canvas);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-mouse-move","on-mouse-move",-1386320874),(function (p1__7049_SHARP_){
if(cljs.core.truth_(canvas)){
return com.micahmartin.pendulums.core.handle_mouse_move.call(null,p1__7049_SHARP_,canvas);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-mouse-up","on-mouse-up",-1340533320),(function (p1__7050_SHARP_){
if(cljs.core.truth_(canvas)){
return com.micahmartin.pendulums.core.handle_mouse_up.call(null,p1__7050_SHARP_,canvas);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),(function (p1__7051_SHARP_){
if(cljs.core.truth_(canvas)){
return com.micahmartin.pendulums.core.handle_mouse_up.call(null,p1__7051_SHARP_,canvas);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-wheel","on-wheel",-1971630708),(function (p1__7052_SHARP_){
if(cljs.core.truth_(canvas)){
return com.micahmartin.pendulums.core.handle_mouse_wheel.call(null,p1__7052_SHARP_,canvas);
} else {
return null;
}
})], null)], null)], null);
})], null));
});
com.micahmartin.pendulums.core.angle_input_component = (function com$micahmartin$pendulums$core$angle_input_component(){
var map__7069 = cljs.core.deref.call(null,com.micahmartin.pendulums.core.app_state);
var map__7069__$1 = cljs.core.__destructure_map.call(null,map__7069);
var editing_angle = cljs.core.get.call(null,map__7069__$1,new cljs.core.Keyword(null,"editing-angle","editing-angle",1617361729));
var angle_input = cljs.core.get.call(null,map__7069__$1,new cljs.core.Keyword(null,"angle-input","angle-input",712036151));
if(cljs.core.truth_(editing_angle)){
var header_y = (com.micahmartin.pendulums.ui.angle_display_padding + com.micahmartin.pendulums.ui.angle_display_line_height);
var row_y = (header_y + ((editing_angle + (1)) * com.micahmartin.pendulums.ui.angle_display_line_height));
var input_top = (row_y - (14));
var input_left = (50);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.angle-input-overlay","div.angle-input-overlay",-1861249506),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"top","top",-1856271961),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_top)+"px"),new cljs.core.Keyword(null,"left","left",-399115937),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_left)+"px")], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),angle_input,new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"width","width",-384071477),"60px",new cljs.core.Keyword(null,"padding","padding",1660304693),"2px 4px",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"monospace",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#121212",new cljs.core.Keyword(null,"color","color",1011675173),"#c8c8c8",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #404040",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"2px"], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__7068_SHARP_){
return cljs.core.swap_BANG_.call(null,com.micahmartin.pendulums.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"angle-input","angle-input",712036151),p1__7068_SHARP_.target.value);
}),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),(function (e){
var G__7070 = e.key;
switch (G__7070) {
case "Enter":
return com.micahmartin.pendulums.core.submit_angle_edit_BANG_.call(null);

break;
case "Escape":
return com.micahmartin.pendulums.core.cancel_angle_edit_BANG_.call(null);

break;
default:
return null;

}
}),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),com.micahmartin.pendulums.core.cancel_angle_edit_BANG_], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"2px",new cljs.core.Keyword(null,"color","color",1011675173),"#c8c8c8",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"monospace",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px"], null)], null),"\u00B0"], null)], null);
} else {
return null;
}
});
com.micahmartin.pendulums.core.set_trail_duration_BANG_ = (function com$micahmartin$pendulums$core$set_trail_duration_BANG_(duration){
return cljs.core.swap_BANG_.call(null,com.micahmartin.pendulums.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"trail-duration","trail-duration",1730204306),duration);
});
com.micahmartin.pendulums.core.play_pause_button = (function com$micahmartin$pendulums$core$play_pause_button(){
var map__7072 = cljs.core.deref.call(null,com.micahmartin.pendulums.core.app_state);
var map__7072__$1 = cljs.core.__destructure_map.call(null,map__7072);
var running = cljs.core.get.call(null,map__7072__$1,new cljs.core.Keyword(null,"running","running",1554969103));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.play-pause","button.play-pause",-473510631),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),com.micahmartin.pendulums.core.toggle_simulation_BANG_,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"transform","transform",1381301764),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"left","left",-399115937)],["center","translateX(-50%)","#000","20px","18px",(cljs.core.truth_(running)?"rgba(245, 158, 11, 0.9)":"rgba(34, 197, 94, 0.9)"),"48px","pointer","0","center","flex","absolute","none","50%","48px","50%"])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"inline-block",new cljs.core.Keyword(null,"transform","transform",1381301764),(cljs.core.truth_(running)?"none":"translateX(2px)")], null)], null),(cljs.core.truth_(running)?"\u23F8":"\u25B6")], null)], null);
});
com.micahmartin.pendulums.core.center_button = (function com$micahmartin$pendulums$core$center_button(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),com.micahmartin.pendulums.core.center_view_BANG_,new cljs.core.Keyword(null,"title","title",636505583),"Center screen",new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"height","height",1025178622)],["center","#fafaf9","18px","10px","rgba(64, 64, 64, 0.8)","36px","pointer","center","10px","flex","absolute","none","50%","36px"])], null),"\u25CE"], null);
});
com.micahmartin.pendulums.core.add_remove_buttons = (function com$micahmartin$pendulums$core$add_remove_buttons(){
var map__7073 = cljs.core.deref.call(null,com.micahmartin.pendulums.core.app_state);
var map__7073__$1 = cljs.core.__destructure_map.call(null,map__7073);
var system = cljs.core.get.call(null,map__7073__$1,new cljs.core.Keyword(null,"system","system",-29381724));
var n = com.micahmartin.pendulums.engine.pendulum_count.call(null,system);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"top","top",-1856271961),"10px",new cljs.core.Keyword(null,"left","left",-399115937),"50%",new cljs.core.Keyword(null,"transform","transform",1381301764),"translateX(-50%)",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"gap","gap",80255254),"8px",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),com.micahmartin.pendulums.core.remove_pendulum_BANG_,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(n < (2)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"padding","padding",1660304693),"4px 8px",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgba(64, 64, 64, 0.8)",new cljs.core.Keyword(null,"border","border",1444987323),"none",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"4px",new cljs.core.Keyword(null,"color","color",1011675173),"#fafaf9"], null)], null),"-"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"#c8c8c8",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px"], null)], null),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)+" pendulums")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),com.micahmartin.pendulums.core.add_pendulum_BANG_,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"padding","padding",1660304693),"4px 8px",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgba(64, 64, 64, 0.8)",new cljs.core.Keyword(null,"border","border",1444987323),"none",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"4px",new cljs.core.Keyword(null,"color","color",1011675173),"#fafaf9"], null)], null),"+"], null)], null);
});
com.micahmartin.pendulums.core.trail_slider = (function com$micahmartin$pendulums$core$trail_slider(){
var map__7075 = cljs.core.deref.call(null,com.micahmartin.pendulums.core.app_state);
var map__7075__$1 = cljs.core.__destructure_map.call(null,map__7075);
var trail_duration = cljs.core.get.call(null,map__7075__$1,new cljs.core.Keyword(null,"trail-duration","trail-duration",1730204306));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"top","top",-1856271961),"42px",new cljs.core.Keyword(null,"left","left",-399115937),"50%",new cljs.core.Keyword(null,"transform","transform",1381301764),"translateX(-50%)",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"gap","gap",80255254),"8px",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"#c8c8c8",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px"], null)], null),"Trail:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"range",new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"max","max",61366548),(100),new cljs.core.Keyword(null,"value","value",305978217),(trail_duration * (10)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"80px"], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__7074_SHARP_){
return com.micahmartin.pendulums.core.set_trail_duration_BANG_.call(null,(parseInt(p1__7074_SHARP_.target.value) / 10.0));
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"#c8c8c8",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px"], null)], null),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(trail_duration.toFixed((1)))+"s")], null)], null);
});
com.micahmartin.pendulums.core.app_component = (function com$micahmartin$pendulums$core$app_component(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#app","div#app",840279329),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.simulation-container","div.simulation-container",716718285),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.micahmartin.pendulums.core.canvas_component], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.micahmartin.pendulums.core.angle_input_component], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.micahmartin.pendulums.core.add_remove_buttons], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.micahmartin.pendulums.core.trail_slider], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.micahmartin.pendulums.core.center_button], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.micahmartin.pendulums.core.play_pause_button], null)], null)], null);
});
com.micahmartin.pendulums.core.init = (function com$micahmartin$pendulums$core$init(){
return reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.micahmartin.pendulums.core.app_component], null),document.getElementById("app"));
});
goog.exportSymbol('com.micahmartin.pendulums.core.init', com.micahmartin.pendulums.core.init);
com.micahmartin.pendulums.core.reload = (function com$micahmartin$pendulums$core$reload(){
return com.micahmartin.pendulums.core.init.call(null);
});

//# sourceMappingURL=core.js.map
