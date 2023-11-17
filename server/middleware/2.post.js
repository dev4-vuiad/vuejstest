export default defineEventHandler(async (event) => {
    if (event.req.method == 'POST') {
        const form = await readFormData(event)
        event.node.req.headers['Watch-Links'] = form.get('watchLinks')
    }
})