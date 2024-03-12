
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {


  return (
    <>
      
      <div className='mx-5'>

          <Header></Header>
     <main className='flex'>
         <Blogs></Blogs>
         <Bookmarks></Bookmarks>
      </main>
      </div>
     
    </>
  )
} 

export default App
