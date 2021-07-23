import React, {useRef, useState} from 'react';
import Button from '../../common/Button'
import Icon from '../../common/Icon'
import {isBlockActive} from '../../utils/SlateUtilityFunctions'
import usePopup from '../../utils/usePopup'
import {insertEmbed } from '../../utils/embed.js'


const Embed = ({editor,format}) => {
    const urlInputRef = useRef();
    const [showInput,setShowInput] = usePopup(urlInputRef);
    const [formData,setFormData] = useState({
        url:'',
        width:'560',
        height:'315'
    })
    const handleButtonClick = (e)=>{
        e.preventDefault();
        setShowInput(prev =>!prev);
    }
    const handleFormSubmit = (e)=>{
        e.preventDefault();
        insertEmbed(editor, {...formData}, format);
        console.log(editor)
        console.log(formData)
        console.log(format)
        setShowInput(false);
        setFormData({
            url:'',
            width:'560',
            height:'315'
        })
    }
    return (
        <div ref={urlInputRef} className='popup-wrapper'>
            <Button active={isBlockActive(editor,format)} style={{border: showInput?'1px solid lightgray':'',borderBottom: 'none'}}  format={format} onClick={handleButtonClick}>
                <Icon icon={format}/>
            </Button>
            {
                showInput&&
                <div  className='popup'>
                    <form onSubmit={handleFormSubmit}>
                        <input type="text" placeholder='Enter url' value={formData.url} onChange={(e) => setFormData(prev =>({...prev,url:e.target.value}))}/>
                        <input type="text" placeholder='Enter width of frame' value={formData.width} onChange={(e) => setFormData(prev =>({...prev,width:'560'}))} />
                        <input type="text" placeholder='Enter height of frame' value={formData.height} onChange={(e) => setFormData(prev =>({...prev,height:'315'}))} />

                        <Button type='submit'>Save</Button>
                    </form>
                </div>
            }
        </div>
    )
}

export default Embed;