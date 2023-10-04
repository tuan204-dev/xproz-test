export interface ReasonCardProps {
  id: number
  title: string
  desc: string
}

const ReasonCard: React.FC<ReasonCardProps> = ({ title, desc }) => {
  return (
    <div className="flex flex-col items-center gap-6 w-[316px]">
      <div className="w-40 h-40 rounded-xl bg-[#04304B]"></div>
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-black text-xl font-medium tracking-[1px]">{title}</h2>
        <span className="text-center text-black px-7">{desc}</span>
      </div>
    </div>
  )
}

export default ReasonCard
