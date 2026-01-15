// Compiled by ClojureScript 1.12.134 {:optimizations :none}
goog.provide('com.micahmartin.pendulums.engine_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('com.micahmartin.pendulums.engine');
goog.require('com.micahmartin.pendulums.math');
com.micahmartin.pendulums.engine_spec.g = 9.81;
com.micahmartin.pendulums.engine_spec.tolerance = 1.0E-4;
var description__8992__auto___10814 = speclj.components.new_description.call(null,"Pendulum Engine",false,"com.micahmartin.pendulums.engine-spec");
var _STAR_parent_description_STAR__orig_val__10676_10815 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__10677_10816 = description__8992__auto___10814;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__10677_10816);

try{var seq__10678_10817 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,7,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var description__8992__auto____$1 = speclj.components.new_description.call(null,"make-pendulum",false,"com.micahmartin.pendulums.engine-spec");
var _STAR_parent_description_STAR__orig_val__10748_10821 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__10749_10822 = description__8992__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__10749_10822);

try{var seq__10750_10823 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"creates a pendulum with default values",((function (_STAR_parent_description_STAR__orig_val__10748_10821,_STAR_parent_description_STAR__temp_val__10749_10822,description__8992__auto____$1,_STAR_parent_description_STAR__orig_val__10676_10815,_STAR_parent_description_STAR__temp_val__10677_10816,description__8992__auto___10814){
return (function (){
var p = com.micahmartin.pendulums.engine.make_pendulum.call(null);
speclj.components.inc_assertions_BANG_.call(null);

var expected__9134__auto___10827 = 0.0;
var actual__9135__auto___10828 = new cljs.core.Keyword(null,"theta","theta",-427510258).cljs$core$IFn$_invoke$arity$1(p);
if(cljs.core._EQ_.call(null,expected__9134__auto___10827,actual__9135__auto___10828)){
} else {
throw cljs.core.ex_info.call(null,(""+"Expected: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = expected__9134__auto___10827;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__9102__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__9102__auto__);
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.platform.endl)+"     got: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = actual__9135__auto___10828;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__9102__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__9102__auto__);
}
})())+" (using =)"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__9134__auto___10829 = 0.0;
var actual__9135__auto___10830 = new cljs.core.Keyword(null,"omega","omega",277265652).cljs$core$IFn$_invoke$arity$1(p);
if(cljs.core._EQ_.call(null,expected__9134__auto___10829,actual__9135__auto___10830)){
} else {
throw cljs.core.ex_info.call(null,(""+"Expected: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = expected__9134__auto___10829;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__9102__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__9102__auto__);
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.platform.endl)+"     got: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = actual__9135__auto___10830;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__9102__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__9102__auto__);
}
})())+" (using =)"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__9134__auto___10831 = 1.0;
var actual__9135__auto___10832 = new cljs.core.Keyword(null,"length","length",588987862).cljs$core$IFn$_invoke$arity$1(p);
if(cljs.core._EQ_.call(null,expected__9134__auto___10831,actual__9135__auto___10832)){
} else {
throw cljs.core.ex_info.call(null,(""+"Expected: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = expected__9134__auto___10831;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__9102__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__9102__auto__);
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.platform.endl)+"     got: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = actual__9135__auto___10832;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__9102__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__9102__auto__);
}
})())+" (using =)"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__9134__auto__ = 1.0;
var actual__9135__auto__ = new cljs.core.Keyword(null,"mass","mass",-2138950046).cljs$core$IFn$_invoke$arity$1(p);
if(cljs.core._EQ_.call(null,expected__9134__auto__,actual__9135__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,(""+"Expected: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = expected__9134__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__9102__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__9102__auto__);
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.platform.endl)+"     got: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = actual__9135__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__9102__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__9102__auto__);
}
})())+" (using =)"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__10748_10821,_STAR_parent_description_STAR__temp_val__10749_10822,description__8992__auto____$1,_STAR_parent_description_STAR__orig_val__10676_10815,_STAR_parent_description_STAR__temp_val__10677_10816,description__8992__auto___10814))
,false),speclj.components.new_characteristic.call(null,"creates a pendulum with specified values",((function (_STAR_parent_description_STAR__orig_val__10748_10821,_STAR_parent_description_STAR__temp_val__10749_10822,description__8992__auto____$1,_STAR_parent_description_STAR__orig_val__10676_10815,_STAR_parent_description_STAR__temp_val__10677_10816,description__8992__auto___10814){
return (function (){
var p = com.micahmartin.pendulums.engine.make_pendulum.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"theta","theta",-427510258),0.5,new cljs.core.Keyword(null,"omega","omega",277265652),0.1,new cljs.core.Keyword(null,"length","length",588987862),2.0], null));
speclj.components.inc_assertions_BANG_.call(null);

var expected__9134__auto___10833 = 0.5;
var actual__9135__auto___10834 = new cljs.core.Keyword(null,"theta","theta",-427510258).cljs$core$IFn$_invoke$arity$1(p);
if(cljs.core._EQ_.call(null,expected__9134__auto___10833,actual__9135__auto___10834)){
} else {
throw cljs.core.ex_info.call(null,(""+"Expected: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = expected__9134__auto___10833;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__9102__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__9102__auto__);
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.platform.endl)+"     got: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = actual__9135__auto___10834;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__9102__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__9102__auto__);
}
})())+" (using =)"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__9134__auto___10835 = 0.1;
var actual__9135__auto___10836 = new cljs.core.Keyword(null,"omega","omega",277265652).cljs$core$IFn$_invoke$arity$1(p);
if(cljs.core._EQ_.call(null,expected__9134__auto___10835,actual__9135__auto___10836)){
} else {
throw cljs.core.ex_info.call(null,(""+"Expected: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = expected__9134__auto___10835;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__9102__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__9102__auto__);
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.platform.endl)+"     got: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = actual__9135__auto___10836;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__9102__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__9102__auto__);
}
})())+" (using =)"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__9134__auto___10837 = 2.0;
var actual__9135__auto___10838 = new cljs.core.Keyword(null,"length","length",588987862).cljs$core$IFn$_invoke$arity$1(p);
if(cljs.core._EQ_.call(null,expected__9134__auto___10837,actual__9135__auto___10838)){
} else {
throw cljs.core.ex_info.call(null,(""+"Expected: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = expected__9134__auto___10837;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__9102__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__9102__auto__);
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.platform.endl)+"     got: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = actual__9135__auto___10838;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__9102__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__9102__auto__);
}
})())+" (using =)"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__9134__auto__ = 1.0;
var actual__9135__auto__ = new cljs.core.Keyword(null,"mass","mass",-2138950046).cljs$core$IFn$_invoke$arity$1(p);
if(cljs.core._EQ_.call(null,expected__9134__auto__,actual__9135__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,(""+"Expected: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = expected__9134__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__9102__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__9102__auto__);
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.platform.endl)+"     got: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = actual__9135__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__9102__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__9102__auto__);
}
})())+" (using =)"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__10748_10821,_STAR_parent_description_STAR__temp_val__10749_10822,description__8992__auto____$1,_STAR_parent_description_STAR__orig_val__10676_10815,_STAR_parent_description_STAR__temp_val__10677_10816,description__8992__auto___10814))
,false)],null)));
var chunk__10751_10824 = null;
var count__10752_10825 = (0);
var i__10753_10826 = (0);
while(true){
if((i__10753_10826 < count__10752_10825)){
var component__8993__auto___10839 = cljs.core._nth.call(null,chunk__10751_10824,i__10753_10826);
speclj.components.install.call(null,component__8993__auto___10839,description__8992__auto____$1);


var G__10840 = seq__10750_10823;
var G__10841 = chunk__10751_10824;
var G__10842 = count__10752_10825;
var G__10843 = (i__10753_10826 + (1));
seq__10750_10823 = G__10840;
chunk__10751_10824 = G__10841;
count__10752_10825 = G__10842;
i__10753_10826 = G__10843;
continue;
} else {
var temp__5825__auto___10844 = cljs.core.seq.call(null,seq__10750_10823);
if(temp__5825__auto___10844){
var seq__10750_10845__$1 = temp__5825__auto___10844;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10750_10845__$1)){
var c__5673__auto___10846 = cljs.core.chunk_first.call(null,seq__10750_10845__$1);
var G__10847 = cljs.core.chunk_rest.call(null,seq__10750_10845__$1);
var G__10848 = c__5673__auto___10846;
var G__10849 = cljs.core.count.call(null,c__5673__auto___10846);
var G__10850 = (0);
seq__10750_10823 = G__10847;
chunk__10751_10824 = G__10848;
count__10752_10825 = G__10849;
i__10753_10826 = G__10850;
continue;
} else {
var component__8993__auto___10851 = cljs.core.first.call(null,seq__10750_10845__$1);
speclj.components.install.call(null,component__8993__auto___10851,description__8992__auto____$1);


var G__10852 = cljs.core.next.call(null,seq__10750_10845__$1);
var G__10853 = null;
var G__10854 = (0);
var G__10855 = (0);
seq__10750_10823 = G__10852;
chunk__10751_10824 = G__10853;
count__10752_10825 = G__10854;
i__10753_10826 = G__10855;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__10748_10821);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8992__auto____$1);
}

return description__8992__auto____$1;
})(),(function (){var description__8992__auto____$1 = speclj.components.new_description.call(null,"make-system",false,"com.micahmartin.pendulums.engine-spec");
var _STAR_parent_description_STAR__orig_val__10754_10856 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__10755_10857 = description__8992__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__10755_10857);

try{var seq__10756_10858 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"creates a system with one pendulum",((function (_STAR_parent_description_STAR__orig_val__10754_10856,_STAR_parent_description_STAR__temp_val__10755_10857,description__8992__auto____$1,_STAR_parent_description_STAR__orig_val__10676_10815,_STAR_parent_description_STAR__temp_val__10677_10816,description__8992__auto___10814){
return (function (){
var sys = com.micahmartin.pendulums.engine.make_system.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.micahmartin.pendulums.engine.make_pendulum.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"theta","theta",-427510258),0.5], null))], null));
speclj.components.inc_assertions_BANG_.call(null);

var expected__9134__auto___10862 = (1);
var actual__9135__auto___10863 = cljs.core.count.call(null,new cljs.core.Keyword(null,"pendulums","pendulums",191378563).cljs$core$IFn$_invoke$arity$1(sys));
if(cljs.core._EQ_.call(null,expected__9134__auto___10862,actual__9135__auto___10863)){
} else {
throw cljs.core.ex_info.call(null,(""+"Expected: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = expected__9134__auto___10862;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__9102__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__9102__auto__);
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.platform.endl)+"     got: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = actual__9135__auto___10863;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__9102__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__9102__auto__);
}
})())+" (using =)"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__9134__auto__ = 9.81;
var actual__9135__auto__ = new cljs.core.Keyword(null,"gravity","gravity",-1815198225).cljs$core$IFn$_invoke$arity$1(sys);
if(cljs.core._EQ_.call(null,expected__9134__auto__,actual__9135__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,(""+"Expected: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = expected__9134__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__9102__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__9102__auto__);
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.platform.endl)+"     got: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = actual__9135__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__9102__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__9102__auto__);
}
})())+" (using =)"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__10754_10856,_STAR_parent_description_STAR__temp_val__10755_10857,description__8992__auto____$1,_STAR_parent_description_STAR__orig_val__10676_10815,_STAR_parent_description_STAR__temp_val__10677_10816,description__8992__auto___10814))
,false),speclj.components.new_characteristic.call(null,"creates a coupled system with multiple pendulums",((function (_STAR_parent_description_STAR__orig_val__10754_10856,_STAR_parent_description_STAR__temp_val__10755_10857,description__8992__auto____$1,_STAR_parent_description_STAR__orig_val__10676_10815,_STAR_parent_description_STAR__temp_val__10677_10816,description__8992__auto___10814){
return (function (){
var sys = com.micahmartin.pendulums.engine.make_system.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.micahmartin.pendulums.engine.make_pendulum.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"theta","theta",-427510258),0.5], null)),com.micahmartin.pendulums.engine.make_pendulum.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"theta","theta",-427510258),0.3], null))], null));
speclj.components.inc_assertions_BANG_.call(null);

var expected__9134__auto__ = (2);
var actual__9135__auto__ = cljs.core.count.call(null,new cljs.core.Keyword(null,"pendulums","pendulums",191378563).cljs$core$IFn$_invoke$arity$1(sys));
if(cljs.core._EQ_.call(null,expected__9134__auto__,actual__9135__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,(""+"Expected: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = expected__9134__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__9102__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__9102__auto__);
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.platform.endl)+"     got: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = actual__9135__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__9102__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__9102__auto__);
}
})())+" (using =)"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__10754_10856,_STAR_parent_description_STAR__temp_val__10755_10857,description__8992__auto____$1,_STAR_parent_description_STAR__orig_val__10676_10815,_STAR_parent_description_STAR__temp_val__10677_10816,description__8992__auto___10814))
,false)],null)));
var chunk__10757_10859 = null;
var count__10758_10860 = (0);
var i__10759_10861 = (0);
while(true){
if((i__10759_10861 < count__10758_10860)){
var component__8993__auto___10864 = cljs.core._nth.call(null,chunk__10757_10859,i__10759_10861);
speclj.components.install.call(null,component__8993__auto___10864,description__8992__auto____$1);


var G__10865 = seq__10756_10858;
var G__10866 = chunk__10757_10859;
var G__10867 = count__10758_10860;
var G__10868 = (i__10759_10861 + (1));
seq__10756_10858 = G__10865;
chunk__10757_10859 = G__10866;
count__10758_10860 = G__10867;
i__10759_10861 = G__10868;
continue;
} else {
var temp__5825__auto___10869 = cljs.core.seq.call(null,seq__10756_10858);
if(temp__5825__auto___10869){
var seq__10756_10870__$1 = temp__5825__auto___10869;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10756_10870__$1)){
var c__5673__auto___10871 = cljs.core.chunk_first.call(null,seq__10756_10870__$1);
var G__10872 = cljs.core.chunk_rest.call(null,seq__10756_10870__$1);
var G__10873 = c__5673__auto___10871;
var G__10874 = cljs.core.count.call(null,c__5673__auto___10871);
var G__10875 = (0);
seq__10756_10858 = G__10872;
chunk__10757_10859 = G__10873;
count__10758_10860 = G__10874;
i__10759_10861 = G__10875;
continue;
} else {
var component__8993__auto___10876 = cljs.core.first.call(null,seq__10756_10870__$1);
speclj.components.install.call(null,component__8993__auto___10876,description__8992__auto____$1);


var G__10877 = cljs.core.next.call(null,seq__10756_10870__$1);
var G__10878 = null;
var G__10879 = (0);
var G__10880 = (0);
seq__10756_10858 = G__10877;
chunk__10757_10859 = G__10878;
count__10758_10860 = G__10879;
i__10759_10861 = G__10880;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__10754_10856);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8992__auto____$1);
}

return description__8992__auto____$1;
})(),(function (){var description__8992__auto____$1 = speclj.components.new_description.call(null,"single pendulum physics",false,"com.micahmartin.pendulums.engine-spec");
var _STAR_parent_description_STAR__orig_val__10760_10881 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__10761_10882 = description__8992__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__10761_10882);

try{var seq__10762_10883 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"has zero acceleration at rest position (theta=0)",((function (_STAR_parent_description_STAR__orig_val__10760_10881,_STAR_parent_description_STAR__temp_val__10761_10882,description__8992__auto____$1,_STAR_parent_description_STAR__orig_val__10676_10815,_STAR_parent_description_STAR__temp_val__10677_10816,description__8992__auto___10814){
return (function (){
var p = com.micahmartin.pendulums.engine.make_pendulum.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"theta","theta",-427510258),0.0], null));
var sys = com.micahmartin.pendulums.engine.make_system.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p], null));
var accels = com.micahmartin.pendulums.engine.accelerations.call(null,sys);
speclj.components.inc_assertions_BANG_.call(null);

var a__9441__auto__ = com.micahmartin.pendulums.math.abs.call(null,cljs.core.first.call(null,accels));
var b__9442__auto__ = 1.0E-4;
if(((typeof a__9441__auto__ === 'number') && (typeof b__9442__auto__ === 'number'))){
if((a__9441__auto__ < b__9442__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,(""+"expected "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a__9441__auto__)+" to be less than "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(b__9442__auto__)+" but got: (< "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a__9441__auto__)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(b__9442__auto__)+")"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__9113__auto__ = a__9441__auto__;
var b__9114__auto__ = b__9442__auto__;
var type_a__9115__auto__ = (((a__9113__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__9113__auto__)));
var type_b__9116__auto__ = (((b__9114__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__9114__auto__)));
return (""+"should<"+" doesn't know how to handle these types: ["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__9115__auto__)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__9116__auto__)+"]");
})()));
}
});})(_STAR_parent_description_STAR__orig_val__10760_10881,_STAR_parent_description_STAR__temp_val__10761_10882,description__8992__auto____$1,_STAR_parent_description_STAR__orig_val__10676_10815,_STAR_parent_description_STAR__temp_val__10677_10816,description__8992__auto___10814))
,false),speclj.components.new_characteristic.call(null,"has negative acceleration when displaced positively",((function (_STAR_parent_description_STAR__orig_val__10760_10881,_STAR_parent_description_STAR__temp_val__10761_10882,description__8992__auto____$1,_STAR_parent_description_STAR__orig_val__10676_10815,_STAR_parent_description_STAR__temp_val__10677_10816,description__8992__auto___10814){
return (function (){
var p = com.micahmartin.pendulums.engine.make_pendulum.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"theta","theta",-427510258),0.5], null));
var sys = com.micahmartin.pendulums.engine.make_system.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p], null));
var accels = com.micahmartin.pendulums.engine.accelerations.call(null,sys);
speclj.components.inc_assertions_BANG_.call(null);

var a__9441__auto__ = cljs.core.first.call(null,accels);
var b__9442__auto__ = (0);
if(((typeof a__9441__auto__ === 'number') && (typeof b__9442__auto__ === 'number'))){
if((a__9441__auto__ < b__9442__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,(""+"expected "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a__9441__auto__)+" to be less than "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(b__9442__auto__)+" but got: (< "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a__9441__auto__)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(b__9442__auto__)+")"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__9113__auto__ = a__9441__auto__;
var b__9114__auto__ = b__9442__auto__;
var type_a__9115__auto__ = (((a__9113__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__9113__auto__)));
var type_b__9116__auto__ = (((b__9114__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__9114__auto__)));
return (""+"should<"+" doesn't know how to handle these types: ["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__9115__auto__)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__9116__auto__)+"]");
})()));
}
});})(_STAR_parent_description_STAR__orig_val__10760_10881,_STAR_parent_description_STAR__temp_val__10761_10882,description__8992__auto____$1,_STAR_parent_description_STAR__orig_val__10676_10815,_STAR_parent_description_STAR__temp_val__10677_10816,description__8992__auto___10814))
,false),speclj.components.new_characteristic.call(null,"calculates correct acceleration for small angle",((function (_STAR_parent_description_STAR__orig_val__10760_10881,_STAR_parent_description_STAR__temp_val__10761_10882,description__8992__auto____$1,_STAR_parent_description_STAR__orig_val__10676_10815,_STAR_parent_description_STAR__temp_val__10677_10816,description__8992__auto___10814){
return (function (){
var theta = 0.1;
var length = 1.0;
var expected = (- ((9.81 * theta) / length));
var p = com.micahmartin.pendulums.engine.make_pendulum.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"theta","theta",-427510258),theta,new cljs.core.Keyword(null,"length","length",588987862),length], null));
var sys = com.micahmartin.pendulums.engine.make_system.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p], null));
var accels = com.micahmartin.pendulums.engine.accelerations.call(null,sys);
speclj.components.inc_assertions_BANG_.call(null);

var a__9441__auto__ = com.micahmartin.pendulums.math.abs.call(null,(cljs.core.first.call(null,accels) - expected));
var b__9442__auto__ = 0.01;
if(((typeof a__9441__auto__ === 'number') && (typeof b__9442__auto__ === 'number'))){
if((a__9441__auto__ < b__9442__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,(""+"expected "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a__9441__auto__)+" to be less than "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(b__9442__auto__)+" but got: (< "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a__9441__auto__)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(b__9442__auto__)+")"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__9113__auto__ = a__9441__auto__;
var b__9114__auto__ = b__9442__auto__;
var type_a__9115__auto__ = (((a__9113__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__9113__auto__)));
var type_b__9116__auto__ = (((b__9114__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__9114__auto__)));
return (""+"should<"+" doesn't know how to handle these types: ["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__9115__auto__)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__9116__auto__)+"]");
})()));
}
});})(_STAR_parent_description_STAR__orig_val__10760_10881,_STAR_parent_description_STAR__temp_val__10761_10882,description__8992__auto____$1,_STAR_parent_description_STAR__orig_val__10676_10815,_STAR_parent_description_STAR__temp_val__10677_10816,description__8992__auto___10814))
,false)],null)));
var chunk__10763_10884 = null;
var count__10764_10885 = (0);
var i__10765_10886 = (0);
while(true){
if((i__10765_10886 < count__10764_10885)){
var component__8993__auto___10887 = cljs.core._nth.call(null,chunk__10763_10884,i__10765_10886);
speclj.components.install.call(null,component__8993__auto___10887,description__8992__auto____$1);


var G__10888 = seq__10762_10883;
var G__10889 = chunk__10763_10884;
var G__10890 = count__10764_10885;
var G__10891 = (i__10765_10886 + (1));
seq__10762_10883 = G__10888;
chunk__10763_10884 = G__10889;
count__10764_10885 = G__10890;
i__10765_10886 = G__10891;
continue;
} else {
var temp__5825__auto___10892 = cljs.core.seq.call(null,seq__10762_10883);
if(temp__5825__auto___10892){
var seq__10762_10893__$1 = temp__5825__auto___10892;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10762_10893__$1)){
var c__5673__auto___10894 = cljs.core.chunk_first.call(null,seq__10762_10893__$1);
var G__10895 = cljs.core.chunk_rest.call(null,seq__10762_10893__$1);
var G__10896 = c__5673__auto___10894;
var G__10897 = cljs.core.count.call(null,c__5673__auto___10894);
var G__10898 = (0);
seq__10762_10883 = G__10895;
chunk__10763_10884 = G__10896;
count__10764_10885 = G__10897;
i__10765_10886 = G__10898;
continue;
} else {
var component__8993__auto___10899 = cljs.core.first.call(null,seq__10762_10893__$1);
speclj.components.install.call(null,component__8993__auto___10899,description__8992__auto____$1);


var G__10900 = cljs.core.next.call(null,seq__10762_10893__$1);
var G__10901 = null;
var G__10902 = (0);
var G__10903 = (0);
seq__10762_10883 = G__10900;
chunk__10763_10884 = G__10901;
count__10764_10885 = G__10902;
i__10765_10886 = G__10903;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__10760_10881);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8992__auto____$1);
}

return description__8992__auto____$1;
})(),(function (){var description__8992__auto____$1 = speclj.components.new_description.call(null,"step function",false,"com.micahmartin.pendulums.engine-spec");
var _STAR_parent_description_STAR__orig_val__10766_10904 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__10767_10905 = description__8992__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__10767_10905);

try{var seq__10768_10906 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"advances simulation by dt using RK4",((function (_STAR_parent_description_STAR__orig_val__10766_10904,_STAR_parent_description_STAR__temp_val__10767_10905,description__8992__auto____$1,_STAR_parent_description_STAR__orig_val__10676_10815,_STAR_parent_description_STAR__temp_val__10677_10816,description__8992__auto___10814){
return (function (){
var p = com.micahmartin.pendulums.engine.make_pendulum.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"theta","theta",-427510258),0.5,new cljs.core.Keyword(null,"omega","omega",277265652),0.0], null));
var sys = com.micahmartin.pendulums.engine.make_system.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p], null));
var new_sys = com.micahmartin.pendulums.engine.step.call(null,sys,0.01);
speclj.components.inc_assertions_BANG_.call(null);

var a__9441__auto___10910 = new cljs.core.Keyword(null,"omega","omega",277265652).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"pendulums","pendulums",191378563).cljs$core$IFn$_invoke$arity$1(new_sys)));
var b__9442__auto___10911 = (0);
if(((typeof a__9441__auto___10910 === 'number') && (typeof b__9442__auto___10911 === 'number'))){
if((a__9441__auto___10910 < b__9442__auto___10911)){
} else {
throw cljs.core.ex_info.call(null,(""+"expected "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a__9441__auto___10910)+" to be less than "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(b__9442__auto___10911)+" but got: (< "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a__9441__auto___10910)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(b__9442__auto___10911)+")"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__9113__auto__ = a__9441__auto___10910;
var b__9114__auto__ = b__9442__auto___10911;
var type_a__9115__auto__ = (((a__9113__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__9113__auto__)));
var type_b__9116__auto__ = (((b__9114__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__9114__auto__)));
return (""+"should<"+" doesn't know how to handle these types: ["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__9115__auto__)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__9116__auto__)+"]");
})()));
}

speclj.components.inc_assertions_BANG_.call(null);

var a__9441__auto__ = new cljs.core.Keyword(null,"theta","theta",-427510258).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"pendulums","pendulums",191378563).cljs$core$IFn$_invoke$arity$1(new_sys)));
var b__9442__auto__ = 0.5;
if(((typeof a__9441__auto__ === 'number') && (typeof b__9442__auto__ === 'number'))){
if((a__9441__auto__ < b__9442__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,(""+"expected "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a__9441__auto__)+" to be less than "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(b__9442__auto__)+" but got: (< "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a__9441__auto__)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(b__9442__auto__)+")"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__9113__auto__ = a__9441__auto__;
var b__9114__auto__ = b__9442__auto__;
var type_a__9115__auto__ = (((a__9113__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__9113__auto__)));
var type_b__9116__auto__ = (((b__9114__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__9114__auto__)));
return (""+"should<"+" doesn't know how to handle these types: ["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__9115__auto__)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__9116__auto__)+"]");
})()));
}
});})(_STAR_parent_description_STAR__orig_val__10766_10904,_STAR_parent_description_STAR__temp_val__10767_10905,description__8992__auto____$1,_STAR_parent_description_STAR__orig_val__10676_10815,_STAR_parent_description_STAR__temp_val__10677_10816,description__8992__auto___10814))
,false),speclj.components.new_characteristic.call(null,"conserves energy approximately for single pendulum",((function (_STAR_parent_description_STAR__orig_val__10766_10904,_STAR_parent_description_STAR__temp_val__10767_10905,description__8992__auto____$1,_STAR_parent_description_STAR__orig_val__10676_10815,_STAR_parent_description_STAR__temp_val__10677_10816,description__8992__auto___10814){
return (function (){
var p = com.micahmartin.pendulums.engine.make_pendulum.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"theta","theta",-427510258),0.5,new cljs.core.Keyword(null,"omega","omega",277265652),0.0,new cljs.core.Keyword(null,"length","length",588987862),1.0], null));
var sys = com.micahmartin.pendulums.engine.make_system.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p], null));
var initial_energy = com.micahmartin.pendulums.engine.total_energy.call(null,sys);
var final_sys = cljs.core.reduce.call(null,(function (s,_){
return com.micahmartin.pendulums.engine.step.call(null,s,0.001);
}),sys,cljs.core.range.call(null,(100)));
var final_energy = com.micahmartin.pendulums.engine.total_energy.call(null,final_sys);
speclj.components.inc_assertions_BANG_.call(null);

var a__9441__auto__ = com.micahmartin.pendulums.math.abs.call(null,(initial_energy - final_energy));
var b__9442__auto__ = (0.01 * com.micahmartin.pendulums.math.abs.call(null,initial_energy));
if(((typeof a__9441__auto__ === 'number') && (typeof b__9442__auto__ === 'number'))){
if((a__9441__auto__ < b__9442__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,(""+"expected "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a__9441__auto__)+" to be less than "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(b__9442__auto__)+" but got: (< "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a__9441__auto__)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(b__9442__auto__)+")"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__9113__auto__ = a__9441__auto__;
var b__9114__auto__ = b__9442__auto__;
var type_a__9115__auto__ = (((a__9113__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__9113__auto__)));
var type_b__9116__auto__ = (((b__9114__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__9114__auto__)));
return (""+"should<"+" doesn't know how to handle these types: ["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__9115__auto__)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__9116__auto__)+"]");
})()));
}
});})(_STAR_parent_description_STAR__orig_val__10766_10904,_STAR_parent_description_STAR__temp_val__10767_10905,description__8992__auto____$1,_STAR_parent_description_STAR__orig_val__10676_10815,_STAR_parent_description_STAR__temp_val__10677_10816,description__8992__auto___10814))
,false)],null)));
var chunk__10769_10907 = null;
var count__10770_10908 = (0);
var i__10771_10909 = (0);
while(true){
if((i__10771_10909 < count__10770_10908)){
var component__8993__auto___10912 = cljs.core._nth.call(null,chunk__10769_10907,i__10771_10909);
speclj.components.install.call(null,component__8993__auto___10912,description__8992__auto____$1);


var G__10913 = seq__10768_10906;
var G__10914 = chunk__10769_10907;
var G__10915 = count__10770_10908;
var G__10916 = (i__10771_10909 + (1));
seq__10768_10906 = G__10913;
chunk__10769_10907 = G__10914;
count__10770_10908 = G__10915;
i__10771_10909 = G__10916;
continue;
} else {
var temp__5825__auto___10917 = cljs.core.seq.call(null,seq__10768_10906);
if(temp__5825__auto___10917){
var seq__10768_10918__$1 = temp__5825__auto___10917;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10768_10918__$1)){
var c__5673__auto___10919 = cljs.core.chunk_first.call(null,seq__10768_10918__$1);
var G__10920 = cljs.core.chunk_rest.call(null,seq__10768_10918__$1);
var G__10921 = c__5673__auto___10919;
var G__10922 = cljs.core.count.call(null,c__5673__auto___10919);
var G__10923 = (0);
seq__10768_10906 = G__10920;
chunk__10769_10907 = G__10921;
count__10770_10908 = G__10922;
i__10771_10909 = G__10923;
continue;
} else {
var component__8993__auto___10924 = cljs.core.first.call(null,seq__10768_10918__$1);
speclj.components.install.call(null,component__8993__auto___10924,description__8992__auto____$1);


var G__10925 = cljs.core.next.call(null,seq__10768_10918__$1);
var G__10926 = null;
var G__10927 = (0);
var G__10928 = (0);
seq__10768_10906 = G__10925;
chunk__10769_10907 = G__10926;
count__10770_10908 = G__10927;
i__10771_10909 = G__10928;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__10766_10904);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8992__auto____$1);
}

return description__8992__auto____$1;
})(),(function (){var description__8992__auto____$1 = speclj.components.new_description.call(null,"double pendulum physics",false,"com.micahmartin.pendulums.engine-spec");
var _STAR_parent_description_STAR__orig_val__10772_10929 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__10773_10930 = description__8992__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__10773_10930);

try{var seq__10774_10931 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"computes accelerations for double pendulum",((function (_STAR_parent_description_STAR__orig_val__10772_10929,_STAR_parent_description_STAR__temp_val__10773_10930,description__8992__auto____$1,_STAR_parent_description_STAR__orig_val__10676_10815,_STAR_parent_description_STAR__temp_val__10677_10816,description__8992__auto___10814){
return (function (){
var p1 = com.micahmartin.pendulums.engine.make_pendulum.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"theta","theta",-427510258),0.5,new cljs.core.Keyword(null,"omega","omega",277265652),0.0], null));
var p2 = com.micahmartin.pendulums.engine.make_pendulum.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"theta","theta",-427510258),0.3,new cljs.core.Keyword(null,"omega","omega",277265652),0.0], null));
var sys = com.micahmartin.pendulums.engine.make_system.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1,p2], null));
var accels = com.micahmartin.pendulums.engine.accelerations.call(null,sys);
speclj.components.inc_assertions_BANG_.call(null);

var expected__9134__auto___10935 = (2);
var actual__9135__auto___10936 = cljs.core.count.call(null,accels);
if(cljs.core._EQ_.call(null,expected__9134__auto___10935,actual__9135__auto___10936)){
} else {
throw cljs.core.ex_info.call(null,(""+"Expected: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = expected__9134__auto___10935;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__9102__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__9102__auto__);
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.platform.endl)+"     got: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = actual__9135__auto___10936;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__9102__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__9102__auto__);
}
})())+" (using =)"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__9158__auto___10937 = 0.0;
var actual__9159__auto___10938 = cljs.core.first.call(null,accels);
if(cljs.core._EQ_.call(null,expected__9158__auto___10937,actual__9159__auto___10938)){
throw cljs.core.ex_info.call(null,(""+"Expected: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = expected__9158__auto___10937;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__9102__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__9102__auto__);
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.platform.endl)+"not to =: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = actual__9159__auto___10938;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__9102__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__9102__auto__);
}
})())),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__9158__auto__ = 0.0;
var actual__9159__auto__ = cljs.core.second.call(null,accels);
if(cljs.core._EQ_.call(null,expected__9158__auto__,actual__9159__auto__)){
throw cljs.core.ex_info.call(null,(""+"Expected: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = expected__9158__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__9102__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__9102__auto__);
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.platform.endl)+"not to =: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = actual__9159__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__9102__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__9102__auto__);
}
})())),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
});})(_STAR_parent_description_STAR__orig_val__10772_10929,_STAR_parent_description_STAR__temp_val__10773_10930,description__8992__auto____$1,_STAR_parent_description_STAR__orig_val__10676_10815,_STAR_parent_description_STAR__temp_val__10677_10816,description__8992__auto___10814))
,false),speclj.components.new_characteristic.call(null,"conserves energy approximately for double pendulum",((function (_STAR_parent_description_STAR__orig_val__10772_10929,_STAR_parent_description_STAR__temp_val__10773_10930,description__8992__auto____$1,_STAR_parent_description_STAR__orig_val__10676_10815,_STAR_parent_description_STAR__temp_val__10677_10816,description__8992__auto___10814){
return (function (){
var p1 = com.micahmartin.pendulums.engine.make_pendulum.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"theta","theta",-427510258),0.5,new cljs.core.Keyword(null,"omega","omega",277265652),0.0], null));
var p2 = com.micahmartin.pendulums.engine.make_pendulum.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"theta","theta",-427510258),0.3,new cljs.core.Keyword(null,"omega","omega",277265652),0.0], null));
var sys = com.micahmartin.pendulums.engine.make_system.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1,p2], null));
var initial_energy = com.micahmartin.pendulums.engine.total_energy.call(null,sys);
var final_sys = cljs.core.reduce.call(null,(function (s,_){
return com.micahmartin.pendulums.engine.step.call(null,s,0.001);
}),sys,cljs.core.range.call(null,(100)));
var final_energy = com.micahmartin.pendulums.engine.total_energy.call(null,final_sys);
speclj.components.inc_assertions_BANG_.call(null);

var a__9441__auto__ = com.micahmartin.pendulums.math.abs.call(null,(initial_energy - final_energy));
var b__9442__auto__ = (0.01 * com.micahmartin.pendulums.math.abs.call(null,initial_energy));
if(((typeof a__9441__auto__ === 'number') && (typeof b__9442__auto__ === 'number'))){
if((a__9441__auto__ < b__9442__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,(""+"expected "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a__9441__auto__)+" to be less than "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(b__9442__auto__)+" but got: (< "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a__9441__auto__)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(b__9442__auto__)+")"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__9113__auto__ = a__9441__auto__;
var b__9114__auto__ = b__9442__auto__;
var type_a__9115__auto__ = (((a__9113__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__9113__auto__)));
var type_b__9116__auto__ = (((b__9114__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__9114__auto__)));
return (""+"should<"+" doesn't know how to handle these types: ["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__9115__auto__)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__9116__auto__)+"]");
})()));
}
});})(_STAR_parent_description_STAR__orig_val__10772_10929,_STAR_parent_description_STAR__temp_val__10773_10930,description__8992__auto____$1,_STAR_parent_description_STAR__orig_val__10676_10815,_STAR_parent_description_STAR__temp_val__10677_10816,description__8992__auto___10814))
,false)],null)));
var chunk__10775_10932 = null;
var count__10776_10933 = (0);
var i__10777_10934 = (0);
while(true){
if((i__10777_10934 < count__10776_10933)){
var component__8993__auto___10939 = cljs.core._nth.call(null,chunk__10775_10932,i__10777_10934);
speclj.components.install.call(null,component__8993__auto___10939,description__8992__auto____$1);


var G__10940 = seq__10774_10931;
var G__10941 = chunk__10775_10932;
var G__10942 = count__10776_10933;
var G__10943 = (i__10777_10934 + (1));
seq__10774_10931 = G__10940;
chunk__10775_10932 = G__10941;
count__10776_10933 = G__10942;
i__10777_10934 = G__10943;
continue;
} else {
var temp__5825__auto___10944 = cljs.core.seq.call(null,seq__10774_10931);
if(temp__5825__auto___10944){
var seq__10774_10945__$1 = temp__5825__auto___10944;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10774_10945__$1)){
var c__5673__auto___10946 = cljs.core.chunk_first.call(null,seq__10774_10945__$1);
var G__10947 = cljs.core.chunk_rest.call(null,seq__10774_10945__$1);
var G__10948 = c__5673__auto___10946;
var G__10949 = cljs.core.count.call(null,c__5673__auto___10946);
var G__10950 = (0);
seq__10774_10931 = G__10947;
chunk__10775_10932 = G__10948;
count__10776_10933 = G__10949;
i__10777_10934 = G__10950;
continue;
} else {
var component__8993__auto___10951 = cljs.core.first.call(null,seq__10774_10945__$1);
speclj.components.install.call(null,component__8993__auto___10951,description__8992__auto____$1);


var G__10952 = cljs.core.next.call(null,seq__10774_10945__$1);
var G__10953 = null;
var G__10954 = (0);
var G__10955 = (0);
seq__10774_10931 = G__10952;
chunk__10775_10932 = G__10953;
count__10776_10933 = G__10954;
i__10777_10934 = G__10955;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__10772_10929);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8992__auto____$1);
}

return description__8992__auto____$1;
})(),(function (){var description__8992__auto____$1 = speclj.components.new_description.call(null,"pendulum positions",false,"com.micahmartin.pendulums.engine-spec");
var _STAR_parent_description_STAR__orig_val__10778_10956 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__10779_10957 = description__8992__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__10779_10957);

try{var seq__10780_10958 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"calculates cartesian position of single pendulum bob",((function (_STAR_parent_description_STAR__orig_val__10778_10956,_STAR_parent_description_STAR__temp_val__10779_10957,description__8992__auto____$1,_STAR_parent_description_STAR__orig_val__10676_10815,_STAR_parent_description_STAR__temp_val__10677_10816,description__8992__auto___10814){
return (function (){
var p = com.micahmartin.pendulums.engine.make_pendulum.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"theta","theta",-427510258),0.0,new cljs.core.Keyword(null,"length","length",588987862),1.0], null));
var sys = com.micahmartin.pendulums.engine.make_system.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p], null));
var positions = com.micahmartin.pendulums.engine.bob_positions.call(null,sys);
speclj.components.inc_assertions_BANG_.call(null);

var a__9441__auto___10962 = com.micahmartin.pendulums.math.abs.call(null,(0.0 - cljs.core.first.call(null,cljs.core.first.call(null,positions))));
var b__9442__auto___10963 = 1.0E-4;
if(((typeof a__9441__auto___10962 === 'number') && (typeof b__9442__auto___10963 === 'number'))){
if((a__9441__auto___10962 < b__9442__auto___10963)){
} else {
throw cljs.core.ex_info.call(null,(""+"expected "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a__9441__auto___10962)+" to be less than "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(b__9442__auto___10963)+" but got: (< "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a__9441__auto___10962)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(b__9442__auto___10963)+")"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__9113__auto__ = a__9441__auto___10962;
var b__9114__auto__ = b__9442__auto___10963;
var type_a__9115__auto__ = (((a__9113__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__9113__auto__)));
var type_b__9116__auto__ = (((b__9114__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__9114__auto__)));
return (""+"should<"+" doesn't know how to handle these types: ["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__9115__auto__)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__9116__auto__)+"]");
})()));
}

speclj.components.inc_assertions_BANG_.call(null);

var a__9441__auto__ = com.micahmartin.pendulums.math.abs.call(null,(-1.0 - cljs.core.second.call(null,cljs.core.first.call(null,positions))));
var b__9442__auto__ = 1.0E-4;
if(((typeof a__9441__auto__ === 'number') && (typeof b__9442__auto__ === 'number'))){
if((a__9441__auto__ < b__9442__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,(""+"expected "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a__9441__auto__)+" to be less than "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(b__9442__auto__)+" but got: (< "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a__9441__auto__)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(b__9442__auto__)+")"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__9113__auto__ = a__9441__auto__;
var b__9114__auto__ = b__9442__auto__;
var type_a__9115__auto__ = (((a__9113__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__9113__auto__)));
var type_b__9116__auto__ = (((b__9114__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__9114__auto__)));
return (""+"should<"+" doesn't know how to handle these types: ["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__9115__auto__)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__9116__auto__)+"]");
})()));
}
});})(_STAR_parent_description_STAR__orig_val__10778_10956,_STAR_parent_description_STAR__temp_val__10779_10957,description__8992__auto____$1,_STAR_parent_description_STAR__orig_val__10676_10815,_STAR_parent_description_STAR__temp_val__10677_10816,description__8992__auto___10814))
,false),speclj.components.new_characteristic.call(null,"calculates positions for double pendulum",((function (_STAR_parent_description_STAR__orig_val__10778_10956,_STAR_parent_description_STAR__temp_val__10779_10957,description__8992__auto____$1,_STAR_parent_description_STAR__orig_val__10676_10815,_STAR_parent_description_STAR__temp_val__10677_10816,description__8992__auto___10814){
return (function (){
var p1 = com.micahmartin.pendulums.engine.make_pendulum.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"theta","theta",-427510258),0.0,new cljs.core.Keyword(null,"length","length",588987862),1.0], null));
var p2 = com.micahmartin.pendulums.engine.make_pendulum.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"theta","theta",-427510258),0.0,new cljs.core.Keyword(null,"length","length",588987862),1.0], null));
var sys = com.micahmartin.pendulums.engine.make_system.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1,p2], null));
var positions = com.micahmartin.pendulums.engine.bob_positions.call(null,sys);
speclj.components.inc_assertions_BANG_.call(null);

var expected__9134__auto___10964 = (2);
var actual__9135__auto___10965 = cljs.core.count.call(null,positions);
if(cljs.core._EQ_.call(null,expected__9134__auto___10964,actual__9135__auto___10965)){
} else {
throw cljs.core.ex_info.call(null,(""+"Expected: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = expected__9134__auto___10964;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__9102__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__9102__auto__);
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.platform.endl)+"     got: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = actual__9135__auto___10965;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__9102__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__9102__auto__);
}
})())+" (using =)"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var a__9441__auto___10966 = com.micahmartin.pendulums.math.abs.call(null,cljs.core.first.call(null,cljs.core.first.call(null,positions)));
var b__9442__auto___10967 = 1.0E-4;
if(((typeof a__9441__auto___10966 === 'number') && (typeof b__9442__auto___10967 === 'number'))){
if((a__9441__auto___10966 < b__9442__auto___10967)){
} else {
throw cljs.core.ex_info.call(null,(""+"expected "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a__9441__auto___10966)+" to be less than "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(b__9442__auto___10967)+" but got: (< "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a__9441__auto___10966)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(b__9442__auto___10967)+")"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__9113__auto__ = a__9441__auto___10966;
var b__9114__auto__ = b__9442__auto___10967;
var type_a__9115__auto__ = (((a__9113__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__9113__auto__)));
var type_b__9116__auto__ = (((b__9114__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__9114__auto__)));
return (""+"should<"+" doesn't know how to handle these types: ["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__9115__auto__)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__9116__auto__)+"]");
})()));
}

speclj.components.inc_assertions_BANG_.call(null);

var a__9441__auto___10968 = com.micahmartin.pendulums.math.abs.call(null,(-1.0 - cljs.core.second.call(null,cljs.core.first.call(null,positions))));
var b__9442__auto___10969 = 1.0E-4;
if(((typeof a__9441__auto___10968 === 'number') && (typeof b__9442__auto___10969 === 'number'))){
if((a__9441__auto___10968 < b__9442__auto___10969)){
} else {
throw cljs.core.ex_info.call(null,(""+"expected "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a__9441__auto___10968)+" to be less than "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(b__9442__auto___10969)+" but got: (< "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a__9441__auto___10968)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(b__9442__auto___10969)+")"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__9113__auto__ = a__9441__auto___10968;
var b__9114__auto__ = b__9442__auto___10969;
var type_a__9115__auto__ = (((a__9113__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__9113__auto__)));
var type_b__9116__auto__ = (((b__9114__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__9114__auto__)));
return (""+"should<"+" doesn't know how to handle these types: ["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__9115__auto__)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__9116__auto__)+"]");
})()));
}

speclj.components.inc_assertions_BANG_.call(null);

var a__9441__auto___10970 = com.micahmartin.pendulums.math.abs.call(null,cljs.core.first.call(null,cljs.core.second.call(null,positions)));
var b__9442__auto___10971 = 1.0E-4;
if(((typeof a__9441__auto___10970 === 'number') && (typeof b__9442__auto___10971 === 'number'))){
if((a__9441__auto___10970 < b__9442__auto___10971)){
} else {
throw cljs.core.ex_info.call(null,(""+"expected "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a__9441__auto___10970)+" to be less than "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(b__9442__auto___10971)+" but got: (< "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a__9441__auto___10970)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(b__9442__auto___10971)+")"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__9113__auto__ = a__9441__auto___10970;
var b__9114__auto__ = b__9442__auto___10971;
var type_a__9115__auto__ = (((a__9113__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__9113__auto__)));
var type_b__9116__auto__ = (((b__9114__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__9114__auto__)));
return (""+"should<"+" doesn't know how to handle these types: ["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__9115__auto__)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__9116__auto__)+"]");
})()));
}

speclj.components.inc_assertions_BANG_.call(null);

var a__9441__auto__ = com.micahmartin.pendulums.math.abs.call(null,(-2.0 - cljs.core.second.call(null,cljs.core.second.call(null,positions))));
var b__9442__auto__ = 1.0E-4;
if(((typeof a__9441__auto__ === 'number') && (typeof b__9442__auto__ === 'number'))){
if((a__9441__auto__ < b__9442__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,(""+"expected "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a__9441__auto__)+" to be less than "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(b__9442__auto__)+" but got: (< "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a__9441__auto__)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(b__9442__auto__)+")"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__9113__auto__ = a__9441__auto__;
var b__9114__auto__ = b__9442__auto__;
var type_a__9115__auto__ = (((a__9113__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__9113__auto__)));
var type_b__9116__auto__ = (((b__9114__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__9114__auto__)));
return (""+"should<"+" doesn't know how to handle these types: ["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__9115__auto__)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__9116__auto__)+"]");
})()));
}
});})(_STAR_parent_description_STAR__orig_val__10778_10956,_STAR_parent_description_STAR__temp_val__10779_10957,description__8992__auto____$1,_STAR_parent_description_STAR__orig_val__10676_10815,_STAR_parent_description_STAR__temp_val__10677_10816,description__8992__auto___10814))
,false)],null)));
var chunk__10781_10959 = null;
var count__10782_10960 = (0);
var i__10783_10961 = (0);
while(true){
if((i__10783_10961 < count__10782_10960)){
var component__8993__auto___10972 = cljs.core._nth.call(null,chunk__10781_10959,i__10783_10961);
speclj.components.install.call(null,component__8993__auto___10972,description__8992__auto____$1);


var G__10973 = seq__10780_10958;
var G__10974 = chunk__10781_10959;
var G__10975 = count__10782_10960;
var G__10976 = (i__10783_10961 + (1));
seq__10780_10958 = G__10973;
chunk__10781_10959 = G__10974;
count__10782_10960 = G__10975;
i__10783_10961 = G__10976;
continue;
} else {
var temp__5825__auto___10977 = cljs.core.seq.call(null,seq__10780_10958);
if(temp__5825__auto___10977){
var seq__10780_10978__$1 = temp__5825__auto___10977;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10780_10978__$1)){
var c__5673__auto___10979 = cljs.core.chunk_first.call(null,seq__10780_10978__$1);
var G__10980 = cljs.core.chunk_rest.call(null,seq__10780_10978__$1);
var G__10981 = c__5673__auto___10979;
var G__10982 = cljs.core.count.call(null,c__5673__auto___10979);
var G__10983 = (0);
seq__10780_10958 = G__10980;
chunk__10781_10959 = G__10981;
count__10782_10960 = G__10982;
i__10783_10961 = G__10983;
continue;
} else {
var component__8993__auto___10984 = cljs.core.first.call(null,seq__10780_10978__$1);
speclj.components.install.call(null,component__8993__auto___10984,description__8992__auto____$1);


var G__10985 = cljs.core.next.call(null,seq__10780_10978__$1);
var G__10986 = null;
var G__10987 = (0);
var G__10988 = (0);
seq__10780_10958 = G__10985;
chunk__10781_10959 = G__10986;
count__10782_10960 = G__10987;
i__10783_10961 = G__10988;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__10778_10956);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8992__auto____$1);
}

return description__8992__auto____$1;
})(),(function (){var description__8992__auto____$1 = speclj.components.new_description.call(null,"step-with-trails",false,"com.micahmartin.pendulums.engine-spec");
var _STAR_parent_description_STAR__orig_val__10784_10989 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__10785_10990 = description__8992__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__10785_10990);

try{var seq__10786_10991 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"returns new system and trails",((function (_STAR_parent_description_STAR__orig_val__10784_10989,_STAR_parent_description_STAR__temp_val__10785_10990,description__8992__auto____$1,_STAR_parent_description_STAR__orig_val__10676_10815,_STAR_parent_description_STAR__temp_val__10677_10816,description__8992__auto___10814){
return (function (){
var p = com.micahmartin.pendulums.engine.make_pendulum.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"theta","theta",-427510258),0.5,new cljs.core.Keyword(null,"omega","omega",277265652),0.0], null));
var sys = com.micahmartin.pendulums.engine.make_system.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p], null));
var vec__10802 = com.micahmartin.pendulums.engine.step_with_trails.call(null,sys,0.01,3.0,cljs.core.PersistentVector.EMPTY,(1000));
var new_sys = cljs.core.nth.call(null,vec__10802,(0),null);
var new_trails = cljs.core.nth.call(null,vec__10802,(1),null);
speclj.components.inc_assertions_BANG_.call(null);

var expected__9134__auto___10995 = (1);
var actual__9135__auto___10996 = cljs.core.count.call(null,new_trails);
if(cljs.core._EQ_.call(null,expected__9134__auto___10995,actual__9135__auto___10996)){
} else {
throw cljs.core.ex_info.call(null,(""+"Expected: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = expected__9134__auto___10995;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__9102__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__9102__auto__);
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.platform.endl)+"     got: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = actual__9135__auto___10996;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__9102__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__9102__auto__);
}
})())+" (using =)"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__9134__auto___10997 = (1);
var actual__9135__auto___10998 = cljs.core.count.call(null,cljs.core.first.call(null,new_trails));
if(cljs.core._EQ_.call(null,expected__9134__auto___10997,actual__9135__auto___10998)){
} else {
throw cljs.core.ex_info.call(null,(""+"Expected: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = expected__9134__auto___10997;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__9102__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__9102__auto__);
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.platform.endl)+"     got: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = actual__9135__auto___10998;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__9102__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__9102__auto__);
}
})())+" (using =)"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__9134__auto__ = (1000);
var actual__9135__auto__ = new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.first.call(null,new_trails)));
if(cljs.core._EQ_.call(null,expected__9134__auto__,actual__9135__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,(""+"Expected: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = expected__9134__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__9102__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__9102__auto__);
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.platform.endl)+"     got: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = actual__9135__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__9102__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__9102__auto__);
}
})())+" (using =)"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__10784_10989,_STAR_parent_description_STAR__temp_val__10785_10990,description__8992__auto____$1,_STAR_parent_description_STAR__orig_val__10676_10815,_STAR_parent_description_STAR__temp_val__10677_10816,description__8992__auto___10814))
,false),speclj.components.new_characteristic.call(null,"accumulates trail points over time",((function (_STAR_parent_description_STAR__orig_val__10784_10989,_STAR_parent_description_STAR__temp_val__10785_10990,description__8992__auto____$1,_STAR_parent_description_STAR__orig_val__10676_10815,_STAR_parent_description_STAR__temp_val__10677_10816,description__8992__auto___10814){
return (function (){
var p = com.micahmartin.pendulums.engine.make_pendulum.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"theta","theta",-427510258),0.5,new cljs.core.Keyword(null,"omega","omega",277265652),0.0], null));
var sys = com.micahmartin.pendulums.engine.make_system.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p], null));
var vec__10805 = com.micahmartin.pendulums.engine.step_with_trails.call(null,sys,0.01,3.0,cljs.core.PersistentVector.EMPTY,(1000));
var sys1 = cljs.core.nth.call(null,vec__10805,(0),null);
var trails1 = cljs.core.nth.call(null,vec__10805,(1),null);
var vec__10808 = com.micahmartin.pendulums.engine.step_with_trails.call(null,sys1,0.01,3.0,trails1,(2000));
var sys2 = cljs.core.nth.call(null,vec__10808,(0),null);
var trails2 = cljs.core.nth.call(null,vec__10808,(1),null);
speclj.components.inc_assertions_BANG_.call(null);

var expected__9134__auto__ = (2);
var actual__9135__auto__ = cljs.core.count.call(null,cljs.core.first.call(null,trails2));
if(cljs.core._EQ_.call(null,expected__9134__auto__,actual__9135__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,(""+"Expected: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = expected__9134__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__9102__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__9102__auto__);
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.platform.endl)+"     got: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = actual__9135__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__9102__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__9102__auto__);
}
})())+" (using =)"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__10784_10989,_STAR_parent_description_STAR__temp_val__10785_10990,description__8992__auto____$1,_STAR_parent_description_STAR__orig_val__10676_10815,_STAR_parent_description_STAR__temp_val__10677_10816,description__8992__auto___10814))
,false),speclj.components.new_characteristic.call(null,"prunes old trail points based on duration",((function (_STAR_parent_description_STAR__orig_val__10784_10989,_STAR_parent_description_STAR__temp_val__10785_10990,description__8992__auto____$1,_STAR_parent_description_STAR__orig_val__10676_10815,_STAR_parent_description_STAR__temp_val__10677_10816,description__8992__auto___10814){
return (function (){
var p = com.micahmartin.pendulums.engine.make_pendulum.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"theta","theta",-427510258),0.5,new cljs.core.Keyword(null,"omega","omega",277265652),0.0], null));
var sys = com.micahmartin.pendulums.engine.make_system.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p], null));
var old_trails = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.Keyword(null,"time","time",1385887882),(1000)], null)], null)], null);
var vec__10811 = com.micahmartin.pendulums.engine.step_with_trails.call(null,sys,0.01,3.0,old_trails,(5000));
var _ = cljs.core.nth.call(null,vec__10811,(0),null);
var new_trails = cljs.core.nth.call(null,vec__10811,(1),null);
speclj.components.inc_assertions_BANG_.call(null);

var expected__9134__auto___10999 = (1);
var actual__9135__auto___11000 = cljs.core.count.call(null,cljs.core.first.call(null,new_trails));
if(cljs.core._EQ_.call(null,expected__9134__auto___10999,actual__9135__auto___11000)){
} else {
throw cljs.core.ex_info.call(null,(""+"Expected: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = expected__9134__auto___10999;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__9102__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__9102__auto__);
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.platform.endl)+"     got: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = actual__9135__auto___11000;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__9102__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__9102__auto__);
}
})())+" (using =)"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__9134__auto__ = (5000);
var actual__9135__auto__ = new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.first.call(null,new_trails)));
if(cljs.core._EQ_.call(null,expected__9134__auto__,actual__9135__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,(""+"Expected: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = expected__9134__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__9102__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__9102__auto__);
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.platform.endl)+"     got: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = actual__9135__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__9102__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__9102__auto__);
}
})())+" (using =)"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__10784_10989,_STAR_parent_description_STAR__temp_val__10785_10990,description__8992__auto____$1,_STAR_parent_description_STAR__orig_val__10676_10815,_STAR_parent_description_STAR__temp_val__10677_10816,description__8992__auto___10814))
,false)],null)));
var chunk__10787_10992 = null;
var count__10788_10993 = (0);
var i__10789_10994 = (0);
while(true){
if((i__10789_10994 < count__10788_10993)){
var component__8993__auto___11001 = cljs.core._nth.call(null,chunk__10787_10992,i__10789_10994);
speclj.components.install.call(null,component__8993__auto___11001,description__8992__auto____$1);


var G__11002 = seq__10786_10991;
var G__11003 = chunk__10787_10992;
var G__11004 = count__10788_10993;
var G__11005 = (i__10789_10994 + (1));
seq__10786_10991 = G__11002;
chunk__10787_10992 = G__11003;
count__10788_10993 = G__11004;
i__10789_10994 = G__11005;
continue;
} else {
var temp__5825__auto___11006 = cljs.core.seq.call(null,seq__10786_10991);
if(temp__5825__auto___11006){
var seq__10786_11007__$1 = temp__5825__auto___11006;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10786_11007__$1)){
var c__5673__auto___11008 = cljs.core.chunk_first.call(null,seq__10786_11007__$1);
var G__11009 = cljs.core.chunk_rest.call(null,seq__10786_11007__$1);
var G__11010 = c__5673__auto___11008;
var G__11011 = cljs.core.count.call(null,c__5673__auto___11008);
var G__11012 = (0);
seq__10786_10991 = G__11009;
chunk__10787_10992 = G__11010;
count__10788_10993 = G__11011;
i__10789_10994 = G__11012;
continue;
} else {
var component__8993__auto___11013 = cljs.core.first.call(null,seq__10786_11007__$1);
speclj.components.install.call(null,component__8993__auto___11013,description__8992__auto____$1);


var G__11014 = cljs.core.next.call(null,seq__10786_11007__$1);
var G__11015 = null;
var G__11016 = (0);
var G__11017 = (0);
seq__10786_10991 = G__11014;
chunk__10787_10992 = G__11015;
count__10788_10993 = G__11016;
i__10789_10994 = G__11017;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__10784_10989);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8992__auto____$1);
}

return description__8992__auto____$1;
})()],null)));
var chunk__10679_10818 = null;
var count__10680_10819 = (0);
var i__10681_10820 = (0);
while(true){
if((i__10681_10820 < count__10680_10819)){
var component__8993__auto___11018 = cljs.core._nth.call(null,chunk__10679_10818,i__10681_10820);
speclj.components.install.call(null,component__8993__auto___11018,description__8992__auto___10814);


var G__11019 = seq__10678_10817;
var G__11020 = chunk__10679_10818;
var G__11021 = count__10680_10819;
var G__11022 = (i__10681_10820 + (1));
seq__10678_10817 = G__11019;
chunk__10679_10818 = G__11020;
count__10680_10819 = G__11021;
i__10681_10820 = G__11022;
continue;
} else {
var temp__5825__auto___11023 = cljs.core.seq.call(null,seq__10678_10817);
if(temp__5825__auto___11023){
var seq__10678_11024__$1 = temp__5825__auto___11023;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10678_11024__$1)){
var c__5673__auto___11025 = cljs.core.chunk_first.call(null,seq__10678_11024__$1);
var G__11026 = cljs.core.chunk_rest.call(null,seq__10678_11024__$1);
var G__11027 = c__5673__auto___11025;
var G__11028 = cljs.core.count.call(null,c__5673__auto___11025);
var G__11029 = (0);
seq__10678_10817 = G__11026;
chunk__10679_10818 = G__11027;
count__10680_10819 = G__11028;
i__10681_10820 = G__11029;
continue;
} else {
var component__8993__auto___11030 = cljs.core.first.call(null,seq__10678_11024__$1);
speclj.components.install.call(null,component__8993__auto___11030,description__8992__auto___10814);


var G__11031 = cljs.core.next.call(null,seq__10678_11024__$1);
var G__11032 = null;
var G__11033 = (0);
var G__11034 = (0);
seq__10678_10817 = G__11031;
chunk__10679_10818 = G__11032;
count__10680_10819 = G__11033;
i__10681_10820 = G__11034;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__10676_10815);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8992__auto___10814);
}


//# sourceMappingURL=engine_spec.js.map
