import AddIcon from '@mui/icons-material/Add';

const Header = ({setIsFormOpen, setIsUpdate}) => {

  const handleFormOpen = () =>{
    setIsFormOpen(true)
    setIsUpdate(false)
  }

  return (
    <div className='flex items-center justify-between px-10 py-2'>
        <h1 className='text-3xl font-bold'>Employee Details</h1>
        <div onClick={handleFormOpen} className="flex items-center bg-slate-700 text-slate-50 px-4 py-2 rounded-lg cursor-pointer">
            <AddIcon />
            <button >Add New Employee</button>
        </div>
    </div>
  )
}

export default Header