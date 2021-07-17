// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

    return fetch('https://api.commerce.coinbase.com/checkouts',{
        headers:{
            'X-CC-Api-Key':process.env.COINBASE_API_KEY,
            'X-CC-Version':'2018-03-22'
        }
    }).then(res=>res.json())
    .then(json => res.send(JSON.stringify(json, null, 4)))
    .catch(err=>res.status(400).json(err))
    
}
