import{_ as e,V as s,W as n,a0 as o}from"./framework-0aae388a.js";const a={},c=o(`<p>在使用<code>github.com/gomodule/redigo/redis</code>包的时候，从昨天开始就频繁的出现无法访问<code>Redis</code>的状况，经常会报错</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">write</span> tcp <span class="token number">127.0</span>.0.1:14481-<span class="token operator">&gt;</span><span class="token number">127.0</span>.0.1:6379: use of closed network connection
<span class="token builtin class-name">read</span> tcp <span class="token number">127.0</span>.0.1:14481-<span class="token operator">&gt;</span><span class="token number">127.0</span>.0.1:6379: use of closed network connection
</code></pre></div><p>百度了一圈好像说<code>go-redis</code>不会出现这种情况，干脆直接改代码用<code>go-redis</code>了。</p>`,3),t=[c];function r(d,p){return s(),n("div",null,t)}const i=e(a,[["render",r],["__file","redis.html.vue"]]);export{i as default};