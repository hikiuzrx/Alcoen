import { useLocation } from "react-router-dom"
export default function PageHeader(_props: any){
     const header:any = _props.Header
     let location = useLocation()
     console.log(location.pathname)
     return(
          <h1 className="flex items-center mt-4">
          <div className="md:w-40 xs:w-24 xs:h-24 md:h-40 inline-block  bg-secondary"></div>
          <div className="md:text-5xl xs:text-4xl">
            <p className="text-primary inline-block relative  ml-4 mt-4 m-2 ">
              {header.part1}
            </p>
            <p className="text-secondary block relative font-semibold ml-4">
              {header.part2}
            </p>
          </div>
        </h1>
     )
    
}