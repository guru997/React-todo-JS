import React from 'react'

function Listitem(props) {
    const items = props.item;
    const listitems = items.map(items =>
        {
        return <div className="list" key={items.key}>
                <input type = "text" id ={items.key} value={items.text} onChange={(text)=>
                {props.setUpdate(text.target.value,items.key)}}/>
                
                <button onClick={()=>props.deleteItem(items.key)}>delete</button>
            </div>
        }
    )
    return (
        <div>
            {listitems}
        </div>
    )
}

export default Listitem
