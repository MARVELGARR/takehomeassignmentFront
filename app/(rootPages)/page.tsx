'use client'
import FooterComponent from "@/components/customComponent/footer";
import HeaderComponent from "@/components/customComponent/header";
import PropertyCards from "@/components/customComponent/showGlass";
import useProperty from "@/hooks/useProperties";


export default function Home() {

  const {data, isLoading} = useProperty()
  if(isLoading){
    return 'loading'
  }
  return (
    <div className="">
      <HeaderComponent/>
      <main className="px-4 mt-5">
        
        <PropertyCards properties={data!}/>
      </main>
      <FooterComponent/>
    </div>
  );
}
