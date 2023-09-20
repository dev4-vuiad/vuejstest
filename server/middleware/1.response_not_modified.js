export default defineEventHandler(async (event) => {
    let modified = await useStorage().getItem('fs:modified')
    if (modified) {
        let lastModifiedSince = event.req.headers['if-modified-since']
        if (lastModifiedSince) {
            console.log(lastModifiedSince, modified, lastModifiedSince == modified)
            if (lastModifiedSince == modified) {
                setResponseStatus(event, 304)
            } else {
                event.res.setHeader('last-modified', modified)
            }
        } else {
            event.res.setHeader('last-modified', modified)
        }
    }
})