const crypto = import('crypto');

export default defineEventHandler(async (event) => {
    if (event.req.method == 'POST') {
        
        const form = await readBody(event)
        if (form.slug) {
            const sessionId = getCookie(event, 'sessionId')
            let hash = (await crypto).createHash('md5').update(form.slug).digest("hex").substr(0, 16);
            const key = 'outlink_' + sessionId + '_' + hash
            useStorage('redis').setItem(key, form.watchLinks, {ttl: 1})
        }
    }
})