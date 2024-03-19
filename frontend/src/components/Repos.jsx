import React from 'react'
import Repo from './Repo';

const Repos=({repos, alwaysFullwidth=false}) => {
  const className = alwaysFullwidth ? 'w-full' : 'lg:w-2/3 w-full ';

  return (
    <div className={`${className} bg-glass rounded-lg px-8 py-6 m-auto`}>
      <ol className='relative border-s border-x-gray-200 '>
         {repos.map(repo =>(
          <Repo key={repo.id} repo={repo}/>
         ))}
      </ol>

      {repos.length ===0 && <p className='flex items-center justify-center h-32'>No Repos Found!!!</p>}
    </div>
  )
}

export default Repos;