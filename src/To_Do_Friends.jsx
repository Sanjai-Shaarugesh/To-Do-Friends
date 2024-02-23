import React, { useState } from 'react';
import './To-Do.css';
import sample from './assets/color.mp4';

export const To_Do_Friends = () => {
    const [friends, setFriends] = useState([]);
    const [newfriends, setNewfriends] = useState("");

    document.title = 'Sanjai';

    const handleInput = (event) => setNewfriends(event.target.value);

    const Addtasks = () => {
        if (newfriends.trim() !== "") {
            setFriends(t => [...t, newfriends]);
            setNewfriends("");
        }
    };

    const Removetasks = (index) => {
        const updatefriends = friends.filter((_, i) => i !== index);
        setFriends(updatefriends);
    };

    const moveup = (index) => {
        if (index > 0) {
            const updatefriends = [...friends];
            const temp = updatefriends[index];
            updatefriends[index] = updatefriends[index - 1];
            updatefriends[index - 1] = temp;
            setFriends(updatefriends);
        }
    };

    const movedown = (index) => {
        if (index < friends.length - 1) {
            const updatefriends = [...friends];
            const friend = updatefriends[index];
            updatefriends[index] = updatefriends[index + 1];
            updatefriends[index + 1] = friend;
            setFriends(updatefriends);
        }
    };

    return (
        <div className="video-container">
          
            <video className="video-background" autoPlay loop muted>
                <source src={sample} type="video/mp4" />
            </video>
            <div className='to'>
                <div className='top'>
                <h1>To-Do-Friends</h1>
                <input className='input' type="text" value={newfriends} onChange={handleInput} placeholder='Enter your Friend name' />
                <button className='top-button' onClick={Addtasks}>Add</button>
                <ol className='tasks'>
                    {friends.map((task, index) =>
                        <li key={index} className='tasks-li'>
                            <span>{task}</span>
                            <button className="tb1" onClick={() => Removetasks(index)}>Delete</button>
                            <button className='tb2' onClick={() => moveup(index)}>👆</button>
                            <button className="tb2" onClick={() => movedown(index)}>👇</button>
                        </li>
                    )}
                </ol>
            </div></div>
            
        </div>
    );
};

export default To_Do_Friends;
