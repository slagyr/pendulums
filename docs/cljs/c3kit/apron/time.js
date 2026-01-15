// Compiled by ClojureScript 1.12.134 {:optimizations :none}
goog.provide('c3kit.apron.time');
goog.require('cljs.core');
goog.require('cljs_time.format');
goog.require('cljs_time.coerce');
goog.require('cljs_time.core');
/**
 * Our atomic unit
 */
c3kit.apron.time.milliseconds = (function c3kit$apron$time$milliseconds(n){
return n;
});
/**
 * Converts seconds to milliseconds
 */
c3kit.apron.time.seconds = (function c3kit$apron$time$seconds(n){
return Math.round((n * (1000)));
});
/**
 * Converts minutes to milliseconds
 */
c3kit.apron.time.minutes = (function c3kit$apron$time$minutes(n){
return Math.round((n * (60000)));
});
/**
 * Converts hours to milliseconds
 */
c3kit.apron.time.hours = (function c3kit$apron$time$hours(n){
return Math.round((n * (3600000)));
});
/**
 * Converts days to milliseconds
 */
c3kit.apron.time.days = (function c3kit$apron$time$days(n){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"days","days",-1394072564),((cljs.core.float_QMARK_.call(null,n))?Math.round(n):n)], null);
});
/**
 * Converts a number into a format that the Calendar object understands to be an amount of months
 */
c3kit.apron.time.months = (function c3kit$apron$time$months(n){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"months","months",-45571637),((cljs.core.float_QMARK_.call(null,n))?Math.round(n):n)], null);
});
/**
 * Converts a number into a format that the Calendar object understands to be an amount of years
 */
c3kit.apron.time.years = (function c3kit$apron$time$years(n){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"years","years",-1298579689),((cljs.core.float_QMARK_.call(null,n))?Math.round(n):n)], null);
});
/**
 * Converts milliseconds to seconds
 */
c3kit.apron.time.millis__GT_seconds = (function c3kit$apron$time$millis__GT_seconds(millis){
return cljs.core.long$.call(null,(millis / (1000)));
});
/**
 * Returns a java.util.Date or js/Date object that represents the current date and time in UTC
 */
c3kit.apron.time.now = (function c3kit$apron$time$now(){
return (new Date());
});
/**
 * The offset (milliseconds) between the local timezone and UTC. (AZ -> -7hrs)
 */
c3kit.apron.time.utc_offset = (function c3kit$apron$time$utc_offset(var_args){
var G__7183 = arguments.length;
switch (G__7183) {
case 0:
return c3kit.apron.time.utc_offset.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return c3kit.apron.time.utc_offset.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(c3kit.apron.time.utc_offset.cljs$core$IFn$_invoke$arity$0 = (function (){
return c3kit.apron.time.utc_offset.call(null,c3kit.apron.time.now.call(null));
}));

(c3kit.apron.time.utc_offset.cljs$core$IFn$_invoke$arity$1 = (function (date){
return ((-1) * c3kit.apron.time.minutes.call(null,date.getTimezoneOffset()));
}));

(c3kit.apron.time.utc_offset.cljs$lang$maxFixedArity = 1);

/**
 * Create Date relative to epoch, adjusted for timezone offset
 *   (from-epoch 0)
 */
c3kit.apron.time.from_epoch = (function c3kit$apron$time$from_epoch(millis_since_epoch){
return (new Date(millis_since_epoch));
});
c3kit.apron.time.epoch = c3kit.apron.time.from_epoch.call(null,(0));
c3kit.apron.time.instant_QMARK_ = (function c3kit$apron$time$instant_QMARK_(thing){
return (thing instanceof Date);
});
c3kit.apron.time.millis_since_epoch = (function c3kit$apron$time$millis_since_epoch(date){
return date.getTime();
});
c3kit.apron.time.seconds_since_epoch = cljs.core.comp.call(null,c3kit.apron.time.millis__GT_seconds,c3kit.apron.time.millis_since_epoch);
/**
 * Milliseconds that separate the two times.  Negative if b is after a.
 */
c3kit.apron.time.millis_between = (function c3kit$apron$time$millis_between(a,b){
return (c3kit.apron.time.millis_since_epoch.call(null,a) - c3kit.apron.time.millis_since_epoch.call(null,b));
});
/**
 * Returns a new date representing time in UTC timezone, assuming given date is in local timezone.
 */
c3kit.apron.time.__GT_utc = (function c3kit$apron$time$__GT_utc(date){
return c3kit.apron.time.from_epoch.call(null,(c3kit.apron.time.millis_since_epoch.call(null,date) - c3kit.apron.time.utc_offset.call(null,date)));
});
/**
 * Returns a new date representing time in the timezone, assuming given date is in UTC timezone.
 */
c3kit.apron.time.__GT_local = (function c3kit$apron$time$__GT_local(date){
return c3kit.apron.time.from_epoch.call(null,(c3kit.apron.time.millis_since_epoch.call(null,date) + c3kit.apron.time.utc_offset.call(null,date)));
});
/**
 * Create a Date assuming parameters are local timezone.
 *   e.g. in AZ: (local 2020 1 1 0 0 0) -> 2020-01-01T07:00:00.000-00:00
 */
c3kit.apron.time.local = (function c3kit$apron$time$local(var_args){
var G__7186 = arguments.length;
switch (G__7186) {
case 3:
return c3kit.apron.time.local.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 5:
return c3kit.apron.time.local.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return c3kit.apron.time.local.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(c3kit.apron.time.local.cljs$core$IFn$_invoke$arity$3 = (function (year,month,day){
return c3kit.apron.time.local.call(null,year,month,day,(0),(0),(0));
}));

(c3kit.apron.time.local.cljs$core$IFn$_invoke$arity$5 = (function (year,month,day,hour,minute){
return c3kit.apron.time.local.call(null,year,month,day,hour,minute,(0));
}));

(c3kit.apron.time.local.cljs$core$IFn$_invoke$arity$6 = (function (year,month,day,hour,minute,second){
return (new Date(year,(month - (1)),day,hour,minute,second));
}));

(c3kit.apron.time.local.cljs$lang$maxFixedArity = 6);

/**
 * Create a Date assuming parameters are UTC timezone.
 *   e.g. (utc 2020 1 1 0 0 0) -> 2020-01-01T00:00:00.000-00:00
 */
c3kit.apron.time.utc = (function c3kit$apron$time$utc(var_args){
var G__7189 = arguments.length;
switch (G__7189) {
case 3:
return c3kit.apron.time.utc.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 5:
return c3kit.apron.time.utc.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return c3kit.apron.time.utc.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(c3kit.apron.time.utc.cljs$core$IFn$_invoke$arity$3 = (function (year,month,day){
return c3kit.apron.time.utc.call(null,year,month,day,(0),(0),(0));
}));

(c3kit.apron.time.utc.cljs$core$IFn$_invoke$arity$5 = (function (year,month,day,hour,minute){
return c3kit.apron.time.utc.call(null,year,month,day,hour,minute,(0));
}));

(c3kit.apron.time.utc.cljs$core$IFn$_invoke$arity$6 = (function (year,month,day,hour,minute,second){
return c3kit.apron.time.__GT_local.call(null,c3kit.apron.time.local.call(null,year,month,day,hour,minute,second));
}));

(c3kit.apron.time.utc.cljs$lang$maxFixedArity = 6);

/**
 * Expects two Dates as arguments. The function returns true if the
 *   first date comes before the second date and returns false otherwise.
 */
c3kit.apron.time.before_QMARK_ = (function c3kit$apron$time$before_QMARK_(first,second){
return (first.getTime() < second.getTime());
});
/**
 * Expects two Date as arguments. The function returns true if the
 *   first date comes after the second date and returns false otherwise.
 */
c3kit.apron.time.after_QMARK_ = (function c3kit$apron$time$after_QMARK_(first,second){
return (first.getTime() > second.getTime());
});
/**
 * Expects the three Dates as arguments. The first date is the date
 *   being evaluated; the second date is the start date; the last date is the
 *   end date. The function returns true if the first date is between the start
 *   and end dates.
 */
c3kit.apron.time.between_QMARK_ = (function c3kit$apron$time$between_QMARK_(date,start,end){
return ((c3kit.apron.time.after_QMARK_.call(null,date,start)) && (c3kit.apron.time.before_QMARK_.call(null,date,end)));
});
c3kit.apron.time.leap_year_QMARK_ = (function c3kit$apron$time$leap_year_QMARK_(year){
return ((((cljs.core._EQ_.call(null,(0),cljs.core.mod.call(null,year,(4)))) && ((!(cljs.core._EQ_.call(null,(0),cljs.core.mod.call(null,year,(100)))))))) || (cljs.core._EQ_.call(null,(0),cljs.core.mod.call(null,year,(400)))));
});
c3kit.apron.time.days_in_month = (function c3kit$apron$time$days_in_month(year,month){
var G__7191 = month;
switch (G__7191) {
case (0):
return (31);

break;
case (1):
if(c3kit.apron.time.leap_year_QMARK_.call(null,year)){
return (29);
} else {
return (28);
}

break;
case (2):
return (31);

break;
case (3):
return (30);

break;
case (4):
return (31);

break;
case (5):
return (30);

break;
case (6):
return (31);

break;
case (7):
return (31);

break;
case (8):
return (30);

break;
case (9):
return (31);

break;
case (10):
return (30);

break;
case (11):
return (31);

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__7191))));

}
});
/**
 * Returns the Date's year (local timezone).
 */
c3kit.apron.time.year = (function c3kit$apron$time$year(datetime){
return datetime.getFullYear();
});
/**
 * Returns the Date's month (local timezone).
 */
c3kit.apron.time.month = (function c3kit$apron$time$month(datetime){
return (datetime.getMonth() + (1));
});
/**
 * Returns the Date's day (local timezone).
 */
c3kit.apron.time.day = (function c3kit$apron$time$day(datetime){
return datetime.getDate();
});
/**
 * Returns the Date's hour (24-hour clock) (local timezone).
 */
c3kit.apron.time.hour = (function c3kit$apron$time$hour(datetime){
return datetime.getHours();
});
/**
 * Returns the Date's minute.
 */
c3kit.apron.time.minute = (function c3kit$apron$time$minute(datetime){
return datetime.getMinutes();
});
/**
 * Returns the Date's second.
 */
c3kit.apron.time.sec = (function c3kit$apron$time$sec(datetime){
return datetime.getSeconds();
});
if((typeof c3kit !== 'undefined') && (typeof c3kit.apron !== 'undefined') && (typeof c3kit.apron.time !== 'undefined') && (typeof c3kit.apron.time._js_mod_time_by_units !== 'undefined')){
} else {
c3kit.apron.time._js_mod_time_by_units = (function (){var method_table__5747__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5748__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5749__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5750__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5751__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"c3kit.apron.time","-js-mod-time-by-units"),(function (time,unit,n,direction){
return unit;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5751__auto__,method_table__5747__auto__,prefer_table__5748__auto__,method_cache__5749__auto__,cached_hierarchy__5750__auto__));
})();
}
cljs.core._add_method.call(null,c3kit.apron.time._js_mod_time_by_units,new cljs.core.Keyword(null,"days","days",-1394072564),(function (time,unit,n,direction){
return time.setDate(direction.call(null,time.getDate(),n));
}));
cljs.core._add_method.call(null,c3kit.apron.time._js_mod_time_by_units,new cljs.core.Keyword(null,"months","months",-45571637),(function (time,unit,n,direction){
var date = time.getUTCDate();
time.setUTCDate((1));

time.setUTCMonth(direction.call(null,time.getUTCMonth(),n));

var month = time.getUTCMonth();
var max_date = c3kit.apron.time.days_in_month.call(null,time.getUTCFullYear(),month);
return time.setUTCDate(cljs.core.min.call(null,date,max_date));
}));
cljs.core._add_method.call(null,c3kit.apron.time._js_mod_time_by_units,new cljs.core.Keyword(null,"years","years",-1298579689),(function (time,unit,n,direction){
return time.setFullYear(direction.call(null,time.getFullYear(),n));
}));
/**
 * Modifies the value of a Date object. Expects the first argument to be
 *   a Date, the second argument to be a vector representing the amount of time to be changed,
 *   and the last argument to be either a + or - (indicating which direction to modify time).
 */
c3kit.apron.time.mod_time_by_units = (function c3kit$apron$time$mod_time_by_units(time,p__7193,direction){
var vec__7194 = p__7193;
var unit = cljs.core.nth.call(null,vec__7194,(0),null);
var n = cljs.core.nth.call(null,vec__7194,(1),null);
var new_date = (new Date(time.getTime()));
c3kit.apron.time._js_mod_time_by_units.call(null,new_date,unit,n,direction);

return new_date;
});
/**
 * Modifies the value of a Date. Expects the first argument to be
 *   a Date object, the second argument to be an amount of milliseconds, and
 *   the last argument to be either a + or - (indicating which direction to
 *   modify time).
 */
c3kit.apron.time.mod_time = (function c3kit$apron$time$mod_time(time,bit,direction){
if(typeof bit === 'number'){
return (new Date(direction.call(null,time.getTime(),cljs.core.long$.call(null,bit))));
} else {
if(cljs.core.vector_QMARK_.call(null,bit)){
return c3kit.apron.time.mod_time_by_units.call(null,time,bit,direction);
} else {
return null;
}
}
});
/**
 * Rewinds the time on a Date object. Expects a Date object as the first
 *   argument and a number of milliseconds to rewind time by.
 */
c3kit.apron.time.before = (function c3kit$apron$time$before(var_args){
var args__5882__auto__ = [];
var len__5876__auto___7201 = arguments.length;
var i__5877__auto___7202 = (0);
while(true){
if((i__5877__auto___7202 < len__5876__auto___7201)){
args__5882__auto__.push((arguments[i__5877__auto___7202]));

var G__7203 = (i__5877__auto___7202 + (1));
i__5877__auto___7202 = G__7203;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return c3kit.apron.time.before.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(c3kit.apron.time.before.cljs$core$IFn$_invoke$arity$variadic = (function (time,bits){
return cljs.core.reduce.call(null,(function (p1__7197_SHARP_,p2__7198_SHARP_){
return c3kit.apron.time.mod_time.call(null,p1__7197_SHARP_,p2__7198_SHARP_,cljs.core._);
}),time,bits);
}));

(c3kit.apron.time.before.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(c3kit.apron.time.before.cljs$lang$applyTo = (function (seq7199){
var G__7200 = cljs.core.first.call(null,seq7199);
var seq7199__$1 = cljs.core.next.call(null,seq7199);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7200,seq7199__$1);
}));

/**
 * Fast-forwards the time on a Date object. Expects a Date object as the first
 *   argument and a number of milliseconds to fast-forward time by.
 */
c3kit.apron.time.after = (function c3kit$apron$time$after(var_args){
var args__5882__auto__ = [];
var len__5876__auto___7208 = arguments.length;
var i__5877__auto___7209 = (0);
while(true){
if((i__5877__auto___7209 < len__5876__auto___7208)){
args__5882__auto__.push((arguments[i__5877__auto___7209]));

var G__7210 = (i__5877__auto___7209 + (1));
i__5877__auto___7209 = G__7210;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return c3kit.apron.time.after.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(c3kit.apron.time.after.cljs$core$IFn$_invoke$arity$variadic = (function (time,bits){
return cljs.core.reduce.call(null,(function (p1__7204_SHARP_,p2__7205_SHARP_){
return c3kit.apron.time.mod_time.call(null,p1__7204_SHARP_,p2__7205_SHARP_,cljs.core._PLUS_);
}),time,bits);
}));

(c3kit.apron.time.after.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(c3kit.apron.time.after.cljs$lang$applyTo = (function (seq7206){
var G__7207 = cljs.core.first.call(null,seq7206);
var seq7206__$1 = cljs.core.next.call(null,seq7206);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7207,seq7206__$1);
}));

c3kit.apron.time.earlier_QMARK_ = c3kit.apron.time.before_QMARK_;
c3kit.apron.time.later_QMARK_ = c3kit.apron.time.after_QMARK_;
c3kit.apron.time.earlier = c3kit.apron.time.before;
c3kit.apron.time.later = c3kit.apron.time.after;
/**
 * Returns a Date some time (n) before now.
 */
c3kit.apron.time.ago = (function c3kit$apron$time$ago(n){
return c3kit.apron.time.before.call(null,c3kit.apron.time.now.call(null),n);
});
/**
 * Returns a Date some time (n) after now.
 */
c3kit.apron.time.from_now = (function c3kit$apron$time$from_now(n){
return c3kit.apron.time.after.call(null,c3kit.apron.time.now.call(null),n);
});
c3kit.apron.time.formatter = (function c3kit$apron$time$formatter(format){
return cljs_time.format.formatter.call(null,format);
});
c3kit.apron.time.date_formats = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ymd","ymd",1920748739),new cljs.core.Keyword(null,"short","short",1928760516),new cljs.core.Keyword(null,"long-no-tz","long-no-tz",-647737209),new cljs.core.Keyword(null,"rfc822","rfc822",-404628697),new cljs.core.Keyword(null,"iso8601","iso8601",609352650),new cljs.core.Keyword(null,"friendly","friendly",281770577),new cljs.core.Keyword(null,"rfc1123","rfc1123",118031634),new cljs.core.Keyword(null,"ref3339","ref3339",731460914),new cljs.core.Keyword(null,"web-local","web-local",572772978),new cljs.core.Keyword(null,"webform","webform",-964048939),new cljs.core.Keyword(null,"http","http",382524695),new cljs.core.Keyword(null,"dense","dense",-1352835783)],[c3kit.apron.time.formatter.call(null,"yyyyMMdd"),c3kit.apron.time.formatter.call(null,"MMM d, yyyy"),c3kit.apron.time.formatter.call(null,"EEE, dd MMM yyyy HH:mm:ss"),c3kit.apron.time.formatter.call(null,"EEE, dd MMM yyyy HH:mm:ss Z"),c3kit.apron.time.formatter.call(null,"yyyy-MM-dd HH:mm:ssZ"),c3kit.apron.time.formatter.call(null,"EEE - MMM d, yyyy"),c3kit.apron.time.formatter.call(null,"EEE, dd MMM yyyy HH:mm:ss ZZZ"),c3kit.apron.time.formatter.call(null,"yyyy-MM-dd'T'HH:mm:ssZZ"),c3kit.apron.time.formatter.call(null,"yyyy-MM-dd'T'HH:mm"),c3kit.apron.time.formatter.call(null,"yyyy-MM-dd"),c3kit.apron.time.formatter.call(null,"EEE, dd MMM yyyy HH:mm:ss ZZZ"),c3kit.apron.time.formatter.call(null,"yyyyMMddHHmmss")]);
c3kit.apron.time.__GT_formatter = (function c3kit$apron$time$__GT_formatter(format){
if((format instanceof cljs.core.Keyword)){
return format.cljs$core$IFn$_invoke$arity$1(c3kit.apron.time.date_formats);
} else {
if(typeof format === 'string'){
return c3kit.apron.time.formatter.call(null,format);
} else {
if((format instanceof cljs_time.format.Formatter)){
return format;
} else {
throw cljs.core.ex_info.call(null,(""+"Unhandled date format: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(format)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"format","format",-1306924766),format], null));

}
}
}
});
/**
 * Parses text into a Java Date object. Expects a keyword, string, or SimpleDateFormat
 *   object as the first object and a string representing the date as the second argument.
 *   The date is assumed to be in UTC.
 */
c3kit.apron.time.parse = (function c3kit$apron$time$parse(format,value){
var formatter = c3kit.apron.time.__GT_formatter.call(null,format);
var goog_dt = cljs_time.format.parse.call(null,formatter,value);
return cljs_time.coerce.to_date.call(null,goog_dt);
});
/**
 * Returns a string that is populated with a formatted date and time. Expects the
 *   first argument to be the requested format and the second argument to be the date
 *   to be formatted.
 *   The following are options for the first argument:
 *   1. Keyword - :http, :rfc1123, :iso8601, :dense
 *   2. String - must be a valid argument to the SimpleDateFormat Java Object
 *   3. SimpleDateFormat - Java Object
 */
c3kit.apron.time.unparse = (function c3kit$apron$time$unparse(format,value){
if(cljs.core.truth_(value)){
var formatter = c3kit.apron.time.__GT_formatter.call(null,format);
var goog_dt = cljs_time.coerce.from_date.call(null,value);
return cljs_time.format.unparse.call(null,formatter,goog_dt);
} else {
return null;
}
});
c3kit.apron.time.bounds = (function c3kit$apron$time$bounds(start,end){
return (new cljs.core.List(null,start,(new cljs.core.List(null,end,null,(1),null)),(2),null));
});
c3kit.apron.time.bounds_QMARK_ = (function c3kit$apron$time$bounds_QMARK_(thing){
return ((cljs.core.seq_QMARK_.call(null,thing)) && (((cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,thing))) && (((c3kit.apron.time.instant_QMARK_.call(null,cljs.core.first.call(null,thing))) && (c3kit.apron.time.instant_QMARK_.call(null,cljs.core.first.call(null,cljs.core.rest.call(null,thing)))))))));
});
c3kit.apron.time.start_of = (function c3kit$apron$time$start_of(bounds){
return cljs.core.first.call(null,bounds);
});
c3kit.apron.time.end_of = (function c3kit$apron$time$end_of(bounds){
return cljs.core.first.call(null,cljs.core.rest.call(null,bounds));
});
c3kit.apron.time.during_QMARK_ = (function c3kit$apron$time$during_QMARK_(bounds,instant){
return ((c3kit.apron.time.after_QMARK_.call(null,instant,c3kit.apron.time.start_of.call(null,bounds))) && (c3kit.apron.time.before_QMARK_.call(null,instant,c3kit.apron.time.end_of.call(null,bounds))));
});

//# sourceMappingURL=time.js.map
