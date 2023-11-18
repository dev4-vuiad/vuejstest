const crypto = import('crypto');

export default eventHandler( async (event) => {
    const slug = getRouterParam(event, 'slug')
    const sessionId = getCookie(event, 'sessionId')
    let hash = (await crypto).createHash('md5').update(slug).digest("hex").substr(0, 16)
    const key = 'outlink_' + sessionId + '_' + hash
    const outklink = await useStorage('redis').getItem(key)
    if (outklink && typeof outklink == 'string') {
        return outklink.split(',').filter(v => v.length > 0)
    }

    return []
})