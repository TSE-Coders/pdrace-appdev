
import { serverApi } from '@/utils/serverFetcher'

import { NextResponse } from 'next/server'


export async function GET (){

   try {
    const response = await serverApi.get(`http://${process.env.API_ENDPOINT_PATH}:${process.env.API_ENDPOINT_PORT}/api/v2/user/top`)       
   // debugger
      const data = await response.data
    return NextResponse.json({ data })

   }catch(error){console.log(error)}
}
