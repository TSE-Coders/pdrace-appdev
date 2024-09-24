import { NextResponse } from 'next/server'
import { serverApi } from '@/utils/serverFetcher'


export async function POST (request){

   const newPlayer = await request.json()
   
   try {

      const response = await serverApi.post(`http://${process.env.API_ENDPOINT_PATH}:${process.env.API_ENDPOINT_PORT}/api/v2/users`, newPlayer)      

      const data = await response.data


      
      
      return NextResponse.json( {data} )

   }catch(error){console.log(error)}
}
