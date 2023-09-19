export default cachedEventHandler(async (event) => {
    const point = event.context.params.point
    useStorage().setItem('fs:modified', decodeURI(point).replace('T', ' '))
    return 'OK';
});