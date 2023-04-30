const e=JSON.parse('{"key":"v-5d03f1a1","path":"/code/gin/webcli.html","title":"Gin 的 Web 开发脚手架","lang":"zh-CN","frontmatter":{"title":"Gin 的 Web 开发脚手架","icon":"houduankaifa","category":["Gin"],"tag":["Go","Gin","Web","脚手架"],"date":"2023-04-09T00:00:00.000Z","description":"不太行的 前后端分离的项目中，传统的 MVC 架构中的 V 已经被抽离出去 在我之前做的项目中的架构分层都感觉不是很行，在我之前的 mio-api 项目分层如下 │ go.mod │ go.sum │ main.go │ settings.yaml │ ├─api │ │ init.go │ │ │ ├─interfaceApi │ │ create.go │ │ delete.go │ │ init.go │ │ invoke.go │ │ read.go │ │ update.go │ │ utils.go │ │ │ └─userApi │ delete.go │ init.go │ login.go │ read.go │ register.go │ update.go │ utils.go │ ├─config │ gin.go │ init.go │ mysql.go │ redis.go │ ├─database │ init.go │ mysql.go │ redis.go │ ├─middleware │ authAdmin.go │ authUser.go │ cors.go │ refreshToken.go │ ├─model │ interfaceInfo.go │ user.go │ userInterface.go │ ├─routes │ init.go │ interfaceRouter.go │ userRouter.go │ └─utils constant.go isNumber.go regexpString.go response.go validToken.go","head":[["meta",{"property":"og:url","content":"https://miomiora.github.io/mio-blog/code/gin/webcli.html"}],["meta",{"property":"og:site_name","content":"Miomiorαのβ1og"}],["meta",{"property":"og:title","content":"Gin 的 Web 开发脚手架"}],["meta",{"property":"og:description","content":"不太行的 前后端分离的项目中，传统的 MVC 架构中的 V 已经被抽离出去 在我之前做的项目中的架构分层都感觉不是很行，在我之前的 mio-api 项目分层如下 │ go.mod │ go.sum │ main.go │ settings.yaml │ ├─api │ │ init.go │ │ │ ├─interfaceApi │ │ create.go │ │ delete.go │ │ init.go │ │ invoke.go │ │ read.go │ │ update.go │ │ utils.go │ │ │ └─userApi │ delete.go │ init.go │ login.go │ read.go │ register.go │ update.go │ utils.go │ ├─config │ gin.go │ init.go │ mysql.go │ redis.go │ ├─database │ init.go │ mysql.go │ redis.go │ ├─middleware │ authAdmin.go │ authUser.go │ cors.go │ refreshToken.go │ ├─model │ interfaceInfo.go │ user.go │ userInterface.go │ ├─routes │ init.go │ interfaceRouter.go │ userRouter.go │ └─utils constant.go isNumber.go regexpString.go response.go validToken.go"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-04-30T16:53:39.000Z"}],["meta",{"property":"article:tag","content":"Go"}],["meta",{"property":"article:tag","content":"Gin"}],["meta",{"property":"article:tag","content":"Web"}],["meta",{"property":"article:tag","content":"脚手架"}],["meta",{"property":"article:published_time","content":"2023-04-09T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-04-30T16:53:39.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Gin 的 Web 开发脚手架\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-04-09T00:00:00.000Z\\",\\"dateModified\\":\\"2023-04-30T16:53:39.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"不太行的","slug":"不太行的","link":"#不太行的","children":[]},{"level":2,"title":"CLD 分层","slug":"cld-分层","link":"#cld-分层","children":[]},{"level":2,"title":"封装 Response","slug":"封装-response","link":"#封装-response","children":[]},{"level":2,"title":"完整结构","slug":"完整结构","link":"#完整结构","children":[]}],"git":{"createdTime":1681044511000,"updatedTime":1682873619000,"contributors":[{"name":"miomiora","email":"1729089090@qq.com","commits":5}]},"readingTime":{"minutes":3.79,"words":1137},"filePathRelative":"code/gin/webcli.md","localizedDate":"2023年4月9日","excerpt":"<h2> 不太行的</h2>\\n<p>前后端分离的项目中，传统的 <code>MVC</code> 架构中的 <code>V</code> 已经被抽离出去</p>\\n<p>在我之前做的项目中的架构分层都感觉不是很行，在我之前的 <code>mio-api</code> 项目分层如下</p>\\n<div class=\\"language-bash\\" data-ext=\\"sh\\"><pre class=\\"language-bash\\"><code>│  go.mod\\n│  go.sum\\n│  main.go\\n│  settings.yaml\\n│\\n├─api\\n│  │  init.go\\n│  │\\n│  ├─interfaceApi\\n│  │      create.go\\n│  │      delete.go\\n│  │      init.go\\n│  │      invoke.go\\n│  │      read.go\\n│  │      update.go\\n│  │      utils.go\\n│  │\\n│  └─userApi\\n│          delete.go\\n│          init.go\\n│          login.go\\n│          read.go\\n│          register.go\\n│          update.go\\n│          utils.go\\n│\\n├─config\\n│      gin.go\\n│      init.go\\n│      mysql.go\\n│      redis.go\\n│\\n├─database\\n│      init.go\\n│      mysql.go\\n│      redis.go\\n│\\n├─middleware\\n│      authAdmin.go\\n│      authUser.go\\n│      cors.go\\n│      refreshToken.go\\n│\\n├─model\\n│      interfaceInfo.go\\n│      user.go\\n│      userInterface.go\\n│\\n├─routes\\n│      init.go\\n│      interfaceRouter.go\\n│      userRouter.go\\n│\\n└─utils\\n        constant.go\\n        isNumber.go\\n        regexpString.go\\n        response.go\\n        validToken.go\\n</code></pre></div>","autoDesc":true}');export{e as data};
