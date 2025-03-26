import { WidgetsGrid } from "@/components";
const MainPage = () => {
  return (
    <div className="text-black">
      <h1 className="text-3xl mt-3">Dashboard</h1>
      <span className="text-ml">General information</span>
      <WidgetsGrid />
    </div>
  )
}

export default MainPage;