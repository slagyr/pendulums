// Compiled by ClojureScript 1.12.134 {:optimizations :none}
goog.provide('reagent.core');
goog.require('cljs.core');
goog.require('react');
goog.require('reagent.impl.template');
goog.require('reagent.impl.component');
goog.require('reagent.impl.util');
goog.require('reagent.impl.batching');
goog.require('reagent.impl.protocols');
goog.require('reagent.ratom');
goog.require('reagent.debug');
reagent.core.global$module$react = goog.global["React"];
reagent.core.is_client = reagent.impl.util.is_client;
/**
 * Create a native React element, by calling React.createElement directly.
 * 
 *   That means the second argument must be a javascript object (or nil), and
 *   that any Reagent hiccup forms must be processed with as-element. For example
 *   like this:
 * 
 *   ```cljs
 *   (r/create-element "div" #js{:className "foo"}
 *  "Hi " (r/as-element [:strong "world!"])
 *   ```
 * 
 *   which is equivalent to
 * 
 *   ```cljs
 *   [:div.foo "Hi" [:strong "world!"]]
 *   ```
 */
reagent.core.create_element = (function reagent$core$create_element(var_args){
var G__8021 = arguments.length;
switch (G__8021) {
case 1:
return reagent.core.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reagent.core.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.core.create_element.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__5901__auto__ = [];
var len__5876__auto___8023 = arguments.length;
var i__5877__auto___8024 = (0);
while(true){
if((i__5877__auto___8024 < len__5876__auto___8023)){
args_arr__5901__auto__.push((arguments[i__5877__auto___8024]));

var G__8025 = (i__5877__auto___8024 + (1));
i__5877__auto___8024 = G__8025;
continue;
} else {
}
break;
}

var argseq__5902__auto__ = ((((3) < args_arr__5901__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5901__auto__.slice((3)),(0),null)):null);
return reagent.core.create_element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5902__auto__);

}
});

(reagent.core.create_element.cljs$core$IFn$_invoke$arity$1 = (function (type){
return reagent.core.create_element.call(null,type,null);
}));

(reagent.core.create_element.cljs$core$IFn$_invoke$arity$2 = (function (type,props){
if((!(cljs.core.map_QMARK_.call(null,props)))){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"Expected a JS object, not "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,props))))+"\n"+"(clojure.core/not (clojure.core/map? props))")));
}

return reagent.core.global$module$react.createElement(type,props);
}));

(reagent.core.create_element.cljs$core$IFn$_invoke$arity$3 = (function (type,props,child){
if((!(cljs.core.map_QMARK_.call(null,props)))){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"Expected a JS object, not "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,props))))+"\n"+"(clojure.core/not (clojure.core/map? props))")));
}

return reagent.core.global$module$react.createElement(type,props,child);
}));

(reagent.core.create_element.cljs$core$IFn$_invoke$arity$variadic = (function (type,props,child,children){
if((!(cljs.core.map_QMARK_.call(null,props)))){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"Expected a JS object, not "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,props))))+"\n"+"(clojure.core/not (clojure.core/map? props))")));
}

return cljs.core.apply.call(null,reagent.core.global$module$react.createElement,type,props,child,children);
}));

/** @this {Function} */
(reagent.core.create_element.cljs$lang$applyTo = (function (seq8017){
var G__8018 = cljs.core.first.call(null,seq8017);
var seq8017__$1 = cljs.core.next.call(null,seq8017);
var G__8019 = cljs.core.first.call(null,seq8017__$1);
var seq8017__$2 = cljs.core.next.call(null,seq8017__$1);
var G__8020 = cljs.core.first.call(null,seq8017__$2);
var seq8017__$3 = cljs.core.next.call(null,seq8017__$2);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8018,G__8019,G__8020,seq8017__$3);
}));

(reagent.core.create_element.cljs$lang$maxFixedArity = (3));

/**
 * Turns a vector of Hiccup syntax into a React element. Returns form
 *   unchanged if it is not a vector.
 */
reagent.core.as_element = (function reagent$core$as_element(var_args){
var G__8027 = arguments.length;
switch (G__8027) {
case 1:
return reagent.core.as_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reagent.core.as_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(reagent.core.as_element.cljs$core$IFn$_invoke$arity$1 = (function (form){
return reagent.impl.protocols.as_element.call(null,reagent.impl.template._STAR_current_default_compiler_STAR_,form);
}));

(reagent.core.as_element.cljs$core$IFn$_invoke$arity$2 = (function (form,compiler){
return reagent.impl.protocols.as_element.call(null,compiler,form);
}));

(reagent.core.as_element.cljs$lang$maxFixedArity = 2);

/**
 * Returns an adapter for a native React class, that may be used
 *   just like a Reagent component function or class in Hiccup forms.
 */
reagent.core.adapt_react_class = (function reagent$core$adapt_react_class(c){
if(cljs.core.truth_(c)){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"Component"+" must not be nil"))+"\n"+"c")));
}

return reagent.impl.template.adapt_react_class.call(null,c);
});
/**
 * Returns an adapter for a Reagent component, that may be used from
 *   React, for example in JSX. A single argument, props, is passed to
 *   the component, converted to a map.
 */
reagent.core.reactify_component = (function reagent$core$reactify_component(var_args){
var G__8030 = arguments.length;
switch (G__8030) {
case 1:
return reagent.core.reactify_component.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reagent.core.reactify_component.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(reagent.core.reactify_component.cljs$core$IFn$_invoke$arity$1 = (function (c){
return reagent.core.reactify_component.call(null,c,reagent.impl.template._STAR_current_default_compiler_STAR_);
}));

(reagent.core.reactify_component.cljs$core$IFn$_invoke$arity$2 = (function (c,compiler){
if(cljs.core.truth_(c)){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"Component"+" must not be nil"))+"\n"+"c")));
}

return reagent.impl.component.reactify_component.call(null,c,compiler);
}));

(reagent.core.reactify_component.cljs$lang$maxFixedArity = 2);

/**
 * Creates JS class based on provided Clojure map, for example:
 * 
 *   ```cljs
 *   {;; Constructor
 * :constructor (fn [this props])
 * :get-initial-state (fn [this])
 * ;; Static methods
 * :get-derived-state-from-props (fn [props state] partial-state)
 * :get-derived-state-from-error (fn [error] partial-state)
 * ;; Methods
 * :get-snapshot-before-update (fn [this old-argv new-argv] snapshot)
 * :should-component-update (fn [this old-argv new-argv])
 * :component-did-mount (fn [this])
 * :component-did-update (fn [this old-argv old-state snapshot])
 * :component-will-unmount (fn [this])
 * :component-did-catch (fn [this error info])
 * :reagent-render (fn [args....])
 * ;; Or alternatively:
 * :render (fn [this])
 * ;; Deprecated methods:
 * :UNSAFE_component-will-receive-props (fn [this new-argv])
 * :UNSAFE_component-will-update (fn [this new-argv new-state])
 * :UNSAFE_component-will-mount (fn [this])}
 *   ```
 * 
 *   Everything is optional, except either :reagent-render or :render.
 * 
 *   Map keys should use `React.Component` method names (https://reactjs.org/docs/react-component.html),
 *   and can be provided in kebab-case or camelCase.
 * 
 *   State can be initialized using constructor, which matches React.Component class,
 *   or using getInitialState which matches old React createClass function and is
 *   now implemented by Reagent for compatibility.
 * 
 *   State can usually be anything, e.g. Cljs object. But if using getDerivedState
 *   methods, the state has to be plain JS object as React implementation uses
 *   Object.assign to merge partial state into the current state.
 * 
 *   React built-in static methods or properties are automatically defined as statics.
 */
reagent.core.create_class = (function reagent$core$create_class(var_args){
var G__8033 = arguments.length;
switch (G__8033) {
case 1:
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(reagent.core.create_class.cljs$core$IFn$_invoke$arity$1 = (function (spec){
return reagent.impl.component.create_class.call(null,spec,reagent.impl.template._STAR_current_default_compiler_STAR_);
}));

(reagent.core.create_class.cljs$core$IFn$_invoke$arity$2 = (function (spec,compiler){
return reagent.impl.component.create_class.call(null,spec,compiler);
}));

(reagent.core.create_class.cljs$lang$maxFixedArity = 2);

/**
 * Returns the current React component (a.k.a `this`) in a component
 *   function.
 */
reagent.core.current_component = (function reagent$core$current_component(){
return reagent.impl.component._STAR_current_component_STAR_;
});
/**
 * Returns an atom containing a components state.
 */
reagent.core.state_atom = (function reagent$core$state_atom(this$){
if(reagent.impl.component.reagent_component_QMARK_.call(null,this$)){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"Expected a reagent component, not "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,this$))))+"\n"+"(comp/reagent-component? this)")));
}

return reagent.impl.component.state_atom.call(null,this$);
});
/**
 * Returns the state of a component, as set with replace-state or set-state.
 *   Equivalent to `(deref (r/state-atom this))`
 */
reagent.core.state = (function reagent$core$state(this$){
if(reagent.impl.component.reagent_component_QMARK_.call(null,this$)){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"Expected a reagent component, not "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,this$))))+"\n"+"(comp/reagent-component? this)")));
}

return cljs.core.deref.call(null,reagent.core.state_atom.call(null,this$));
});
/**
 * Set state of a component.
 *   Equivalent to `(reset! (state-atom this) new-state)`
 */
reagent.core.replace_state = (function reagent$core$replace_state(this$,new_state){
if(reagent.impl.component.reagent_component_QMARK_.call(null,this$)){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"Expected a reagent component, not "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,this$))))+"\n"+"(comp/reagent-component? this)")));
}

if((((new_state == null)) || (cljs.core.map_QMARK_.call(null,new_state)))){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"Expected a valid new state, not "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,new_state))))+"\n"+"(clojure.core/or (clojure.core/nil? new-state) (clojure.core/map? new-state))")));
}

return cljs.core.reset_BANG_.call(null,reagent.core.state_atom.call(null,this$),new_state);
});
/**
 * Merge component state with new-state.
 *   Equivalent to `(swap! (state-atom this) merge new-state)`
 */
reagent.core.set_state = (function reagent$core$set_state(this$,new_state){
if(reagent.impl.component.reagent_component_QMARK_.call(null,this$)){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"Expected a reagent component, not "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,this$))))+"\n"+"(comp/reagent-component? this)")));
}

if((((new_state == null)) || (cljs.core.map_QMARK_.call(null,new_state)))){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"Expected a valid new state, not "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,new_state))))+"\n"+"(clojure.core/or (clojure.core/nil? new-state) (clojure.core/map? new-state))")));
}

return cljs.core.swap_BANG_.call(null,reagent.core.state_atom.call(null,this$),cljs.core.merge,new_state);
});
/**
 * Force a component to re-render immediately.
 * 
 *   If the second argument is true, child components will also be
 *   re-rendered, even if their arguments have not changed.
 */
reagent.core.force_update = (function reagent$core$force_update(this$){
reagent.ratom.flush_BANG_.call(null);

reagent.impl.util.force_update.call(null,this$);

return reagent.impl.batching.flush_after_render.call(null);
});
/**
 * Returns the props passed to a component.
 */
reagent.core.props = (function reagent$core$props(this$){
if(reagent.impl.component.reagent_component_QMARK_.call(null,this$)){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"Expected a reagent component, not "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,this$))))+"\n"+"(comp/reagent-component? this)")));
}

return reagent.impl.component.get_props.call(null,this$);
});
/**
 * Returns the children passed to a component.
 */
reagent.core.children = (function reagent$core$children(this$){
if(reagent.impl.component.reagent_component_QMARK_.call(null,this$)){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"Expected a reagent component, not "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,this$))))+"\n"+"(comp/reagent-component? this)")));
}

return reagent.impl.component.get_children.call(null,this$);
});
/**
 * Returns the entire Hiccup form passed to the component.
 */
reagent.core.argv = (function reagent$core$argv(this$){
if(reagent.impl.component.reagent_component_QMARK_.call(null,this$)){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"Expected a reagent component, not "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,this$))))+"\n"+"(comp/reagent-component? this)")));
}

return reagent.impl.component.get_argv.call(null,this$);
});
/**
 * Function which normalizes and combines class values to a string
 * 
 *   Reagent allows classes to be defined as:
 *   - Strings
 *   - Named objects (Symbols or Keywords)
 *   - Collections of previous types
 */
reagent.core.class_names = (function reagent$core$class_names(var_args){
var G__8039 = arguments.length;
switch (G__8039) {
case 0:
return reagent.core.class_names.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return reagent.core.class_names.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reagent.core.class_names.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5901__auto__ = [];
var len__5876__auto___8041 = arguments.length;
var i__5877__auto___8042 = (0);
while(true){
if((i__5877__auto___8042 < len__5876__auto___8041)){
args_arr__5901__auto__.push((arguments[i__5877__auto___8042]));

var G__8043 = (i__5877__auto___8042 + (1));
i__5877__auto___8042 = G__8043;
continue;
} else {
}
break;
}

var argseq__5902__auto__ = ((((2) < args_arr__5901__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5901__auto__.slice((2)),(0),null)):null);
return reagent.core.class_names.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5902__auto__);

}
});

(reagent.core.class_names.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
}));

(reagent.core.class_names.cljs$core$IFn$_invoke$arity$1 = (function (class$){
return reagent.impl.util.class_names.call(null,class$);
}));

(reagent.core.class_names.cljs$core$IFn$_invoke$arity$2 = (function (class1,class2){
return reagent.impl.util.class_names.call(null,class1,class2);
}));

(reagent.core.class_names.cljs$core$IFn$_invoke$arity$variadic = (function (class1,class2,others){
return cljs.core.apply.call(null,reagent.impl.util.class_names,class1,class2,others);
}));

/** @this {Function} */
(reagent.core.class_names.cljs$lang$applyTo = (function (seq8036){
var G__8037 = cljs.core.first.call(null,seq8036);
var seq8036__$1 = cljs.core.next.call(null,seq8036);
var G__8038 = cljs.core.first.call(null,seq8036__$1);
var seq8036__$2 = cljs.core.next.call(null,seq8036__$1);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8037,G__8038,seq8036__$2);
}));

(reagent.core.class_names.cljs$lang$maxFixedArity = (2));

/**
 * Utility function that merges some maps, handling `:class` and `:style`.
 * 
 *   The :class value is always normalized (using `class-names`) even if no
 *   merging is done.
 */
reagent.core.merge_props = (function reagent$core$merge_props(var_args){
var G__8048 = arguments.length;
switch (G__8048) {
case 0:
return reagent.core.merge_props.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return reagent.core.merge_props.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reagent.core.merge_props.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5901__auto__ = [];
var len__5876__auto___8050 = arguments.length;
var i__5877__auto___8051 = (0);
while(true){
if((i__5877__auto___8051 < len__5876__auto___8050)){
args_arr__5901__auto__.push((arguments[i__5877__auto___8051]));

var G__8052 = (i__5877__auto___8051 + (1));
i__5877__auto___8051 = G__8052;
continue;
} else {
}
break;
}

var argseq__5902__auto__ = ((((2) < args_arr__5901__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5901__auto__.slice((2)),(0),null)):null);
return reagent.core.merge_props.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5902__auto__);

}
});

(reagent.core.merge_props.cljs$core$IFn$_invoke$arity$0 = (function (){
return reagent.impl.util.merge_props.call(null);
}));

(reagent.core.merge_props.cljs$core$IFn$_invoke$arity$1 = (function (defaults){
return reagent.impl.util.merge_props.call(null,defaults);
}));

(reagent.core.merge_props.cljs$core$IFn$_invoke$arity$2 = (function (defaults,props){
return reagent.impl.util.merge_props.call(null,defaults,props);
}));

(reagent.core.merge_props.cljs$core$IFn$_invoke$arity$variadic = (function (defaults,props,others){
return cljs.core.apply.call(null,reagent.impl.util.merge_props,defaults,props,others);
}));

/** @this {Function} */
(reagent.core.merge_props.cljs$lang$applyTo = (function (seq8045){
var G__8046 = cljs.core.first.call(null,seq8045);
var seq8045__$1 = cljs.core.next.call(null,seq8045);
var G__8047 = cljs.core.first.call(null,seq8045__$1);
var seq8045__$2 = cljs.core.next.call(null,seq8045__$1);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8046,G__8047,seq8045__$2);
}));

(reagent.core.merge_props.cljs$lang$maxFixedArity = (2));

/**
 * Render dirty components immediately.
 * 
 *   Note that this may not work in event handlers, since React.js does
 *   batching of updates there.
 */
reagent.core.flush = (function reagent$core$flush(){
return reagent.impl.batching.flush.call(null);
});
/**
 * Like clojure.core/atom, except that it keeps track of derefs.
 *   Reagent components that derefs one of these are automatically
 *   re-rendered.
 */
reagent.core.atom = (function reagent$core$atom(var_args){
var G__8056 = arguments.length;
switch (G__8056) {
case 1:
return reagent.core.atom.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__5901__auto__ = [];
var len__5876__auto___8058 = arguments.length;
var i__5877__auto___8059 = (0);
while(true){
if((i__5877__auto___8059 < len__5876__auto___8058)){
args_arr__5901__auto__.push((arguments[i__5877__auto___8059]));

var G__8060 = (i__5877__auto___8059 + (1));
i__5877__auto___8059 = G__8060;
continue;
} else {
}
break;
}

var argseq__5902__auto__ = ((((1) < args_arr__5901__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5901__auto__.slice((1)),(0),null)):null);
return reagent.core.atom.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5902__auto__);

}
});

(reagent.core.atom.cljs$core$IFn$_invoke$arity$1 = (function (x){
return reagent.ratom.atom.call(null,x);
}));

(reagent.core.atom.cljs$core$IFn$_invoke$arity$variadic = (function (x,rest){
return cljs.core.apply.call(null,reagent.ratom.atom,x,rest);
}));

/** @this {Function} */
(reagent.core.atom.cljs$lang$applyTo = (function (seq8054){
var G__8055 = cljs.core.first.call(null,seq8054);
var seq8054__$1 = cljs.core.next.call(null,seq8054);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8055,seq8054__$1);
}));

(reagent.core.atom.cljs$lang$maxFixedArity = (1));

/**
 * Takes a function and optional arguments, and returns a derefable
 *   containing the output of that function. If the function derefs
 *   Reagent atoms (or track, etc), the value will be updated whenever
 *   the atom changes.
 * 
 *   In other words, `@(track foo bar)` will produce the same result
 *   as `(foo bar)`, but foo will only be called again when the atoms it
 *   depends on changes, and will only trigger updates of components when
 *   its result changes.
 * 
 *   track is lazy, i.e the function is only evaluated on deref.
 */
reagent.core.track = (function reagent$core$track(var_args){
var args__5882__auto__ = [];
var len__5876__auto___8063 = arguments.length;
var i__5877__auto___8064 = (0);
while(true){
if((i__5877__auto___8064 < len__5876__auto___8063)){
args__5882__auto__.push((arguments[i__5877__auto___8064]));

var G__8065 = (i__5877__auto___8064 + (1));
i__5877__auto___8064 = G__8065;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return reagent.core.track.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(reagent.core.track.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

return reagent.ratom.make_track.call(null,f,args);
}));

(reagent.core.track.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(reagent.core.track.cljs$lang$applyTo = (function (seq8061){
var G__8062 = cljs.core.first.call(null,seq8061);
var seq8061__$1 = cljs.core.next.call(null,seq8061);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8062,seq8061__$1);
}));

/**
 * An eager version of track. The function passed is called
 *   immediately, and continues to be called when needed, until stopped
 *   with dispose!.
 */
reagent.core.track_BANG_ = (function reagent$core$track_BANG_(var_args){
var args__5882__auto__ = [];
var len__5876__auto___8068 = arguments.length;
var i__5877__auto___8069 = (0);
while(true){
if((i__5877__auto___8069 < len__5876__auto___8068)){
args__5882__auto__.push((arguments[i__5877__auto___8069]));

var G__8070 = (i__5877__auto___8069 + (1));
i__5877__auto___8069 = G__8070;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return reagent.core.track_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(reagent.core.track_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

return reagent.ratom.make_track_BANG_.call(null,f,args);
}));

(reagent.core.track_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(reagent.core.track_BANG_.cljs$lang$applyTo = (function (seq8066){
var G__8067 = cljs.core.first.call(null,seq8066);
var seq8066__$1 = cljs.core.next.call(null,seq8066);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8067,seq8066__$1);
}));

/**
 * Stop the result of track! from updating.
 */
reagent.core.dispose_BANG_ = (function reagent$core$dispose_BANG_(x){
return reagent.ratom.dispose_BANG_.call(null,x);
});
/**
 * Provide a combination of value and callback, that looks like an atom.
 * 
 *   The first argument can be any value, that will be returned when the
 *   result is deref'ed.
 * 
 *   The second argument should be a function, that is called with the
 *   optional extra arguments provided to wrap, and the new value of the
 *   resulting 'atom'.
 * 
 *   Use for example like this:
 * 
 *   ```cljs
 *   (wrap (:foo @state)
 *      swap! state assoc :foo)
 *   ```
 * 
 *   Probably useful only for passing to child components.
 */
reagent.core.wrap = (function reagent$core$wrap(var_args){
var args__5882__auto__ = [];
var len__5876__auto___8074 = arguments.length;
var i__5877__auto___8075 = (0);
while(true){
if((i__5877__auto___8075 < len__5876__auto___8074)){
args__5882__auto__.push((arguments[i__5877__auto___8075]));

var G__8076 = (i__5877__auto___8075 + (1));
i__5877__auto___8075 = G__8076;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((2) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((2)),(0),null)):null);
return reagent.core.wrap.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5883__auto__);
});

(reagent.core.wrap.cljs$core$IFn$_invoke$arity$variadic = (function (value,reset_fn,args){
if(cljs.core.ifn_QMARK_.call(null,reset_fn)){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"Expected something callable, not "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,reset_fn))))+"\n"+"(clojure.core/ifn? reset-fn)")));
}

return reagent.ratom.make_wrapper.call(null,value,reset_fn,args);
}));

(reagent.core.wrap.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(reagent.core.wrap.cljs$lang$applyTo = (function (seq8071){
var G__8072 = cljs.core.first.call(null,seq8071);
var seq8071__$1 = cljs.core.next.call(null,seq8071);
var G__8073 = cljs.core.first.call(null,seq8071__$1);
var seq8071__$2 = cljs.core.next.call(null,seq8071__$1);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8072,G__8073,seq8071__$2);
}));

/**
 * Provide a cursor into a Reagent atom.
 * 
 *   Behaves like a Reagent atom but focuses updates and derefs to
 *   the specified path within the wrapped Reagent atom. e.g.,
 * 
 *   ```cljs
 *   (let [c (cursor ra [:nested :content])]
 *  ... @c ;; equivalent to (get-in @ra [:nested :content])
 *  ... (reset! c 42) ;; equivalent to (swap! ra assoc-in [:nested :content] 42)
 *  ... (swap! c inc) ;; equivalence to (swap! ra update-in [:nested :content] inc)
 *  )
 *   ```
 * 
 *   The first parameter can also be a function, that should look
 *   something like this:
 * 
 *   ```cljs
 *   (defn set-get
 *  ([k] (get-in @state k))
 *  ([k v] (swap! state assoc-in k v)))
 *   ```
 * 
 *   The function will be called with one argument – the path passed to
 *   cursor – when the cursor is deref'ed, and two arguments (path and
 *   new value) when the cursor is modified.
 * 
 *   Given that set-get function, (and that state is a Reagent atom, or
 *   another cursor) these cursors are equivalent:
 *   `(cursor state [:foo])` and `(cursor set-get [:foo])`.
 * 
 *   Note that a cursor is lazy: its value will not change until it is
 *   used. This may be noticed with add-watch.
 */
reagent.core.cursor = (function reagent$core$cursor(src,path){
return reagent.ratom.cursor.call(null,src,path);
});
/**
 * Swaps the value of a to be `(apply f current-value-of-atom args)`.
 * 
 *   rswap! works like swap!, except that recursive calls to rswap! on
 *   the same atom are allowed – and it always returns nil.
 */
reagent.core.rswap_BANG_ = (function reagent$core$rswap_BANG_(var_args){
var args__5882__auto__ = [];
var len__5876__auto___8083 = arguments.length;
var i__5877__auto___8084 = (0);
while(true){
if((i__5877__auto___8084 < len__5876__auto___8083)){
args__5882__auto__.push((arguments[i__5877__auto___8084]));

var G__8085 = (i__5877__auto___8084 + (1));
i__5877__auto___8084 = G__8085;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((2) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((2)),(0),null)):null);
return reagent.core.rswap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5883__auto__);
});

(reagent.core.rswap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (a,f,args){
if((((!((a == null))))?(((((a.cljs$lang$protocol_mask$partition1$ & (16384))) || ((cljs.core.PROTOCOL_SENTINEL === a.cljs$core$IAtom$))))?true:(((!a.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,a):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,a))){
} else {
throw (new Error("Assert failed: (satisfies? IAtom a)"));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

if(cljs.core.truth_(a.rswapping)){
(function (){var or__5142__auto__ = a.rswapfs;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (a.rswapfs = []);
}
})().push((function (p1__8077_SHARP_){
return cljs.core.apply.call(null,f,p1__8077_SHARP_,args);
}));
} else {
(a.rswapping = true);

try{cljs.core.swap_BANG_.call(null,a,(function (state){
var s = cljs.core.apply.call(null,f,state,args);
while(true){
var temp__5827__auto__ = (function (){var G__8082 = a;
var G__8082__$1 = (((G__8082 == null))?null:G__8082.rswapfs);
if((G__8082__$1 == null)){
return null;
} else {
return G__8082__$1.shift();
}
})();
if((temp__5827__auto__ == null)){
return s;
} else {
var sf = temp__5827__auto__;
var G__8086 = sf.call(null,s);
s = G__8086;
continue;
}
break;
}
}));
}finally {(a.rswapping = false);
}}

return null;
}));

(reagent.core.rswap_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(reagent.core.rswap_BANG_.cljs$lang$applyTo = (function (seq8078){
var G__8079 = cljs.core.first.call(null,seq8078);
var seq8078__$1 = cljs.core.next.call(null,seq8078);
var G__8080 = cljs.core.first.call(null,seq8078__$1);
var seq8078__$2 = cljs.core.next.call(null,seq8078__$1);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8079,G__8080,seq8078__$2);
}));

/**
 * Run f using requestAnimationFrame or equivalent.
 * 
 *   f will be called just before components are rendered.
 */
reagent.core.next_tick = (function reagent$core$next_tick(f){
return reagent.impl.batching.do_before_flush.call(null,f);
});
/**
 * Run f using requestAnimationFrame or equivalent.
 * 
 *   f will be called just after any queued renders in the next animation
 *   frame (and even if no renders actually occur).
 */
reagent.core.after_render = (function reagent$core$after_render(f){
return reagent.impl.batching.do_after_render.call(null,f);
});
/**
 * Works just like clojure.core/partial, but the result can be compared with =
 */
reagent.core.partial = (function reagent$core$partial(var_args){
var args__5882__auto__ = [];
var len__5876__auto___8089 = arguments.length;
var i__5877__auto___8090 = (0);
while(true){
if((i__5877__auto___8090 < len__5876__auto___8089)){
args__5882__auto__.push((arguments[i__5877__auto___8090]));

var G__8091 = (i__5877__auto___8090 + (1));
i__5877__auto___8090 = G__8091;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return reagent.core.partial.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(reagent.core.partial.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return reagent.impl.util.make_partial_fn.call(null,f,args);
}));

(reagent.core.partial.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(reagent.core.partial.cljs$lang$applyTo = (function (seq8087){
var G__8088 = cljs.core.first.call(null,seq8087);
var seq8087__$1 = cljs.core.next.call(null,seq8087);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8088,seq8087__$1);
}));

/**
 * Creates Compiler object with given `opts`,
 *   this can be passed to `render`, `as-element` and other functions to control
 *   how they turn the Reagent-style Hiccup into React components and elements.
 */
reagent.core.create_compiler = (function reagent$core$create_compiler(opts){
return reagent.impl.template.create_compiler.call(null,opts);
});
/**
 * Globally sets the Compiler object used by `render`, `as-element` and other
 *   calls by default, when no `compiler` parameter is provided.
 * 
 *   Use `nil` value to restore the original default compiler.
 */
reagent.core.set_default_compiler_BANG_ = (function reagent$core$set_default_compiler_BANG_(compiler){
return reagent.impl.template.set_default_compiler_BANG_.call(null,(((compiler == null))?reagent.impl.template.class_compiler:compiler));
});
reagent.core.render = (function reagent$core$render(var_args){
var args__5882__auto__ = [];
var len__5876__auto___8093 = arguments.length;
var i__5877__auto___8094 = (0);
while(true){
if((i__5877__auto___8094 < len__5876__auto___8093)){
args__5882__auto__.push((arguments[i__5877__auto___8094]));

var G__8095 = (i__5877__auto___8094 + (1));
i__5877__auto___8094 = G__8095;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((0) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((0)),(0),null)):null);
return reagent.core.render.cljs$core$IFn$_invoke$arity$variadic(argseq__5883__auto__);
});

(reagent.core.render.cljs$core$IFn$_invoke$arity$variadic = (function (_){
throw (new Error("Reagent.core/render function was moved to reagent.dom namespace in Reagent v1.0."));
}));

(reagent.core.render.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(reagent.core.render.cljs$lang$applyTo = (function (seq8092){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8092));
}));

/**
 * Create a tagged value for use with :dangerouslySetInnerHTML. Reagent doesn't
 *   allow other values to be used with the property, to ensure data from external
 *   sources (using EDN or Transit) can't be used to accidentally create arbitrary
 *   HTML.
 * 
 *   See doc/Security.md
 */
reagent.core.unsafe_html = (function reagent$core$unsafe_html(s){
return (new reagent.impl.template.UnsafeHTML(s));
});

//# sourceMappingURL=core.js.map
