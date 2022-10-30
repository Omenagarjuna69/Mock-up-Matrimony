
import './index.css'

const HomeProfile =props=>{
    const {list}=props
    const {
    profileId,
    maskedName,
    Age}=list
    return(
            <div className='divEle2'>
                <img className="imageEle" src={profileId} alt="profile"/>
            <p>{maskedName}</p>
            <p>{Age}</p>
            
            </div>
            
            

    )
}

export default HomeProfile
