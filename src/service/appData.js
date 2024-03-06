import BackendPath from './BackendPath';

export const getAppData = async (token) => {
    try {
        const res = await fetch(BackendPath.INIT, {
            headers: {
                Authorization: token
            }
        });

        if (!res.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await res.json();
        return { status: 'ok', data: data };
    } catch (error) {
        console.error('Error fetching data:', error);
        return { status: 'fail', data: null };
    }
};

export const searchFile = async (token, searchParams) => {
    try {
        const res = await fetch(BackendPath.DOCS(searchParams), {
            headers: {
                Authorization: token
            }
        });

        if (!res.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await res.json();
        return { status: 'ok', data: data };
    } catch (error) {
        console.error('Error fetching data:', error);
        return { status: 'fail', data: null };
    }
};