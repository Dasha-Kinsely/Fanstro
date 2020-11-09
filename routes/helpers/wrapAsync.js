function wrapAsync(funct) {
    return wrapAsyncInner = (req, res, next) => {
        funct(req, res, next).catch((e)=>{
            next(e);
        });
    };
}

exports.wrapAsync = wrapAsync;