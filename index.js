export default {
    async fetch(request, env) {
    const url = new URL(request.url);

    // 1. 处理后端逻辑：实时计数接口
    if (url.pathname === "/api/visit") {
        try {
        // 从 KV 数据库读取
        let count = parseInt(await env.COUNT_DB.get("visitors") || "0");
        count++;
        // 存回 KV 数据库
        await env.COUNT_DB.put("visitors", count.toString());
        
        return new Response(count.toString(), {
            headers: { 
            "Content-Type": "text/plain",
            "Access-Control-Allow-Origin": "*" // 允许跨域访问
            }
        });
        } catch (e) {
        return new Response("Error", { status: 500 });
        }
    }

    // 2. 如果不是 API 请求，就去静态资源里找（html, css, js 文件夹里的东西）
    return env.ASSETS.fetch(request);
    }
};