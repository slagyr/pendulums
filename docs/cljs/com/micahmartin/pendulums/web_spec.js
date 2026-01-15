// Compiled by ClojureScript 1.12.134 {:optimizations :none}
goog.provide('com.micahmartin.pendulums.web_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('com.micahmartin.pendulums.web');
var description__8807__auto___10465 = speclj.components.new_description.call(null,"Web",false,"com.micahmartin.pendulums.web-spec");
var _STAR_parent_description_STAR__orig_val__10459_10466 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__10460_10467 = description__8807__auto___10465;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__10460_10467);

try{var seq__10461_10468 = cljs.core.seq.call(null,cljs.core.PersistentVector.EMPTY);
var chunk__10462_10469 = null;
var count__10463_10470 = (0);
var i__10464_10471 = (0);
while(true){
if((i__10464_10471 < count__10463_10470)){
var component__8808__auto___10472 = cljs.core._nth.call(null,chunk__10462_10469,i__10464_10471);
speclj.components.install.call(null,component__8808__auto___10472,description__8807__auto___10465);


var G__10473 = seq__10461_10468;
var G__10474 = chunk__10462_10469;
var G__10475 = count__10463_10470;
var G__10476 = (i__10464_10471 + (1));
seq__10461_10468 = G__10473;
chunk__10462_10469 = G__10474;
count__10463_10470 = G__10475;
i__10464_10471 = G__10476;
continue;
} else {
var temp__5825__auto___10477 = cljs.core.seq.call(null,seq__10461_10468);
if(temp__5825__auto___10477){
var seq__10461_10478__$1 = temp__5825__auto___10477;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10461_10478__$1)){
var c__5673__auto___10479 = cljs.core.chunk_first.call(null,seq__10461_10478__$1);
var G__10480 = cljs.core.chunk_rest.call(null,seq__10461_10478__$1);
var G__10481 = c__5673__auto___10479;
var G__10482 = cljs.core.count.call(null,c__5673__auto___10479);
var G__10483 = (0);
seq__10461_10468 = G__10480;
chunk__10462_10469 = G__10481;
count__10463_10470 = G__10482;
i__10464_10471 = G__10483;
continue;
} else {
var component__8808__auto___10484 = cljs.core.first.call(null,seq__10461_10478__$1);
speclj.components.install.call(null,component__8808__auto___10484,description__8807__auto___10465);


var G__10485 = cljs.core.next.call(null,seq__10461_10478__$1);
var G__10486 = null;
var G__10487 = (0);
var G__10488 = (0);
seq__10461_10468 = G__10485;
chunk__10462_10469 = G__10486;
count__10463_10470 = G__10487;
i__10464_10471 = G__10488;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__10459_10466);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8807__auto___10465);
}


//# sourceMappingURL=web_spec.js.map
