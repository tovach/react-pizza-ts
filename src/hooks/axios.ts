import {useEffect, useState} from "react";
import axios, {AxiosError} from "axios";

axios.defaults.baseURL = 'https://my-json-server.typicode.com/tovach/react-pizza-jsonserver/';

const useAxios = <T>(url: string) => {
    const [response, setResponse] = useState<T>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<AxiosError>();

    const fetchData = async () => {
        await axios.get(url)
            .then(r => {
                setResponse(r.data)
                setLoading(false);
            })
            .catch(e => {
                setError(e);
                setLoading(false);
            })
            .finally(() => setLoading(false))
        return;
    }

    useEffect(() => {
        fetchData()
    }, [url]);


    return {response, error, loading};
};

export {useAxios};