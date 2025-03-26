import { SimpleWidget } from "@/components";

const MainPage = () => {
  return (
    <div className="text-black">
      <h1 className="text-3xl mt-3">Dashboard</h1>
      <span className="text-ml">General information</span>
      <div className="flex flex-wrap p-2 justify-center items-center">
        <SimpleWidget />
      </div>
    </div>
  )
}

export default MainPage;