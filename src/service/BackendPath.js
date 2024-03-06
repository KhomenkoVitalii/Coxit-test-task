const HOST = "https://stoplight.io/mocks/coxit-test/test-api-fe-as/7728212/api/v1/drawings";

const BackendPath = Object.freeze({
    INIT: HOST,
    DOCS: (searchParams) => {
        if (searchParams) {
            return `${HOST}?${searchParams.toString()}`
        } else return HOST;
    }
});

export default BackendPath;