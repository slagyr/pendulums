// Compiled by ClojureScript 1.12.134 {:optimizations :none}
goog.provide('com.micahmartin.pendulums.core_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('com.micahmartin.pendulums.core');
var description__8809__auto___9370 = speclj.components.new_description.call(null,"Core",false,"com.micahmartin.pendulums.core-spec");
var _STAR_parent_description_STAR__orig_val__9364_9371 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__9365_9372 = description__8809__auto___9370;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__9365_9372);

try{var seq__9366_9373 = cljs.core.seq.call(null,cljs.core.PersistentVector.EMPTY);
var chunk__9367_9374 = null;
var count__9368_9375 = (0);
var i__9369_9376 = (0);
while(true){
if((i__9369_9376 < count__9368_9375)){
var component__8810__auto___9377 = cljs.core._nth.call(null,chunk__9367_9374,i__9369_9376);
speclj.components.install.call(null,component__8810__auto___9377,description__8809__auto___9370);


var G__9378 = seq__9366_9373;
var G__9379 = chunk__9367_9374;
var G__9380 = count__9368_9375;
var G__9381 = (i__9369_9376 + (1));
seq__9366_9373 = G__9378;
chunk__9367_9374 = G__9379;
count__9368_9375 = G__9380;
i__9369_9376 = G__9381;
continue;
} else {
var temp__5825__auto___9382 = cljs.core.seq.call(null,seq__9366_9373);
if(temp__5825__auto___9382){
var seq__9366_9383__$1 = temp__5825__auto___9382;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9366_9383__$1)){
var c__5673__auto___9384 = cljs.core.chunk_first.call(null,seq__9366_9383__$1);
var G__9385 = cljs.core.chunk_rest.call(null,seq__9366_9383__$1);
var G__9386 = c__5673__auto___9384;
var G__9387 = cljs.core.count.call(null,c__5673__auto___9384);
var G__9388 = (0);
seq__9366_9373 = G__9385;
chunk__9367_9374 = G__9386;
count__9368_9375 = G__9387;
i__9369_9376 = G__9388;
continue;
} else {
var component__8810__auto___9389 = cljs.core.first.call(null,seq__9366_9383__$1);
speclj.components.install.call(null,component__8810__auto___9389,description__8809__auto___9370);


var G__9390 = cljs.core.next.call(null,seq__9366_9383__$1);
var G__9391 = null;
var G__9392 = (0);
var G__9393 = (0);
seq__9366_9373 = G__9390;
chunk__9367_9374 = G__9391;
count__9368_9375 = G__9392;
i__9369_9376 = G__9393;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__9364_9371);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8809__auto___9370);
}


//# sourceMappingURL=core_spec.js.map
