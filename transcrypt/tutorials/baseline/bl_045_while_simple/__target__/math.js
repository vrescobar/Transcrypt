// Transcrypt'ed from Python, 2018-04-05 23:13:51
import {__envir__, __nest__, __init__, __proxy__, __get__, __getcm__, __getsm__, py_metatype, object, __class__, __pragma__, __call__, __kwargtrans__, __globals__, __super__, property, __setProperty__, assert, __merge__, dir, setattr, getattr, hasattr, delattr, __in__, __specialattrib__, len, __i__, __k__, __t__, float, int, bool, py_typeof, issubclass, isinstance, callable, repr, chr, ord, max, min, abs, round, format, __jsUsePyNext__, __pyUseJsNext__, py_iter, py_next, __PyIterator__, __JsIterator__, py_reversed, zip, range, any, all, sum, enumerate, copy, deepcopy, list, tuple, set, bytearray, bytes, str, dict, __jsmod__, __mod__, __pow__, __neg__, __matmul__, __mul__, __truediv__, __floordiv__, __add__, __sub__, __lshift__, __rshift__, __or__, __xor__, __and__, __eq__, __ne__, __lt__, __le__, __gt__, __ge__, __imatmul__, __ipow__, __ijsmod__, __imod__, __imul__, __idiv__, __iadd__, __isub__, __ilshift__, __irshift__, __ior__, __ixor__, __iand__, __getitem__, __setitem__, __getslice__, __setslice__, BaseException, Exception, IterableError, StopIteration, ValueError, KeyError, AssertionError, NotImplementedError, IndexError, AttributeError, py_TypeError, Warning, UserWarning, DeprecationWarning, RuntimeWarning, __sort__, sorted, map, filter, divmod, __Terminal__, __terminal__, print, input} from './org.transcrypt.__runtime__.js';
var __name__ = 'math';
export var pi = Math.PI;
export var e = Math.E;
export var exp = Math.exp;
export var expm1 = function (x) {
	return Math.exp (x) - 1;
};
export var log = function (x, base) {
	return (base === undefined ? Math.log (x) : Math.log (x) / Math.log (base));
};
export var log1p = function (x) {
	return Math.log (x + 1);
};
export var log2 = function (x) {
	return Math.log (x) / Math.LN2;
};
export var log10 = function (x) {
	return Math.log (x) / Math.LN10;
};
export var pow = Math.pow;
export var sqrt = Math.sqrt;
export var sin = Math.sin;
export var cos = Math.cos;
export var tan = Math.tan;
export var asin = Math.asin;
export var acos = Math.acos;
export var atan = Math.atan;
export var atan2 = Math.atan2;
export var hypot = Math.hypot;
export var degrees = function (x) {
	return (x * 180) / Math.PI;
};
export var radians = function (x) {
	return (x * Math.PI) / 180;
};
export var sinh = Math.sinh;
export var cosh = Math.cosh;
export var tanh = Math.tanh;
export var asinh = Math.asinh;
export var acosh = Math.acosh;
export var atanh = Math.atanh;
export var floor = Math.floor;
export var ceil = Math.ceil;
export var trunc = Math.trunc;
export var isnan = isNaN;
export var inf = Infinity;
export var nan = NaN;
export var modf = function (n) {
	var sign = (n >= 0 ? 1 : -(1));
	var __left0__ = divmod (abs (n), 1);
	var f = __left0__ [0];
	var mod = __left0__ [1];
	return tuple ([mod * sign, f * sign]);
};

//# sourceMappingURL=math.map