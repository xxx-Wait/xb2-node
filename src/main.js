const express = require('express')
const app = express()
const port = 3000

/**
 * 使用JSON中间件
 */
app.use(express.json())

app.listen(port, () => {
    console.log('服务已启动！');
})

app.get('/', (request, response) => {
    response.send('你好！')
})

const data = [{ id: '1', title: '测试标题', content: '测试内容' }, { id: '2', title: '测试标题', content: '测试内容' }, ]
app.get('/posts', (request, response) => {
    response.send(data)
})

app.get('/posts/:postId', (request, response) => {
    const { postId } = request.params
    const posts = data.filter(item => item.id == postId)
    response.send(posts[0])
})

/**
 * * 创建内容
 */
app.post('/posts', (request, response) => {
    const { content } = request.body
    console.log('content', content);
    // 设置响应状态码
    response.status(201)

    //输出请求头部数据
    console.log(request.headers['user-token']);

    // 设置响应头部数据
    response.set('Sing-Along', 'How I wonder what you are!')
    response.send({
        message: `成功创建了内容：${content}`
    })
})