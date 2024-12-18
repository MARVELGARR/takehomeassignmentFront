'use client'


import PropertyCards from "@/components/customComponent/showGlass";
import useProperty from "@/hooks/useProperties";


export default function Home() {

  const {data, isLoading} = useProperty()
  if(isLoading){
    return 'loading'
  }
  return (
    <div className="">
      <main className="px-4 mt-5">    
        <PropertyCards properties={data!}/>
      </main>
    </div>
  );
}
