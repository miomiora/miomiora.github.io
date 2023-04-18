const a=JSON.parse('{"key":"v-13954246","path":"/code/go/map1.html","title":"map","lang":"zh-CN","frontmatter":{"title":"map","icon":"hash","category":["Go"],"tag":["Go","map"],"date":"2023-03-27T00:00:00.000Z","description":"并发问题 主要体现在 runtime.map 的扩容操作中，一个在 扩容 一个在 驱逐 解决方案： 加锁：但会严重影响 map 的性能 使用 sync.Map 使用了两个 map 分离了扩容的问题，数据结构如下 type Map struct { // 锁，主要是锁 dirty map \\tmu Mutex \\t \\t// 不会触发扩容操作（查、改）走这个 read map \\tread atomic.Pointer[readOnly] \\t \\t// 可能引发扩容操作（增）走 dirty map \\tdirty map[any]*entry \\t \\t// 未命中 read map 的计数，如果超过了 len(dirty map) 则会把 dirty map 提升为 read map \\tmisses int } type readOnly struct { // read map 本体 \\tm map[any]*entry \\t \\t// 是否有追加操作，如果为 true 则代表 dirty map 中包含 m 没有的 key \\t// 当 read map 未命中的时候会去 dirty map 查找新值 \\tamended bool }","head":[["meta",{"property":"og:url","content":"https://miomiora.github.io/mio-blog/code/go/map1.html"}],["meta",{"property":"og:site_name","content":"Miomiorαのβ1og"}],["meta",{"property":"og:title","content":"map"}],["meta",{"property":"og:description","content":"并发问题 主要体现在 runtime.map 的扩容操作中，一个在 扩容 一个在 驱逐 解决方案： 加锁：但会严重影响 map 的性能 使用 sync.Map 使用了两个 map 分离了扩容的问题，数据结构如下 type Map struct { // 锁，主要是锁 dirty map \\tmu Mutex \\t \\t// 不会触发扩容操作（查、改）走这个 read map \\tread atomic.Pointer[readOnly] \\t \\t// 可能引发扩容操作（增）走 dirty map \\tdirty map[any]*entry \\t \\t// 未命中 read map 的计数，如果超过了 len(dirty map) 则会把 dirty map 提升为 read map \\tmisses int } type readOnly struct { // read map 本体 \\tm map[any]*entry \\t \\t// 是否有追加操作，如果为 true 则代表 dirty map 中包含 m 没有的 key \\t// 当 read map 未命中的时候会去 dirty map 查找新值 \\tamended bool }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-04-18T12:24:28.000Z"}],["meta",{"property":"article:tag","content":"Go"}],["meta",{"property":"article:tag","content":"map"}],["meta",{"property":"article:published_time","content":"2023-03-27T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-04-18T12:24:28.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"map\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-03-27T00:00:00.000Z\\",\\"dateModified\\":\\"2023-04-18T12:24:28.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"并发问题","slug":"并发问题","link":"#并发问题","children":[]},{"level":2,"title":"无序","slug":"无序","link":"#无序","children":[]}],"git":{"createdTime":1679923802000,"updatedTime":1681820668000,"contributors":[{"name":"miomiora","email":"1729089090@qq.com","commits":4}]},"readingTime":{"minutes":0.81,"words":243},"filePathRelative":"code/go/map1.md","localizedDate":"2023年3月27日","excerpt":"<h2> 并发问题</h2>\\n<p>主要体现在 <code>runtime.map</code> 的扩容操作中，一个在 <code>扩容</code> 一个在 <code>驱逐</code></p>\\n<ul>\\n<li>解决方案：\\n<ol>\\n<li>加锁：但会严重影响 <code>map</code> 的性能</li>\\n<li>使用 <code>sync.Map</code> 使用了两个 <code>map</code> 分离了扩容的问题，数据结构如下</li>\\n</ol>\\n</li>\\n</ul>\\n<div class=\\"language-go line-numbers-mode\\" data-ext=\\"go\\"><pre class=\\"language-go\\"><code><span class=\\"token keyword\\">type</span> Map <span class=\\"token keyword\\">struct</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token comment\\">// 锁，主要是锁 dirty map</span>\\n\\tmu Mutex\\n\\t\\n\\t<span class=\\"token comment\\">// 不会触发扩容操作（查、改）走这个 read map</span>\\n\\tread atomic<span class=\\"token punctuation\\">.</span>Pointer<span class=\\"token punctuation\\">[</span>readOnly<span class=\\"token punctuation\\">]</span>\\n\\t\\n\\t<span class=\\"token comment\\">// 可能引发扩容操作（增）走 dirty map</span>\\n\\tdirty <span class=\\"token keyword\\">map</span><span class=\\"token punctuation\\">[</span>any<span class=\\"token punctuation\\">]</span><span class=\\"token operator\\">*</span>entry\\n\\t\\n\\t<span class=\\"token comment\\">// 未命中 read map 的计数，如果超过了 len(dirty map) 则会把 dirty map 提升为 read map</span>\\n\\tmisses <span class=\\"token builtin\\">int</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token keyword\\">type</span> readOnly <span class=\\"token keyword\\">struct</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token comment\\">// read map 本体</span>\\n\\tm       <span class=\\"token keyword\\">map</span><span class=\\"token punctuation\\">[</span>any<span class=\\"token punctuation\\">]</span><span class=\\"token operator\\">*</span>entry\\n\\t\\n\\t<span class=\\"token comment\\">// 是否有追加操作，如果为 true 则代表 dirty map 中包含 m 没有的 key</span>\\n\\t<span class=\\"token comment\\">// 当 read map 未命中的时候会去 dirty map 查找新值</span>\\n\\tamended <span class=\\"token builtin\\">bool</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{a as data};
