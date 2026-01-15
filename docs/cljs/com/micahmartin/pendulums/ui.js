// Compiled by ClojureScript 1.12.134 {:optimizations :none}
goog.provide('com.micahmartin.pendulums.ui');
goog.require('cljs.core');
goog.require('com.micahmartin.pendulums.math');
goog.require('com.micahmartin.pendulums.engine');

/**
 * Protocol for platform-specific UI implementations.
 * @interface
 */
com.micahmartin.pendulums.ui.UI = function(){};

var com$micahmartin$pendulums$ui$UI$start$dyn_6553 = (function (this$){
var x__5498__auto__ = (((this$ == null))?null:this$);
var m__5499__auto__ = (com.micahmartin.pendulums.ui.start[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return m__5499__auto__.call(null,this$);
} else {
var m__5497__auto__ = (com.micahmartin.pendulums.ui.start["_"]);
if((!((m__5497__auto__ == null)))){
return m__5497__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"UI.start",this$);
}
}
});
/**
 * Starts the UI rendering/animation loop.
 */
com.micahmartin.pendulums.ui.start = (function com$micahmartin$pendulums$ui$start(this$){
if((((!((this$ == null)))) && ((!((this$.com$micahmartin$pendulums$ui$UI$start$arity$1 == null)))))){
return this$.com$micahmartin$pendulums$ui$UI$start$arity$1(this$);
} else {
return com$micahmartin$pendulums$ui$UI$start$dyn_6553.call(null,this$);
}
});

var com$micahmartin$pendulums$ui$UI$stop$dyn_6554 = (function (this$){
var x__5498__auto__ = (((this$ == null))?null:this$);
var m__5499__auto__ = (com.micahmartin.pendulums.ui.stop[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return m__5499__auto__.call(null,this$);
} else {
var m__5497__auto__ = (com.micahmartin.pendulums.ui.stop["_"]);
if((!((m__5497__auto__ == null)))){
return m__5497__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"UI.stop",this$);
}
}
});
/**
 * Stops the UI rendering/animation loop.
 */
com.micahmartin.pendulums.ui.stop = (function com$micahmartin$pendulums$ui$stop(this$){
if((((!((this$ == null)))) && ((!((this$.com$micahmartin$pendulums$ui$UI$stop$arity$1 == null)))))){
return this$.com$micahmartin$pendulums$ui$UI$stop$arity$1(this$);
} else {
return com$micahmartin$pendulums$ui$UI$stop$dyn_6554.call(null,this$);
}
});

/**
 * Starts the simulation using the UI instance stored in *state.
 */
com.micahmartin.pendulums.ui.start_simulation_BANG_ = (function com$micahmartin$pendulums$ui$start_simulation_BANG_(_STAR_state){
var temp__5825__auto__ = new cljs.core.Keyword(null,"ui","ui",-469653645).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,_STAR_state));
if(cljs.core.truth_(temp__5825__auto__)){
var ui = temp__5825__auto__;
return com.micahmartin.pendulums.ui.start.call(null,ui);
} else {
return null;
}
});
/**
 * Stops the simulation using the UI instance stored in *state.
 */
com.micahmartin.pendulums.ui.stop_simulation_BANG_ = (function com$micahmartin$pendulums$ui$stop_simulation_BANG_(_STAR_state){
var temp__5825__auto__ = new cljs.core.Keyword(null,"ui","ui",-469653645).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,_STAR_state));
if(cljs.core.truth_(temp__5825__auto__)){
var ui = temp__5825__auto__;
return com.micahmartin.pendulums.ui.stop.call(null,ui);
} else {
return null;
}
});
/**
 * Toggles the simulation between running and stopped states.
 */
com.micahmartin.pendulums.ui.toggle_simulation_BANG_ = (function com$micahmartin$pendulums$ui$toggle_simulation_BANG_(_STAR_state){
if(cljs.core.truth_(new cljs.core.Keyword(null,"running?","running?",-257884763).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,_STAR_state)))){
return com.micahmartin.pendulums.ui.stop_simulation_BANG_.call(null,_STAR_state);
} else {
return com.micahmartin.pendulums.ui.start_simulation_BANG_.call(null,_STAR_state);
}
});
com.micahmartin.pendulums.ui.dt = 0.016;
com.micahmartin.pendulums.ui.scale = 100.0;
/**
 * Advances the simulation by one time step. Takes current state and timestamp,
 * returns updated state with new system and trails.
 */
com.micahmartin.pendulums.ui.step_state = (function com$micahmartin$pendulums$ui$step_state(state,now){
var map__6555 = state;
var map__6555__$1 = cljs.core.__destructure_map.call(null,map__6555);
var system = cljs.core.get.call(null,map__6555__$1,new cljs.core.Keyword(null,"system","system",-29381724));
var trail_duration = cljs.core.get.call(null,map__6555__$1,new cljs.core.Keyword(null,"trail-duration","trail-duration",1730204306));
var trails = cljs.core.get.call(null,map__6555__$1,new cljs.core.Keyword(null,"trails","trails",-1542689191));
var vec__6556 = com.micahmartin.pendulums.engine.step_with_trails.call(null,system,com.micahmartin.pendulums.ui.dt,trail_duration,trails,now);
var new_system = cljs.core.nth.call(null,vec__6556,(0),null);
var new_trails = cljs.core.nth.call(null,vec__6556,(1),null);
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"system","system",-29381724),new_system,new cljs.core.Keyword(null,"trails","trails",-1542689191),new_trails);
});
com.micahmartin.pendulums.ui.default_canvas_width = (800);
com.micahmartin.pendulums.ui.default_canvas_height = (600);
com.micahmartin.pendulums.ui.pivot_y_offset = 150.0;
com.micahmartin.pendulums.ui.bob_base_radius = 8.0;
com.micahmartin.pendulums.ui.bob_radius_per_mass = 4.0;
com.micahmartin.pendulums.ui.arm_stroke_width = 3.0;
com.micahmartin.pendulums.ui.bob_outline_width = 2.0;
com.micahmartin.pendulums.ui.pivot_radius = 6.0;
com.micahmartin.pendulums.ui.trail_dot_radius = 2.0;
/**
 * Calculates bob radius based on mass.
 */
com.micahmartin.pendulums.ui.bob_radius = (function com$micahmartin$pendulums$ui$bob_radius(mass){
return (com.micahmartin.pendulums.ui.bob_base_radius + (com.micahmartin.pendulums.ui.bob_radius_per_mass * mass));
});
com.micahmartin.pendulums.ui.pendulum_colors = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(15680580),(3900150),(2278750),(16347926),(11032055),(15381256),(440020),(15485081),(6514417),(8702998)], null);
com.micahmartin.pendulums.ui.arm_color = (5395026);
com.micahmartin.pendulums.ui.bob_outline_color = (16777215);
com.micahmartin.pendulums.ui.pivot_color = (7566195);
com.micahmartin.pendulums.ui.bg_color = (1184274);
com.micahmartin.pendulums.ui.btn_bg_color = (4210752);
com.micahmartin.pendulums.ui.btn_fg_color = (16777215);
com.micahmartin.pendulums.ui.text_color = (13158600);
/**
 * Converts a hex integer to a CSS color string.
 */
com.micahmartin.pendulums.ui.hex__GT_css = (function com$micahmartin$pendulums$ui$hex__GT_css(hex){
return (""+"#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.toString((16)).padStart((6),"0")));
});
/**
 * Converts a hex integer to [r g b] vector.
 */
com.micahmartin.pendulums.ui.hex__GT_rgb = (function com$micahmartin$pendulums$ui$hex__GT_rgb(hex){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((hex >> (16)) & (255)),((hex >> (8)) & (255)),(hex & (255))], null);
});
com.micahmartin.pendulums.ui.angle_display_padding = (10);
com.micahmartin.pendulums.ui.angle_display_line_height = (20);
com.micahmartin.pendulums.ui.angle_display_row_width = (180);
com.micahmartin.pendulums.ui.default_zoom = 1.0;
com.micahmartin.pendulums.ui.default_pan = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,0.0], null);
com.micahmartin.pendulums.ui.default_trail_duration = 3.0;
com.micahmartin.pendulums.ui.initial_pendulums = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"theta","theta",-427510258),0.8,new cljs.core.Keyword(null,"length","length",588987862),1.0], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"theta","theta",-427510258),0.5,new cljs.core.Keyword(null,"length","length",588987862),1.0], null)], null);
com.micahmartin.pendulums.ui.new_pendulum_config = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"theta","theta",-427510258),0.3,new cljs.core.Keyword(null,"length","length",588987862),1.0], null);
com.micahmartin.pendulums.ui.default_state = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"zoom","zoom",-1827487038),new cljs.core.Keyword(null,"pan-start","pan-start",455057796),new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword(null,"system","system",-29381724),new cljs.core.Keyword(null,"running?","running?",-257884763),new cljs.core.Keyword(null,"pan","pan",-307712792),new cljs.core.Keyword(null,"trail-duration","trail-duration",1730204306),new cljs.core.Keyword(null,"panning?","panning?",-454250826),new cljs.core.Keyword(null,"trails","trails",-1542689191),new cljs.core.Keyword(null,"dragging?","dragging?",-995941410)],[com.micahmartin.pendulums.ui.default_zoom,null,null,com.micahmartin.pendulums.engine.make_system.call(null,cljs.core.mapv.call(null,com.micahmartin.pendulums.engine.make_pendulum,com.micahmartin.pendulums.ui.initial_pendulums)),false,com.micahmartin.pendulums.ui.default_pan,com.micahmartin.pendulums.ui.default_trail_duration,false,cljs.core.PersistentVector.EMPTY,false]);
com.micahmartin.pendulums.ui.pendulum_colors_css = cljs.core.mapv.call(null,com.micahmartin.pendulums.ui.hex__GT_css,com.micahmartin.pendulums.ui.pendulum_colors);
com.micahmartin.pendulums.ui.arm_color_css = com.micahmartin.pendulums.ui.hex__GT_css.call(null,com.micahmartin.pendulums.ui.arm_color);
com.micahmartin.pendulums.ui.bob_outline_color_css = com.micahmartin.pendulums.ui.hex__GT_css.call(null,com.micahmartin.pendulums.ui.bob_outline_color);
com.micahmartin.pendulums.ui.pivot_color_css = com.micahmartin.pendulums.ui.hex__GT_css.call(null,com.micahmartin.pendulums.ui.pivot_color);
com.micahmartin.pendulums.ui.bg_color_css = com.micahmartin.pendulums.ui.hex__GT_css.call(null,com.micahmartin.pendulums.ui.bg_color);
com.micahmartin.pendulums.ui.btn_bg_color_css = com.micahmartin.pendulums.ui.hex__GT_css.call(null,com.micahmartin.pendulums.ui.btn_bg_color);
com.micahmartin.pendulums.ui.btn_fg_color_css = com.micahmartin.pendulums.ui.hex__GT_css.call(null,com.micahmartin.pendulums.ui.btn_fg_color);
com.micahmartin.pendulums.ui.text_color_css = com.micahmartin.pendulums.ui.hex__GT_css.call(null,com.micahmartin.pendulums.ui.text_color);
/**
 * Returns [pivot-x pivot-y] based on canvas width.
 */
com.micahmartin.pendulums.ui.get_pivot = (function com$micahmartin$pendulums$ui$get_pivot(canvas_width){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(canvas_width / (2)),com.micahmartin.pendulums.ui.pivot_y_offset], null);
});
/**
 * Converts world (physics) coordinates to screen coordinates.
 */
com.micahmartin.pendulums.ui.world__GT_screen = (function com$micahmartin$pendulums$ui$world__GT_screen(p__6559,zoom,p__6560,canvas_width){
var vec__6561 = p__6559;
var wx = cljs.core.nth.call(null,vec__6561,(0),null);
var wy = cljs.core.nth.call(null,vec__6561,(1),null);
var vec__6564 = p__6560;
var pan_x = cljs.core.nth.call(null,vec__6564,(0),null);
var pan_y = cljs.core.nth.call(null,vec__6564,(1),null);
var vec__6567 = com.micahmartin.pendulums.ui.get_pivot.call(null,canvas_width);
var pivot_x = cljs.core.nth.call(null,vec__6567,(0),null);
var pivot_y = cljs.core.nth.call(null,vec__6567,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((pivot_x + (wx * com.micahmartin.pendulums.ui.scale)) * zoom) + pan_x),(((pivot_y - (wy * com.micahmartin.pendulums.ui.scale)) * zoom) + pan_y)], null);
});
/**
 * Converts screen coordinates to world (physics) coordinates.
 */
com.micahmartin.pendulums.ui.screen__GT_world = (function com$micahmartin$pendulums$ui$screen__GT_world(p__6570,zoom,p__6571,canvas_width){
var vec__6572 = p__6570;
var sx = cljs.core.nth.call(null,vec__6572,(0),null);
var sy = cljs.core.nth.call(null,vec__6572,(1),null);
var vec__6575 = p__6571;
var pan_x = cljs.core.nth.call(null,vec__6575,(0),null);
var pan_y = cljs.core.nth.call(null,vec__6575,(1),null);
var vec__6578 = com.micahmartin.pendulums.ui.get_pivot.call(null,canvas_width);
var pivot_x = cljs.core.nth.call(null,vec__6578,(0),null);
var pivot_y = cljs.core.nth.call(null,vec__6578,(1),null);
var unzoomed_x = ((sx - pan_x) / zoom);
var unzoomed_y = ((sy - pan_y) / zoom);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((unzoomed_x - pivot_x) / com.micahmartin.pendulums.ui.scale),((pivot_y - unzoomed_y) / com.micahmartin.pendulums.ui.scale)], null);
});
/**
 * Returns the screen position of the main pivot point.
 */
com.micahmartin.pendulums.ui.pivot_screen_pos = (function com$micahmartin$pendulums$ui$pivot_screen_pos(zoom,p__6581,canvas_width){
var vec__6582 = p__6581;
var pan_x = cljs.core.nth.call(null,vec__6582,(0),null);
var pan_y = cljs.core.nth.call(null,vec__6582,(1),null);
var vec__6585 = com.micahmartin.pendulums.ui.get_pivot.call(null,canvas_width);
var pivot_x = cljs.core.nth.call(null,vec__6585,(0),null);
var pivot_y = cljs.core.nth.call(null,vec__6585,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((pivot_x * zoom) + pan_x),((pivot_y * zoom) + pan_y)], null);
});
/**
 * Returns screen coordinates of all bobs.
 */
com.micahmartin.pendulums.ui.bob_screen_positions = (function com$micahmartin$pendulums$ui$bob_screen_positions(system,zoom,pan,canvas_width){
return cljs.core.mapv.call(null,(function (p__6588){
var vec__6589 = p__6588;
var x = cljs.core.nth.call(null,vec__6589,(0),null);
var y = cljs.core.nth.call(null,vec__6589,(1),null);
return com.micahmartin.pendulums.ui.world__GT_screen.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),zoom,pan,canvas_width);
}),com.micahmartin.pendulums.engine.bob_positions.call(null,system));
});
/**
 * Returns the pivot point (screen coords) for pendulum at idx.
 * For idx 0, it's the main pivot. For idx > 0, it's the previous bob.
 */
com.micahmartin.pendulums.ui.pivot_for_pendulum = (function com$micahmartin$pendulums$ui$pivot_for_pendulum(system,idx,zoom,pan,canvas_width){
if((idx === (0))){
return com.micahmartin.pendulums.ui.pivot_screen_pos.call(null,zoom,pan,canvas_width);
} else {
var positions = com.micahmartin.pendulums.ui.bob_screen_positions.call(null,system,zoom,pan,canvas_width);
return cljs.core.nth.call(null,positions,(idx - (1)));
}
});
/**
 * Returns index of bob at (mx, my) or nil if none hit.
 */
com.micahmartin.pendulums.ui.hit_test_bob = (function com$micahmartin$pendulums$ui$hit_test_bob(system,mx,my,zoom,pan,canvas_width){
var positions = com.micahmartin.pendulums.ui.bob_screen_positions.call(null,system,zoom,pan,canvas_width);
var pendulums = new cljs.core.Keyword(null,"pendulums","pendulums",191378563).cljs$core$IFn$_invoke$arity$1(system);
return cljs.core.first.call(null,cljs.core.keep_indexed.call(null,(function (idx,p__6592){
var vec__6593 = p__6592;
var bx = cljs.core.nth.call(null,vec__6593,(0),null);
var by = cljs.core.nth.call(null,vec__6593,(1),null);
var map__6596 = cljs.core.nth.call(null,pendulums,idx);
var map__6596__$1 = cljs.core.__destructure_map.call(null,map__6596);
var mass = cljs.core.get.call(null,map__6596__$1,new cljs.core.Keyword(null,"mass","mass",-2138950046));
var base_radius = com.micahmartin.pendulums.ui.bob_radius.call(null,mass);
var radius = (base_radius * zoom);
var dx = (mx - bx);
var dy = (my - by);
var dist = com.micahmartin.pendulums.math.sqrt.call(null,((dx * dx) + (dy * dy)));
if((dist <= (radius + (5)))){
return idx;
} else {
return null;
}
}),positions));
});
/**
 * Calculates the angle from pivot to mouse position.
 * Returns angle in radians where 0 = hanging down, positive = clockwise.
 */
com.micahmartin.pendulums.ui.angle_from_pivot = (function com$micahmartin$pendulums$ui$angle_from_pivot(p__6597,p__6598){
var vec__6599 = p__6597;
var px = cljs.core.nth.call(null,vec__6599,(0),null);
var py = cljs.core.nth.call(null,vec__6599,(1),null);
var vec__6602 = p__6598;
var mx = cljs.core.nth.call(null,vec__6602,(0),null);
var my = cljs.core.nth.call(null,vec__6602,(1),null);
var dx = (mx - px);
var dy = (my - py);
return com.micahmartin.pendulums.math.atan2.call(null,dx,dy);
});
/**
 * Converts physics theta to display angle where 0°=up, 90°=right, 180°=down, 270°=left.
 * Like a compass heading where angles increase clockwise.
 */
com.micahmartin.pendulums.ui.normalize_angle = (function com$micahmartin$pendulums$ui$normalize_angle(theta){
var degrees = ((- theta) * ((180) / com.micahmartin.pendulums.math.PI));
var shifted = (degrees + (180));
var normalized = cljs.core.mod.call(null,shifted,(360));
if((normalized < (0))){
return (normalized + (360));
} else {
return normalized;
}
});
/**
 * Converts display angle (0°=up, 90°=right, 180°=down, 270°=left) back to physics theta.
 */
com.micahmartin.pendulums.ui.display_angle__GT_theta = (function com$micahmartin$pendulums$ui$display_angle__GT_theta(display_angle){
return (((180) - display_angle) * (com.micahmartin.pendulums.math.PI / (180)));
});
/**
 * Prepares state for starting simulation. Sets running, clears selection.
 */
com.micahmartin.pendulums.ui.prepare_start = (function com$micahmartin$pendulums$ui$prepare_start(state){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"running?","running?",-257884763),true,new cljs.core.Keyword(null,"selected","selected",574897764),null,new cljs.core.Keyword(null,"dragging?","dragging?",-995941410),false);
});
/**
 * Prepares state for stopping simulation.
 */
com.micahmartin.pendulums.ui.prepare_stop = (function com$micahmartin$pendulums$ui$prepare_stop(state){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"running?","running?",-257884763),false);
});
/**
 * Adds a new pendulum to the system with default configuration. Clears trails.
 */
com.micahmartin.pendulums.ui.add_pendulum = (function com$micahmartin$pendulums$ui$add_pendulum(state){
return cljs.core.assoc.call(null,cljs.core.update.call(null,state,new cljs.core.Keyword(null,"system","system",-29381724),com.micahmartin.pendulums.engine.add_pendulum,com.micahmartin.pendulums.engine.make_pendulum.call(null,com.micahmartin.pendulums.ui.new_pendulum_config)),new cljs.core.Keyword(null,"trails","trails",-1542689191),cljs.core.PersistentVector.EMPTY);
});
/**
 * Removes the last pendulum from the system. Clears trails.
 */
com.micahmartin.pendulums.ui.remove_pendulum = (function com$micahmartin$pendulums$ui$remove_pendulum(state){
return cljs.core.assoc.call(null,cljs.core.update.call(null,state,new cljs.core.Keyword(null,"system","system",-29381724),com.micahmartin.pendulums.engine.remove_pendulum),new cljs.core.Keyword(null,"trails","trails",-1542689191),cljs.core.PersistentVector.EMPTY);
});
/**
 * Calculates zoom and pan to fit all pendulums centered in the viewport.
 * Returns updated state with new :zoom and :pan values.
 */
com.micahmartin.pendulums.ui.center_view = (function com$micahmartin$pendulums$ui$center_view(state){
var map__6605 = state;
var map__6605__$1 = cljs.core.__destructure_map.call(null,map__6605);
var system = cljs.core.get.call(null,map__6605__$1,new cljs.core.Keyword(null,"system","system",-29381724));
var canvas_width = cljs.core.get.call(null,map__6605__$1,new cljs.core.Keyword(null,"canvas-width","canvas-width",1321931102));
var canvas_height = cljs.core.get.call(null,map__6605__$1,new cljs.core.Keyword(null,"canvas-height","canvas-height",291287231));
var vec__6606 = com.micahmartin.pendulums.ui.get_pivot.call(null,canvas_width);
var pivot_x = cljs.core.nth.call(null,vec__6606,(0),null);
var pivot_y = cljs.core.nth.call(null,vec__6606,(1),null);
var pendulums = new cljs.core.Keyword(null,"pendulums","pendulums",191378563).cljs$core$IFn$_invoke$arity$1(system);
var max_extent = ((cljs.core.seq.call(null,pendulums))?cljs.core.reduce.call(null,cljs.core._PLUS_,0.0,cljs.core.map.call(null,new cljs.core.Keyword(null,"length","length",588987862),pendulums)):1.5);
var extent_pixels = (max_extent * com.micahmartin.pendulums.ui.scale);
var padding = 120.0;
var required_size = ((2.0 * extent_pixels) + padding);
var zoom_for_width = (canvas_width / required_size);
var zoom_for_height = (canvas_height / required_size);
var fit_zoom = cljs.core.max.call(null,0.2,cljs.core.min.call(null,1.5,cljs.core.min.call(null,zoom_for_width,zoom_for_height)));
var system_center_y = (pivot_y + (extent_pixels / 2.0));
var pan_x = ((canvas_width / 2.0) - (pivot_x * fit_zoom));
var pan_y = ((canvas_height / 2.0) - (system_center_y * fit_zoom));
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"zoom","zoom",-1827487038),fit_zoom,new cljs.core.Keyword(null,"pan","pan",-307712792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pan_x,pan_y], null));
});
/**
 * Adds a new pendulum to the system. Mutates *state.
 */
com.micahmartin.pendulums.ui.add_pendulum_BANG_ = (function com$micahmartin$pendulums$ui$add_pendulum_BANG_(_STAR_state){
return cljs.core.swap_BANG_.call(null,_STAR_state,com.micahmartin.pendulums.ui.add_pendulum);
});
/**
 * Removes the last pendulum from the system. Mutates *state.
 */
com.micahmartin.pendulums.ui.remove_pendulum_BANG_ = (function com$micahmartin$pendulums$ui$remove_pendulum_BANG_(_STAR_state){
return cljs.core.swap_BANG_.call(null,_STAR_state,com.micahmartin.pendulums.ui.remove_pendulum);
});
/**
 * Centers the view to fit all pendulums. Mutates *state.
 */
com.micahmartin.pendulums.ui.center_view_BANG_ = (function com$micahmartin$pendulums$ui$center_view_BANG_(_STAR_state){
return cljs.core.swap_BANG_.call(null,_STAR_state,com.micahmartin.pendulums.ui.center_view);
});
/**
 * Returns the index of the pendulum whose angle row was clicked, or nil.
 */
com.micahmartin.pendulums.ui.hit_test_angle_display = (function com$micahmartin$pendulums$ui$hit_test_angle_display(system,mx,my){
var pendulums = new cljs.core.Keyword(null,"pendulums","pendulums",191378563).cljs$core$IFn$_invoke$arity$1(system);
var header_y = (com.micahmartin.pendulums.ui.angle_display_padding + com.micahmartin.pendulums.ui.angle_display_line_height);
if((mx < com.micahmartin.pendulums.ui.angle_display_row_width)){
return cljs.core.some.call(null,(function (idx){
var row_y = (header_y + ((idx + (1)) * com.micahmartin.pendulums.ui.angle_display_line_height));
var top = (row_y - (12));
var bottom = (row_y + (4));
if((((my >= top)) && ((my <= bottom)))){
return idx;
} else {
return null;
}
}),cljs.core.range.call(null,cljs.core.count.call(null,pendulums)));
} else {
return null;
}
});
/**
 * Formats angle to 2 decimal places, platform-independent.
 */
com.micahmartin.pendulums.ui.format_angle = (function com$micahmartin$pendulums$ui$format_angle(angle){
return angle.toFixed((2));
});
/**
 * Starts editing the angle for the pendulum at idx. Returns updated state.
 */
com.micahmartin.pendulums.ui.start_angle_edit = (function com$micahmartin$pendulums$ui$start_angle_edit(state,idx){
var pendulum = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system","system",-29381724),new cljs.core.Keyword(null,"pendulums","pendulums",191378563),idx], null));
var display_angle = com.micahmartin.pendulums.ui.normalize_angle.call(null,new cljs.core.Keyword(null,"theta","theta",-427510258).cljs$core$IFn$_invoke$arity$1(pendulum));
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"editing-angle","editing-angle",1617361729),idx,new cljs.core.Keyword(null,"angle-input","angle-input",712036151),com.micahmartin.pendulums.ui.format_angle.call(null,display_angle));
});
/**
 * Cancels angle editing. Returns updated state.
 */
com.micahmartin.pendulums.ui.cancel_angle_edit = (function com$micahmartin$pendulums$ui$cancel_angle_edit(state){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"editing-angle","editing-angle",1617361729),null,new cljs.core.Keyword(null,"angle-input","angle-input",712036151),"");
});
/**
 * Cancels angle editing. Mutates *state.
 */
com.micahmartin.pendulums.ui.cancel_angle_edit_BANG_ = (function com$micahmartin$pendulums$ui$cancel_angle_edit_BANG_(_STAR_state){
return cljs.core.swap_BANG_.call(null,_STAR_state,com.micahmartin.pendulums.ui.cancel_angle_edit);
});
/**
 * Submits angle edit with the given display-angle (in degrees).
 * Updates the pendulum theta and clears editing state. Returns updated state.
 */
com.micahmartin.pendulums.ui.submit_angle_edit = (function com$micahmartin$pendulums$ui$submit_angle_edit(state,display_angle){
var map__6609 = state;
var map__6609__$1 = cljs.core.__destructure_map.call(null,map__6609);
var editing_angle = cljs.core.get.call(null,map__6609__$1,new cljs.core.Keyword(null,"editing-angle","editing-angle",1617361729));
var new_theta = com.micahmartin.pendulums.ui.display_angle__GT_theta.call(null,display_angle);
return cljs.core.assoc.call(null,cljs.core.update.call(null,state,new cljs.core.Keyword(null,"system","system",-29381724),com.micahmartin.pendulums.engine.set_pendulum_angle,editing_angle,new_theta),new cljs.core.Keyword(null,"editing-angle","editing-angle",1617361729),null,new cljs.core.Keyword(null,"angle-input","angle-input",712036151),"");
});
/**
 * Handles mouse down at coordinates (mx, my). Returns updated state.
 */
com.micahmartin.pendulums.ui.handle_mouse_down = (function com$micahmartin$pendulums$ui$handle_mouse_down(state,mx,my){
var map__6610 = state;
var map__6610__$1 = cljs.core.__destructure_map.call(null,map__6610);
var running_QMARK_ = cljs.core.get.call(null,map__6610__$1,new cljs.core.Keyword(null,"running?","running?",-257884763));
var system = cljs.core.get.call(null,map__6610__$1,new cljs.core.Keyword(null,"system","system",-29381724));
var zoom = cljs.core.get.call(null,map__6610__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var pan = cljs.core.get.call(null,map__6610__$1,new cljs.core.Keyword(null,"pan","pan",-307712792));
var canvas_width = cljs.core.get.call(null,map__6610__$1,new cljs.core.Keyword(null,"canvas-width","canvas-width",1321931102));
var angle_hit = com.micahmartin.pendulums.ui.hit_test_angle_display.call(null,system,mx,my);
var bob_hit = com.micahmartin.pendulums.ui.hit_test_bob.call(null,system,mx,my,zoom,pan,canvas_width);
if(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core.not.call(null,running_QMARK_);
if(and__5140__auto__){
return angle_hit;
} else {
return and__5140__auto__;
}
})())){
return com.micahmartin.pendulums.ui.start_angle_edit.call(null,state,angle_hit);
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core.not.call(null,running_QMARK_);
if(and__5140__auto__){
return bob_hit;
} else {
return and__5140__auto__;
}
})())){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"selected","selected",574897764),bob_hit,new cljs.core.Keyword(null,"dragging?","dragging?",-995941410),true);
} else {
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"selected","selected",574897764),null,new cljs.core.Keyword(null,"dragging?","dragging?",-995941410),false,new cljs.core.Keyword(null,"panning?","panning?",-454250826),true,new cljs.core.Keyword(null,"pan-start","pan-start",455057796),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mx,my], null));

}
}
});
/**
 * Handles mouse move at coordinates (mx, my). Returns updated state.
 */
com.micahmartin.pendulums.ui.handle_mouse_move = (function com$micahmartin$pendulums$ui$handle_mouse_move(state,mx,my){
var map__6611 = state;
var map__6611__$1 = cljs.core.__destructure_map.call(null,map__6611);
var dragging_QMARK_ = cljs.core.get.call(null,map__6611__$1,new cljs.core.Keyword(null,"dragging?","dragging?",-995941410));
var canvas_width = cljs.core.get.call(null,map__6611__$1,new cljs.core.Keyword(null,"canvas-width","canvas-width",1321931102));
var zoom = cljs.core.get.call(null,map__6611__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var selected = cljs.core.get.call(null,map__6611__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var system = cljs.core.get.call(null,map__6611__$1,new cljs.core.Keyword(null,"system","system",-29381724));
var pan_start = cljs.core.get.call(null,map__6611__$1,new cljs.core.Keyword(null,"pan-start","pan-start",455057796));
var running_QMARK_ = cljs.core.get.call(null,map__6611__$1,new cljs.core.Keyword(null,"running?","running?",-257884763));
var pan = cljs.core.get.call(null,map__6611__$1,new cljs.core.Keyword(null,"pan","pan",-307712792));
var panning_QMARK_ = cljs.core.get.call(null,map__6611__$1,new cljs.core.Keyword(null,"panning?","panning?",-454250826));
if(cljs.core.truth_(panning_QMARK_)){
var vec__6612 = pan_start;
var start_x = cljs.core.nth.call(null,vec__6612,(0),null);
var start_y = cljs.core.nth.call(null,vec__6612,(1),null);
var vec__6615 = pan;
var pan_x = cljs.core.nth.call(null,vec__6615,(0),null);
var pan_y = cljs.core.nth.call(null,vec__6615,(1),null);
var dx = (mx - start_x);
var dy = (my - start_y);
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"pan","pan",-307712792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(pan_x + dx),(pan_y + dy)], null),new cljs.core.Keyword(null,"pan-start","pan-start",455057796),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mx,my], null));
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = dragging_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not.call(null,running_QMARK_);
} else {
return and__5140__auto__;
}
})())){
var pivot = com.micahmartin.pendulums.ui.pivot_for_pendulum.call(null,system,selected,zoom,pan,canvas_width);
var new_theta = com.micahmartin.pendulums.ui.angle_from_pivot.call(null,pivot,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mx,my], null));
return cljs.core.update.call(null,state,new cljs.core.Keyword(null,"system","system",-29381724),com.micahmartin.pendulums.engine.set_pendulum_angle,selected,new_theta);
} else {
return state;

}
}
});
/**
 * Handles mouse up. Returns updated state with dragging/panning cleared.
 */
com.micahmartin.pendulums.ui.handle_mouse_up = (function com$micahmartin$pendulums$ui$handle_mouse_up(state){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"dragging?","dragging?",-995941410),false,new cljs.core.Keyword(null,"panning?","panning?",-454250826),false,new cljs.core.Keyword(null,"pan-start","pan-start",455057796),null);
});
/**
 * Handles mouse wheel zoom centered on mouse position (mx, my).
 * rotation: positive = zoom out, negative = zoom in.
 * Returns updated state.
 */
com.micahmartin.pendulums.ui.handle_mouse_wheel = (function com$micahmartin$pendulums$ui$handle_mouse_wheel(state,mx,my,rotation){
var map__6618 = state;
var map__6618__$1 = cljs.core.__destructure_map.call(null,map__6618);
var zoom = cljs.core.get.call(null,map__6618__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var pan = cljs.core.get.call(null,map__6618__$1,new cljs.core.Keyword(null,"pan","pan",-307712792));
var zoom_factor = (((rotation < (0)))?1.1:0.9);
var new_zoom = cljs.core.max.call(null,0.1,cljs.core.min.call(null,10.0,(zoom * zoom_factor)));
var vec__6619 = pan;
var pan_x = cljs.core.nth.call(null,vec__6619,(0),null);
var pan_y = cljs.core.nth.call(null,vec__6619,(1),null);
var scale_ratio = (new_zoom / zoom);
var new_pan_x = (mx - (scale_ratio * (mx - pan_x)));
var new_pan_y = (my - (scale_ratio * (my - pan_y)));
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"zoom","zoom",-1827487038),new_zoom,new cljs.core.Keyword(null,"pan","pan",-307712792),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_pan_x,new_pan_y], null));
});
/**
 * Handles mouse move. Mutates *state.
 */
com.micahmartin.pendulums.ui.handle_mouse_move_BANG_ = (function com$micahmartin$pendulums$ui$handle_mouse_move_BANG_(_STAR_state,mx,my){
return cljs.core.swap_BANG_.call(null,_STAR_state,com.micahmartin.pendulums.ui.handle_mouse_move,mx,my);
});
/**
 * Handles mouse up. Mutates *state.
 */
com.micahmartin.pendulums.ui.handle_mouse_up_BANG_ = (function com$micahmartin$pendulums$ui$handle_mouse_up_BANG_(_STAR_state){
return cljs.core.swap_BANG_.call(null,_STAR_state,com.micahmartin.pendulums.ui.handle_mouse_up);
});
/**
 * Handles mouse wheel zoom. Mutates *state.
 */
com.micahmartin.pendulums.ui.handle_mouse_wheel_BANG_ = (function com$micahmartin$pendulums$ui$handle_mouse_wheel_BANG_(_STAR_state,mx,my,rotation){
return cljs.core.swap_BANG_.call(null,_STAR_state,com.micahmartin.pendulums.ui.handle_mouse_wheel,mx,my,rotation);
});

//# sourceMappingURL=ui.js.map
