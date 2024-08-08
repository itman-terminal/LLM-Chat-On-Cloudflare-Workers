export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const question = url.searchParams.get('question');

    if (!question) {
      return new Response('请在URL中提供问题，例如 ?question=你的问题', { status: 400 });
    }

    const tasks = [];
    let simple = { prompt: question };

    try {
      let response = await env.AI.run('@cf/meta/llama-3-8b-instruct', simple);
      tasks.push({ inputs: simple, response });
    } catch (error) {
      return new Response('调用LLM模型时出错: ' + error.message, { status: 500 });
    }

    // 添加CORS头
    const jsonResponse = Response.json(tasks);
    jsonResponse.headers.set('Access-Control-Allow-Origin', '*'); // 允许所有域名访问
    return jsonResponse;
  }
};
