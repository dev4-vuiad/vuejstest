export default defineEventHandler(async (event) => {
    let lastUpdate = await useStorage().getItem('fs:modified')
    let ims = new Date(event.req.headers['if-modified-since'])
    if (ims && !isNaN(ims)) {
        console.log(lastUpdate)
        lastUpdate = new Date(lastUpdate);
        console.log(lastUpdate)
        if (ims.getTime() == 1695111385000) {
            setResponseStatus(event, 304)
        }
    } else {
        event.res.setHeader('last-modified', '2023-09-19T09:09:34')
    }
})