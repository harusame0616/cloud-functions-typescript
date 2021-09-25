import functions from '@google-cloud/functions-framework';

export const handler : functions.HttpFunction = (_req, res)=>{
    return res.status(200).send('ok');
}
