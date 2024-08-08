export default function ServicesHeader(_props:any){
     let header = _props.header
     let bg = _props.bg
     return (<>
        <div className={`relative top-20 mb-10 bg-[url(${bg})]`}>
        <h1 className="flex items-center mt-4">
          <div className="w-40 h-40 inline-block shadow-md shadow-black bg-secondary"></div>
          <div className="">
            <p className="text-primary inline-block relative  ml-4 mt-4 m-2 text-shadow-md">
              {header.part1}
            </p>
            <p className="text-secondary text-shadow-md block relative font-semibold ml-4">
              {header.part2}
            </p>
          </div>
        </h1>
        </div>
     </>)
}