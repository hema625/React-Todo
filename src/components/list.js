import React from 'react';

const list = ({del,pass}) => {
// console.log(props);
    return(
        <div className = "todos collection">
        {
                pass.length  ? (pass.map(num => {
                return (<div className = "collection-item"  key={num.id}> 
                         <span onClick = {()=>{del(num.id)}}>{num.content} </span> 
                          {/* can use span instead of li */}
                         </div> 
                        )
                    })) : (<p className="center">
                           Completed!!Yay
                    </p>) 
            }   
        </div>
    )
};

export default list;