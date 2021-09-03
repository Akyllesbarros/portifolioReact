import imgeu from "../../Images/eu.jpg"
import "./profile.css"

export default function Profile() {
    return (
        <>
        
            <div className='Profile'>
                
                <div className='imageCircular'>
                    <img src={imgeu} alt="eu" />
                </div>
                <h1><strong>AKYLLES</strong> BARROS</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi placeat nobis similique ea, aliquam nisi nulla distinctio velit voluptatibus nemo fugit illum consequuntur voluptatum nihil, at sed ullam nostrum ex.</p>
            </div>
        </>
    )
}