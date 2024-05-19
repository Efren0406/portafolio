function Header() {

    return (
        <>
            <div className='p-6 max-w-md rounded-xl flex items-center space-x-10'>
                <div>
                    <img className="rounded-xl w-full" src="./src/assets/perfil.jpg" alt="Profile Photo" />
                </div>
                <div className="flex justify-start w-full ">
                    <p className='font-bold text-xl text-white'>
                        Hola!, mi nombre es <p className='text-primary'>Efren</p>
                        y soy <p className="text-primary">desarrollador Web</p>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Header