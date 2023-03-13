const n=JSON.parse('{"key":"v-196f1d75","path":"/code/grpc/gin.html","title":"grpc和gin同时作为服务器","lang":"zh-CN","frontmatter":{"title":"grpc和gin同时作为服务器","icon":"golang","category":["代码"],"tag":["Go","gRPC","gin"],"date":"2023-03-13T00:00:00.000Z","description":"是这样的，我想让我的Gin后端同时也作为gRPC的provider 那么在一个程序中监听两个端口这个时候就出问题了 package main import ( \\t\\"mio-api/routes\\" \\t\\"mio-api/server\\" ) func main() { \\t// 启动rpc服务器 \\tserver.StartRPC() \\t// 启动gin服务器 \\troutes.StartGin() }","head":[["meta",{"property":"og:url","content":"https://miomiora.github.io/mio-blog/code/grpc/gin.html"}],["meta",{"property":"og:site_name","content":"Miomiorαのβ1og"}],["meta",{"property":"og:title","content":"grpc和gin同时作为服务器"}],["meta",{"property":"og:description","content":"是这样的，我想让我的Gin后端同时也作为gRPC的provider 那么在一个程序中监听两个端口这个时候就出问题了 package main import ( \\t\\"mio-api/routes\\" \\t\\"mio-api/server\\" ) func main() { \\t// 启动rpc服务器 \\tserver.StartRPC() \\t// 启动gin服务器 \\troutes.StartGin() }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-03-13T02:29:59.000Z"}],["meta",{"property":"article:tag","content":"Go"}],["meta",{"property":"article:tag","content":"gRPC"}],["meta",{"property":"article:tag","content":"gin"}],["meta",{"property":"article:published_time","content":"2023-03-13T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-03-13T02:29:59.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"grpc和gin同时作为服务器\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-03-13T00:00:00.000Z\\",\\"dateModified\\":\\"2023-03-13T02:29:59.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"createdTime":1678674599000,"updatedTime":1678674599000,"contributors":[{"name":"miomiora","email":"1729089090@qq.com","commits":1}]},"readingTime":{"minutes":0.79,"words":237},"filePathRelative":"code/grpc/gin.md","localizedDate":"2023年3月13日","excerpt":"<p>是这样的，我想让我的<code>Gin</code>后端同时也作为<code>gRPC</code>的<code>provider</code></p>\\n<p>那么在一个程序中监听两个端口这个时候就出问题了</p>\\n<div class=\\"language-go line-numbers-mode\\" data-ext=\\"go\\"><pre class=\\"language-go\\"><code><span class=\\"token keyword\\">package</span> main\\n\\n<span class=\\"token keyword\\">import</span> <span class=\\"token punctuation\\">(</span>\\n\\t<span class=\\"token string\\">\\"mio-api/routes\\"</span>\\n\\t<span class=\\"token string\\">\\"mio-api/server\\"</span>\\n<span class=\\"token punctuation\\">)</span>\\n\\n<span class=\\"token keyword\\">func</span> <span class=\\"token function\\">main</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n\\t<span class=\\"token comment\\">// 启动rpc服务器</span>\\n\\tserver<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">StartRPC</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n\\t<span class=\\"token comment\\">// 启动gin服务器</span>\\n\\troutes<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">StartGin</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};
