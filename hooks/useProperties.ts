'use client'
import getProperties from "@/actions/getProperties";
import { useQuery } from "@tanstack/react-query";

const useProperty = () => {

    const {data, error, isLoading} = useQuery({
        queryKey: ["properties"],
        queryFn: ()=>getProperties()
    })

    return {data, error, isLoading};
}
 
export default useProperty;