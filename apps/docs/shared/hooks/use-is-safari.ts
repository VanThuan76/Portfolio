import { useState, useEffect } from 'react';

const useIsSafari = () => {
    const [isSafari, setIsSafari] = useState<boolean>(false);

    useEffect(() => {
        const userAgent = navigator.userAgent;

        const isSafariBrowser =
            /^((?!chrome|android).)*safari/i.test(userAgent);

        setIsSafari(isSafariBrowser);
    }, []);

    return isSafari;
};

export default useIsSafari;
