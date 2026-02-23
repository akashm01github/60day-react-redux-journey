import QRCodeGenerator from "./components/QRCodeGenerate/QRCodeGenerator"
import ScrollIndicate from "./components/scroolndicator/ScrollIndicate"

const App = () => {
  return (
    <div>
      {/* <QRCodeGenerator/> */}

      <ScrollIndicate url={`https://dummyjson.com/products?limit=100`}/>
    </div>
  )
}

export default App