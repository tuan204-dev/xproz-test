interface ContainerProps {
  children: React.ReactNode
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className="w-[1024px] mx-auto h-full flex-1">{children}</div>
}

export default Container
