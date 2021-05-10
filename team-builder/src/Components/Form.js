import React from 'react'

export default function Form(props){
    const { teamMembers, handleChange, handleSubmit, teamInfo } = props

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name
                    <input type='text' name='name' value={teamMembers.name} onChange={handleChange}/>
                </label>
                <label>Email
                    <input type='email' name='email' value={teamMembers.email} onChange={handleChange}/>
                </label>
                <label>Role 
                    <select name="role" value={teamMembers.role} onChange={handleChange}>
                        <option value=''>-- Select a Role --</option>
                        <option>Data Scientist</option>
                        <option>UI Designer</option>
                        <option>Front-End Developer</option>
                        <option>Back-End Developer</option>
                    </select>
                </label>
                <button onClick={teamInfo}>Add New Member</button>
            </form>
        </div>
    )
}