const e=JSON.parse('{"key":"v-c82aec48","path":"/code/go/redis.html","title":"Redis无法读写","lang":"zh-CN","frontmatter":{"title":"Redis无法读写","icon":"redis","category":["Go"],"tag":["Go","Redis","包","数据库"],"date":"2023-03-09T00:00:00.000Z","description":"在使用github.com/gomodule/redigo/redis包的时候，从昨天开始就频繁的出现无法访问Redis的状况，经常会报错 write tcp 127.0.0.1:14481-&gt;127.0.0.1:6379: use of closed network connection read tcp 127.0.0.1:14481-&gt;127.0.0.1:6379: use of closed network connection","head":[["meta",{"property":"og:url","content":"https://miomiora.github.io/mio-blog/code/go/redis.html"}],["meta",{"property":"og:site_name","content":"Miomiorαのβ1og"}],["meta",{"property":"og:title","content":"Redis无法读写"}],["meta",{"property":"og:description","content":"在使用github.com/gomodule/redigo/redis包的时候，从昨天开始就频繁的出现无法访问Redis的状况，经常会报错 write tcp 127.0.0.1:14481-&gt;127.0.0.1:6379: use of closed network connection read tcp 127.0.0.1:14481-&gt;127.0.0.1:6379: use of closed network connection"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-03-27T13:30:02.000Z"}],["meta",{"property":"article:tag","content":"Go"}],["meta",{"property":"article:tag","content":"Redis"}],["meta",{"property":"article:tag","content":"包"}],["meta",{"property":"article:tag","content":"数据库"}],["meta",{"property":"article:published_time","content":"2023-03-09T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-03-27T13:30:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Redis无法读写\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-03-09T00:00:00.000Z\\",\\"dateModified\\":\\"2023-03-27T13:30:02.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"createdTime":1678340094000,"updatedTime":1679923802000,"contributors":[{"name":"miomiora","email":"1729089090@qq.com","commits":2}]},"readingTime":{"minutes":0.37,"words":111},"filePathRelative":"code/go/redis.md","localizedDate":"2023年3月9日","excerpt":"<p>在使用<code>github.com/gomodule/redigo/redis</code>包的时候，从昨天开始就频繁的出现无法访问<code>Redis</code>的状况，经常会报错</p>\\n<div class=\\"language-bash\\" data-ext=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token function\\">write</span> tcp <span class=\\"token number\\">127.0</span>.0.1:14481-<span class=\\"token operator\\">&gt;</span><span class=\\"token number\\">127.0</span>.0.1:6379: use of closed network connection\\n<span class=\\"token builtin class-name\\">read</span> tcp <span class=\\"token number\\">127.0</span>.0.1:14481-<span class=\\"token operator\\">&gt;</span><span class=\\"token number\\">127.0</span>.0.1:6379: use of closed network connection\\n</code></pre></div>","autoDesc":true}');export{e as data};