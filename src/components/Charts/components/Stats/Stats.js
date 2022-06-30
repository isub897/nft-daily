import React from "react";
import './Stats.css'
import ether from './ether.png';
import '../../../../../node_modules/bootstrap/dist/css/bootstrap-grid.css'


const Stats = ({urlRedirect, list}) => {

    return(
        <div className ="stats mt5">
            <table id="customers">
                <tbody>
                <tr>
                    <th className="left-end"></th>
                    <th>Collection</th>
                    <th>Volume</th>
                    <th>Total Trades</th>
                    <th className="right-end">Floor</th>
                </tr>   
                </tbody>
                <tbody>
                {

                    list.map((item, index) => {
                            return (
                                <tr key = {index} 
                                onClick = {()=> urlRedirect(item.collection_url)}>
                                    <td className="rank">
                                        <img alt="nft" src="" />
                                        <h2 className="pt3 ml4">{index+1}</h2>
                                    </td>
                                    <td>{item.collection_name}</td>
                                    <td>{item.volume}</td>
                                    <td>{item.trades}</td>
                                    <td className= 'floor'>
                                    {item.floor.length > 0
                                        ?<div className="floor-block">
                                            <img className='eth' alt="eth" src={ether} />{item.floor.slice(1)}
                                        </div>
                                        :<div></div>
                                    }
                                        
                                    </td>
                                    
                                </tr>
                            )

                        
                            
                            
                  
                    })
                }
                </tbody>
            </table>
        </div>
    )
}

export default Stats;


// fetch('http://localhost:3000/images', {
//     method: "post",
//     headers: {"Content-Type": "application/json"},
//     body: JSON.stringify({
//         url: item.collection_url
//     })
// })
// .then(response => response.json())
// .then(data => {
//     image=data
//     console.log("inner: ", image)
//     return(<div>hello punkser</div>)

// })