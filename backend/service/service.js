import https from 'https';

const fetchData = () => {
    return new Promise((resolve, reject) => {
        https.get('https://jsonplaceholder.typicode.com/posts', (res) => {
            let data = '';

            res.on('data', (chunk) => {
                data += chunk;
            });

            res.on('end', () => {
                try {
                    resolve(JSON.parse(data)); // Parse and return JSON
                } catch (error) {
                    reject(error);
                }
            });
        }).on('error', (err) => {
            reject(err);
        });
    });
};

export default fetchData;