import React from 'react'
import { FaCodeBranch } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { FaCodeFork } from "react-icons/fa6";
import { FaClone } from "react-icons/fa";
import { formatDate } from '../utils/functions';
import { PROGRAMMING_LANGUAGES } from '../utils/constants';
import toast from 'react-hot-toast';

const Repo = ({repo}) => {
   const formattedDate = formatDate(repo.created_at)

   const handleCloneClick = async(repo) =>{
    try{
      await navigator.clipboard.writeText(repo.clone_url);
      toast.success("Repo is Copied Successfully");
    }catch(error){
      toast.error("Clipboard write Failed!!!");
    }
   }

  return (
   <li className='mb-10 ms-7'>
      <span className='absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white '>
         <FaCodeBranch className='w-5 h-5 text-blue-800'/>
      </span>

      <div className='flex gap-2 items-center flex-wrap'>
          <a
          href={repo.html_url}
          target='_blank'
          rel='nonreferrer'
          className='flex items-center gap-2 text-lg font-semibold'>
            {repo.name}
          </a>

          <span className='bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded-full flex items-center gap-1'>
            <CiStar /> {repo.stargazers_count}
          </span>

          <span className='bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded-full flex items-center gap-1'>
            <FaCodeFork /> {repo.forks_count}
          </span>

          <span className='bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full flex items-center gap-1 cursor-pointer' onClick={() =>handleCloneClick(repo)}>
             <FaClone /> Clone
          </span>
      </div>

      <time className='block my-1 text-xs font-normal leading-none text-gray-400'>
          Released on {formattedDate}
      </time>

      <p>{repo.description ? repo.description.slice(0, 500) :"No Description Provided"}</p>

      {PROGRAMMING_LANGUAGES[repo.language] ? (<img src={PROGRAMMING_LANGUAGES[repo.language]} alt="Programming language Icon" className='h-10'></img>) : null}
      
   </li>
  )
}

export default Repo