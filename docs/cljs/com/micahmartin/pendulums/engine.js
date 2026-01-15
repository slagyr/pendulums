// Compiled by ClojureScript 1.12.134 {:optimizations :none}
goog.provide('com.micahmartin.pendulums.engine');
goog.require('cljs.core');
goog.require('com.micahmartin.pendulums.math');
com.micahmartin.pendulums.engine.default_gravity = 9.81;
/**
 * Creates a pendulum with the given parameters.
 * - theta: angle from vertical (radians), positive = clockwise
 * - omega: angular velocity (rad/s)
 * - length: arm length (meters)
 * - mass: bob mass (kg), defaults to 1.0
 */
com.micahmartin.pendulums.engine.make_pendulum = (function com$micahmartin$pendulums$engine$make_pendulum(var_args){
var G__6554 = arguments.length;
switch (G__6554) {
case 0:
return com.micahmartin.pendulums.engine.make_pendulum.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return com.micahmartin.pendulums.engine.make_pendulum.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(com.micahmartin.pendulums.engine.make_pendulum.cljs$core$IFn$_invoke$arity$0 = (function (){
return com.micahmartin.pendulums.engine.make_pendulum.call(null,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.micahmartin.pendulums.engine.make_pendulum.cljs$core$IFn$_invoke$arity$1 = (function (p__6555){
var map__6556 = p__6555;
var map__6556__$1 = cljs.core.__destructure_map.call(null,map__6556);
var theta = cljs.core.get.call(null,map__6556__$1,new cljs.core.Keyword(null,"theta","theta",-427510258),0.0);
var omega = cljs.core.get.call(null,map__6556__$1,new cljs.core.Keyword(null,"omega","omega",277265652),0.0);
var length = cljs.core.get.call(null,map__6556__$1,new cljs.core.Keyword(null,"length","length",588987862),1.0);
var mass = cljs.core.get.call(null,map__6556__$1,new cljs.core.Keyword(null,"mass","mass",-2138950046),1.0);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"theta","theta",-427510258),theta,new cljs.core.Keyword(null,"omega","omega",277265652),omega,new cljs.core.Keyword(null,"length","length",588987862),length,new cljs.core.Keyword(null,"mass","mass",-2138950046),mass], null);
}));

(com.micahmartin.pendulums.engine.make_pendulum.cljs$lang$maxFixedArity = 1);

/**
 * Creates a pendulum system with the given pendulums and optional gravity.
 * Pendulums are ordered root-first: first pendulum is attached to fixed pivot,
 * each subsequent pendulum is attached to the bob of the previous one.
 */
com.micahmartin.pendulums.engine.make_system = (function com$micahmartin$pendulums$engine$make_system(var_args){
var G__6559 = arguments.length;
switch (G__6559) {
case 1:
return com.micahmartin.pendulums.engine.make_system.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.micahmartin.pendulums.engine.make_system.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(com.micahmartin.pendulums.engine.make_system.cljs$core$IFn$_invoke$arity$1 = (function (pendulums){
return com.micahmartin.pendulums.engine.make_system.call(null,pendulums,9.81);
}));

(com.micahmartin.pendulums.engine.make_system.cljs$core$IFn$_invoke$arity$2 = (function (pendulums,gravity){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pendulums","pendulums",191378563),cljs.core.vec.call(null,pendulums),new cljs.core.Keyword(null,"gravity","gravity",-1815198225),gravity], null);
}));

(com.micahmartin.pendulums.engine.make_system.cljs$lang$maxFixedArity = 2);

/**
 * Calculates the (x, y) position of each bob in the system.
 * Returns a vector of [x y] pairs, one for each pendulum.
 * Coordinate system: origin at root pivot, y positive downward.
 */
com.micahmartin.pendulums.engine.bob_positions = (function com$micahmartin$pendulums$engine$bob_positions(p__6561){
var map__6562 = p__6561;
var map__6562__$1 = cljs.core.__destructure_map.call(null,map__6562);
var pendulums = cljs.core.get.call(null,map__6562__$1,new cljs.core.Keyword(null,"pendulums","pendulums",191378563));
var pends = pendulums;
var x = 0.0;
var y = 0.0;
var positions = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_.call(null,pends)){
return positions;
} else {
var map__6564 = cljs.core.first.call(null,pends);
var map__6564__$1 = cljs.core.__destructure_map.call(null,map__6564);
var theta = cljs.core.get.call(null,map__6564__$1,new cljs.core.Keyword(null,"theta","theta",-427510258));
var length = cljs.core.get.call(null,map__6564__$1,new cljs.core.Keyword(null,"length","length",588987862));
var new_x = (x + (length * com.micahmartin.pendulums.math.sin.call(null,theta)));
var new_y = (y - (length * com.micahmartin.pendulums.math.cos.call(null,theta)));
var G__6565 = cljs.core.rest.call(null,pends);
var G__6566 = new_x;
var G__6567 = new_y;
var G__6568 = cljs.core.conj.call(null,positions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_x,new_y], null));
pends = G__6565;
x = G__6566;
y = G__6567;
positions = G__6568;
continue;
}
break;
}
});
/**
 * Calculates total kinetic energy of the system.
 */
com.micahmartin.pendulums.engine.kinetic_energy = (function com$micahmartin$pendulums$engine$kinetic_energy(p__6569){
var map__6570 = p__6569;
var map__6570__$1 = cljs.core.__destructure_map.call(null,map__6570);
var sys = map__6570__$1;
var pendulums = cljs.core.get.call(null,map__6570__$1,new cljs.core.Keyword(null,"pendulums","pendulums",191378563));
var n = cljs.core.count.call(null,pendulums);
var positions = com.micahmartin.pendulums.engine.bob_positions.call(null,sys);
var i = (0);
var total_ke = 0.0;
while(true){
if((i >= n)){
return total_ke;
} else {
var map__6571 = cljs.core.nth.call(null,pendulums,i);
var map__6571__$1 = cljs.core.__destructure_map.call(null,map__6571);
var mass = cljs.core.get.call(null,map__6571__$1,new cljs.core.Keyword(null,"mass","mass",-2138950046));
var vec__6572 = cljs.core.reduce.call(null,((function (i,total_ke,map__6571,map__6571__$1,mass,n,positions,map__6570,map__6570__$1,sys,pendulums){
return (function (p__6575,j){
var vec__6576 = p__6575;
var vx = cljs.core.nth.call(null,vec__6576,(0),null);
var vy = cljs.core.nth.call(null,vec__6576,(1),null);
var map__6579 = cljs.core.nth.call(null,pendulums,j);
var map__6579__$1 = cljs.core.__destructure_map.call(null,map__6579);
var theta = cljs.core.get.call(null,map__6579__$1,new cljs.core.Keyword(null,"theta","theta",-427510258));
var omega = cljs.core.get.call(null,map__6579__$1,new cljs.core.Keyword(null,"omega","omega",277265652));
var length = cljs.core.get.call(null,map__6579__$1,new cljs.core.Keyword(null,"length","length",588987862));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vx + ((length * com.micahmartin.pendulums.math.cos.call(null,theta)) * omega)),(vy + ((length * com.micahmartin.pendulums.math.sin.call(null,theta)) * omega))], null);
});})(i,total_ke,map__6571,map__6571__$1,mass,n,positions,map__6570,map__6570__$1,sys,pendulums))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,0.0], null),cljs.core.range.call(null,(i + (1))));
var vx = cljs.core.nth.call(null,vec__6572,(0),null);
var vy = cljs.core.nth.call(null,vec__6572,(1),null);
var v_squared = ((vx * vx) + (vy * vy));
var ke = ((0.5 * mass) * v_squared);
var G__6580 = (i + (1));
var G__6581 = (total_ke + ke);
i = G__6580;
total_ke = G__6581;
continue;
}
break;
}
});
/**
 * Calculates total potential energy of the system.
 * Reference: y=0 at the root pivot.
 */
com.micahmartin.pendulums.engine.potential_energy = (function com$micahmartin$pendulums$engine$potential_energy(p__6582){
var map__6583 = p__6582;
var map__6583__$1 = cljs.core.__destructure_map.call(null,map__6583);
var sys = map__6583__$1;
var pendulums = cljs.core.get.call(null,map__6583__$1,new cljs.core.Keyword(null,"pendulums","pendulums",191378563));
var gravity = cljs.core.get.call(null,map__6583__$1,new cljs.core.Keyword(null,"gravity","gravity",-1815198225));
var positions = com.micahmartin.pendulums.engine.bob_positions.call(null,sys);
return cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,(function (p__6584,p__6585){
var map__6586 = p__6584;
var map__6586__$1 = cljs.core.__destructure_map.call(null,map__6586);
var mass = cljs.core.get.call(null,map__6586__$1,new cljs.core.Keyword(null,"mass","mass",-2138950046));
var vec__6587 = p__6585;
var _ = cljs.core.nth.call(null,vec__6587,(0),null);
var y = cljs.core.nth.call(null,vec__6587,(1),null);
return ((mass * gravity) * y);
}),pendulums,positions));
});
/**
 * Calculates total mechanical energy (KE + PE) of the system.
 */
com.micahmartin.pendulums.engine.total_energy = (function com$micahmartin$pendulums$engine$total_energy(sys){
return (com.micahmartin.pendulums.engine.kinetic_energy.call(null,sys) + com.micahmartin.pendulums.engine.potential_energy.call(null,sys));
});
/**
 * Calculates angular acceleration for a single pendulum.
 * alpha = -g/L * sin(theta)
 */
com.micahmartin.pendulums.engine.single_pendulum_acceleration = (function com$micahmartin$pendulums$engine$single_pendulum_acceleration(p__6590,p__6591){
var map__6592 = p__6590;
var map__6592__$1 = cljs.core.__destructure_map.call(null,map__6592);
var gravity = cljs.core.get.call(null,map__6592__$1,new cljs.core.Keyword(null,"gravity","gravity",-1815198225));
var map__6593 = p__6591;
var map__6593__$1 = cljs.core.__destructure_map.call(null,map__6593);
var theta = cljs.core.get.call(null,map__6593__$1,new cljs.core.Keyword(null,"theta","theta",-427510258));
var length = cljs.core.get.call(null,map__6593__$1,new cljs.core.Keyword(null,"length","length",588987862));
return (- ((gravity * com.micahmartin.pendulums.math.sin.call(null,theta)) / length));
});
/**
 * Calculates angular accelerations for n coupled pendulums.
 * Uses the mass matrix formulation: M * alpha = F
 * Where M is the mass matrix and F is the force vector.
 */
com.micahmartin.pendulums.engine.n_pendulum_accelerations = (function com$micahmartin$pendulums$engine$n_pendulum_accelerations(p__6595){
var map__6596 = p__6595;
var map__6596__$1 = cljs.core.__destructure_map.call(null,map__6596);
var gravity = cljs.core.get.call(null,map__6596__$1,new cljs.core.Keyword(null,"gravity","gravity",-1815198225));
var pendulums = cljs.core.get.call(null,map__6596__$1,new cljs.core.Keyword(null,"pendulums","pendulums",191378563));
var n = cljs.core.count.call(null,pendulums);
var thetas = cljs.core.mapv.call(null,new cljs.core.Keyword(null,"theta","theta",-427510258),pendulums);
var omegas = cljs.core.mapv.call(null,new cljs.core.Keyword(null,"omega","omega",277265652),pendulums);
var lengths = cljs.core.mapv.call(null,new cljs.core.Keyword(null,"length","length",588987862),pendulums);
var masses = cljs.core.mapv.call(null,new cljs.core.Keyword(null,"mass","mass",-2138950046),pendulums);
var mass_sums = cljs.core.vec.call(null,cljs.core.reverse.call(null,cljs.core.reductions.call(null,cljs.core._PLUS_,cljs.core.reverse.call(null,masses))));
var M = cljs.core.vec.call(null,(function (){var iter__5628__auto__ = (function com$micahmartin$pendulums$engine$n_pendulum_accelerations_$_iter__6597(s__6598){
return (new cljs.core.LazySeq(null,(function (){
var s__6598__$1 = s__6598;
while(true){
var temp__5825__auto__ = cljs.core.seq.call(null,s__6598__$1);
if(temp__5825__auto__){
var s__6598__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6598__$2)){
var c__5626__auto__ = cljs.core.chunk_first.call(null,s__6598__$2);
var size__5627__auto__ = cljs.core.count.call(null,c__5626__auto__);
var b__6600 = cljs.core.chunk_buffer.call(null,size__5627__auto__);
if((function (){var i__6599 = (0);
while(true){
if((i__6599 < size__5627__auto__)){
var i = cljs.core._nth.call(null,c__5626__auto__,i__6599);
cljs.core.chunk_append.call(null,b__6600,cljs.core.vec.call(null,(function (){var iter__5628__auto__ = ((function (i__6599,i,c__5626__auto__,size__5627__auto__,b__6600,s__6598__$2,temp__5825__auto__,n,thetas,omegas,lengths,masses,mass_sums,map__6596,map__6596__$1,gravity,pendulums){
return (function com$micahmartin$pendulums$engine$n_pendulum_accelerations_$_iter__6597_$_iter__6601(s__6602){
return (new cljs.core.LazySeq(null,((function (i__6599,i,c__5626__auto__,size__5627__auto__,b__6600,s__6598__$2,temp__5825__auto__,n,thetas,omegas,lengths,masses,mass_sums,map__6596,map__6596__$1,gravity,pendulums){
return (function (){
var s__6602__$1 = s__6602;
while(true){
var temp__5825__auto____$1 = cljs.core.seq.call(null,s__6602__$1);
if(temp__5825__auto____$1){
var s__6602__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6602__$2)){
var c__5626__auto____$1 = cljs.core.chunk_first.call(null,s__6602__$2);
var size__5627__auto____$1 = cljs.core.count.call(null,c__5626__auto____$1);
var b__6604 = cljs.core.chunk_buffer.call(null,size__5627__auto____$1);
if((function (){var i__6603 = (0);
while(true){
if((i__6603 < size__5627__auto____$1)){
var j = cljs.core._nth.call(null,c__5626__auto____$1,i__6603);
cljs.core.chunk_append.call(null,b__6604,(function (){var k_max = cljs.core.max.call(null,i,j);
var mass_sum = cljs.core.nth.call(null,mass_sums,k_max);
var delta = (cljs.core.nth.call(null,thetas,i) - cljs.core.nth.call(null,thetas,j));
return (((mass_sum * cljs.core.nth.call(null,lengths,i)) * cljs.core.nth.call(null,lengths,j)) * com.micahmartin.pendulums.math.cos.call(null,delta));
})());

var G__6629 = (i__6603 + (1));
i__6603 = G__6629;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6604),com$micahmartin$pendulums$engine$n_pendulum_accelerations_$_iter__6597_$_iter__6601.call(null,cljs.core.chunk_rest.call(null,s__6602__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6604),null);
}
} else {
var j = cljs.core.first.call(null,s__6602__$2);
return cljs.core.cons.call(null,(function (){var k_max = cljs.core.max.call(null,i,j);
var mass_sum = cljs.core.nth.call(null,mass_sums,k_max);
var delta = (cljs.core.nth.call(null,thetas,i) - cljs.core.nth.call(null,thetas,j));
return (((mass_sum * cljs.core.nth.call(null,lengths,i)) * cljs.core.nth.call(null,lengths,j)) * com.micahmartin.pendulums.math.cos.call(null,delta));
})(),com$micahmartin$pendulums$engine$n_pendulum_accelerations_$_iter__6597_$_iter__6601.call(null,cljs.core.rest.call(null,s__6602__$2)));
}
} else {
return null;
}
break;
}
});})(i__6599,i,c__5626__auto__,size__5627__auto__,b__6600,s__6598__$2,temp__5825__auto__,n,thetas,omegas,lengths,masses,mass_sums,map__6596,map__6596__$1,gravity,pendulums))
,null,null));
});})(i__6599,i,c__5626__auto__,size__5627__auto__,b__6600,s__6598__$2,temp__5825__auto__,n,thetas,omegas,lengths,masses,mass_sums,map__6596,map__6596__$1,gravity,pendulums))
;
return iter__5628__auto__.call(null,cljs.core.range.call(null,n));
})()));

var G__6630 = (i__6599 + (1));
i__6599 = G__6630;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6600),com$micahmartin$pendulums$engine$n_pendulum_accelerations_$_iter__6597.call(null,cljs.core.chunk_rest.call(null,s__6598__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6600),null);
}
} else {
var i = cljs.core.first.call(null,s__6598__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,(function (){var iter__5628__auto__ = ((function (i,s__6598__$2,temp__5825__auto__,n,thetas,omegas,lengths,masses,mass_sums,map__6596,map__6596__$1,gravity,pendulums){
return (function com$micahmartin$pendulums$engine$n_pendulum_accelerations_$_iter__6597_$_iter__6605(s__6606){
return (new cljs.core.LazySeq(null,(function (){
var s__6606__$1 = s__6606;
while(true){
var temp__5825__auto____$1 = cljs.core.seq.call(null,s__6606__$1);
if(temp__5825__auto____$1){
var s__6606__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6606__$2)){
var c__5626__auto__ = cljs.core.chunk_first.call(null,s__6606__$2);
var size__5627__auto__ = cljs.core.count.call(null,c__5626__auto__);
var b__6608 = cljs.core.chunk_buffer.call(null,size__5627__auto__);
if((function (){var i__6607 = (0);
while(true){
if((i__6607 < size__5627__auto__)){
var j = cljs.core._nth.call(null,c__5626__auto__,i__6607);
cljs.core.chunk_append.call(null,b__6608,(function (){var k_max = cljs.core.max.call(null,i,j);
var mass_sum = cljs.core.nth.call(null,mass_sums,k_max);
var delta = (cljs.core.nth.call(null,thetas,i) - cljs.core.nth.call(null,thetas,j));
return (((mass_sum * cljs.core.nth.call(null,lengths,i)) * cljs.core.nth.call(null,lengths,j)) * com.micahmartin.pendulums.math.cos.call(null,delta));
})());

var G__6631 = (i__6607 + (1));
i__6607 = G__6631;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6608),com$micahmartin$pendulums$engine$n_pendulum_accelerations_$_iter__6597_$_iter__6605.call(null,cljs.core.chunk_rest.call(null,s__6606__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6608),null);
}
} else {
var j = cljs.core.first.call(null,s__6606__$2);
return cljs.core.cons.call(null,(function (){var k_max = cljs.core.max.call(null,i,j);
var mass_sum = cljs.core.nth.call(null,mass_sums,k_max);
var delta = (cljs.core.nth.call(null,thetas,i) - cljs.core.nth.call(null,thetas,j));
return (((mass_sum * cljs.core.nth.call(null,lengths,i)) * cljs.core.nth.call(null,lengths,j)) * com.micahmartin.pendulums.math.cos.call(null,delta));
})(),com$micahmartin$pendulums$engine$n_pendulum_accelerations_$_iter__6597_$_iter__6605.call(null,cljs.core.rest.call(null,s__6606__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(i,s__6598__$2,temp__5825__auto__,n,thetas,omegas,lengths,masses,mass_sums,map__6596,map__6596__$1,gravity,pendulums))
;
return iter__5628__auto__.call(null,cljs.core.range.call(null,n));
})()),com$micahmartin$pendulums$engine$n_pendulum_accelerations_$_iter__6597.call(null,cljs.core.rest.call(null,s__6598__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__.call(null,cljs.core.range.call(null,n));
})());
var F = cljs.core.vec.call(null,(function (){var iter__5628__auto__ = (function com$micahmartin$pendulums$engine$n_pendulum_accelerations_$_iter__6609(s__6610){
return (new cljs.core.LazySeq(null,(function (){
var s__6610__$1 = s__6610;
while(true){
var temp__5825__auto__ = cljs.core.seq.call(null,s__6610__$1);
if(temp__5825__auto__){
var s__6610__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6610__$2)){
var c__5626__auto__ = cljs.core.chunk_first.call(null,s__6610__$2);
var size__5627__auto__ = cljs.core.count.call(null,c__5626__auto__);
var b__6612 = cljs.core.chunk_buffer.call(null,size__5627__auto__);
if((function (){var i__6611 = (0);
while(true){
if((i__6611 < size__5627__auto__)){
var i = cljs.core._nth.call(null,c__5626__auto__,i__6611);
cljs.core.chunk_append.call(null,b__6612,(function (){var grav_term = (- (((cljs.core.nth.call(null,mass_sums,i) * gravity) * cljs.core.nth.call(null,lengths,i)) * com.micahmartin.pendulums.math.sin.call(null,cljs.core.nth.call(null,thetas,i))));
var vel_terms = cljs.core.reduce.call(null,cljs.core._PLUS_,(function (){var iter__5628__auto__ = ((function (i__6611,grav_term,i,c__5626__auto__,size__5627__auto__,b__6612,s__6610__$2,temp__5825__auto__,n,thetas,omegas,lengths,masses,mass_sums,M,map__6596,map__6596__$1,gravity,pendulums){
return (function com$micahmartin$pendulums$engine$n_pendulum_accelerations_$_iter__6609_$_iter__6613(s__6614){
return (new cljs.core.LazySeq(null,((function (i__6611,grav_term,i,c__5626__auto__,size__5627__auto__,b__6612,s__6610__$2,temp__5825__auto__,n,thetas,omegas,lengths,masses,mass_sums,M,map__6596,map__6596__$1,gravity,pendulums){
return (function (){
var s__6614__$1 = s__6614;
while(true){
var temp__5825__auto____$1 = cljs.core.seq.call(null,s__6614__$1);
if(temp__5825__auto____$1){
var s__6614__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6614__$2)){
var c__5626__auto____$1 = cljs.core.chunk_first.call(null,s__6614__$2);
var size__5627__auto____$1 = cljs.core.count.call(null,c__5626__auto____$1);
var b__6616 = cljs.core.chunk_buffer.call(null,size__5627__auto____$1);
if((function (){var i__6615 = (0);
while(true){
if((i__6615 < size__5627__auto____$1)){
var j = cljs.core._nth.call(null,c__5626__auto____$1,i__6615);
if(cljs.core.not_EQ_.call(null,i,j)){
cljs.core.chunk_append.call(null,b__6616,(function (){var k_max = cljs.core.max.call(null,i,j);
var delta = (cljs.core.nth.call(null,thetas,i) - cljs.core.nth.call(null,thetas,j));
return (- ((((cljs.core.nth.call(null,mass_sums,k_max) * cljs.core.nth.call(null,lengths,i)) * cljs.core.nth.call(null,lengths,j)) * com.micahmartin.pendulums.math.pow.call(null,cljs.core.nth.call(null,omegas,j),(2))) * com.micahmartin.pendulums.math.sin.call(null,delta)));
})());

var G__6632 = (i__6615 + (1));
i__6615 = G__6632;
continue;
} else {
var G__6633 = (i__6615 + (1));
i__6615 = G__6633;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6616),com$micahmartin$pendulums$engine$n_pendulum_accelerations_$_iter__6609_$_iter__6613.call(null,cljs.core.chunk_rest.call(null,s__6614__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6616),null);
}
} else {
var j = cljs.core.first.call(null,s__6614__$2);
if(cljs.core.not_EQ_.call(null,i,j)){
return cljs.core.cons.call(null,(function (){var k_max = cljs.core.max.call(null,i,j);
var delta = (cljs.core.nth.call(null,thetas,i) - cljs.core.nth.call(null,thetas,j));
return (- ((((cljs.core.nth.call(null,mass_sums,k_max) * cljs.core.nth.call(null,lengths,i)) * cljs.core.nth.call(null,lengths,j)) * com.micahmartin.pendulums.math.pow.call(null,cljs.core.nth.call(null,omegas,j),(2))) * com.micahmartin.pendulums.math.sin.call(null,delta)));
})(),com$micahmartin$pendulums$engine$n_pendulum_accelerations_$_iter__6609_$_iter__6613.call(null,cljs.core.rest.call(null,s__6614__$2)));
} else {
var G__6634 = cljs.core.rest.call(null,s__6614__$2);
s__6614__$1 = G__6634;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__6611,grav_term,i,c__5626__auto__,size__5627__auto__,b__6612,s__6610__$2,temp__5825__auto__,n,thetas,omegas,lengths,masses,mass_sums,M,map__6596,map__6596__$1,gravity,pendulums))
,null,null));
});})(i__6611,grav_term,i,c__5626__auto__,size__5627__auto__,b__6612,s__6610__$2,temp__5825__auto__,n,thetas,omegas,lengths,masses,mass_sums,M,map__6596,map__6596__$1,gravity,pendulums))
;
return iter__5628__auto__.call(null,cljs.core.range.call(null,n));
})());
return (grav_term + vel_terms);
})());

var G__6635 = (i__6611 + (1));
i__6611 = G__6635;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6612),com$micahmartin$pendulums$engine$n_pendulum_accelerations_$_iter__6609.call(null,cljs.core.chunk_rest.call(null,s__6610__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6612),null);
}
} else {
var i = cljs.core.first.call(null,s__6610__$2);
return cljs.core.cons.call(null,(function (){var grav_term = (- (((cljs.core.nth.call(null,mass_sums,i) * gravity) * cljs.core.nth.call(null,lengths,i)) * com.micahmartin.pendulums.math.sin.call(null,cljs.core.nth.call(null,thetas,i))));
var vel_terms = cljs.core.reduce.call(null,cljs.core._PLUS_,(function (){var iter__5628__auto__ = ((function (grav_term,i,s__6610__$2,temp__5825__auto__,n,thetas,omegas,lengths,masses,mass_sums,M,map__6596,map__6596__$1,gravity,pendulums){
return (function com$micahmartin$pendulums$engine$n_pendulum_accelerations_$_iter__6609_$_iter__6617(s__6618){
return (new cljs.core.LazySeq(null,(function (){
var s__6618__$1 = s__6618;
while(true){
var temp__5825__auto____$1 = cljs.core.seq.call(null,s__6618__$1);
if(temp__5825__auto____$1){
var s__6618__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6618__$2)){
var c__5626__auto__ = cljs.core.chunk_first.call(null,s__6618__$2);
var size__5627__auto__ = cljs.core.count.call(null,c__5626__auto__);
var b__6620 = cljs.core.chunk_buffer.call(null,size__5627__auto__);
if((function (){var i__6619 = (0);
while(true){
if((i__6619 < size__5627__auto__)){
var j = cljs.core._nth.call(null,c__5626__auto__,i__6619);
if(cljs.core.not_EQ_.call(null,i,j)){
cljs.core.chunk_append.call(null,b__6620,(function (){var k_max = cljs.core.max.call(null,i,j);
var delta = (cljs.core.nth.call(null,thetas,i) - cljs.core.nth.call(null,thetas,j));
return (- ((((cljs.core.nth.call(null,mass_sums,k_max) * cljs.core.nth.call(null,lengths,i)) * cljs.core.nth.call(null,lengths,j)) * com.micahmartin.pendulums.math.pow.call(null,cljs.core.nth.call(null,omegas,j),(2))) * com.micahmartin.pendulums.math.sin.call(null,delta)));
})());

var G__6636 = (i__6619 + (1));
i__6619 = G__6636;
continue;
} else {
var G__6637 = (i__6619 + (1));
i__6619 = G__6637;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6620),com$micahmartin$pendulums$engine$n_pendulum_accelerations_$_iter__6609_$_iter__6617.call(null,cljs.core.chunk_rest.call(null,s__6618__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6620),null);
}
} else {
var j = cljs.core.first.call(null,s__6618__$2);
if(cljs.core.not_EQ_.call(null,i,j)){
return cljs.core.cons.call(null,(function (){var k_max = cljs.core.max.call(null,i,j);
var delta = (cljs.core.nth.call(null,thetas,i) - cljs.core.nth.call(null,thetas,j));
return (- ((((cljs.core.nth.call(null,mass_sums,k_max) * cljs.core.nth.call(null,lengths,i)) * cljs.core.nth.call(null,lengths,j)) * com.micahmartin.pendulums.math.pow.call(null,cljs.core.nth.call(null,omegas,j),(2))) * com.micahmartin.pendulums.math.sin.call(null,delta)));
})(),com$micahmartin$pendulums$engine$n_pendulum_accelerations_$_iter__6609_$_iter__6617.call(null,cljs.core.rest.call(null,s__6618__$2)));
} else {
var G__6638 = cljs.core.rest.call(null,s__6618__$2);
s__6618__$1 = G__6638;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});})(grav_term,i,s__6610__$2,temp__5825__auto__,n,thetas,omegas,lengths,masses,mass_sums,M,map__6596,map__6596__$1,gravity,pendulums))
;
return iter__5628__auto__.call(null,cljs.core.range.call(null,n));
})());
return (grav_term + vel_terms);
})(),com$micahmartin$pendulums$engine$n_pendulum_accelerations_$_iter__6609.call(null,cljs.core.rest.call(null,s__6610__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__.call(null,cljs.core.range.call(null,n));
})());
var augmented = cljs.core.vec.call(null,cljs.core.map_indexed.call(null,(function (i,row){
return cljs.core.conj.call(null,cljs.core.vec.call(null,row),cljs.core.nth.call(null,F,i));
}),M));
var reduced = (function (){var aug = augmented;
var k = (0);
while(true){
if((k >= n)){
return aug;
} else {
var pivot_row = cljs.core.apply.call(null,cljs.core.max_key,((function (aug,k,n,thetas,omegas,lengths,masses,mass_sums,M,F,augmented,map__6596,map__6596__$1,gravity,pendulums){
return (function (p1__6594_SHARP_){
return com.micahmartin.pendulums.math.abs.call(null,cljs.core.get_in.call(null,aug,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__6594_SHARP_,k], null)));
});})(aug,k,n,thetas,omegas,lengths,masses,mass_sums,M,F,augmented,map__6596,map__6596__$1,gravity,pendulums))
,cljs.core.range.call(null,k,n));
var aug__$1 = ((cljs.core._EQ_.call(null,pivot_row,k))?aug:cljs.core.assoc.call(null,cljs.core.assoc.call(null,aug,k,cljs.core.nth.call(null,aug,pivot_row)),pivot_row,cljs.core.nth.call(null,aug,k)));
var pivot_val = cljs.core.get_in.call(null,aug__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,k], null));
if((com.micahmartin.pendulums.math.abs.call(null,pivot_val) < 1.0E-10)){
return aug__$1;
} else {
var aug__$2 = cljs.core.reduce.call(null,((function (aug,k,pivot_row,aug__$1,pivot_val,n,thetas,omegas,lengths,masses,mass_sums,M,F,augmented,map__6596,map__6596__$1,gravity,pendulums){
return (function (a,i){
var factor = (cljs.core.get_in.call(null,a,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,k], null)) / pivot_val);
return cljs.core.assoc.call(null,a,i,cljs.core.vec.call(null,cljs.core.map_indexed.call(null,((function (aug,k,factor,pivot_row,aug__$1,pivot_val,n,thetas,omegas,lengths,masses,mass_sums,M,F,augmented,map__6596,map__6596__$1,gravity,pendulums){
return (function (j,val){
if((j < k)){
return val;
} else {
return (val - (factor * cljs.core.get_in.call(null,a,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,j], null))));
}
});})(aug,k,factor,pivot_row,aug__$1,pivot_val,n,thetas,omegas,lengths,masses,mass_sums,M,F,augmented,map__6596,map__6596__$1,gravity,pendulums))
,cljs.core.nth.call(null,a,i))));
});})(aug,k,pivot_row,aug__$1,pivot_val,n,thetas,omegas,lengths,masses,mass_sums,M,F,augmented,map__6596,map__6596__$1,gravity,pendulums))
,aug__$1,cljs.core.range.call(null,(k + (1)),n));
var G__6639 = aug__$2;
var G__6640 = (k + (1));
aug = G__6639;
k = G__6640;
continue;
}
}
break;
}
})();
var alphas = (function (){var result = cljs.core.vec.call(null,cljs.core.repeat.call(null,n,0.0));
var i = (n - (1));
while(true){
if((i < (0))){
return result;
} else {
var sum = cljs.core.reduce.call(null,cljs.core._PLUS_,(function (){var iter__5628__auto__ = ((function (result,i,n,thetas,omegas,lengths,masses,mass_sums,M,F,augmented,reduced,map__6596,map__6596__$1,gravity,pendulums){
return (function com$micahmartin$pendulums$engine$n_pendulum_accelerations_$_iter__6625(s__6626){
return (new cljs.core.LazySeq(null,((function (result,i,n,thetas,omegas,lengths,masses,mass_sums,M,F,augmented,reduced,map__6596,map__6596__$1,gravity,pendulums){
return (function (){
var s__6626__$1 = s__6626;
while(true){
var temp__5825__auto__ = cljs.core.seq.call(null,s__6626__$1);
if(temp__5825__auto__){
var s__6626__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6626__$2)){
var c__5626__auto__ = cljs.core.chunk_first.call(null,s__6626__$2);
var size__5627__auto__ = cljs.core.count.call(null,c__5626__auto__);
var b__6628 = cljs.core.chunk_buffer.call(null,size__5627__auto__);
if((function (){var i__6627 = (0);
while(true){
if((i__6627 < size__5627__auto__)){
var j = cljs.core._nth.call(null,c__5626__auto__,i__6627);
cljs.core.chunk_append.call(null,b__6628,(cljs.core.get_in.call(null,reduced,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)) * cljs.core.nth.call(null,result,j)));

var G__6641 = (i__6627 + (1));
i__6627 = G__6641;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6628),com$micahmartin$pendulums$engine$n_pendulum_accelerations_$_iter__6625.call(null,cljs.core.chunk_rest.call(null,s__6626__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6628),null);
}
} else {
var j = cljs.core.first.call(null,s__6626__$2);
return cljs.core.cons.call(null,(cljs.core.get_in.call(null,reduced,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)) * cljs.core.nth.call(null,result,j)),com$micahmartin$pendulums$engine$n_pendulum_accelerations_$_iter__6625.call(null,cljs.core.rest.call(null,s__6626__$2)));
}
} else {
return null;
}
break;
}
});})(result,i,n,thetas,omegas,lengths,masses,mass_sums,M,F,augmented,reduced,map__6596,map__6596__$1,gravity,pendulums))
,null,null));
});})(result,i,n,thetas,omegas,lengths,masses,mass_sums,M,F,augmented,reduced,map__6596,map__6596__$1,gravity,pendulums))
;
return iter__5628__auto__.call(null,cljs.core.range.call(null,(i + (1)),n));
})());
var alpha_i = ((cljs.core.get_in.call(null,reduced,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,n], null)) - sum) / cljs.core.get_in.call(null,reduced,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,i], null)));
var G__6642 = cljs.core.assoc.call(null,result,i,alpha_i);
var G__6643 = (i - (1));
result = G__6642;
i = G__6643;
continue;
}
break;
}
})();
return alphas;
});
/**
 * Calculates angular accelerations for all pendulums in the system.
 * Returns a vector of accelerations (rad/s^2), one per pendulum.
 */
com.micahmartin.pendulums.engine.accelerations = (function com$micahmartin$pendulums$engine$accelerations(p__6644){
var map__6645 = p__6644;
var map__6645__$1 = cljs.core.__destructure_map.call(null,map__6645);
var sys = map__6645__$1;
var pendulums = cljs.core.get.call(null,map__6645__$1,new cljs.core.Keyword(null,"pendulums","pendulums",191378563));
var G__6646 = cljs.core.count.call(null,pendulums);
switch (G__6646) {
case (0):
return cljs.core.PersistentVector.EMPTY;

break;
case (1):
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.micahmartin.pendulums.engine.single_pendulum_acceleration.call(null,sys,cljs.core.first.call(null,pendulums))], null);

break;
default:
return com.micahmartin.pendulums.engine.n_pendulum_accelerations.call(null,sys);

}
});
/**
 * Extracts state vector [theta1, omega1, theta2, omega2, ...] from system.
 */
com.micahmartin.pendulums.engine.state_vector = (function com$micahmartin$pendulums$engine$state_vector(p__6648){
var map__6649 = p__6648;
var map__6649__$1 = cljs.core.__destructure_map.call(null,map__6649);
var pendulums = cljs.core.get.call(null,map__6649__$1,new cljs.core.Keyword(null,"pendulums","pendulums",191378563));
return cljs.core.vec.call(null,cljs.core.mapcat.call(null,cljs.core.juxt.call(null,new cljs.core.Keyword(null,"theta","theta",-427510258),new cljs.core.Keyword(null,"omega","omega",277265652)),pendulums));
});
/**
 * Applies state vector back to system, returning updated system.
 */
com.micahmartin.pendulums.engine.apply_state = (function com$micahmartin$pendulums$engine$apply_state(sys,state){
var pairs = cljs.core.partition.call(null,(2),state);
var new_pendulums = cljs.core.vec.call(null,cljs.core.map.call(null,(function (p,p__6650){
var vec__6651 = p__6650;
var theta = cljs.core.nth.call(null,vec__6651,(0),null);
var omega = cljs.core.nth.call(null,vec__6651,(1),null);
return cljs.core.assoc.call(null,p,new cljs.core.Keyword(null,"theta","theta",-427510258),theta,new cljs.core.Keyword(null,"omega","omega",277265652),omega);
}),new cljs.core.Keyword(null,"pendulums","pendulums",191378563).cljs$core$IFn$_invoke$arity$1(sys),pairs));
return cljs.core.assoc.call(null,sys,new cljs.core.Keyword(null,"pendulums","pendulums",191378563),new_pendulums);
});
/**
 * Calculates derivatives of state: [omega1, alpha1, omega2, alpha2, ...]
 */
com.micahmartin.pendulums.engine.derivatives = (function com$micahmartin$pendulums$engine$derivatives(sys){
var alphas = com.micahmartin.pendulums.engine.accelerations.call(null,sys);
return cljs.core.vec.call(null,cljs.core.mapcat.call(null,(function (p__6654,alpha){
var map__6655 = p__6654;
var map__6655__$1 = cljs.core.__destructure_map.call(null,map__6655);
var omega = cljs.core.get.call(null,map__6655__$1,new cljs.core.Keyword(null,"omega","omega",277265652));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [omega,alpha], null);
}),new cljs.core.Keyword(null,"pendulums","pendulums",191378563).cljs$core$IFn$_invoke$arity$1(sys),alphas));
});
/**
 * Advances the simulation by dt seconds using RK4 integration.
 */
com.micahmartin.pendulums.engine.step = (function com$micahmartin$pendulums$engine$step(sys,dt){
var y0 = com.micahmartin.pendulums.engine.state_vector.call(null,sys);
var k1 = com.micahmartin.pendulums.engine.derivatives.call(null,sys);
var y1 = cljs.core.mapv.call(null,cljs.core._PLUS_,y0,cljs.core.map.call(null,(function (p1__6656_SHARP_){
return ((0.5 * dt) * p1__6656_SHARP_);
}),k1));
var sys1 = com.micahmartin.pendulums.engine.apply_state.call(null,sys,y1);
var k2 = com.micahmartin.pendulums.engine.derivatives.call(null,sys1);
var y2 = cljs.core.mapv.call(null,cljs.core._PLUS_,y0,cljs.core.map.call(null,(function (p1__6657_SHARP_){
return ((0.5 * dt) * p1__6657_SHARP_);
}),k2));
var sys2 = com.micahmartin.pendulums.engine.apply_state.call(null,sys,y2);
var k3 = com.micahmartin.pendulums.engine.derivatives.call(null,sys2);
var y3 = cljs.core.mapv.call(null,cljs.core._PLUS_,y0,cljs.core.map.call(null,(function (p1__6658_SHARP_){
return (dt * p1__6658_SHARP_);
}),k3));
var sys3 = com.micahmartin.pendulums.engine.apply_state.call(null,sys,y3);
var k4 = com.micahmartin.pendulums.engine.derivatives.call(null,sys3);
var dy = cljs.core.mapv.call(null,(function (a,b,c,d){
return ((dt / 6.0) * (((a + ((2) * b)) + ((2) * c)) + d));
}),k1,k2,k3,k4);
var y_final = cljs.core.mapv.call(null,cljs.core._PLUS_,y0,dy);
return com.micahmartin.pendulums.engine.apply_state.call(null,sys,y_final);
});
/**
 * Adds a new pendulum to the end of the chain.
 */
com.micahmartin.pendulums.engine.add_pendulum = (function com$micahmartin$pendulums$engine$add_pendulum(sys,pendulum){
return cljs.core.update.call(null,sys,new cljs.core.Keyword(null,"pendulums","pendulums",191378563),cljs.core.conj,pendulum);
});
/**
 * Removes the last pendulum from the chain. Returns unchanged if only one pendulum.
 */
com.micahmartin.pendulums.engine.remove_pendulum = (function com$micahmartin$pendulums$engine$remove_pendulum(sys){
if((cljs.core.count.call(null,new cljs.core.Keyword(null,"pendulums","pendulums",191378563).cljs$core$IFn$_invoke$arity$1(sys)) > (1))){
return cljs.core.update.call(null,sys,new cljs.core.Keyword(null,"pendulums","pendulums",191378563),cljs.core.pop);
} else {
return sys;
}
});
/**
 * Resets all angular velocities to zero, keeping current angles.
 */
com.micahmartin.pendulums.engine.reset_velocities = (function com$micahmartin$pendulums$engine$reset_velocities(sys){
return cljs.core.update.call(null,sys,new cljs.core.Keyword(null,"pendulums","pendulums",191378563),(function (pends){
return cljs.core.mapv.call(null,(function (p1__6659_SHARP_){
return cljs.core.assoc.call(null,p1__6659_SHARP_,new cljs.core.Keyword(null,"omega","omega",277265652),0.0);
}),pends);
}));
});
/**
 * Returns the number of pendulums in the system.
 */
com.micahmartin.pendulums.engine.pendulum_count = (function com$micahmartin$pendulums$engine$pendulum_count(sys){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"pendulums","pendulums",191378563).cljs$core$IFn$_invoke$arity$1(sys));
});
/**
 * Sets the angle of pendulum at index idx and resets its velocity to zero.
 */
com.micahmartin.pendulums.engine.set_pendulum_angle = (function com$micahmartin$pendulums$engine$set_pendulum_angle(sys,idx,theta){
return cljs.core.update.call(null,sys,new cljs.core.Keyword(null,"pendulums","pendulums",191378563),(function (pends){
return cljs.core.update.call(null,pends,idx,(function (p1__6660_SHARP_){
return cljs.core.assoc.call(null,p1__6660_SHARP_,new cljs.core.Keyword(null,"theta","theta",-427510258),theta,new cljs.core.Keyword(null,"omega","omega",277265652),0.0);
}));
}));
});
/**
 * Steps the simulation forward by dt and updates the trails.
 * Returns [new-system new-trails].
 * trails: vector of trail vectors, each trail vector contains maps {:pos [x y] :time t}
 * trail-duration: how long to keep trail points (seconds)
 * now: current time (milliseconds)
 */
com.micahmartin.pendulums.engine.step_with_trails = (function com$micahmartin$pendulums$engine$step_with_trails(system,dt,trail_duration,trails,now){
var new_system = com.micahmartin.pendulums.engine.step.call(null,system,dt);
var positions = com.micahmartin.pendulums.engine.bob_positions.call(null,new_system);
var cutoff = (now - (trail_duration * (1000)));
var new_trails = cljs.core.vec.call(null,cljs.core.map_indexed.call(null,(function (idx,p__6662){
var vec__6663 = p__6662;
var x = cljs.core.nth.call(null,vec__6663,(0),null);
var y = cljs.core.nth.call(null,vec__6663,(1),null);
var old_trail = cljs.core.get.call(null,trails,idx,cljs.core.PersistentVector.EMPTY);
var pruned = cljs.core.filterv.call(null,(function (p1__6661_SHARP_){
return (new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__6661_SHARP_) > cutoff);
}),old_trail);
return cljs.core.conj.call(null,pruned,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.Keyword(null,"time","time",1385887882),now], null));
}),positions));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_system,new_trails], null);
});

//# sourceMappingURL=engine.js.map
