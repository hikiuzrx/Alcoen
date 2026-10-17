interface PageHeaderProps {
  Header: { part1: string; part2: string }
}

export default function PageHeader({ Header }: PageHeaderProps) {
  return (
    <h1 className="flex items-center mt-4">
      <div className="md:w-40 xs:w-24 xs:h-24 md:h-40 inline-block  bg-secondary"></div>
      <div className="md:text-5xl xs:text-3.5xl">
        <p className="text-primary inline-block relative  ml-4 mt-4 m-2 ">
          {Header.part1}
        </p>
        <p className="text-secondary block relative font-semibold ml-4">
          {Header.part2}
        </p>
      </div>
    </h1>
  )
}
