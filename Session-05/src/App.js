import {Header, Header1, Header2} from './components/Demo'
import { Student } from './components/Student'
import { Topics } from './components/Topics'

function App () {
    return (
        <div>

            {/* Sending Props with dynamic values to child component */}
            
            {/* <Student name="Surendra" age={23} address="Indore" mob={9993945380}/>
            <Student name="Sandhya" age={25} address="Banglore" mob={9993945380}/>
            <Student name="Diksha" age={24} address="Indore" mob={9993945380}/>
            <Student name="Rupali" age={26} address="Indore" mob={9993945380}/>   */}

            <Topics />
        </div>
    )
}

export default App