import React from 'react'
import { motion } from 'framer-motion';

const Loading = () => {
    const welcome = "Bienvenue sur mon portfolio";
    const lettres = welcome.split("")
  return (
    <div >
        <h1>
            {lettres.map((lettre,index )=>(
                <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                >
                {lettre}
                </motion.span>
            ))}
        </h1>
        
    </div>
  )
}

export default Loading