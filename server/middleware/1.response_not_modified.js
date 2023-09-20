export default defineEventHandler(async (event) => {
    let modified = await useStorage().getItem('fs:modified')
    modified = new Date(modified + ' GMT');
    let lastModifiedSince = new Date(event.req.headers['if-modified-since'])
    if (lastModifiedSince && !isNaN(lastModifiedSince) && !isNaN(modified)) {
        if (lastModifiedSince.getTime() == modified.getTime()) {
            event.res.setHeader('last-modified', modified.toGMTString())
            setResponseStatus(event, 304)
            return false
        }
    }

    if (!isNaN(modified)) {
        event.res.setHeader('last-modified', modified.toGMTString())
    }
})