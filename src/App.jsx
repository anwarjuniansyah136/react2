/* eslint-disable react/jsx-key */
import Content from "./Components/Content"
import Header from "./Components/Header"

function App() {
  const result = [
    {
      id : 1,
      name : "KULKAS",
      description : "Pendingin makanan",
      price : 5000000,
      imgUrl : "https://3.bp.blogspot.com/-g-2JwhGen6E/VTqhKfY2SgI/AAAAAAAABpk/r-e-vGLCp9U/s1600/kulkas2%2Bpintu.jpg"
    }
    ,{
      id : 2,
      name : "Televisi",
      description : "Menonton acara",
      price : 1000000,
      imgUrl : "http://4.bp.blogspot.com/-rIhXd6zd8e0/UK7eluzZOxI/AAAAAAAAALY/2j9tbwDsdn4/s1600/IMG_AAE022A.jpg"
    },
    {
      id : 3,
      name : "PS",
      description : "Bermain game",
      price : 700000,
      imgUrl : "https://www.pngall.com/wp-content/uploads/2016/07/PlayStation-PNG-Image-PNG.png"
    },
    {
      id : 4,
      name : "Laptop",
      description : "Bermain game",
      price : 7000000,
      imgUrl : "https://tse3.mm.bing.net/th?id=OIP.2gvZjAYr50JfVemZJCld8QHaFs&pid=Api&P=0&h=180"
    },
    {
      id : 5,
      name : "Handphone",
      description : "Bermain game",
      price : 1500000,
      imgUrl : "https://2.bp.blogspot.com/-x5kxkK7WIOE/VdWNMjk2sHI/AAAAAAAADZc/Y42hiCjFT4U/s1600/ponsel-oppo-mirror-5.jpg"
    },
    {
      id : 6,
      name : "PC",
      description : "Bekerja",
      price : 10000000,
      imgUrl : "https://pngimg.com/uploads/computer_pc/computer_pc_PNG17489.png"
    },
    {
      id : 7,
      name : "Charger Laptop",
      description : "Mengisi Daya Laptop",
      price : 200000,
      imgUrl : "https://i5.walmartimages.com/asr/24834b43-8195-4f6d-ad36-7146b63d4360_1.8035c31d7169edd2a0d74776a10a03e4.jpeg"
    },
    {
      id : 8,
      name : "Charger Handphone",
      description : "Mengisi Daya Handphone",
      price : 70000,
      imgUrl : "https://images.tokopedia.net/blog-tokopedia-com/uploads/2019/04/Blog_Merk-Charger-Smartphone-Terbaik-dengan-Teknologi-Fast-Charging.jpg"
    },
    {
      id : 9,
      name : "Flash Disk",
      description : "Menyimpan File",
      price : 100000,
      imgUrl : "https://1.bp.blogspot.com/-SVFOJpKaf0g/YVfpRWKeDTI/AAAAAAAAAj0/ULGY1xDjUBIuJv_gk1xN4aQVoRgqyshkACNcBGAsYHQ/s1200/flashdisk.jpg"
    },
    {
      id : 10,
      name : "Remote TV",
      description : "Mengatur TV",
      price : 50000,
      imgUrl : "https://tse1.mm.bing.net/th?id=OIP.XkkjSYrmeB0akNl_r7n9nQHaEh&pid=Api&P=0&h=180"
    }
  ]
  return (
    <div>
      <div>
        <Header/>
      </div>
      <div className="flex flex-wrap justify-center bg-blue-400">
        {result.map((items)=>(<Content key={items.id} userProps={items}/>))}
      </div>
    </div>
  )
}

export default App
