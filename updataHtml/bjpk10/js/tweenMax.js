var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window; (_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
  "use strict";
  _gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"],
    function (t, e, i) {
      var s = function (t) {
        var e, i = [],
          s = t.length;
        for (e = 0; e !== s; i.push(t[e++]));
        return i
      },
        r = function (t, e, i) {
          var s, r, n = t.cycle;
          for (s in n) r = n[s],
            t[s] = "function" == typeof r ? r(i, e[i]) : r[i % r.length];
          delete t.cycle
        },
        n = function (t, e, s) {
          i.call(this, t, e, s),
            this._cycle = 0,
            this._yoyo = !0 === this.vars.yoyo,
            this._repeat = this.vars.repeat || 0,
            this._repeatDelay = this.vars.repeatDelay || 0,
            this._dirty = !0,
            this.render = n.prototype.render
        },
        a = 1e-10,
        o = i._internals,
        l = o.isSelector,
        h = o.isArray,
        _ = n.prototype = i.to({},
          .1, {}),
        u = [];
      n.version = "1.19.0",
        _.constructor = n,
        _.kill()._gc = !1,
        n.killTweensOf = n.killDelayedCallsTo = i.killTweensOf,
        n.getTweensOf = i.getTweensOf,
        n.lagSmoothing = i.lagSmoothing,
        n.ticker = i.ticker,
        n.render = i.render,
        _.invalidate = function () {
          return this._yoyo = !0 === this.vars.yoyo,
            this._repeat = this.vars.repeat || 0,
            this._repeatDelay = this.vars.repeatDelay || 0,
            this._uncache(!0),
            i.prototype.invalidate.call(this)
        },
        _.updateTo = function (t, e) {
          var s, r = this.ratio,
            n = this.vars.immediateRender || t.immediateRender;
          e && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
          for (s in t) this.vars[s] = t[s];
          if (this._initted || n) if (e) this._initted = !1,
            n && this.render(0, !0, !0);
          else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && i._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
            var a = this._totalTime;
            this.render(0, !0, !1),
              this._initted = !1,
              this.render(a, !0, !1)
          } else if (this._initted = !1, this._init(), this._time > 0 || n) for (var o, l = 1 / (1 - r), h = this._firstPT; h;) o = h.s + h.c,
            h.c *= l,
            h.s = o - h.c,
            h = h._next;
          return this
        },
        _.render = function (t, e, i) {
          this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
          var s, r, n, l, h, _, u, f, c = this._dirty ? this.totalDuration() : this._totalDuration,
            p = this._time,
            d = this._totalTime,
            m = this._cycle,
            g = this._duration,
            v = this._rawPrevTime;
          if (t >= c - 1e-7 ? (this._totalTime = c, this._cycle = this._repeat, this._yoyo && 0 != (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = g, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (s = !0, r = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === g && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 > v || 0 >= t && t >= -1e-7 || v === a && "isPause" !== this.data) && v !== t && (i = !0, v > a && (r = "onReverseComplete")), this._rawPrevTime = f = !e || t || v === t ? t : a)) : 1e-7 > t ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== d || 0 === g && v > 0) && (r = "onReverseComplete", s = this._reversed), 0 > t && (this._active = !1, 0 === g && (this._initted || !this.vars.lazy || i) && (v >= 0 && (i = !0), this._rawPrevTime = f = !e || t || v === t ? t : a)), this._initted || (i = !0)) : (this._totalTime = this._time = t, 0 !== this._repeat && (l = g + this._repeatDelay, this._cycle = this._totalTime / l >> 0, 0 !== this._cycle && this._cycle === this._totalTime / l && t >= d && this._cycle-- , this._time = this._totalTime - this._cycle * l, this._yoyo && 0 != (1 & this._cycle) && (this._time = g - this._time), this._time > g ? this._time = g : this._time < 0 && (this._time = 0)), this._easeType ? (h = this._time / g, _ = this._easeType, u = this._easePower, (1 === _ || 3 === _ && h >= .5) && (h = 1 - h), 3 === _ && (h *= 2), 1 === u ? h *= h : 2 === u ? h *= h * h : 3 === u ? h *= h * h * h : 4 === u && (h *= h * h * h * h), 1 === _ ? this.ratio = 1 - h : 2 === _ ? this.ratio = h : this._time / g < .5 ? this.ratio = h / 2 : this.ratio = 1 - h / 2) : this.ratio = this._ease.getRatio(this._time / g)), p !== this._time || i || m !== this._cycle) {
            if (!this._initted) {
              if (this._init(), !this._initted || this._gc) return;
              if (!i && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = p,
                this._totalTime = d,
                this._rawPrevTime = v,
                this._cycle = m,
                o.lazyTweens.push(this),
                void (this._lazy = [t, e]);
              this._time && !s ? this.ratio = this._ease.getRatio(this._time / g) : s && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
            }
            for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== p && t >= 0 && (this._active = !0), 0 === d && (2 === this._initted && t > 0 && this._init(), this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._totalTime || 0 === g) && (e || this._callback("onStart"))), n = this._firstPT; n;) n.f ? n.t[n.p](n.c * this.ratio + n.s) : n.t[n.p] = n.c * this.ratio + n.s,
              n = n._next;
            this._onUpdate && (0 > t && this._startAt && this._startTime && this._startAt.render(t, e, i), e || (this._totalTime !== d || r) && this._callback("onUpdate")),
              this._cycle !== m && (e || this._gc || this.vars.onRepeat && this._callback("onRepeat")),
              r && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, e, i), s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this._callback(r), 0 === g && this._rawPrevTime === a && f !== a && (this._rawPrevTime = 0))
          } else d !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate"))
        },
        n.to = function (t, e, i) {
          return new n(t, e, i)
        },
        n.from = function (t, e, i) {
          return i.runBackwards = !0,
            i.immediateRender = 0 != i.immediateRender,
            new n(t, e, i)
        },
        n.fromTo = function (t, e, i, s) {
          return s.startAt = i,
            s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender,
            new n(t, e, s)
        },
        n.staggerTo = n.allTo = function (t, e, a, o, _, f, c) {
          o = o || 0;
          var p, d, m, g, v = 0,
            y = [],
            T = a.cycle,
            x = a.startAt && a.startAt.cycle;
          for (h(t) || ("string" == typeof t && (t = i.selector(t) || t), l(t) && (t = s(t))), t = t || [], 0 > o && ((t = s(t)).reverse(), o *= -1), p = t.length - 1, m = 0; p >= m; m++) {
            d = {};
            for (g in a) d[g] = a[g];
            if (T && (r(d, t, m), null != d.duration && (e = d.duration, delete d.duration)), x) {
              x = d.startAt = {};
              for (g in a.startAt) x[g] = a.startAt[g];
              r(d.startAt, t, m)
            }
            d.delay = v + (d.delay || 0),
              m === p && _ && (d.onComplete = function () {
                a.onComplete && a.onComplete.apply(a.onCompleteScope || this, arguments),
                  _.apply(c || a.callbackScope || this, f || u)
              }),
              y[m] = new n(t[m], e, d),
              v += o
          }
          return y
        },
        n.staggerFrom = n.allFrom = function (t, e, i, s, r, a, o) {
          return i.runBackwards = !0,
            i.immediateRender = 0 != i.immediateRender,
            n.staggerTo(t, e, i, s, r, a, o)
        },
        n.staggerFromTo = n.allFromTo = function (t, e, i, s, r, a, o, l) {
          return s.startAt = i,
            s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender,
            n.staggerTo(t, e, s, r, a, o, l)
        },
        n.delayedCall = function (t, e, i, s, r) {
          return new n(e, 0, {
            delay: t,
            onComplete: e,
            onCompleteParams: i,
            callbackScope: s,
            onReverseComplete: e,
            onReverseCompleteParams: i,
            immediateRender: !1,
            useFrames: r,
            overwrite: 0
          })
        },
        n.set = function (t, e) {
          return new n(t, 0, e)
        },
        n.isTweening = function (t) {
          return i.getTweensOf(t, !0).length > 0
        };
      var f = function (t, e) {
        for (var s = [], r = 0, n = t._first; n;) n instanceof i ? s[r++] = n : (e && (s[r++] = n), s = s.concat(f(n, e)), r = s.length),
          n = n._next;
        return s
      },
        c = n.getAllTweens = function (e) {
          return f(t._rootTimeline, e).concat(f(t._rootFramesTimeline, e))
        };
      n.killAll = function (t, i, s, r) {
        null == i && (i = !0),
          null == s && (s = !0);
        var n, a, o, l = c(0 != r),
          h = l.length,
          _ = i && s && r;
        for (o = 0; h > o; o++) a = l[o],
          (_ || a instanceof e || (n = a.target === a.vars.onComplete) && s || i && !n) && (t ? a.totalTime(a._reversed ? 0 : a.totalDuration()) : a._enabled(!1, !1))
      },
        n.killChildTweensOf = function (t, e) {
          if (null != t) {
            var r, a, _, u, f, c = o.tweenLookup;
            if ("string" == typeof t && (t = i.selector(t) || t), l(t) && (t = s(t)), h(t)) for (u = t.length; --u > -1;) n.killChildTweensOf(t[u], e);
            else {
              r = [];
              for (_ in c) for (a = c[_].target.parentNode; a;) a === t && (r = r.concat(c[_].tweens)),
                a = a.parentNode;
              for (f = r.length, u = 0; f > u; u++) e && r[u].totalTime(r[u].totalDuration()),
                r[u]._enabled(!1, !1)
            }
          }
        };
      var p = function (t, i, s, r) {
        i = !1 !== i,
          s = !1 !== s;
        for (var n, a, o = c(r = !1 !== r), l = i && s && r, h = o.length; --h > -1;) a = o[h],
          (l || a instanceof e || (n = a.target === a.vars.onComplete) && s || i && !n) && a.paused(t)
      };
      return n.pauseAll = function (t, e, i) {
        p(!0, t, e, i)
      },
        n.resumeAll = function (t, e, i) {
          p(!1, t, e, i)
        },
        n.globalTimeScale = function (e) {
          var s = t._rootTimeline,
            r = i.ticker.time;
          return arguments.length ? (e = e || a, s._startTime = r - (r - s._startTime) * s._timeScale / e, s = t._rootFramesTimeline, r = i.ticker.frame, s._startTime = r - (r - s._startTime) * s._timeScale / e, s._timeScale = t._rootTimeline._timeScale = e, e) : s._timeScale
        },
        _.progress = function (t, e) {
          return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration()
        },
        _.totalProgress = function (t, e) {
          return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration()
        },
        _.time = function (t, e) {
          return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 != (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
        },
        _.duration = function (e) {
          return arguments.length ? t.prototype.duration.call(this, e) : this._duration
        },
        _.totalDuration = function (t) {
          return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
        },
        _.repeat = function (t) {
          return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
        },
        _.repeatDelay = function (t) {
          return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
        },
        _.yoyo = function (t) {
          return arguments.length ? (this._yoyo = t, this) : this._yoyo
        },
        n
    },
    !0),
    _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"],
      function (t, e, i) {
        var s = function (t) {
          e.call(this, t),
            this._labels = {},
            this.autoRemoveChildren = !0 === this.vars.autoRemoveChildren,
            this.smoothChildTiming = !0 === this.vars.smoothChildTiming,
            this._sortChildren = !0,
            this._onUpdate = this.vars.onUpdate;
          var i, s, r = this.vars;
          for (s in r) i = r[s],
            l(i) && -1 !== i.join("").indexOf("{self}") && (r[s] = this._swapSelfInParams(i));
          l(r.tweens) && this.add(r.tweens, 0, r.align, r.stagger)
        },
          r = 1e-10,
          n = i._internals,
          a = s._internals = {},
          o = n.isSelector,
          l = n.isArray,
          h = n.lazyTweens,
          _ = n.lazyRender,
          u = _gsScope._gsDefine.globals,
          f = function (t) {
            var e, i = {};
            for (e in t) i[e] = t[e];
            return i
          },
          c = function (t, e, i) {
            var s, r, n = t.cycle;
            for (s in n) r = n[s],
              t[s] = "function" == typeof r ? r.call(e[i], i) : r[i % r.length];
            delete t.cycle
          },
          p = a.pauseCallback = function () { },
          d = function (t) {
            var e, i = [],
              s = t.length;
            for (e = 0; e !== s; i.push(t[e++]));
            return i
          },
          m = s.prototype = new e;
        return s.version = "1.19.0",
          m.constructor = s,
          m.kill()._gc = m._forcingPlayhead = m._hasPause = !1,
          m.to = function (t, e, s, r) {
            var n = s.repeat && u.TweenMax || i;
            return e ? this.add(new n(t, e, s), r) : this.set(t, s, r)
          },
          m.from = function (t, e, s, r) {
            return this.add((s.repeat && u.TweenMax || i).from(t, e, s), r)
          },
          m.fromTo = function (t, e, s, r, n) {
            var a = r.repeat && u.TweenMax || i;
            return e ? this.add(a.fromTo(t, e, s, r), n) : this.set(t, r, n)
          },
          m.staggerTo = function (t, e, r, n, a, l, h, _) {
            var u, p, m = new s({
              onComplete: l,
              onCompleteParams: h,
              callbackScope: _,
              smoothChildTiming: this.smoothChildTiming
            }),
              g = r.cycle;
            for ("string" == typeof t && (t = i.selector(t) || t), o(t = t || []) && (t = d(t)), 0 > (n = n || 0) && ((t = d(t)).reverse(), n *= -1), p = 0; p < t.length; p++)(u = f(r)).startAt && (u.startAt = f(u.startAt), u.startAt.cycle && c(u.startAt, t, p)),
              g && (c(u, t, p), null != u.duration && (e = u.duration, delete u.duration)),
              m.to(t[p], e, u, p * n);
            return this.add(m, a)
          },
          m.staggerFrom = function (t, e, i, s, r, n, a, o) {
            return i.immediateRender = 0 != i.immediateRender,
              i.runBackwards = !0,
              this.staggerTo(t, e, i, s, r, n, a, o)
          },
          m.staggerFromTo = function (t, e, i, s, r, n, a, o, l) {
            return s.startAt = i,
              s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender,
              this.staggerTo(t, e, s, r, n, a, o, l)
          },
          m.call = function (t, e, s, r) {
            return this.add(i.delayedCall(0, t, e, s), r)
          },
          m.set = function (t, e, s) {
            return s = this._parseTimeOrLabel(s, 0, !0),
              null == e.immediateRender && (e.immediateRender = s === this._time && !this._paused),
              this.add(new i(t, 0, e), s)
          },
          s.exportRoot = function (t, e) {
            null == (t = t || {}).smoothChildTiming && (t.smoothChildTiming = !0);
            var r, n, a = new s(t),
              o = a._timeline;
            for (null == e && (e = !0), o._remove(a, !0), a._startTime = 0, a._rawPrevTime = a._time = a._totalTime = o._time, r = o._first; r;) n = r._next,
              e && r instanceof i && r.target === r.vars.onComplete || a.add(r, r._startTime - r._delay),
              r = n;
            return o.add(a, 0),
              a
          },
          m.add = function (r, n, a, o) {
            var h, _, u, f, c, p;
            if ("number" != typeof n && (n = this._parseTimeOrLabel(n, 0, !0, r)), !(r instanceof t)) {
              if (r instanceof Array || r && r.push && l(r)) {
                for (a = a || "normal", o = o || 0, h = n, _ = r.length, u = 0; _ > u; u++) l(f = r[u]) && (f = new s({
                  tweens: f
                })),
                  this.add(f, h),
                  "string" != typeof f && "function" != typeof f && ("sequence" === a ? h = f._startTime + f.totalDuration() / f._timeScale : "start" === a && (f._startTime -= f.delay())),
                  h += o;
                return this._uncache(!0)
              }
              if ("string" == typeof r) return this.addLabel(r, n);
              if ("function" != typeof r) throw "Cannot add " + r + " into the timeline; it is not a tween, timeline, function, or string.";
              r = i.delayedCall(0, r)
            }
            if (e.prototype.add.call(this, r, n), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration()) for (c = this, p = c.rawTime() > r._startTime; c._timeline;) p && c._timeline.smoothChildTiming ? c.totalTime(c._totalTime, !0) : c._gc && c._enabled(!0, !1),
              c = c._timeline;
            return this
          },
          m.remove = function (e) {
            if (e instanceof t) {
              this._remove(e, !1);
              var i = e._timeline = e.vars.useFrames ? t._rootFramesTimeline : t._rootTimeline;
              return e._startTime = (e._paused ? e._pauseTime : i._time) - (e._reversed ? e.totalDuration() - e._totalTime : e._totalTime) / e._timeScale,
                this
            }
            if (e instanceof Array || e && e.push && l(e)) {
              for (var s = e.length; --s > -1;) this.remove(e[s]);
              return this
            }
            return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e)
          },
          m._remove = function (t, i) {
            e.prototype._remove.call(this, t, i);
            var s = this._last;
            return s ? this._time > s._startTime + s._totalDuration / s._timeScale && (this._time = this.duration(), this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0,
              this
          },
          m.append = function (t, e) {
            return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
          },
          m.insert = m.insertMultiple = function (t, e, i, s) {
            return this.add(t, e || 0, i, s)
          },
          m.appendMultiple = function (t, e, i, s) {
            return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, s)
          },
          m.addLabel = function (t, e) {
            return this._labels[t] = this._parseTimeOrLabel(e),
              this
          },
          m.addPause = function (t, e, s, r) {
            var n = i.delayedCall(0, p, s, r || this);
            return n.vars.onComplete = n.vars.onReverseComplete = e,
              n.data = "isPause",
              this._hasPause = !0,
              this.add(n, t)
          },
          m.removeLabel = function (t) {
            return delete this._labels[t],
              this
          },
          m.getLabelTime = function (t) {
            return null != this._labels[t] ? this._labels[t] : -1
          },
          m._parseTimeOrLabel = function (e, i, s, r) {
            var n;
            if (r instanceof t && r.timeline === this) this.remove(r);
            else if (r && (r instanceof Array || r.push && l(r))) for (n = r.length; --n > -1;) r[n] instanceof t && r[n].timeline === this && this.remove(r[n]);
            if ("string" == typeof i) return this._parseTimeOrLabel(i, s && "number" == typeof e && null == this._labels[i] ? e - this.duration() : 0, s);
            if (i = i || 0, "string" != typeof e || !isNaN(e) && null == this._labels[e]) null == e && (e = this.duration());
            else {
              if (- 1 === (n = e.indexOf("="))) return null == this._labels[e] ? s ? this._labels[e] = this.duration() + i : i : this._labels[e] + i;
              i = parseInt(e.charAt(n - 1) + "1", 10) * Number(e.substr(n + 1)),
                e = n > 1 ? this._parseTimeOrLabel(e.substr(0, n - 1), 0, s) : this.duration()
            }
            return Number(e) + i
          },
          m.seek = function (t, e) {
            return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), !1 !== e)
          },
          m.stop = function () {
            return this.paused(!0)
          },
          m.gotoAndPlay = function (t, e) {
            return this.play(t, e)
          },
          m.gotoAndStop = function (t, e) {
            return this.pause(t, e)
          },
          m.render = function (t, e, i) {
            this._gc && this._enabled(!0, !1);
            var s, n, a, o, l, u, f, c = this._dirty ? this.totalDuration() : this._totalDuration,
              p = this._time,
              d = this._startTime,
              m = this._timeScale,
              g = this._paused;
            if (t >= c - 1e-7) this._totalTime = this._time = c,
              this._reversed || this._hasPausedChild() || (n = !0, o = "onComplete", l = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 >= t && t >= -1e-7 || this._rawPrevTime < 0 || this._rawPrevTime === r) && this._rawPrevTime !== t && this._first && (l = !0, this._rawPrevTime > r && (o = "onReverseComplete"))),
              this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r,
              t = c + 1e-4;
            else if (1e-7 > t) if (this._totalTime = this._time = 0, (0 !== p || 0 === this._duration && this._rawPrevTime !== r && (this._rawPrevTime > 0 || 0 > t && this._rawPrevTime >= 0)) && (o = "onReverseComplete", n = this._reversed), 0 > t) this._active = !1,
              this._timeline.autoRemoveChildren && this._reversed ? (l = n = !0, o = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (l = !0),
              this._rawPrevTime = t;
            else {
              if (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, 0 === t && n) for (s = this._first; s && 0 === s._startTime;) s._duration || (n = !1),
                s = s._next;
              t = 0,
                this._initted || (l = !0)
            } else {
              if (this._hasPause && !this._forcingPlayhead && !e) {
                if (t >= p) for (s = this._first; s && s._startTime <= t && !u;) s._duration || "isPause" !== s.data || s.ratio || 0 === s._startTime && 0 === this._rawPrevTime || (u = s),
                  s = s._next;
                else for (s = this._last; s && s._startTime >= t && !u;) s._duration || "isPause" === s.data && s._rawPrevTime > 0 && (u = s),
                  s = s._prev;
                u && (this._time = t = u._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
              }
              this._totalTime = this._time = this._rawPrevTime = t
            }
            if (this._time !== p && this._first || i || l || u) {
              if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== p && t > 0 && (this._active = !0), 0 === p && this.vars.onStart && (0 === this._time && this._duration || e || this._callback("onStart")), (f = this._time) >= p) for (s = this._first; s && (a = s._next, f === this._time && (!this._paused || g));)(s._active || s._startTime <= f && !s._paused && !s._gc) && (u === s && this.pause(), s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)),
                s = a;
              else for (s = this._last; s && (a = s._prev, f === this._time && (!this._paused || g));) {
                if (s._active || s._startTime <= p && !s._paused && !s._gc) {
                  if (u === s) {
                    for (u = s._prev; u && u.endTime() > this._time;) u.render(u._reversed ? u.totalDuration() - (t - u._startTime) * u._timeScale : (t - u._startTime) * u._timeScale, e, i),
                      u = u._prev;
                    u = null,
                      this.pause()
                  }
                  s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)
                }
                s = a
              }
              this._onUpdate && (e || (h.length && _(), this._callback("onUpdate"))),
                o && (this._gc || (d === this._startTime || m !== this._timeScale) && (0 === this._time || c >= this.totalDuration()) && (n && (h.length && _(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[o] && this._callback(o)))
            }
          },
          m._hasPausedChild = function () {
            for (var t = this._first; t;) {
              if (t._paused || t instanceof s && t._hasPausedChild()) return !0;
              t = t._next
            }
            return !1
          },
          m.getChildren = function (t, e, s, r) {
            r = r || -9999999999;
            for (var n = [], a = this._first, o = 0; a;) a._startTime < r || (a instanceof i ? !1 !== e && (n[o++] = a) : (!1 !== s && (n[o++] = a), !1 !== t && (n = n.concat(a.getChildren(!0, e, s)), o = n.length))),
              a = a._next;
            return n
          },
          m.getTweensOf = function (t, e) {
            var s, r, n = this._gc,
              a = [],
              o = 0;
            for (n && this._enabled(!0, !0), r = (s = i.getTweensOf(t)).length; --r > -1;)(s[r].timeline === this || e && this._contains(s[r])) && (a[o++] = s[r]);
            return n && this._enabled(!1, !0),
              a
          },
          m.recent = function () {
            return this._recent
          },
          m._contains = function (t) {
            for (var e = t.timeline; e;) {
              if (e === this) return !0;
              e = e.timeline
            }
            return !1
          },
          m.shiftChildren = function (t, e, i) {
            i = i || 0;
            for (var s, r = this._first,
              n = this._labels; r;) r._startTime >= i && (r._startTime += t),
                r = r._next;
            if (e) for (s in n) n[s] >= i && (n[s] += t);
            return this._uncache(!0)
          },
          m._kill = function (t, e) {
            if (!t && !e) return this._enabled(!1, !1);
            for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), s = i.length, r = !1; --s > -1;) i[s]._kill(t, e) && (r = !0);
            return r
          },
          m.clear = function (t) {
            var e = this.getChildren(!1, !0, !0),
              i = e.length;
            for (this._time = this._totalTime = 0; --i > -1;) e[i]._enabled(!1, !1);
            return !1 !== t && (this._labels = {}),
              this._uncache(!0)
          },
          m.invalidate = function () {
            for (var e = this._first; e;) e.invalidate(),
              e = e._next;
            return t.prototype.invalidate.call(this)
          },
          m._enabled = function (t, i) {
            if (t === this._gc) for (var s = this._first; s;) s._enabled(t, !0),
              s = s._next;
            return e.prototype._enabled.call(this, t, i)
          },
          m.totalTime = function (e, i, s) {
            this._forcingPlayhead = !0;
            var r = t.prototype.totalTime.apply(this, arguments);
            return this._forcingPlayhead = !1,
              r
          },
          m.duration = function (t) {
            return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration)
          },
          m.totalDuration = function (t) {
            if (!arguments.length) {
              if (this._dirty) {
                for (var e, i, s = 0,
                  r = this._last,
                  n = 999999999999; r;) e = r._prev,
                    r._dirty && r.totalDuration(),
                    r._startTime > n && this._sortChildren && !r._paused ? this.add(r, r._startTime - r._delay) : n = r._startTime,
                    r._startTime < 0 && !r._paused && (s -= r._startTime, this._timeline.smoothChildTiming && (this._startTime += r._startTime / this._timeScale), this.shiftChildren(- r._startTime, !1, -9999999999), n = 0),
                    (i = r._startTime + r._totalDuration / r._timeScale) > s && (s = i),
                    r = e;
                this._duration = this._totalDuration = s,
                  this._dirty = !1
              }
              return this._totalDuration
            }
            return t && this.totalDuration() ? this.timeScale(this._totalDuration / t) : this
          },
          m.paused = function (e) {
            if (!e) for (var i = this._first,
              s = this._time; i;) i._startTime === s && "isPause" === i.data && (i._rawPrevTime = 0),
                i = i._next;
            return t.prototype.paused.apply(this, arguments)
          },
          m.usesFrames = function () {
            for (var e = this._timeline; e._timeline;) e = e._timeline;
            return e === t._rootFramesTimeline
          },
          m.rawTime = function () {
            return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
          },
          s
      },
      !0),
    _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"],
      function (t, e, i) {
        var s = function (e) {
          t.call(this, e),
            this._repeat = this.vars.repeat || 0,
            this._repeatDelay = this.vars.repeatDelay || 0,
            this._cycle = 0,
            this._yoyo = !0 === this.vars.yoyo,
            this._dirty = !0
        },
          r = 1e-10,
          n = e._internals,
          a = n.lazyTweens,
          o = n.lazyRender,
          l = _gsScope._gsDefine.globals,
          h = new i(null, null, 1, 0),
          _ = s.prototype = new t;
        return _.constructor = s,
          _.kill()._gc = !1,
          s.version = "1.19.0",
          _.invalidate = function () {
            return this._yoyo = !0 === this.vars.yoyo,
              this._repeat = this.vars.repeat || 0,
              this._repeatDelay = this.vars.repeatDelay || 0,
              this._uncache(!0),
              t.prototype.invalidate.call(this)
          },
          _.addCallback = function (t, i, s, r) {
            return this.add(e.delayedCall(0, t, s, r), i)
          },
          _.removeCallback = function (t, e) {
            if (t) if (null == e) this._kill(null, t);
            else for (var i = this.getTweensOf(t, !1), s = i.length, r = this._parseTimeOrLabel(e); --s > -1;) i[s]._startTime === r && i[s]._enabled(!1, !1);
            return this
          },
          _.removePause = function (e) {
            return this.removeCallback(t._internals.pauseCallback, e)
          },
          _.tweenTo = function (t, i) {
            i = i || {};
            var s, r, n, a = {
              ease: h,
              useFrames: this.usesFrames(),
              immediateRender: !1
            },
              o = i.repeat && l.TweenMax || e;
            for (r in i) a[r] = i[r];
            return a.time = this._parseTimeOrLabel(t),
              s = Math.abs(Number(a.time) - this._time) / this._timeScale || .001,
              n = new o(this, s, a),
              a.onStart = function () {
                n.target.paused(!0),
                  n.vars.time !== n.target.time() && s === n.duration() && n.duration(Math.abs(n.vars.time - n.target.time()) / n.target._timeScale),
                  i.onStart && n._callback("onStart")
              },
              n
          },
          _.tweenFromTo = function (t, e, i) {
            i = i || {},
              t = this._parseTimeOrLabel(t),
              i.startAt = {
                onComplete: this.seek,
                onCompleteParams: [t],
                callbackScope: this
              },
              i.immediateRender = !1 !== i.immediateRender;
            var s = this.tweenTo(e, i);
            return s.duration(Math.abs(s.vars.time - t) / this._timeScale || .001)
          },
          _.render = function (t, e, i) {
            this._gc && this._enabled(!0, !1);
            var s, n, l, h, _, u, f, c, p = this._dirty ? this.totalDuration() : this._totalDuration,
              d = this._duration,
              m = this._time,
              g = this._totalTime,
              v = this._startTime,
              y = this._timeScale,
              T = this._rawPrevTime,
              x = this._paused,
              w = this._cycle;
            if (t >= p - 1e-7) this._locked || (this._totalTime = p, this._cycle = this._repeat),
              this._reversed || this._hasPausedChild() || (n = !0, h = "onComplete", _ = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 >= t && t >= -1e-7 || 0 > T || T === r) && T !== t && this._first && (_ = !0, T > r && (h = "onReverseComplete"))),
              this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r,
              this._yoyo && 0 != (1 & this._cycle) ? this._time = t = 0 : (this._time = d, t = d + 1e-4);
            else if (1e-7 > t) if (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== m || 0 === d && T !== r && (T > 0 || 0 > t && T >= 0) && !this._locked) && (h = "onReverseComplete", n = this._reversed), 0 > t) this._active = !1,
              this._timeline.autoRemoveChildren && this._reversed ? (_ = n = !0, h = "onReverseComplete") : T >= 0 && this._first && (_ = !0),
              this._rawPrevTime = t;
            else {
              if (this._rawPrevTime = d || !e || t || this._rawPrevTime === t ? t : r, 0 === t && n) for (s = this._first; s && 0 === s._startTime;) s._duration || (n = !1),
                s = s._next;
              t = 0,
                this._initted || (_ = !0)
            } else if (0 === d && 0 > T && (_ = !0), this._time = this._rawPrevTime = t, this._locked || (this._totalTime = t, 0 !== this._repeat && (u = d + this._repeatDelay, this._cycle = this._totalTime / u >> 0, 0 !== this._cycle && this._cycle === this._totalTime / u && t >= g && this._cycle-- , this._time = this._totalTime - this._cycle * u, this._yoyo && 0 != (1 & this._cycle) && (this._time = d - this._time), this._time > d ? (this._time = d, t = d + 1e-4) : this._time < 0 ? this._time = t = 0 : t = this._time)), this._hasPause && !this._forcingPlayhead && !e) {
              if ((t = this._time) >= m) for (s = this._first; s && s._startTime <= t && !f;) s._duration || "isPause" !== s.data || s.ratio || 0 === s._startTime && 0 === this._rawPrevTime || (f = s),
                s = s._next;
              else for (s = this._last; s && s._startTime >= t && !f;) s._duration || "isPause" === s.data && s._rawPrevTime > 0 && (f = s),
                s = s._prev;
              f && (this._time = t = f._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
            }
            if (this._cycle !== w && !this._locked) {
              var b = this._yoyo && 0 != (1 & w),
                P = b === (this._yoyo && 0 != (1 & this._cycle)),
                O = this._totalTime,
                k = this._cycle,
                S = this._rawPrevTime,
                R = this._time;
              if (this._totalTime = w * d, this._cycle < w ? b = !b : this._totalTime += d, this._time = m, this._rawPrevTime = 0 === d ? T - 1e-4 : T, this._cycle = w, this._locked = !0, m = b ? 0 : d, this.render(m, e, 0 === d), e || this._gc || this.vars.onRepeat && this._callback("onRepeat"), m !== this._time) return;
              if (P && (m = b ? d + 1e-4 : -1e-4, this.render(m, !0, !1)), this._locked = !1, this._paused && !x) return;
              this._time = R,
                this._totalTime = O,
                this._cycle = k,
                this._rawPrevTime = S
            }
            if (this._time !== m && this._first || i || _ || f) {
              if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== g && t > 0 && (this._active = !0), 0 === g && this.vars.onStart && (0 === this._totalTime && this._totalDuration || e || this._callback("onStart")), (c = this._time) >= m) for (s = this._first; s && (l = s._next, c === this._time && (!this._paused || x));)(s._active || s._startTime <= this._time && !s._paused && !s._gc) && (f === s && this.pause(), s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)),
                s = l;
              else for (s = this._last; s && (l = s._prev, c === this._time && (!this._paused || x));) {
                if (s._active || s._startTime <= m && !s._paused && !s._gc) {
                  if (f === s) {
                    for (f = s._prev; f && f.endTime() > this._time;) f.render(f._reversed ? f.totalDuration() - (t - f._startTime) * f._timeScale : (t - f._startTime) * f._timeScale, e, i),
                      f = f._prev;
                    f = null,
                      this.pause()
                  }
                  s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)
                }
                s = l
              }
              this._onUpdate && (e || (a.length && o(), this._callback("onUpdate"))),
                h && (this._locked || this._gc || (v === this._startTime || y !== this._timeScale) && (0 === this._time || p >= this.totalDuration()) && (n && (a.length && o(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[h] && this._callback(h)))
            } else g !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate"))
          },
          _.getActive = function (t, e, i) {
            null == t && (t = !0),
              null == e && (e = !0),
              null == i && (i = !1);
            var s, r, n = [],
              a = this.getChildren(t, e, i),
              o = 0,
              l = a.length;
            for (s = 0; l > s; s++)(r = a[s]).isActive() && (n[o++] = r);
            return n
          },
          _.getLabelAfter = function (t) {
            t || 0 !== t && (t = this._time);
            var e, i = this.getLabelsArray(),
              s = i.length;
            for (e = 0; s > e; e++) if (i[e].time > t) return i[e].name;
            return null
          },
          _.getLabelBefore = function (t) {
            null == t && (t = this._time);
            for (var e = this.getLabelsArray(), i = e.length; --i > -1;) if (e[i].time < t) return e[i].name;
            return null
          },
          _.getLabelsArray = function () {
            var t, e = [],
              i = 0;
            for (t in this._labels) e[i++] = {
              time: this._labels[t],
              name: t
            };
            return e.sort(function (t, e) {
              return t.time - e.time
            }),
              e
          },
          _.progress = function (t, e) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration()
          },
          _.totalProgress = function (t, e) {
            return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration()
          },
          _.totalDuration = function (e) {
            return arguments.length ? -1 !== this._repeat && e ? this.timeScale(this.totalDuration() / e) : this : (this._dirty && (t.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
          },
          _.time = function (t, e) {
            return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 != (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
          },
          _.repeat = function (t) {
            return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
          },
          _.repeatDelay = function (t) {
            return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
          },
          _.yoyo = function (t) {
            return arguments.length ? (this._yoyo = t, this) : this._yoyo
          },
          _.currentLabel = function (t) {
            return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8)
          },
          s
      },
      !0),
    function () {
      var t = 180 / Math.PI,
        e = [],
        i = [],
        s = [],
        r = {},
        n = _gsScope._gsDefine.globals,
        a = function (t, e, i, s) {
          i === s && (i = s - (s - e) / 1e6),
            t === e && (e = t + (i - t) / 1e6),
            this.a = t,
            this.b = e,
            this.c = i,
            this.d = s,
            this.da = s - t,
            this.ca = i - t,
            this.ba = e - t
        },
        o = function (t, e, i, s) {
          var r = {
            a: t
          },
            n = {},
            a = {},
            o = {
              c: s
            },
            l = (t + e) / 2,
            h = (e + i) / 2,
            _ = (i + s) / 2,
            u = (l + h) / 2,
            f = (h + _) / 2,
            c = (f - u) / 8;
          return r.b = l + (t - l) / 4,
            n.b = u + c,
            r.c = n.a = (r.b + n.b) / 2,
            n.c = a.a = (u + f) / 2,
            a.b = f - c,
            o.b = _ + (s - _) / 4,
            a.c = o.a = (a.b + o.b) / 2,
            [r, n, a, o]
        },
        l = function (t, r, n, a, l) {
          var h, _, u, f, c, p, d, m, g, v, y, T, x, w = t.length - 1,
            b = 0,
            P = t[0].a;
          for (h = 0; w > h; h++) c = t[b],
            _ = c.a,
            u = c.d,
            f = t[b + 1].d,
            l ? (y = e[h], T = i[h], x = (T + y) * r * .25 / (a ? .5 : s[h] || .5), p = u - (u - _) * (a ? .5 * r : 0 !== y ? x / y : 0), d = u + (f - u) * (a ? .5 * r : 0 !== T ? x / T : 0), m = u - (p + ((d - p) * (3 * y / (y + T) + .5) / 4 || 0))) : (p = u - (u - _) * r * .5, d = u + (f - u) * r * .5, m = u - (p + d) / 2),
            p += m,
            d += m,
            c.c = g = p,
            c.b = 0 !== h ? P : P = c.a + .6 * (c.c - c.a),
            c.da = u - _,
            c.ca = g - _,
            c.ba = P - _,
            n ? (v = o(_, P, g, u), t.splice(b, 1, v[0], v[1], v[2], v[3]), b += 4) : b++ ,
            P = d; (c = t[b]).b = P,
              c.c = P + .4 * (c.d - P),
              c.da = c.d - c.a,
              c.ca = c.c - c.a,
              c.ba = P - c.a,
              n && (v = o(c.a, P, c.c, c.d), t.splice(b, 1, v[0], v[1], v[2], v[3]))
        },
        h = function (t, s, r, n) {
          var o, l, h, _, u, f, c = [];
          if (n) for (t = [n].concat(t), l = t.length; --l > -1;)"string" == typeof (f = t[l][s]) && "=" === f.charAt(1) && (t[l][s] = n[s] + Number(f.charAt(0) + f.substr(2)));
          if (0 > (o = t.length - 2)) return c[0] = new a(t[0][s], 0, 0, t[- 1 > o ? 0 : 1][s]),
            c;
          for (l = 0; o > l; l++) h = t[l][s],
            _ = t[l + 1][s],
            c[l] = new a(h, 0, 0, _),
            r && (u = t[l + 2][s], e[l] = (e[l] || 0) + (_ - h) * (_ - h), i[l] = (i[l] || 0) + (u - _) * (u - _));
          return c[l] = new a(t[l][s], 0, 0, t[l + 1][s]),
            c
        },
        _ = function (t, n, a, o, _, u) {
          var f, c, p, d, m, g, v, y, T = {},
            x = [],
            w = u || t[0];
          _ = "string" == typeof _ ? "," + _ + "," : ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
            null == n && (n = 1);
          for (c in t[0]) x.push(c);
          if (t.length > 1) {
            for (y = t[t.length - 1], v = !0, f = x.length; --f > -1;) if (c = x[f], Math.abs(w[c] - y[c]) > .05) {
              v = !1;
              break
            }
            v && (t = t.concat(), u && t.unshift(u), t.push(t[1]), u = t[t.length - 3])
          }
          for (e.length = i.length = s.length = 0, f = x.length; --f > -1;) c = x[f],
            r[c] = -1 !== _.indexOf("," + c + ","),
            T[c] = h(t, c, r[c], u);
          for (f = e.length; --f > -1;) e[f] = Math.sqrt(e[f]),
            i[f] = Math.sqrt(i[f]);
          if (!o) {
            for (f = x.length; --f > -1;) if (r[c]) for (p = T[x[f]], g = p.length - 1, d = 0; g > d; d++) m = p[d + 1].da / i[d] + p[d].da / e[d] || 0,
              s[d] = (s[d] || 0) + m * m;
            for (f = s.length; --f > -1;) s[f] = Math.sqrt(s[f])
          }
          for (f = x.length, d = a ? 4 : 1; --f > -1;) c = x[f],
            p = T[c],
            l(p, n, a, o, r[c]),
            v && (p.splice(0, d), p.splice(p.length - d, d));
          return T
        },
        u = function (t, e, i) {
          var s, r, n, o, l, h, _, u, f, c, p, d = {},
            m = "cubic" === (e = e || "soft") ? 3 : 2,
            g = "soft" === e,
            v = [];
          if (g && i && (t = [i].concat(t)), null == t || t.length < m + 1) throw "invalid Bezier data";
          for (f in t[0]) v.push(f);
          for (h = v.length; --h > -1;) {
            for (d[f = v[h]] = l = [], c = 0, u = t.length, _ = 0; u > _; _++) s = null == i ? t[_][f] : "string" == typeof (p = t[_][f]) && "=" === p.charAt(1) ? i[f] + Number(p.charAt(0) + p.substr(2)) : Number(p),
              g && _ > 1 && u - 1 > _ && (l[c++] = (s + l[c - 2]) / 2),
              l[c++] = s;
            for (u = c - m + 1, c = 0, _ = 0; u > _; _ += m) s = l[_],
              r = l[_ + 1],
              n = l[_ + 2],
              o = 2 === m ? 0 : l[_ + 3],
              l[c++] = p = 3 === m ? new a(s, r, n, o) : new a(s, (2 * r + s) / 3, (2 * r + n) / 3, n);
            l.length = c
          }
          return d
        },
        f = function (t, e, i) {
          for (var s, r, n, a, o, l, h, _, u, f, c, p = 1 / i,
            d = t.length; --d > -1;) for (f = t[d], n = f.a, a = f.d - n, o = f.c - n, l = f.b - n, s = r = 0, _ = 1; i >= _; _++) h = p * _,
              u = 1 - h,
              s = r - (r = (h * h * a + 3 * u * (h * o + u * l)) * h),
              c = d * i + _ - 1,
              e[c] = (e[c] || 0) + s * s
        },
        c = function (t, e) {
          var i, s, r, n, a = [],
            o = [],
            l = 0,
            h = 0,
            _ = (e = e >> 0 || 6) - 1,
            u = [],
            c = [];
          for (i in t) f(t[i], a, e);
          for (r = a.length, s = 0; r > s; s++) l += Math.sqrt(a[s]),
            n = s % e,
            c[n] = l,
            n === _ && (h += l, n = s / e >> 0, u[n] = c, o[n] = h, l = 0, c = []);
          return {
            length: h,
            lengths: o,
            segments: u
          }
        },
        p = _gsScope._gsDefine.plugin({
          propName: "bezier",
          priority: -1,
          version: "1.3.7",
          API: 2,
          global: !0,
          init: function (t, e, i) {
            this._target = t,
              e instanceof Array && (e = {
                values: e
              }),
              this._func = {},
              this._mod = {},
              this._props = [],
              this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10);
            var s, r, n, a, o, l = e.values || [],
              h = {},
              f = l[0],
              p = e.autoRotate || i.vars.orientToBezier;
            this._autoRotate = p ? p instanceof Array ? p : [["x", "y", "rotation", !0 === p ? 0 : Number(p) || 0]] : null;
            for (s in f) this._props.push(s);
            for (n = this._props.length; --n > -1;) s = this._props[n],
              this._overwriteProps.push(s),
              r = this._func[s] = "function" == typeof t[s],
              h[s] = r ? t[s.indexOf("set") || "function" != typeof t["get" + s.substr(3)] ? s : "get" + s.substr(3)]() : parseFloat(t[s]),
              o || h[s] !== l[0][s] && (o = h);
            if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? _(l, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, o) : u(l, e.type, h), this._segCount = this._beziers[s].length, this._timeRes) {
              var d = c(this._beziers, this._timeRes);
              this._length = d.length,
                this._lengths = d.lengths,
                this._segments = d.segments,
                this._l1 = this._li = this._s1 = this._si = 0,
                this._l2 = this._lengths[0],
                this._curSeg = this._segments[0],
                this._s2 = this._curSeg[0],
                this._prec = 1 / this._curSeg.length
            }
            if (p = this._autoRotate) for (this._initialRotations = [], p[0] instanceof Array || (this._autoRotate = p = [p]), n = p.length; --n > -1;) {
              for (a = 0; 3 > a; a++) s = p[n][a],
                this._func[s] = "function" == typeof t[s] && t[s.indexOf("set") || "function" != typeof t["get" + s.substr(3)] ? s : "get" + s.substr(3)];
              s = p[n][2],
                this._initialRotations[n] = (this._func[s] ? this._func[s].call(this._target) : this._target[s]) || 0,
                this._overwriteProps.push(s)
            }
            return this._startRatio = i.vars.runBackwards ? 1 : 0,
              !0
          },
          set: function (e) {
            var i, s, r, n, a, o, l, h, _, u, f = this._segCount,
              c = this._func,
              p = this._target,
              d = e !== this._startRatio;
            if (this._timeRes) {
              if (_ = this._lengths, u = this._curSeg, e *= this._length, r = this._li, e > this._l2 && f - 1 > r) {
                for (h = f - 1; h > r && (this._l2 = _[++r]) <= e;);
                this._l1 = _[r - 1],
                  this._li = r,
                  this._curSeg = u = this._segments[r],
                  this._s2 = u[this._s1 = this._si = 0]
              } else if (e < this._l1 && r > 0) {
                for (; r > 0 && (this._l1 = _[--r]) >= e;);
                0 === r && e < this._l1 ? this._l1 = 0 : r++ ,
                  this._l2 = _[r],
                  this._li = r,
                  this._curSeg = u = this._segments[r],
                  this._s1 = u[(this._si = u.length - 1) - 1] || 0,
                  this._s2 = u[this._si]
              }
              if (i = r, e -= this._l1, r = this._si, e > this._s2 && r < u.length - 1) {
                for (h = u.length - 1; h > r && (this._s2 = u[++r]) <= e;);
                this._s1 = u[r - 1],
                  this._si = r
              } else if (e < this._s1 && r > 0) {
                for (; r > 0 && (this._s1 = u[--r]) >= e;);
                0 === r && e < this._s1 ? this._s1 = 0 : r++ ,
                  this._s2 = u[r],
                  this._si = r
              }
              o = (r + (e - this._s1) / (this._s2 - this._s1)) * this._prec || 0
            } else i = 0 > e ? 0 : e >= 1 ? f - 1 : f * e >> 0,
              o = (e - i * (1 / f)) * f;
            for (s = 1 - o, r = this._props.length; --r > -1;) n = this._props[r],
              a = this._beziers[n][i],
              l = (o * o * a.da + 3 * s * (o * a.ca + s * a.ba)) * o + a.a,
              this._mod[n] && (l = this._mod[n](l, p)),
              c[n] ? p[n](l) : p[n] = l;
            if (this._autoRotate) {
              var m, g, v, y, T, x, w, b = this._autoRotate;
              for (r = b.length; --r > -1;) n = b[r][2],
                x = b[r][3] || 0,
                w = !0 === b[r][4] ? 1 : t,
                a = this._beziers[b[r][0]],
                m = this._beziers[b[r][1]],
                a && m && (a = a[i], m = m[i], g = a.a + (a.b - a.a) * o, y = a.b + (a.c - a.b) * o, g += (y - g) * o, y += (a.c + (a.d - a.c) * o - y) * o, v = m.a + (m.b - m.a) * o, T = m.b + (m.c - m.b) * o, v += (T - v) * o, T += (m.c + (m.d - m.c) * o - T) * o, l = d ? Math.atan2(T - v, y - g) * w + x : this._initialRotations[r], this._mod[n] && (l = this._mod[n](l, p)), c[n] ? p[n](l) : p[n] = l)
            }
          }
        }),
        d = p.prototype;
      p.bezierThrough = _,
        p.cubicToQuadratic = o,
        p._autoCSS = !0,
        p.quadraticToCubic = function (t, e, i) {
          return new a(t, (2 * e + t) / 3, (2 * e + i) / 3, i)
        },
        p._cssRegister = function () {
          var t = n.CSSPlugin;
          if (t) {
            var e = t._internals,
              i = e._parseToProxy,
              s = e._setPluginRatio,
              r = e.CSSPropTween;
            e._registerComplexSpecialProp("bezier", {
              parser: function (t, e, n, a, o, l) {
                e instanceof Array && (e = {
                  values: e
                }),
                  l = new p;
                var h, _, u, f = e.values,
                  c = f.length - 1,
                  d = [],
                  m = {};
                if (0 > c) return o;
                for (h = 0; c >= h; h++) u = i(t, f[h], a, o, l, c !== h),
                  d[h] = u.end;
                for (_ in e) m[_] = e[_];
                return m.values = d,
                  o = new r(t, "bezier", 0, 0, u.pt, 2),
                  o.data = u,
                  o.plugin = l,
                  o.setRatio = s,
                  0 === m.autoRotate && (m.autoRotate = !0),
                  !m.autoRotate || m.autoRotate instanceof Array || (h = !0 === m.autoRotate ? 0 : Number(m.autoRotate), m.autoRotate = null != u.end.left ? [["left", "top", "rotation", h, !1]] : null != u.end.x && [["x", "y", "rotation", h, !1]]),
                  m.autoRotate && (a._transform || a._enableTransforms(!1), u.autoRotate = a._target._gsTransform, u.proxy.rotation = u.autoRotate.rotation || 0, a._overwriteProps.push("rotation")),
                  l._onInitTween(u.proxy, m, a._tween),
                  o
              }
            })
          }
        },
        d._mod = function (t) {
          for (var e, i = this._overwriteProps,
            s = i.length; --s > -1;)(e = t[i[s]]) && "function" == typeof e && (this._mod[i[s]] = e)
        },
        d._kill = function (t) {
          var e, i, s = this._props;
          for (e in this._beziers) if (e in t) for (delete this._beziers[e], delete this._func[e], i = s.length; --i > -1;) s[i] === e && s.splice(i, 1);
          if (s = this._autoRotate) for (i = s.length; --i > -1;) t[s[i][2]] && s.splice(i, 1);
          return this._super._kill.call(this, t)
        }
    }(),
    _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"],
      function (t, e) {
        var i, s, r, n, a = function () {
          t.call(this, "css"),
            this._overwriteProps.length = 0,
            this.setRatio = a.prototype.setRatio
        },
          o = _gsScope._gsDefine.globals,
          l = {},
          h = a.prototype = new t("css");
        h.constructor = a,
          a.version = "1.19.0",
          a.API = 2,
          a.defaultTransformPerspective = 0,
          a.defaultSkewType = "compensated",
          a.defaultSmoothOrigin = !0,
          h = "px",
          a.suffixMap = {
            top: h,
            right: h,
            bottom: h,
            left: h,
            width: h,
            height: h,
            fontSize: h,
            padding: h,
            margin: h,
            perspective: h,
            lineHeight: ""
          };
        var _, u, f, c, p, d, m, g, v = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
          y = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
          T = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
          x = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
          w = /(?:\d|\-|\+|=|#|\.)*/g,
          b = /opacity *= *([^)]*)/i,
          P = /opacity:([^;]*)/i,
          O = /alpha\(opacity *=.+?\)/i,
          k = /^(rgb|hsl)/,
          S = /([A-Z])/g,
          R = /-([a-z])/gi,
          A = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
          C = function (t, e) {
            return e.toUpperCase()
          },
          D = /(?:Left|Right|Width)/i,
          M = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
          F = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
          z = /,(?=[^\)]*(?:\(|$))/gi,
          X = /[\s,\(]/i,
          I = Math.PI / 180,
          N = 180 / Math.PI,
          L = {},
          E = document,
          Y = function (t) {
            return E.createElementNS ? E.createElementNS("http://www.w3.org/1999/xhtml", t) : E.createElement(t)
          },
          B = Y("div"),
          j = Y("img"),
          U = a._internals = {
            _specialProps: l
          },
          V = navigator.userAgent,
          q = function () {
            var t = V.indexOf("Android"),
              e = Y("a");
            return f = -1 !== V.indexOf("Safari") && -1 === V.indexOf("Chrome") && (- 1 === t || Number(V.substr(t + 8, 1)) > 3),
              p = f && Number(V.substr(V.indexOf("Version/") + 8, 1)) < 6,
              c = -1 !== V.indexOf("Firefox"),
              (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(V) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(V)) && (d = parseFloat(RegExp.$1)),
              !!e && (e.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(e.style.opacity))
          }(),
          W = function (t) {
            return b.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
          },
          Z = function (t) {
            window.console && console.log(t)
          },
          G = "",
          $ = "",
          Q = function (t, e) {
            var i, s, r = (e = e || B).style;
            if (void 0 !== r[t]) return t;
            for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], s = 5; --s > -1 && void 0 === r[i[s] + t];);
            return s >= 0 ? ($ = 3 === s ? "ms" : i[s], G = "-" + $.toLowerCase() + "-", $ + t) : null
          },
          H = E.defaultView ? E.defaultView.getComputedStyle : function () { },
          K = a.getStyle = function (t, e, i, s, r) {
            var n;
            return q || "opacity" !== e ? (!s && t.style[e] ? n = t.style[e] : (i = i || H(t)) ? n = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(S, "-$1").toLowerCase()) : t.currentStyle && (n = t.currentStyle[e]), null == r || n && "none" !== n && "auto" !== n && "auto auto" !== n ? n : r) : W(t)
          },
          J = U.convertToPixels = function (t, i, s, r, n) {
            if ("px" === r || !r) return s;
            if ("auto" === r || !s) return 0;
            var o, l, h, _ = D.test(i),
              u = t,
              f = B.style,
              c = 0 > s,
              p = 1 === s;
            if (c && (s = -s), p && (s *= 100), "%" === r && -1 !== i.indexOf("border")) o = s / 100 * (_ ? t.clientWidth : t.clientHeight);
            else {
              if (f.cssText = "border:0 solid red;position:" + K(t, "position") + ";line-height:0;", "%" !== r && u.appendChild && "v" !== r.charAt(0) && "rem" !== r) f[_ ? "borderLeftWidth" : "borderTopWidth"] = s + r;
              else {
                if (u = t.parentNode || E.body, l = u._gsCache, h = e.ticker.frame, l && _ && l.time === h) return l.width * s / 100;
                f[_ ? "width" : "height"] = s + r
              }
              u.appendChild(B),
                o = parseFloat(B[_ ? "offsetWidth" : "offsetHeight"]),
                u.removeChild(B),
                _ && "%" === r && !1 !== a.cacheWidths && (l = u._gsCache = u._gsCache || {},
                  l.time = h, l.width = o / s * 100),
                0 !== o || n || (o = J(t, i, s, r, !0))
            }
            return p && (o /= 100),
              c ? -o : o
          },
          tt = U.calculateOffset = function (t, e, i) {
            if ("absolute" !== K(t, "position", i)) return 0;
            var s = "left" === e ? "Left" : "Top",
              r = K(t, "margin" + s, i);
            return t["offset" + s] - (J(t, e, parseFloat(r), r.replace(w, "")) || 0)
          },
          et = function (t, e) {
            var i, s, r, n = {};
            if (e = e || H(t, null)) if (i = e.length) for (; --i > -1;)(- 1 === (r = e[i]).indexOf("-transform") || Rt === r) && (n[r.replace(R, C)] = e.getPropertyValue(r));
            else for (i in e) (- 1 === i.indexOf("Transform") || St === i) && (n[i] = e[i]);
            else if (e = t.currentStyle || t.style) for (i in e) "string" == typeof i && void 0 === n[i] && (n[i.replace(R, C)] = e[i]);
            return q || (n.opacity = W(t)),
              s = Bt(t, e, !1),
              n.rotation = s.rotation,
              n.skewX = s.skewX,
              n.scaleX = s.scaleX,
              n.scaleY = s.scaleY,
              n.x = s.x,
              n.y = s.y,
              Ct && (n.z = s.z, n.rotationX = s.rotationX, n.rotationY = s.rotationY, n.scaleZ = s.scaleZ),
              n.filters && delete n.filters,
              n
          },
          it = function (t, e, i, s, r) {
            var n, a, o, l = {},
              h = t.style;
            for (a in i) "cssText" !== a && "length" !== a && isNaN(a) && (e[a] !== (n = i[a]) || r && r[a]) && -1 === a.indexOf("Origin") && ("number" == typeof n || "string" == typeof n) && (l[a] = "auto" !== n || "left" !== a && "top" !== a ? "" !== n && "auto" !== n && "none" !== n || "string" != typeof e[a] || "" === e[a].replace(x, "") ? n : 0 : tt(t, a), void 0 !== h[a] && (o = new gt(h, a, h[a], o)));
            if (s) for (a in s) "className" !== a && (l[a] = s[a]);
            return {
              difs: l,
              firstMPT: o
            }
          },
          st = {
            width: ["Left", "Right"],
            height: ["Top", "Bottom"]
          },
          rt = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
          nt = function (t, e, i) {
            if ("svg" === (t.nodeName + "").toLowerCase()) return (i || H(t))[e] || 0;
            if (t.getBBox && Lt(t)) return t.getBBox()[e] || 0;
            var s = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
              r = st[e],
              n = r.length;
            for (i = i || H(t, null); --n > -1;) s -= parseFloat(K(t, "padding" + r[n], i, !0)) || 0,
              s -= parseFloat(K(t, "border" + r[n] + "Width", i, !0)) || 0;
            return s
          },
          at = function (t, e) {
            if ("contain" === t || "auto" === t || "auto auto" === t) return t + " "; (null == t || "" === t) && (t = "0 0");
            var i, s = t.split(" "),
              r = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : s[0],
              n = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : s[1];
            if (s.length > 3 && !e) {
              for (s = t.split(", ").join(",").split(","), t = [], i = 0; i < s.length; i++) t.push(at(s[i]));
              return t.join(",")
            }
            return null == n ? n = "center" === r ? "50%" : "0" : "center" === n && (n = "50%"),
              ("center" === r || isNaN(parseFloat(r)) && -1 === (r + "").indexOf("=")) && (r = "50%"),
              t = r + " " + n + (s.length > 2 ? " " + s[2] : ""),
              e && (e.oxp = -1 !== r.indexOf("%"), e.oyp = -1 !== n.indexOf("%"), e.oxr = "=" === r.charAt(1), e.oyr = "=" === n.charAt(1), e.ox = parseFloat(r.replace(x, "")), e.oy = parseFloat(n.replace(x, "")), e.v = t),
              e || t
          },
          ot = function (t, e) {
            return "function" == typeof t && (t = t(g, m)),
              "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e) || 0
          },
          lt = function (t, e) {
            return "function" == typeof t && (t = t(g, m)),
              null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t) || 0
          },
          ht = function (t, e, i, s) {
            var r, n, a, o, l;
            return "function" == typeof t && (t = t(g, m)),
              null == t ? o = e : "number" == typeof t ? o = t : (r = 360, n = t.split("_"), l = "=" === t.charAt(1), a = (l ? parseInt(t.charAt(0) + "1", 10) * parseFloat(n[0].substr(2)) : parseFloat(n[0])) * (- 1 === t.indexOf("rad") ? 1 : N) - (l ? 0 : e), n.length && (s && (s[i] = e + a), -1 !== t.indexOf("short") && (a %= r) != a % (r / 2) && (a = 0 > a ? a + r : a - r), -1 !== t.indexOf("_cw") && 0 > a ? a = (a + 9999999999 * r) % r - (a / r | 0) * r : -1 !== t.indexOf("ccw") && a > 0 && (a = (a - 9999999999 * r) % r - (a / r | 0) * r)), o = e + a),
              1e-6 > o && o > -1e-6 && (o = 0),
              o
          },
          _t = {
            aqua: [0, 255, 255],
            lime: [0, 255, 0],
            silver: [192, 192, 192],
            black: [0, 0, 0],
            maroon: [128, 0, 0],
            teal: [0, 128, 128],
            blue: [0, 0, 255],
            navy: [0, 0, 128],
            white: [255, 255, 255],
            fuchsia: [255, 0, 255],
            olive: [128, 128, 0],
            yellow: [255, 255, 0],
            orange: [255, 165, 0],
            gray: [128, 128, 128],
            purple: [128, 0, 128],
            green: [0, 128, 0],
            red: [255, 0, 0],
            pink: [255, 192, 203],
            cyan: [0, 255, 255],
            transparent: [255, 255, 255, 0]
          },
          ut = function (t, e, i) {
            return 255 * (1 > 6 * (t = 0 > t ? t + 1 : t > 1 ? t - 1 : t) ? e + (i - e) * t * 6 : .5 > t ? i : 2 > 3 * t ? e + (i - e) * (2 / 3 - t) * 6 : e) + .5 | 0
          },
          ft = a.parseColor = function (t, e) {
            var i, s, r, n, a, o, l, h, _, u, f;
            if (t) if ("number" == typeof t) i = [t >> 16, t >> 8 & 255, 255 & t];
            else {
              if ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), _t[t]) i = _t[t];
              else if ("#" === t.charAt(0)) 4 === t.length && (s = t.charAt(1), r = t.charAt(2), n = t.charAt(3), t = "#" + s + s + r + r + n + n),
                t = parseInt(t.substr(1), 16),
                i = [t >> 16, t >> 8 & 255, 255 & t];
              else if ("hsl" === t.substr(0, 3)) if (i = f = t.match(v), e) {
                if (- 1 !== t.indexOf("=")) return t.match(y)
              } else a = Number(i[0]) % 360 / 360,
                o = Number(i[1]) / 100,
                l = Number(i[2]) / 100,
                r = .5 >= l ? l * (o + 1) : l + o - l * o,
                s = 2 * l - r,
                i.length > 3 && (i[3] = Number(t[3])),
                i[0] = ut(a + 1 / 3, s, r),
                i[1] = ut(a, s, r),
                i[2] = ut(a - 1 / 3, s, r);
              else i = t.match(v) || _t.transparent;
              i[0] = Number(i[0]),
                i[1] = Number(i[1]),
                i[2] = Number(i[2]),
                i.length > 3 && (i[3] = Number(i[3]))
            } else i = _t.black;
            return e && !f && (s = i[0] / 255, r = i[1] / 255, n = i[2] / 255, h = Math.max(s, r, n), _ = Math.min(s, r, n), l = (h + _) / 2, h === _ ? a = o = 0 : (u = h - _, o = l > .5 ? u / (2 - h - _) : u / (h + _), a = h === s ? (r - n) / u + (n > r ? 6 : 0) : h === r ? (n - s) / u + 2 : (s - r) / u + 4, a *= 60), i[0] = a + .5 | 0, i[1] = 100 * o + .5 | 0, i[2] = 100 * l + .5 | 0),
              i
          },
          ct = function (t, e) {
            var i, s, r, n = t.match(pt) || [],
              a = 0,
              o = n.length ? "" : t;
            for (i = 0; i < n.length; i++) s = n[i],
              r = t.substr(a, t.indexOf(s, a) - a),
              a += r.length + s.length,
              3 === (s = ft(s, e)).length && s.push(1),
              o += r + (e ? "hsla(" + s[0] + "," + s[1] + "%," + s[2] + "%," + s[3] : "rgba(" + s.join(",")) + ")";
            return o + t.substr(a)
          },
          pt = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
        for (h in _t) pt += "|" + h + "\\b";
        pt = new RegExp(pt + ")", "gi"),
          a.colorStringFilter = function (t) {
            var e, i = t[0] + t[1];
            pt.test(i) && (e = -1 !== i.indexOf("hsl(") || -1 !== i.indexOf("hsla("), t[0] = ct(t[0], e), t[1] = ct(t[1], e)),
              pt.lastIndex = 0
          },
          e.defaultStringFilter || (e.defaultStringFilter = a.colorStringFilter);
        var dt = function (t, e, i, s) {
          if (null == t) return function (t) {
            return t
          };
          var r, n = e ? (t.match(pt) || [""])[0] : "",
            a = t.split(n).join("").match(T) || [],
            o = t.substr(0, t.indexOf(a[0])),
            l = ")" === t.charAt(t.length - 1) ? ")" : "",
            h = -1 !== t.indexOf(" ") ? " " : ",",
            _ = a.length,
            u = _ > 0 ? a[0].replace(v, "") : "";
          return _ ? r = e ?
            function (t) {
              var e, f, c, p;
              if ("number" == typeof t) t += u;
              else if (s && z.test(t)) {
                for (p = t.replace(z, "|").split("|"), c = 0; c < p.length; c++) p[c] = r(p[c]);
                return p.join(",")
              }
              if (e = (t.match(pt) || [n])[0], f = t.split(e).join("").match(T) || [], c = f.length, _ > c--) for (; ++c < _;) f[c] = i ? f[(c - 1) / 2 | 0] : a[c];
              return o + f.join(h) + h + e + l + (- 1 !== t.indexOf("inset") ? " inset" : "")
            } : function (t) {
              var e, n, f;
              if ("number" == typeof t) t += u;
              else if (s && z.test(t)) {
                for (n = t.replace(z, "|").split("|"), f = 0; f < n.length; f++) n[f] = r(n[f]);
                return n.join(",")
              }
              if (e = t.match(T) || [], f = e.length, _ > f--) for (; ++f < _;) e[f] = i ? e[(f - 1) / 2 | 0] : a[f];
              return o + e.join(h) + l
            } : function (t) {
              return t
            }
        },
          mt = function (t) {
            return t = t.split(","),
              function (e, i, s, r, n, a, o) {
                var l, h = (i + "").split(" ");
                for (o = {},
                  l = 0; 4 > l; l++) o[t[l]] = h[l] = h[l] || h[(l - 1) / 2 >> 0];
                return r.parse(e, o, n, a)
              }
          },
          gt = (U._setPluginRatio = function (t) {
            this.plugin.setRatio(t);
            for (var e, i, s, r, n, a = this.data,
              o = a.proxy,
              l = a.firstMPT; l;) e = o[l.v],
                l.r ? e = Math.round(e) : 1e-6 > e && e > -1e-6 && (e = 0),
                l.t[l.p] = e,
                l = l._next;
            if (a.autoRotate && (a.autoRotate.rotation = a.mod ? a.mod(o.rotation, this.t) : o.rotation), 1 === t || 0 === t) for (l = a.firstMPT, n = 1 === t ? "e" : "b"; l;) {
              if ((i = l.t).type) {
                if (1 === i.type) {
                  for (r = i.xs0 + i.s + i.xs1, s = 1; s < i.l; s++) r += i["xn" + s] + i["xs" + (s + 1)];
                  i[n] = r
                }
              } else i[n] = i.s + i.xs0;
              l = l._next
            }
          },
            function (t, e, i, s, r) {
              this.t = t,
                this.p = e,
                this.v = i,
                this.r = r,
                s && (s._prev = this, this._next = s)
            }),
          vt = (U._parseToProxy = function (t, e, i, s, r, n) {
            var a, o, l, h, _, u = s,
              f = {},
              c = {},
              p = i._transform,
              d = L;
            for (i._transform = null, L = e, s = _ = i.parse(t, e, s, r), L = d, n && (i._transform = p, u && (u._prev = null, u._prev && (u._prev._next = null))); s && s !== u;) {
              if (s.type <= 1 && (o = s.p, c[o] = s.s + s.c, f[o] = s.s, n || (h = new gt(s, "s", o, h, s.r), s.c = 0), 1 === s.type)) for (a = s.l; --a > 0;) l = "xn" + a,
                o = s.p + "_" + l,
                c[o] = s.data[l],
                f[o] = s[l],
                n || (h = new gt(s, l, o, h, s.rxp[l]));
              s = s._next
            }
            return {
              proxy: f,
              end: c,
              firstMPT: h,
              pt: _
            }
          },
            U.CSSPropTween = function (t, e, s, r, a, o, l, h, _, u, f) {
              this.t = t,
                this.p = e,
                this.s = s,
                this.c = r,
                this.n = l || e,
                t instanceof vt || n.push(this.n),
                this.r = h,
                this.type = o || 0,
                _ && (this.pr = _, i = !0),
                this.b = void 0 === u ? s : u,
                this.e = void 0 === f ? s + r : f,
                a && (this._next = a, a._prev = this)
            }),
          yt = function (t, e, i, s, r, n) {
            var a = new vt(t, e, i, s - i, r, -1, n);
            return a.b = i,
              a.e = a.xs0 = s,
              a
          },
          Tt = a.parseComplex = function (t, e, i, s, r, n, o, l, h, u) {
            i = i || n || "",
              "function" == typeof s && (s = s(g, m)),
              o = new vt(t, e, 0, 0, o, u ? 2 : 1, null, !1, l, i, s),
              s += "",
              r && pt.test(s + i) && (s = [i, s], a.colorStringFilter(s), i = s[0], s = s[1]);
            var f, c, p, d, T, x, w, b, P, O, k, S, R, A = i.split(", ").join(",").split(" "),
              C = s.split(", ").join(",").split(" "),
              D = A.length,
              M = !1 !== _;
            for ((- 1 !== s.indexOf(",") || -1 !== i.indexOf(",")) && (A = A.join(" ").replace(z, ", ").split(" "), C = C.join(" ").replace(z, ", ").split(" "), D = A.length), D !== C.length && (A = (n || "").split(" "), D = A.length), o.plugin = h, o.setRatio = u, pt.lastIndex = 0, f = 0; D > f; f++) if (d = A[f], T = C[f], (b = parseFloat(d)) || 0 === b) o.appendXtra("", b, ot(T, b), T.replace(y, ""), M && -1 !== T.indexOf("px"), !0);
            else if (r && pt.test(d)) S = T.indexOf(")") + 1,
              S = ")" + (S ? T.substr(S) : ""),
              R = -1 !== T.indexOf("hsl") && q,
              d = ft(d, R),
              T = ft(T, R),
              (P = d.length + T.length > 6) && !q && 0 === T[3] ? (o["xs" + o.l] += o.l ? " transparent" : "transparent", o.e = o.e.split(C[f]).join("transparent")) : (q || (P = !1), R ? o.appendXtra(P ? "hsla(" : "hsl(", d[0], ot(T[0], d[0]), ",", !1, !0).appendXtra("", d[1], ot(T[1], d[1]), "%,", !1).appendXtra("", d[2], ot(T[2], d[2]), P ? "%," : "%" + S, !1) : o.appendXtra(P ? "rgba(" : "rgb(", d[0], T[0] - d[0], ",", !0, !0).appendXtra("", d[1], T[1] - d[1], ",", !0).appendXtra("", d[2], T[2] - d[2], P ? "," : S, !0), P && (d = d.length < 4 ? 1 : d[3], o.appendXtra("", d, (T.length < 4 ? 1 : T[3]) - d, S, !1))),
              pt.lastIndex = 0;
            else if (x = d.match(v)) {
              if (!(w = T.match(y)) || w.length !== x.length) return o;
              for (p = 0, c = 0; c < x.length; c++) k = x[c],
                O = d.indexOf(k, p),
                o.appendXtra(d.substr(p, O - p), Number(k), ot(w[c], k), "", M && "px" === d.substr(O + k.length, 2), 0 === c),
                p = O + k.length;
              o["xs" + o.l] += d.substr(p)
            } else o["xs" + o.l] += o.l || o["xs" + o.l] ? " " + T : T;
            if (- 1 !== s.indexOf("=") && o.data) {
              for (S = o.xs0 + o.data.s, f = 1; f < o.l; f++) S += o["xs" + f] + o.data["xn" + f];
              o.e = S + o["xs" + f]
            }
            return o.l || (o.type = -1, o.xs0 = o.e),
              o.xfirst || o
          },
          xt = 9;
        for ((h = vt.prototype).l = h.pr = 0; --xt > 0;) h["xn" + xt] = 0,
          h["xs" + xt] = "";
        h.xs0 = "",
          h._next = h._prev = h.xfirst = h.data = h.plugin = h.setRatio = h.rxp = null,
          h.appendXtra = function (t, e, i, s, r, n) {
            var a = this,
              o = a.l;
            return a["xs" + o] += n && (o || a["xs" + o]) ? " " + t : t || "",
              i || 0 === o || a.plugin ? (a.l++ , a.type = a.setRatio ? 2 : 1, a["xs" + a.l] = s || "", o > 0 ? (a.data["xn" + o] = e + i, a.rxp["xn" + o] = r, a["xn" + o] = e, a.plugin || (a.xfirst = new vt(a, "xn" + o, e, i, a.xfirst || a, 0, a.n, r, a.pr), a.xfirst.xs0 = 0), a) : (a.data = {
                s: e + i
              },
                a.rxp = {},
                a.s = e, a.c = i, a.r = r, a)) : (a["xs" + o] += e + (s || ""), a)
          };
        var wt = function (t, e) {
          e = e || {},
            this.p = e.prefix ? Q(t) || t : t,
            l[t] = l[this.p] = this,
            this.format = e.formatter || dt(e.defaultValue, e.color, e.collapsible, e.multi),
            e.parser && (this.parse = e.parser),
            this.clrs = e.color,
            this.multi = e.multi,
            this.keyword = e.keyword,
            this.dflt = e.defaultValue,
            this.pr = e.priority || 0
        },
          bt = U._registerComplexSpecialProp = function (t, e, i) {
            "object" != typeof e && (e = {
              parser: i
            });
            var s, r = t.split(","),
              n = e.defaultValue;
            for (i = i || [n], s = 0; s < r.length; s++) e.prefix = 0 === s && e.prefix,
              e.defaultValue = i[s] || n,
              new wt(r[s], e)
          },
          Pt = U._registerPluginProp = function (t) {
            if (!l[t]) {
              var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
              bt(t, {
                parser: function (t, i, s, r, n, a, h) {
                  var _ = o.com.greensock.plugins[e];
                  return _ ? (_._cssRegister(), l[s].parse(t, i, s, r, n, a, h)) : (Z("Error: " + e + " js file not loaded."), n)
                }
              })
            }
          }; (h = wt.prototype).parseComplex = function (t, e, i, s, r, n) {
            var a, o, l, h, _, u, f = this.keyword;
            if (this.multi && (z.test(i) || z.test(e) ? (o = e.replace(z, "|").split("|"), l = i.replace(z, "|").split("|")) : f && (o = [e], l = [i])), l) {
              for (h = l.length > o.length ? l.length : o.length, a = 0; h > a; a++) e = o[a] = o[a] || this.dflt,
                i = l[a] = l[a] || this.dflt,
                f && (_ = e.indexOf(f), u = i.indexOf(f), _ !== u && (- 1 === u ? o[a] = o[a].split(f).join("") : -1 === _ && (o[a] += " " + f)));
              e = o.join(", "),
                i = l.join(", ")
            }
            return Tt(t, this.p, e, i, this.clrs, this.dflt, s, this.pr, r, n)
          },
            h.parse = function (t, e, i, s, n, a, o) {
              return this.parseComplex(t.style, this.format(K(t, this.p, r, !1, this.dflt)), this.format(e), n, a)
            },
            a.registerSpecialProp = function (t, e, i) {
              bt(t, {
                parser: function (t, s, r, n, a, o, l) {
                  var h = new vt(t, r, 0, 0, a, 2, r, !1, i);
                  return h.plugin = o,
                    h.setRatio = e(t, s, n._tween, r),
                    h
                },
                priority: i
              })
            },
            a.useSVGTransformAttr = f || c;
        var Ot, kt = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
          St = Q("transform"),
          Rt = G + "transform",
          At = Q("transformOrigin"),
          Ct = null !== Q("perspective"),
          Dt = U.Transform = function () {
            this.perspective = parseFloat(a.defaultTransformPerspective) || 0,
              this.force3D = !(!1 === a.defaultForce3D || !Ct) && (a.defaultForce3D || "auto")
          },
          Mt = window.SVGElement,
          Ft = function (t, e, i) {
            var s, r = E.createElementNS("http://www.w3.org/2000/svg", t),
              n = /([a-z])([A-Z])/g;
            for (s in i) r.setAttributeNS(null, s.replace(n, "$1-$2").toLowerCase(), i[s]);
            return e.appendChild(r),
              r
          },
          zt = E.documentElement,
          Xt = function () {
            var t, e, i, s = d || /Android/i.test(V) && !window.chrome;
            return E.createElementNS && !s && (t = Ft("svg", zt), e = Ft("rect", t, {
              width: 100,
              height: 50,
              x: 100
            }), i = e.getBoundingClientRect().width, e.style[At] = "50% 50%", e.style[St] = "scaleX(0.5)", s = i === e.getBoundingClientRect().width && !(c && Ct), zt.removeChild(t)),
              s
          }(),
          It = function (t, e, i, s, r, n) {
            var o, l, h, _, u, f, c, p, d, m, g, v, y, T, x = t._gsTransform,
              w = Yt(t, !0);
            x && (y = x.xOrigin, T = x.yOrigin),
              (!s || (o = s.split(" ")).length < 2) && (c = t.getBBox(), e = at(e).split(" "), o = [(- 1 !== e[0].indexOf("%") ? parseFloat(e[0]) / 100 * c.width : parseFloat(e[0])) + c.x, (- 1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * c.height : parseFloat(e[1])) + c.y]),
              i.xOrigin = _ = parseFloat(o[0]),
              i.yOrigin = u = parseFloat(o[1]),
              s && w !== Et && (f = w[0], c = w[1], p = w[2], d = w[3], m = w[4], g = w[5], v = f * d - c * p, l = _ * (d / v) + u * (- p / v) + (p * g - d * m) / v, h = _ * (- c / v) + u * (f / v) - (f * g - c * m) / v, _ = i.xOrigin = o[0] = l, u = i.yOrigin = o[1] = h),
              x && (n && (i.xOffset = x.xOffset, i.yOffset = x.yOffset, x = i), r || !1 !== r && !1 !== a.defaultSmoothOrigin ? (l = _ - y, h = u - T, x.xOffset += l * w[0] + h * w[2] - l, x.yOffset += l * w[1] + h * w[3] - h) : x.xOffset = x.yOffset = 0),
              n || t.setAttribute("data-svg-origin", o.join(" "))
          },
          Nt = function (t) {
            try {
              return t.getBBox()
            } catch (t) { }
          },
          Lt = function (t) {
            return !!(Mt && t.getBBox && t.getCTM && Nt(t) && (!t.parentNode || t.parentNode.getBBox && t.parentNode.getCTM))
          },
          Et = [1, 0, 0, 1, 0, 0],
          Yt = function (t, e) {
            var i, s, r, n, a, o, l = t._gsTransform || new Dt,
              h = t.style;
            if (St ? s = K(t, Rt, null, !0) : t.currentStyle && (s = t.currentStyle.filter.match(M), s = s && 4 === s.length ? [s[0].substr(4), Number(s[2].substr(4)), Number(s[1].substr(4)), s[3].substr(4), l.x || 0, l.y || 0].join(",") : ""), (i = !s || "none" === s || "matrix(1, 0, 0, 1, 0, 0)" === s) && St && ((o = "none" === H(t).display) || !t.parentNode) && (o && (n = h.display, h.display = "block"), t.parentNode || (a = 1, zt.appendChild(t)), s = K(t, Rt, null, !0), i = !s || "none" === s || "matrix(1, 0, 0, 1, 0, 0)" === s, n ? h.display = n : o && qt(h, "display"), a && zt.removeChild(t)), (l.svg || t.getBBox && Lt(t)) && (i && -1 !== (h[St] + "").indexOf("matrix") && (s = h[St], i = 0), r = t.getAttribute("transform"), i && r && (- 1 !== r.indexOf("matrix") ? (s = r, i = 0) : -1 !== r.indexOf("translate") && (s = "matrix(1,0,0,1," + r.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")", i = 0))), i) return Et;
            for (r = (s || "").match(v) || [], xt = r.length; --xt > -1;) n = Number(r[xt]),
              r[xt] = (a = n - (n |= 0)) ? (1e5 * a + (0 > a ? -.5 : .5) | 0) / 1e5 + n : n;
            return e && r.length > 6 ? [r[0], r[1], r[4], r[5], r[12], r[13]] : r
          },
          Bt = U.getTransform = function (t, i, s, r) {
            if (t._gsTransform && s && !r) return t._gsTransform;
            var n, o, l, h, _, u, f = s ? t._gsTransform || new Dt : new Dt,
              c = f.scaleX < 0,
              p = 1e5,
              d = Ct ? parseFloat(K(t, At, i, !1, "0 0 0").split(" ")[2]) || f.zOrigin || 0 : 0,
              m = parseFloat(a.defaultTransformPerspective) || 0;
            if (f.svg = !(!t.getBBox || !Lt(t)), f.svg && (It(t, K(t, At, i, !1, "50% 50%") + "", f, t.getAttribute("data-svg-origin")), Ot = a.useSVGTransformAttr || Xt), (n = Yt(t)) !== Et) {
              if (16 === n.length) {
                var g, v, y, T, x, w = n[0],
                  b = n[1],
                  P = n[2],
                  O = n[3],
                  k = n[4],
                  S = n[5],
                  R = n[6],
                  A = n[7],
                  C = n[8],
                  D = n[9],
                  M = n[10],
                  F = n[12],
                  z = n[13],
                  X = n[14],
                  I = n[11],
                  L = Math.atan2(R, M);
                f.zOrigin && (X = -f.zOrigin, F = C * X - n[12], z = D * X - n[13], X = M * X + f.zOrigin - n[14]),
                  f.rotationX = L * N,
                  L && (T = Math.cos(- L), x = Math.sin(- L), g = k * T + C * x, v = S * T + D * x, y = R * T + M * x, C = k * -x + C * T, D = S * -x + D * T, M = R * -x + M * T, I = A * -x + I * T, k = g, S = v, R = y),
                  L = Math.atan2(- P, M),
                  f.rotationY = L * N,
                  L && (T = Math.cos(- L), x = Math.sin(- L), g = w * T - C * x, v = b * T - D * x, y = P * T - M * x, D = b * x + D * T, M = P * x + M * T, I = O * x + I * T, w = g, b = v, P = y),
                  L = Math.atan2(b, w),
                  f.rotation = L * N,
                  L && (T = Math.cos(- L), x = Math.sin(- L), w = w * T + k * x, v = b * T + S * x, S = b * -x + S * T, R = P * -x + R * T, b = v),
                  f.rotationX && Math.abs(f.rotationX) + Math.abs(f.rotation) > 359.9 && (f.rotationX = f.rotation = 0, f.rotationY = 180 - f.rotationY),
                  f.scaleX = (Math.sqrt(w * w + b * b) * p + .5 | 0) / p,
                  f.scaleY = (Math.sqrt(S * S + D * D) * p + .5 | 0) / p,
                  f.scaleZ = (Math.sqrt(R * R + M * M) * p + .5 | 0) / p,
                  f.rotationX || f.rotationY ? f.skewX = 0 : (f.skewX = k || S ? Math.atan2(k, S) * N + f.rotation : f.skewX || 0, Math.abs(f.skewX) > 90 && Math.abs(f.skewX) < 270 && (c ? (f.scaleX *= -1, f.skewX += f.rotation <= 0 ? 180 : -180, f.rotation += f.rotation <= 0 ? 180 : -180) : (f.scaleY *= -1, f.skewX += f.skewX <= 0 ? 180 : -180))),
                  f.perspective = I ? 1 / (0 > I ? -I : I) : 0,
                  f.x = F,
                  f.y = z,
                  f.z = X,
                  f.svg && (f.x -= f.xOrigin - (f.xOrigin * w - f.yOrigin * k), f.y -= f.yOrigin - (f.yOrigin * b - f.xOrigin * S))
              } else if (!Ct || r || !n.length || f.x !== n[4] || f.y !== n[5] || !f.rotationX && !f.rotationY) {
                var E = n.length >= 6,
                  Y = E ? n[0] : 1,
                  B = n[1] || 0,
                  j = n[2] || 0,
                  U = E ? n[3] : 1;
                f.x = n[4] || 0,
                  f.y = n[5] || 0,
                  l = Math.sqrt(Y * Y + B * B),
                  h = Math.sqrt(U * U + j * j),
                  _ = Y || B ? Math.atan2(B, Y) * N : f.rotation || 0,
                  u = j || U ? Math.atan2(j, U) * N + _ : f.skewX || 0,
                  Math.abs(u) > 90 && Math.abs(u) < 270 && (c ? (l *= -1, u += 0 >= _ ? 180 : -180, _ += 0 >= _ ? 180 : -180) : (h *= -1, u += 0 >= u ? 180 : -180)),
                  f.scaleX = l,
                  f.scaleY = h,
                  f.rotation = _,
                  f.skewX = u,
                  Ct && (f.rotationX = f.rotationY = f.z = 0, f.perspective = m, f.scaleZ = 1),
                  f.svg && (f.x -= f.xOrigin - (f.xOrigin * Y + f.yOrigin * j), f.y -= f.yOrigin - (f.xOrigin * B + f.yOrigin * U))
              }
              f.zOrigin = d;
              for (o in f) f[o] < 2e-5 && f[o] > -2e-5 && (f[o] = 0)
            }
            return s && (t._gsTransform = f, f.svg && (Ot && t.style[St] ? e.delayedCall(.001,
              function () {
                qt(t.style, St)
              }) : !Ot && t.getAttribute("transform") && e.delayedCall(.001,
                function () {
                  t.removeAttribute("transform")
                }))),
              f
          },
          jt = function (t) {
            var e, i, s = this.data,
              r = -s.rotation * I,
              n = r + s.skewX * I,
              a = 1e5,
              o = (Math.cos(r) * s.scaleX * a | 0) / a,
              l = (Math.sin(r) * s.scaleX * a | 0) / a,
              h = (Math.sin(n) * -s.scaleY * a | 0) / a,
              _ = (Math.cos(n) * s.scaleY * a | 0) / a,
              u = this.t.style,
              f = this.t.currentStyle;
            if (f) {
              i = l,
                l = -h,
                h = -i,
                e = f.filter,
                u.filter = "";
              var c, p, m = this.t.offsetWidth,
                g = this.t.offsetHeight,
                v = "absolute" !== f.position,
                y = "progid:DXImageTransform.Microsoft.Matrix(M11=" + o + ", M12=" + l + ", M21=" + h + ", M22=" + _,
                T = s.x + m * s.xPercent / 100,
                x = s.y + g * s.yPercent / 100;
              if (null != s.ox && (c = (s.oxp ? m * s.ox * .01 : s.ox) - m / 2, p = (s.oyp ? g * s.oy * .01 : s.oy) - g / 2, T += c - (c * o + p * l), x += p - (c * h + p * _)), v ? (c = m / 2, p = g / 2, y += ", Dx=" + (c - (c * o + p * l) + T) + ", Dy=" + (p - (c * h + p * _) + x) + ")") : y += ", sizingMethod='auto expand')", -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? u.filter = e.replace(F, y) : u.filter = y + " " + e, (0 === t || 1 === t) && 1 === o && 0 === l && 0 === h && 1 === _ && (v && -1 === y.indexOf("Dx=0, Dy=0") || b.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf(e.indexOf("Alpha")) && u.removeAttribute("filter")), !v) {
                var P, O, k, S = 8 > d ? 1 : -1;
                for (c = s.ieOffsetX || 0, p = s.ieOffsetY || 0, s.ieOffsetX = Math.round((m - ((0 > o ? -o : o) * m + (0 > l ? -l : l) * g)) / 2 + T), s.ieOffsetY = Math.round((g - ((0 > _ ? -_ : _) * g + (0 > h ? -h : h) * m)) / 2 + x), xt = 0; 4 > xt; xt++) O = rt[xt],
                  P = f[O],
                  i = -1 !== P.indexOf("px") ? parseFloat(P) : J(this.t, O, parseFloat(P), P.replace(w, "")) || 0,
                  k = i !== s[O] ? 2 > xt ? -s.ieOffsetX : -s.ieOffsetY : 2 > xt ? c - s.ieOffsetX : p - s.ieOffsetY,
                  u[O] = (s[O] = Math.round(i - k * (0 === xt || 2 === xt ? 1 : S))) + "px"
              }
            }
          },
          Ut = U.set3DTransformRatio = U.setTransformRatio = function (t) {
            var e, i, s, r, n, a, o, l, h, _, u, f, p, d, m, g, v, y, T, x, w, b, P, O = this.data,
              k = this.t.style,
              S = O.rotation,
              R = O.rotationX,
              A = O.rotationY,
              C = O.scaleX,
              D = O.scaleY,
              M = O.scaleZ,
              F = O.x,
              z = O.y,
              X = O.z,
              N = O.svg,
              L = O.perspective,
              E = O.force3D;
            if (!((1 !== t && 0 !== t || "auto" !== E || this.tween._totalTime !== this.tween._totalDuration && this.tween._totalTime) && E || X || L || A || R || 1 !== M) || Ot && N || !Ct) S || O.skewX || N ? (S *= I, b = O.skewX * I, P = 1e5, e = Math.cos(S) * C, r = Math.sin(S) * C, i = Math.sin(S - b) * -D, n = Math.cos(S - b) * D, b && "simple" === O.skewType && (v = Math.tan(b - O.skewY * I), v = Math.sqrt(1 + v * v), i *= v, n *= v, O.skewY && (v = Math.tan(O.skewY * I), v = Math.sqrt(1 + v * v), e *= v, r *= v)), N && (F += O.xOrigin - (O.xOrigin * e + O.yOrigin * i) + O.xOffset, z += O.yOrigin - (O.xOrigin * r + O.yOrigin * n) + O.yOffset, Ot && (O.xPercent || O.yPercent) && (d = this.t.getBBox(), F += .01 * O.xPercent * d.width, z += .01 * O.yPercent * d.height), (d = 1e-6) > F && F > -d && (F = 0), d > z && z > -d && (z = 0)), T = (e * P | 0) / P + "," + (r * P | 0) / P + "," + (i * P | 0) / P + "," + (n * P | 0) / P + "," + F + "," + z + ")", N && Ot ? this.t.setAttribute("transform", "matrix(" + T) : k[St] = (O.xPercent || O.yPercent ? "translate(" + O.xPercent + "%," + O.yPercent + "%) matrix(" : "matrix(") + T) : k[St] = (O.xPercent || O.yPercent ? "translate(" + O.xPercent + "%," + O.yPercent + "%) matrix(" : "matrix(") + C + ",0,0," + D + "," + F + "," + z + ")";
            else {
              if (c && ((d = 1e-4) > C && C > -d && (C = M = 2e-5), d > D && D > -d && (D = M = 2e-5), !L || O.z || O.rotationX || O.rotationY || (L = 0)), S || O.skewX) S *= I,
                m = e = Math.cos(S),
                g = r = Math.sin(S),
                O.skewX && (S -= O.skewX * I, m = Math.cos(S), g = Math.sin(S), "simple" === O.skewType && (v = Math.tan((O.skewX - O.skewY) * I), v = Math.sqrt(1 + v * v), m *= v, g *= v, O.skewY && (v = Math.tan(O.skewY * I), v = Math.sqrt(1 + v * v), e *= v, r *= v))),
                i = -g,
                n = m;
              else {
                if (!(A || R || 1 !== M || L || N)) return void (k[St] = (O.xPercent || O.yPercent ? "translate(" + O.xPercent + "%," + O.yPercent + "%) translate3d(" : "translate3d(") + F + "px," + z + "px," + X + "px)" + (1 !== C || 1 !== D ? " scale(" + C + "," + D + ")" : ""));
                e = n = 1,
                  i = r = 0
              }
              h = 1,
                s = a = o = l = _ = u = 0,
                f = L ? -1 / L : 0,
                p = O.zOrigin,
                d = 1e-6,
                x = ",",
                w = "0",
                (S = A * I) && (m = Math.cos(S), g = Math.sin(S), o = -g, _ = f * -g, s = e * g, a = r * g, h = m, f *= m, e *= m, r *= m),
                (S = R * I) && (m = Math.cos(S), g = Math.sin(S), v = i * m + s * g, y = n * m + a * g, l = h * g, u = f * g, s = i * -g + s * m, a = n * -g + a * m, h *= m, f *= m, i = v, n = y),
                1 !== M && (s *= M, a *= M, h *= M, f *= M),
                1 !== D && (i *= D, n *= D, l *= D, u *= D),
                1 !== C && (e *= C, r *= C, o *= C, _ *= C),
                (p || N) && (p && (F += s * -p, z += a * -p, X += h * -p + p), N && (F += O.xOrigin - (O.xOrigin * e + O.yOrigin * i) + O.xOffset, z += O.yOrigin - (O.xOrigin * r + O.yOrigin * n) + O.yOffset), d > F && F > -d && (F = w), d > z && z > -d && (z = w), d > X && X > -d && (X = 0)),
                T = O.xPercent || O.yPercent ? "translate(" + O.xPercent + "%," + O.yPercent + "%) matrix3d(" : "matrix3d(",
                T += (d > e && e > -d ? w : e) + x + (d > r && r > -d ? w : r) + x + (d > o && o > -d ? w : o),
                T += x + (d > _ && _ > -d ? w : _) + x + (d > i && i > -d ? w : i) + x + (d > n && n > -d ? w : n),
                R || A || 1 !== M ? (T += x + (d > l && l > -d ? w : l) + x + (d > u && u > -d ? w : u) + x + (d > s && s > -d ? w : s), T += x + (d > a && a > -d ? w : a) + x + (d > h && h > -d ? w : h) + x + (d > f && f > -d ? w : f) + x) : T += ",0,0,0,0,1,0,",
                T += F + x + z + x + X + x + (L ? 1 + -X / L : 1) + ")",
                k[St] = T
            }
          }; (h = Dt.prototype).x = h.y = h.z = h.skewX = h.skewY = h.rotation = h.rotationX = h.rotationY = h.zOrigin = h.xPercent = h.yPercent = h.xOffset = h.yOffset = 0,
            h.scaleX = h.scaleY = h.scaleZ = 1,
            bt("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
              parser: function (t, e, i, s, n, o, l) {
                if (s._lastParsedTransform === l) return n;
                s._lastParsedTransform = l;
                var h;
                "function" == typeof l[i] && (h = l[i], l[i] = e);
                var _, u, f, c, p, d, v, y, T, x = t._gsTransform,
                  w = t.style,
                  b = kt.length,
                  P = l,
                  O = {},
                  k = "transformOrigin",
                  S = Bt(t, r, !0, P.parseTransform),
                  R = P.transform && ("function" == typeof P.transform ? P.transform(g, m) : P.transform);
                if (s._transform = S, R && "string" == typeof R && St) u = B.style,
                  u[St] = R,
                  u.display = "block",
                  u.position = "absolute",
                  E.body.appendChild(B),
                  _ = Bt(B, null, !1),
                  S.svg && (d = S.xOrigin, v = S.yOrigin, _.x -= S.xOffset, _.y -= S.yOffset, (P.transformOrigin || P.svgOrigin) && (R = {},
                    It(t, at(P.transformOrigin), R, P.svgOrigin, P.smoothOrigin, !0), d = R.xOrigin, v = R.yOrigin, _.x -= R.xOffset - S.xOffset, _.y -= R.yOffset - S.yOffset), (d || v) && (y = Yt(B, !0), _.x -= d - (d * y[0] + v * y[2]), _.y -= v - (d * y[1] + v * y[3]))),
                  E.body.removeChild(B),
                  _.perspective || (_.perspective = S.perspective),
                  null != P.xPercent && (_.xPercent = lt(P.xPercent, S.xPercent)),
                  null != P.yPercent && (_.yPercent = lt(P.yPercent, S.yPercent));
                else if ("object" == typeof P) {
                  if (_ = {
                    scaleX: lt(null != P.scaleX ? P.scaleX : P.scale, S.scaleX),
                    scaleY: lt(null != P.scaleY ? P.scaleY : P.scale, S.scaleY),
                    scaleZ: lt(P.scaleZ, S.scaleZ),
                    x: lt(P.x, S.x),
                    y: lt(P.y, S.y),
                    z: lt(P.z, S.z),
                    xPercent: lt(P.xPercent, S.xPercent),
                    yPercent: lt(P.yPercent, S.yPercent),
                    perspective: lt(P.transformPerspective, S.perspective)
                  },
                    null != (p = P.directionalRotation)) if ("object" == typeof p) for (u in p) P[u] = p[u];
                    else P.rotation = p;
                  "string" == typeof P.x && -1 !== P.x.indexOf("%") && (_.x = 0, _.xPercent = lt(P.x, S.xPercent)),
                    "string" == typeof P.y && -1 !== P.y.indexOf("%") && (_.y = 0, _.yPercent = lt(P.y, S.yPercent)),
                    _.rotation = ht("rotation" in P ? P.rotation : "shortRotation" in P ? P.shortRotation + "_short" : "rotationZ" in P ? P.rotationZ : S.rotation - S.skewY, S.rotation - S.skewY, "rotation", O),
                    Ct && (_.rotationX = ht("rotationX" in P ? P.rotationX : "shortRotationX" in P ? P.shortRotationX + "_short" : S.rotationX || 0, S.rotationX, "rotationX", O), _.rotationY = ht("rotationY" in P ? P.rotationY : "shortRotationY" in P ? P.shortRotationY + "_short" : S.rotationY || 0, S.rotationY, "rotationY", O)),
                    _.skewX = ht(P.skewX, S.skewX - S.skewY),
                    (_.skewY = ht(P.skewY, S.skewY)) && (_.skewX += _.skewY, _.rotation += _.skewY)
                }
                for (Ct && null != P.force3D && (S.force3D = P.force3D, c = !0), S.skewType = P.skewType || S.skewType || a.defaultSkewType, (f = S.force3D || S.z || S.rotationX || S.rotationY || _.z || _.rotationX || _.rotationY || _.perspective) || null == P.scale || (_.scaleZ = 1); --b > -1;) T = kt[b],
                  ((R = _[T] - S[T]) > 1e-6 || -1e-6 > R || null != P[T] || null != L[T]) && (c = !0, n = new vt(S, T, S[T], R, n), T in O && (n.e = O[T]), n.xs0 = 0, n.plugin = o, s._overwriteProps.push(n.n));
                return R = P.transformOrigin,
                  S.svg && (R || P.svgOrigin) && (d = S.xOffset, v = S.yOffset, It(t, at(R), _, P.svgOrigin, P.smoothOrigin), n = yt(S, "xOrigin", (x ? S : _).xOrigin, _.xOrigin, n, k), n = yt(S, "yOrigin", (x ? S : _).yOrigin, _.yOrigin, n, k), (d !== S.xOffset || v !== S.yOffset) && (n = yt(S, "xOffset", x ? d : S.xOffset, S.xOffset, n, k), n = yt(S, "yOffset", x ? v : S.yOffset, S.yOffset, n, k)), R = Ot ? null : "0px 0px"),
                  (R || Ct && f && S.zOrigin) && (St ? (c = !0, T = At, R = (R || K(t, T, r, !1, "50% 50%")) + "", n = new vt(w, T, 0, 0, n, -1, k), n.b = w[T], n.plugin = o, Ct ? (u = S.zOrigin, R = R.split(" "), S.zOrigin = (R.length > 2 && (0 === u || "0px" !== R[2]) ? parseFloat(R[2]) : u) || 0, n.xs0 = n.e = R[0] + " " + (R[1] || "50%") + " 0px", n = new vt(S, "zOrigin", 0, 0, n, -1, n.n), n.b = u, n.xs0 = n.e = S.zOrigin) : n.xs0 = n.e = R) : at(R + "", S)),
                  c && (s._transformType = S.svg && Ot || !f && 3 !== this._transformType ? 2 : 3),
                  h && (l[i] = h),
                  n
              },
              prefix: !0
            }),
            bt("boxShadow", {
              defaultValue: "0px 0px 0px 0px #999",
              prefix: !0,
              color: !0,
              multi: !0,
              keyword: "inset"
            }),
            bt("borderRadius", {
              defaultValue: "0px",
              parser: function (t, e, i, n, a, o) {
                e = this.format(e);
                var l, h, _, u, f, c, p, d, m, g, v, y, T, x, w, b, P = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                  O = t.style;
                for (m = parseFloat(t.offsetWidth), g = parseFloat(t.offsetHeight), l = e.split(" "), h = 0; h < P.length; h++) this.p.indexOf("border") && (P[h] = Q(P[h])),
                  -1 !== (f = u = K(t, P[h], r, !1, "0px")).indexOf(" ") && (u = f.split(" "), f = u[0], u = u[1]),
                  c = _ = l[h],
                  p = parseFloat(f),
                  y = f.substr((p + "").length),
                  (T = "=" === c.charAt(1)) ? (d = parseInt(c.charAt(0) + "1", 10), c = c.substr(2), d *= parseFloat(c), v = c.substr((d + "").length - (0 > d ? 1 : 0)) || "") : (d = parseFloat(c), v = c.substr((d + "").length)),
                  "" === v && (v = s[i] || y),
                  v !== y && (x = J(t, "borderLeft", p, y), w = J(t, "borderTop", p, y), "%" === v ? (f = x / m * 100 + "%", u = w / g * 100 + "%") : "em" === v ? (b = J(t, "borderLeft", 1, "em"), f = x / b + "em", u = w / b + "em") : (f = x + "px", u = w + "px"), T && (c = parseFloat(f) + d + v, _ = parseFloat(u) + d + v)),
                  a = Tt(O, P[h], f + " " + u, c + " " + _, !1, "0px", a);
                return a
              },
              prefix: !0,
              formatter: dt("0px 0px 0px 0px", !1, !0)
            }),
            bt("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
              defaultValue: "0px",
              parser: function (t, e, i, s, n, a) {
                return Tt(t.style, i, this.format(K(t, i, r, !1, "0px 0px")), this.format(e), !1, "0px", n)
              },
              prefix: !0,
              formatter: dt("0px 0px", !1, !0)
            }),
            bt("backgroundPosition", {
              defaultValue: "0 0",
              parser: function (t, e, i, s, n, a) {
                var o, l, h, _, u, f, c = "background-position",
                  p = r || H(t, null),
                  m = this.format((p ? d ? p.getPropertyValue(c + "-x") + " " + p.getPropertyValue(c + "-y") : p.getPropertyValue(c) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
                  g = this.format(e);
                if (- 1 !== m.indexOf("%") != (- 1 !== g.indexOf("%")) && g.split(",").length < 2 && (f = K(t, "backgroundImage").replace(A, "")) && "none" !== f) {
                  for (o = m.split(" "), l = g.split(" "), j.setAttribute("src", f), h = 2; --h > -1;) m = o[h],
                    (_ = -1 !== m.indexOf("%")) !== (- 1 !== l[h].indexOf("%")) && (u = 0 === h ? t.offsetWidth - j.width : t.offsetHeight - j.height, o[h] = _ ? parseFloat(m) / 100 * u + "px" : parseFloat(m) / u * 100 + "%");
                  m = o.join(" ")
                }
                return this.parseComplex(t.style, m, g, n, a)
              },
              formatter: at
            }),
            bt("backgroundSize", {
              defaultValue: "0 0",
              formatter: function (t) {
                return t += "",
                  at(- 1 === t.indexOf(" ") ? t + " " + t : t)
              }
            }),
            bt("perspective", {
              defaultValue: "0px",
              prefix: !0
            }),
            bt("perspectiveOrigin", {
              defaultValue: "50% 50%",
              prefix: !0
            }),
            bt("transformStyle", {
              prefix: !0
            }),
            bt("backfaceVisibility", {
              prefix: !0
            }),
            bt("userSelect", {
              prefix: !0
            }),
            bt("margin", {
              parser: mt("marginTop,marginRight,marginBottom,marginLeft")
            }),
            bt("padding", {
              parser: mt("paddingTop,paddingRight,paddingBottom,paddingLeft")
            }),
            bt("clip", {
              defaultValue: "rect(0px,0px,0px,0px)",
              parser: function (t, e, i, s, n, a) {
                var o, l, h;
                return 9 > d ? (l = t.currentStyle, h = 8 > d ? " " : ",", o = "rect(" + l.clipTop + h + l.clipRight + h + l.clipBottom + h + l.clipLeft + ")", e = this.format(e).split(",").join(h)) : (o = this.format(K(t, this.p, r, !1, this.dflt)), e = this.format(e)),
                  this.parseComplex(t.style, o, e, n, a)
              }
            }),
            bt("textShadow", {
              defaultValue: "0px 0px 0px #999",
              color: !0,
              multi: !0
            }),
            bt("autoRound,strictUnits", {
              parser: function (t, e, i, s, r) {
                return r
              }
            }),
            bt("border", {
              defaultValue: "0px solid #000",
              parser: function (t, e, i, s, n, a) {
                var o = K(t, "borderTopWidth", r, !1, "0px"),
                  l = this.format(e).split(" "),
                  h = l[0].replace(w, "");
                return "px" !== h && (o = parseFloat(o) / J(t, "borderTopWidth", 1, h) + h),
                  this.parseComplex(t.style, this.format(o + " " + K(t, "borderTopStyle", r, !1, "solid") + " " + K(t, "borderTopColor", r, !1, "#000")), l.join(" "), n, a)
              },
              color: !0,
              formatter: function (t) {
                var e = t.split(" ");
                return e[0] + " " + (e[1] || "solid") + " " + (t.match(pt) || ["#000"])[0]
              }
            }),
            bt("borderWidth", {
              parser: mt("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
            }),
            bt("float,cssFloat,styleFloat", {
              parser: function (t, e, i, s, r, n) {
                var a = t.style,
                  o = "cssFloat" in a ? "cssFloat" : "styleFloat";
                return new vt(a, o, 0, 0, r, -1, i, !1, 0, a[o], e)
              }
            });
        var Vt = function (t) {
          var e, i = this.t,
            s = i.filter || K(this.data, "filter") || "",
            r = this.s + this.c * t | 0;
          100 === r && (- 1 === s.indexOf("atrix(") && -1 === s.indexOf("radient(") && -1 === s.indexOf("oader(") ? (i.removeAttribute("filter"), e = !K(this.data, "filter")) : (i.filter = s.replace(O, ""), e = !0)),
            e || (this.xn1 && (i.filter = s = s || "alpha(opacity=" + r + ")"), -1 === s.indexOf("pacity") ? 0 === r && this.xn1 || (i.filter = s + " alpha(opacity=" + r + ")") : i.filter = s.replace(b, "opacity=" + r))
        };
        bt("opacity,alpha,autoAlpha", {
          defaultValue: "1",
          parser: function (t, e, i, s, n, a) {
            var o = parseFloat(K(t, "opacity", r, !1, "1")),
              l = t.style,
              h = "autoAlpha" === i;
            return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + o),
              h && 1 === o && "hidden" === K(t, "visibility", r) && 0 !== e && (o = 0),
              q ? n = new vt(l, "opacity", o, e - o, n) : (n = new vt(l, "opacity", 100 * o, 100 * (e - o), n), n.xn1 = h ? 1 : 0, l.zoom = 1, n.type = 2, n.b = "alpha(opacity=" + n.s + ")", n.e = "alpha(opacity=" + (n.s + n.c) + ")", n.data = t, n.plugin = a, n.setRatio = Vt),
              h && (n = new vt(l, "visibility", 0, 0, n, -1, null, !1, 0, 0 !== o ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit"), n.xs0 = "inherit", s._overwriteProps.push(n.n), s._overwriteProps.push(i)),
              n
          }
        });
        var qt = function (t, e) {
          e && (t.removeProperty ? (("ms" === e.substr(0, 2) || "webkit" === e.substr(0, 6)) && (e = "-" + e), t.removeProperty(e.replace(S, "-$1").toLowerCase())) : t.removeAttribute(e))
        },
          Wt = function (t) {
            if (this.t._gsClassPT = this, 1 === t || 0 === t) {
              this.t.setAttribute("class", 0 === t ? this.b : this.e);
              for (var e = this.data,
                i = this.t.style; e;) e.v ? i[e.p] = e.v : qt(i, e.p),
                  e = e._next;
              1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
            } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
          };
        bt("className", {
          parser: function (t, e, s, n, a, o, l) {
            var h, _, u, f, c, p = t.getAttribute("class") || "",
              d = t.style.cssText;
            if (a = n._classNamePT = new vt(t, s, 0, 0, a, 2), a.setRatio = Wt, a.pr = -11, i = !0, a.b = p, _ = et(t, r), u = t._gsClassPT) {
              for (f = {},
                c = u.data; c;) f[c.p] = 1,
                  c = c._next;
              u.setRatio(1)
            }
            return t._gsClassPT = a,
              a.e = "=" !== e.charAt(1) ? e : p.replace(new RegExp("(?:\\s|^)" + e.substr(2) + "(?![\\w-])"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""),
              t.setAttribute("class", a.e),
              h = it(t, _, et(t), l, f),
              t.setAttribute("class", p),
              a.data = h.firstMPT,
              t.style.cssText = d,
              a = a.xfirst = n.parse(t, h.difs, a, o)
          }
        });
        var Zt = function (t) {
          if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
            var e, i, s, r, n, a = this.t.style,
              o = l.transform.parse;
            if ("all" === this.e) a.cssText = "",
              r = !0;
            else for (e = this.e.split(" ").join("").split(","), s = e.length; --s > -1;) i = e[s],
              l[i] && (l[i].parse === o ? r = !0 : i = "transformOrigin" === i ? At : l[i].p),
              qt(a, i);
            r && (qt(a, St), (n = this.t._gsTransform) && (n.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._gsTransform))
          }
        };
        for (bt("clearProps", {
          parser: function (t, e, s, r, n) {
            return n = new vt(t, s, 0, 0, n, 2),
              n.setRatio = Zt,
              n.e = e,
              n.pr = -10,
              n.data = r._tween,
              i = !0,
              n
          }
        }), h = "bezier,throwProps,physicsProps,physics2D".split(","), xt = h.length; xt--;) Pt(h[xt]); (h = a.prototype)._firstPT = h._lastParsedTransform = h._transform = null,
          h._onInitTween = function (t, e, o, h) {
            if (!t.nodeType) return !1;
            this._target = m = t,
              this._tween = o,
              this._vars = e,
              g = h,
              _ = e.autoRound,
              i = !1,
              s = e.suffixMap || a.suffixMap,
              r = H(t, ""),
              n = this._overwriteProps;
            var c, d, v, y, T, x, w, b, O, k = t.style;
            if (u && "" === k.zIndex && ("auto" === (c = K(t, "zIndex", r)) || "" === c) && this._addLazySet(k, "zIndex", 0), "string" == typeof e && (y = k.cssText, c = et(t, r), k.cssText = y + ";" + e, c = it(t, c, et(t)).difs, !q && P.test(e) && (c.opacity = parseFloat(RegExp.$1)), e = c, k.cssText = y), e.className ? this._firstPT = d = l.className.parse(t, e.className, "className", this, null, null, e) : this._firstPT = d = this.parse(t, e, null), this._transformType) {
              for (O = 3 === this._transformType, St ? f && (u = !0, "" === k.zIndex && ("auto" === (w = K(t, "zIndex", r)) || "" === w) && this._addLazySet(k, "zIndex", 0), p && this._addLazySet(k, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (O ? "visible" : "hidden"))) : k.zoom = 1, v = d; v && v._next;) v = v._next;
              b = new vt(t, "transform", 0, 0, null, 2),
                this._linkCSSP(b, null, v),
                b.setRatio = St ? Ut : jt,
                b.data = this._transform || Bt(t, r, !0),
                b.tween = o,
                b.pr = -1,
                n.pop()
            }
            if (i) {
              for (; d;) {
                for (x = d._next, v = y; v && v.pr > d.pr;) v = v._next; (d._prev = v ? v._prev : T) ? d._prev._next = d : y = d,
                  (d._next = v) ? v._prev = d : T = d,
                  d = x
              }
              this._firstPT = y
            }
            return !0
          },
          h.parse = function (t, e, i, n) {
            var a, o, h, u, f, c, p, d, v, y, T = t.style;
            for (a in e) "function" == typeof (c = e[a]) && (c = c(g, m)),
              (o = l[a]) ? i = o.parse(t, c, a, this, i, n, e) : (f = K(t, a, r) + "", v = "string" == typeof c, "color" === a || "fill" === a || "stroke" === a || -1 !== a.indexOf("Color") || v && k.test(c) ? (v || (c = ft(c), c = (c.length > 3 ? "rgba(" : "rgb(") + c.join(",") + ")"), i = Tt(T, a, f, c, !0, "transparent", i, 0, n)) : v && X.test(c) ? i = Tt(T, a, f, c, !0, null, i, 0, n) : (h = parseFloat(f), p = h || 0 === h ? f.substr((h + "").length) : "", ("" === f || "auto" === f) && ("width" === a || "height" === a ? (h = nt(t, a, r), p = "px") : "left" === a || "top" === a ? (h = tt(t, a, r), p = "px") : (h = "opacity" !== a ? 0 : 1, p = "")), (y = v && "=" === c.charAt(1)) ? (u = parseInt(c.charAt(0) + "1", 10), c = c.substr(2), u *= parseFloat(c), d = c.replace(w, "")) : (u = parseFloat(c), d = v ? c.replace(w, "") : ""), "" === d && (d = a in s ? s[a] : p), c = u || 0 === u ? (y ? u + h : u) + d : e[a], p !== d && "" !== d && (u || 0 === u) && h && (h = J(t, a, h, p), "%" === d ? (h /= J(t, a, 100, "%") / 100, !0 !== e.strictUnits && (f = h + "%")) : "em" === d || "rem" === d || "vw" === d || "vh" === d ? h /= J(t, a, 1, d) : "px" !== d && (u = J(t, a, u, d), d = "px"), y && (u || 0 === u) && (c = u + h + d)), y && (u += h), !h && 0 !== h || !u && 0 !== u ? void 0 !== T[a] && (c || c + "" != "NaN" && null != c) ? (i = new vt(T, a, u || h || 0, 0, i, -1, a, !1, 0, f, c), i.xs0 = "none" !== c || "display" !== a && -1 === a.indexOf("Style") ? c : f) : Z("invalid " + a + " tween value: " + e[a]) : (i = new vt(T, a, h, u - h, i, 0, a, !1 !== _ && ("px" === d || "zIndex" === a), 0, f, c), i.xs0 = d))),
              n && i && !i.plugin && (i.plugin = n);
            return i
          },
          h.setRatio = function (t) {
            var e, i, s, r = this._firstPT;
            if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time) if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || -1e-6 === this._tween._rawPrevTime) for (; r;) {
              if (e = r.c * t + r.s, r.r ? e = Math.round(e) : 1e-6 > e && e > -1e-6 && (e = 0), r.type) if (1 === r.type) if (2 === (s = r.l)) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2;
              else if (3 === s) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3;
              else if (4 === s) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4;
              else if (5 === s) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4 + r.xn4 + r.xs5;
              else {
                for (i = r.xs0 + e + r.xs1, s = 1; s < r.l; s++) i += r["xn" + s] + r["xs" + (s + 1)];
                r.t[r.p] = i
              } else - 1 === r.type ? r.t[r.p] = r.xs0 : r.setRatio && r.setRatio(t);
              else r.t[r.p] = e + r.xs0;
              r = r._next
            } else for (; r;) 2 !== r.type ? r.t[r.p] = r.b : r.setRatio(t),
              r = r._next;
            else for (; r;) {
              if (2 !== r.type) if (r.r && -1 !== r.type) if (e = Math.round(r.s + r.c), r.type) {
                if (1 === r.type) {
                  for (s = r.l, i = r.xs0 + e + r.xs1, s = 1; s < r.l; s++) i += r["xn" + s] + r["xs" + (s + 1)];
                  r.t[r.p] = i
                }
              } else r.t[r.p] = e + r.xs0;
              else r.t[r.p] = r.e;
              else r.setRatio(t);
              r = r._next
            }
          },
          h._enableTransforms = function (t) {
            this._transform = this._transform || Bt(this._target, r, !0),
              this._transformType = this._transform.svg && Ot || !t && 3 !== this._transformType ? 2 : 3
          };
        var Gt = function (t) {
          this.t[this.p] = this.e,
            this.data._linkCSSP(this, this._next, null, !0)
        };
        h._addLazySet = function (t, e, i) {
          var s = this._firstPT = new vt(t, e, 0, 0, this._firstPT, 2);
          s.e = i,
            s.setRatio = Gt,
            s.data = this
        },
          h._linkCSSP = function (t, e, i, s) {
            return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, s = !0), i ? i._next = t : s || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = i),
              t
          },
          h._mod = function (t) {
            for (var e = this._firstPT; e;)"function" == typeof t[e.p] && t[e.p] === Math.round && (e.r = 1),
              e = e._next
          },
          h._kill = function (e) {
            var i, s, r, n = e;
            if (e.autoAlpha || e.alpha) {
              n = {};
              for (s in e) n[s] = e[s];
              n.opacity = 1,
                n.autoAlpha && (n.visibility = 1)
            }
            for (e.className && (i = this._classNamePT) && ((r = i.xfirst) && r._prev ? this._linkCSSP(r._prev, i._next, r._prev._prev) : r === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, r._prev), this._classNamePT = null), i = this._firstPT; i;) i.plugin && i.plugin !== s && i.plugin._kill && (i.plugin._kill(e), s = i.plugin),
              i = i._next;
            return t.prototype._kill.call(this, n)
          };
        var $t = function (t, e, i) {
          var s, r, n, a;
          if (t.slice) for (r = t.length; --r > -1;) $t(t[r], e, i);
          else for (s = t.childNodes, r = s.length; --r > -1;) n = s[r],
            a = n.type,
            n.style && (e.push(et(n)), i && i.push(n)),
            1 !== a && 9 !== a && 11 !== a || !n.childNodes.length || $t(n, e, i)
        };
        return a.cascadeTo = function (t, i, s) {
          var r, n, a, o, l = e.to(t, i, s),
            h = [l],
            _ = [],
            u = [],
            f = [],
            c = e._internals.reservedProps;
          for (t = l._targets || l.target, $t(t, _, f), l.render(i, !0, !0), $t(t, u), l.render(0, !0, !0), l._enabled(!0), r = f.length; --r > -1;) if ((n = it(f[r], _[r], u[r])).firstMPT) {
            n = n.difs;
            for (a in s) c[a] && (n[a] = s[a]);
            o = {};
            for (a in n) o[a] = _[r][a];
            h.push(e.fromTo(f[r], i, o, n))
          }
          return h
        },
          t.activate([a]),
          a
      },
      !0),
    function () {
      var t = function (t) {
        for (; t;) t.f || t.blob || (t.m = Math.round),
          t = t._next
      },
        e = _gsScope._gsDefine.plugin({
          propName: "roundProps",
          version: "1.6.0",
          priority: -1,
          API: 2,
          init: function (t, e, i) {
            return this._tween = i,
              !0
          }
        }).prototype;
      e._onInitAllProps = function () {
        for (var e, i, s, r = this._tween,
          n = r.vars.roundProps.join ? r.vars.roundProps : r.vars.roundProps.split(","), a = n.length, o = {},
          l = r._propLookup.roundProps; --a > -1;) o[n[a]] = Math.round;
        for (a = n.length; --a > -1;) for (e = n[a], i = r._firstPT; i;) s = i._next,
          i.pg ? i.t._mod(o) : i.n === e && (2 === i.f && i.t ? t(i.t._firstPT) : (this._add(i.t, e, i.s, i.c), s && (s._prev = i._prev), i._prev ? i._prev._next = s : r._firstPT === i && (r._firstPT = s), i._next = i._prev = null, r._propLookup[e] = l)),
          i = s;
        return !1
      },
        e._add = function (t, e, i, s) {
          this._addTween(t, e, i, i + s, e, Math.round),
            this._overwriteProps.push(e)
        }
    }(),
    _gsScope._gsDefine.plugin({
      propName: "attr",
      API: 2,
      version: "0.6.0",
      init: function (t, e, i, s) {
        var r, n;
        if ("function" != typeof t.setAttribute) return !1;
        for (r in e) "function" == typeof (n = e[r]) && (n = n(s, t)),
          this._addTween(t, "setAttribute", t.getAttribute(r) + "", n + "", r, !1, r),
          this._overwriteProps.push(r);
        return !0
      }
    }),
    _gsScope._gsDefine.plugin({
      propName: "directionalRotation",
      version: "0.3.0",
      API: 2,
      init: function (t, e, i, s) {
        "object" != typeof e && (e = {
          rotation: e
        }),
          this.finals = {};
        var r, n, a, o, l, h, _ = !0 === e.useRadians ? 2 * Math.PI : 360;
        for (r in e) "useRadians" !== r && ("function" == typeof (o = e[r]) && (o = o(s, t)), h = (o + "").split("_"), n = h[0], a = parseFloat("function" != typeof t[r] ? t[r] : t[r.indexOf("set") || "function" != typeof t["get" + r.substr(3)] ? r : "get" + r.substr(3)]()), o = this.finals[r] = "string" == typeof n && "=" === n.charAt(1) ? a + parseInt(n.charAt(0) + "1", 10) * Number(n.substr(2)) : Number(n) || 0, l = o - a, h.length && (- 1 !== (n = h.join("_")).indexOf("short") && (l %= _) != l % (_ / 2) && (l = 0 > l ? l + _ : l - _), -1 !== n.indexOf("_cw") && 0 > l ? l = (l + 9999999999 * _) % _ - (l / _ | 0) * _ : -1 !== n.indexOf("ccw") && l > 0 && (l = (l - 9999999999 * _) % _ - (l / _ | 0) * _)), (l > 1e-6 || -1e-6 > l) && (this._addTween(t, r, a, a + l, r), this._overwriteProps.push(r)));
        return !0
      },
      set: function (t) {
        var e;
        if (1 !== t) this._super.setRatio.call(this, t);
        else for (e = this._firstPT; e;) e.f ? e.t[e.p](this.finals[e.p]) : e.t[e.p] = this.finals[e.p],
          e = e._next
      }
    })._autoCSS = !0,
    _gsScope._gsDefine("easing.Back", ["easing.Ease"],
      function (t) {
        var e, i, s, r = _gsScope.GreenSockGlobals || _gsScope,
          n = r.com.greensock,
          a = 2 * Math.PI,
          o = Math.PI / 2,
          l = n._class,
          h = function (e, i) {
            var s = l("easing." + e,
              function () { },
              !0),
              r = s.prototype = new t;
            return r.constructor = s,
              r.getRatio = i,
              s
          },
          _ = t.register ||
            function () { },
          u = function (t, e, i, s, r) {
            var n = l("easing." + t, {
              easeOut: new e,
              easeIn: new i,
              easeInOut: new s
            },
              !0);
            return _(n, t),
              n
          },
          f = function (t, e, i) {
            this.t = t,
              this.v = e,
              i && (this.next = i, i.prev = this, this.c = i.v - e, this.gap = i.t - t)
          },
          c = function (e, i) {
            var s = l("easing." + e,
              function (t) {
                this._p1 = t || 0 === t ? t : 1.70158,
                  this._p2 = 1.525 * this._p1
              },
              !0),
              r = s.prototype = new t;
            return r.constructor = s,
              r.getRatio = i,
              r.config = function (t) {
                return new s(t)
              },
              s
          },
          p = u("Back", c("BackOut",
            function (t) {
              return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
            }), c("BackIn",
              function (t) {
                return t * t * ((this._p1 + 1) * t - this._p1)
              }), c("BackInOut",
                function (t) {
                  return (t *= 2) < 1 ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
                })),
          d = l("easing.SlowMo",
            function (t, e, i) {
              e = e || 0 === e ? e : .7,
                null == t ? t = .7 : t > 1 && (t = 1),
                this._p = 1 !== t ? e : 0,
                this._p1 = (1 - t) / 2,
                this._p2 = t,
                this._p3 = this._p1 + this._p2,
                this._calcEnd = !0 === i
            },
            !0),
          m = d.prototype = new t;
        return m.constructor = d,
          m.getRatio = function (t) {
            var e = t + (.5 - t) * this._p;
            return t < this._p1 ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
          },
          d.ease = new d(.7, .7),
          m.config = d.config = function (t, e, i) {
            return new d(t, e, i)
          },
          e = l("easing.SteppedEase",
            function (t) {
              t = t || 1,
                this._p1 = 1 / t,
                this._p2 = t + 1
            },
            !0),
          m = e.prototype = new t,
          m.constructor = e,
          m.getRatio = function (t) {
            return 0 > t ? t = 0 : t >= 1 && (t = .999999999),
              (this._p2 * t >> 0) * this._p1
          },
          m.config = e.config = function (t) {
            return new e(t)
          },
          i = l("easing.RoughEase",
            function (e) {
              for (var i, s, r, n, a, o, l = (e = e || {}).taper || "none", h = [], _ = 0, u = 0 | (e.points || 20), c = u, p = !1 !== e.randomize, d = !0 === e.clamp, m = e.template instanceof t ? e.template : null, g = "number" == typeof e.strength ? .4 * e.strength : .4; --c > -1;) i = p ? Math.random() : 1 / u * c,
                s = m ? m.getRatio(i) : i,
                "none" === l ? r = g : "out" === l ? (n = 1 - i, r = n * n * g) : "in" === l ? r = i * i * g : .5 > i ? (n = 2 * i, r = n * n * .5 * g) : (n = 2 * (1 - i), r = n * n * .5 * g),
                p ? s += Math.random() * r - .5 * r : c % 2 ? s += .5 * r : s -= .5 * r,
                d && (s > 1 ? s = 1 : 0 > s && (s = 0)),
                h[_++] = {
                  x: i,
                  y: s
                };
              for (h.sort(function (t, e) {
                return t.x - e.x
              }), o = new f(1, 1, null), c = u; --c > -1;) a = h[c],
                o = new f(a.x, a.y, o);
              this._prev = new f(0, 0, 0 !== o.t ? o : o.next)
            },
            !0),
          m = i.prototype = new t,
          m.constructor = i,
          m.getRatio = function (t) {
            var e = this._prev;
            if (t > e.t) {
              for (; e.next && t >= e.t;) e = e.next;
              e = e.prev
            } else for (; e.prev && t <= e.t;) e = e.prev;
            return this._prev = e,
              e.v + (t - e.t) / e.gap * e.c
          },
          m.config = function (t) {
            return new i(t)
          },
          i.ease = new i,
          u("Bounce", h("BounceOut",
            function (t) {
              return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
            }), h("BounceIn",
              function (t) {
                return (t = 1 - t) < 1 / 2.75 ? 1 - 7.5625 * t * t : 2 / 2.75 > t ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
              }), h("BounceInOut",
                function (t) {
                  var e = .5 > t;
                  return t = e ? 1 - 2 * t : 2 * t - 1,
                    t = 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375,
                    e ? .5 * (1 - t) : .5 * t + .5
                })),
          u("Circ", h("CircOut",
            function (t) {
              return Math.sqrt(1 - (t -= 1) * t)
            }), h("CircIn",
              function (t) {
                return - (Math.sqrt(1 - t * t) - 1)
              }), h("CircInOut",
                function (t) {
                  return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
                })),
          s = function (e, i, s) {
            var r = l("easing." + e,
              function (t, e) {
                this._p1 = t >= 1 ? t : 1,
                  this._p2 = (e || s) / (1 > t ? t : 1),
                  this._p3 = this._p2 / a * (Math.asin(1 / this._p1) || 0),
                  this._p2 = a / this._p2
              },
              !0),
              n = r.prototype = new t;
            return n.constructor = r,
              n.getRatio = i,
              n.config = function (t, e) {
                return new r(t, e)
              },
              r
          },
          u("Elastic", s("ElasticOut",
            function (t) {
              return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * this._p2) + 1
            },
            .3), s("ElasticIn",
              function (t) {
                return - this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2)
              },
              .3), s("ElasticInOut",
                function (t) {
                  return (t *= 2) < 1 ? this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * -.5 : this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * .5 + 1
                },
                .45)),
          u("Expo", h("ExpoOut",
            function (t) {
              return 1 - Math.pow(2, -10 * t)
            }), h("ExpoIn",
              function (t) {
                return Math.pow(2, 10 * (t - 1)) - .001
              }), h("ExpoInOut",
                function (t) {
                  return (t *= 2) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
                })),
          u("Sine", h("SineOut",
            function (t) {
              return Math.sin(t * o)
            }), h("SineIn",
              function (t) {
                return 1 - Math.cos(t * o)
              }), h("SineInOut",
                function (t) {
                  return - .5 * (Math.cos(Math.PI * t) - 1)
                })),
          l("easing.EaseLookup", {
            find: function (e) {
              return t.map[e]
            }
          },
            !0),
          _(r.SlowMo, "SlowMo", "ease,"),
          _(i, "RoughEase", "ease,"),
          _(e, "SteppedEase", "ease,"),
          p
      },
      !0)
}),
  _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
  function (t, e) {
    "use strict";
    var i = {},
      s = t.GreenSockGlobals = t.GreenSockGlobals || t;
    if (!s.TweenLite) {
      var r, n, a, o, l, h = function (t) {
        var e, i = t.split("."),
          r = s;
        for (e = 0; e < i.length; e++) r[i[e]] = r = r[i[e]] || {};
        return r
      },
        _ = h("com.greensock"),
        u = 1e-10,
        f = function (t) {
          var e, i = [],
            s = t.length;
          for (e = 0; e !== s; i.push(t[e++]));
          return i
        },
        c = function () { },
        p = function () {
          var t = Object.prototype.toString,
            e = t.call([]);
          return function (i) {
            return null != i && (i instanceof Array || "object" == typeof i && !!i.push && t.call(i) === e)
          }
        }(),
        d = {},
        m = function (r, n, a, o) {
          this.sc = d[r] ? d[r].sc : [],
            d[r] = this,
            this.gsClass = null,
            this.func = a;
          var l = [];
          this.check = function (_) {
            for (var u, f, c, p, g, v = n.length,
              y = v; --v > -1;)(u = d[n[v]] || new m(n[v], [])).gsClass ? (l[v] = u.gsClass, y--) : _ && u.sc.push(this);
            if (0 === y && a) {
              if (f = ("com.greensock." + r).split("."), c = f.pop(), p = h(f.join("."))[c] = this.gsClass = a.apply(a, l), o) if (s[c] = i[c] = p, !(g = "undefined" != typeof module && module.exports) && "function" == typeof define && define.amd) define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") + r.split(".").pop(), [],
                function () {
                  return p
                });
              else if (g) if (r === e) {
                module.exports = i[e] = p;
                for (v in i) p[v] = i[v]
              } else i[e] && (i[e][c] = p);
              for (v = 0; v < this.sc.length; v++) this.sc[v].check()
            }
          },
            this.check(!0)
        },
        g = t._gsDefine = function (t, e, i, s) {
          return new m(t, e, i, s)
        },
        v = _._class = function (t, e, i) {
          return e = e ||
            function () { },
            g(t, [],
              function () {
                return e
              },
              i),
            e
        };
      g.globals = s;
      var y = [0, 0, 1, 1],
        T = v("easing.Ease",
          function (t, e, i, s) {
            this._func = t,
              this._type = i || 0,
              this._power = s || 0,
              this._params = e ? y.concat(e) : y
          },
          !0),
        x = T.map = {},
        w = T.register = function (t, e, i, s) {
          for (var r, n, a, o, l = e.split(","), h = l.length, u = (i || "easeIn,easeOut,easeInOut").split(","); --h > -1;) for (n = l[h], r = s ? v("easing." + n, null, !0) : _.easing[n] || {},
            a = u.length; --a > -1;) o = u[a],
              x[n + "." + o] = x[o + n] = r[o] = t.getRatio ? t : t[o] || new t
        };
      for ((a = T.prototype)._calcEnd = !1, a.getRatio = function (t) {
        if (this._func) return this._params[0] = t,
          this._func.apply(null, this._params);
        var e = this._type,
          i = this._power,
          s = 1 === e ? 1 - t : 2 === e ? t : .5 > t ? 2 * t : 2 * (1 - t);
        return 1 === i ? s *= s : 2 === i ? s *= s * s : 3 === i ? s *= s * s * s : 4 === i && (s *= s * s * s * s),
          1 === e ? 1 - s : 2 === e ? s : .5 > t ? s / 2 : 1 - s / 2
      },
        n = (r = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"]).length; --n > -1;) a = r[n] + ",Power" + n,
          w(new T(null, null, 1, n), a, "easeOut", !0),
          w(new T(null, null, 2, n), a, "easeIn" + (0 === n ? ",easeNone" : "")),
          w(new T(null, null, 3, n), a, "easeInOut");
      x.linear = _.easing.Linear.easeIn,
        x.swing = _.easing.Quad.easeInOut;
      var b = v("events.EventDispatcher",
        function (t) {
          this._listeners = {},
            this._eventTarget = t || this
        }); (a = b.prototype).addEventListener = function (t, e, i, s, r) {
          r = r || 0;
          var n, a, h = this._listeners[t],
            _ = 0;
          for (this !== o || l || o.wake(), null == h && (this._listeners[t] = h = []), a = h.length; --a > -1;)(n = h[a]).c === e && n.s === i ? h.splice(a, 1) : 0 === _ && n.pr < r && (_ = a + 1);
          h.splice(_, 0, {
            c: e,
            s: i,
            up: s,
            pr: r
          })
        },
          a.removeEventListener = function (t, e) {
            var i, s = this._listeners[t];
            if (s) for (i = s.length; --i > -1;) if (s[i].c === e) return void s.splice(i, 1)
          },
          a.dispatchEvent = function (t) {
            var e, i, s, r = this._listeners[t];
            if (r) for ((e = r.length) > 1 && (r = r.slice(0)), i = this._eventTarget; --e > -1;)(s = r[e]) && (s.up ? s.c.call(s.s || i, {
              type: t,
              target: i
            }) : s.c.call(s.s || i))
          };
      var P = t.requestAnimationFrame,
        O = t.cancelAnimationFrame,
        k = Date.now ||
          function () {
            return (new Date).getTime()
          },
        S = k();
      for (n = (r = ["ms", "moz", "webkit", "o"]).length; --n > -1 && !P;) P = t[r[n] + "RequestAnimationFrame"],
        O = t[r[n] + "CancelAnimationFrame"] || t[r[n] + "CancelRequestAnimationFrame"];
      v("Ticker",
        function (t, e) {
          var i, s, r, n, a, h = this,
            _ = k(),
            f = !(!1 === e || !P) && "auto",
            p = 500,
            d = 33,
            m = function (t) {
              var e, o, l = k() - S;
              l > p && (_ += l - d),
                S += l,
                h.time = (S - _) / 1e3,
                e = h.time - a,
                (!i || e > 0 || !0 === t) && (h.frame++ , a += e + (e >= n ? .004 : n - e), o = !0),
                !0 !== t && (r = s(m)),
                o && h.dispatchEvent("tick")
            };
          b.call(h),
            h.time = h.frame = 0,
            h.tick = function () {
              m(!0)
            },
            h.lagSmoothing = function (t, e) {
              p = t || 1 / u,
                d = Math.min(e, p, 0)
            },
            h.sleep = function () {
              null != r && (f && O ? O(r) : clearTimeout(r), s = c, r = null, h === o && (l = !1))
            },
            h.wake = function (t) {
              null !== r ? h.sleep() : t ? _ += -S + (S = k()) : h.frame > 10 && (S = k() - p + 5),
                s = 0 === i ? c : f && P ? P : function (t) {
                  return setTimeout(t, 1e3 * (a - h.time) + 1 | 0)
                },
                h === o && (l = !0),
                m(2)
            },
            h.fps = function (t) {
              return arguments.length ? (i = t, n = 1 / (i || 60), a = this.time + n, void h.wake()) : i
            },
            h.useRAF = function (t) {
              return arguments.length ? (h.sleep(), f = t, void h.fps(i)) : f
            },
            h.fps(t),
            setTimeout(function () {
              "auto" === f && h.frame < 5 && "hidden" !== document.visibilityState && h.useRAF(!1)
            },
              1500)
        }),
        (a = _.Ticker.prototype = new _.events.EventDispatcher).constructor = _.Ticker;
      var R = v("core.Animation",
        function (t, e) {
          if (this.vars = e = e || {},
            this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = !0 === e.immediateRender, this.data = e.data, this._reversed = !0 === e.reversed, Z) {
            l || o.wake();
            var i = this.vars.useFrames ? W : Z;
            i.add(this, i._time),
              this.vars.paused && this.paused(!0)
          }
        });
      o = R.ticker = new _.Ticker,
        (a = R.prototype)._dirty = a._gc = a._initted = a._paused = !1,
        a._totalTime = a._time = 0,
        a._rawPrevTime = -1,
        a._next = a._last = a._onUpdate = a._timeline = a.timeline = null,
        a._paused = !1;
      var A = function () {
        l && k() - S > 2e3 && o.wake(),
          setTimeout(A, 2e3)
      };
      A(),
        a.play = function (t, e) {
          return null != t && this.seek(t, e),
            this.reversed(!1).paused(!1)
        },
        a.pause = function (t, e) {
          return null != t && this.seek(t, e),
            this.paused(!0)
        },
        a.resume = function (t, e) {
          return null != t && this.seek(t, e),
            this.paused(!1)
        },
        a.seek = function (t, e) {
          return this.totalTime(Number(t), !1 !== e)
        },
        a.restart = function (t, e) {
          return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, !1 !== e, !0)
        },
        a.reverse = function (t, e) {
          return null != t && this.seek(t || this.totalDuration(), e),
            this.reversed(!0).paused(!1)
        },
        a.render = function (t, e, i) { },
        a.invalidate = function () {
          return this._time = this._totalTime = 0,
            this._initted = this._gc = !1,
            this._rawPrevTime = -1,
            (this._gc || !this.timeline) && this._enabled(!0),
            this
        },
        a.isActive = function () {
          var t, e = this._timeline,
            i = this._startTime;
          return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime()) >= i && t < i + this.totalDuration() / this._timeScale
        },
        a._enabled = function (t, e) {
          return l || o.wake(),
            this._gc = !t,
            this._active = this.isActive(),
            !0 !== e && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)),
            !1
        },
        a._kill = function (t, e) {
          return this._enabled(!1, !1)
        },
        a.kill = function (t, e) {
          return this._kill(t, e),
            this
        },
        a._uncache = function (t) {
          for (var e = t ? this : this.timeline; e;) e._dirty = !0,
            e = e.timeline;
          return this
        },
        a._swapSelfInParams = function (t) {
          for (var e = t.length,
            i = t.concat(); --e > -1;)"{self}" === t[e] && (i[e] = this);
          return i
        },
        a._callback = function (t) {
          var e = this.vars,
            i = e[t],
            s = e[t + "Params"],
            r = e[t + "Scope"] || e.callbackScope || this;
          switch (s ? s.length : 0) {
            case 0:
              i.call(r);
              break;
            case 1:
              i.call(r, s[0]);
              break;
            case 2:
              i.call(r, s[0], s[1]);
              break;
            default:
              i.apply(r, s)
          }
        },
        a.eventCallback = function (t, e, i, s) {
          if ("on" === (t || "").substr(0, 2)) {
            var r = this.vars;
            if (1 === arguments.length) return r[t];
            null == e ? delete r[t] : (r[t] = e, r[t + "Params"] = p(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, r[t + "Scope"] = s),
              "onUpdate" === t && (this._onUpdate = e)
          }
          return this
        },
        a.delay = function (t) {
          return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
        },
        a.duration = function (t) {
          return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
        },
        a.totalDuration = function (t) {
          return this._dirty = !1,
            arguments.length ? this.duration(t) : this._totalDuration
        },
        a.time = function (t, e) {
          return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
        },
        a.totalTime = function (t, e, i) {
          if (l || o.wake(), !arguments.length) return this._totalTime;
          if (this._timeline) {
            if (0 > t && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
              this._dirty && this.totalDuration();
              var s = this._totalDuration,
                r = this._timeline;
              if (t > s && !i && (t = s), this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? s - t : t) / this._timeScale, r._dirty || this._uncache(!1), r._timeline) for (; r._timeline;) r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0),
                r = r._timeline
            }
            this._gc && this._enabled(!0, !1),
              (this._totalTime !== t || 0 === this._duration) && (z.length && $(), this.render(t, e, !1), z.length && $())
          }
          return this
        },
        a.progress = a.totalProgress = function (t, e) {
          var i = this.duration();
          return arguments.length ? this.totalTime(i * t, e) : i ? this._time / i : this.ratio
        },
        a.startTime = function (t) {
          return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
        },
        a.endTime = function (t) {
          return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
        },
        a.timeScale = function (t) {
          if (!arguments.length) return this._timeScale;
          if (t = t || u, this._timeline && this._timeline.smoothChildTiming) {
            var e = this._pauseTime,
              i = e || 0 === e ? e : this._timeline.totalTime();
            this._startTime = i - (i - this._startTime) * this._timeScale / t
          }
          return this._timeScale = t,
            this._uncache(!1)
        },
        a.reversed = function (t) {
          return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
        },
        a.paused = function (t) {
          if (!arguments.length) return this._paused;
          var e, i, s = this._timeline;
          return t != this._paused && s && (l || t || o.wake(), e = s.rawTime(), i = e - this._pauseTime, !t && s.smoothChildTiming && (this._startTime += i, this._uncache(!1)), this._pauseTime = t ? e : null, this._paused = t, this._active = this.isActive(), !t && 0 !== i && this._initted && this.duration() && (e = s.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale, this.render(e, e === this._totalTime, !0))),
            this._gc && !t && this._enabled(!0, !1),
            this
        };
      var C = v("core.SimpleTimeline",
        function (t) {
          R.call(this, 0, t),
            this.autoRemoveChildren = this.smoothChildTiming = !0
        }); (a = C.prototype = new R).constructor = C,
          a.kill()._gc = !1,
          a._first = a._last = a._recent = null,
          a._sortChildren = !1,
          a.add = a.insert = function (t, e, i, s) {
            var r, n;
            if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), r = this._last, this._sortChildren) for (n = t._startTime; r && r._startTime > n;) r = r._prev;
            return r ? (t._next = r._next, r._next = t) : (t._next = this._first, this._first = t),
              t._next ? t._next._prev = t : this._last = t,
              t._prev = r,
              this._recent = t,
              this._timeline && this._uncache(!0),
              this
          },
          a._remove = function (t, e) {
            return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)),
              this
          },
          a.render = function (t, e, i) {
            var s, r = this._first;
            for (this._totalTime = this._time = this._rawPrevTime = t; r;) s = r._next,
              (r._active || t >= r._startTime && !r._paused) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)),
              r = s
          },
          a.rawTime = function () {
            return l || o.wake(),
              this._totalTime
          };
      var D = v("TweenLite",
        function (e, i, s) {
          if (R.call(this, i, s), this.render = D.prototype.render, null == e) throw "Cannot tween a null target.";
          this.target = e = "string" != typeof e ? e : D.selector(e) || e;
          var r, n, a, o = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType),
            l = this.vars.overwrite;
          if (this._overwrite = l = null == l ? q[D.defaultOverwrite] : "number" == typeof l ? l >> 0 : q[l], (o || e instanceof Array || e.push && p(e)) && "number" != typeof e[0]) for (this._targets = a = f(e), this._propLookup = [], this._siblings = [], r = 0; r < a.length; r++)(n = a[r]) ? "string" != typeof n ? n.length && n !== t && n[0] && (n[0] === t || n[0].nodeType && n[0].style && !n.nodeType) ? (a.splice(r--, 1), this._targets = a = a.concat(f(n))) : (this._siblings[r] = Q(n, this, !1), 1 === l && this._siblings[r].length > 1 && K(n, this, null, 1, this._siblings[r])) : "string" == typeof (n = a[r--] = D.selector(n)) && a.splice(r + 1, 1) : a.splice(r--, 1);
          else this._propLookup = {},
            this._siblings = Q(e, this, !1),
            1 === l && this._siblings.length > 1 && K(e, this, null, 1, this._siblings); (this.vars.immediateRender || 0 === i && 0 === this._delay && !1 !== this.vars.immediateRender) && (this._time = -u, this.render(Math.min(0, -this._delay)))
        },
        !0),
        M = function (e) {
          return e && e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType)
        },
        F = function (t, e) {
          var i, s = {};
          for (i in t) V[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!B[i] || B[i] && B[i]._autoCSS) || (s[i] = t[i], delete t[i]);
          t.css = s
        }; (a = D.prototype = new R).constructor = D,
          a.kill()._gc = !1,
          a.ratio = 0,
          a._firstPT = a._targets = a._overwrittenProps = a._startAt = null,
          a._notifyPluginsOfEnabled = a._lazy = !1,
          D.version = "1.19.0",
          D.defaultEase = a._ease = new T(null, null, 1, 1),
          D.defaultOverwrite = "auto",
          D.ticker = o,
          D.autoSleep = 120,
          D.lagSmoothing = function (t, e) {
            o.lagSmoothing(t, e)
          },
          D.selector = t.$ || t.jQuery ||
          function (e) {
            var i = t.$ || t.jQuery;
            return i ? (D.selector = i, i(e)) : "undefined" == typeof document ? e : document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById("#" === e.charAt(0) ? e.substr(1) : e)
          };
      var z = [],
        X = {},
        I = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
        N = function (t) {
          for (var e, i = this._firstPT; i;) e = i.blob ? t ? this.join("") : this.start : i.c * t + i.s,
            i.m ? e = i.m(e, this._target || i.t) : 1e-6 > e && e > -1e-6 && (e = 0),
            i.f ? i.fp ? i.t[i.p](i.fp, e) : i.t[i.p](e) : i.t[i.p] = e,
            i = i._next
        },
        L = function (t, e, i, s) {
          var r, n, a, o, l, h, _, u = [t, e],
            f = 0,
            c = "",
            p = 0;
          for (u.start = t, i && (i(u), t = u[0], e = u[1]), u.length = 0, r = t.match(I) || [], n = e.match(I) || [], s && (s._next = null, s.blob = 1, u._firstPT = u._applyPT = s), l = n.length, o = 0; l > o; o++) _ = n[o],
            h = e.substr(f, e.indexOf(_, f) - f),
            c += h || !o ? h : ",",
            f += h.length,
            p ? p = (p + 1) % 5 : "rgba(" === h.substr(- 5) && (p = 1),
            _ === r[o] || r.length <= o ? c += _ : (c && (u.push(c), c = ""), a = parseFloat(r[o]), u.push(a), u._firstPT = {
              _next: u._firstPT,
              t: u,
              p: u.length - 1,
              s: a,
              c: ("=" === _.charAt(1) ? parseInt(_.charAt(0) + "1", 10) * parseFloat(_.substr(2)) : parseFloat(_) - a) || 0,
              f: 0,
              m: p && 4 > p ? Math.round : 0
            }),
            f += _.length;
          return (c += e.substr(f)) && u.push(c),
            u.setRatio = N,
            u
        },
        E = function (t, e, i, s, r, n, a, o, l) {
          "function" == typeof s && (s = s(l || 0, t));
          var h, _, u = "get" === i ? t[e] : i,
            f = typeof t[e],
            c = "string" == typeof s && "=" === s.charAt(1),
            p = {
              t: t,
              p: e,
              s: u,
              f: "function" === f,
              pg: 0,
              n: r || e,
              m: n ? "function" == typeof n ? n : Math.round : 0,
              pr: 0,
              c: c ? parseInt(s.charAt(0) + "1", 10) * parseFloat(s.substr(2)) : parseFloat(s) - u || 0
            };
          return "number" !== f && ("function" === f && "get" === i && (_ = e.indexOf("set") || "function" != typeof t["get" + e.substr(3)] ? e : "get" + e.substr(3), p.s = u = a ? t[_](a) : t[_]()), "string" == typeof u && (a || isNaN(u)) ? (p.fp = a, h = L(u, s, o || D.defaultStringFilter, p), p = {
            t: h,
            p: "setRatio",
            s: 0,
            c: 1,
            f: 2,
            pg: 0,
            n: r || e,
            pr: 0,
            m: 0
          }) : c || (p.s = parseFloat(u), p.c = parseFloat(s) - p.s || 0)),
            p.c ? ((p._next = this._firstPT) && (p._next._prev = p), this._firstPT = p, p) : void 0
        },
        Y = D._internals = {
          isArray: p,
          isSelector: M,
          lazyTweens: z,
          blobDif: L
        },
        B = D._plugins = {},
        j = Y.tweenLookup = {},
        U = 0,
        V = Y.reservedProps = {
          ease: 1,
          delay: 1,
          overwrite: 1,
          onComplete: 1,
          onCompleteParams: 1,
          onCompleteScope: 1,
          useFrames: 1,
          runBackwards: 1,
          startAt: 1,
          onUpdate: 1,
          onUpdateParams: 1,
          onUpdateScope: 1,
          onStart: 1,
          onStartParams: 1,
          onStartScope: 1,
          onReverseComplete: 1,
          onReverseCompleteParams: 1,
          onReverseCompleteScope: 1,
          onRepeat: 1,
          onRepeatParams: 1,
          onRepeatScope: 1,
          easeParams: 1,
          yoyo: 1,
          immediateRender: 1,
          repeat: 1,
          repeatDelay: 1,
          data: 1,
          paused: 1,
          reversed: 1,
          autoCSS: 1,
          lazy: 1,
          onOverwrite: 1,
          callbackScope: 1,
          stringFilter: 1,
          id: 1
        },
        q = {
          none: 0,
          all: 1,
          auto: 2,
          concurrent: 3,
          allOnStart: 4,
          preexisting: 5,
          true: 1,
          false: 0
        },
        W = R._rootFramesTimeline = new C,
        Z = R._rootTimeline = new C,
        G = 30,
        $ = Y.lazyRender = function () {
          var t, e = z.length;
          for (X = {}; --e > -1;)(t = z[e]) && !1 !== t._lazy && (t.render(t._lazy[0], t._lazy[1], !0), t._lazy = !1);
          z.length = 0
        };
      Z._startTime = o.time,
        W._startTime = o.frame,
        Z._active = W._active = !0,
        setTimeout($, 1),
        R._updateRoot = D.render = function () {
          var t, e, i;
          if (z.length && $(), Z.render((o.time - Z._startTime) * Z._timeScale, !1, !1), W.render((o.frame - W._startTime) * W._timeScale, !1, !1), z.length && $(), o.frame >= G) {
            G = o.frame + (parseInt(D.autoSleep, 10) || 120);
            for (i in j) {
              for (t = (e = j[i].tweens).length; --t > -1;) e[t]._gc && e.splice(t, 1);
              0 === e.length && delete j[i]
            }
            if ((!(i = Z._first) || i._paused) && D.autoSleep && !W._first && 1 === o._listeners.tick.length) {
              for (; i && i._paused;) i = i._next;
              i || o.sleep()
            }
          }
        },
        o.addEventListener("tick", R._updateRoot);
      var Q = function (t, e, i) {
        var s, r, n = t._gsTweenID;
        if (j[n || (t._gsTweenID = n = "t" + U++)] || (j[n] = {
          target: t,
          tweens: []
        }), e && (s = j[n].tweens, s[r = s.length] = e, i)) for (; --r > -1;) s[r] === e && s.splice(r, 1);
        return j[n].tweens
      },
        H = function (t, e, i, s) {
          var r, n, a = t.vars.onOverwrite;
          return a && (r = a(t, e, i, s)),
            (a = D.onOverwrite) && (n = a(t, e, i, s)),
            !1 !== r && !1 !== n
        },
        K = function (t, e, i, s, r) {
          var n, a, o, l;
          if (1 === s || s >= 4) {
            for (l = r.length, n = 0; l > n; n++) if ((o = r[n]) !== e) o._gc || o._kill(null, t, e) && (a = !0);
            else if (5 === s) break;
            return a
          }
          var h, _ = e._startTime + u,
            f = [],
            c = 0,
            p = 0 === e._duration;
          for (n = r.length; --n > -1;)(o = r[n]) === e || o._gc || o._paused || (o._timeline !== e._timeline ? (h = h || J(e, 0, p), 0 === J(o, h, p) && (f[c++] = o)) : o._startTime <= _ && o._startTime + o.totalDuration() / o._timeScale > _ && ((p || !o._initted) && _ - o._startTime <= 2e-10 || (f[c++] = o)));
          for (n = c; --n > -1;) if (o = f[n], 2 === s && o._kill(i, t, e) && (a = !0), 2 !== s || !o._firstPT && o._initted) {
            if (2 !== s && !H(o, e)) continue;
            o._enabled(!1, !1) && (a = !0)
          }
          return a
        },
        J = function (t, e, i) {
          for (var s = t._timeline,
            r = s._timeScale,
            n = t._startTime; s._timeline;) {
            if (n += s._startTime, r *= s._timeScale, s._paused) return - 100;
            s = s._timeline
          }
          return (n /= r) > e ? n - e : i && n === e || !t._initted && 2 * u > n - e ? u : (n += t.totalDuration() / t._timeScale / r) > e + u ? 0 : n - e - u
        };
      a._init = function () {
        var t, e, i, s, r, n, a = this.vars,
          o = this._overwrittenProps,
          l = this._duration,
          h = !!a.immediateRender,
          _ = a.ease;
        if (a.startAt) {
          this._startAt && (this._startAt.render(- 1, !0), this._startAt.kill()),
            r = {};
          for (s in a.startAt) r[s] = a.startAt[s];
          if (r.overwrite = !1, r.immediateRender = !0, r.lazy = h && !1 !== a.lazy, r.startAt = r.delay = null, this._startAt = D.to(this.target, 0, r), h) if (this._time > 0) this._startAt = null;
          else if (0 !== l) return
        } else if (a.runBackwards && 0 !== l) if (this._startAt) this._startAt.render(- 1, !0),
          this._startAt.kill(),
          this._startAt = null;
        else {
          0 !== this._time && (h = !1),
            i = {};
          for (s in a) V[s] && "autoCSS" !== s || (i[s] = a[s]);
          if (i.overwrite = 0, i.data = "isFromStart", i.lazy = h && !1 !== a.lazy, i.immediateRender = h, this._startAt = D.to(this.target, 0, i), h) {
            if (0 === this._time) return
          } else this._startAt._init(),
            this._startAt._enabled(!1),
            this.vars.immediateRender && (this._startAt = null)
        }
        if (this._ease = _ = _ ? _ instanceof T ? _ : "function" == typeof _ ? new T(_, a.easeParams) : x[_] || D.defaultEase : D.defaultEase, a.easeParams instanceof Array && _.config && (this._ease = _.config.apply(_, a.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets) for (n = this._targets.length, t = 0; n > t; t++) this._initProps(this._targets[t], this._propLookup[t] = {},
          this._siblings[t], o ? o[t] : null, t) && (e = !0);
        else e = this._initProps(this.target, this._propLookup, this._siblings, o, 0);
        if (e && D._onPluginEvent("_onInitAllProps", this), o && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), a.runBackwards) for (i = this._firstPT; i;) i.s += i.c,
          i.c = -i.c,
          i = i._next;
        this._onUpdate = a.onUpdate,
          this._initted = !0
      },
        a._initProps = function (e, i, s, r, n) {
          var a, o, l, h, _, u;
          if (null == e) return !1;
          X[e._gsTweenID] && $(),
            this.vars.css || e.style && e !== t && e.nodeType && B.css && !1 !== this.vars.autoCSS && F(this.vars, e);
          for (a in this.vars) if (u = this.vars[a], V[a]) u && (u instanceof Array || u.push && p(u)) && -1 !== u.join("").indexOf("{self}") && (this.vars[a] = u = this._swapSelfInParams(u, this));
          else if (B[a] && (h = new B[a])._onInitTween(e, this.vars[a], this, n)) {
            for (this._firstPT = _ = {
              _next: this._firstPT,
              t: h,
              p: "setRatio",
              s: 0,
              c: 1,
              f: 1,
              n: a,
              pg: 1,
              pr: h._priority,
              m: 0
            },
              o = h._overwriteProps.length; --o > -1;) i[h._overwriteProps[o]] = this._firstPT; (h._priority || h._onInitAllProps) && (l = !0),
                (h._onDisable || h._onEnable) && (this._notifyPluginsOfEnabled = !0),
                _._next && (_._next._prev = _)
          } else i[a] = E.call(this, e, a, "get", u, a, 0, null, this.vars.stringFilter, n);
          return r && this._kill(r, e) ? this._initProps(e, i, s, r, n) : this._overwrite > 1 && this._firstPT && s.length > 1 && K(e, this, i, this._overwrite, s) ? (this._kill(i, e), this._initProps(e, i, s, r, n)) : (this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration) && (X[e._gsTweenID] = !0), l)
        },
        a.render = function (t, e, i) {
          var s, r, n, a, o = this._time,
            l = this._duration,
            h = this._rawPrevTime;
          if (t >= l - 1e-7) this._totalTime = this._time = l,
            this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1,
            this._reversed || (s = !0, r = "onComplete", i = i || this._timeline.autoRemoveChildren),
            0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 > h || 0 >= t && t >= -1e-7 || h === u && "isPause" !== this.data) && h !== t && (i = !0, h > u && (r = "onReverseComplete")), this._rawPrevTime = a = !e || t || h === t ? t : u);
          else if (1e-7 > t) this._totalTime = this._time = 0,
            this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0,
            (0 !== o || 0 === l && h > 0) && (r = "onReverseComplete", s = this._reversed),
            0 > t && (this._active = !1, 0 === l && (this._initted || !this.vars.lazy || i) && (h >= 0 && (h !== u || "isPause" !== this.data) && (i = !0), this._rawPrevTime = a = !e || t || h === t ? t : u)),
            this._initted || (i = !0);
          else if (this._totalTime = this._time = t, this._easeType) {
            var _ = t / l,
              f = this._easeType,
              c = this._easePower; (1 === f || 3 === f && _ >= .5) && (_ = 1 - _),
                3 === f && (_ *= 2),
                1 === c ? _ *= _ : 2 === c ? _ *= _ * _ : 3 === c ? _ *= _ * _ * _ : 4 === c && (_ *= _ * _ * _ * _),
                this.ratio = 1 === f ? 1 - _ : 2 === f ? _ : .5 > t / l ? _ / 2 : 1 - _ / 2
          } else this.ratio = this._ease.getRatio(t / l);
          if (this._time !== o || i) {
            if (!this._initted) {
              if (this._init(), !this._initted || this._gc) return;
              if (!i && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = o,
                this._rawPrevTime = h,
                z.push(this),
                void (this._lazy = [t, e]);
              this._time && !s ? this.ratio = this._ease.getRatio(this._time / l) : s && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
            }
            for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== o && t >= 0 && (this._active = !0), 0 === o && (this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === l) && (e || this._callback("onStart"))), n = this._firstPT; n;) n.f ? n.t[n.p](n.c * this.ratio + n.s) : n.t[n.p] = n.c * this.ratio + n.s,
              n = n._next;
            this._onUpdate && (0 > t && this._startAt && -1e-4 !== t && this._startAt.render(t, e, i), e || (this._time !== o || s || i) && this._callback("onUpdate")),
              r && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && -1e-4 !== t && this._startAt.render(t, e, i), s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this._callback(r), 0 === l && this._rawPrevTime === u && a !== u && (this._rawPrevTime = 0))
          }
        },
        a._kill = function (t, e, i) {
          if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._lazy = !1,
            this._enabled(!1, !1);
          e = "string" != typeof e ? e || this._targets || this.target : D.selector(e) || e;
          var s, r, n, a, o, l, h, _, u, f = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline;
          if ((p(e) || M(e)) && "number" != typeof e[0]) for (s = e.length; --s > -1;) this._kill(t, e[s], i) && (l = !0);
          else {
            if (this._targets) {
              for (s = this._targets.length; --s > -1;) if (e === this._targets[s]) {
                o = this._propLookup[s] || {},
                  this._overwrittenProps = this._overwrittenProps || [],
                  r = this._overwrittenProps[s] = t ? this._overwrittenProps[s] || {} : "all";
                break
              }
            } else {
              if (e !== this.target) return !1;
              o = this._propLookup,
                r = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
            }
            if (o) {
              if (h = t || o, _ = t !== r && "all" !== r && t !== o && ("object" != typeof t || !t._tempKill), i && (D.onOverwrite || this.vars.onOverwrite)) {
                for (n in h) o[n] && (u || (u = []), u.push(n));
                if ((u || !t) && !H(this, i, e, u)) return !1
              }
              for (n in h) (a = o[n]) && (f && (a.f ? a.t[a.p](a.s) : a.t[a.p] = a.s, l = !0), a.pg && a.t._kill(h) && (l = !0), a.pg && 0 !== a.t._overwriteProps.length || (a._prev ? a._prev._next = a._next : a === this._firstPT && (this._firstPT = a._next), a._next && (a._next._prev = a._prev), a._next = a._prev = null), delete o[n]),
                _ && (r[n] = 1); !this._firstPT && this._initted && this._enabled(!1, !1)
            }
          }
          return l
        },
        a.invalidate = function () {
          return this._notifyPluginsOfEnabled && D._onPluginEvent("_onDisable", this),
            this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null,
            this._notifyPluginsOfEnabled = this._active = this._lazy = !1,
            this._propLookup = this._targets ? {} : [],
            R.prototype.invalidate.call(this),
            this.vars.immediateRender && (this._time = -u, this.render(Math.min(0, -this._delay))),
            this
        },
        a._enabled = function (t, e) {
          if (l || o.wake(), t && this._gc) {
            var i, s = this._targets;
            if (s) for (i = s.length; --i > -1;) this._siblings[i] = Q(s[i], this, !0);
            else this._siblings = Q(this.target, this, !0)
          }
          return R.prototype._enabled.call(this, t, e),
            !(!this._notifyPluginsOfEnabled || !this._firstPT) && D._onPluginEvent(t ? "_onEnable" : "_onDisable", this)
        },
        D.to = function (t, e, i) {
          return new D(t, e, i)
        },
        D.from = function (t, e, i) {
          return i.runBackwards = !0,
            i.immediateRender = 0 != i.immediateRender,
            new D(t, e, i)
        },
        D.fromTo = function (t, e, i, s) {
          return s.startAt = i,
            s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender,
            new D(t, e, s)
        },
        D.delayedCall = function (t, e, i, s, r) {
          return new D(e, 0, {
            delay: t,
            onComplete: e,
            onCompleteParams: i,
            callbackScope: s,
            onReverseComplete: e,
            onReverseCompleteParams: i,
            immediateRender: !1,
            lazy: !1,
            useFrames: r,
            overwrite: 0
          })
        },
        D.set = function (t, e) {
          return new D(t, 0, e)
        },
        D.getTweensOf = function (t, e) {
          if (null == t) return [];
          t = "string" != typeof t ? t : D.selector(t) || t;
          var i, s, r, n;
          if ((p(t) || M(t)) && "number" != typeof t[0]) {
            for (i = t.length, s = []; --i > -1;) s = s.concat(D.getTweensOf(t[i], e));
            for (i = s.length; --i > -1;) for (n = s[i], r = i; --r > -1;) n === s[r] && s.splice(i, 1)
          } else for (s = Q(t).concat(), i = s.length; --i > -1;)(s[i]._gc || e && !s[i].isActive()) && s.splice(i, 1);
          return s
        },
        D.killTweensOf = D.killDelayedCallsTo = function (t, e, i) {
          "object" == typeof e && (i = e, e = !1);
          for (var s = D.getTweensOf(t, e), r = s.length; --r > -1;) s[r]._kill(i, t)
        };
      var tt = v("plugins.TweenPlugin",
        function (t, e) {
          this._overwriteProps = (t || "").split(","),
            this._propName = this._overwriteProps[0],
            this._priority = e || 0,
            this._super = tt.prototype
        },
        !0);
      if (a = tt.prototype, tt.version = "1.19.0", tt.API = 2, a._firstPT = null, a._addTween = E, a.setRatio = N, a._kill = function (t) {
        var e, i = this._overwriteProps,
          s = this._firstPT;
        if (null != t[this._propName]) this._overwriteProps = [];
        else for (e = i.length; --e > -1;) null != t[i[e]] && i.splice(e, 1);
        for (; s;) null != t[s.n] && (s._next && (s._next._prev = s._prev), s._prev ? (s._prev._next = s._next, s._prev = null) : this._firstPT === s && (this._firstPT = s._next)),
          s = s._next;
        return !1
      },
        a._mod = a._roundProps = function (t) {
          for (var e, i = this._firstPT; i;)(e = t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && "function" == typeof e && (2 === i.f ? i.t._applyPT.m = e : i.m = e),
            i = i._next
        },
        D._onPluginEvent = function (t, e) {
          var i, s, r, n, a, o = e._firstPT;
          if ("_onInitAllProps" === t) {
            for (; o;) {
              for (a = o._next, s = r; s && s.pr > o.pr;) s = s._next; (o._prev = s ? s._prev : n) ? o._prev._next = o : r = o,
                (o._next = s) ? s._prev = o : n = o,
                o = a
            }
            o = e._firstPT = r
          }
          for (; o;) o.pg && "function" == typeof o.t[t] && o.t[t]() && (i = !0),
            o = o._next;
          return i
        },
        tt.activate = function (t) {
          for (var e = t.length; --e > -1;) t[e].API === tt.API && (B[(new t[e])._propName] = t[e]);
          return !0
        },
        g.plugin = function (t) {
          if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
          var e, i = t.propName,
            s = t.priority || 0,
            r = t.overwriteProps,
            n = {
              init: "_onInitTween",
              set: "setRatio",
              kill: "_kill",
              round: "_mod",
              mod: "_mod",
              initAll: "_onInitAllProps"
            },
            a = v("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin",
              function () {
                tt.call(this, i, s),
                  this._overwriteProps = r || []
              },
              !0 === t.global),
            o = a.prototype = new tt(i);
          o.constructor = a,
            a.API = t.API;
          for (e in n) "function" == typeof t[e] && (o[n[e]] = t[e]);
          return a.version = t.version,
            tt.activate([a]),
            a
        },
        r = t._gsQueue) {
        for (n = 0; n < r.length; n++) r[n]();
        for (a in d) d[a].func || t.console.log("GSAP encountered missing dependency: " + a)
      }
      l = !1
    }
  }("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenMax");