export default cachedEventHandler(async (event) => {
    useStorage().setItem('fs:modified', (new Date()).toGMTString())
    return 'OK';
});