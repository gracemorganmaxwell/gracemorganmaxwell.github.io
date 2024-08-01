import Footer from "src/components/Footer/Footer"
import Navigation from "src/components/Navigation/Navigation"


type BaseLayoutProps = {
  children?: React.ReactNode
}

const BaseLayout = ({ children }: BaseLayoutProps) => {
  return <><>
    <Navigation />
    {children}</><Footer /></>
}

export default BaseLayout
