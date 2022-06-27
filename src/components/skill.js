import './skill.css'
const Skill = () => {
    return ( 
        <div className="skil">
            <p style={{margin:'3%',fontSize:'40px'}}>SKILLSET</p>
            <div className="card">
                <div className="top">
                <div className="it"><img src={require('../img/c++.png')} alt="c++"/>C++</div>
                <div className="it"><img src={require('../img/c.png')} alt="c"/>C</div>
                <div className="it"><img src={require('../img/html.png')} alt="html"/>HTML</div>
                <div className="it"><img src={require('../img/css.png')} alt="css"/>CSS</div>
                <div className="it"><img src={require('../img/js.png')} alt="js"/>JavaScript</div>
                <div className="it"><img src={require('../img/python.png')} alt="python"/>PYTHON</div>
                <div className="it"><img src={require('../img/bootstrap.png')} alt="bootstrap"/>BOOTSTRAP</div>
                </div>
                <div className="top">
                <div className="it"><img src={require('../img/mongo.png')} alt="c"/>MongoDB</div>
                <div className="it"><img src={require('../img/react.png')} alt="react"/>REACT</div>
                <div className="it"><img src={require('../img/angularjs.png')} alt="c++"/>AngularJS</div>
                <div className="it"><img src={require('../img/nodejs.png')} alt="html"/>NodeJS</div>
                <div className="it"><img src={require('../img/expressjs.png')} alt="css"/>Express</div>
                <div className="it"><img src={require('../img/reactn.png')} alt="react-native"/>REACT<br/>NATIVE</div>
                <div className="it"><img src={require('../img/flutter.png')} alt="flutter"/>FLUTTER</div>
                </div>
                <div className="bottom" style={{marginLeft:"20%"}}>
                <div className="it"><img src={require('../img/dart.png')} alt="dart"/>DART</div>
                <div className="it"><img src={require('../img/firebase.png')} alt="fireabse"/>FIREBASE</div>
                <div className="it"><img src={require('../img/androidstudio.png')} alt="androidstudio"/>ANDROID<br/>STUDIO</div>
                <div className="it"><img src={require('../img/vscode.png')} alt="vscode"/>VISUAL<br/>STUDIO</div>
                <div className="it"><img src={require('../img/github.png')} alt="ghub"/>GITHUB</div>
                </div>
            </div>
        </div>
     );
}
 
export default Skill;