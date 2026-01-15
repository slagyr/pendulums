// Compiled by ClojureScript 1.12.134 {:optimizations :none}
goog.provide('com.micahmartin.pendulums.ui_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('com.micahmartin.pendulums.engine');
goog.require('com.micahmartin.pendulums.math');
goog.require('com.micahmartin.pendulums.ui');
var description__8807__auto___9837 = speclj.components.new_description.call(null,"UI Shared Code",false,"com.micahmartin.pendulums.ui-spec");
var _STAR_parent_description_STAR__orig_val__9291_9838 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__9292_9839 = description__8807__auto___9837;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__9292_9839);

try{var seq__9293_9840 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,9,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var description__8807__auto____$1 = speclj.components.new_description.call(null,"hex->css",false,"com.micahmartin.pendulums.ui-spec");
var _STAR_parent_description_STAR__orig_val__9567_9844 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__9568_9845 = description__8807__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__9568_9845);

try{var seq__9569_9846 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"converts hex integer to CSS color string",((function (_STAR_parent_description_STAR__orig_val__9567_9844,_STAR_parent_description_STAR__temp_val__9568_9845,description__8807__auto____$1,_STAR_parent_description_STAR__orig_val__9291_9838,_STAR_parent_description_STAR__temp_val__9292_9839,description__8807__auto___9837){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__8949__auto___9850 = "#ef4444";
var actual__8950__auto___9851 = com.micahmartin.pendulums.ui.hex__GT_css.call(null,(15680580));
if(cljs.core._EQ_.call(null,expected__8949__auto___9850,actual__8950__auto___9851)){
} else {
throw cljs.core.ex_info.call(null,(""+"Expected: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = expected__8949__auto___9850;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.platform.endl)+"     got: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = actual__8950__auto___9851;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+" (using =)"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8949__auto___9852 = "#000000";
var actual__8950__auto___9853 = com.micahmartin.pendulums.ui.hex__GT_css.call(null,(0));
if(cljs.core._EQ_.call(null,expected__8949__auto___9852,actual__8950__auto___9853)){
} else {
throw cljs.core.ex_info.call(null,(""+"Expected: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = expected__8949__auto___9852;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.platform.endl)+"     got: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = actual__8950__auto___9853;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+" (using =)"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8949__auto__ = "#ffffff";
var actual__8950__auto__ = com.micahmartin.pendulums.ui.hex__GT_css.call(null,(16777215));
if(cljs.core._EQ_.call(null,expected__8949__auto__,actual__8950__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,(""+"Expected: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = expected__8949__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.platform.endl)+"     got: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = actual__8950__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+" (using =)"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__9567_9844,_STAR_parent_description_STAR__temp_val__9568_9845,description__8807__auto____$1,_STAR_parent_description_STAR__orig_val__9291_9838,_STAR_parent_description_STAR__temp_val__9292_9839,description__8807__auto___9837))
,false),speclj.components.new_characteristic.call(null,"pads short hex values with leading zeros",((function (_STAR_parent_description_STAR__orig_val__9567_9844,_STAR_parent_description_STAR__temp_val__9568_9845,description__8807__auto____$1,_STAR_parent_description_STAR__orig_val__9291_9838,_STAR_parent_description_STAR__temp_val__9292_9839,description__8807__auto___9837){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__8949__auto___9854 = "#000001";
var actual__8950__auto___9855 = com.micahmartin.pendulums.ui.hex__GT_css.call(null,(1));
if(cljs.core._EQ_.call(null,expected__8949__auto___9854,actual__8950__auto___9855)){
} else {
throw cljs.core.ex_info.call(null,(""+"Expected: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = expected__8949__auto___9854;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.platform.endl)+"     got: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = actual__8950__auto___9855;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+" (using =)"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8949__auto___9856 = "#0000ff";
var actual__8950__auto___9857 = com.micahmartin.pendulums.ui.hex__GT_css.call(null,(255));
if(cljs.core._EQ_.call(null,expected__8949__auto___9856,actual__8950__auto___9857)){
} else {
throw cljs.core.ex_info.call(null,(""+"Expected: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = expected__8949__auto___9856;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.platform.endl)+"     got: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = actual__8950__auto___9857;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+" (using =)"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8949__auto__ = "#00ff00";
var actual__8950__auto__ = com.micahmartin.pendulums.ui.hex__GT_css.call(null,(65280));
if(cljs.core._EQ_.call(null,expected__8949__auto__,actual__8950__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,(""+"Expected: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = expected__8949__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.platform.endl)+"     got: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = actual__8950__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+" (using =)"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__9567_9844,_STAR_parent_description_STAR__temp_val__9568_9845,description__8807__auto____$1,_STAR_parent_description_STAR__orig_val__9291_9838,_STAR_parent_description_STAR__temp_val__9292_9839,description__8807__auto___9837))
,false)],null)));
var chunk__9570_9847 = null;
var count__9571_9848 = (0);
var i__9572_9849 = (0);
while(true){
if((i__9572_9849 < count__9571_9848)){
var component__8808__auto___9858 = cljs.core._nth.call(null,chunk__9570_9847,i__9572_9849);
speclj.components.install.call(null,component__8808__auto___9858,description__8807__auto____$1);


var G__9859 = seq__9569_9846;
var G__9860 = chunk__9570_9847;
var G__9861 = count__9571_9848;
var G__9862 = (i__9572_9849 + (1));
seq__9569_9846 = G__9859;
chunk__9570_9847 = G__9860;
count__9571_9848 = G__9861;
i__9572_9849 = G__9862;
continue;
} else {
var temp__5825__auto___9863 = cljs.core.seq.call(null,seq__9569_9846);
if(temp__5825__auto___9863){
var seq__9569_9864__$1 = temp__5825__auto___9863;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9569_9864__$1)){
var c__5673__auto___9865 = cljs.core.chunk_first.call(null,seq__9569_9864__$1);
var G__9866 = cljs.core.chunk_rest.call(null,seq__9569_9864__$1);
var G__9867 = c__5673__auto___9865;
var G__9868 = cljs.core.count.call(null,c__5673__auto___9865);
var G__9869 = (0);
seq__9569_9846 = G__9866;
chunk__9570_9847 = G__9867;
count__9571_9848 = G__9868;
i__9572_9849 = G__9869;
continue;
} else {
var component__8808__auto___9870 = cljs.core.first.call(null,seq__9569_9864__$1);
speclj.components.install.call(null,component__8808__auto___9870,description__8807__auto____$1);


var G__9871 = cljs.core.next.call(null,seq__9569_9864__$1);
var G__9872 = null;
var G__9873 = (0);
var G__9874 = (0);
seq__9569_9846 = G__9871;
chunk__9570_9847 = G__9872;
count__9571_9848 = G__9873;
i__9572_9849 = G__9874;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__9567_9844);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8807__auto____$1);
}

return description__8807__auto____$1;
})(),(function (){var description__8807__auto____$1 = speclj.components.new_description.call(null,"hex->rgb",false,"com.micahmartin.pendulums.ui-spec");
var _STAR_parent_description_STAR__orig_val__9573_9875 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__9574_9876 = description__8807__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__9574_9876);

try{var seq__9575_9877 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"converts hex integer to RGB vector",((function (_STAR_parent_description_STAR__orig_val__9573_9875,_STAR_parent_description_STAR__temp_val__9574_9876,description__8807__auto____$1,_STAR_parent_description_STAR__orig_val__9291_9838,_STAR_parent_description_STAR__temp_val__9292_9839,description__8807__auto___9837){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__8949__auto___9881 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(239),(68),(68)], null);
var actual__8950__auto___9882 = com.micahmartin.pendulums.ui.hex__GT_rgb.call(null,(15680580));
if(cljs.core._EQ_.call(null,expected__8949__auto___9881,actual__8950__auto___9882)){
} else {
throw cljs.core.ex_info.call(null,(""+"Expected: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = expected__8949__auto___9881;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.platform.endl)+"     got: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = actual__8950__auto___9882;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+" (using =)"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8949__auto___9883 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null);
var actual__8950__auto___9884 = com.micahmartin.pendulums.ui.hex__GT_rgb.call(null,(0));
if(cljs.core._EQ_.call(null,expected__8949__auto___9883,actual__8950__auto___9884)){
} else {
throw cljs.core.ex_info.call(null,(""+"Expected: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = expected__8949__auto___9883;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.platform.endl)+"     got: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = actual__8950__auto___9884;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+" (using =)"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8949__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(255),(255)], null);
var actual__8950__auto__ = com.micahmartin.pendulums.ui.hex__GT_rgb.call(null,(16777215));
if(cljs.core._EQ_.call(null,expected__8949__auto__,actual__8950__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,(""+"Expected: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = expected__8949__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.platform.endl)+"     got: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = actual__8950__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+" (using =)"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__9573_9875,_STAR_parent_description_STAR__temp_val__9574_9876,description__8807__auto____$1,_STAR_parent_description_STAR__orig_val__9291_9838,_STAR_parent_description_STAR__temp_val__9292_9839,description__8807__auto___9837))
,false),speclj.components.new_characteristic.call(null,"correctly extracts each color channel",((function (_STAR_parent_description_STAR__orig_val__9573_9875,_STAR_parent_description_STAR__temp_val__9574_9876,description__8807__auto____$1,_STAR_parent_description_STAR__orig_val__9291_9838,_STAR_parent_description_STAR__temp_val__9292_9839,description__8807__auto___9837){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__8949__auto___9885 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(0),(0)], null);
var actual__8950__auto___9886 = com.micahmartin.pendulums.ui.hex__GT_rgb.call(null,(16711680));
if(cljs.core._EQ_.call(null,expected__8949__auto___9885,actual__8950__auto___9886)){
} else {
throw cljs.core.ex_info.call(null,(""+"Expected: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = expected__8949__auto___9885;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.platform.endl)+"     got: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = actual__8950__auto___9886;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+" (using =)"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8949__auto___9887 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(255),(0)], null);
var actual__8950__auto___9888 = com.micahmartin.pendulums.ui.hex__GT_rgb.call(null,(65280));
if(cljs.core._EQ_.call(null,expected__8949__auto___9887,actual__8950__auto___9888)){
} else {
throw cljs.core.ex_info.call(null,(""+"Expected: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = expected__8949__auto___9887;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.platform.endl)+"     got: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = actual__8950__auto___9888;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+" (using =)"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8949__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(255)], null);
var actual__8950__auto__ = com.micahmartin.pendulums.ui.hex__GT_rgb.call(null,(255));
if(cljs.core._EQ_.call(null,expected__8949__auto__,actual__8950__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,(""+"Expected: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = expected__8949__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.platform.endl)+"     got: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = actual__8950__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+" (using =)"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__9573_9875,_STAR_parent_description_STAR__temp_val__9574_9876,description__8807__auto____$1,_STAR_parent_description_STAR__orig_val__9291_9838,_STAR_parent_description_STAR__temp_val__9292_9839,description__8807__auto___9837))
,false)],null)));
var chunk__9576_9878 = null;
var count__9577_9879 = (0);
var i__9578_9880 = (0);
while(true){
if((i__9578_9880 < count__9577_9879)){
var component__8808__auto___9889 = cljs.core._nth.call(null,chunk__9576_9878,i__9578_9880);
speclj.components.install.call(null,component__8808__auto___9889,description__8807__auto____$1);


var G__9890 = seq__9575_9877;
var G__9891 = chunk__9576_9878;
var G__9892 = count__9577_9879;
var G__9893 = (i__9578_9880 + (1));
seq__9575_9877 = G__9890;
chunk__9576_9878 = G__9891;
count__9577_9879 = G__9892;
i__9578_9880 = G__9893;
continue;
} else {
var temp__5825__auto___9894 = cljs.core.seq.call(null,seq__9575_9877);
if(temp__5825__auto___9894){
var seq__9575_9895__$1 = temp__5825__auto___9894;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9575_9895__$1)){
var c__5673__auto___9896 = cljs.core.chunk_first.call(null,seq__9575_9895__$1);
var G__9897 = cljs.core.chunk_rest.call(null,seq__9575_9895__$1);
var G__9898 = c__5673__auto___9896;
var G__9899 = cljs.core.count.call(null,c__5673__auto___9896);
var G__9900 = (0);
seq__9575_9877 = G__9897;
chunk__9576_9878 = G__9898;
count__9577_9879 = G__9899;
i__9578_9880 = G__9900;
continue;
} else {
var component__8808__auto___9901 = cljs.core.first.call(null,seq__9575_9895__$1);
speclj.components.install.call(null,component__8808__auto___9901,description__8807__auto____$1);


var G__9902 = cljs.core.next.call(null,seq__9575_9895__$1);
var G__9903 = null;
var G__9904 = (0);
var G__9905 = (0);
seq__9575_9877 = G__9902;
chunk__9576_9878 = G__9903;
count__9577_9879 = G__9904;
i__9578_9880 = G__9905;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__9573_9875);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8807__auto____$1);
}

return description__8807__auto____$1;
})(),(function (){var description__8807__auto____$1 = speclj.components.new_description.call(null,"bob-radius",false,"com.micahmartin.pendulums.ui-spec");
var _STAR_parent_description_STAR__orig_val__9579_9906 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__9580_9907 = description__8807__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__9580_9907);

try{var seq__9581_9908 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"calculates radius for unit mass",((function (_STAR_parent_description_STAR__orig_val__9579_9906,_STAR_parent_description_STAR__temp_val__9580_9907,description__8807__auto____$1,_STAR_parent_description_STAR__orig_val__9291_9838,_STAR_parent_description_STAR__temp_val__9292_9839,description__8807__auto___9837){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__8949__auto__ = 12.0;
var actual__8950__auto__ = com.micahmartin.pendulums.ui.bob_radius.call(null,1.0);
if(cljs.core._EQ_.call(null,expected__8949__auto__,actual__8950__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,(""+"Expected: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = expected__8949__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.platform.endl)+"     got: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = actual__8950__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+" (using =)"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__9579_9906,_STAR_parent_description_STAR__temp_val__9580_9907,description__8807__auto____$1,_STAR_parent_description_STAR__orig_val__9291_9838,_STAR_parent_description_STAR__temp_val__9292_9839,description__8807__auto___9837))
,false),speclj.components.new_characteristic.call(null,"calculates radius for zero mass",((function (_STAR_parent_description_STAR__orig_val__9579_9906,_STAR_parent_description_STAR__temp_val__9580_9907,description__8807__auto____$1,_STAR_parent_description_STAR__orig_val__9291_9838,_STAR_parent_description_STAR__temp_val__9292_9839,description__8807__auto___9837){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__8949__auto__ = 8.0;
var actual__8950__auto__ = com.micahmartin.pendulums.ui.bob_radius.call(null,0.0);
if(cljs.core._EQ_.call(null,expected__8949__auto__,actual__8950__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,(""+"Expected: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = expected__8949__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.platform.endl)+"     got: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = actual__8950__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+" (using =)"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__9579_9906,_STAR_parent_description_STAR__temp_val__9580_9907,description__8807__auto____$1,_STAR_parent_description_STAR__orig_val__9291_9838,_STAR_parent_description_STAR__temp_val__9292_9839,description__8807__auto___9837))
,false),speclj.components.new_characteristic.call(null,"calculates radius for larger mass",((function (_STAR_parent_description_STAR__orig_val__9579_9906,_STAR_parent_description_STAR__temp_val__9580_9907,description__8807__auto____$1,_STAR_parent_description_STAR__orig_val__9291_9838,_STAR_parent_description_STAR__temp_val__9292_9839,description__8807__auto___9837){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__8949__auto__ = 16.0;
var actual__8950__auto__ = com.micahmartin.pendulums.ui.bob_radius.call(null,2.0);
if(cljs.core._EQ_.call(null,expected__8949__auto__,actual__8950__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,(""+"Expected: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = expected__8949__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.platform.endl)+"     got: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = actual__8950__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+" (using =)"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__9579_9906,_STAR_parent_description_STAR__temp_val__9580_9907,description__8807__auto____$1,_STAR_parent_description_STAR__orig_val__9291_9838,_STAR_parent_description_STAR__temp_val__9292_9839,description__8807__auto___9837))
,false)],null)));
var chunk__9582_9909 = null;
var count__9583_9910 = (0);
var i__9584_9911 = (0);
while(true){
if((i__9584_9911 < count__9583_9910)){
var component__8808__auto___9912 = cljs.core._nth.call(null,chunk__9582_9909,i__9584_9911);
speclj.components.install.call(null,component__8808__auto___9912,description__8807__auto____$1);


var G__9913 = seq__9581_9908;
var G__9914 = chunk__9582_9909;
var G__9915 = count__9583_9910;
var G__9916 = (i__9584_9911 + (1));
seq__9581_9908 = G__9913;
chunk__9582_9909 = G__9914;
count__9583_9910 = G__9915;
i__9584_9911 = G__9916;
continue;
} else {
var temp__5825__auto___9917 = cljs.core.seq.call(null,seq__9581_9908);
if(temp__5825__auto___9917){
var seq__9581_9918__$1 = temp__5825__auto___9917;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9581_9918__$1)){
var c__5673__auto___9919 = cljs.core.chunk_first.call(null,seq__9581_9918__$1);
var G__9920 = cljs.core.chunk_rest.call(null,seq__9581_9918__$1);
var G__9921 = c__5673__auto___9919;
var G__9922 = cljs.core.count.call(null,c__5673__auto___9919);
var G__9923 = (0);
seq__9581_9908 = G__9920;
chunk__9582_9909 = G__9921;
count__9583_9910 = G__9922;
i__9584_9911 = G__9923;
continue;
} else {
var component__8808__auto___9924 = cljs.core.first.call(null,seq__9581_9918__$1);
speclj.components.install.call(null,component__8808__auto___9924,description__8807__auto____$1);


var G__9925 = cljs.core.next.call(null,seq__9581_9918__$1);
var G__9926 = null;
var G__9927 = (0);
var G__9928 = (0);
seq__9581_9908 = G__9925;
chunk__9582_9909 = G__9926;
count__9583_9910 = G__9927;
i__9584_9911 = G__9928;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__9579_9906);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8807__auto____$1);
}

return description__8807__auto____$1;
})(),(function (){var description__8807__auto____$1 = speclj.components.new_description.call(null,"constants",false,"com.micahmartin.pendulums.ui-spec");
var _STAR_parent_description_STAR__orig_val__9585_9929 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__9586_9930 = description__8807__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__9586_9930);

try{var seq__9587_9931 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"has simulation constants",((function (_STAR_parent_description_STAR__orig_val__9585_9929,_STAR_parent_description_STAR__temp_val__9586_9930,description__8807__auto____$1,_STAR_parent_description_STAR__orig_val__9291_9838,_STAR_parent_description_STAR__temp_val__9292_9839,description__8807__auto___9837){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__8949__auto___9935 = 0.016;
var actual__8950__auto___9936 = com.micahmartin.pendulums.ui.dt;
if(cljs.core._EQ_.call(null,expected__8949__auto___9935,actual__8950__auto___9936)){
} else {
throw cljs.core.ex_info.call(null,(""+"Expected: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = expected__8949__auto___9935;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.platform.endl)+"     got: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = actual__8950__auto___9936;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+" (using =)"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8949__auto__ = 100.0;
var actual__8950__auto__ = com.micahmartin.pendulums.ui.scale;
if(cljs.core._EQ_.call(null,expected__8949__auto__,actual__8950__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,(""+"Expected: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = expected__8949__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.platform.endl)+"     got: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = actual__8950__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+" (using =)"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__9585_9929,_STAR_parent_description_STAR__temp_val__9586_9930,description__8807__auto____$1,_STAR_parent_description_STAR__orig_val__9291_9838,_STAR_parent_description_STAR__temp_val__9292_9839,description__8807__auto___9837))
,false),speclj.components.new_characteristic.call(null,"has canvas defaults",((function (_STAR_parent_description_STAR__orig_val__9585_9929,_STAR_parent_description_STAR__temp_val__9586_9930,description__8807__auto____$1,_STAR_parent_description_STAR__orig_val__9291_9838,_STAR_parent_description_STAR__temp_val__9292_9839,description__8807__auto___9837){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__8949__auto___9937 = (800);
var actual__8950__auto___9938 = com.micahmartin.pendulums.ui.default_canvas_width;
if(cljs.core._EQ_.call(null,expected__8949__auto___9937,actual__8950__auto___9938)){
} else {
throw cljs.core.ex_info.call(null,(""+"Expected: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = expected__8949__auto___9937;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.platform.endl)+"     got: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = actual__8950__auto___9938;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+" (using =)"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8949__auto___9939 = (600);
var actual__8950__auto___9940 = com.micahmartin.pendulums.ui.default_canvas_height;
if(cljs.core._EQ_.call(null,expected__8949__auto___9939,actual__8950__auto___9940)){
} else {
throw cljs.core.ex_info.call(null,(""+"Expected: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = expected__8949__auto___9939;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.platform.endl)+"     got: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = actual__8950__auto___9940;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+" (using =)"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8949__auto__ = 150.0;
var actual__8950__auto__ = com.micahmartin.pendulums.ui.pivot_y_offset;
if(cljs.core._EQ_.call(null,expected__8949__auto__,actual__8950__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,(""+"Expected: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = expected__8949__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.platform.endl)+"     got: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = actual__8950__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+" (using =)"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__9585_9929,_STAR_parent_description_STAR__temp_val__9586_9930,description__8807__auto____$1,_STAR_parent_description_STAR__orig_val__9291_9838,_STAR_parent_description_STAR__temp_val__9292_9839,description__8807__auto___9837))
,false),speclj.components.new_characteristic.call(null,"has drawing constants",((function (_STAR_parent_description_STAR__orig_val__9585_9929,_STAR_parent_description_STAR__temp_val__9586_9930,description__8807__auto____$1,_STAR_parent_description_STAR__orig_val__9291_9838,_STAR_parent_description_STAR__temp_val__9292_9839,description__8807__auto___9837){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__8949__auto___9941 = 8.0;
var actual__8950__auto___9942 = com.micahmartin.pendulums.ui.bob_base_radius;
if(cljs.core._EQ_.call(null,expected__8949__auto___9941,actual__8950__auto___9942)){
} else {
throw cljs.core.ex_info.call(null,(""+"Expected: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = expected__8949__auto___9941;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.platform.endl)+"     got: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = actual__8950__auto___9942;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+" (using =)"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8949__auto___9943 = 4.0;
var actual__8950__auto___9944 = com.micahmartin.pendulums.ui.bob_radius_per_mass;
if(cljs.core._EQ_.call(null,expected__8949__auto___9943,actual__8950__auto___9944)){
} else {
throw cljs.core.ex_info.call(null,(""+"Expected: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = expected__8949__auto___9943;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.platform.endl)+"     got: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = actual__8950__auto___9944;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+" (using =)"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8949__auto___9945 = 3.0;
var actual__8950__auto___9946 = com.micahmartin.pendulums.ui.arm_stroke_width;
if(cljs.core._EQ_.call(null,expected__8949__auto___9945,actual__8950__auto___9946)){
} else {
throw cljs.core.ex_info.call(null,(""+"Expected: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = expected__8949__auto___9945;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.platform.endl)+"     got: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = actual__8950__auto___9946;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+" (using =)"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8949__auto___9947 = 2.0;
var actual__8950__auto___9948 = com.micahmartin.pendulums.ui.bob_outline_width;
if(cljs.core._EQ_.call(null,expected__8949__auto___9947,actual__8950__auto___9948)){
} else {
throw cljs.core.ex_info.call(null,(""+"Expected: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = expected__8949__auto___9947;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.platform.endl)+"     got: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = actual__8950__auto___9948;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+" (using =)"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8949__auto___9949 = 6.0;
var actual__8950__auto___9950 = com.micahmartin.pendulums.ui.pivot_radius;
if(cljs.core._EQ_.call(null,expected__8949__auto___9949,actual__8950__auto___9950)){
} else {
throw cljs.core.ex_info.call(null,(""+"Expected: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = expected__8949__auto___9949;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.platform.endl)+"     got: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = actual__8950__auto___9950;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+" (using =)"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8949__auto__ = 2.0;
var actual__8950__auto__ = com.micahmartin.pendulums.ui.trail_dot_radius;
if(cljs.core._EQ_.call(null,expected__8949__auto__,actual__8950__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,(""+"Expected: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = expected__8949__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.platform.endl)+"     got: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = actual__8950__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+" (using =)"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__9585_9929,_STAR_parent_description_STAR__temp_val__9586_9930,description__8807__auto____$1,_STAR_parent_description_STAR__orig_val__9291_9838,_STAR_parent_description_STAR__temp_val__9292_9839,description__8807__auto___9837))
,false)],null)));
var chunk__9588_9932 = null;
var count__9589_9933 = (0);
var i__9590_9934 = (0);
while(true){
if((i__9590_9934 < count__9589_9933)){
var component__8808__auto___9951 = cljs.core._nth.call(null,chunk__9588_9932,i__9590_9934);
speclj.components.install.call(null,component__8808__auto___9951,description__8807__auto____$1);


var G__9952 = seq__9587_9931;
var G__9953 = chunk__9588_9932;
var G__9954 = count__9589_9933;
var G__9955 = (i__9590_9934 + (1));
seq__9587_9931 = G__9952;
chunk__9588_9932 = G__9953;
count__9589_9933 = G__9954;
i__9590_9934 = G__9955;
continue;
} else {
var temp__5825__auto___9956 = cljs.core.seq.call(null,seq__9587_9931);
if(temp__5825__auto___9956){
var seq__9587_9957__$1 = temp__5825__auto___9956;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9587_9957__$1)){
var c__5673__auto___9958 = cljs.core.chunk_first.call(null,seq__9587_9957__$1);
var G__9959 = cljs.core.chunk_rest.call(null,seq__9587_9957__$1);
var G__9960 = c__5673__auto___9958;
var G__9961 = cljs.core.count.call(null,c__5673__auto___9958);
var G__9962 = (0);
seq__9587_9931 = G__9959;
chunk__9588_9932 = G__9960;
count__9589_9933 = G__9961;
i__9590_9934 = G__9962;
continue;
} else {
var component__8808__auto___9963 = cljs.core.first.call(null,seq__9587_9957__$1);
speclj.components.install.call(null,component__8808__auto___9963,description__8807__auto____$1);


var G__9964 = cljs.core.next.call(null,seq__9587_9957__$1);
var G__9965 = null;
var G__9966 = (0);
var G__9967 = (0);
seq__9587_9931 = G__9964;
chunk__9588_9932 = G__9965;
count__9589_9933 = G__9966;
i__9590_9934 = G__9967;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__9585_9929);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8807__auto____$1);
}

return description__8807__auto____$1;
})(),(function (){var description__8807__auto____$1 = speclj.components.new_description.call(null,"color definitions",false,"com.micahmartin.pendulums.ui-spec");
var _STAR_parent_description_STAR__orig_val__9591_9968 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__9592_9969 = description__8807__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__9592_9969);

try{var seq__9593_9970 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"has 10 pendulum colors",((function (_STAR_parent_description_STAR__orig_val__9591_9968,_STAR_parent_description_STAR__temp_val__9592_9969,description__8807__auto____$1,_STAR_parent_description_STAR__orig_val__9291_9838,_STAR_parent_description_STAR__temp_val__9292_9839,description__8807__auto___9837){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__8949__auto__ = (10);
var actual__8950__auto__ = cljs.core.count.call(null,com.micahmartin.pendulums.ui.pendulum_colors);
if(cljs.core._EQ_.call(null,expected__8949__auto__,actual__8950__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,(""+"Expected: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = expected__8949__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.platform.endl)+"     got: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = actual__8950__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+" (using =)"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__9591_9968,_STAR_parent_description_STAR__temp_val__9592_9969,description__8807__auto____$1,_STAR_parent_description_STAR__orig_val__9291_9838,_STAR_parent_description_STAR__temp_val__9292_9839,description__8807__auto___9837))
,false),speclj.components.new_characteristic.call(null,"has pre-computed CSS colors",((function (_STAR_parent_description_STAR__orig_val__9591_9968,_STAR_parent_description_STAR__temp_val__9592_9969,description__8807__auto____$1,_STAR_parent_description_STAR__orig_val__9291_9838,_STAR_parent_description_STAR__temp_val__9292_9839,description__8807__auto___9837){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__8949__auto___9974 = (10);
var actual__8950__auto___9975 = cljs.core.count.call(null,com.micahmartin.pendulums.ui.pendulum_colors_css);
if(cljs.core._EQ_.call(null,expected__8949__auto___9974,actual__8950__auto___9975)){
} else {
throw cljs.core.ex_info.call(null,(""+"Expected: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = expected__8949__auto___9974;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.platform.endl)+"     got: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = actual__8950__auto___9975;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+" (using =)"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8949__auto__ = "#ef4444";
var actual__8950__auto__ = cljs.core.first.call(null,com.micahmartin.pendulums.ui.pendulum_colors_css);
if(cljs.core._EQ_.call(null,expected__8949__auto__,actual__8950__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,(""+"Expected: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = expected__8949__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.platform.endl)+"     got: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = actual__8950__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+" (using =)"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__9591_9968,_STAR_parent_description_STAR__temp_val__9592_9969,description__8807__auto____$1,_STAR_parent_description_STAR__orig_val__9291_9838,_STAR_parent_description_STAR__temp_val__9292_9839,description__8807__auto___9837))
,false),speclj.components.new_characteristic.call(null,"has UI element colors as hex integers",((function (_STAR_parent_description_STAR__orig_val__9591_9968,_STAR_parent_description_STAR__temp_val__9592_9969,description__8807__auto____$1,_STAR_parent_description_STAR__orig_val__9291_9838,_STAR_parent_description_STAR__temp_val__9292_9839,description__8807__auto___9837){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__8949__auto___9976 = (5395026);
var actual__8950__auto___9977 = com.micahmartin.pendulums.ui.arm_color;
if(cljs.core._EQ_.call(null,expected__8949__auto___9976,actual__8950__auto___9977)){
} else {
throw cljs.core.ex_info.call(null,(""+"Expected: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = expected__8949__auto___9976;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.platform.endl)+"     got: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = actual__8950__auto___9977;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+" (using =)"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8949__auto___9978 = (16777215);
var actual__8950__auto___9979 = com.micahmartin.pendulums.ui.bob_outline_color;
if(cljs.core._EQ_.call(null,expected__8949__auto___9978,actual__8950__auto___9979)){
} else {
throw cljs.core.ex_info.call(null,(""+"Expected: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = expected__8949__auto___9978;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.platform.endl)+"     got: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = actual__8950__auto___9979;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+" (using =)"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8949__auto___9980 = (7566195);
var actual__8950__auto___9981 = com.micahmartin.pendulums.ui.pivot_color;
if(cljs.core._EQ_.call(null,expected__8949__auto___9980,actual__8950__auto___9981)){
} else {
throw cljs.core.ex_info.call(null,(""+"Expected: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = expected__8949__auto___9980;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.platform.endl)+"     got: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = actual__8950__auto___9981;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+" (using =)"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8949__auto__ = (1184274);
var actual__8950__auto__ = com.micahmartin.pendulums.ui.bg_color;
if(cljs.core._EQ_.call(null,expected__8949__auto__,actual__8950__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,(""+"Expected: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = expected__8949__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.platform.endl)+"     got: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = actual__8950__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+" (using =)"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__9591_9968,_STAR_parent_description_STAR__temp_val__9592_9969,description__8807__auto____$1,_STAR_parent_description_STAR__orig_val__9291_9838,_STAR_parent_description_STAR__temp_val__9292_9839,description__8807__auto___9837))
,false)],null)));
var chunk__9594_9971 = null;
var count__9595_9972 = (0);
var i__9596_9973 = (0);
while(true){
if((i__9596_9973 < count__9595_9972)){
var component__8808__auto___9982 = cljs.core._nth.call(null,chunk__9594_9971,i__9596_9973);
speclj.components.install.call(null,component__8808__auto___9982,description__8807__auto____$1);


var G__9983 = seq__9593_9970;
var G__9984 = chunk__9594_9971;
var G__9985 = count__9595_9972;
var G__9986 = (i__9596_9973 + (1));
seq__9593_9970 = G__9983;
chunk__9594_9971 = G__9984;
count__9595_9972 = G__9985;
i__9596_9973 = G__9986;
continue;
} else {
var temp__5825__auto___9987 = cljs.core.seq.call(null,seq__9593_9970);
if(temp__5825__auto___9987){
var seq__9593_9988__$1 = temp__5825__auto___9987;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9593_9988__$1)){
var c__5673__auto___9989 = cljs.core.chunk_first.call(null,seq__9593_9988__$1);
var G__9990 = cljs.core.chunk_rest.call(null,seq__9593_9988__$1);
var G__9991 = c__5673__auto___9989;
var G__9992 = cljs.core.count.call(null,c__5673__auto___9989);
var G__9993 = (0);
seq__9593_9970 = G__9990;
chunk__9594_9971 = G__9991;
count__9595_9972 = G__9992;
i__9596_9973 = G__9993;
continue;
} else {
var component__8808__auto___9994 = cljs.core.first.call(null,seq__9593_9988__$1);
speclj.components.install.call(null,component__8808__auto___9994,description__8807__auto____$1);


var G__9995 = cljs.core.next.call(null,seq__9593_9988__$1);
var G__9996 = null;
var G__9997 = (0);
var G__9998 = (0);
seq__9593_9970 = G__9995;
chunk__9594_9971 = G__9996;
count__9595_9972 = G__9997;
i__9596_9973 = G__9998;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__9591_9968);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8807__auto____$1);
}

return description__8807__auto____$1;
})(),(function (){var description__8807__auto____$1 = speclj.components.new_description.call(null,"state defaults",false,"com.micahmartin.pendulums.ui-spec");
var _STAR_parent_description_STAR__orig_val__9597_9999 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__9598_10000 = description__8807__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__9598_10000);

try{var seq__9599_10001 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"has default-state with correct structure",((function (_STAR_parent_description_STAR__orig_val__9597_9999,_STAR_parent_description_STAR__temp_val__9598_10000,description__8807__auto____$1,_STAR_parent_description_STAR__orig_val__9291_9838,_STAR_parent_description_STAR__temp_val__9292_9839,description__8807__auto___9837){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__8973__auto___10005 = null;
var actual__8974__auto___10006 = com.micahmartin.pendulums.ui.default_state;
if(cljs.core._EQ_.call(null,expected__8973__auto___10005,actual__8974__auto___10006)){
throw cljs.core.ex_info.call(null,(""+"Expected: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = expected__8973__auto___10005;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.platform.endl)+"not to =: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = actual__8974__auto___10006;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8949__auto___10007 = false;
var actual__8950__auto___10008 = new cljs.core.Keyword(null,"running?","running?",-257884763).cljs$core$IFn$_invoke$arity$1(com.micahmartin.pendulums.ui.default_state);
if(cljs.core._EQ_.call(null,expected__8949__auto___10007,actual__8950__auto___10008)){
} else {
throw cljs.core.ex_info.call(null,(""+"Expected: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = expected__8949__auto___10007;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.platform.endl)+"     got: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = actual__8950__auto___10008;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+" (using =)"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8949__auto___10009 = null;
var actual__8950__auto___10010 = new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(com.micahmartin.pendulums.ui.default_state);
if(cljs.core._EQ_.call(null,expected__8949__auto___10009,actual__8950__auto___10010)){
} else {
throw cljs.core.ex_info.call(null,(""+"Expected: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = expected__8949__auto___10009;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.platform.endl)+"     got: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = actual__8950__auto___10010;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+" (using =)"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8949__auto___10011 = false;
var actual__8950__auto___10012 = new cljs.core.Keyword(null,"dragging?","dragging?",-995941410).cljs$core$IFn$_invoke$arity$1(com.micahmartin.pendulums.ui.default_state);
if(cljs.core._EQ_.call(null,expected__8949__auto___10011,actual__8950__auto___10012)){
} else {
throw cljs.core.ex_info.call(null,(""+"Expected: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = expected__8949__auto___10011;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.platform.endl)+"     got: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = actual__8950__auto___10012;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+" (using =)"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8949__auto___10013 = 1.0;
var actual__8950__auto___10014 = new cljs.core.Keyword(null,"zoom","zoom",-1827487038).cljs$core$IFn$_invoke$arity$1(com.micahmartin.pendulums.ui.default_state);
if(cljs.core._EQ_.call(null,expected__8949__auto___10013,actual__8950__auto___10014)){
} else {
throw cljs.core.ex_info.call(null,(""+"Expected: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = expected__8949__auto___10013;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.platform.endl)+"     got: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = actual__8950__auto___10014;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+" (using =)"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8949__auto___10015 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,0.0], null);
var actual__8950__auto___10016 = new cljs.core.Keyword(null,"pan","pan",-307712792).cljs$core$IFn$_invoke$arity$1(com.micahmartin.pendulums.ui.default_state);
if(cljs.core._EQ_.call(null,expected__8949__auto___10015,actual__8950__auto___10016)){
} else {
throw cljs.core.ex_info.call(null,(""+"Expected: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = expected__8949__auto___10015;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.platform.endl)+"     got: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = actual__8950__auto___10016;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+" (using =)"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8949__auto___10017 = false;
var actual__8950__auto___10018 = new cljs.core.Keyword(null,"panning?","panning?",-454250826).cljs$core$IFn$_invoke$arity$1(com.micahmartin.pendulums.ui.default_state);
if(cljs.core._EQ_.call(null,expected__8949__auto___10017,actual__8950__auto___10018)){
} else {
throw cljs.core.ex_info.call(null,(""+"Expected: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = expected__8949__auto___10017;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.platform.endl)+"     got: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = actual__8950__auto___10018;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+" (using =)"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8949__auto___10019 = null;
var actual__8950__auto___10020 = new cljs.core.Keyword(null,"pan-start","pan-start",455057796).cljs$core$IFn$_invoke$arity$1(com.micahmartin.pendulums.ui.default_state);
if(cljs.core._EQ_.call(null,expected__8949__auto___10019,actual__8950__auto___10020)){
} else {
throw cljs.core.ex_info.call(null,(""+"Expected: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = expected__8949__auto___10019;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.platform.endl)+"     got: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = actual__8950__auto___10020;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+" (using =)"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8949__auto___10021 = cljs.core.PersistentVector.EMPTY;
var actual__8950__auto___10022 = new cljs.core.Keyword(null,"trails","trails",-1542689191).cljs$core$IFn$_invoke$arity$1(com.micahmartin.pendulums.ui.default_state);
if(cljs.core._EQ_.call(null,expected__8949__auto___10021,actual__8950__auto___10022)){
} else {
throw cljs.core.ex_info.call(null,(""+"Expected: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = expected__8949__auto___10021;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.platform.endl)+"     got: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = actual__8950__auto___10022;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+" (using =)"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8949__auto__ = 3.0;
var actual__8950__auto__ = new cljs.core.Keyword(null,"trail-duration","trail-duration",1730204306).cljs$core$IFn$_invoke$arity$1(com.micahmartin.pendulums.ui.default_state);
if(cljs.core._EQ_.call(null,expected__8949__auto__,actual__8950__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,(""+"Expected: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = expected__8949__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.platform.endl)+"     got: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = actual__8950__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+" (using =)"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__9597_9999,_STAR_parent_description_STAR__temp_val__9598_10000,description__8807__auto____$1,_STAR_parent_description_STAR__orig_val__9291_9838,_STAR_parent_description_STAR__temp_val__9292_9839,description__8807__auto___9837))
,false),speclj.components.new_characteristic.call(null,"has default system with initial pendulums",((function (_STAR_parent_description_STAR__orig_val__9597_9999,_STAR_parent_description_STAR__temp_val__9598_10000,description__8807__auto____$1,_STAR_parent_description_STAR__orig_val__9291_9838,_STAR_parent_description_STAR__temp_val__9292_9839,description__8807__auto___9837){
return (function (){
var system = new cljs.core.Keyword(null,"system","system",-29381724).cljs$core$IFn$_invoke$arity$1(com.micahmartin.pendulums.ui.default_state);
speclj.components.inc_assertions_BANG_.call(null);

var expected__8973__auto___10023 = null;
var actual__8974__auto___10024 = system;
if(cljs.core._EQ_.call(null,expected__8973__auto___10023,actual__8974__auto___10024)){
throw cljs.core.ex_info.call(null,(""+"Expected: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = expected__8973__auto___10023;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.platform.endl)+"not to =: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = actual__8974__auto___10024;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8949__auto___10025 = (2);
var actual__8950__auto___10026 = cljs.core.count.call(null,new cljs.core.Keyword(null,"pendulums","pendulums",191378563).cljs$core$IFn$_invoke$arity$1(system));
if(cljs.core._EQ_.call(null,expected__8949__auto___10025,actual__8950__auto___10026)){
} else {
throw cljs.core.ex_info.call(null,(""+"Expected: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = expected__8949__auto___10025;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.platform.endl)+"     got: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = actual__8950__auto___10026;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+" (using =)"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8949__auto___10027 = 0.8;
var actual__8950__auto___10028 = new cljs.core.Keyword(null,"theta","theta",-427510258).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"pendulums","pendulums",191378563).cljs$core$IFn$_invoke$arity$1(system)));
if(cljs.core._EQ_.call(null,expected__8949__auto___10027,actual__8950__auto___10028)){
} else {
throw cljs.core.ex_info.call(null,(""+"Expected: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = expected__8949__auto___10027;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.platform.endl)+"     got: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = actual__8950__auto___10028;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+" (using =)"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8949__auto__ = 0.5;
var actual__8950__auto__ = new cljs.core.Keyword(null,"theta","theta",-427510258).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,new cljs.core.Keyword(null,"pendulums","pendulums",191378563).cljs$core$IFn$_invoke$arity$1(system)));
if(cljs.core._EQ_.call(null,expected__8949__auto__,actual__8950__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,(""+"Expected: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = expected__8949__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.platform.endl)+"     got: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = actual__8950__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+" (using =)"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__9597_9999,_STAR_parent_description_STAR__temp_val__9598_10000,description__8807__auto____$1,_STAR_parent_description_STAR__orig_val__9291_9838,_STAR_parent_description_STAR__temp_val__9292_9839,description__8807__auto___9837))
,false),speclj.components.new_characteristic.call(null,"has initial pendulum configurations",((function (_STAR_parent_description_STAR__orig_val__9597_9999,_STAR_parent_description_STAR__temp_val__9598_10000,description__8807__auto____$1,_STAR_parent_description_STAR__orig_val__9291_9838,_STAR_parent_description_STAR__temp_val__9292_9839,description__8807__auto___9837){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__8949__auto___10029 = (2);
var actual__8950__auto___10030 = cljs.core.count.call(null,com.micahmartin.pendulums.ui.initial_pendulums);
if(cljs.core._EQ_.call(null,expected__8949__auto___10029,actual__8950__auto___10030)){
} else {
throw cljs.core.ex_info.call(null,(""+"Expected: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = expected__8949__auto___10029;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.platform.endl)+"     got: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = actual__8950__auto___10030;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+" (using =)"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8949__auto___10031 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"theta","theta",-427510258),0.8,new cljs.core.Keyword(null,"length","length",588987862),1.0], null);
var actual__8950__auto___10032 = cljs.core.first.call(null,com.micahmartin.pendulums.ui.initial_pendulums);
if(cljs.core._EQ_.call(null,expected__8949__auto___10031,actual__8950__auto___10032)){
} else {
throw cljs.core.ex_info.call(null,(""+"Expected: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = expected__8949__auto___10031;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.platform.endl)+"     got: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = actual__8950__auto___10032;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+" (using =)"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8949__auto__ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"theta","theta",-427510258),0.5,new cljs.core.Keyword(null,"length","length",588987862),1.0], null);
var actual__8950__auto__ = cljs.core.second.call(null,com.micahmartin.pendulums.ui.initial_pendulums);
if(cljs.core._EQ_.call(null,expected__8949__auto__,actual__8950__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,(""+"Expected: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = expected__8949__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.platform.endl)+"     got: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = actual__8950__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+" (using =)"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__9597_9999,_STAR_parent_description_STAR__temp_val__9598_10000,description__8807__auto____$1,_STAR_parent_description_STAR__orig_val__9291_9838,_STAR_parent_description_STAR__temp_val__9292_9839,description__8807__auto___9837))
,false),speclj.components.new_characteristic.call(null,"has new pendulum config",((function (_STAR_parent_description_STAR__orig_val__9597_9999,_STAR_parent_description_STAR__temp_val__9598_10000,description__8807__auto____$1,_STAR_parent_description_STAR__orig_val__9291_9838,_STAR_parent_description_STAR__temp_val__9292_9839,description__8807__auto___9837){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__8949__auto__ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"theta","theta",-427510258),0.3,new cljs.core.Keyword(null,"length","length",588987862),1.0], null);
var actual__8950__auto__ = com.micahmartin.pendulums.ui.new_pendulum_config;
if(cljs.core._EQ_.call(null,expected__8949__auto__,actual__8950__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,(""+"Expected: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = expected__8949__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.platform.endl)+"     got: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = actual__8950__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+" (using =)"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__9597_9999,_STAR_parent_description_STAR__temp_val__9598_10000,description__8807__auto____$1,_STAR_parent_description_STAR__orig_val__9291_9838,_STAR_parent_description_STAR__temp_val__9292_9839,description__8807__auto___9837))
,false)],null)));
var chunk__9600_10002 = null;
var count__9601_10003 = (0);
var i__9602_10004 = (0);
while(true){
if((i__9602_10004 < count__9601_10003)){
var component__8808__auto___10033 = cljs.core._nth.call(null,chunk__9600_10002,i__9602_10004);
speclj.components.install.call(null,component__8808__auto___10033,description__8807__auto____$1);


var G__10034 = seq__9599_10001;
var G__10035 = chunk__9600_10002;
var G__10036 = count__9601_10003;
var G__10037 = (i__9602_10004 + (1));
seq__9599_10001 = G__10034;
chunk__9600_10002 = G__10035;
count__9601_10003 = G__10036;
i__9602_10004 = G__10037;
continue;
} else {
var temp__5825__auto___10038 = cljs.core.seq.call(null,seq__9599_10001);
if(temp__5825__auto___10038){
var seq__9599_10039__$1 = temp__5825__auto___10038;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9599_10039__$1)){
var c__5673__auto___10040 = cljs.core.chunk_first.call(null,seq__9599_10039__$1);
var G__10041 = cljs.core.chunk_rest.call(null,seq__9599_10039__$1);
var G__10042 = c__5673__auto___10040;
var G__10043 = cljs.core.count.call(null,c__5673__auto___10040);
var G__10044 = (0);
seq__9599_10001 = G__10041;
chunk__9600_10002 = G__10042;
count__9601_10003 = G__10043;
i__9602_10004 = G__10044;
continue;
} else {
var component__8808__auto___10045 = cljs.core.first.call(null,seq__9599_10039__$1);
speclj.components.install.call(null,component__8808__auto___10045,description__8807__auto____$1);


var G__10046 = cljs.core.next.call(null,seq__9599_10039__$1);
var G__10047 = null;
var G__10048 = (0);
var G__10049 = (0);
seq__9599_10001 = G__10046;
chunk__9600_10002 = G__10047;
count__9601_10003 = G__10048;
i__9602_10004 = G__10049;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__9597_9999);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8807__auto____$1);
}

return description__8807__auto____$1;
})(),(function (){var description__8807__auto____$1 = speclj.components.new_description.call(null,"coordinate transformations",false,"com.micahmartin.pendulums.ui-spec");
var _STAR_parent_description_STAR__orig_val__9603_10050 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__9604_10051 = description__8807__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__9604_10051);

try{var seq__9605_10052 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var description__8807__auto____$2 = speclj.components.new_description.call(null,"get-pivot",false,"com.micahmartin.pendulums.ui-spec");
var _STAR_parent_description_STAR__orig_val__9681_10056 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__9682_10057 = description__8807__auto____$2;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__9682_10057);

try{var seq__9683_10058 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"returns pivot at center-x and pivot-y-offset",((function (_STAR_parent_description_STAR__orig_val__9681_10056,_STAR_parent_description_STAR__temp_val__9682_10057,description__8807__auto____$2,_STAR_parent_description_STAR__orig_val__9603_10050,_STAR_parent_description_STAR__temp_val__9604_10051,description__8807__auto____$1,_STAR_parent_description_STAR__orig_val__9291_9838,_STAR_parent_description_STAR__temp_val__9292_9839,description__8807__auto___9837){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__8949__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(400),150.0], null);
var actual__8950__auto__ = com.micahmartin.pendulums.ui.get_pivot.call(null,(800));
if(cljs.core._EQ_.call(null,expected__8949__auto__,actual__8950__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,(""+"Expected: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = expected__8949__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.platform.endl)+"     got: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = actual__8950__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+" (using =)"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__9681_10056,_STAR_parent_description_STAR__temp_val__9682_10057,description__8807__auto____$2,_STAR_parent_description_STAR__orig_val__9603_10050,_STAR_parent_description_STAR__temp_val__9604_10051,description__8807__auto____$1,_STAR_parent_description_STAR__orig_val__9291_9838,_STAR_parent_description_STAR__temp_val__9292_9839,description__8807__auto___9837))
,false),speclj.components.new_characteristic.call(null,"centers pivot horizontally based on canvas width",((function (_STAR_parent_description_STAR__orig_val__9681_10056,_STAR_parent_description_STAR__temp_val__9682_10057,description__8807__auto____$2,_STAR_parent_description_STAR__orig_val__9603_10050,_STAR_parent_description_STAR__temp_val__9604_10051,description__8807__auto____$1,_STAR_parent_description_STAR__orig_val__9291_9838,_STAR_parent_description_STAR__temp_val__9292_9839,description__8807__auto___9837){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__8949__auto___10062 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),150.0], null);
var actual__8950__auto___10063 = com.micahmartin.pendulums.ui.get_pivot.call(null,(1000));
if(cljs.core._EQ_.call(null,expected__8949__auto___10062,actual__8950__auto___10063)){
} else {
throw cljs.core.ex_info.call(null,(""+"Expected: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = expected__8949__auto___10062;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.platform.endl)+"     got: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = actual__8950__auto___10063;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+" (using =)"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8949__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),150.0], null);
var actual__8950__auto__ = com.micahmartin.pendulums.ui.get_pivot.call(null,(600));
if(cljs.core._EQ_.call(null,expected__8949__auto__,actual__8950__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,(""+"Expected: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = expected__8949__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.platform.endl)+"     got: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = actual__8950__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+" (using =)"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__9681_10056,_STAR_parent_description_STAR__temp_val__9682_10057,description__8807__auto____$2,_STAR_parent_description_STAR__orig_val__9603_10050,_STAR_parent_description_STAR__temp_val__9604_10051,description__8807__auto____$1,_STAR_parent_description_STAR__orig_val__9291_9838,_STAR_parent_description_STAR__temp_val__9292_9839,description__8807__auto___9837))
,false)],null)));
var chunk__9684_10059 = null;
var count__9685_10060 = (0);
var i__9686_10061 = (0);
while(true){
if((i__9686_10061 < count__9685_10060)){
var component__8808__auto___10064 = cljs.core._nth.call(null,chunk__9684_10059,i__9686_10061);
speclj.components.install.call(null,component__8808__auto___10064,description__8807__auto____$2);


var G__10065 = seq__9683_10058;
var G__10066 = chunk__9684_10059;
var G__10067 = count__9685_10060;
var G__10068 = (i__9686_10061 + (1));
seq__9683_10058 = G__10065;
chunk__9684_10059 = G__10066;
count__9685_10060 = G__10067;
i__9686_10061 = G__10068;
continue;
} else {
var temp__5825__auto___10069 = cljs.core.seq.call(null,seq__9683_10058);
if(temp__5825__auto___10069){
var seq__9683_10070__$1 = temp__5825__auto___10069;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9683_10070__$1)){
var c__5673__auto___10071 = cljs.core.chunk_first.call(null,seq__9683_10070__$1);
var G__10072 = cljs.core.chunk_rest.call(null,seq__9683_10070__$1);
var G__10073 = c__5673__auto___10071;
var G__10074 = cljs.core.count.call(null,c__5673__auto___10071);
var G__10075 = (0);
seq__9683_10058 = G__10072;
chunk__9684_10059 = G__10073;
count__9685_10060 = G__10074;
i__9686_10061 = G__10075;
continue;
} else {
var component__8808__auto___10076 = cljs.core.first.call(null,seq__9683_10070__$1);
speclj.components.install.call(null,component__8808__auto___10076,description__8807__auto____$2);


var G__10077 = cljs.core.next.call(null,seq__9683_10070__$1);
var G__10078 = null;
var G__10079 = (0);
var G__10080 = (0);
seq__9683_10058 = G__10077;
chunk__9684_10059 = G__10078;
count__9685_10060 = G__10079;
i__9686_10061 = G__10080;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__9681_10056);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8807__auto____$2);
}

return description__8807__auto____$2;
})(),(function (){var description__8807__auto____$2 = speclj.components.new_description.call(null,"world->screen",false,"com.micahmartin.pendulums.ui-spec");
var _STAR_parent_description_STAR__orig_val__9687_10081 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__9688_10082 = description__8807__auto____$2;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__9688_10082);

try{var seq__9689_10083 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"converts origin with no zoom/pan at default canvas width",((function (_STAR_parent_description_STAR__orig_val__9687_10081,_STAR_parent_description_STAR__temp_val__9688_10082,description__8807__auto____$2,_STAR_parent_description_STAR__orig_val__9603_10050,_STAR_parent_description_STAR__temp_val__9604_10051,description__8807__auto____$1,_STAR_parent_description_STAR__orig_val__9291_9838,_STAR_parent_description_STAR__temp_val__9292_9839,description__8807__auto___9837){
return (function (){
var vec__9708 = com.micahmartin.pendulums.ui.world__GT_screen.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),1.0,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,0.0], null),(800));
var sx = cljs.core.nth.call(null,vec__9708,(0),null);
var sy = cljs.core.nth.call(null,vec__9708,(1),null);
speclj.components.inc_assertions_BANG_.call(null);

var expected__8949__auto___10087 = 400.0;
var actual__8950__auto___10088 = sx;
if(cljs.core._EQ_.call(null,expected__8949__auto___10087,actual__8950__auto___10088)){
} else {
throw cljs.core.ex_info.call(null,(""+"Expected: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = expected__8949__auto___10087;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.platform.endl)+"     got: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = actual__8950__auto___10088;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+" (using =)"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8949__auto__ = 150.0;
var actual__8950__auto__ = sy;
if(cljs.core._EQ_.call(null,expected__8949__auto__,actual__8950__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,(""+"Expected: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = expected__8949__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.platform.endl)+"     got: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = actual__8950__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+" (using =)"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__9687_10081,_STAR_parent_description_STAR__temp_val__9688_10082,description__8807__auto____$2,_STAR_parent_description_STAR__orig_val__9603_10050,_STAR_parent_description_STAR__temp_val__9604_10051,description__8807__auto____$1,_STAR_parent_description_STAR__orig_val__9291_9838,_STAR_parent_description_STAR__temp_val__9292_9839,description__8807__auto___9837))
,false),speclj.components.new_characteristic.call(null,"converts positive world-x to screen right of pivot",((function (_STAR_parent_description_STAR__orig_val__9687_10081,_STAR_parent_description_STAR__temp_val__9688_10082,description__8807__auto____$2,_STAR_parent_description_STAR__orig_val__9603_10050,_STAR_parent_description_STAR__temp_val__9604_10051,description__8807__auto____$1,_STAR_parent_description_STAR__orig_val__9291_9838,_STAR_parent_description_STAR__temp_val__9292_9839,description__8807__auto___9837){
return (function (){
var vec__9711 = com.micahmartin.pendulums.ui.world__GT_screen.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1.0,(0)], null),1.0,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,0.0], null),(800));
var sx = cljs.core.nth.call(null,vec__9711,(0),null);
var _ = cljs.core.nth.call(null,vec__9711,(1),null);
speclj.components.inc_assertions_BANG_.call(null);

var expected__8949__auto__ = 500.0;
var actual__8950__auto__ = sx;
if(cljs.core._EQ_.call(null,expected__8949__auto__,actual__8950__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,(""+"Expected: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = expected__8949__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.platform.endl)+"     got: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = actual__8950__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+" (using =)"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__9687_10081,_STAR_parent_description_STAR__temp_val__9688_10082,description__8807__auto____$2,_STAR_parent_description_STAR__orig_val__9603_10050,_STAR_parent_description_STAR__temp_val__9604_10051,description__8807__auto____$1,_STAR_parent_description_STAR__orig_val__9291_9838,_STAR_parent_description_STAR__temp_val__9292_9839,description__8807__auto___9837))
,false),speclj.components.new_characteristic.call(null,"converts positive world-y to screen above pivot (inverted)",((function (_STAR_parent_description_STAR__orig_val__9687_10081,_STAR_parent_description_STAR__temp_val__9688_10082,description__8807__auto____$2,_STAR_parent_description_STAR__orig_val__9603_10050,_STAR_parent_description_STAR__temp_val__9604_10051,description__8807__auto____$1,_STAR_parent_description_STAR__orig_val__9291_9838,_STAR_parent_description_STAR__temp_val__9292_9839,description__8807__auto___9837){
return (function (){
var vec__9714 = com.micahmartin.pendulums.ui.world__GT_screen.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),1.0], null),1.0,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,0.0], null),(800));
var _ = cljs.core.nth.call(null,vec__9714,(0),null);
var sy = cljs.core.nth.call(null,vec__9714,(1),null);
speclj.components.inc_assertions_BANG_.call(null);

var expected__8949__auto__ = 50.0;
var actual__8950__auto__ = sy;
if(cljs.core._EQ_.call(null,expected__8949__auto__,actual__8950__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,(""+"Expected: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = expected__8949__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.platform.endl)+"     got: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = actual__8950__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+" (using =)"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__9687_10081,_STAR_parent_description_STAR__temp_val__9688_10082,description__8807__auto____$2,_STAR_parent_description_STAR__orig_val__9603_10050,_STAR_parent_description_STAR__temp_val__9604_10051,description__8807__auto____$1,_STAR_parent_description_STAR__orig_val__9291_9838,_STAR_parent_description_STAR__temp_val__9292_9839,description__8807__auto___9837))
,false),speclj.components.new_characteristic.call(null,"applies zoom factor",((function (_STAR_parent_description_STAR__orig_val__9687_10081,_STAR_parent_description_STAR__temp_val__9688_10082,description__8807__auto____$2,_STAR_parent_description_STAR__orig_val__9603_10050,_STAR_parent_description_STAR__temp_val__9604_10051,description__8807__auto____$1,_STAR_parent_description_STAR__orig_val__9291_9838,_STAR_parent_description_STAR__temp_val__9292_9839,description__8807__auto___9837){
return (function (){
var vec__9717 = com.micahmartin.pendulums.ui.world__GT_screen.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),2.0,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,0.0], null),(800));
var sx = cljs.core.nth.call(null,vec__9717,(0),null);
var sy = cljs.core.nth.call(null,vec__9717,(1),null);
speclj.components.inc_assertions_BANG_.call(null);

var expected__8949__auto___10089 = 800.0;
var actual__8950__auto___10090 = sx;
if(cljs.core._EQ_.call(null,expected__8949__auto___10089,actual__8950__auto___10090)){
} else {
throw cljs.core.ex_info.call(null,(""+"Expected: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = expected__8949__auto___10089;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.platform.endl)+"     got: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = actual__8950__auto___10090;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+" (using =)"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8949__auto__ = 300.0;
var actual__8950__auto__ = sy;
if(cljs.core._EQ_.call(null,expected__8949__auto__,actual__8950__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,(""+"Expected: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = expected__8949__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.platform.endl)+"     got: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = actual__8950__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+" (using =)"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__9687_10081,_STAR_parent_description_STAR__temp_val__9688_10082,description__8807__auto____$2,_STAR_parent_description_STAR__orig_val__9603_10050,_STAR_parent_description_STAR__temp_val__9604_10051,description__8807__auto____$1,_STAR_parent_description_STAR__orig_val__9291_9838,_STAR_parent_description_STAR__temp_val__9292_9839,description__8807__auto___9837))
,false),speclj.components.new_characteristic.call(null,"applies pan offset",((function (_STAR_parent_description_STAR__orig_val__9687_10081,_STAR_parent_description_STAR__temp_val__9688_10082,description__8807__auto____$2,_STAR_parent_description_STAR__orig_val__9603_10050,_STAR_parent_description_STAR__temp_val__9604_10051,description__8807__auto____$1,_STAR_parent_description_STAR__orig_val__9291_9838,_STAR_parent_description_STAR__temp_val__9292_9839,description__8807__auto___9837){
return (function (){
var vec__9720 = com.micahmartin.pendulums.ui.world__GT_screen.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),1.0,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [50.0,30.0], null),(800));
var sx = cljs.core.nth.call(null,vec__9720,(0),null);
var sy = cljs.core.nth.call(null,vec__9720,(1),null);
speclj.components.inc_assertions_BANG_.call(null);

var expected__8949__auto___10091 = 450.0;
var actual__8950__auto___10092 = sx;
if(cljs.core._EQ_.call(null,expected__8949__auto___10091,actual__8950__auto___10092)){
} else {
throw cljs.core.ex_info.call(null,(""+"Expected: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = expected__8949__auto___10091;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.platform.endl)+"     got: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = actual__8950__auto___10092;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+" (using =)"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8949__auto__ = 180.0;
var actual__8950__auto__ = sy;
if(cljs.core._EQ_.call(null,expected__8949__auto__,actual__8950__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,(""+"Expected: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = expected__8949__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.platform.endl)+"     got: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = actual__8950__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+" (using =)"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__9687_10081,_STAR_parent_description_STAR__temp_val__9688_10082,description__8807__auto____$2,_STAR_parent_description_STAR__orig_val__9603_10050,_STAR_parent_description_STAR__temp_val__9604_10051,description__8807__auto____$1,_STAR_parent_description_STAR__orig_val__9291_9838,_STAR_parent_description_STAR__temp_val__9292_9839,description__8807__auto___9837))
,false)],null)));
var chunk__9690_10084 = null;
var count__9691_10085 = (0);
var i__9692_10086 = (0);
while(true){
if((i__9692_10086 < count__9691_10085)){
var component__8808__auto___10093 = cljs.core._nth.call(null,chunk__9690_10084,i__9692_10086);
speclj.components.install.call(null,component__8808__auto___10093,description__8807__auto____$2);


var G__10094 = seq__9689_10083;
var G__10095 = chunk__9690_10084;
var G__10096 = count__9691_10085;
var G__10097 = (i__9692_10086 + (1));
seq__9689_10083 = G__10094;
chunk__9690_10084 = G__10095;
count__9691_10085 = G__10096;
i__9692_10086 = G__10097;
continue;
} else {
var temp__5825__auto___10098 = cljs.core.seq.call(null,seq__9689_10083);
if(temp__5825__auto___10098){
var seq__9689_10099__$1 = temp__5825__auto___10098;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9689_10099__$1)){
var c__5673__auto___10100 = cljs.core.chunk_first.call(null,seq__9689_10099__$1);
var G__10101 = cljs.core.chunk_rest.call(null,seq__9689_10099__$1);
var G__10102 = c__5673__auto___10100;
var G__10103 = cljs.core.count.call(null,c__5673__auto___10100);
var G__10104 = (0);
seq__9689_10083 = G__10101;
chunk__9690_10084 = G__10102;
count__9691_10085 = G__10103;
i__9692_10086 = G__10104;
continue;
} else {
var component__8808__auto___10105 = cljs.core.first.call(null,seq__9689_10099__$1);
speclj.components.install.call(null,component__8808__auto___10105,description__8807__auto____$2);


var G__10106 = cljs.core.next.call(null,seq__9689_10099__$1);
var G__10107 = null;
var G__10108 = (0);
var G__10109 = (0);
seq__9689_10083 = G__10106;
chunk__9690_10084 = G__10107;
count__9691_10085 = G__10108;
i__9692_10086 = G__10109;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__9687_10081);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8807__auto____$2);
}

return description__8807__auto____$2;
})(),(function (){var description__8807__auto____$2 = speclj.components.new_description.call(null,"screen->world",false,"com.micahmartin.pendulums.ui-spec");
var _STAR_parent_description_STAR__orig_val__9723_10110 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__9724_10111 = description__8807__auto____$2;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__9724_10111);

try{var seq__9725_10112 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"converts pivot screen position to world origin",((function (_STAR_parent_description_STAR__orig_val__9723_10110,_STAR_parent_description_STAR__temp_val__9724_10111,description__8807__auto____$2,_STAR_parent_description_STAR__orig_val__9603_10050,_STAR_parent_description_STAR__temp_val__9604_10051,description__8807__auto____$1,_STAR_parent_description_STAR__orig_val__9291_9838,_STAR_parent_description_STAR__temp_val__9292_9839,description__8807__auto___9837){
return (function (){
var vec__9738 = com.micahmartin.pendulums.ui.screen__GT_world.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [400.0,150.0], null),1.0,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,0.0], null),(800));
var wx = cljs.core.nth.call(null,vec__9738,(0),null);
var wy = cljs.core.nth.call(null,vec__9738,(1),null);
speclj.components.inc_assertions_BANG_.call(null);

var expected__8949__auto___10116 = 0.0;
var actual__8950__auto___10117 = wx;
if(cljs.core._EQ_.call(null,expected__8949__auto___10116,actual__8950__auto___10117)){
} else {
throw cljs.core.ex_info.call(null,(""+"Expected: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = expected__8949__auto___10116;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.platform.endl)+"     got: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = actual__8950__auto___10117;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+" (using =)"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8949__auto__ = 0.0;
var actual__8950__auto__ = wy;
if(cljs.core._EQ_.call(null,expected__8949__auto__,actual__8950__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,(""+"Expected: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = expected__8949__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.platform.endl)+"     got: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = actual__8950__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+" (using =)"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__9723_10110,_STAR_parent_description_STAR__temp_val__9724_10111,description__8807__auto____$2,_STAR_parent_description_STAR__orig_val__9603_10050,_STAR_parent_description_STAR__temp_val__9604_10051,description__8807__auto____$1,_STAR_parent_description_STAR__orig_val__9291_9838,_STAR_parent_description_STAR__temp_val__9292_9839,description__8807__auto___9837))
,false),speclj.components.new_characteristic.call(null,"converts screen position right of pivot to positive world-x",((function (_STAR_parent_description_STAR__orig_val__9723_10110,_STAR_parent_description_STAR__temp_val__9724_10111,description__8807__auto____$2,_STAR_parent_description_STAR__orig_val__9603_10050,_STAR_parent_description_STAR__temp_val__9604_10051,description__8807__auto____$1,_STAR_parent_description_STAR__orig_val__9291_9838,_STAR_parent_description_STAR__temp_val__9292_9839,description__8807__auto___9837){
return (function (){
var vec__9741 = com.micahmartin.pendulums.ui.screen__GT_world.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [500.0,150.0], null),1.0,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,0.0], null),(800));
var wx = cljs.core.nth.call(null,vec__9741,(0),null);
var _ = cljs.core.nth.call(null,vec__9741,(1),null);
speclj.components.inc_assertions_BANG_.call(null);

var expected__8949__auto__ = 1.0;
var actual__8950__auto__ = wx;
if(cljs.core._EQ_.call(null,expected__8949__auto__,actual__8950__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,(""+"Expected: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = expected__8949__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.platform.endl)+"     got: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = actual__8950__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+" (using =)"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__9723_10110,_STAR_parent_description_STAR__temp_val__9724_10111,description__8807__auto____$2,_STAR_parent_description_STAR__orig_val__9603_10050,_STAR_parent_description_STAR__temp_val__9604_10051,description__8807__auto____$1,_STAR_parent_description_STAR__orig_val__9291_9838,_STAR_parent_description_STAR__temp_val__9292_9839,description__8807__auto___9837))
,false),speclj.components.new_characteristic.call(null,"converts screen position above pivot to positive world-y",((function (_STAR_parent_description_STAR__orig_val__9723_10110,_STAR_parent_description_STAR__temp_val__9724_10111,description__8807__auto____$2,_STAR_parent_description_STAR__orig_val__9603_10050,_STAR_parent_description_STAR__temp_val__9604_10051,description__8807__auto____$1,_STAR_parent_description_STAR__orig_val__9291_9838,_STAR_parent_description_STAR__temp_val__9292_9839,description__8807__auto___9837){
return (function (){
var vec__9744 = com.micahmartin.pendulums.ui.screen__GT_world.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [400.0,50.0], null),1.0,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,0.0], null),(800));
var _ = cljs.core.nth.call(null,vec__9744,(0),null);
var wy = cljs.core.nth.call(null,vec__9744,(1),null);
speclj.components.inc_assertions_BANG_.call(null);

var expected__8949__auto__ = 1.0;
var actual__8950__auto__ = wy;
if(cljs.core._EQ_.call(null,expected__8949__auto__,actual__8950__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,(""+"Expected: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = expected__8949__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.platform.endl)+"     got: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = actual__8950__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+" (using =)"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__9723_10110,_STAR_parent_description_STAR__temp_val__9724_10111,description__8807__auto____$2,_STAR_parent_description_STAR__orig_val__9603_10050,_STAR_parent_description_STAR__temp_val__9604_10051,description__8807__auto____$1,_STAR_parent_description_STAR__orig_val__9291_9838,_STAR_parent_description_STAR__temp_val__9292_9839,description__8807__auto___9837))
,false),speclj.components.new_characteristic.call(null,"is inverse of world->screen",((function (_STAR_parent_description_STAR__orig_val__9723_10110,_STAR_parent_description_STAR__temp_val__9724_10111,description__8807__auto____$2,_STAR_parent_description_STAR__orig_val__9603_10050,_STAR_parent_description_STAR__temp_val__9604_10051,description__8807__auto____$1,_STAR_parent_description_STAR__orig_val__9291_9838,_STAR_parent_description_STAR__temp_val__9292_9839,description__8807__auto___9837){
return (function (){
var world_pos = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1.5,-0.5], null);
var zoom = 1.5;
var pan = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [20.0,-10.0], null);
var canvas_width = (800);
var screen_pos = com.micahmartin.pendulums.ui.world__GT_screen.call(null,world_pos,zoom,pan,canvas_width);
var back_to_world = com.micahmartin.pendulums.ui.screen__GT_world.call(null,screen_pos,zoom,pan,canvas_width);
speclj.components.inc_assertions_BANG_.call(null);

var expected__8949__auto___10118 = cljs.core.first.call(null,world_pos);
var actual__8950__auto___10119 = cljs.core.first.call(null,back_to_world);
if(cljs.core._EQ_.call(null,expected__8949__auto___10118,actual__8950__auto___10119)){
} else {
throw cljs.core.ex_info.call(null,(""+"Expected: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = expected__8949__auto___10118;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.platform.endl)+"     got: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = actual__8950__auto___10119;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+" (using =)"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8949__auto__ = cljs.core.second.call(null,world_pos);
var actual__8950__auto__ = cljs.core.second.call(null,back_to_world);
if(cljs.core._EQ_.call(null,expected__8949__auto__,actual__8950__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,(""+"Expected: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = expected__8949__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.platform.endl)+"     got: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = actual__8950__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+" (using =)"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__9723_10110,_STAR_parent_description_STAR__temp_val__9724_10111,description__8807__auto____$2,_STAR_parent_description_STAR__orig_val__9603_10050,_STAR_parent_description_STAR__temp_val__9604_10051,description__8807__auto____$1,_STAR_parent_description_STAR__orig_val__9291_9838,_STAR_parent_description_STAR__temp_val__9292_9839,description__8807__auto___9837))
,false)],null)));
var chunk__9726_10113 = null;
var count__9727_10114 = (0);
var i__9728_10115 = (0);
while(true){
if((i__9728_10115 < count__9727_10114)){
var component__8808__auto___10120 = cljs.core._nth.call(null,chunk__9726_10113,i__9728_10115);
speclj.components.install.call(null,component__8808__auto___10120,description__8807__auto____$2);


var G__10121 = seq__9725_10112;
var G__10122 = chunk__9726_10113;
var G__10123 = count__9727_10114;
var G__10124 = (i__9728_10115 + (1));
seq__9725_10112 = G__10121;
chunk__9726_10113 = G__10122;
count__9727_10114 = G__10123;
i__9728_10115 = G__10124;
continue;
} else {
var temp__5825__auto___10125 = cljs.core.seq.call(null,seq__9725_10112);
if(temp__5825__auto___10125){
var seq__9725_10126__$1 = temp__5825__auto___10125;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9725_10126__$1)){
var c__5673__auto___10127 = cljs.core.chunk_first.call(null,seq__9725_10126__$1);
var G__10128 = cljs.core.chunk_rest.call(null,seq__9725_10126__$1);
var G__10129 = c__5673__auto___10127;
var G__10130 = cljs.core.count.call(null,c__5673__auto___10127);
var G__10131 = (0);
seq__9725_10112 = G__10128;
chunk__9726_10113 = G__10129;
count__9727_10114 = G__10130;
i__9728_10115 = G__10131;
continue;
} else {
var component__8808__auto___10132 = cljs.core.first.call(null,seq__9725_10126__$1);
speclj.components.install.call(null,component__8808__auto___10132,description__8807__auto____$2);


var G__10133 = cljs.core.next.call(null,seq__9725_10126__$1);
var G__10134 = null;
var G__10135 = (0);
var G__10136 = (0);
seq__9725_10112 = G__10133;
chunk__9726_10113 = G__10134;
count__9727_10114 = G__10135;
i__9728_10115 = G__10136;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__9723_10110);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8807__auto____$2);
}

return description__8807__auto____$2;
})(),(function (){var description__8807__auto____$2 = speclj.components.new_description.call(null,"pivot-screen-pos",false,"com.micahmartin.pendulums.ui-spec");
var _STAR_parent_description_STAR__orig_val__9747_10137 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__9748_10138 = description__8807__auto____$2;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__9748_10138);

try{var seq__9749_10139 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"returns pivot position at zoom 1 with no pan",((function (_STAR_parent_description_STAR__orig_val__9747_10137,_STAR_parent_description_STAR__temp_val__9748_10138,description__8807__auto____$2,_STAR_parent_description_STAR__orig_val__9603_10050,_STAR_parent_description_STAR__temp_val__9604_10051,description__8807__auto____$1,_STAR_parent_description_STAR__orig_val__9291_9838,_STAR_parent_description_STAR__temp_val__9292_9839,description__8807__auto___9837){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__8949__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [400.0,150.0], null);
var actual__8950__auto__ = com.micahmartin.pendulums.ui.pivot_screen_pos.call(null,1.0,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,0.0], null),(800));
if(cljs.core._EQ_.call(null,expected__8949__auto__,actual__8950__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,(""+"Expected: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = expected__8949__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.platform.endl)+"     got: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = actual__8950__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+" (using =)"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__9747_10137,_STAR_parent_description_STAR__temp_val__9748_10138,description__8807__auto____$2,_STAR_parent_description_STAR__orig_val__9603_10050,_STAR_parent_description_STAR__temp_val__9604_10051,description__8807__auto____$1,_STAR_parent_description_STAR__orig_val__9291_9838,_STAR_parent_description_STAR__temp_val__9292_9839,description__8807__auto___9837))
,false),speclj.components.new_characteristic.call(null,"scales pivot position with zoom",((function (_STAR_parent_description_STAR__orig_val__9747_10137,_STAR_parent_description_STAR__temp_val__9748_10138,description__8807__auto____$2,_STAR_parent_description_STAR__orig_val__9603_10050,_STAR_parent_description_STAR__temp_val__9604_10051,description__8807__auto____$1,_STAR_parent_description_STAR__orig_val__9291_9838,_STAR_parent_description_STAR__temp_val__9292_9839,description__8807__auto___9837){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__8949__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [800.0,300.0], null);
var actual__8950__auto__ = com.micahmartin.pendulums.ui.pivot_screen_pos.call(null,2.0,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,0.0], null),(800));
if(cljs.core._EQ_.call(null,expected__8949__auto__,actual__8950__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,(""+"Expected: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = expected__8949__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.platform.endl)+"     got: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = actual__8950__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+" (using =)"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__9747_10137,_STAR_parent_description_STAR__temp_val__9748_10138,description__8807__auto____$2,_STAR_parent_description_STAR__orig_val__9603_10050,_STAR_parent_description_STAR__temp_val__9604_10051,description__8807__auto____$1,_STAR_parent_description_STAR__orig_val__9291_9838,_STAR_parent_description_STAR__temp_val__9292_9839,description__8807__auto___9837))
,false),speclj.components.new_characteristic.call(null,"offsets pivot position with pan",((function (_STAR_parent_description_STAR__orig_val__9747_10137,_STAR_parent_description_STAR__temp_val__9748_10138,description__8807__auto____$2,_STAR_parent_description_STAR__orig_val__9603_10050,_STAR_parent_description_STAR__temp_val__9604_10051,description__8807__auto____$1,_STAR_parent_description_STAR__orig_val__9291_9838,_STAR_parent_description_STAR__temp_val__9292_9839,description__8807__auto___9837){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__8949__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [450.0,180.0], null);
var actual__8950__auto__ = com.micahmartin.pendulums.ui.pivot_screen_pos.call(null,1.0,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [50.0,30.0], null),(800));
if(cljs.core._EQ_.call(null,expected__8949__auto__,actual__8950__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,(""+"Expected: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = expected__8949__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.platform.endl)+"     got: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = actual__8950__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+" (using =)"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__9747_10137,_STAR_parent_description_STAR__temp_val__9748_10138,description__8807__auto____$2,_STAR_parent_description_STAR__orig_val__9603_10050,_STAR_parent_description_STAR__temp_val__9604_10051,description__8807__auto____$1,_STAR_parent_description_STAR__orig_val__9291_9838,_STAR_parent_description_STAR__temp_val__9292_9839,description__8807__auto___9837))
,false),speclj.components.new_characteristic.call(null,"applies both zoom and pan",((function (_STAR_parent_description_STAR__orig_val__9747_10137,_STAR_parent_description_STAR__temp_val__9748_10138,description__8807__auto____$2,_STAR_parent_description_STAR__orig_val__9603_10050,_STAR_parent_description_STAR__temp_val__9604_10051,description__8807__auto____$1,_STAR_parent_description_STAR__orig_val__9291_9838,_STAR_parent_description_STAR__temp_val__9292_9839,description__8807__auto___9837){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__8949__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [810.0,320.0], null);
var actual__8950__auto__ = com.micahmartin.pendulums.ui.pivot_screen_pos.call(null,2.0,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [10.0,20.0], null),(800));
if(cljs.core._EQ_.call(null,expected__8949__auto__,actual__8950__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,(""+"Expected: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = expected__8949__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.platform.endl)+"     got: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = actual__8950__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+" (using =)"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__9747_10137,_STAR_parent_description_STAR__temp_val__9748_10138,description__8807__auto____$2,_STAR_parent_description_STAR__orig_val__9603_10050,_STAR_parent_description_STAR__temp_val__9604_10051,description__8807__auto____$1,_STAR_parent_description_STAR__orig_val__9291_9838,_STAR_parent_description_STAR__temp_val__9292_9839,description__8807__auto___9837))
,false)],null)));
var chunk__9750_10140 = null;
var count__9751_10141 = (0);
var i__9752_10142 = (0);
while(true){
if((i__9752_10142 < count__9751_10141)){
var component__8808__auto___10143 = cljs.core._nth.call(null,chunk__9750_10140,i__9752_10142);
speclj.components.install.call(null,component__8808__auto___10143,description__8807__auto____$2);


var G__10144 = seq__9749_10139;
var G__10145 = chunk__9750_10140;
var G__10146 = count__9751_10141;
var G__10147 = (i__9752_10142 + (1));
seq__9749_10139 = G__10144;
chunk__9750_10140 = G__10145;
count__9751_10141 = G__10146;
i__9752_10142 = G__10147;
continue;
} else {
var temp__5825__auto___10148 = cljs.core.seq.call(null,seq__9749_10139);
if(temp__5825__auto___10148){
var seq__9749_10149__$1 = temp__5825__auto___10148;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9749_10149__$1)){
var c__5673__auto___10150 = cljs.core.chunk_first.call(null,seq__9749_10149__$1);
var G__10151 = cljs.core.chunk_rest.call(null,seq__9749_10149__$1);
var G__10152 = c__5673__auto___10150;
var G__10153 = cljs.core.count.call(null,c__5673__auto___10150);
var G__10154 = (0);
seq__9749_10139 = G__10151;
chunk__9750_10140 = G__10152;
count__9751_10141 = G__10153;
i__9752_10142 = G__10154;
continue;
} else {
var component__8808__auto___10155 = cljs.core.first.call(null,seq__9749_10149__$1);
speclj.components.install.call(null,component__8808__auto___10155,description__8807__auto____$2);


var G__10156 = cljs.core.next.call(null,seq__9749_10149__$1);
var G__10157 = null;
var G__10158 = (0);
var G__10159 = (0);
seq__9749_10139 = G__10156;
chunk__9750_10140 = G__10157;
count__9751_10141 = G__10158;
i__9752_10142 = G__10159;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__9747_10137);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8807__auto____$2);
}

return description__8807__auto____$2;
})()],null)));
var chunk__9606_10053 = null;
var count__9607_10054 = (0);
var i__9608_10055 = (0);
while(true){
if((i__9608_10055 < count__9607_10054)){
var component__8808__auto___10160 = cljs.core._nth.call(null,chunk__9606_10053,i__9608_10055);
speclj.components.install.call(null,component__8808__auto___10160,description__8807__auto____$1);


var G__10161 = seq__9605_10052;
var G__10162 = chunk__9606_10053;
var G__10163 = count__9607_10054;
var G__10164 = (i__9608_10055 + (1));
seq__9605_10052 = G__10161;
chunk__9606_10053 = G__10162;
count__9607_10054 = G__10163;
i__9608_10055 = G__10164;
continue;
} else {
var temp__5825__auto___10165 = cljs.core.seq.call(null,seq__9605_10052);
if(temp__5825__auto___10165){
var seq__9605_10166__$1 = temp__5825__auto___10165;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9605_10166__$1)){
var c__5673__auto___10167 = cljs.core.chunk_first.call(null,seq__9605_10166__$1);
var G__10168 = cljs.core.chunk_rest.call(null,seq__9605_10166__$1);
var G__10169 = c__5673__auto___10167;
var G__10170 = cljs.core.count.call(null,c__5673__auto___10167);
var G__10171 = (0);
seq__9605_10052 = G__10168;
chunk__9606_10053 = G__10169;
count__9607_10054 = G__10170;
i__9608_10055 = G__10171;
continue;
} else {
var component__8808__auto___10172 = cljs.core.first.call(null,seq__9605_10166__$1);
speclj.components.install.call(null,component__8808__auto___10172,description__8807__auto____$1);


var G__10173 = cljs.core.next.call(null,seq__9605_10166__$1);
var G__10174 = null;
var G__10175 = (0);
var G__10176 = (0);
seq__9605_10052 = G__10173;
chunk__9606_10053 = G__10174;
count__9607_10054 = G__10175;
i__9608_10055 = G__10176;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__9603_10050);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8807__auto____$1);
}

return description__8807__auto____$1;
})(),(function (){var description__8807__auto____$1 = speclj.components.new_description.call(null,"bob position & hit testing",false,"com.micahmartin.pendulums.ui-spec");
var _STAR_parent_description_STAR__orig_val__9753_10177 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__9754_10178 = description__8807__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__9754_10178);

try{var seq__9755_10179 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var description__8807__auto____$2 = speclj.components.new_description.call(null,"bob-screen-positions",false,"com.micahmartin.pendulums.ui-spec");
var _STAR_parent_description_STAR__orig_val__9777_10183 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__9778_10184 = description__8807__auto____$2;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__9778_10184);

try{var seq__9779_10185 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"returns screen positions for a single pendulum",((function (_STAR_parent_description_STAR__orig_val__9777_10183,_STAR_parent_description_STAR__temp_val__9778_10184,description__8807__auto____$2,_STAR_parent_description_STAR__orig_val__9753_10177,_STAR_parent_description_STAR__temp_val__9754_10178,description__8807__auto____$1,_STAR_parent_description_STAR__orig_val__9291_9838,_STAR_parent_description_STAR__temp_val__9292_9839,description__8807__auto___9837){
return (function (){
var system = com.micahmartin.pendulums.engine.make_system.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.micahmartin.pendulums.engine.make_pendulum.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"theta","theta",-427510258),(0),new cljs.core.Keyword(null,"length","length",588987862),1.0], null))], null));
var positions = com.micahmartin.pendulums.ui.bob_screen_positions.call(null,system,1.0,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,0.0], null),(800));
speclj.components.inc_assertions_BANG_.call(null);

var expected__8949__auto___10189 = (1);
var actual__8950__auto___10190 = cljs.core.count.call(null,positions);
if(cljs.core._EQ_.call(null,expected__8949__auto___10189,actual__8950__auto___10190)){
} else {
throw cljs.core.ex_info.call(null,(""+"Expected: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = expected__8949__auto___10189;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.platform.endl)+"     got: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = actual__8950__auto___10190;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+" (using =)"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8949__auto___10191 = 400.0;
var actual__8950__auto___10192 = cljs.core.first.call(null,cljs.core.first.call(null,positions));
if(cljs.core._EQ_.call(null,expected__8949__auto___10191,actual__8950__auto___10192)){
} else {
throw cljs.core.ex_info.call(null,(""+"Expected: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = expected__8949__auto___10191;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.platform.endl)+"     got: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = actual__8950__auto___10192;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+" (using =)"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8949__auto__ = 250.0;
var actual__8950__auto__ = cljs.core.second.call(null,cljs.core.first.call(null,positions));
if(cljs.core._EQ_.call(null,expected__8949__auto__,actual__8950__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,(""+"Expected: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = expected__8949__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.platform.endl)+"     got: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = actual__8950__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+" (using =)"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__9777_10183,_STAR_parent_description_STAR__temp_val__9778_10184,description__8807__auto____$2,_STAR_parent_description_STAR__orig_val__9753_10177,_STAR_parent_description_STAR__temp_val__9754_10178,description__8807__auto____$1,_STAR_parent_description_STAR__orig_val__9291_9838,_STAR_parent_description_STAR__temp_val__9292_9839,description__8807__auto___9837))
,false),speclj.components.new_characteristic.call(null,"returns positions for multiple pendulums",((function (_STAR_parent_description_STAR__orig_val__9777_10183,_STAR_parent_description_STAR__temp_val__9778_10184,description__8807__auto____$2,_STAR_parent_description_STAR__orig_val__9753_10177,_STAR_parent_description_STAR__temp_val__9754_10178,description__8807__auto____$1,_STAR_parent_description_STAR__orig_val__9291_9838,_STAR_parent_description_STAR__temp_val__9292_9839,description__8807__auto___9837){
return (function (){
var system = com.micahmartin.pendulums.engine.make_system.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.micahmartin.pendulums.engine.make_pendulum.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"theta","theta",-427510258),(0),new cljs.core.Keyword(null,"length","length",588987862),1.0], null)),com.micahmartin.pendulums.engine.make_pendulum.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"theta","theta",-427510258),(0),new cljs.core.Keyword(null,"length","length",588987862),1.0], null))], null));
var positions = com.micahmartin.pendulums.ui.bob_screen_positions.call(null,system,1.0,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,0.0], null),(800));
speclj.components.inc_assertions_BANG_.call(null);

var expected__8949__auto__ = (2);
var actual__8950__auto__ = cljs.core.count.call(null,positions);
if(cljs.core._EQ_.call(null,expected__8949__auto__,actual__8950__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,(""+"Expected: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = expected__8949__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.platform.endl)+"     got: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = actual__8950__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+" (using =)"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__9777_10183,_STAR_parent_description_STAR__temp_val__9778_10184,description__8807__auto____$2,_STAR_parent_description_STAR__orig_val__9753_10177,_STAR_parent_description_STAR__temp_val__9754_10178,description__8807__auto____$1,_STAR_parent_description_STAR__orig_val__9291_9838,_STAR_parent_description_STAR__temp_val__9292_9839,description__8807__auto___9837))
,false)],null)));
var chunk__9780_10186 = null;
var count__9781_10187 = (0);
var i__9782_10188 = (0);
while(true){
if((i__9782_10188 < count__9781_10187)){
var component__8808__auto___10193 = cljs.core._nth.call(null,chunk__9780_10186,i__9782_10188);
speclj.components.install.call(null,component__8808__auto___10193,description__8807__auto____$2);


var G__10194 = seq__9779_10185;
var G__10195 = chunk__9780_10186;
var G__10196 = count__9781_10187;
var G__10197 = (i__9782_10188 + (1));
seq__9779_10185 = G__10194;
chunk__9780_10186 = G__10195;
count__9781_10187 = G__10196;
i__9782_10188 = G__10197;
continue;
} else {
var temp__5825__auto___10198 = cljs.core.seq.call(null,seq__9779_10185);
if(temp__5825__auto___10198){
var seq__9779_10199__$1 = temp__5825__auto___10198;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9779_10199__$1)){
var c__5673__auto___10200 = cljs.core.chunk_first.call(null,seq__9779_10199__$1);
var G__10201 = cljs.core.chunk_rest.call(null,seq__9779_10199__$1);
var G__10202 = c__5673__auto___10200;
var G__10203 = cljs.core.count.call(null,c__5673__auto___10200);
var G__10204 = (0);
seq__9779_10185 = G__10201;
chunk__9780_10186 = G__10202;
count__9781_10187 = G__10203;
i__9782_10188 = G__10204;
continue;
} else {
var component__8808__auto___10205 = cljs.core.first.call(null,seq__9779_10199__$1);
speclj.components.install.call(null,component__8808__auto___10205,description__8807__auto____$2);


var G__10206 = cljs.core.next.call(null,seq__9779_10199__$1);
var G__10207 = null;
var G__10208 = (0);
var G__10209 = (0);
seq__9779_10185 = G__10206;
chunk__9780_10186 = G__10207;
count__9781_10187 = G__10208;
i__9782_10188 = G__10209;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__9777_10183);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8807__auto____$2);
}

return description__8807__auto____$2;
})(),(function (){var description__8807__auto____$2 = speclj.components.new_description.call(null,"pivot-for-pendulum",false,"com.micahmartin.pendulums.ui-spec");
var _STAR_parent_description_STAR__orig_val__9783_10210 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__9784_10211 = description__8807__auto____$2;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__9784_10211);

try{var seq__9785_10212 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"returns main pivot for first pendulum",((function (_STAR_parent_description_STAR__orig_val__9783_10210,_STAR_parent_description_STAR__temp_val__9784_10211,description__8807__auto____$2,_STAR_parent_description_STAR__orig_val__9753_10177,_STAR_parent_description_STAR__temp_val__9754_10178,description__8807__auto____$1,_STAR_parent_description_STAR__orig_val__9291_9838,_STAR_parent_description_STAR__temp_val__9292_9839,description__8807__auto___9837){
return (function (){
var system = com.micahmartin.pendulums.engine.make_system.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.micahmartin.pendulums.engine.make_pendulum.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"theta","theta",-427510258),(0),new cljs.core.Keyword(null,"length","length",588987862),1.0], null))], null));
var pivot = com.micahmartin.pendulums.ui.pivot_for_pendulum.call(null,system,(0),1.0,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,0.0], null),(800));
speclj.components.inc_assertions_BANG_.call(null);

var expected__8949__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [400.0,150.0], null);
var actual__8950__auto__ = pivot;
if(cljs.core._EQ_.call(null,expected__8949__auto__,actual__8950__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,(""+"Expected: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = expected__8949__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.platform.endl)+"     got: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = actual__8950__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+" (using =)"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__9783_10210,_STAR_parent_description_STAR__temp_val__9784_10211,description__8807__auto____$2,_STAR_parent_description_STAR__orig_val__9753_10177,_STAR_parent_description_STAR__temp_val__9754_10178,description__8807__auto____$1,_STAR_parent_description_STAR__orig_val__9291_9838,_STAR_parent_description_STAR__temp_val__9292_9839,description__8807__auto___9837))
,false),speclj.components.new_characteristic.call(null,"returns previous bob position for subsequent pendulums",((function (_STAR_parent_description_STAR__orig_val__9783_10210,_STAR_parent_description_STAR__temp_val__9784_10211,description__8807__auto____$2,_STAR_parent_description_STAR__orig_val__9753_10177,_STAR_parent_description_STAR__temp_val__9754_10178,description__8807__auto____$1,_STAR_parent_description_STAR__orig_val__9291_9838,_STAR_parent_description_STAR__temp_val__9292_9839,description__8807__auto___9837){
return (function (){
var system = com.micahmartin.pendulums.engine.make_system.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.micahmartin.pendulums.engine.make_pendulum.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"theta","theta",-427510258),(0),new cljs.core.Keyword(null,"length","length",588987862),1.0], null)),com.micahmartin.pendulums.engine.make_pendulum.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"theta","theta",-427510258),(0),new cljs.core.Keyword(null,"length","length",588987862),1.0], null))], null));
var pivot = com.micahmartin.pendulums.ui.pivot_for_pendulum.call(null,system,(1),1.0,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,0.0], null),(800));
speclj.components.inc_assertions_BANG_.call(null);

var expected__8949__auto___10216 = 400.0;
var actual__8950__auto___10217 = cljs.core.first.call(null,pivot);
if(cljs.core._EQ_.call(null,expected__8949__auto___10216,actual__8950__auto___10217)){
} else {
throw cljs.core.ex_info.call(null,(""+"Expected: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = expected__8949__auto___10216;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.platform.endl)+"     got: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = actual__8950__auto___10217;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+" (using =)"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8949__auto__ = 250.0;
var actual__8950__auto__ = cljs.core.second.call(null,pivot);
if(cljs.core._EQ_.call(null,expected__8949__auto__,actual__8950__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,(""+"Expected: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = expected__8949__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.platform.endl)+"     got: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = actual__8950__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+" (using =)"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__9783_10210,_STAR_parent_description_STAR__temp_val__9784_10211,description__8807__auto____$2,_STAR_parent_description_STAR__orig_val__9753_10177,_STAR_parent_description_STAR__temp_val__9754_10178,description__8807__auto____$1,_STAR_parent_description_STAR__orig_val__9291_9838,_STAR_parent_description_STAR__temp_val__9292_9839,description__8807__auto___9837))
,false)],null)));
var chunk__9786_10213 = null;
var count__9787_10214 = (0);
var i__9788_10215 = (0);
while(true){
if((i__9788_10215 < count__9787_10214)){
var component__8808__auto___10218 = cljs.core._nth.call(null,chunk__9786_10213,i__9788_10215);
speclj.components.install.call(null,component__8808__auto___10218,description__8807__auto____$2);


var G__10219 = seq__9785_10212;
var G__10220 = chunk__9786_10213;
var G__10221 = count__9787_10214;
var G__10222 = (i__9788_10215 + (1));
seq__9785_10212 = G__10219;
chunk__9786_10213 = G__10220;
count__9787_10214 = G__10221;
i__9788_10215 = G__10222;
continue;
} else {
var temp__5825__auto___10223 = cljs.core.seq.call(null,seq__9785_10212);
if(temp__5825__auto___10223){
var seq__9785_10224__$1 = temp__5825__auto___10223;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9785_10224__$1)){
var c__5673__auto___10225 = cljs.core.chunk_first.call(null,seq__9785_10224__$1);
var G__10226 = cljs.core.chunk_rest.call(null,seq__9785_10224__$1);
var G__10227 = c__5673__auto___10225;
var G__10228 = cljs.core.count.call(null,c__5673__auto___10225);
var G__10229 = (0);
seq__9785_10212 = G__10226;
chunk__9786_10213 = G__10227;
count__9787_10214 = G__10228;
i__9788_10215 = G__10229;
continue;
} else {
var component__8808__auto___10230 = cljs.core.first.call(null,seq__9785_10224__$1);
speclj.components.install.call(null,component__8808__auto___10230,description__8807__auto____$2);


var G__10231 = cljs.core.next.call(null,seq__9785_10224__$1);
var G__10232 = null;
var G__10233 = (0);
var G__10234 = (0);
seq__9785_10212 = G__10231;
chunk__9786_10213 = G__10232;
count__9787_10214 = G__10233;
i__9788_10215 = G__10234;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__9783_10210);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8807__auto____$2);
}

return description__8807__auto____$2;
})(),(function (){var description__8807__auto____$2 = speclj.components.new_description.call(null,"hit-test-bob",false,"com.micahmartin.pendulums.ui-spec");
var _STAR_parent_description_STAR__orig_val__9789_10235 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__9790_10236 = description__8807__auto____$2;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__9790_10236);

try{var seq__9791_10237 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"returns nil when click is far from any bob",((function (_STAR_parent_description_STAR__orig_val__9789_10235,_STAR_parent_description_STAR__temp_val__9790_10236,description__8807__auto____$2,_STAR_parent_description_STAR__orig_val__9753_10177,_STAR_parent_description_STAR__temp_val__9754_10178,description__8807__auto____$1,_STAR_parent_description_STAR__orig_val__9291_9838,_STAR_parent_description_STAR__temp_val__9292_9839,description__8807__auto___9837){
return (function (){
var system = com.micahmartin.pendulums.engine.make_system.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.micahmartin.pendulums.engine.make_pendulum.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"theta","theta",-427510258),(0),new cljs.core.Keyword(null,"length","length",588987862),1.0], null))], null));
speclj.components.inc_assertions_BANG_.call(null);

var expected__8949__auto__ = null;
var actual__8950__auto__ = com.micahmartin.pendulums.ui.hit_test_bob.call(null,system,(0),(0),1.0,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,0.0], null),(800));
if(cljs.core._EQ_.call(null,expected__8949__auto__,actual__8950__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,(""+"Expected: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = expected__8949__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.platform.endl)+"     got: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = actual__8950__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+" (using =)"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__9789_10235,_STAR_parent_description_STAR__temp_val__9790_10236,description__8807__auto____$2,_STAR_parent_description_STAR__orig_val__9753_10177,_STAR_parent_description_STAR__temp_val__9754_10178,description__8807__auto____$1,_STAR_parent_description_STAR__orig_val__9291_9838,_STAR_parent_description_STAR__temp_val__9292_9839,description__8807__auto___9837))
,false),speclj.components.new_characteristic.call(null,"returns bob index when click is on bob",((function (_STAR_parent_description_STAR__orig_val__9789_10235,_STAR_parent_description_STAR__temp_val__9790_10236,description__8807__auto____$2,_STAR_parent_description_STAR__orig_val__9753_10177,_STAR_parent_description_STAR__temp_val__9754_10178,description__8807__auto____$1,_STAR_parent_description_STAR__orig_val__9291_9838,_STAR_parent_description_STAR__temp_val__9292_9839,description__8807__auto___9837){
return (function (){
var system = com.micahmartin.pendulums.engine.make_system.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.micahmartin.pendulums.engine.make_pendulum.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"theta","theta",-427510258),(0),new cljs.core.Keyword(null,"length","length",588987862),1.0], null))], null));
speclj.components.inc_assertions_BANG_.call(null);

var expected__8949__auto__ = (0);
var actual__8950__auto__ = com.micahmartin.pendulums.ui.hit_test_bob.call(null,system,(400),(250),1.0,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,0.0], null),(800));
if(cljs.core._EQ_.call(null,expected__8949__auto__,actual__8950__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,(""+"Expected: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = expected__8949__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.platform.endl)+"     got: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = actual__8950__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+" (using =)"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__9789_10235,_STAR_parent_description_STAR__temp_val__9790_10236,description__8807__auto____$2,_STAR_parent_description_STAR__orig_val__9753_10177,_STAR_parent_description_STAR__temp_val__9754_10178,description__8807__auto____$1,_STAR_parent_description_STAR__orig_val__9291_9838,_STAR_parent_description_STAR__temp_val__9292_9839,description__8807__auto___9837))
,false),speclj.components.new_characteristic.call(null,"returns correct index for second bob",((function (_STAR_parent_description_STAR__orig_val__9789_10235,_STAR_parent_description_STAR__temp_val__9790_10236,description__8807__auto____$2,_STAR_parent_description_STAR__orig_val__9753_10177,_STAR_parent_description_STAR__temp_val__9754_10178,description__8807__auto____$1,_STAR_parent_description_STAR__orig_val__9291_9838,_STAR_parent_description_STAR__temp_val__9292_9839,description__8807__auto___9837){
return (function (){
var system = com.micahmartin.pendulums.engine.make_system.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.micahmartin.pendulums.engine.make_pendulum.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"theta","theta",-427510258),(0),new cljs.core.Keyword(null,"length","length",588987862),1.0], null)),com.micahmartin.pendulums.engine.make_pendulum.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"theta","theta",-427510258),(0),new cljs.core.Keyword(null,"length","length",588987862),1.0], null))], null));
speclj.components.inc_assertions_BANG_.call(null);

var expected__8949__auto__ = (1);
var actual__8950__auto__ = com.micahmartin.pendulums.ui.hit_test_bob.call(null,system,(400),(350),1.0,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,0.0], null),(800));
if(cljs.core._EQ_.call(null,expected__8949__auto__,actual__8950__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,(""+"Expected: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = expected__8949__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.platform.endl)+"     got: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = actual__8950__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+" (using =)"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__9789_10235,_STAR_parent_description_STAR__temp_val__9790_10236,description__8807__auto____$2,_STAR_parent_description_STAR__orig_val__9753_10177,_STAR_parent_description_STAR__temp_val__9754_10178,description__8807__auto____$1,_STAR_parent_description_STAR__orig_val__9291_9838,_STAR_parent_description_STAR__temp_val__9292_9839,description__8807__auto___9837))
,false)],null)));
var chunk__9792_10238 = null;
var count__9793_10239 = (0);
var i__9794_10240 = (0);
while(true){
if((i__9794_10240 < count__9793_10239)){
var component__8808__auto___10241 = cljs.core._nth.call(null,chunk__9792_10238,i__9794_10240);
speclj.components.install.call(null,component__8808__auto___10241,description__8807__auto____$2);


var G__10242 = seq__9791_10237;
var G__10243 = chunk__9792_10238;
var G__10244 = count__9793_10239;
var G__10245 = (i__9794_10240 + (1));
seq__9791_10237 = G__10242;
chunk__9792_10238 = G__10243;
count__9793_10239 = G__10244;
i__9794_10240 = G__10245;
continue;
} else {
var temp__5825__auto___10246 = cljs.core.seq.call(null,seq__9791_10237);
if(temp__5825__auto___10246){
var seq__9791_10247__$1 = temp__5825__auto___10246;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9791_10247__$1)){
var c__5673__auto___10248 = cljs.core.chunk_first.call(null,seq__9791_10247__$1);
var G__10249 = cljs.core.chunk_rest.call(null,seq__9791_10247__$1);
var G__10250 = c__5673__auto___10248;
var G__10251 = cljs.core.count.call(null,c__5673__auto___10248);
var G__10252 = (0);
seq__9791_10237 = G__10249;
chunk__9792_10238 = G__10250;
count__9793_10239 = G__10251;
i__9794_10240 = G__10252;
continue;
} else {
var component__8808__auto___10253 = cljs.core.first.call(null,seq__9791_10247__$1);
speclj.components.install.call(null,component__8808__auto___10253,description__8807__auto____$2);


var G__10254 = cljs.core.next.call(null,seq__9791_10247__$1);
var G__10255 = null;
var G__10256 = (0);
var G__10257 = (0);
seq__9791_10237 = G__10254;
chunk__9792_10238 = G__10255;
count__9793_10239 = G__10256;
i__9794_10240 = G__10257;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__9789_10235);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8807__auto____$2);
}

return description__8807__auto____$2;
})()],null)));
var chunk__9756_10180 = null;
var count__9757_10181 = (0);
var i__9758_10182 = (0);
while(true){
if((i__9758_10182 < count__9757_10181)){
var component__8808__auto___10258 = cljs.core._nth.call(null,chunk__9756_10180,i__9758_10182);
speclj.components.install.call(null,component__8808__auto___10258,description__8807__auto____$1);


var G__10259 = seq__9755_10179;
var G__10260 = chunk__9756_10180;
var G__10261 = count__9757_10181;
var G__10262 = (i__9758_10182 + (1));
seq__9755_10179 = G__10259;
chunk__9756_10180 = G__10260;
count__9757_10181 = G__10261;
i__9758_10182 = G__10262;
continue;
} else {
var temp__5825__auto___10263 = cljs.core.seq.call(null,seq__9755_10179);
if(temp__5825__auto___10263){
var seq__9755_10264__$1 = temp__5825__auto___10263;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9755_10264__$1)){
var c__5673__auto___10265 = cljs.core.chunk_first.call(null,seq__9755_10264__$1);
var G__10266 = cljs.core.chunk_rest.call(null,seq__9755_10264__$1);
var G__10267 = c__5673__auto___10265;
var G__10268 = cljs.core.count.call(null,c__5673__auto___10265);
var G__10269 = (0);
seq__9755_10179 = G__10266;
chunk__9756_10180 = G__10267;
count__9757_10181 = G__10268;
i__9758_10182 = G__10269;
continue;
} else {
var component__8808__auto___10270 = cljs.core.first.call(null,seq__9755_10264__$1);
speclj.components.install.call(null,component__8808__auto___10270,description__8807__auto____$1);


var G__10271 = cljs.core.next.call(null,seq__9755_10264__$1);
var G__10272 = null;
var G__10273 = (0);
var G__10274 = (0);
seq__9755_10179 = G__10271;
chunk__9756_10180 = G__10272;
count__9757_10181 = G__10273;
i__9758_10182 = G__10274;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__9753_10177);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8807__auto____$1);
}

return description__8807__auto____$1;
})(),(function (){var description__8807__auto____$1 = speclj.components.new_description.call(null,"angle calculations",false,"com.micahmartin.pendulums.ui-spec");
var _STAR_parent_description_STAR__orig_val__9795_10275 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__9796_10276 = description__8807__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__9796_10276);

try{var seq__9797_10277 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var description__8807__auto____$2 = speclj.components.new_description.call(null,"angle-from-pivot",false,"com.micahmartin.pendulums.ui-spec");
var _STAR_parent_description_STAR__orig_val__9819_10281 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__9820_10282 = description__8807__auto____$2;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__9820_10282);

try{var seq__9821_10283 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"returns 0 for point directly below pivot",((function (_STAR_parent_description_STAR__orig_val__9819_10281,_STAR_parent_description_STAR__temp_val__9820_10282,description__8807__auto____$2,_STAR_parent_description_STAR__orig_val__9795_10275,_STAR_parent_description_STAR__temp_val__9796_10276,description__8807__auto____$1,_STAR_parent_description_STAR__orig_val__9291_9838,_STAR_parent_description_STAR__temp_val__9292_9839,description__8807__auto___9837){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__8949__auto__ = 0.0;
var actual__8950__auto__ = com.micahmartin.pendulums.ui.angle_from_pivot.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),(100)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),(200)], null));
if(cljs.core._EQ_.call(null,expected__8949__auto__,actual__8950__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,(""+"Expected: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = expected__8949__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.platform.endl)+"     got: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = actual__8950__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+" (using =)"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__9819_10281,_STAR_parent_description_STAR__temp_val__9820_10282,description__8807__auto____$2,_STAR_parent_description_STAR__orig_val__9795_10275,_STAR_parent_description_STAR__temp_val__9796_10276,description__8807__auto____$1,_STAR_parent_description_STAR__orig_val__9291_9838,_STAR_parent_description_STAR__temp_val__9292_9839,description__8807__auto___9837))
,false),speclj.components.new_characteristic.call(null,"returns positive angle for point to the right",((function (_STAR_parent_description_STAR__orig_val__9819_10281,_STAR_parent_description_STAR__temp_val__9820_10282,description__8807__auto____$2,_STAR_parent_description_STAR__orig_val__9795_10275,_STAR_parent_description_STAR__temp_val__9796_10276,description__8807__auto____$1,_STAR_parent_description_STAR__orig_val__9291_9838,_STAR_parent_description_STAR__temp_val__9292_9839,description__8807__auto___9837){
return (function (){
var angle = com.micahmartin.pendulums.ui.angle_from_pivot.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),(100)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(100)], null));
speclj.components.inc_assertions_BANG_.call(null);

var value__8937__auto___10287 = (angle > 1.5);
if(value__8937__auto___10287){
} else {
throw cljs.core.ex_info.call(null,(""+"Expected truthy but was: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = value__8937__auto___10287;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+""),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var value__8937__auto__ = (angle < 1.6);
if(value__8937__auto__){
return null;
} else {
throw cljs.core.ex_info.call(null,(""+"Expected truthy but was: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = value__8937__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+""),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__9819_10281,_STAR_parent_description_STAR__temp_val__9820_10282,description__8807__auto____$2,_STAR_parent_description_STAR__orig_val__9795_10275,_STAR_parent_description_STAR__temp_val__9796_10276,description__8807__auto____$1,_STAR_parent_description_STAR__orig_val__9291_9838,_STAR_parent_description_STAR__temp_val__9292_9839,description__8807__auto___9837))
,false),speclj.components.new_characteristic.call(null,"returns negative angle for point to the left",((function (_STAR_parent_description_STAR__orig_val__9819_10281,_STAR_parent_description_STAR__temp_val__9820_10282,description__8807__auto____$2,_STAR_parent_description_STAR__orig_val__9795_10275,_STAR_parent_description_STAR__temp_val__9796_10276,description__8807__auto____$1,_STAR_parent_description_STAR__orig_val__9291_9838,_STAR_parent_description_STAR__temp_val__9292_9839,description__8807__auto___9837){
return (function (){
var angle = com.micahmartin.pendulums.ui.angle_from_pivot.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),(100)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(100)], null));
speclj.components.inc_assertions_BANG_.call(null);

var value__8937__auto___10288 = (angle < -1.5);
if(value__8937__auto___10288){
} else {
throw cljs.core.ex_info.call(null,(""+"Expected truthy but was: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = value__8937__auto___10288;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+""),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var value__8937__auto__ = (angle > -1.6);
if(value__8937__auto__){
return null;
} else {
throw cljs.core.ex_info.call(null,(""+"Expected truthy but was: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = value__8937__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+""),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__9819_10281,_STAR_parent_description_STAR__temp_val__9820_10282,description__8807__auto____$2,_STAR_parent_description_STAR__orig_val__9795_10275,_STAR_parent_description_STAR__temp_val__9796_10276,description__8807__auto____$1,_STAR_parent_description_STAR__orig_val__9291_9838,_STAR_parent_description_STAR__temp_val__9292_9839,description__8807__auto___9837))
,false)],null)));
var chunk__9822_10284 = null;
var count__9823_10285 = (0);
var i__9824_10286 = (0);
while(true){
if((i__9824_10286 < count__9823_10285)){
var component__8808__auto___10289 = cljs.core._nth.call(null,chunk__9822_10284,i__9824_10286);
speclj.components.install.call(null,component__8808__auto___10289,description__8807__auto____$2);


var G__10290 = seq__9821_10283;
var G__10291 = chunk__9822_10284;
var G__10292 = count__9823_10285;
var G__10293 = (i__9824_10286 + (1));
seq__9821_10283 = G__10290;
chunk__9822_10284 = G__10291;
count__9823_10285 = G__10292;
i__9824_10286 = G__10293;
continue;
} else {
var temp__5825__auto___10294 = cljs.core.seq.call(null,seq__9821_10283);
if(temp__5825__auto___10294){
var seq__9821_10295__$1 = temp__5825__auto___10294;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9821_10295__$1)){
var c__5673__auto___10296 = cljs.core.chunk_first.call(null,seq__9821_10295__$1);
var G__10297 = cljs.core.chunk_rest.call(null,seq__9821_10295__$1);
var G__10298 = c__5673__auto___10296;
var G__10299 = cljs.core.count.call(null,c__5673__auto___10296);
var G__10300 = (0);
seq__9821_10283 = G__10297;
chunk__9822_10284 = G__10298;
count__9823_10285 = G__10299;
i__9824_10286 = G__10300;
continue;
} else {
var component__8808__auto___10301 = cljs.core.first.call(null,seq__9821_10295__$1);
speclj.components.install.call(null,component__8808__auto___10301,description__8807__auto____$2);


var G__10302 = cljs.core.next.call(null,seq__9821_10295__$1);
var G__10303 = null;
var G__10304 = (0);
var G__10305 = (0);
seq__9821_10283 = G__10302;
chunk__9822_10284 = G__10303;
count__9823_10285 = G__10304;
i__9824_10286 = G__10305;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__9819_10281);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8807__auto____$2);
}

return description__8807__auto____$2;
})(),(function (){var description__8807__auto____$2 = speclj.components.new_description.call(null,"normalize-angle",false,"com.micahmartin.pendulums.ui-spec");
var _STAR_parent_description_STAR__orig_val__9825_10306 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__9826_10307 = description__8807__auto____$2;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__9826_10307);

try{var seq__9827_10308 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"converts theta=0 (hanging down) to 180 degrees",((function (_STAR_parent_description_STAR__orig_val__9825_10306,_STAR_parent_description_STAR__temp_val__9826_10307,description__8807__auto____$2,_STAR_parent_description_STAR__orig_val__9795_10275,_STAR_parent_description_STAR__temp_val__9796_10276,description__8807__auto____$1,_STAR_parent_description_STAR__orig_val__9291_9838,_STAR_parent_description_STAR__temp_val__9292_9839,description__8807__auto___9837){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__8949__auto__ = 180.0;
var actual__8950__auto__ = com.micahmartin.pendulums.ui.normalize_angle.call(null,(0));
if(cljs.core._EQ_.call(null,expected__8949__auto__,actual__8950__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,(""+"Expected: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = expected__8949__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.platform.endl)+"     got: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = actual__8950__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+" (using =)"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__9825_10306,_STAR_parent_description_STAR__temp_val__9826_10307,description__8807__auto____$2,_STAR_parent_description_STAR__orig_val__9795_10275,_STAR_parent_description_STAR__temp_val__9796_10276,description__8807__auto____$1,_STAR_parent_description_STAR__orig_val__9291_9838,_STAR_parent_description_STAR__temp_val__9292_9839,description__8807__auto___9837))
,false),speclj.components.new_characteristic.call(null,"converts theta=\u03C0 (up) to 0 degrees",((function (_STAR_parent_description_STAR__orig_val__9825_10306,_STAR_parent_description_STAR__temp_val__9826_10307,description__8807__auto____$2,_STAR_parent_description_STAR__orig_val__9795_10275,_STAR_parent_description_STAR__temp_val__9796_10276,description__8807__auto____$1,_STAR_parent_description_STAR__orig_val__9291_9838,_STAR_parent_description_STAR__temp_val__9292_9839,description__8807__auto___9837){
return (function (){
var result = com.micahmartin.pendulums.ui.normalize_angle.call(null,com.micahmartin.pendulums.math.PI);
speclj.components.inc_assertions_BANG_.call(null);

var value__8937__auto__ = (com.micahmartin.pendulums.math.abs.call(null,result) < 0.001);
if(value__8937__auto__){
return null;
} else {
throw cljs.core.ex_info.call(null,(""+"Expected truthy but was: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = value__8937__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+""),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__9825_10306,_STAR_parent_description_STAR__temp_val__9826_10307,description__8807__auto____$2,_STAR_parent_description_STAR__orig_val__9795_10275,_STAR_parent_description_STAR__temp_val__9796_10276,description__8807__auto____$1,_STAR_parent_description_STAR__orig_val__9291_9838,_STAR_parent_description_STAR__temp_val__9292_9839,description__8807__auto___9837))
,false),speclj.components.new_characteristic.call(null,"converts theta=\u03C0/2 (right, clockwise from down) to 90 degrees",((function (_STAR_parent_description_STAR__orig_val__9825_10306,_STAR_parent_description_STAR__temp_val__9826_10307,description__8807__auto____$2,_STAR_parent_description_STAR__orig_val__9795_10275,_STAR_parent_description_STAR__temp_val__9796_10276,description__8807__auto____$1,_STAR_parent_description_STAR__orig_val__9291_9838,_STAR_parent_description_STAR__temp_val__9292_9839,description__8807__auto___9837){
return (function (){
var result = com.micahmartin.pendulums.ui.normalize_angle.call(null,(com.micahmartin.pendulums.math.PI / (2)));
speclj.components.inc_assertions_BANG_.call(null);

var value__8937__auto__ = (com.micahmartin.pendulums.math.abs.call(null,(result - (90))) < 0.001);
if(value__8937__auto__){
return null;
} else {
throw cljs.core.ex_info.call(null,(""+"Expected truthy but was: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = value__8937__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+""),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__9825_10306,_STAR_parent_description_STAR__temp_val__9826_10307,description__8807__auto____$2,_STAR_parent_description_STAR__orig_val__9795_10275,_STAR_parent_description_STAR__temp_val__9796_10276,description__8807__auto____$1,_STAR_parent_description_STAR__orig_val__9291_9838,_STAR_parent_description_STAR__temp_val__9292_9839,description__8807__auto___9837))
,false),speclj.components.new_characteristic.call(null,"converts theta=-\u03C0/2 (left, counter-clockwise from down) to 270 degrees",((function (_STAR_parent_description_STAR__orig_val__9825_10306,_STAR_parent_description_STAR__temp_val__9826_10307,description__8807__auto____$2,_STAR_parent_description_STAR__orig_val__9795_10275,_STAR_parent_description_STAR__temp_val__9796_10276,description__8807__auto____$1,_STAR_parent_description_STAR__orig_val__9291_9838,_STAR_parent_description_STAR__temp_val__9292_9839,description__8807__auto___9837){
return (function (){
var result = com.micahmartin.pendulums.ui.normalize_angle.call(null,(com.micahmartin.pendulums.math.PI / (-2)));
speclj.components.inc_assertions_BANG_.call(null);

var value__8937__auto__ = (com.micahmartin.pendulums.math.abs.call(null,(result - (270))) < 0.001);
if(value__8937__auto__){
return null;
} else {
throw cljs.core.ex_info.call(null,(""+"Expected truthy but was: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = value__8937__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+""),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__9825_10306,_STAR_parent_description_STAR__temp_val__9826_10307,description__8807__auto____$2,_STAR_parent_description_STAR__orig_val__9795_10275,_STAR_parent_description_STAR__temp_val__9796_10276,description__8807__auto____$1,_STAR_parent_description_STAR__orig_val__9291_9838,_STAR_parent_description_STAR__temp_val__9292_9839,description__8807__auto___9837))
,false)],null)));
var chunk__9828_10309 = null;
var count__9829_10310 = (0);
var i__9830_10311 = (0);
while(true){
if((i__9830_10311 < count__9829_10310)){
var component__8808__auto___10312 = cljs.core._nth.call(null,chunk__9828_10309,i__9830_10311);
speclj.components.install.call(null,component__8808__auto___10312,description__8807__auto____$2);


var G__10313 = seq__9827_10308;
var G__10314 = chunk__9828_10309;
var G__10315 = count__9829_10310;
var G__10316 = (i__9830_10311 + (1));
seq__9827_10308 = G__10313;
chunk__9828_10309 = G__10314;
count__9829_10310 = G__10315;
i__9830_10311 = G__10316;
continue;
} else {
var temp__5825__auto___10317 = cljs.core.seq.call(null,seq__9827_10308);
if(temp__5825__auto___10317){
var seq__9827_10318__$1 = temp__5825__auto___10317;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9827_10318__$1)){
var c__5673__auto___10319 = cljs.core.chunk_first.call(null,seq__9827_10318__$1);
var G__10320 = cljs.core.chunk_rest.call(null,seq__9827_10318__$1);
var G__10321 = c__5673__auto___10319;
var G__10322 = cljs.core.count.call(null,c__5673__auto___10319);
var G__10323 = (0);
seq__9827_10308 = G__10320;
chunk__9828_10309 = G__10321;
count__9829_10310 = G__10322;
i__9830_10311 = G__10323;
continue;
} else {
var component__8808__auto___10324 = cljs.core.first.call(null,seq__9827_10318__$1);
speclj.components.install.call(null,component__8808__auto___10324,description__8807__auto____$2);


var G__10325 = cljs.core.next.call(null,seq__9827_10318__$1);
var G__10326 = null;
var G__10327 = (0);
var G__10328 = (0);
seq__9827_10308 = G__10325;
chunk__9828_10309 = G__10326;
count__9829_10310 = G__10327;
i__9830_10311 = G__10328;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__9825_10306);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8807__auto____$2);
}

return description__8807__auto____$2;
})(),(function (){var description__8807__auto____$2 = speclj.components.new_description.call(null,"display-angle->theta",false,"com.micahmartin.pendulums.ui-spec");
var _STAR_parent_description_STAR__orig_val__9831_10329 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__9832_10330 = description__8807__auto____$2;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__9832_10330);

try{var seq__9833_10331 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"converts 180 degrees back to theta=0",((function (_STAR_parent_description_STAR__orig_val__9831_10329,_STAR_parent_description_STAR__temp_val__9832_10330,description__8807__auto____$2,_STAR_parent_description_STAR__orig_val__9795_10275,_STAR_parent_description_STAR__temp_val__9796_10276,description__8807__auto____$1,_STAR_parent_description_STAR__orig_val__9291_9838,_STAR_parent_description_STAR__temp_val__9292_9839,description__8807__auto___9837){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__8949__auto__ = 0.0;
var actual__8950__auto__ = com.micahmartin.pendulums.ui.display_angle__GT_theta.call(null,(180));
if(cljs.core._EQ_.call(null,expected__8949__auto__,actual__8950__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,(""+"Expected: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = expected__8949__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.platform.endl)+"     got: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = actual__8950__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+" (using =)"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__9831_10329,_STAR_parent_description_STAR__temp_val__9832_10330,description__8807__auto____$2,_STAR_parent_description_STAR__orig_val__9795_10275,_STAR_parent_description_STAR__temp_val__9796_10276,description__8807__auto____$1,_STAR_parent_description_STAR__orig_val__9291_9838,_STAR_parent_description_STAR__temp_val__9292_9839,description__8807__auto___9837))
,false),speclj.components.new_characteristic.call(null,"converts 0 degrees back to theta=\u03C0",((function (_STAR_parent_description_STAR__orig_val__9831_10329,_STAR_parent_description_STAR__temp_val__9832_10330,description__8807__auto____$2,_STAR_parent_description_STAR__orig_val__9795_10275,_STAR_parent_description_STAR__temp_val__9796_10276,description__8807__auto____$1,_STAR_parent_description_STAR__orig_val__9291_9838,_STAR_parent_description_STAR__temp_val__9292_9839,description__8807__auto___9837){
return (function (){
var result = com.micahmartin.pendulums.ui.display_angle__GT_theta.call(null,(0));
speclj.components.inc_assertions_BANG_.call(null);

var value__8937__auto__ = (com.micahmartin.pendulums.math.abs.call(null,(result - com.micahmartin.pendulums.math.PI)) < 0.001);
if(value__8937__auto__){
return null;
} else {
throw cljs.core.ex_info.call(null,(""+"Expected truthy but was: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = value__8937__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+""),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__9831_10329,_STAR_parent_description_STAR__temp_val__9832_10330,description__8807__auto____$2,_STAR_parent_description_STAR__orig_val__9795_10275,_STAR_parent_description_STAR__temp_val__9796_10276,description__8807__auto____$1,_STAR_parent_description_STAR__orig_val__9291_9838,_STAR_parent_description_STAR__temp_val__9292_9839,description__8807__auto___9837))
,false),speclj.components.new_characteristic.call(null,"is inverse of normalize-angle",((function (_STAR_parent_description_STAR__orig_val__9831_10329,_STAR_parent_description_STAR__temp_val__9832_10330,description__8807__auto____$2,_STAR_parent_description_STAR__orig_val__9795_10275,_STAR_parent_description_STAR__temp_val__9796_10276,description__8807__auto____$1,_STAR_parent_description_STAR__orig_val__9291_9838,_STAR_parent_description_STAR__temp_val__9292_9839,description__8807__auto___9837){
return (function (){
var original_theta = 0.5;
var display = com.micahmartin.pendulums.ui.normalize_angle.call(null,original_theta);
var back_to_theta = com.micahmartin.pendulums.ui.display_angle__GT_theta.call(null,display);
speclj.components.inc_assertions_BANG_.call(null);

var value__8937__auto__ = (com.micahmartin.pendulums.math.abs.call(null,(original_theta - back_to_theta)) < 0.001);
if(value__8937__auto__){
return null;
} else {
throw cljs.core.ex_info.call(null,(""+"Expected truthy but was: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5827__auto__ = value__8937__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8917__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8917__auto__);
}
})())+""),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__9831_10329,_STAR_parent_description_STAR__temp_val__9832_10330,description__8807__auto____$2,_STAR_parent_description_STAR__orig_val__9795_10275,_STAR_parent_description_STAR__temp_val__9796_10276,description__8807__auto____$1,_STAR_parent_description_STAR__orig_val__9291_9838,_STAR_parent_description_STAR__temp_val__9292_9839,description__8807__auto___9837))
,false)],null)));
var chunk__9834_10332 = null;
var count__9835_10333 = (0);
var i__9836_10334 = (0);
while(true){
if((i__9836_10334 < count__9835_10333)){
var component__8808__auto___10335 = cljs.core._nth.call(null,chunk__9834_10332,i__9836_10334);
speclj.components.install.call(null,component__8808__auto___10335,description__8807__auto____$2);


var G__10336 = seq__9833_10331;
var G__10337 = chunk__9834_10332;
var G__10338 = count__9835_10333;
var G__10339 = (i__9836_10334 + (1));
seq__9833_10331 = G__10336;
chunk__9834_10332 = G__10337;
count__9835_10333 = G__10338;
i__9836_10334 = G__10339;
continue;
} else {
var temp__5825__auto___10340 = cljs.core.seq.call(null,seq__9833_10331);
if(temp__5825__auto___10340){
var seq__9833_10341__$1 = temp__5825__auto___10340;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9833_10341__$1)){
var c__5673__auto___10342 = cljs.core.chunk_first.call(null,seq__9833_10341__$1);
var G__10343 = cljs.core.chunk_rest.call(null,seq__9833_10341__$1);
var G__10344 = c__5673__auto___10342;
var G__10345 = cljs.core.count.call(null,c__5673__auto___10342);
var G__10346 = (0);
seq__9833_10331 = G__10343;
chunk__9834_10332 = G__10344;
count__9835_10333 = G__10345;
i__9836_10334 = G__10346;
continue;
} else {
var component__8808__auto___10347 = cljs.core.first.call(null,seq__9833_10341__$1);
speclj.components.install.call(null,component__8808__auto___10347,description__8807__auto____$2);


var G__10348 = cljs.core.next.call(null,seq__9833_10341__$1);
var G__10349 = null;
var G__10350 = (0);
var G__10351 = (0);
seq__9833_10331 = G__10348;
chunk__9834_10332 = G__10349;
count__9835_10333 = G__10350;
i__9836_10334 = G__10351;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__9831_10329);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8807__auto____$2);
}

return description__8807__auto____$2;
})()],null)));
var chunk__9798_10278 = null;
var count__9799_10279 = (0);
var i__9800_10280 = (0);
while(true){
if((i__9800_10280 < count__9799_10279)){
var component__8808__auto___10352 = cljs.core._nth.call(null,chunk__9798_10278,i__9800_10280);
speclj.components.install.call(null,component__8808__auto___10352,description__8807__auto____$1);


var G__10353 = seq__9797_10277;
var G__10354 = chunk__9798_10278;
var G__10355 = count__9799_10279;
var G__10356 = (i__9800_10280 + (1));
seq__9797_10277 = G__10353;
chunk__9798_10278 = G__10354;
count__9799_10279 = G__10355;
i__9800_10280 = G__10356;
continue;
} else {
var temp__5825__auto___10357 = cljs.core.seq.call(null,seq__9797_10277);
if(temp__5825__auto___10357){
var seq__9797_10358__$1 = temp__5825__auto___10357;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9797_10358__$1)){
var c__5673__auto___10359 = cljs.core.chunk_first.call(null,seq__9797_10358__$1);
var G__10360 = cljs.core.chunk_rest.call(null,seq__9797_10358__$1);
var G__10361 = c__5673__auto___10359;
var G__10362 = cljs.core.count.call(null,c__5673__auto___10359);
var G__10363 = (0);
seq__9797_10277 = G__10360;
chunk__9798_10278 = G__10361;
count__9799_10279 = G__10362;
i__9800_10280 = G__10363;
continue;
} else {
var component__8808__auto___10364 = cljs.core.first.call(null,seq__9797_10358__$1);
speclj.components.install.call(null,component__8808__auto___10364,description__8807__auto____$1);


var G__10365 = cljs.core.next.call(null,seq__9797_10358__$1);
var G__10366 = null;
var G__10367 = (0);
var G__10368 = (0);
seq__9797_10277 = G__10365;
chunk__9798_10278 = G__10366;
count__9799_10279 = G__10367;
i__9800_10280 = G__10368;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__9795_10275);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8807__auto____$1);
}

return description__8807__auto____$1;
})()],null)));
var chunk__9294_9841 = null;
var count__9295_9842 = (0);
var i__9296_9843 = (0);
while(true){
if((i__9296_9843 < count__9295_9842)){
var component__8808__auto___10369 = cljs.core._nth.call(null,chunk__9294_9841,i__9296_9843);
speclj.components.install.call(null,component__8808__auto___10369,description__8807__auto___9837);


var G__10370 = seq__9293_9840;
var G__10371 = chunk__9294_9841;
var G__10372 = count__9295_9842;
var G__10373 = (i__9296_9843 + (1));
seq__9293_9840 = G__10370;
chunk__9294_9841 = G__10371;
count__9295_9842 = G__10372;
i__9296_9843 = G__10373;
continue;
} else {
var temp__5825__auto___10374 = cljs.core.seq.call(null,seq__9293_9840);
if(temp__5825__auto___10374){
var seq__9293_10375__$1 = temp__5825__auto___10374;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9293_10375__$1)){
var c__5673__auto___10376 = cljs.core.chunk_first.call(null,seq__9293_10375__$1);
var G__10377 = cljs.core.chunk_rest.call(null,seq__9293_10375__$1);
var G__10378 = c__5673__auto___10376;
var G__10379 = cljs.core.count.call(null,c__5673__auto___10376);
var G__10380 = (0);
seq__9293_9840 = G__10377;
chunk__9294_9841 = G__10378;
count__9295_9842 = G__10379;
i__9296_9843 = G__10380;
continue;
} else {
var component__8808__auto___10381 = cljs.core.first.call(null,seq__9293_10375__$1);
speclj.components.install.call(null,component__8808__auto___10381,description__8807__auto___9837);


var G__10382 = cljs.core.next.call(null,seq__9293_10375__$1);
var G__10383 = null;
var G__10384 = (0);
var G__10385 = (0);
seq__9293_9840 = G__10382;
chunk__9294_9841 = G__10383;
count__9295_9842 = G__10384;
i__9296_9843 = G__10385;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__9291_9838);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8807__auto___9837);
}


//# sourceMappingURL=ui_spec.js.map
