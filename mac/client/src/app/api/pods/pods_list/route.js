
import { NextResponse } from 'next/server'
import { serverApi } from '@/utils/serverFetcher'


export async function GET (){

   function score(pod) {

      const usersScores = pod.users.map((user)=>user.points)
      const podScore = usersScores.reduce(function (x, y) {
      return x + y;
      }, 0);
      

      const updatedPodScore = pod.points = podScore
   // console.log("pod:", pod,"podScore", podScore, "updatedPodScore:",updatedPodScore)
      return pod
  }

   try{
      const response = await serverApi.get(`http://${process.env.API_ENDPOINT_PATH}:${process.env.API_ENDPOINT_PORT}/api/v2/pods`)       

      const pods = await response.data

      const data = await pods.map((pod)=> score(pod))

      return NextResponse.json({ data })

   }catch(error){console.log(error)}
}
