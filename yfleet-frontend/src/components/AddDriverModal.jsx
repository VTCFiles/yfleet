import React, { useContext, useState } from 'react'
import { ModalContext } from '../Appcontext/AppContext'

const AddDriverModal = () => {
    const {isOpen, setIsOpen} = useContext(ModalContext)
    const [next, setNext] = useState(false)
    const handleDriverSubmt =()=>{
      setNext(true)
    }  
    const handleCarSubmt =()=>{
      setNext(false)
      setIsOpen(false)
    }
    return (
      <>
        {isOpen ? (
          <>
            <div
              className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
              <div className="relative my-6 mx-auto w-[95%] md:w-[80%] lg:w-[50%] max-w-3xl h-[80%] lg:h-max overflow-y-auto">
                {/*content*/}
                {!next && <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none ">
                  
                  <div className="flex items-start justify-between px-5 py-3 border-b border-solid border-slate-200 rounded-t">
                    <h3 className="text-xl md:text-3xl font-semibold">
                      Détails personnels
                    </h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>

                  
                  <div className="relative p-6 flex-auto w-full">

                    <form className=''>
                        <div className='flex md:space-x-4 mb-4 flex-col md:flex-row space-y-4 md:space-y-0'>
                            <div className='w-full'>
                                <label htmlFor="nom_de_famille" className='text-sm text-gray-600'>Nom de famille</label>
                                <input name='nom_de_famille' type="text" className='border rounded px-3 py-2 border-gray-200 w-full placeholder:text-sm placeholder:text-gray-300' placeholder='Nom de famille' />
                            </div>
                            <div className='w-full'>
                                <label htmlFor="nom" className='text-sm text-gray-600'>Nom</label>
                                <input name='nom' type="text" className='border rounded px-3 py-2 border-gray-200 w-full placeholder:text-sm placeholder:text-gray-300' placeholder='Nom'  />
                            </div>
                        </div>
                        <div className='flex md:space-x-4 mb-4 flex-col md:flex-row space-y-4 md:space-y-0'>
                            <div className='w-full'>
                                <label htmlFor="telephone" className='text-sm text-gray-600'>Téléphone</label>
                                <input name='telephone' type="text" className='border rounded px-3 py-2 border-gray-200 w-full placeholder:text-sm placeholder:text-gray-300' placeholder='Téléphone'  />
                            </div>
                            <div className='w-full'>
                                <label htmlFor="permis" className='text-sm text-gray-600'>Numéro et série du permis de conduire</label>
                                <input name='permis' type="text" className='border rounded px-3 py-2 border-gray-200 w-full placeholder:text-sm placeholder:text-gray-300'   />
                            </div>
                            

                        </div>
                        <div className='flex md:space-x-4 mb-4 flex-col md:flex-row space-y-4 md:space-y-0'>
                        <div className='w-full'>
                                <label htmlFor="pays" className='text-sm text-gray-600'>Pays de délivrance </label>
                                <select name='pays' className='border rounded px-3 py-2 border-gray-200 w-full placeholder:text-sm placeholder:text-gray-300' >
                                    <option value="Cameroun">Cameroun</option>
                                    <option value="Congo">Congo</option>
                                </select>
                            </div>
                        </div>
                        <div className='flex md:space-x-4 mb-4 flex-col md:flex-row space-y-4 md:space-y-0'>
                            <div className='w-full'>
                                <label htmlFor="delivre_le" className='text-sm text-gray-600'>Délivré le</label>
                                <input name='delivre_le' type="date" className='border rounded px-3 py-2 border-gray-200 w-full placeholder:text-sm placeholder:text-gray-300' placeholder='Délivré le'  />
                            </div>
                            <div className='w-full'>
                                <label htmlFor="expire_le" className='text-sm text-gray-600'>Expire le</label>
                                <input name='expire_le' type="date" className='border rounded px-3 py-2 border-gray-200 w-full placeholder:text-sm placeholder:text-gray-300' placeholder='Expire le'   />
                            </div>
                        </div>
                    </form>

                  </div>



                  
                  <div className="flex items-center justify-end px-6 py-4 border-t border-solid border-slate-200 rounded-b space-x-2">
                    <button
                      className="text-red-500 border border-red-500 rounded background-transparent font-bold uppercase px-6 py-2.5 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setIsOpen(false)}
                    >
                      Annuler
                    </button>
                    <button
                      className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={handleDriverSubmt}
                    >
                      Créer
                    </button>
                  </div>
                </div>}


                {/* Car form */}
                {next && <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none h-[35rem] overflow-y-auto">
                  
                  <div className="flex items-start justify-between px-5 py-3 border-b border-solid border-slate-200 rounded-t">
                    <h3 className="text-xl md:text-3xl font-semibold ">
                      Créer un Véhicule
                    </h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>

                  
                  <div className="relative p-6 flex-auto w-full">

                    <form className=''>
                        <div className='flex md:space-x-4 mb-4 flex-col md:flex-row space-y-4 md:space-y-0'>
                            <div className='w-full'>
                                <label htmlFor="status" className='text-sm text-gray-600'>Status </label>
                                <select name='status' className='border rounded px-3 py-2 border-gray-200 w-full placeholder:text-sm placeholder:text-gray-300' >
                                    <option value="Cameroun">Cameroun</option>
                                    <option value="Congo">Congo</option>
                                </select>
                            </div>
                            <div className='w-full'>
                                <label htmlFor="matriculation" className='text-sm text-gray-600'>Numéro de plaque d'immatriculation</label>
                                <input name='matriculation' type="text" className='border rounded px-3 py-2 border-gray-200 w-full placeholder:text-sm placeholder:text-gray-300' placeholder="Numéro de plaque d'immatriculation"  />
                            </div>
                        </div>

                        <div className='flex md:space-x-4 mb-4 flex-col md:flex-row space-y-4 md:space-y-0'>
                            <div className='w-full'>
                                <label htmlFor="marque" className='text-sm text-gray-600'>Marque </label>
                                <select name='marque' className='border rounded px-3 py-2 border-gray-200 w-full placeholder:text-sm placeholder:text-gray-300' >
                                    <option value="Cameroun">Alfa Romeo</option>
                                    <option value="Congo">Mercedes-Benz</option>
                                    <option value="Congo">Ford</option>
                                    <option value="Congo">Fiat</option>
                                    <option value="Congo">DACIA</option>
                                    <option value="Congo">Citroën</option>
                                    <option value="Congo">Audi</option>
                                </select>
                            </div>
                            <div className='w-full'>
                                <label htmlFor="niv" className='text-sm text-gray-600'>NIV</label>
                                <input name='niv' type="text" className='border rounded px-3 py-2 border-gray-200 w-full placeholder:text-sm placeholder:text-gray-300' placeholder='NIV'  />
                            </div>
                        </div>

                        <div className='flex md:space-x-4 mb-4 flex-col md:flex-row space-y-4 md:space-y-0'>
                            <div className='w-full'>
                                <label htmlFor="model" className='text-sm text-gray-600'>Model </label>
                                <select name='model' className='border rounded px-3 py-2 border-gray-200 w-full placeholder:text-sm placeholder:text-gray-300' >
                                    <option value="Cameroun">Berline</option>
                                    <option value="Congo">Coupé</option>
                                    <option value="Congo">Break</option>
                                    <option value="Congo">Coupé</option>
                                </select>
                            </div>
                            <div className='w-full'>
                                <label htmlFor="chassis" className='text-sm text-gray-600'>Numéro de châssis</label>
                                <input name='chassis' type="text" className='border rounded px-3 py-2 border-gray-200 w-full placeholder:text-sm placeholder:text-gray-300' placeholder='Numéro de châssis'  />
                            </div>
                        </div>

                        <div className='flex md:space-x-4 mb-4 flex-col md:flex-row space-y-4 md:space-y-0'>
                            <div className='w-full'>
                                <label htmlFor="couleur" className='text-sm text-gray-600'>Couleur </label>
                                <select name='couleur' className='border rounded px-3 py-2 border-gray-200 w-full placeholder:text-sm placeholder:text-gray-300' >
                                    <option value="Cameroun">Rouge éclat</option>
                                    <option value="Congo"> Bleu Lune Marine</option>
                                    <option value="Congo">Rouge Passion</option>
                                    <option value="Congo">Blanc Glacier</option>
                                    <option value="Congo">Gris Hurricane</option>
                                    <option value="Congo">Beige Dune</option>
                                    <option value="Congo">ConBrun Cappuccinogo</option>
                                    <option value="Congo">Bleu cosmos</option>
                                </select>
                            </div>
                            <div className='w-full'>
                                <label htmlFor="certificat" className='text-sm text-gray-600'>Certificat d'immatriculation du véhicule</label>
                                <input name='certificat' type="text" className='border rounded px-3 py-2 border-gray-200 w-full placeholder:text-sm placeholder:text-gray-300' placeholder="Certificat d'immatriculation du véhicule"  />
                            </div>
                        </div>

                        <div className='flex md:space-x-4 mb-4 flex-col md:flex-row space-y-4 md:space-y-0'>
                            <div className='w-full'>
                                <label htmlFor="annee" className='text-sm text-gray-600'>Année </label>
                                <input name='annee' type="date" className='border rounded px-3 py-2 border-gray-200 w-full placeholder:text-sm placeholder:text-gray-300' placeholder="Permis"  />
                            </div>
                            <div className='w-full'>
                                <label htmlFor="permis" className='text-sm text-gray-600'>Permis</label>
                                <input name='permis' type="text" className='border rounded px-3 py-2 border-gray-200 w-full placeholder:text-sm placeholder:text-gray-300' placeholder="Permis"  />
                            </div>
                        </div>

                        <div className='flex md:space-x-4 mb-4 flex-col md:flex-row space-y-4 md:space-y-0'>
                            <div className='w-full'>
                                <label htmlFor="permis" className='text-sm text-gray-600'>Options</label>
                                <CustomField />
                            </div>
                            <div className='w-full'>
                                <label htmlFor="permis" className='text-sm text-gray-600'>Catégories</label>
                                <CustomField />
                            </div>
                        </div>
                        
                        
                    </form>

                  </div>



                  
                  <div className="flex items-center justify-end px-6 py-4 border-t border-solid border-slate-200 rounded-b space-x-2">
                    <button
                      className="text-red-500 border border-red-500 rounded background-transparent font-bold uppercase px-6 py-2.5 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setNext(false)}
                    >
                      Précédent
                    </button>
                    <button
                      className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={handleCarSubmt}
                    >
                      Créer
                    </button>
                  </div>
                </div>}


              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black" ></div>
          </>
        ) : null}
      </>
    )
}

function CustomField(){
  const [toggle, setToggle] = useState(false)
  return (
    <div className='relative w-full'>
      <div className='w-full border h-10 rounded pr-2  border-gray-200 flex items-center'>
        <div className='flex-1 h-full  px-2  flex items-center space-x-2'>
            <p className='text-xs font-light bg-neutral-100 w-max px-2 py-1 rounded-lg'><span>text</span> <span className='text-gray-600 cursor-pointer ml-2'>x</span></p>
        </div>
        <div className='flex-none cursor-pointer' onClick={()=> setToggle(!toggle)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
            </svg>
        </div>
      </div>

      <div className={`absolute top-10 left-0 w-full bg-white rounded border-gray-100 transiton-all z-50 duration-500 ${toggle? "h-max px-4 py-2 border" : "h-0 overflow-hidden"}`}>
        <ul className='text-sm text-gray-600 space-y-1'>
          <li>Category</li>
          <li>text</li>
          <li>message</li>
        </ul>
      </div>

    </div>
  )
}

export default AddDriverModal