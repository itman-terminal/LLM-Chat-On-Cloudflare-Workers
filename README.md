# LLM-Chat-On-Cloudflare-Workers
<h2>
一个基于<a href=https://workers.cloudflare.com>Cloudflare Workers</a>搭建的LLM模型聊天页面</h2>

演示地址:https://llm-frontend.pages.dev/
<h3>
搭建聊天模型Workers后端
</h3>
将项目下的<a href=https://github.com/itman-terminal/LLM-Chat-On-Cloudflare-Workers/blob/main/workers.js>workers.js</a>文件复制到你的<a href=https://dash.cloudflare.com/sign-up/workers-and-pages>Workers 项目</a>

Tips:你可以通过修改
`'Access-Control-Allow-Origin', '*'`
中的
`*`以限制请求来源防止滥用。
例如，你可以修改为:`'Access-Control-Allow-Origin', 'https://llm-frontend.pages.dev'`，这样就只允许 https://llm-frontend.pages.dev 的请求
<h4>
验证后端
</h4>
在浏览器里输入你的workers项目地址，如果返回

`请在URL中提供问题，例如 ?question=你的问题`则为成功
<h3>
前端
</h3>
下载index.html，将

`llm.itman-terminal.workers.dev`
修改为你的Workers地址，上传，即可完成前端搭建
<h2>缺点</h2>
 - 不能实时查看生成结果
 
 - https://workers.dev 在中国大陆内被ban,无法访问，建议搭配<a href=https://github.com/netptop/siteproxy>Siteproxy</a>使用

 - <s>由于我懒</s>前端简陋
