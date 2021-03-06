import superagent from "superagent";

const RequestManager = (
    url,
    method = "get",
    data = {},
    headers = {},
    successCB,
    errorCB = () => { }
) => {
    return superagent[method](url)
        .send(data)
        .set(headers)
        .end((err, res) => {
            if (err) errorCB(err);
            else successCB(res.body);
        });
};

const apiHost = "https://api.dev.me:7500/";

const ApiHandler = {
    subscribe: (data, successCallBack, errorCallBack) => {
        const url = apiHost + "createSubscription";
        RequestManager(url, "put", data, {}, successCallBack, errorCallBack)
    }
}


export { RequestManager, ApiHandler };
