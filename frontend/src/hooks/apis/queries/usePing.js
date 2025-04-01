import { useQuery } from "@tanstack/react-query";
import { pingApi } from "../../../apis/ping.js";

export default function usePing(){
  const { isLoading , isError , error , data } = useQuery({
    queryFn: pingApi,
    queryKey: 'ping',
    staleTime: 10000,

  });

  return {
    isError,
    isLoading,
    error,
    data
  };

}